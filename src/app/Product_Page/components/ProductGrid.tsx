import { useState, useRef, useEffect } from 'react';
import './product-grid.css';

// Import downloaded product graphics
import liteImg from '@/assets/img/products/edge-lite.png';
import proImg from '@/assets/img/products/edge-pro.png';
import maxImg from '@/assets/img/products/edge-max.png';

// Import downloaded toolbar icons
import filterIcon from '@/assets/img/products/filter.svg';
import sortIcon from '@/assets/img/products/sort.svg';
import headsetIcon from '@/assets/img/products/headset.svg';
import cartIcon from '@/assets/img/products/cart.svg';

type FilterType = 'All' | 'Single site' | 'Multi-site' | 'High availability' | 'Virtual/cloud' | 'Retail' | 'Construction' | 'Remote';
type SortOption = 'Recommended' | 'Highest price' | 'Lowest price' | 'Highest throughput' | 'Most resilient';

interface ProductPlan {
  id: string;
  title: string;
  badges: string[];
  image: string;
  badgeMeta: string;
  planName: string;
  bestFor: string;
  bullets: string[];
  salePrice: number;
  originalPrice: number;
  filters: FilterType[];
  throughput: number; // in Mbps
  resilience: number; // 1-10
}

const PRODUCTS_DATA: ProductPlan[] = [
  {
    id: 'lite',
    title: 'EDGE Lite',
    badges: ['best price', 'high features'],
    image: liteImg,
    badgeMeta: 'Save 25%',
    planName: 'Lite',
    bestFor: 'Single-site businesses and smaller branches.',
    bullets: [
      'Up to 500 Mbps bonded',
      '2 active WANs',
      'Core ITM QoS',
      'Basic support'
    ],
    salePrice: 149,
    originalPrice: 199,
    filters: ['Single site', 'Retail'],
    throughput: 500,
    resilience: 5
  },
  {
    id: 'pro',
    title: 'EDGE Pro',
    badges: ['deal', 'high features'],
    image: proImg,
    badgeMeta: 'Recommended',
    planName: 'Pro',
    bestFor: 'Growing sites, multi-WAN environments',
    bullets: [
      'Up to 1 Gbps bonded',
      '3 active WANs',
      'Advanced ITM + RAIN',
      'Business hours support'
    ],
    salePrice: 299,
    originalPrice: 399,
    filters: ['Multi-site', 'Retail', 'Construction'],
    throughput: 1000,
    resilience: 8
  },
  {
    id: 'max',
    title: 'EDGE Max',
    badges: ['deal', 'high features'],
    image: maxImg,
    badgeMeta: 'Highest resilience',
    planName: 'Max',
    bestFor: 'High-availability and data-heavy sites.',
    bullets: [
      '2 Gbps + bonded',
      '4+ active WANs',
      'Full ITM + loss repair',
      '24 x 7 support'
    ],
    salePrice: 599,
    originalPrice: 799,
    filters: ['High availability', 'Virtual/cloud', 'Remote', 'Multi-site'],
    throughput: 2000,
    resilience: 10
  }
];

