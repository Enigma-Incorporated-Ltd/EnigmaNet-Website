import type { Product } from '../index';

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
  const sites = parseInt(config.sites || '5', 10);
  const billing = config.billing || 'Monthly';
  const hasSecurity = config.securityPack === 'true';
  const hasResilience = config.resiliencePack === 'true';
  const hasAnalytics = config.analyticsPack === 'true';

  const currency = product.currencySymbol || '$';

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

  // Helper to render high quality product illustrations (same SVGs but optimized for Details view)
  const renderSidebarIllustration = (id: string) => {
    switch (id) {
      case 'esc-lite':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="3" y="3" width="10" height="10" rx="2" />
            <rect x="11" y="11" width="10" height="10" rx="2" fill="rgba(42,222,255,0.2)" />
            <path d="M13 10V11H10V13" />
          </svg>
        );
      case 'edge':
        return (
          <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="12" y="16" width="40" height="32" rx="4" />
            <circle cx="26" cy="32" r="2" fill="#2adeff" />
            <circle cx="38" cy="32" r="2" fill="#2adeff" />
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2adeff" strokeWidth="2">
            <circle cx="12" cy="12" r="8" />
          </svg>
        );
    }
  };

  return (
    <div className="details-layout-container">
      {/* Header Area */}
      <div className="details-header-row">
        <button type="button" className="details-back-arrow-btn" onClick={onBack} aria-label="Go back">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="10 2 2 10 10 18" />
          </svg>
        </button>
        <div className="details-header-titles">
          <h1 className="details-page-title">Configure {product.name}</h1>
          <p className="details-page-subtitle">Customize the specifications of your product deployment.</p>
        </div>
      </div>

      <div className="marketplace-configure-layout">
      {/* Left Column: Form Controls */}
      <div className="marketplace-configure-form">
        {/* Step 1: Number of sites */}
        <div className="configure-step-card">
          <div className="configure-step-info">
            <div className="configure-step-number">01</div>
            <div className="configure-step-text">
              <h3>Number of sites</h3>
              <p>Choose how many sites you want to connect.</p>
            </div>
          </div>
          <div className="configure-step-action-counter">
            <div className="counter-controls">
              <button 
                type="button" 
                className="counter-btn" 
                onClick={() => handleSitesChange(sites - 1)}
                disabled={sites <= 1}
              >
                –
              </button>
              <div className="counter-value">{sites}</div>
              <button 
                type="button" 
                className="counter-btn" 
                onClick={() => handleSitesChange(sites + 1)}
              >
                +
              </button>
            </div>
            <span className="counter-caption">minimum 1 site</span>
          </div>
        </div>

        {/* Step 2: Billing cycle */}
        <div className="configure-step-card">
          <div className="configure-step-info">
            <div className="configure-step-number">02</div>
            <div className="configure-step-text">
              <h3>Billing cycle</h3>
              <p>Choose how often you would like to be billed.</p>
            </div>
          </div>
          <div className="configure-step-action-toggle">
            <div className="toggle-pill-container">
              <button
                type="button"
                className={`toggle-pill-btn ${billing === 'Monthly' ? 'toggle-pill-btn--active' : ''}`}
                onClick={() => handleBillingChange('Monthly')}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`toggle-pill-btn ${billing === 'Annual' ? 'toggle-pill-btn--active' : ''}`}
                onClick={() => handleBillingChange('Annual')}
              >
                Annual
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Additional packs */}
        <div className="configure-step-card configure-step-card--column">
          <div className="configure-step-info" style={{ width: '100%' }}>
            <div className="configure-step-number">03</div>
            <div className="configure-step-text">
              <h3>Additional packs</h3>
              <p>Enhance your service with additional protection, resiliency and insights.</p>
            </div>
          </div>

          <div className="configure-addons-list">
            {/* Security Pack */}
            <div 
              className={`addon-item-card ${hasSecurity ? 'addon-item-card--selected' : ''}`}
              onClick={() => toggleAddon('securityPack')}
            >
              <div className="addon-checkbox-row">
                <div className={`addon-custom-checkbox ${hasSecurity ? 'addon-custom-checkbox--checked' : ''}`}>
                  {hasSecurity && (
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 5l2 2 4-4" />
                    </svg>
                  )}
                </div>
                <div className="addon-meta">
                  <h4>Security Pack</h4>
                  <p>Advanced threat protection and secure access policies.</p>
                </div>
              </div>
              <div className="addon-price">
                <span className="addon-price-pct">12%</span>
                <span className="addon-price-period">/site/month</span>
              </div>
            </div>

            {/* Resilience Pack */}
            <div 
              className={`addon-item-card ${hasResilience ? 'addon-item-card--selected' : ''}`}
              onClick={() => toggleAddon('resiliencePack')}
            >
              <div className="addon-checkbox-row">
                <div className={`addon-custom-checkbox ${hasResilience ? 'addon-custom-checkbox--checked' : ''}`}>
                  {hasResilience && (
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 5l2 2 4-4" />
                    </svg>
                  )}
                </div>
                <div className="addon-meta">
                  <h4>Resilience Pack</h4>
                  <p>Uplift above per site cost with resilience improvements.</p>
                </div>
              </div>
              <div className="addon-price">
                <span className="addon-price-pct">20%</span>
                <span className="addon-price-period">/site/month</span>
              </div>
            </div>

            {/* Analytics Pack */}
            <div 
              className={`addon-item-card ${hasAnalytics ? 'addon-item-card--selected' : ''}`}
              onClick={() => toggleAddon('analyticsPack')}
            >
              <div className="addon-checkbox-row">
                <div className={`addon-custom-checkbox ${hasAnalytics ? 'addon-custom-checkbox--checked' : ''}`}>
                  {hasAnalytics && (
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 5l2 2 4-4" />
                    </svg>
                  )}
                </div>
                <div className="addon-meta">
                  <h4>Analytics Pack</h4>
                  <p>Advanced analytics and visibility into your network.</p>
                </div>
              </div>
              <div className="addon-price">
                <span className="addon-price-pct">10%</span>
                <span className="addon-price-period">/site/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Configuration Sidebar */}
      <div className="marketplace-configure-sidebar">
        <h3 className="sidebar-title">Your configuration</h3>
        
        {/* Product Details Header */}
        <div className="sidebar-product-header">
          <div className="sidebar-product-icon">
            {renderSidebarIllustration(product.id)}
          </div>
          <div className="sidebar-product-info">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        </div>

        {/* Config Summary List */}
        <div className="sidebar-summary-list">
          <div className="summary-row">
            <span className="summary-label">Number of sites</span>
            <span className="summary-value">{sites} sites</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Billing cycle</span>
            <span className="summary-value">{billing}</span>
          </div>
        </div>

        {/* Additional Packs Selected List */}
        <div className="sidebar-summary-list">
          <div className="summary-heading">Additional packs</div>
          <div className="summary-row">
            <span className="summary-label">Security Pack</span>
            <span className="summary-value">{hasSecurity ? 'Selected' : 'Not selected'}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Resilience Pack</span>
            <span className="summary-value">{hasResilience ? 'Selected' : 'Not selected'}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Analytics Pack</span>
            <span className="summary-value">{hasAnalytics ? 'Selected' : 'Not selected'}</span>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div className="sidebar-summary-list">
          <div className="summary-heading">Pricing summary</div>
          <div className="summary-row summary-row--align-start">
            <div className="summary-detail-desc">
              <span>{product.name}</span>
              <span className="summary-sub-caption">{formatPrice(baseRate)} x {sites} sites</span>
            </div>
            <span className="summary-value">{formatPrice(monthlyBaseTotal)} /month</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Additional Packs</span>
            <span className="summary-value">
              {addonsTotal > 0 ? `${formatPrice(addonsTotal)} /month` : '–'}
            </span>
          </div>
        </div>

        {/* Subtotal, VAT, and Estimate */}
        <div className="sidebar-summary-list">
          <div className="summary-row">
            <span className="summary-label">Subtotal</span>
            <span className="summary-value">{formatPrice(subtotal)} /month</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">VAT (20%)</span>
            <span className="summary-value">{formatPrice(vat)} /month</span>
          </div>
        </div>

        {/* Estimated Total */}
        <div className="sidebar-total-section">
          <div className="total-label">Estimated total</div>
          <div className="total-value">{formatPrice(estimatedTotal)} /month</div>
          <div className="total-caption">Billed {billing.toLowerCase()}ly</div>
        </div>

        {/* Sidebar Actions */}
        <div className="sidebar-actions">
          <button 
            type="button" 
            className="sidebar-btn-primary" 
            onClick={onContinue}
          >
            Continue
          </button>
          <button 
            type="button" 
            className="sidebar-btn-secondary" 
            onClick={onBack}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
