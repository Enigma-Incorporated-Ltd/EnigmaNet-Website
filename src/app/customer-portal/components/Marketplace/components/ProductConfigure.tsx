import { useState } from 'react';
import type { Product } from '../index';
import './ProductConfigure.css';
import CheckoutStepper from './CheckoutStepper';
import epConnection from '@/assets/svgs/ep_connection.svg';

interface ProductConfigureProps {
  product: Product;
  config: Record<string, string>;
  setConfig: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onContinue: () => void;
  onBack: () => void;
}

export default function ProductConfigure({
  product,
  config,
  setConfig,
  onContinue,
  onBack
}: ProductConfigureProps) {
  const [agreed, setAgreed] = useState(true);
  const [agreementError, setAgreementError] = useState(false);

  const sites = parseInt(config.sites || '5', 10);
  const billing = config.billing || 'Monthly';
  const hasSecurity = config.securityPack === 'true';
  const hasResilience = config.resiliencePack === 'true';
  const hasAnalytics = config.analyticsPack === 'true';

  const currency = product.currencySymbol || '£';

  // Base price calculation (dynamic monthly price)
  const baseRate = product.price; 
  const monthlyBaseTotal = baseRate * sites;

  // Addons rate percentages
  const securityPct = 0.12;
  const resiliencePct = 0.20;
  const analyticsPct = 0.10;

  // Calculate pack additions
  let addonsTotal = 0;
  if (hasSecurity) addonsTotal += monthlyBaseTotal * securityPct;
  if (hasResilience) addonsTotal += monthlyBaseTotal * resiliencePct;
  if (hasAnalytics) addonsTotal += monthlyBaseTotal * analyticsPct;

  const monthlySubtotal = monthlyBaseTotal + addonsTotal;
  
  // Apply a 10% discount to the monthly rate if billed annually
  const billingDiscount = billing === 'Annual' ? 0.90 : 1.0;
  const subtotal = monthlySubtotal * billingDiscount;
  const vat = subtotal * 0.20;
  const estimatedTotal = subtotal + vat;

  const handleSitesChange = (val: number) => {
    if (val < 1) return;
    setConfig(prev => ({
      ...prev,
      sites: String(val)
    }));
  };

  const handleBillingChange = (mode: 'Monthly' | 'Annual') => {
    setConfig(prev => ({
      ...prev,
      billing: mode
    }));
  };

  const toggleAddon = (key: 'securityPack' | 'resiliencePack' | 'analyticsPack') => {
    setConfig(prev => ({
      ...prev,
      [key]: prev[key] === 'true' ? 'false' : 'true'
    }));
  };

  const formatPrice = (amount: number) => {
    return `${currency}${amount.toFixed(2)}`;
  };
  const handleToggleAgreed = () => {
    const nextVal = !agreed;
    setAgreed(nextVal);
    if (nextVal) {
      setAgreementError(false);
    }
  };

  const handleContinueClick = () => {
    if (!agreed) {
      setAgreementError(true);
      return;
    }
    setAgreementError(false);
    onContinue();
  };

  return (
    <div className="details-layout-container" data-node-id="1252:19676">
      {/* Header Area */}
      <div className="details-header-row" data-node-id="1252:19111">
        <div className="details-header-left">
          <button type="button" className="details-back-arrow-btn" onClick={onBack} aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="details-header-titles" data-node-id="1252:19113">
            <h1 className="details-page-title" data-node-id="1252:19114">Configure {product.name}</h1>
            <p className="details-page-subtitle" data-node-id="1252:19115">Select your preferences and additional packs the service to your needs.</p>
          </div>
        </div>
      </div>

      {/* 3-Step Progress Indicator (Figma Node 1252:19116) */}
      <CheckoutStepper currentStep="configure" />

      <div className="marketplace-configure-layout" data-node-id="1252:19676">
        {/* Left Column: Form Controls */}
        <div className="marketplace-configure-form" data-node-id="1252:19677">
          {/* Step 1: Number of sites */}
          <div className="configure-step-card" data-node-id="1252:19678">
            <div className="configure-step-info" data-node-id="1252:19679">
              <div className="configure-step-number" data-node-id="1252:19680">01</div>
              <div className="configure-step-text" data-node-id="1252:19682">
                <h3 data-node-id="1252:19683">Number of sites</h3>
                <p data-node-id="1252:19684">Choose how many sites you want to connect.</p>
              </div>
            </div>
            <div className="configure-step-action-counter" data-node-id="1252:19685">
              <div className="counter-controls" data-node-id="1252:19686">
                <button 
                  type="button" 
                  className="counter-btn counter-btn--minus" 
                  onClick={() => handleSitesChange(sites - 1)}
                  disabled={sites <= 1}
                  data-node-id="843:19452"
                >
                  –
                </button>
                <div className="counter-value" data-node-id="1252:19687">{sites}</div>
                <button 
                  type="button" 
                  className="counter-btn counter-btn--plus" 
                  onClick={() => handleSitesChange(sites + 1)}
                  data-node-id="843:19457"
                >
                  +
                </button>
              </div>
              <span className="counter-caption" data-node-id="1252:19691">minimum 1 site</span>
            </div>
          </div>

          {/* Step 2: Billing cycle */}
          <div className="configure-step-card" data-node-id="1252:19692">
            <div className="configure-step-info" data-node-id="1252:19693">
              <div className="configure-step-number" data-node-id="1252:19694">02</div>
              <div className="configure-step-text" data-node-id="1252:19696">
                <h3 data-node-id="1252:19697">Billing cycle</h3>
                <p data-node-id="1252:19698">Choose how often you would like to be billed.</p>
              </div>
            </div>
            <div className="configure-step-action-toggle" data-node-id="1252:19699">
              <div className="toggle-pill-container">
                <button
                  type="button"
                  className={`toggle-pill-btn ${billing === 'Monthly' ? 'toggle-pill-btn--active' : ''}`}
                  onClick={() => handleBillingChange('Monthly')}
                  data-node-id="836:18780"
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className={`toggle-pill-btn ${billing === 'Annual' ? 'toggle-pill-btn--active' : ''}`}
                  onClick={() => handleBillingChange('Annual')}
                  data-node-id="836:18788"
                >
                  Annual
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Additional packs */}
          <div className="configure-step-card configure-step-card--column" data-node-id="1252:19702">
            <div className="configure-step-info-row" data-node-id="1252:19703">
              <div className="configure-step-number" data-node-id="1252:19704">03</div>
              <div className="configure-step-text" data-node-id="1252:19707">
                <h3 data-node-id="1252:19708">Additional packs</h3>
                <p data-node-id="1252:19709">Enhance your service with additional protection, resiliency and insights.</p>
              </div>
            </div>

            <div className="configure-addons-list" data-node-id="1252:19710">
              {/* Security Pack */}
              <div 
                className={`addon-item-card ${hasSecurity ? 'addon-item-card--selected' : ''}`}
                onClick={() => toggleAddon('securityPack')}
                data-node-id="1252:19711"
              >
                <div className="addon-checkbox-row" data-node-id="1252:19712">
                  <div className={`addon-custom-checkbox ${hasSecurity ? 'addon-custom-checkbox--checked' : ''}`}>
                    {hasSecurity && (
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2.5 6 5 8.5 9.5 3.5" />
                      </svg>
                    )}
                  </div>
                  <div className="addon-meta" data-node-id="1252:19714">
                    <h4 data-node-id="1252:19715">Security Pack</h4>
                    <p data-node-id="1252:19716">Advanced threat protection and secure access policies.</p>
                  </div>
                </div>
                <div className="addon-price" data-node-id="1252:19717">
                  <span className="addon-price-pct" data-node-id="1252:19718">12%</span>
                  <span className="addon-price-period" data-node-id="1252:19719">/site/month</span>
                </div>
              </div>

              {/* Resilience Pack */}
              <div 
                className={`addon-item-card ${hasResilience ? 'addon-item-card--selected' : ''}`}
                onClick={() => toggleAddon('resiliencePack')}
                data-node-id="1252:19720"
              >
                <div className="addon-checkbox-row" data-node-id="1252:19721">
                  <div className={`addon-custom-checkbox ${hasResilience ? 'addon-custom-checkbox--checked' : ''}`}>
                    {hasResilience && (
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2.5 6 5 8.5 9.5 3.5" />
                      </svg>
                    )}
                  </div>
                  <div className="addon-meta" data-node-id="1252:19723">
                    <h4 data-node-id="1252:19724">Resilience Pack</h4>
                    <p data-node-id="1252:19725">Uplift above per site cost with resilience improvements.</p>
                  </div>
                </div>
                <div className="addon-price" data-node-id="1252:19726">
                  <span className="addon-price-pct" data-node-id="1252:19727">20%</span>
                  <span className="addon-price-period" data-node-id="1252:19728">/site/month</span>
                </div>
              </div>

              {/* Analytics Pack */}
              <div 
                className={`addon-item-card ${hasAnalytics ? 'addon-item-card--selected' : ''}`}
                onClick={() => toggleAddon('analyticsPack')}
                data-node-id="1252:19729"
              >
                <div className="addon-checkbox-row" data-node-id="1252:19730">
                  <div className={`addon-custom-checkbox ${hasAnalytics ? 'addon-custom-checkbox--checked' : ''}`}>
                    {hasAnalytics && (
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2.5 6 5 8.5 9.5 3.5" />
                      </svg>
                    )}
                  </div>
                  <div className="addon-meta" data-node-id="1252:19732">
                    <h4 data-node-id="1252:19733">Analytics Pack</h4>
                    <p data-node-id="1252:19734">Advanced analytics and visibility into your network.</p>
                  </div>
                </div>
                <div className="addon-price" data-node-id="1252:19735">
                  <span className="addon-price-pct" data-node-id="1252:19736">10%</span>
                  <span className="addon-price-period" data-node-id="1252:19737">/site/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Configuration Sidebar (Figma node 1252:19738) */}
        <div className="marketplace-configure-sidebar" data-node-id="1252:19738">
          <h3 className="sidebar-title" data-node-id="1252:19739">Your configuration</h3>
          
          {/* Product Details Header */}
          <div className="sidebar-product-header" data-node-id="1252:19740">
            <div className="sidebar-product-icon" data-node-id="1252:19741" data-name="gpu img">
              <div className="product-icon-circle-bg">
                <img src={epConnection} alt={product.name || 'Product'} width={33} height={30} />
              </div>
            </div>
            <div className="sidebar-product-info" data-node-id="1252:19742">
              <h4 data-node-id="1252:19743">{product.name}</h4>
              <p data-node-id="1252:19744">{product.description}</p>
            </div>
          </div>

          {/* Config Summary List */}
          <div className="sidebar-summary-list" data-node-id="1252:19745">
            <div className="summary-row" data-node-id="1252:19746">
              <span className="summary-label" data-node-id="1252:19747">Number of sites</span>
              <span className="summary-value" data-node-id="1252:19748">{sites} sites</span>
            </div>
            <div className="summary-row" data-node-id="1252:19749">
              <span className="summary-label" data-node-id="1252:19750">Billing cycle</span>
              <span className="summary-value" data-node-id="1252:19751">{billing}</span>
            </div>
          </div>

          {/* Additional Packs Selected List */}
          <div className="sidebar-summary-list" data-node-id="1252:19752">
            <div className="summary-heading" data-node-id="1252:19754">Additional packs</div>
            <div className="summary-row" data-node-id="1252:19755">
              <span className="summary-label" data-node-id="1252:19756">Security Pack</span>
              <span className="summary-value" data-node-id="1252:19757">{hasSecurity ? 'Selected' : 'Not selected'}</span>
            </div>
            <div className="summary-row" data-node-id="1252:19758">
              <span className="summary-label" data-node-id="1252:19760">Resilience Pack</span>
              <span className="summary-value" data-node-id="1252:19760">{hasResilience ? 'Selected' : 'Not selected'}</span>
            </div>
            <div className="summary-row" data-node-id="1252:19761">
              <span className="summary-label" data-node-id="1252:19763">Analytics Pack</span>
              <span className="summary-value" data-node-id="1252:19764">{hasAnalytics ? 'Selected' : 'Not selected'}</span>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="sidebar-summary-list" data-node-id="1252:19765">
            <div className="summary-heading" data-node-id="1252:19767">Pricing summary</div>
            <div className="summary-row summary-row--align-start" data-node-id="1252:19768">
              <div className="summary-detail-desc" data-node-id="1252:19769">
                <span data-node-id="1252:19770">{product.name}</span>
                <span className="summary-sub-caption" data-node-id="1252:19771">{formatPrice(baseRate)} x {sites} sites</span>
              </div>
              <span className="summary-value" data-node-id="1252:19772">{formatPrice(monthlyBaseTotal)} /month</span>
            </div>
            <div className="summary-row" data-node-id="1252:19773">
              <span className="summary-label" data-node-id="1252:19774">Additional Packs</span>
              <span className="summary-value" data-node-id="1252:19775">
                {addonsTotal > 0 ? `${formatPrice(addonsTotal)} /month` : '–'}
              </span>
            </div>
          </div>

          {/* Subtotal, VAT, and Estimate */}
          <div className="sidebar-summary-list" data-node-id="1252:19776">
            <div className="summary-row" data-node-id="1252:19777">
              <span className="summary-label" data-node-id="1252:19779">Subtotal</span>
              <span className="summary-value" data-node-id="1252:19780">{formatPrice(subtotal)} /month</span>
            </div>
            <div className="summary-row" data-node-id="1252:19781">
              <span className="summary-label" data-node-id="1252:19782">VAT (20%)</span>
              <span className="summary-value" data-node-id="1252:19783">{formatPrice(vat)} /month</span>
            </div>
          </div>

          {/* Estimated Total */}
          <div className="sidebar-total-section" data-node-id="1252:19784">
            <div className="total-label" data-node-id="1252:19787">Estimated total</div>
            <div className="total-value" data-node-id="1252:19790">{formatPrice(estimatedTotal)} /month</div>
            <div className="total-caption" data-node-id="1252:19792">Billed {billing === 'Monthly' ? 'monthly' : 'annually'}</div>
          </div>

          {/* Agreement Checkbox (Figma node 852:20275 / 1252:19642 Error State) */}
          <div 
            className={`configure-agreement-row ${agreementError ? 'configure-agreement-row--error' : ''}`} 
            data-node-id="1252:19642"
          >
            <div 
              className={`addon-custom-checkbox ${agreed ? 'addon-custom-checkbox--checked' : ''} ${agreementError ? 'addon-custom-checkbox--error' : ''}`}
              onClick={handleToggleAgreed}
              style={{ cursor: 'pointer' }}
            >
              {agreed && (
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2.5 6 5 8.5 9.5 3.5" />
                </svg>
              )}
            </div>
            <div className="configure-agreement-text" onClick={handleToggleAgreed}>
              <span>I agree to the Enigma Net</span>{' '}
              <span className="configure-terms-link">Terms &amp; Conditions</span>
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="sidebar-actions" data-node-id="1252:19794">
            <button 
              type="button" 
              className="sidebar-btn-primary" 
              onClick={handleContinueClick}
              data-node-id="1252:19795"
            >
              Continue
            </button>
            <button 
              type="button" 
              className="sidebar-btn-secondary" 
              onClick={onBack}
              data-node-id="1252:19796"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

