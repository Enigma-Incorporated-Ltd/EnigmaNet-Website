import { useState, useRef, useEffect } from 'react';
import type { Product } from '../index';

interface ProductListProps {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeSort: string;
  setActiveSort: (sort: string) => void;
  onSelect: (product: Product) => void;
  onBack: () => void;
}

const FIGMA_CATEGORIES = [
  'ESC Secure Networking',
  'ESC Secure Storage',
  'Enigma CONNECT',
  'Enigma EDGE',
  'Enigma LFT'
];

const FIGMA_CATEGORY_MAP: Record<string, string> = {
  'ESC Secure Networking': 'Single site',
  'ESC Secure Storage': 'Virtual/cloud',
  'Enigma CONNECT': 'High availability',
  'Enigma EDGE': 'Multi-site',
  'Enigma LFT': 'Virtual/cloud'
};

const SORT_OPTIONS = [
  'Highest price',
  'Lowest price',
  'Highest throughput',
  'Most resilient'
];

export default function ProductList({
  products,
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  activeSort,
  setActiveSort,
  onSelect,
  onBack
}: ProductListProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Helper to render high quality product illustrations based on product ID
  const renderProductIllustration = (id: string) => {
    switch (id) {
      case 'edge':
        return (
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
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
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
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
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="22" y="28" width="20" height="20" rx="3" />
            <path d="M27 28v-8a5 5 0 0 1 10 0v8" />
            <circle cx="32" cy="38" r="2" fill="#2adeff" />
            <path d="M32 40v3" />
            <path d="M8 20l6-6 6 6" />
          </svg>
        );
      case 'sdn-mesh':
        return (
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <circle cx="32" cy="14" r="5" fill="#2adeff" />
            <circle cx="16" cy="46" r="5" />
            <circle cx="48" cy="46" r="5" />
            <line x1="32" y1="19" x2="16" y2="41" />
            <line x1="32" y1="19" x2="48" y2="41" />
            <line x1="21" y1="46" x2="43" y2="46" />
            <circle cx="32" cy="34" r="3" fill="#2adeff" />
          </svg>
        );
      case 'ha-gateway':
        return (
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="14" y="10" width="36" height="18" rx="2" />
            <rect x="14" y="36" width="36" height="18" rx="2" />
            <circle cx="22" cy="19" r="2" fill="#2adeff" />
            <circle cx="22" cy="45" r="2" fill="#2adeff" />
            <line x1="32" y1="28" x2="32" y2="36" strokeDasharray="3,3" />
            <path d="M44 19h2M44 45h2" />
          </svg>
        );
      case 'pos-wan':
        return (
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="16" y="24" width="32" height="24" rx="3" />
            <line x1="16" y1="38" x2="48" y2="38" />
            <circle cx="24" cy="31" r="2" />
            <circle cx="32" cy="31" r="2" />
            <circle cx="40" cy="31" r="2" />
            <path d="M26 16h12v8H26z" fill="rgba(42,222,255,0.1)" />
          </svg>
        );
      case 'construction-modem':
        return (
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="20" y="28" width="24" height="26" rx="2" />
            <line x1="32" y1="28" x2="32" y2="12" />
            <circle cx="32" cy="12" r="3" fill="#2adeff" />
            <path d="M24 16c2.5-3 5.5-4 8-4s5.5 1 8 4M20 20c3.5-4 8.5-5.5 12-5.5s8.5 1.5 12 5.5" />
          </svg>
        );
      case 'remote-access':
        return (
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <rect x="14" y="22" width="36" height="22" rx="2" />
            <path d="M10 44h44M32 44v4" />
            <circle cx="32" cy="31" r="3" fill="#2adeff" />
            <path d="M28 22c0-2.2 1.8-4 4-4s4 1.8 4 4" />
          </svg>
        );
      default:
        return (
          <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
            <circle cx="32" cy="32" r="16" />
          </svg>
        );
    }
  };

  return (
    <div className="marketplace-container">
      {/* Header and Back navigation button */}
      <div className="marketplace-header-row">
        <button
          type="button"
          onClick={onBack}
          className="portal-back-btn"
          aria-label="Back to dashboard"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1554 11.979C10.1554 12.6322 9.89735 13.2519 9.42935 13.689L2.42835 20.689L0.828351 19.089L7.42935 12.012L0.829351 4.90901L2.42935 3.30901L9.42935 10.309C9.89735 10.7461 10.1554 11.3659 10.1554 12.019V11.979Z"
              fill="url(#paint0_linear_market_back_icon)"
              transform="scale(-1, 1) translate(-12, 0)"
            />
            <defs>
              <linearGradient id="paint0_linear_market_back_icon" x1="0" y1="12" x2="12" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2ADEFF" />
                <stop offset="1" stopColor="#002398" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <div className="marketplace-title-area">
          <h1 className="marketplace-title">Marketplace</h1>
          <p className="marketplace-subtitle">
            Explore solutions available for your business and extend your Enigma Net Platform.
          </p>
        </div>
      </div>

      {/* Toolbar row with Search, Filter & Sort */}
      <div className="marketplace-toolbar">
        {/* Search Field */}
        <div className="marketplace-search-field">
          <div className="marketplace-search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M7.75 7H7.355L7.215 6.865C8 6.14 8.5 5.12 8.5 4C8.5 1.79 6.71 0 4.5 0C2.29 0 0.5 1.79 0.5 4C0.5 6.21 2.29 8 4.5 8C5.62 8 6.64 7.5 7.36 6.86L7.5 7V7.75L10.25 10.5L11 9.75L8.25 7H7.75ZM4.5 7C2.84 7 1.5 5.66 1.5 4C1.5 2.34 2.84 1 4.5 1C6.16 1 7.5 2.34 7.5 4C7.5 5.66 6.16 7 4.5 7Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <input
            type="text"
            className="marketplace-search-input"
            placeholder="Search for products ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters and Sort button group */}
        <div className="marketplace-controls-group">
          {/* Filter Dropdown */}
          <div className="marketplace-dropdown-wrapper" ref={filterRef}>
            <button
              type="button"
              className={`marketplace-dropdown-btn ${activeCategory !== 'All' ? 'marketplace-dropdown-btn--active' : ''}`}
              onClick={() => {
                setFilterOpen(!filterOpen);
                setSortOpen(false);
              }}
            >
              <span>{activeCategory === 'All' ? 'Filter by' : `Category: ${activeCategory}`}</span>
              <div className="marketplace-dropdown-btn-icon">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            {filterOpen && (
              <div className="marketplace-dropdown-menu">
                {FIGMA_CATEGORIES.map((cat) => {
                  const mapped = FIGMA_CATEGORY_MAP[cat];
                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`marketplace-dropdown-item ${activeCategory === mapped ? 'marketplace-dropdown-item--selected' : ''}`}
                      onClick={() => {
                        setActiveCategory(mapped);
                        setFilterOpen(false);
                      }}
                    >
                      <span>{cat}</span>
                      <span className="marketplace-checkbox">
                        {activeCategory === mapped && (
                          <svg className="marketplace-checkbox-check" viewBox="0 0 8 8" fill="currentColor">
                            <path d="M2.5 5.25L0.75 3.5L0.25 4L2.5 6.25L7.75 1L7.25 0.5L2.5 5.25Z" />
                          </svg>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="marketplace-dropdown-wrapper" ref={sortRef}>
            <button
              type="button"
              className={`marketplace-dropdown-btn ${activeSort !== '' ? 'marketplace-dropdown-btn--selected' : ''}`}
              onClick={() => {
                setSortOpen(!sortOpen);
                setFilterOpen(false);
              }}
            >
              <span>Sort by</span>
              <div className="marketplace-dropdown-btn-icon" style={{ width: '16px', height: '16px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11V3M4 3L1.5 5.5M4 3L6.5 5.5" />
                  <path d="M12 5V13M12 13L9.5 10.5M12 13L14.5 10.5" />
                </svg>
              </div>
            </button>

            {sortOpen && (
              <div className="marketplace-dropdown-menu marketplace-dropdown-menu--right">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`marketplace-dropdown-item ${activeSort === opt ? 'marketplace-dropdown-item--selected' : ''}`}
                    onClick={() => {
                      setActiveSort(opt);
                      setSortOpen(false);
                    }}
                  >
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div className="marketplace-categories-section">
        <div className="marketplace-categories-header">
          <h2 className="marketplace-categories-title">Categories</h2>
          <button
            type="button"
            className="marketplace-categories-view-all"
            onClick={() => setActiveCategory('All')}
          >
            <span>View all</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="marketplace-categories-list">
          {FIGMA_CATEGORIES.map((cat) => {
            const mappedVal = FIGMA_CATEGORY_MAP[cat];
            const isActive = activeCategory === mappedVal;
            return (
              <button
                key={cat}
                type="button"
                className={`marketplace-category-tag ${isActive ? 'marketplace-category-tag--active' : ''}`}
                onClick={() => setActiveCategory(isActive ? 'All' : mappedVal)}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* All Products header title */}
      <h2 className="marketplace-products-title">All Products</h2>

      {/* Main product display area */}
      {products.length === 0 ? (
        <div className="marketplace-empty-state">
          <h2 className="marketplace-empty-title">No products found</h2>
          <p className="marketplace-empty-subtitle">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="marketplace-products-grid">
          {products.map((prod) => {
            const feature1 = prod.features[0] || 'High performance';
            const feature2 = prod.features[1] || 'Secure & reliable';
            const feature3 = prod.features[2] || 'Easy to deploy';
            const periodText = prod.period === '/mo' ? '/site /month' : `${prod.period}`;

            return (
              <div key={prod.id} className="marketplace-product-card">
                {prod.recommended && (
                  <span className="marketplace-product-card__badge">RECOMMENDED</span>
                )}
                {prod.newProduct && (
                  <span className="marketplace-product-card__badge marketplace-product-card__badge--new">NEW</span>
                )}

                <div className="marketplace-product-card__content">
                  <div className="marketplace-product-card__image-container">
                    <div className="marketplace-product-card__icon-wrapper">
                      {renderProductIllustration(prod.id)}
                    </div>
                  </div>

                  <div className="marketplace-product-card__details">
                    <h3 className="marketplace-product-card__name">{prod.name}</h3>
                    <p className="marketplace-product-card__desc" title={prod.description}>
                      {prod.description}
                    </p>

                    <div className="marketplace-product-card__specs">
                      <div className="marketplace-product-card__spec-row">
                        <div className="marketplace-product-card__spec-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 18a10 10 0 0 1 20 0" />
                            <path d="M12 18v-4" />
                            <path d="m8 10 4-4 4 4" />
                            <path d="M12 6v6" />
                          </svg>
                        </div>
                        <span className="marketplace-product-card__spec-text" title={feature1}>
                          {feature1}
                        </span>
                      </div>

                      <div className="marketplace-product-card__spec-row">
                        <div className="marketplace-product-card__spec-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                        <span className="marketplace-product-card__spec-text" title={feature2}>
                          {feature2}
                        </span>
                      </div>

                      <div className="marketplace-product-card__spec-row">
                        <div className="marketplace-product-card__spec-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <path d="m15 7-9 5 9 5" />
                          </svg>
                        </div>
                        <span className="marketplace-product-card__spec-text" title={feature3}>
                          {feature3}
                        </span>
                      </div>
                    </div>

                    <div className="marketplace-product-card__price-section">
                      <p className="marketplace-product-card__price-label">Starting from</p>
                      <div className="marketplace-product-card__price-tag">
                        <span className="marketplace-product-card__price">${prod.price}</span>
                        <span className="marketplace-product-card__period">{periodText}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="marketplace-product-card__btn"
                  onClick={() => onSelect(prod)}
                >
                  Explore product
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
