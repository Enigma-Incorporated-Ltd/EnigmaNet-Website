import { useState } from 'react';
import type { Product } from '../index';

interface PaymentBillingProps {
  product: Product;
  config: Record<string, string>;
  onContinue: () => void;
  onBack: () => void;
}

export default function PaymentBilling({ product, config, onContinue, onBack }: PaymentBillingProps) {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'klarna'>('card');
  const [form, setForm] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    country: 'United Kingdom',
    postalCode: ''
  });
  const [error, setError] = useState<string | null>(null);

  const sites = parseInt(config.sites || '5', 10);
  const billing = config.billing || 'Monthly';
  const hasSecurity = config.securityPack === 'true';
  const hasResilience = config.resiliencePack === 'true';
  const hasAnalytics = config.analyticsPack === 'true';

  const currency = product.currencySymbol || '$';
  const baseRate = product.price;
  const baseTotal = baseRate * sites;

  // Addons rate percentages
  const securityPct = 0.12;
  const resiliencePct = 0.20;
  const analyticsPct = 0.10;

  // Calculate pack additions
  let addonsTotal = 0;
  if (hasSecurity) addonsTotal += baseTotal * securityPct;
  if (hasResilience) addonsTotal += baseTotal * resiliencePct;
  if (hasAnalytics) addonsTotal += baseTotal * analyticsPct;

  const monthlySubtotal = baseTotal + addonsTotal;
  const billingDiscount = billing === 'Annual' ? 0.90 : 1.0;
  const subtotal = monthlySubtotal * billingDiscount;
  const vat = subtotal * 0.20;
  const totalPrice = subtotal + vat;

  const formatPrice = (amount: number) => {
    return `${currency}${amount.toFixed(2)}`;
  };

  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (paymentMethod === 'card') {
      if (!form.cardNumber || !form.cardExpiry || !form.cardCvc || !form.postalCode) {
        setError('Please fill in all card details.');
        return;
      }
    }

    setLoading(true);

    // Mock processing delay
    setTimeout(() => {
      setLoading(false);
      onContinue();
    }, 1500);
  };

  // Helper to render high quality product illustrations
  const renderIcon = (id: string) => {
    switch (id) {
      case 'esc-lite':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="3" y="3" width="10" height="10" rx="2" />
            <rect x="11" y="11" width="10" height="10" rx="2" fill="rgba(42,222,255,0.2)" />
            <path d="M13 10V11H10V13" />
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

  // Calculate billing dates
  const getNextBillingDate = () => {
    const now = new Date();
    if (billing === 'Annual') {
      now.setFullYear(now.getFullYear() + 1);
    } else {
      now.setMonth(now.getMonth() + 1);
    }
    const day = now.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="details-layout-container">
      {/* Header Area */}
      <div className="details-header-row">
        <button type="button" className="details-back-arrow-btn" onClick={onBack} aria-label="Go back" disabled={loading}>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="10 2 2 10 10 18" />
          </svg>
        </button>
        <div className="details-header-titles">
          <h1 className="details-page-title">Payment & billing</h1>
          <p className="details-page-subtitle">Select a payment method and provide your billing information.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-layout-form">
        {error && (
          <div className="payment-error-toast">
            {error}
          </div>
        )}

        <div className="marketplace-configure-layout">
          {/* Left Column: Payment Methods Selection */}
          <div className="marketplace-configure-form">
            
            {/* Card Payment Card Option */}
            <div 
              className={`payment-method-card ${paymentMethod === 'card' ? 'payment-method-card--selected' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className="payment-method-header-row">
                <div className="payment-method-radio">
                  <div className={`radio-outer ${paymentMethod === 'card' ? 'radio-outer--active' : ''}`}>
                    {paymentMethod === 'card' && <div className="radio-inner" />}
                  </div>
                </div>
                <div className="payment-method-title">
                  {/* Credit Card Icon */}
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="1" width="16" height="12" rx="2" fill="rgba(42,222,255,0.1)" />
                    <line x1="1" y1="5" x2="17" y2="5" strokeWidth="2" />
                    <rect x="3" y="9" width="3" height="2" />
                  </svg>
                  <span>Card</span>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="payment-card-subform" onClick={(e) => e.stopPropagation()}>
                  
                  {/* Card number input */}
                  <div className="payment-field-group">
                    <label className="payment-field-label">Card number</label>
                    <div className="card-number-input-wrapper">
                      <input 
                        type="text" 
                        className="payment-text-input" 
                        placeholder="1234 1234 1234 1234"
                        value={form.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        disabled={loading}
                        maxLength={19}
                      />
                      <div className="card-brand-logos">
                        {/* Mastercard */}
                        <div className="brand-logo-circle brand-logo-circle--mastercard" />
                        {/* Visa */}
                        <div className="brand-logo-circle brand-logo-circle--visa" />
                        {/* Discover */}
                        <div className="brand-logo-circle brand-logo-circle--discover" />
                      </div>
                    </div>
                  </div>

                  {/* Expiry and CVV Row */}
                  <div className="payment-fields-row">
                    <div className="payment-field-group">
                      <label className="payment-field-label">Expiration date</label>
                      <input 
                        type="text" 
                        className="payment-text-input" 
                        placeholder="MM / YY"
                        value={form.cardExpiry}
                        onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                        disabled={loading}
                        maxLength={5}
                      />
                    </div>
                    <div className="payment-field-group">
                      <label className="payment-field-label">Security code</label>
                      <input 
                        type="password" 
                        className="payment-text-input" 
                        placeholder="CVC"
                        value={form.cardCvc}
                        onChange={(e) => handleInputChange('cardCvc', e.target.value)}
                        disabled={loading}
                        maxLength={4}
                      />
                    </div>
                  </div>

                  {/* Country and Postal Code Row */}
                  <div className="payment-fields-row">
                    <div className="payment-field-group">
                      <label className="payment-field-label">Country</label>
                      <div className="country-select-wrapper">
                        <select 
                          className="payment-select-input"
                          value={form.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          disabled={loading}
                        >
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Japan">Japan</option>
                        </select>
                      </div>
                    </div>
                    <div className="payment-field-group">
                      <label className="payment-field-label">Postal Code</label>
                      <input 
                        type="text" 
                        className="payment-text-input" 
                        placeholder="e.g., SW1A 1AA"
                        value={form.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <p className="payment-card-disclaimer">
                    By providing your card information, you allow Enigma Incorporated Ltd to charge your card for future payments in accordance with their terms.
                  </p>
                </div>
              )}
            </div>

            {/* PayPal Payment Option */}
            <div 
              className={`payment-method-card ${paymentMethod === 'paypal' ? 'payment-method-card--selected' : ''}`}
              onClick={() => setPaymentMethod('paypal')}
            >
              <div className="payment-method-header-row">
                <div className="payment-method-radio">
                  <div className={`radio-outer ${paymentMethod === 'paypal' ? 'radio-outer--active' : ''}`}>
                    {paymentMethod === 'paypal' && <div className="radio-inner" />}
                  </div>
                </div>
                <div className="payment-method-title">
                  {/* PayPal Logo style representation */}
                  <span style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#003087', fontSize: '12px' }}>P</span>
                  <span style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#0079C1', fontSize: '12px', marginLeft: '-2px' }}>P</span>
                  <span style={{ marginLeft: '4px' }}>PayPal</span>
                </div>
              </div>

              {paymentMethod === 'paypal' && (
                <div className="payment-redirect-message">
                  You will be redirected to PayPal to complete your purchase authorization.
                </div>
              )}
            </div>

            {/* Klarna Payment Option */}
            <div 
              className={`payment-method-card ${paymentMethod === 'klarna' ? 'payment-method-card--selected' : ''}`}
              onClick={() => setPaymentMethod('klarna')}
            >
              <div className="payment-method-header-row">
                <div className="payment-method-radio">
                  <div className={`radio-outer ${paymentMethod === 'klarna' ? 'radio-outer--active' : ''}`}>
                    {paymentMethod === 'klarna' && <div className="radio-inner" />}
                  </div>
                </div>
                <div className="payment-method-title">
                  <span style={{ background: '#FFB3C7', color: '#0A0A0A', padding: '1px 4px', borderRadius: '3px', fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase' }}>K.</span>
                  <span>Klarna</span>
                </div>
              </div>

              {paymentMethod === 'klarna' && (
                <div className="payment-redirect-message">
                  You will be redirected to Klarna to authorize your pay-later options.
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Your Order Summary Sidebar */}
          <div className="marketplace-configure-sidebar">
            <h3 className="sidebar-title">Your order</h3>
            
            {/* Product Details Header */}
            <div className="sidebar-product-header">
              <div className="sidebar-product-icon">
                {renderIcon(product.id)}
              </div>
              <div className="sidebar-product-info">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
              </div>
            </div>

            {/* Config Summary List */}
            <div className="sidebar-summary-list">
              <div className="summary-row">
                <span className="summary-label">Plan</span>
                <span className="summary-value">{product.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Number of sites</span>
                <span className="summary-value">{sites} sites</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Billing cycle</span>
                <span className="summary-value">{billing}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Term</span>
                <span className="summary-value">24 months</span>
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
                <span className="summary-value">{formatPrice(baseTotal)} /month</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">VAT (20%)</span>
                <span className="summary-value">{formatPrice(vat)} /month</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Additional Packs</span>
                <span className="summary-value">
                  {addonsTotal > 0 ? `${formatPrice(addonsTotal)} /month` : '–'}
                </span>
              </div>
            </div>

            {/* Monthly billing totals */}
            <div className="sidebar-summary-list">
              <div className="summary-row">
                <span className="summary-label">Monthly total</span>
                <span className="summary-value">{formatPrice(totalPrice)} /month</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Initial payment</span>
                <span className="summary-value">{formatPrice(totalPrice)} /month</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Next billing date</span>
                <span className="summary-value">{getNextBillingDate()}</span>
              </div>
            </div>

            {/* Estimated Total */}
            <div className="sidebar-total-section">
              <div className="total-label">Estimated total</div>
              <div className="total-value">{formatPrice(totalPrice)} /month</div>
              <div className="total-caption">Billed {billing.toLowerCase()}ly</div>
            </div>

          </div>
        </div>

        {/* Form Actions Row (Underneath both columns) */}
        <div className="payment-actions-container">
          <button 
            type="submit" 
            className="order-review-btn-primary" 
            disabled={loading}
            style={{ height: '40px' }}
          >
            {loading ? 'Processing Transaction…' : 'Continue'}
          </button>
          <button 
            type="button" 
            className="order-review-btn-secondary" 
            onClick={onBack}
            disabled={loading}
            style={{ height: '40px' }}
          >
            Back to configuration
          </button>
        </div>
      </form>
    </div>
  );
}
