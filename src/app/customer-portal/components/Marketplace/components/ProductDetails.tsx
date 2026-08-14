import type { Product } from '../index';

interface ProductDetailsProps {
  product: Product;
  onBuy: () => void;
  onBack: () => void;
}

export default function ProductDetails({ product, onBuy, onBack }: ProductDetailsProps) {
  // Helper to render high quality product illustrations (same SVGs but optimized for Details view)
  const renderDetailsIllustration = (id: string) => {
    switch (id) {
      case 'edge':
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="12" y="16" width="40" height="32" rx="4" />
            <rect x="20" y="24" width="24" height="16" rx="2" strokeDasharray="2,2" />
            <line x1="8" y1="32" x2="12" y2="32" />
            <line x1="52" y1="32" x2="56" y2="32" />
            <circle cx="26" cy="32" r="2" fill="#2adeff" />
            <circle cx="38" cy="32" r="2" fill="#2adeff" />
          </svg>
        );
      case 'large-file-transfer':
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="10" y="16" width="16" height="20" rx="2" />
            <rect x="38" y="28" width="16" height="20" rx="2" />
            <path d="M26 26h12v6H26z" fill="rgba(42,222,255,0.1)" />
            <path d="M38 26l6-6v4M26 32l-6 6v-4" />
            <circle cx="46" cy="38" r="3" />
            <circle cx="18" cy="26" r="3" />
          </svg>
        );
      case 'single-vpn':
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="22" y="28" width="20" height="20" rx="3" />
            <path d="M27 28v-8a5 5 0 0 1 10 0v8" />
            <circle cx="32" cy="38" r="2" fill="#2adeff" />
            <path d="M32 40v3" />
          </svg>
        );
      case 'sdn-mesh':
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <circle cx="32" cy="14" r="5" fill="#2adeff" />
            <circle cx="16" cy="46" r="5" />
            <circle cx="48" cy="46" r="5" />
            <line x1="32" y1="19" x2="16" y2="41" />
            <line x1="32" y1="19" x2="48" y2="41" />
            <line x1="21" y1="46" x2="43" y2="46" />
          </svg>
        );
      case 'ha-gateway':
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="14" y="10" width="36" height="18" rx="2" />
            <rect x="14" y="36" width="36" height="18" rx="2" />
            <circle cx="22" cy="19" r="2" fill="#2adeff" />
            <circle cx="22" cy="45" r="2" fill="#2adeff" />
            <line x1="32" y1="28" x2="32" y2="36" strokeDasharray="3,3" />
          </svg>
        );
      case 'pos-wan':
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="16" y="24" width="32" height="24" rx="3" />
            <line x1="16" y1="38" x2="48" y2="38" />
            <circle cx="24" cy="31" r="2" />
            <circle cx="32" cy="31" r="2" />
            <circle cx="40" cy="31" r="2" />
          </svg>
        );
      case 'construction-modem':
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="20" y="28" width="24" height="26" rx="2" />
            <line x1="32" y1="28" x2="32" y2="12" />
            <circle cx="32" cy="12" r="3" fill="#2adeff" />
          </svg>
        );
      case 'remote-access':
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="14" y="22" width="36" height="22" rx="2" />
            <path d="M10 44h44M32 44v4" />
            <circle cx="32" cy="31" r="3" fill="#2adeff" />
          </svg>
        );
      default:
        return (
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <circle cx="32" cy="32" r="16" />
          </svg>
        );
    }
  };

  return (
    <div className="marketplace-checkout-card">
      <div className="checkout-header">
        <h2 className="checkout-title">Product Details</h2>
        <p className="checkout-subtitle">Learn more about the product features and pricing plans.</p>
      </div>

      <div className="details-content-grid">
        {/* Left Side: Product Illustration */}
        <div className="details-illustration-box">
          {renderDetailsIllustration(product.id)}
        </div>

        {/* Right Side: Info & Features */}
        <div className="details-info-box">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '10px', color: '#2ADEFF', fontWeight: 600, textTransform: 'uppercase' }}>
              {product.category}
            </span>
            <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 600, color: 'var(--portal-text)' }}>
              {product.name}
            </h3>
          </div>

          <p className="details-description">{product.description}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--portal-text-muted)' }}>
              Key Features:
            </span>
            <ul className="details-features-list">
              {product.features.map((feature, idx) => (
                <li key={idx} className="details-feature-item">
                  <svg className="details-feature-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="6.5" stroke="currentColor" />
                    <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#2ADEFF' }}>
              ${product.price}
            </span>
            <span style={{ fontSize: '12px', color: 'var(--portal-text-muted)' }}>
              {product.period}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="checkout-actions-row">
        <button type="button" className="checkout-btn-secondary" onClick={onBack}>
          Back to List
        </button>
        <button type="button" className="checkout-btn-primary" onClick={onBuy}>
          Configure Product
        </button>
      </div>
    </div>
  );
}
