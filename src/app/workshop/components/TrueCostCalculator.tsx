import { useState } from 'react';
import { Card, CardBody, Col, Row, Form } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';


const PRICING = {
  aws: {
    name: 'AWS',
    egressPerGB: 0.09,
    storagePerGB: 0.023,
  },
  azure: {
    name: 'Azure',
    egressPerGB: 0.087,
    storagePerGB: 0.0184,
  },
  gcp: {
    name: 'GCP',
    egressPerGB: 0.12,
    storagePerGB: 0.020,
  },
};

type ProviderKey = keyof typeof PRICING;

const TrueCostCalculator = () => {
  const [selectedProvider, setSelectedProvider] = useState<ProviderKey>('aws');
  const [remainingCredits, setRemainingCredits] = useState<number>(0);
  const [currentStorage, setCurrentStorage] = useState<number>(0);
  const [growthRate, setGrowthRate] = useState<number>(0);
  const [additionalComputeCost, setAdditionalComputeCost] = useState<number>(0);
  const [calculated, setCalculated] = useState(false);

  const provider = PRICING[selectedProvider];

  const formatCurrency = (amount: number) => {
    return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleProviderChange = (provider: ProviderKey) => {
    setSelectedProvider(provider);
  };

  const calculateMigration = () => {
    if (remainingCredits === 0 || currentStorage === 0) {
      alert('Please enter your remaining credits and current storage amount.');
      return;
    }
    setCalculated(true);
  };

  const resetCalculator = () => {
    setRemainingCredits(0);
    setCurrentStorage(0);
    setGrowthRate(0);
    setAdditionalComputeCost(0);
    setSelectedProvider('aws');
    setCalculated(false);
  };

  const storageCost = currentStorage * provider.storagePerGB;
  const migrationCostNow = currentStorage * provider.egressPerGB;

  const growthMultiplier = 1 + (growthRate / 100);
  let optimalMigrationMonths = 0;
  let optimalMigrationCost = migrationCostNow;
  let affordableMigrationCost = migrationCostNow;
  let remainingCreditsAfterBurn = remainingCredits;
  let fullyCoveredMonths = 0;
  let daysIntoNextMonth = 0;
  const MAX_MONTHS = 120;

  for (let m = 0; m <= MAX_MONTHS; m++) {
    const dataAtMonth = currentStorage * Math.pow(growthMultiplier, m);
    const monthlyBurn = dataAtMonth * provider.storagePerGB + additionalComputeCost;
    const migrationCostAtMonth = dataAtMonth * provider.egressPerGB;

    if (migrationCostAtMonth <= remainingCreditsAfterBurn) {
      optimalMigrationMonths = m;
      affordableMigrationCost = migrationCostAtMonth;
    }

    if (remainingCreditsAfterBurn >= monthlyBurn) {
      remainingCreditsAfterBurn -= monthlyBurn;
      fullyCoveredMonths += 1;
    } else {
      daysIntoNextMonth = monthlyBurn > 0 ? (remainingCreditsAfterBurn / monthlyBurn) * 30 : 0;
      remainingCreditsAfterBurn = 0;
      break;
    }
  }

  if (fullyCoveredMonths === MAX_MONTHS && remainingCreditsAfterBurn > 0) {
    daysIntoNextMonth = 30;
  }

  const daysUntilExpire = fullyCoveredMonths * 30 + daysIntoNextMonth;
  const monthsUntilExpire = daysUntilExpire / 30;
  optimalMigrationCost = affordableMigrationCost;
  const projectedMigrationCost = optimalMigrationMonths === 0 ? migrationCostNow : optimalMigrationCost;

  const today = new Date();
  const creditExpiryDate = new Date(today.getTime() + daysUntilExpire * 24 * 60 * 60 * 1000);
  const optimalMigrationDate = new Date(today.getTime() + optimalMigrationMonths * 30 * 24 * 60 * 60 * 1000);


  return (
    <>
      <section className="bg-dark py-4" data-bs-theme="dark">
        <div style={{ height: '100px' }}></div>
      </section>
      <section className="container position-relative zindex-2" style={{ marginTop: '-100px' }}>
        <Row className="g-3">
          <Col lg={5}>
            <div className=" audience-wrapper">
              <CardBody className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <IconifyIcon
                    icon="bx:cloud"
                    className="me-2 text-light-blue"
                    style={{ fontSize: '2.5rem' }}
                  />
                  <h4 className="mb-0 d-flex align-items-center justify-content-center gap-2">
                    <IconifyIcon
                      icon="bx:calculator"
                      className=" text-light-blue"
                      style={{ fontSize: '1.5rem' }}
                    />
                    Configure Your Migration
                  </h4>
                </div>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Cloud Provider</Form.Label>
                  <div className="d-flex gap-2 mb-2">
                    {Object.entries(PRICING).map(([key, value]) => (
                      <button
                        key={key}
                        className={`btn ${selectedProvider === key ? 'bg-light-blue text-black' : 'btn-outline-light-blue'}`}
                        onClick={() => handleProviderChange(key as ProviderKey)}
                      >
                        {value.name}
                      </button>
                    ))}
                  </div>
                  <small className="text-muted">
                    Egress: ${provider.egressPerGB}/GB | Storage: ${provider.storagePerGB}/GB/mo
                  </small>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Remaining Credits ($)</Form.Label>
                  <Form.Control
                    type="number"
                    value={remainingCredits || ''}
                    onChange={e => setRemainingCredits(Number(e.target.value))}
                    placeholder="e.g., 25000"
                    min="0"
                    className="form-control-lg"
                  />
                  <small className="text-muted">Your unused cloud credits</small>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Current Monthly Data Storage (GB)</Form.Label>
                  <Form.Control
                    type="number"
                    value={currentStorage || ''}
                    onChange={e => setCurrentStorage(Number(e.target.value))}
                    placeholder="e.g., 500"
                    min="0"
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Monthly Data Growth Rate (%)</Form.Label>
                  <Form.Control
                    type="number"
                    value={growthRate || ''}
                    onChange={e => setGrowthRate(Number(e.target.value))}
                    placeholder="e.g., 10"
                    min="0"
                    step="0.5"
                    className="form-control-lg"
                  />
                </Form.Group>
              </CardBody>
            </div>

            <div className="audience-wrapper my-4">
              <CardBody className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <IconifyIcon
                    icon="bx:detail"
                    className="me-2 text-light-blue"
                    style={{ fontSize: '1.5rem' }}
                  />
                  <h4 className="mb-0">Calculated Migration Costs</h4>
                </div>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Monthly Storage Cost (calculated)</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      {formatCurrency(Math.round(storageCost))}
                    </span>
                    <Form.Control
                      type="number"
                      value={additionalComputeCost || ''}
                      onChange={e => setAdditionalComputeCost(Number(e.target.value))}
                      placeholder="Additional compute costs/mo"
                      min="0"
                      className="form-control-lg"
                    />
                  </div>
                  <small className="text-muted">
                    Storage: ${provider.storagePerGB}/GB/mo x Current Storage
                  </small>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    Egress Cost for Full Migration (calculated)
                  </Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      {formatCurrency(Math.round(projectedMigrationCost))}
                    </span>
                  </div>
                  <small className="text-muted">
                    {optimalMigrationMonths === 0
                      ? 'Egress: $' + provider.egressPerGB + '/GB x Current Storage'
                      : 'Projected egress cost at recommended migration time.'}
                  </small>
                </Form.Group>

                <div className="d-grid gap-2">
                  <button
                    className="btn bg-primary text-black btn-lg"
                    onClick={calculateMigration}
                    disabled={!remainingCredits || !currentStorage}
                  >
                    <IconifyIcon icon="bx:calculator" className="me-2" />
                    Calculate Migration Timeline
                  </button>
                  <button className="btn btn-outline-secondary" onClick={resetCalculator}>
                    Reset
                  </button>
                </div>
              </CardBody>
            </div>
          </Col>

          <Col lg={7}>
            {calculated ? (
              <>
                <Row className="g-3 mb-4 ">
                  <Col md={4}>
                    <div className="audience-wrapper h-100">
                      <CardBody className="text-center p-3">
                        <div
                          className="result-label text-muted text-uppercase mb-2"
                          style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em' }}
                        >
                          Credits Expire In
                        </div>
                        <div
                          className={`result-value ${daysUntilExpire < 30 ? 'text-danger' : daysUntilExpire < 90 ? 'text-warning' : 'text-success'}`}
                          style={{ fontSize: '28px', fontWeight: 700 }}
                        >
                          {daysUntilExpire.toFixed(1)} days
                        </div>
                        <small className="text-muted">
                          Expires on {formatDate(creditExpiryDate)}
                        </small>
                      </CardBody>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="audience-wrapper h-100">
                      <CardBody className="text-center p-3">
                        <div
                          className="result-label text-muted text-uppercase mb-2"
                          style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em' }}
                        >
                          Estimated Migration Cost
                        </div>
                        <div
                          className="result-value text-dark"
                          style={{ fontSize: '28px', fontWeight: 700 }}
                        >
                          {formatCurrency(Math.round(projectedMigrationCost))}
                        </div>
                        <small className="text-muted">
                          Based on projected data at the recommended migration time
                        </small>
                      </CardBody>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="audience-wrapper h-100">
                      <CardBody className="text-center p-3">
                        <div
                          className="result-label text-muted text-uppercase mb-2"
                          style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em' }}
                        >
                          Optimal Migration Date
                        </div>
                        <div
                          className={`result-value flex-grow-1 ${optimalMigrationMonths === 0 ? 'text-danger' : optimalMigrationMonths >= monthsUntilExpire - 1 ? 'text-success' : 'text-warning'}`}
                          style={{ fontSize: '28px', fontWeight: 700 }}
                        >
                          {optimalMigrationMonths === 0
                            ? 'Now'
                            : optimalMigrationMonths >= monthsUntilExpire - 1
                              ? 'Before expiry'
                              : formatDate(optimalMigrationDate)}
                        </div>
                        <small className="text-muted">Migrate before credits expire</small>
                      </CardBody>
                    </div>
                  </Col>
                </Row>

                <Row className="g-4">
                  <Col lg={8}>
                    <Card className="audience-wrapper">
                      <CardBody className="p-4">
                        <h5 className="mb-4">Your Migration Timeline</h5>
                        <div className="border-bottom pb-3">
                          <div className="d-flex gap-3">
                            <div
                              className="timeline-marker"
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: '#001A94',
                                marginTop: '4px',
                                flexShrink: 0,
                              }}
                            ></div>
                            <div>
                              <div className="fw-bold">Today</div>
                              <small className="text-muted">
                                Start planning your migration. Your data is currently{' '}
                                {currentStorage.toLocaleString()} GB.
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="border-bottom py-3">
                          <div className="d-flex gap-3">
                            <div
                              className="timeline-marker"
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: '#e8ecf1',
                                marginTop: '4px',
                                flexShrink: 0,
                              }}
                            ></div>
                            <div>
                              <div className="fw-bold">
                                1 Month (
                                {formatDate(new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000))})
                              </div>
                              <small className="text-muted">
                                Your data will grow to{' '}
                                {Math.round(currentStorage * growthMultiplier).toLocaleString()} GB.
                                Migration cost increases proportionally.
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="border-bottom py-3">
                          <div className="d-flex gap-3">
                            <div
                              className="timeline-marker"
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: '#e8ecf1',
                                marginTop: '4px',
                                flexShrink: 0,
                              }}
                            ></div>
                            <div>
                              <div className="fw-bold">
                                2 Months (
                                {formatDate(new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000))})
                              </div>
                              <small className="text-muted">
                                Data size:{' '}
                                {Math.round(
                                  currentStorage * Math.pow(growthMultiplier, 2)
                                ).toLocaleString()}{' '}
                                GB. Migration cost increases.
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="pt-3">
                          <div className="d-flex gap-3">
                            <div
                              className="timeline-marker"
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: '#e8ecf1',
                                marginTop: '4px',
                                flexShrink: 0,
                              }}
                            ></div>
                            <div>
                              <div className="fw-bold">
                                Credit Expiry ({formatDate(creditExpiryDate)})
                              </div>
                              <small className="text-muted">
                                Your credits expire. Full migration cost applies after this date.
                              </small>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={4} className="mb-3">
                    <Card
                      style={{
                        background: 'linear-gradient(135deg, #001A94 0%, #0033cc 100%)',
                        border: 'none',
                      }}
                      className="shadow-lg border-0 h-100 "
                    >
                      <CardBody className="p-4 text-white">
                        <div
                          className="result-label text-uppercase mb-2"
                          style={{
                            fontSize: '13px',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            color: 'rgba(255,255,255,0.8)',
                          }}
                        >
                          Recommended Action
                        </div>
                        <div
                          className="result-value mb-2"
                          style={{ fontSize: '28px', fontWeight: 700 }}
                        >
                          {optimalMigrationMonths === 0
                            ? 'Migrate Immediately'
                            : optimalMigrationMonths >= 1
                              ? `Migrate in ${optimalMigrationMonths} Month${optimalMigrationMonths > 1 ? 's' : ''}`
                              : 'Migrate Now'}
                        </div>
                        <small style={{ color: 'rgba(255,255,255,0.7)' }}>
                          {optimalMigrationMonths === 0
                            ? "Your migration costs are already covered by your credits. Don't wait - migration costs will grow as your data expands."
                            : optimalMigrationMonths >= 1
                              ? `Migration cost at the recommended migration time: ${formatCurrency(Math.round(optimalMigrationCost))}. Your remaining credits still cover this amount.`
                              : 'Immediate migration recommended to maximize credit utilization.'}
                        </small>
                      </CardBody>
                    </Card>
                  </Col>
                  <div className="col-12 text-center pb-5" style={{ marginTop: '100px' }}>
                    <h5 className="h4 pb-4">
                      Want help interpreting your results? Speak to us and <br />
                      we’ll show you what they mean.
                    </h5>
                    {/* <HeaderTitle
                      className="h4 pb-4"
                      title={
                        <>
                          Want help interpreting your results? Speak to us and <br />
                          we’ll show you what they mean.
                        </>
                      }
                    /> */}
                    <a
                      href="/get-in-touch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyan"
                    >
                      Discuss My Diagnostic Summary
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </Row>
              </>
            ) : (
              <Card className="audience-wrapper">
                <CardBody className="p-5 text-center">
                  <IconifyIcon
                    icon="bx:info-circle"
                    className="text-light-blue mb-3"
                    style={{ fontSize: '3rem' }}
                  />
                  <h4>Enter Your Cloud Details</h4>
                  <p className="text-muted mb-0">
                    Fill in your current cloud usage information to see when you should migrate to
                    take advantage of your remaining credits.
                  </p>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default TrueCostCalculator;