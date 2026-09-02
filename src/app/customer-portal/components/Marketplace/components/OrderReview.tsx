import { useState } from 'react';
import './OrderReview.css';
import type { Product } from '../index';

interface OrderReviewProps {
  product: Product;
  config: Record<string, string>;
  onContinue: () => void;
  onBack: () => void;
}

export default function OrderReview({ product, config, onContinue, onBack }: OrderReviewProps) {
  const [agreed, setAgreed] = useState(false);

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
        <button type="button" className="details-back-arrow-btn" onClick={onBack} aria-label="Go back">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <defs>
              <linearGradient id="backArrowGradReview" x1="10" y1="2" x2="2" y2="18" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0066cc" />
                <stop offset="50%" stopColor="#00a3da" />
                <stop offset="100%" stopColor="#2adeff" />
              </linearGradient>
            </defs>
            <polyline 
              points="10 2 2 10 10 18" 
              stroke="url(#backArrowGradReview)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="details-header-titles">
          <h1 className="details-page-title">Review your order</h1>
          <p className="details-page-subtitle">Please review your selection and pricing details before proceeding.</p>
        </div>
      </div>

      <div className="order-review-container">
        <h3 className="sidebar-title" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0, textAlign: 'left' }}>Your configuration</h3>

      {/* Product Details Header */}
      <div className="order-review-product-header">
        <div className="order-review-product-icon">
          {renderIcon(product.id)}
        </div>
        <div className="order-review-product-info">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
      </div>

      {/* Plan Details Section */}
      <div className="order-review-section">
        <div className="order-review-row">
          <span className="order-review-label">Plan</span>
          <span className="order-review-value">{product.name}</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">Number of sites</span>
          <span className="order-review-value">{sites} sites</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">Billing cycle</span>
          <span className="order-review-value">{billing}</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">Term</span>
          <span className="order-review-value">24 months</span>
        </div>
      </div>

      {/* Additional Packs Section */}
      <div className="order-review-section">
        <div className="order-review-section-heading">Additional packs</div>
        <div className="order-review-row">
          <span className="order-review-label">Security Pack</span>
          <span className="order-review-value">{hasSecurity ? 'Selected' : 'Not selected'}</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">Resilience Pack</span>
          <span className="order-review-value">{hasResilience ? 'Selected' : 'Not selected'}</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">Analytics Pack</span>
          <span className="order-review-value">{hasAnalytics ? 'Selected' : 'Not selected'}</span>
        </div>
      </div>

      {/* Pricing Summary Section */}
      <div className="order-review-section">
        <div className="order-review-section-heading">Pricing summary</div>
        <div className="order-review-row order-review-row--align-start">
          <div className="order-review-detail-desc">
            <span>{product.name}</span>
            <span className="order-review-sub-caption">{formatPrice(baseRate)} x {sites} sites</span>
          </div>
          <span className="order-review-value">{formatPrice(baseTotal)} /month</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">VAT (20%)</span>
          <span className="order-review-value">{formatPrice(vat)} /month</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">Additional Packs</span>
          <span className="order-review-value">
            {addonsTotal > 0 ? `${formatPrice(addonsTotal)} /month` : '–'}
          </span>
        </div>
      </div>

      {/* Totals Section */}
      <div className="order-review-section">
        <div className="order-review-row">
          <span className="order-review-label">Monthly total</span>
          <span className="order-review-value">{formatPrice(totalPrice)} /month</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">Initial payment</span>
          <span className="order-review-value">{formatPrice(totalPrice)} /month</span>
        </div>
        <div className="order-review-row">
          <span className="order-review-label">Next billing date</span>
          <span className="order-review-value">{getNextBillingDate()}</span>
        </div>
      </div>

      {/* Estimated Total */}
      <div className="order-review-total-box">
        <div className="order-review-total-label">Estimated total</div>
        <div className="order-review-total-value">{formatPrice(totalPrice)} /month</div>
        <div className="order-review-total-caption">Billed {billing === 'Monthly' ? 'monthly' : 'annually'}</div>
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="order-review-terms">
        <input 
          type="checkbox" 
          id="termsCheck"
          className="order-review-checkbox" 
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <label htmlFor="termsCheck">
          I agree to the Enigma Net <span className="order-review-terms-link">Terms & Conditions</span>
        </label>
      </div>

      {/* Sidebar Actions */}
      <div className="order-review-actions">
        <button 
          type="button" 
          className="order-review-btn-primary" 
          onClick={onContinue}
          disabled={!agreed}
        >
          Continue
        </button>
        <button 
          type="button" 
          className="order-review-btn-secondary" 
          onClick={onBack}
        >
          Back to configuration
        </button>
      </div>
    </div>
  </div>
  );
}