const ProductGrid = () => {
  // Dropdown visibility states
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  // Active filter/sort settings
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const [selectedSort, setSelectedSort] = useState<SortOption>('Recommended');

  // Interactive cart count
  const [cartCount, setCartCount] = useState(0);

  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterMenuOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Handler for adding to cart
  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  // Filter products
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (selectedFilter === 'All') return true;
    return product.filters.includes(selectedFilter);
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case 'Lowest price':
        return a.salePrice - b.salePrice;
      case 'Highest price':
        return b.salePrice - a.salePrice;
      case 'Highest throughput':
        return b.throughput - a.throughput;
      case 'Most resilient':
        return b.resilience - a.resilience;
      case 'Recommended':
      default:
        return 0; // keeps original order
    }
  });

  const filterOptions: FilterType[] = [
    'All',
    'Single site',
    'Multi-site',
    'High availability',
    'Virtual/cloud',
    'Retail',
    'Construction',
    'Remote'
  ];

  const sortOptions: SortOption[] = [
    'Recommended',
    'Highest price',
    'Lowest price',
    'Highest throughput',
    'Most resilient'
  ];

  return (
    <section className="product-grid-section" data-name="cart">
      {/* Filters, Sort, and Cart Toolbar */}
      <div className="product-grid__toolbar">
        <div className="product-grid__filters-group">
          {/* Filter Dropdown */}
          <div className="dropdown-control" ref={filterRef}>
            <button 
              className="dropdown-control__button" 
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              aria-haspopup="listbox"
              aria-expanded={filterMenuOpen}
            >
              <span>Filter by: {selectedFilter}</span>
              <img src={filterIcon} alt="Filter" />
            </button>
            {filterMenuOpen && (
              <div className="dropdown-menu-list" role="listbox">
                {filterOptions.map((opt) => (
                  <button
                    key={opt}
                    className={`dropdown-item-btn ${selectedFilter === opt ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedFilter(opt);
                      setFilterMenuOpen(false);
                    }}
                    role="option"
                    aria-selected={selectedFilter === opt}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="dropdown-control" ref={sortRef}>
            <button 
              className="dropdown-control__button" 
              onClick={() => setSortMenuOpen(!sortMenuOpen)}
              aria-haspopup="listbox"
              aria-expanded={sortMenuOpen}
            >
              <span>Sort by: {selectedSort}</span>
              <img src={sortIcon} alt="Sort" />
            </button>
            {sortMenuOpen && (
              <div className="dropdown-menu-list" role="listbox">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    className={`dropdown-item-btn ${selectedSort === opt ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedSort(opt);
                      setSortMenuOpen(false);
                    }}
                    role="option"
                    aria-selected={selectedSort === opt}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Toolbar Utility Icons (Support & Cart) */}
        <div className="product-grid__utility-group">
          <button className="utility-icon-btn" aria-label="Support Desk">
            <img src={headsetIcon} alt="Support" />
          </button>
          <button className="utility-icon-btn" aria-label="Shopping Cart">
            <img src={cartIcon} alt="Cart" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="product-grid__container">
        {sortedProducts.map((plan) => (
          <article className="product-card" key={plan.id} data-name="card">
            {/* Badges row */}
            <div className="product-card__badges">
              {plan.badges.map((badge) => (
                <div className="product-card__badge" key={badge}>
                  <span className="product-card__badge-text">{badge}</span>
                </div>
              ))}
            </div>

            {/* Product Card Image Box */}
            <div className="product-card__image-container">
              <img src={plan.image} alt={plan.title} />
            </div>

            {/* Product Details Content */}
            <div className="product-card__content">
              <div className="product-card__specs">
                <h3 className="product-card__plan-title">{plan.title}</h3>
                
                <div className="product-card__metadata">
                  <div className="product-card__meta-row">
                    <span className="product-card__meta-label">Badge:</span>
                    <span className="product-card__meta-value">{plan.badgeMeta}</span>
                  </div>
                  <div className="product-card__meta-row">
                    <span className="product-card__meta-label">Plan name:</span>
                    <span className="product-card__meta-value">{plan.planName}</span>
                  </div>
                  <div className="product-card__meta-row">
                    <span className="product-card__meta-label">Best for:</span>
                    <span className="product-card__meta-value">{plan.bestFor}</span>
                  </div>
                </div>

                {/* Key Bullet Features */}
                <ul className="product-card__bullet-list">
                  {plan.bullets.map((bullet) => (
                    <li className="product-card__bullet-item" key={bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing section */}
              <div className="product-card__pricing">
                <span className="product-card__price-sale">£ {plan.salePrice}/site/mo</span>
                <span className="product-card__price-original">£ {plan.originalPrice}/site/mo</span>
              </div>

              {/* Buy & Configuration buttons */}
              <div className="product-card__actions">
                <button 
                  className="btn-card-action btn-card-action--primary" 
                  onClick={handleAddToCart}
                >
                  Start {plan.planName}
                </button>
                <a 
                  href={`/products/connectivity-products/enigma-${plan.id === 'addons' ? 'connect' : 'edge'}`}
                  className="btn-card-action btn-card-action--secondary"
                >
                  View Configuration
                </a>
              </div>
            </div>
          </article>
        ))}

        {sortedProducts.length === 0 && (
          <p style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '18px', textAlign: 'center', width: '100%', margin: '40px 0' }}>
            No plans matches the selected filter criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
