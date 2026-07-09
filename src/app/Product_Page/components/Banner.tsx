import './banner.css';
import bgImage from '@/assets/img/products/minimalist-bg.png';
import homeIcon from '@/assets/img/products/home-icon.svg';
import arrowLeftIcon from '@/assets/img/products/arrow-left.svg';

const Banner = () => {
  return (
    <div className="product-banner">
      {/* Background Graphic Design */}
      <div className="product-banner__bg">
        <img
          src={bgImage}
          alt="Minimalist Graphic Design Background"
        />
        <div className="product-banner__bg-overlay" />
      </div>

      {/* Navigation Breadcrumb inside Banner */}
      <div className="product-banner__nav">
        <a href="/" className="product-banner__nav-item">
          <img src={homeIcon} alt="Home" className="product-banner__nav-home-icon" style={{ width: '12px', height: '12px' }} />
          <span>Home</span>
        </a>
        <div className="product-banner__nav-arrow">
          <img src={arrowLeftIcon} alt="arrow" style={{ transform: 'rotate(180deg)', width: '12px', height: '12px' }} />
        </div>
        <a href="/products" className="product-banner__nav-item active">
          <span>Products</span>
        </a>
      </div>

      {/* Main Content Area */}
      <div className="product-banner__content">
        <div className="product-banner__headline">
          <h1 className="product-banner__title">
            Shop secure, resilient connectivity built for modern workloads
          </h1>
          <p className="product-banner__description">
            Choose Enigma Net plans for home, mobile, branch, cloud and business environments.
            Intelligent traffic management, secure transport, resilient connectivity and flexible upgrades included.
          </p>
        </div>

        {/* Action Buttons and Subtext */}
        <div className="product-banner__actions-container">
          <div className="product-banner__actions">
            <a href="/products/connectivity-products/enigma-edge" className="btn-large-custom btn-primary-large">
              Configure EDGE
            </a>
            <a href="/products/connectivity-products/enigma-connect" className="btn-large-custom btn-secondary-large">
              Shop Connect Plans
            </a>
          </div>
          <p className="product-banner__subtext">
            PERFORMANCE YOU CAN PROVE. PLANS YOU CAN UNDERSTAND.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
