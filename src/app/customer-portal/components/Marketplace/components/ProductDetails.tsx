import { useState } from 'react';
import './ProductDetails.css';
import type { Product } from '../index';

interface ProductDetailsProps {
  product: Product;
  products: Product[];
  onBuy: () => void;
  onBack: () => void;
  onExploreProduct?: (product: Product) => void;
}

export default function ProductDetails({ product, products, onBuy, onBack, onExploreProduct }: ProductDetailsProps) {
  const [quoteStatus, setQuoteStatus] = useState<string | null>(null);

  const currency = product.currencySymbol || '$';

  // Get dynamic badges based on product
  const getBadges = (id: string) => {
    switch (id) {
      case 'esc-lite':
        return [
          { text: 'Up to ~300 Mbps optimised', type: 'speed' },
          { text: 'Secure & reliable', type: 'security' },
          { text: 'Easy to deploy & manage', type: 'deploy' }
        ];
      case 'esc-tenant-base':
        return [
          { text: 'Up to ~500 Mbps optimised', type: 'speed' },
          { text: 'Dedicated tenancy', type: 'security' },
          { text: 'Automated API orchestration', type: 'deploy' }
        ];
      case 'esc-pro':
        return [
          { text: 'Up to ~1 Gbps optimised', type: 'speed' },
          { text: 'High availability failover', type: 'security' },
          { text: 'Complete SDN controller mesh', type: 'deploy' }
        ];
      default:
        return [
          { text: 'High-performance routing', type: 'speed' },
          { text: 'Enterprise-grade encryption', type: 'security' },
          { text: 'Zero-touch deployment', type: 'deploy' }
        ];
    }
  };

  const badges = getBadges(product.id);

  // Render SVG icons for badges
  const renderBadgeIcon = (type: string) => {
    switch (type) {
      case 'speed':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 0 0-10 10h2a8 8 0 0 1 8-8V2z" fill="rgba(42,222,255,0.15)" />
            <path d="M12 4a8 8 0 0 0-8 8h2a6 6 0 0 1 6-6V4z" />
            <path d="M19.07 4.93a10 10 0 0 0-14.14 0l1.41 1.41a8 8 0 0 1 11.32 0l1.41-1.41z" />
            <line x1="12" y1="12" x2="16" y2="8" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        );
      case 'security':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(42,222,255,0.15)" />
            <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'deploy':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16.5 9.4L7.55 4.24a1 1 0 0 0-1 0L2.3 6.7a1 1 0 0 0 0 1.72l9 5.2a1 1 0 0 0 1 0l4.24-2.45v-1.78z" fill="rgba(42,222,255,0.15)" />
            <path d="M2 17l10 5.8 10-5.8M2 12l10 5.8 10-5.8" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="8" />
          </svg>
        );
    }
  };

  // Helper to render high quality product illustrations based on product ID
  const renderDetailedIllustration = (id: string) => {
    switch (id) {
      case 'edge':
      case 'construction-modem':
        return (
          <svg width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
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
          <svg width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="10" y="16" width="16" height="20" rx="2" />
            <rect x="38" y="28" width="16" height="20" rx="2" />
            <path d="M26 26h12v6H26z" fill="rgba(42,222,255,0.1)" />
            <path d="M38 26l6-6v4M26 32l-6 6v-4" />
            <circle cx="46" cy="38" r="3" />
            <circle cx="18" cy="26" r="3" />
          </svg>
        );
      case 'single-vpn':
      case 'esc-lite':
      case 'esc-tenant-base':
      case 'esc-pro':
      case 'remote-access':
        return (
          <svg width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="22" y="28" width="20" height="20" rx="3" />
            <path d="M27 28v-8a5 5 0 0 1 10 0v8" />
            <circle cx="32" cy="38" r="2" fill="#2adeff" />
            <path d="M32 40v3" />
            <path d="M8 20l6-6 6 6" />
          </svg>
        );
      case 'sdn-mesh':
      case 'ha-gateway':
      case 'pos-wan':
        return (
          <svg width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <circle cx="32" cy="14" r="5" fill="#2adeff" />
            <circle cx="16" cy="46" r="5" />
            <circle cx="48" cy="46" r="5" />
            <line x1="32" y1="19" x2="16" y2="41" />
            <line x1="32" y1="19" x2="48" y2="41" />
            <line x1="21" y1="46" x2="43" y2="46" />
            <circle cx="32" cy="34" r="3" fill="#2adeff" />
          </svg>
        );
      case 'esc-storage':
        return (
          <svg width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="16" y="16" width="32" height="32" rx="4" />
            <circle cx="32" cy="32" r="6" />
            <path d="M32 20v6M32 38v6M20 32h6M38 32h6" />
          </svg>
        );
      default:
        return (
          <svg width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <circle cx="32" cy="32" r="16" />
          </svg>
        );
    }
  };

  const handleRequestQuote = () => {
    setQuoteStatus('Processing…');
    setTimeout(() => {
      setQuoteStatus(`Quote request submitted! Reference: ENM-QT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  // Get dynamic family products (filter out current product)
  const familyRecommendations = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 2);

  // Fallback to other products if no items in same category
  const recommendationsToRender = familyRecommendations.length > 0
    ? familyRecommendations
    : products.filter(p => p.id !== product.id).slice(0, 2);

  const hasFamily = familyRecommendations.length > 0;

  return (
    <div className="details-layout-container">
      {/* Header Area */}
      <div className="details-header-row">
        <button type="button" className="details-back-arrow-btn" onClick={onBack} aria-label="Go back to list">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <defs>
              <linearGradient id="backArrowGradDetails" x1="10" y1="2" x2="2" y2="18" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0066cc" />
                <stop offset="50%" stopColor="#00a3da" />
                <stop offset="100%" stopColor="#2adeff" />
              </linearGradient>
            </defs>
            <polyline 
              points="10 2 2 10 10 18" 
              stroke="url(#backArrowGradDetails)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="details-header-titles">
          <h1 className="details-page-title">{product.name}</h1>
          <p className="details-page-subtitle">{product.description}</p>
        </div>
      </div>

      {/* Main Product Card */}
      <div className="details-main-product-card">
        {/* Left Column: Graphic & Badges */}
        <div className="details-card-left">
          <div className="details-graphic-box">
            <div className="details-graphic-inner">
              <div className="details-graphic-glow-1"></div>
              <div className="details-graphic-glow-2"></div>
              <div className="details-graphic-icon-wrapper">
                {renderDetailedIllustration(product.id)}
              </div>
            </div>
          </div>
          
          <div className="details-badge-row">
            {badges.map((badge, idx) => (
              <div key={idx} className="details-badge-item">
                <div className="details-badge-icon">
                  {renderBadgeIcon(badge.type)}
                </div>
                <span className="details-badge-text">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Title, Features & Actions */}
        <div className="details-card-right">
          <div className="details-card-right-header">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>

          {/* Benefits list */}
          <div className="details-card-benefits">
            {product.features.map((feature, idx) => (
              <div key={idx} className="benefit-item">
                <div className="benefit-bullet-dot" />
                <span className="benefit-text">{feature}</span>
              </div>
            ))}
          </div>

          {/* Pricing Info */}
          <div className="details-card-price-section">
            <span className="price-label">Starting from</span>
            <div className="price-value-row">
              <span className="price-amount">{currency}{product.price}</span>
              <span className="price-period">
                {product.period === '/mo' ? '/site /month' : product.period.replace('/', '/')}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="details-card-actions">
            <button type="button" className="details-btn-primary" onClick={onBuy}>
              Add to cart
            </button>
            <button 
              type="button" 
              className="details-btn-secondary" 
              onClick={handleRequestQuote}
              disabled={quoteStatus !== null && quoteStatus.startsWith('Processing')}
            >
              Request a quote
            </button>
          </div>

          {quoteStatus && (
            <div className="quote-status-alert">
              {quoteStatus}
            </div>
          )}
        </div>
      </div>

      {/* Specifications & Terms Grid */}
      <div className="details-meta-specs-grid">
        <div className="details-meta-column">
          <h3>Contract</h3>
          <p>24-month initial term, then 12-month renewal</p>
        </div>

        <div className="details-meta-column">
          <h3>Specifications / Product information</h3>
          <ul className="details-meta-list">
            <li>Throughput</li>
            <li>Deployment</li>
            <li>Billing</li>
            <li>Minimum commitment</li>
            <li>Included services</li>
            <li>Support</li>
            <li>Availability</li>
          </ul>
        </div>

        <div className="details-meta-column">
          <h3>{product.name} includes</h3>
          <ul className="details-meta-list">
            {product.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recommendations / Family Products Section */}
      <div className="details-recommendations-section">
        <div className="recommendations-header">
          <h2>Looking for more performance?</h2>
          <p>
            {hasFamily 
              ? `Check the family products “${product.category}”` 
              : "Check out our other product offerings"}
          </p>
        </div>

        <div className="recommendations-cards-row">
          {recommendationsToRender.map((familyProd) => (
            <div key={familyProd.id} className="recommendation-product-card">
              <div className="rec-card-icon-box">
                {renderDetailedIllustration(familyProd.id)}
              </div>
              <div className="rec-card-info-box">
                <div className="rec-card-header">
                  <h3>{familyProd.name}</h3>
                  <p>{familyProd.description}</p>
                </div>

                <div className="rec-card-benefits">
                  {familyProd.features.slice(0, 3).map((feat, fidx) => (
                    <div key={fidx} className="rec-benefit-row">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="rec-card-footer">
                  <div className="rec-price-box">
                    <span className="rec-price-label">Starting from</span>
                    <span className="rec-price-val">{familyProd.currencySymbol || '$'}{familyProd.price} {familyProd.period.replace('/', '/')}</span>
                  </div>
                  
                  <button 
                    type="button" 
                    className="rec-explore-btn"
                    onClick={() => {
                      if (onExploreProduct) {
                        onExploreProduct(familyProd);
                      }
                    }}
                  >
                    Explore product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Footer Action */}
        <div className="recommendations-footer">
          <button type="button" className="rec-view-more-btn" onClick={onBack}>
            <span>View more</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
