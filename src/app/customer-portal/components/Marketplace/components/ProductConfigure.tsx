import { useState } from 'react';
import type { Product } from '../index';
import './ProductConfigure.css';
import CheckoutStepper from './CheckoutStepper';

interface ProductConfigureProps {
  product: Product;
  config: Record<string, string>;
  setConfig: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onContinue: () => void;
  onBack: () => void;
}

// 46x46 Circular GPU Badge Graphic (Matching Figma imgGpuImg)
function GpuIcon46() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <g clipPath="url(#clip_gpu_46)">
        <rect width="46" height="46" rx="23" fill="#0D1B29" />
        <g opacity="0.8" filter="url(#filter0_f_gpu_46)">
          <ellipse cx="58.65" cy="42.7417" rx="57.5" ry="46.575" fill="#152869" />
        </g>
        <g filter="url(#filter1_f_gpu_46)">
          <circle cx="71.875" cy="51.9417" r="46.575" fill="#0D1B29" />
        </g>
        <g filter="url(#filter2_glow_gpu_46)">
          <path
            d="M26.3542 19.6458V21.3229H21.3229C20.4333 21.3229 19.5802 21.6763 18.9512 22.3053C18.3221 22.9344 17.9688 23.7875 17.9688 24.6771V28.0313C17.9688 28.9208 18.3221 29.774 18.9512 30.403C19.5802 31.032 20.4333 31.3854 21.3229 31.3854H29.7083C30.5979 31.3854 31.4511 31.032 32.0801 30.403C32.7091 29.774 33.0625 28.9208 33.0625 28.0313V24.6771C33.0623 24.0885 32.9072 23.5104 32.6128 23.0008C32.3184 22.4911 31.8951 22.0679 31.3854 21.7736V19.9315C32.3663 20.2782 33.2155 20.9206 33.8162 21.77C34.4169 22.6194 34.7395 23.6341 34.7396 24.6745V28.0286C34.7396 29.363 34.2095 30.6427 33.266 31.5863C32.3224 32.5298 31.0427 33.0599 29.7083 33.0599H21.3229C19.9885 33.0599 18.7088 32.5298 17.7653 31.5863C16.8217 30.6427 16.2917 29.363 16.2917 28.0286V24.6771C16.2917 23.3427 16.8217 22.063 17.7653 21.1195C18.7088 20.1759 19.9885 19.6458 21.3229 19.6458H26.3542Z"
            fill="#2ADEFF"
          />
          <path
            d="M19.6458 26.3542V24.6771H24.6771C25.5667 24.6771 26.4198 24.3237 27.0488 23.6947C27.6779 23.0656 28.0313 22.2125 28.0313 21.3229V17.9688C28.0313 17.0792 27.6779 16.226 27.0488 15.597C26.4198 14.968 25.5667 14.6146 24.6771 14.6146H16.2917C15.4021 14.6146 14.5489 14.968 13.9199 15.597C13.2909 16.226 12.9375 17.0792 12.9375 17.9688V21.3229C12.9377 21.9115 13.0928 22.4896 13.3872 22.9992C13.6816 23.5089 14.1049 23.9321 14.6146 24.2264V26.0685C13.6333 25.7216 12.7838 25.0789 12.1831 24.229C11.5823 23.379 11.26 22.3637 11.2604 21.3229V17.9688C11.2604 16.6344 11.7905 15.3547 12.734 14.4111C13.6776 13.4676 14.9573 12.9375 16.2917 12.9375H24.6771C26.0115 12.9375 27.2912 13.4676 28.2347 14.4111C29.1783 15.3547 29.7083 16.6344 29.7083 17.9688V21.3229C29.7083 22.6573 29.1783 23.937 28.2347 24.8806C27.2912 25.8241 26.0115 26.3542 24.6771 26.3542H19.6458Z"
            fill="#2ADEFF"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip_gpu_46">
          <rect width="46" height="46" rx="23" fill="white" />
        </clipPath>
        <filter id="filter0_f_gpu_46" x="-25.6833" y="-30.6667" width="168.667" height="146.817" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="13.4" result="blur" />
        </filter>
        <filter id="filter1_f_gpu_46" x="-1.53333" y="-21.4667" width="146.817" height="146.817" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="13.4" result="blur" />
        </filter>
        <filter id="filter2_glow_gpu_46" x="5.1" y="5.1" width="35.8" height="35.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feBlend mode="normal" in="SourceGraphic" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default function ProductConfigure({
  product,
  config,
  setConfig,
  onContinue,
  onBack
}: ProductConfigureProps) {
  const [agreed, setAgreed] = useState(true);

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
              <GpuIcon46 />
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
              <span className="summary-label" data-node-id="1252:19759">Resilience Pack</span>
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

          {/* Agreement Checkbox (Figma node 852:20275 / 852:20276) */}
          <div className="configure-agreement-row" data-node-id="852:20275">
            <div 
              className={`addon-custom-checkbox ${agreed ? 'addon-custom-checkbox--checked' : ''}`}
              onClick={() => setAgreed(!agreed)}
              style={{ cursor: 'pointer' }}
            >
              {agreed && (
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2.5 6 5 8.5 9.5 3.5" />
                </svg>
              )}
            </div>
            <div className="configure-agreement-text" onClick={() => setAgreed(!agreed)}>
              <span>I agree to the Enigma Net</span>{' '}
              <span className="configure-terms-link">Terms &amp; Conditions</span>
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="sidebar-actions" data-node-id="1252:19794">
            <button 
              type="button" 
              className="sidebar-btn-primary" 
              onClick={onContinue}
              disabled={!agreed}
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

