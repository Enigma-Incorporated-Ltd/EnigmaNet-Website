import { useState, useMemo } from 'react';
import { Card, CardBody, Col, Form, Row, ProgressBar } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

// Pricing data based on the Enigma pricing model (per TB/month for storage, per 1k for API, per GB for retrieval/egress)
const PRICING = {
  aws: {
    s3Standard: {
      name: 'S3 Standard',
      storage: 23.00, // $/TB/month
      putCost: 0.01, // per 1k requests
      listCost: 0.01, // per 1k requests
      retrieval: 0.00, // $/GB
      egress: 0.09, // $/GB
    },
    s3StandardIA: {
      name: 'S3 Standard-IA',
      storage: 12.50,
      putCost: 0.01,
      listCost: 0.01,
      retrieval: 0.01,
      egress: 0.09,
    },
    s3GlacierInstant: {
      name: 'S3 Glacier Instant',
      storage: 4.00,
      putCost: 0.02,
      listCost: 0.02,
      retrieval: 0.03,
      egress: 0.09,
    },
  },
  google: {
    gcpStandard: {
      name: 'GCP Standard',
      storage: 20.00,
      putCost: 0.01,
      listCost: 0.01,
      retrieval: 0.00,
      egress: 0.12,
    },
    gcpNearline: {
      name: 'GCP Nearline',
      storage: 10.00,
      putCost: 0.01,
      listCost: 0.01,
      retrieval: 0.01,
      egress: 0.12,
    },
    gcpColdline: {
      name: 'GCP Coldline',
      storage: 4.00,
      putCost: 0.01,
      listCost: 0.01,
      retrieval: 0.02,
      egress: 0.12,
    },
    gcpArchive: {
      name: 'GCP Archive',
      storage: 1.20,
      putCost: 0.05,
      listCost: 0.05,
      retrieval: 0.05,
      egress: 0.12,
    },
  },
  enigma: {
    payAsYouGo: {
      name: 'Pay As You Go',
      storage: 12.99,
      putCost: 0.00,
      listCost: 0.00,
      retrieval: 0.00,
      egress: 0.00,
    },
    reservedCapacity: {
      name: 'Reserved Capacity',
      storage: 10.99,
      putCost: 0.00,
      listCost: 0.00,
      retrieval: 0.00,
      egress: 0.00,
    },
  },
};

type CompetitorType = 'aws' | 'google';
type CurrencyType = 'USD' | 'GBP' | 'EUR';

// Exchange rates (relative to USD)
const EXCHANGE_RATES: Record<CurrencyType, number> = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.92,
};

const CURRENCY_SYMBOLS: Record<CurrencyType, string> = {
  USD: '$',
  GBP: '£',
  EUR: '€',
};

const CURRENCY_LOCALES: Record<CurrencyType, string> = {
  USD: 'en-US',
  GBP: 'en-GB',
  EUR: 'de-DE',
};

interface TierAllocation {
  tier: string;
  percentage: number;
}

