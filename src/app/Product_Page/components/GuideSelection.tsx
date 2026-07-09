import { useState } from 'react';
import './guide-selection.css';

type DeploymentType = 'Physical appliance' | 'Virtual machine' | 'Cloud marketplace' | 'Not sure yet';
type ResilienceOption = 'LTE / 5G failover' | 'Dual power' | 'RAIN duplication' | 'Automatic failover' | 'High-availability pair';
type ConnectivityOption = '1 primary + backup' | '2 active WANs' | '3 active WANs' | '4+ active WANs';
type CapacityOption = 'Up to 500 Mbps' | 'Up to 1 Gbps' | '2 Gbps' | 'I need help sizing this';
type SecurityOption = 'Secure DNS' | 'IPS / IDS' | 'NGFW policies' | 'Encrypted tunnels' | 'Zero-trust access policies';
type CommercialOption = 'NaaS' | 'Hardware buy-out' | 'Virtual marketplace' | 'Request a quote';

const GuideSelection = () => {
  // Config state initialized to match Figma design defaults
  const [deployment, setDeployment] = useState<DeploymentType>('Not sure yet');
  const [resilience, setResilience] = useState<ResilienceOption>('Dual power');
  const [connectivity, setConnectivity] = useState<ConnectivityOption>('2 active WANs');
  const [capacity, setCapacity] = useState<CapacityOption>('2 Gbps');
  const [security, setSecurity] = useState<SecurityOption>('Encrypted tunnels');
  const [commercial, setCommercial] = useState<CommercialOption>('Virtual marketplace');
  
  // Interactive site count
  const [siteCount, setSiteCount] = useState<number>(1);

  // Dynamic calculations
  // 1. Tier selection based on Capacity
  let selectedTier = 'EDGE Pro';
  let basePrice = 299;
  let hardwareBase = 999;
  
  if (capacity === 'Up to 500 Mbps') {
    selectedTier = 'EDGE Lite';
    basePrice = 149;
    hardwareBase = 499;
  } else if (capacity === 'Up to 1 Gbps') {
    selectedTier = 'EDGE Pro';
    basePrice = 299;
    hardwareBase = 999;
  } else if (capacity === '2 Gbps') {
    selectedTier = 'EDGE Max';
    basePrice = 599;
    hardwareBase = 1999;
  } else {
    selectedTier = 'EDGE Pro (Recommended)';
    basePrice = 299;
    hardwareBase = 999;
  }

  // 2. Resilience additions
  let resiliencePrice = 0;
  if (resilience === 'LTE / 5G failover') resiliencePrice = 25;
  else if (resilience === 'Dual power') resiliencePrice = 15;
  else if (resilience === 'RAIN duplication') resiliencePrice = 40;
  else if (resilience === 'Automatic failover') resiliencePrice = 20;
  else if (resilience === 'High-availability pair') resiliencePrice = 100;

  // 3. Security additions
  let securityPrice = 0;
  if (security === 'Secure DNS') securityPrice = 10;
  else if (security === 'IPS / IDS') securityPrice = 25;
  else if (security === 'NGFW policies') securityPrice = 30;
  else if (security === 'Encrypted tunnels') securityPrice = 20;
  else if (security === 'Zero-trust access policies') securityPrice = 45;

  // 4. Commercial adjustment
  let commercialDiscount = 1;
  if (commercial === 'Hardware buy-out') {
    commercialDiscount = 0.9; // 10% discount on subscription for hardware buyout
  }

  // Final price totals
  const monthlyCostPerSite = Math.round((basePrice + resiliencePrice + securityPrice) * commercialDiscount);
  const totalMonthlyCost = monthlyCostPerSite * siteCount;

  // One-off hardware cost
  const oneOffHardwareCost = deployment === 'Physical appliance' ? hardwareBase * siteCount : 0;

  // Savings and lead times
  const estimatedSavings = Math.round(totalMonthlyCost * 0.15); // 15% NAAS savings estimate
  const estimatedLeadTime = deployment === 'Physical appliance' ? '3 - 5 business days' : 'Immediate activation';

  return (
    <section className="guide-section" data-name="guide-radio-selection">
      <h2 className="guide__title">Set your personal guide</h2>

      <div className="guide__grid">
        
        {/* Left Column */}
        <div className="guide__column">
          
          {/* Card 1: Deployment Type */}
          <div className="guide-card" data-name="Guide card">
            <div className="guide-card__inner">
              <h3 className="guide-card__title">Deployment Type</h3>
              <div className="guide-card__content">
                <p className="guide-card__question">What do you want to deploy EDGE?</p>
                <div className="guide-card__options">
                  {(['Physical appliance', 'Virtual machine', 'Cloud marketplace', 'Not sure yet'] as DeploymentType[]).map((opt) => (
                    <label className="guide-option-label" key={opt}>
                      <input 
                        type="radio" 
                        name="deployment" 
                        checked={deployment === opt}
                        onChange={() => setDeployment(opt)}
                      />
                      <div className="guide-radio-circle">
                        <div className="guide-radio-circle__dot" />
                      </div>
                      <span className="guide-option-text">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Resilience */}
          <div className="guide-card" data-name="Guide card">
            <div className="guide-card__inner">
              <h3 className="guide-card__title">Resilience</h3>
              <div className="guide-card__content">
                <p className="guide-card__question">What resilience options do you need?</p>
                <div className="guide-card__options">
                  {(['LTE / 5G failover', 'Dual power', 'RAIN duplication', 'Automatic failover', 'High-availability pair'] as ResilienceOption[]).map((opt) => (
                    <label className="guide-option-label" key={opt}>
                      <input 
                        type="radio" 
                        name="resilience" 
                        checked={resilience === opt}
                        onChange={() => setResilience(opt)}
                      />
                      <div className="guide-radio-circle">
                        <div className="guide-radio-circle__dot" />
                      </div>
                      <span className="guide-option-text">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Connectivity */}
          <div className="guide-card" data-name="Guide card">
            <div className="guide-card__inner">
              <h3 className="guide-card__title">Connectivity</h3>
              <div className="guide-card__content">
                <p className="guide-card__question">How many WAN links will be active</p>
                <div className="guide-card__options">
                  {(['1 primary + backup', '2 active WANs', '3 active WANs', '4+ active WANs'] as ConnectivityOption[]).map((opt) => (
                    <label className="guide-option-label" key={opt}>
                      <input 
                        type="radio" 
                        name="connectivity" 
                        checked={connectivity === opt}
                        onChange={() => setConnectivity(opt)}
                      />
                      <div className="guide-radio-circle">
                        <div className="guide-radio-circle__dot" />
                      </div>
                      <span className="guide-option-text">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="guide__column">

          {/* Card 4: Capacity */}
          <div className="guide-card" data-name="Guide card">
            <div className="guide-card__inner">
              <h3 className="guide-card__title">Capacity</h3>
              <div className="guide-card__content">
                <p className="guide-card__question">What performance level do you need?</p>
                <div className="guide-card__options">
                  {(['Up to 500 Mbps', 'Up to 1 Gbps', '2 Gbps', 'I need help sizing this'] as CapacityOption[]).map((opt) => (
                    <label className="guide-option-label" key={opt}>
                      <input 
                        type="radio" 
                        name="capacity" 
                        checked={capacity === opt}
                        onChange={() => setCapacity(opt)}
                      />
                      <div className="guide-radio-circle">
                        <div className="guide-radio-circle__dot" />
                      </div>
                      <span className="guide-option-text">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Security */}
          <div className="guide-card" data-name="Guide card">
            <div className="guide-card__inner">
              <h3 className="guide-card__title">Security</h3>
              <div className="guide-card__content">
                <p className="guide-card__question">Which security services should be included?</p>
                <div className="guide-card__options">
                  {(['Secure DNS', 'IPS / IDS', 'NGFW policies', 'Encrypted tunnels', 'Zero-trust access policies'] as SecurityOption[]).map((opt) => (
                    <label className="guide-option-label" key={opt}>
                      <input 
                        type="radio" 
                        name="security" 
                        checked={security === opt}
                        onChange={() => setSecurity(opt)}
                      />
                      <div className="guide-radio-circle">
                        <div className="guide-radio-circle__dot" />
                      </div>
                      <span className="guide-option-text">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Commercial Model */}
          <div className="guide-card" data-name="Guide card">
            <div className="guide-card__inner">
              <h3 className="guide-card__title">Commercial Model</h3>
              <div className="guide-card__content">
                <p className="guide-card__question">How would you prefer to buy?</p>
                <div className="guide-card__options">
                  {(['NaaS', 'Hardware buy-out', 'Virtual marketplace', 'Request a quote'] as CommercialOption[]).map((opt) => (
                    <label className="guide-option-label" key={opt}>
                      <input 
                        type="radio" 
                        name="commercial" 
                        checked={commercial === opt}
                        onChange={() => setCommercial(opt)}
                      />
                      <div className="guide-radio-circle">
                        <div className="guide-radio-circle__dot" />
                      </div>
                      <span className="guide-option-text">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Review Card */}
      <div className="guide-review-wrapper">
        <div className="guide-review-card" data-name="Guide card">
          <div className="guide-review-card__inner">
            <h3 className="guide-review-card__title">Review</h3>
            <div className="guide-review-card__content">
              <ul className="guide-review-card__list">
                
                <li className="guide-review-card__item">
                  <span className="guide-review-card__item-text">Selected tier:</span>
                  <span className="guide-review-card__item-value">{selectedTier}</span>
                </li>

                <li className="guide-review-card__item">
                  <span className="guide-review-card__item-text">Site count:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button 
                      onClick={() => setSiteCount((prev) => Math.max(1, prev - 1))}
                      style={{ background: '#2adeff', border: 'none', color: '#000000', borderRadius: '4px', width: '24px', height: '24px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      -
                    </button>
                    <span className="guide-review-card__item-value">{siteCount}</span>
                    <button 
                      onClick={() => setSiteCount((prev) => prev + 1)}
                      style={{ background: '#2adeff', border: 'none', color: '#000000', borderRadius: '4px', width: '24px', height: '24px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      +
                    </button>
                  </div>
                </li>

                <li className="guide-review-card__item">
                  <span className="guide-review-card__item-text">Monthly cost:</span>
                  <span className="guide-review-card__item-value">£ {totalMonthlyCost}/site/mo</span>
                </li>

                <li className="guide-review-card__item">
                  <span className="guide-review-card__item-text">One-off hardware cost, if selected:</span>
                  <span className="guide-review-card__item-value">£ {oneOffHardwareCost}</span>
                </li>

                <li className="guide-review-card__item">
                  <span className="guide-review-card__item-text">Add-ons:</span>
                  <span className="guide-review-card__item-value">{resilience} & {security}</span>
                </li>

                <li className="guide-review-card__item">
                  <span className="guide-review-card__item-text">Estimated savings:</span>
                  <span className="guide-review-card__item-value">£ {estimatedSavings}/mo</span>
                </li>

                <li className="guide-review-card__item">
                  <span className="guide-review-card__item-text">Estimated lead time:</span>
                  <span className="guide-review-card__item-value">{estimatedLeadTime}</span>
                </li>

              </ul>

              <div className="guide-review-card__actions">
                <button className="btn-guide-review btn-guide-review--primary">Checkout</button>
                <button className="btn-guide-review btn-guide-review--secondary">Request quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSelection;