const Calculator = () => {
  // Input state
  const [totalStorage, setTotalStorage] = useState<number>(100); // TB
  const [avgObjectSize, setAvgObjectSize] = useState<number>(1); // MB
  const [monthlyEgressRate, setMonthlyEgressRate] = useState<number>(10); // %
  const [activeRetrievalRate, setActiveRetrievalRate] = useState<number>(20); // %
  const [newDataRate, setNewDataRate] = useState<number>(10); // %
  const [competitor, setCompetitor] = useState<CompetitorType>('aws');
  const [enigmaTier, setEnigmaTier] = useState<'payAsYouGo' | 'reservedCapacity'>('payAsYouGo');
  
  // AWS tier allocation
  const [awsAllocation, setAwsAllocation] = useState<TierAllocation[]>([
    { tier: 's3Standard', percentage: 100 },
    { tier: 's3StandardIA', percentage: 0 },
    { tier: 's3GlacierInstant', percentage: 0 },
  ]);

  // Google tier allocation
  const [googleAllocation, setGoogleAllocation] = useState<TierAllocation[]>([
    { tier: 'gcpStandard', percentage: 100 },
    { tier: 'gcpNearline', percentage: 0 },
    { tier: 'gcpColdline', percentage: 0 },
    { tier: 'gcpArchive', percentage: 0 },
  ]);

  const [calculated, setCalculated] = useState(false);
  const [currency, setCurrency] = useState<CurrencyType>('USD');

  // Calculated metrics
  const calculatedMetrics = useMemo(() => {
    const totalStorageGB = totalStorage * 1024; // Convert TB to GB
    const totalObjectCount = (totalStorageGB * 1024) / avgObjectSize; // Total objects (GB to MB / avg size)
    const monthlyEgressGB = totalStorageGB * (monthlyEgressRate / 100);
    const monthlyRetrievalGB = totalStorageGB * (activeRetrievalRate / 100);
    const monthlyPutRequests = (totalStorageGB * 1024 * (newDataRate / 100)) / avgObjectSize; // New data in MB / avg object size
    const monthlyListRequests = totalObjectCount; // Assume 1 LIST per object per month

    return {
      totalObjectCount,
      monthlyEgressGB,
      monthlyRetrievalGB,
      monthlyPutRequests,
      monthlyListRequests,
    };
  }, [totalStorage, avgObjectSize, monthlyEgressRate, activeRetrievalRate, newDataRate]);

  // Calculate costs for a specific provider tier
  const calculateTierCost = (pricing: typeof PRICING.aws.s3Standard, storageAmount: number) => {
    const { monthlyEgressGB, monthlyRetrievalGB, monthlyPutRequests, monthlyListRequests } = calculatedMetrics;
    
    const storageCost = storageAmount * pricing.storage;
    const apiFees = (monthlyPutRequests / 1000) * pricing.putCost + (monthlyListRequests / 1000) * pricing.listCost;
    const retrievalFees = monthlyRetrievalGB * pricing.retrieval;
    const egressFees = monthlyEgressGB * pricing.egress;

    return {
      storageCost,
      apiFees,
      retrievalFees,
      egressFees,
      monthlyTotal: storageCost + apiFees + retrievalFees + egressFees,
    };
  };

  // Calculate competitor total cost
  const competitorCosts = useMemo(() => {
    const allocation = competitor === 'aws' ? awsAllocation : googleAllocation;
    const pricingData = competitor === 'aws' ? PRICING.aws : PRICING.google;

    let totalStorageCost = 0;
    let totalApiFees = 0;
    let totalRetrievalFees = 0;
    let totalEgressFees = 0;

    allocation.forEach((item: TierAllocation) => {
      const { tier, percentage } = item;
      if (percentage > 0) {
        const storageAmount = totalStorage * (percentage / 100);
        const pricing = pricingData[tier as keyof typeof pricingData];
        const costs = calculateTierCost(pricing, storageAmount);
        
        totalStorageCost += costs.storageCost;
        totalApiFees += costs.apiFees;
        totalRetrievalFees += costs.retrievalFees;
        totalEgressFees += costs.egressFees;
      }
    });

    const monthlyTotal = totalStorageCost + totalApiFees + totalRetrievalFees + totalEgressFees;

    return {
      storageCost: totalStorageCost,
      apiFees: totalApiFees,
      retrievalFees: totalRetrievalFees,
      egressFees: totalEgressFees,
      monthlyTotal,
      annualTotal: monthlyTotal * 12,
    };
  }, [competitor, awsAllocation, googleAllocation, totalStorage, calculatedMetrics]);

  // Calculate Enigma cost
  const enigmaCosts = useMemo(() => {
    const pricing = PRICING.enigma[enigmaTier];
    const costs = calculateTierCost(pricing, totalStorage);

    return {
      ...costs,
      annualTotal: costs.monthlyTotal * 12,
    };
  }, [enigmaTier, totalStorage, calculatedMetrics]);

  // Savings calculation
  const savings = useMemo(() => {
    const monthly = competitorCosts.monthlyTotal - enigmaCosts.monthlyTotal;
    const annual = competitorCosts.annualTotal - enigmaCosts.annualTotal;
    const percentage = competitorCosts.annualTotal > 0 
      ? ((competitorCosts.annualTotal - enigmaCosts.annualTotal) / competitorCosts.annualTotal) * 100 
      : 0;

    return { monthly, annual, percentage };
  }, [competitorCosts, enigmaCosts]);

  const handleAllocationChange = (index: number, value: number, isAws: boolean) => {
    if (isAws) {
      const newAllocation = [...awsAllocation];
      newAllocation[index].percentage = value;
      setAwsAllocation(newAllocation);
    } else {
      const newAllocation = [...googleAllocation];
      newAllocation[index].percentage = value;
      setGoogleAllocation(newAllocation);
    }
  };

  const getTotalAllocation = (): number => {
    const allocation = competitor === 'aws' ? awsAllocation : googleAllocation;
    return allocation.reduce((sum: number, item: TierAllocation) => sum + item.percentage, 0);
  };

  const handleCalculate = () => {
    setCalculated(true);
  };

  const handleReset = () => {
    setTotalStorage(100);
    setAvgObjectSize(1);
    setMonthlyEgressRate(10);
    setActiveRetrievalRate(20);
    setNewDataRate(10);
    setCompetitor('aws');
    setEnigmaTier('payAsYouGo');
    setAwsAllocation([
      { tier: 's3Standard', percentage: 100 },
      { tier: 's3StandardIA', percentage: 0 },
      { tier: 's3GlacierInstant', percentage: 0 },
    ]);
    setGoogleAllocation([
      { tier: 'gcpStandard', percentage: 100 },
      { tier: 'gcpNearline', percentage: 0 },
      { tier: 'gcpColdline', percentage: 0 },
      { tier: 'gcpArchive', percentage: 0 },
    ]);
    setCalculated(false);
  };

  const formatCurrency = (value: number) => {
    const convertedValue = value * EXCHANGE_RATES[currency];
    return new Intl.NumberFormat(CURRENCY_LOCALES[currency], {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(convertedValue);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(value);
  };

  const allocationTotal = getTotalAllocation();
  const isValidAllocation = allocationTotal === 100;

  return (
    <section className="container position-relative zindex-2" style={{ marginTop: '-100px' }}>
      <Row className="g-4">
        {/* Input Form */}
        <Col lg={5}>
          <Card className="shadow-lg border-0">
            <CardBody className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">
                  <IconifyIcon icon="bx:calculator" className="me-2 text-primary" />
                  Configure Your Storage
                </h4>
                {/* Currency Toggle */}
                <div className="btn-group" role="group" aria-label="Currency selection">
                  {(['USD', 'GBP', 'EUR'] as CurrencyType[]).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      className={`btn btn-sm ${currency === curr ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setCurrency(curr)}
                    >
                      {CURRENCY_SYMBOLS[curr]} {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Storage */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">
                  Est. Total Storage Capacity
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="number"
                    value={totalStorage}
                    onChange={(e) => setTotalStorage(Number(e.target.value))}
                    min={1}
                    className="form-control-lg"
                  />
                  <span className="input-group-text">TB</span>
                </div>
              </Form.Group>

              {/* Average Object Size */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">
                  Est. Avg. Object Size
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="number"
                    value={avgObjectSize}
                    onChange={(e) => setAvgObjectSize(Number(e.target.value))}
                    min={0.001}
                    step={0.1}
                    className="form-control-lg"
                  />
                  <span className="input-group-text">MB</span>
                </div>
              </Form.Group>

              {/* Monthly Egress Rate */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">
                  Est. Monthly Data Egress
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="number"
                    value={monthlyEgressRate}
                    onChange={(e) => setMonthlyEgressRate(Number(e.target.value))}
                    min={0}
                    max={100}
                    className="form-control-lg"
                  />
                  <span className="input-group-text">%</span>
                </div>
                <Form.Text className="text-muted">
                  Percentage of data downloaded monthly
                </Form.Text>
              </Form.Group>

              {/* Active Retrieval Rate */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">
                  Est. Active Data Retrieval
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="number"
                    value={activeRetrievalRate}
                    onChange={(e) => setActiveRetrievalRate(Number(e.target.value))}
                    min={0}
                    max={100}
                    className="form-control-lg"
                  />
                  <span className="input-group-text">%</span>
                </div>
                <Form.Text className="text-muted">
                  Percentage of data actively accessed monthly
                </Form.Text>
              </Form.Group>

              {/* New Data Rate */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">
                  Est. New Data Added/Written
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="number"
                    value={newDataRate}
                    onChange={(e) => setNewDataRate(Number(e.target.value))}
                    min={0}
                    max={100}
                    className="form-control-lg"
                  />
                  <span className="input-group-text">%</span>
                </div>
                <Form.Text className="text-muted">
                  Percentage of new data written monthly
                </Form.Text>
              </Form.Group>

              <hr className="my-4" />

              {/* Competitor Selection */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Compare Against</Form.Label>
                <Form.Select
                  value={competitor}
                  onChange={(e) => setCompetitor(e.target.value as CompetitorType)}
                  className="form-select-lg"
                >
                  <option value="aws">Amazon Web Services (AWS)</option>
                  <option value="google">Google Cloud Platform (GCP)</option>
                </Form.Select>
              </Form.Group>

              {/* Tier Allocation - AWS */}
              {competitor === 'aws' && (
                <div className="mb-4">
                  <Form.Label className="fw-semibold d-flex justify-content-between">
                    <span>Storage Tier Allocation</span>
                    <span className={allocationTotal !== 100 ? 'text-danger' : 'text-success'}>
                      {allocationTotal}%
                    </span>
                  </Form.Label>
                  {awsAllocation.map((item, index) => (
                    <div key={item.tier} className="mb-2">
                      <div className="d-flex justify-content-between mb-1">
                        <small>{PRICING.aws[item.tier as keyof typeof PRICING.aws].name}</small>
                        <small>{item.percentage}%</small>
                      </div>
                      <Form.Range
                        value={item.percentage}
                        onChange={(e) => handleAllocationChange(index, Number(e.target.value), true)}
                        min={0}
                        max={100}
                      />
                    </div>
                  ))}
                  {!isValidAllocation && (
                    <small className="text-danger">* Must equal 100%</small>
                  )}
                </div>
              )}

              {/* Tier Allocation - Google */}
              {competitor === 'google' && (
                <div className="mb-4">
                  <Form.Label className="fw-semibold d-flex justify-content-between">
                    <span>Storage Tier Allocation</span>
                    <span className={allocationTotal !== 100 ? 'text-danger' : 'text-success'}>
                      {allocationTotal}%
                    </span>
                  </Form.Label>
                  {googleAllocation.map((item, index) => (
                    <div key={item.tier} className="mb-2">
                      <div className="d-flex justify-content-between mb-1">
                        <small>{PRICING.google[item.tier as keyof typeof PRICING.google].name}</small>
                        <small>{item.percentage}%</small>
                      </div>
                      <Form.Range
                        value={item.percentage}
                        onChange={(e) => handleAllocationChange(index, Number(e.target.value), false)}
                        min={0}
                        max={100}
                      />
                    </div>
                  ))}
                  {!isValidAllocation && (
                    <small className="text-danger">* Must equal 100%</small>
                  )}
                </div>
              )}

              <hr className="my-4" />

              {/* Enigma Tier Selection */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Enigma Secure Cloud Tier</Form.Label>
                <Form.Select
                  value={enigmaTier}
                  onChange={(e) => setEnigmaTier(e.target.value as 'payAsYouGo' | 'reservedCapacity')}
                  className="form-select-lg"
                >
                  <option value="payAsYouGo">Pay As You Go ({CURRENCY_SYMBOLS[currency]}{(12.99 * EXCHANGE_RATES[currency]).toFixed(2)}/TB)</option>
                  <option value="reservedCapacity">Reserved Capacity ({CURRENCY_SYMBOLS[currency]}{(10.99 * EXCHANGE_RATES[currency]).toFixed(2)}/TB)</option>
                </Form.Select>
              </Form.Group>

              {/* Action Buttons */}
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleCalculate}
                  disabled={!isValidAllocation}
                >
                  <IconifyIcon icon="bx:calculator" className="me-2" />
                  Calculate My TCO
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>

        {/* Results */}
        <Col lg={7}>
          {/* TCO Comparison Cards */}
          <Row className="g-4 mb-4">
            <Col md={6}>
              <Card className="shadow-lg border-0 h-100">
                <CardBody className="text-center p-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <IconifyIcon 
                      icon={competitor === 'aws' ? 'bxl:aws' : 'bxl:google-cloud'} 
                      className="text-muted" 
                      style={{ fontSize: '2rem' }}
                    />
                  </div>
                  <h6 className="text-muted mb-2">
                    {competitor === 'aws' ? 'AWS' : 'Google Cloud'} 1 Year TCO
                  </h6>
                  <div className="display-5 fw-bold text-dark mb-2">
                    {calculated ? formatCurrency(competitorCosts.annualTotal) : '$0.00'}
                  </div>
                  {calculated && (
                    <small className="text-muted">
                      {formatCurrency(competitorCosts.monthlyTotal)}/month
                    </small>
                  )}
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-lg border-0 h-100 bg-primary text-white">
                <CardBody className="text-center p-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <IconifyIcon 
                      icon="bx:shield-quarter" 
                      style={{ fontSize: '2rem' }}
                    />
                  </div>
                  <h6 className="opacity-75 mb-2">Enigma Secure Cloud 1 Year TCO</h6>
                  <div className="display-5 fw-bold mb-2">
                    {calculated ? formatCurrency(enigmaCosts.annualTotal) : '$0.00'}
                  </div>
                  {calculated && (
                    <small className="opacity-75">
                      {formatCurrency(enigmaCosts.monthlyTotal)}/month
                    </small>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Savings Highlight */}
          {calculated && savings.annual > 0 && (
            <Card className="shadow-lg border-0 mb-4 bg-success text-white">
              <CardBody className="p-4">
                <Row className="align-items-center">
                  <Col>
                    <h5 className="mb-1">
                      <IconifyIcon icon="bx:check-circle" className="me-2" />
                      Your Annual Savings with Enigma
                    </h5>
                    <small className="opacity-75">
                      That's {savings.percentage.toFixed(1)}% less than {competitor === 'aws' ? 'AWS' : 'Google Cloud'}!
                    </small>
                  </Col>
                  <Col xs="auto">
                    <div className="display-6 fw-bold">
                      {formatCurrency(savings.annual)}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )}

          {/* Cost Breakdown */}
          {calculated && (
            <Card className="shadow-lg border-0">
              <CardBody className="p-4">
                <h5 className="mb-4">
                  <IconifyIcon icon="bx:bar-chart-alt-2" className="me-2 text-primary" />
                  Cost Breakdown Comparison
                </h5>

                {/* Storage Costs */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">Storage Fees</span>
                    <div>
                      <span className="text-muted me-3">
                        {competitor === 'aws' ? 'AWS' : 'GCP'}: {formatCurrency(competitorCosts.storageCost)}
                      </span>
                      <span className="text-primary fw-semibold">
                        Enigma: {formatCurrency(enigmaCosts.storageCost)}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <ProgressBar 
                      now={competitorCosts.storageCost > 0 ? 100 : 0} 
                      className="flex-grow-1" 
                      style={{ height: '8px' }}
                      variant="secondary"
                    />
                    <ProgressBar 
                      now={competitorCosts.storageCost > 0 ? (enigmaCosts.storageCost / competitorCosts.storageCost) * 100 : 0} 
                      className="flex-grow-1" 
                      style={{ height: '8px' }}
                      variant="primary"
                    />
                  </div>
                </div>

                {/* API Fees */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">API Fees (PUT/LIST)</span>
                    <div>
                      <span className="text-muted me-3">
                        {competitor === 'aws' ? 'AWS' : 'GCP'}: {formatCurrency(competitorCosts.apiFees)}
                      </span>
                      <span className="text-primary fw-semibold">
                        Enigma: {formatCurrency(enigmaCosts.apiFees)}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <ProgressBar 
                      now={100} 
                      className="flex-grow-1" 
                      style={{ height: '8px' }}
                      variant="secondary"
                    />
                    <ProgressBar 
                      now={0} 
                      className="flex-grow-1" 
                      style={{ height: '8px' }}
                      variant="primary"
                      label="$0"
                    />
                  </div>
                </div>

                {/* Retrieval Fees */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">Retrieval Fees</span>
                    <div>
                      <span className="text-muted me-3">
                        {competitor === 'aws' ? 'AWS' : 'GCP'}: {formatCurrency(competitorCosts.retrievalFees)}
                      </span>
                      <span className="text-primary fw-semibold">
                        Enigma: {formatCurrency(enigmaCosts.retrievalFees)}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <ProgressBar 
                      now={100} 
                      className="flex-grow-1" 
                      style={{ height: '8px' }}
                      variant="secondary"
                    />
                    <ProgressBar 
                      now={0} 
                      className="flex-grow-1" 
                      style={{ height: '8px' }}
                      variant="primary"
                    />
                  </div>
                </div>

                {/* Egress Fees */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">Egress Fees</span>
                    <div>
                      <span className="text-muted me-3">
                        {competitor === 'aws' ? 'AWS' : 'GCP'}: {formatCurrency(competitorCosts.egressFees)}
                      </span>
                      <span className="text-primary fw-semibold">
                        Enigma: {formatCurrency(enigmaCosts.egressFees)}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <ProgressBar 
                      now={100} 
                      className="flex-grow-1" 
                      style={{ height: '8px' }}
                      variant="secondary"
                    />
                    <ProgressBar 
                      now={0} 
                      className="flex-grow-1" 
                      style={{ height: '8px' }}
                      variant="primary"
                    />
                  </div>
                </div>

                <hr />

                {/* Monthly Total */}
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold fs-5">Monthly Total</span>
                  <div>
                    <span className="text-muted me-3 fs-5">
                      {competitor === 'aws' ? 'AWS' : 'GCP'}: {formatCurrency(competitorCosts.monthlyTotal)}
                    </span>
                    <span className="text-primary fw-bold fs-5">
                      Enigma: {formatCurrency(enigmaCosts.monthlyTotal)}
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Info Card */}
          {!calculated && (
            <Card className="shadow-lg border-0">
              <CardBody className="p-4 text-center">
                <IconifyIcon 
                  icon="bx:info-circle" 
                  className="text-primary mb-3" 
                  style={{ fontSize: '3rem' }}
                />
                <h5>Configure Your Storage Requirements</h5>
                <p className="text-muted mb-0">
                  Enter your storage parameters on the left and click "Calculate My TCO" to see how much you can save with Enigma Secure Cloud.
                </p>
              </CardBody>
            </Card>
          )}

          {/* Calculated Metrics Summary */}
          {calculated && (
            <Card className="shadow-lg border-0 mt-4">
              <CardBody className="p-4">
                <h6 className="mb-3">
                  <IconifyIcon icon="bx:data" className="me-2 text-primary" />
                  Calculated Metrics (Monthly)
                </h6>
                <Row className="g-3">
                  <Col sm={6} md={4}>
                    <div className="bg-light rounded p-3 text-center">
                      <small className="text-muted d-block">Total Objects</small>
                      <strong>{formatNumber(calculatedMetrics.totalObjectCount)}</strong>
                    </div>
                  </Col>
                  <Col sm={6} md={4}>
                    <div className="bg-light rounded p-3 text-center">
                      <small className="text-muted d-block">Egress (GB)</small>
                      <strong>{formatNumber(calculatedMetrics.monthlyEgressGB)}</strong>
                    </div>
                  </Col>
                  <Col sm={6} md={4}>
                    <div className="bg-light rounded p-3 text-center">
                      <small className="text-muted d-block">Retrieval (GB)</small>
                      <strong>{formatNumber(calculatedMetrics.monthlyRetrievalGB)}</strong>
                    </div>
                  </Col>
                  <Col sm={6} md={6}>
                    <div className="bg-light rounded p-3 text-center">
                      <small className="text-muted d-block">PUT Requests</small>
                      <strong>{formatNumber(calculatedMetrics.monthlyPutRequests)}</strong>
                    </div>
                  </Col>
                  <Col sm={6} md={6}>
                    <div className="bg-light rounded p-3 text-center">
                      <small className="text-muted d-block">LIST Requests</small>
                      <strong>{formatNumber(calculatedMetrics.monthlyListRequests)}</strong>
                    </div>
                  </Col>
                </Row>
                <small className="text-muted d-block mt-3">
                  * Billing estimates use base-2 system, estimates may not be exact due to rounding.
                </small>
              </CardBody>
            </Card>
          )}

          {/* Enigma Benefits */}
          <Card className="shadow-lg border-0 mt-4 bg-light">
            <CardBody className="p-4">
              <h6 className="mb-3">
                <IconifyIcon icon="bx:check-shield" className="me-2 text-success" />
                Why Choose Enigma Secure Cloud?
              </h6>
              <Row className="g-3">
                <Col sm={6}>
                  <div className="d-flex align-items-start">
                    <IconifyIcon icon="bx:check" className="text-success me-2 mt-1" />
                    <div>
                      <strong className="d-block">No Egress Fees</strong>
                      <small className="text-muted">Download your data anytime, free</small>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-start">
                    <IconifyIcon icon="bx:check" className="text-success me-2 mt-1" />
                    <div>
                      <strong className="d-block">No API Fees</strong>
                      <small className="text-muted">Unlimited PUT/GET/LIST requests</small>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-start">
                    <IconifyIcon icon="bx:check" className="text-success me-2 mt-1" />
                    <div>
                      <strong className="d-block">No Retrieval Fees</strong>
                      <small className="text-muted">Access your data without penalties</small>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-start">
                    <IconifyIcon icon="bx:check" className="text-success me-2 mt-1" />
                    <div>
                      <strong className="d-block">Predictable Pricing</strong>
                      <small className="text-muted">Simple per-TB pricing model</small>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Calculator;
