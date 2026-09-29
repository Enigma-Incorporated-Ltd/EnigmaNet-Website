import { useState, useRef, useEffect } from 'react';
import type { Product } from '../index';

interface ProductListProps {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  activeSort: string;
  setActiveSort: (sort: string) => void;
  onSelect: (product: Product) => void;
  onBack: () => void;
  onViewRequests?: () => void;
}

const FIGMA_CATEGORIES = [
  {
    name: 'ESC Secure Networking',
    desc: 'Secure, resilient connectivity for remote sites, devices, and virtual networks.'
  },
  {
    name: 'ESC Secure Storage',
    desc: 'Secure file and data management with fast access and multi-cloud support.'
  },
  {
    name: 'Enigma Connect',
    desc: 'Self-service connectivity plans for reliable, high-performance internet access.'
  },
  {
    name: 'Enigma EDGE',
    desc: 'Managed edge connectivity for businesses, branches, and distributed sites.'
  },
  {
    name: 'Enigma LFT',
    desc: 'Fast, secure large-file transfers for moving data between teams and locations.'
  }
];

const FILTER_OPTIONS = [
  'Single site',
  'Multi-site',
  'High availability',
  'Virtual/cloud',
  'Retail',
  'Construction',
  'Remote'
];

const SORT_OPTIONS = [
  'Recommended',
  'Highest price',
  'Lowest price',
  'Highest throughput',
  'Most resilient'
];

// SVG Graphic for Product Card (interlocking rings / connection graphic with glowing radial dark badge)
function GpuGraphic({ className = '' }: { className?: string }) {
  return (
    <div className={`marketplace-product-card__gpu-img ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="marketplace-gpu-svg"
      >
        <g clipPath="url(#clip_gpu_circle)">
          <rect width="120" height="120" rx="60" fill="#0D1B29" />
          <g opacity="0.8">
            <ellipse cx="153" cy="111.5" rx="150" ry="121.5" fill="#152869" filter="blur(35px)" />
          </g>
          <g>
            <circle cx="187.5" cy="135.5" r="121.5" fill="#0D1B29" filter="blur(35px)" />
          </g>
          {/* Interlocking connection paths */}
          <g className="marketplace-gpu-vectors">
            <path
              d="M68.75 51.25V55.625H55.625C53.3044 55.625 51.0788 56.5469 49.4378 58.1878C47.7969 59.8288 46.875 62.0544 46.875 64.375V73.125C46.875 75.4456 47.7969 77.6712 49.4378 79.3122C51.0788 80.9531 53.3044 81.875 55.625 81.875H77.5C79.8206 81.875 82.0462 80.9531 83.6872 79.3122C85.3281 77.6712 86.25 75.4456 86.25 73.125V64.375C86.2494 62.8396 85.8448 61.3315 85.0768 60.002C84.3089 58.6725 83.2047 57.5685 81.875 56.8008V51.9951C84.4337 52.8998 86.6491 54.5754 88.2161 56.7912C89.7831 59.0071 90.6247 61.6542 90.625 64.3682V73.1182C90.625 76.5991 89.2422 79.9375 86.7808 82.3989C84.3194 84.8604 80.981 86.2432 77.5 86.2432H55.625C52.144 86.2432 48.8056 84.8604 46.3442 82.3989C43.8828 79.9375 42.5 76.5991 42.5 73.1182V64.375C42.5 60.894 43.8828 57.5556 46.3442 55.0942C48.8056 52.6328 52.144 51.25 55.625 51.25H68.75Z"
              fill="#2ADEFF"
            />
            <path
              d="M51.25 68.75V64.375H64.375C66.6956 64.375 68.9212 63.4531 70.5622 61.8122C72.2031 60.1712 73.125 57.9456 73.125 55.625V46.875C73.125 44.5544 72.2031 42.3288 70.5622 40.6878C68.9212 39.0469 66.6956 38.125 64.375 38.125H42.5C40.1794 38.125 37.9538 39.0469 36.3128 40.6878C34.6719 42.3288 33.75 44.5544 33.75 46.875V55.625C33.7506 57.1604 34.1552 58.6685 34.9232 59.998C35.6911 61.3275 36.7953 62.4315 38.125 63.1992V68.0049C35.5652 67.0998 33.349 65.4232 31.7819 63.206C30.2148 60.9888 29.3739 58.3401 29.375 55.625V46.875C29.375 43.394 30.7578 40.0556 33.2192 37.5942C35.6806 35.1328 39.019 33.75 42.5 33.75H64.375C67.856 33.75 71.1944 35.1328 73.6558 37.5942C76.1172 40.0556 77.5 43.394 77.5 46.875V55.625C77.5 59.106 76.1172 62.4444 73.6558 64.9058C71.1944 67.3672 67.856 68.75 64.375 68.75H51.25Z"
              fill="#2ADEFF"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip_gpu_circle">
            <rect width="120" height="120" rx="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// 3 Exact Figma Spec Icons
function SpeedGaugeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 6.27539C6.675 6.27539 3.96875 8.98164 3.96875 12.3035C3.96875 12.5004 4.12813 12.6566 4.325 12.6566C4.52188 12.6566 4.68125 12.4973 4.68125 12.3035C4.68125 9.36914 7.06875 6.98164 10.0031 6.98164C11.3437 6.98164 12.5687 7.47852 13.5031 8.30039L10.7219 11.0816C10.5094 10.9566 10.2656 10.8848 10.0031 10.8848C9.22187 10.8848 8.58437 11.5223 8.58437 12.3035C8.58437 13.0848 9.22187 13.7223 10.0031 13.7223C10.7844 13.7223 11.4219 13.0848 11.4219 12.3035C11.4219 12.041 11.35 11.7941 11.225 11.5848L14.0062 8.80352C14.825 9.74102 15.325 10.966 15.325 12.3035C15.325 12.5004 15.4844 12.6566 15.6812 12.6566C15.8781 12.6566 16.0375 12.4973 16.0375 12.3035C16.0375 8.97851 13.3312 6.27539 10.0094 6.27539H10ZM10 13.016C9.60937 13.016 9.29062 12.6973 9.29062 12.3066C9.29062 11.916 9.60937 11.5973 10 11.5973C10.0625 11.5973 10.125 11.6066 10.1844 11.6223L9.75 12.0566C9.6125 12.1941 9.6125 12.4191 9.75 12.5598C9.81875 12.6285 9.90937 12.6629 10 12.6629C10.0906 12.6629 10.1812 12.6285 10.25 12.5598L10.6844 12.1254C10.7 12.1848 10.7094 12.2441 10.7094 12.3098C10.7094 12.7004 10.3906 13.0191 10 13.0191V13.016Z"
        fill="url(#paint0_linear_spec_speed)"
      />
      <defs>
        <linearGradient id="paint0_linear_spec_speed" x1="3.95843" y1="9.99883" x2="16.0375" y2="9.99883" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function RoleShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6926 12.2996C11.8177 13.6586 10.4301 14.6032 9.16511 15.2329C7.11997 14.2184 4.75162 12.3777 4.75162 9.30179V5.79533L9.16511 3.93042L13.5786 5.79533V6.76143C13.7068 6.69684 13.8517 6.65647 14.0244 6.65647C14.0718 6.65647 14.1191 6.66455 14.1665 6.67262V5.60696C14.1665 5.49393 14.0968 5.39167 13.991 5.34593L9.28492 3.35723C9.20969 3.32493 9.12332 3.32493 9.04809 3.35723L4.34204 5.34593C4.23616 5.39167 4.1665 5.49393 4.1665 5.60696V9.2991C4.1665 10.7953 4.68475 12.1597 5.70454 13.3518C6.52371 14.3072 7.6438 15.1333 9.03416 15.8034C9.07595 15.8222 9.12053 15.833 9.16511 15.833C9.20969 15.833 9.25427 15.8222 9.29607 15.8034C10.6864 15.1306 11.8093 14.3072 12.6257 13.3518C12.9294 12.9966 13.1829 12.6253 13.3947 12.2404C13.1634 12.2781 12.9294 12.2996 12.6898 12.2996H12.6926Z"
        fill="url(#paint0_linear_spec_shield)"
      />
      <path
        d="M14.9006 7.46927L15.1408 7.559C15.7267 7.81237 16.1332 8.39038 16.1807 9.02645V9.33525C16.1569 9.4197 16.149 9.51208 16.1253 9.59654C16.0435 9.89478 15.8455 10.2036 15.6185 10.4147C15.0828 10.9162 14.32 11.0376 13.6575 10.6998C13.5625 10.7394 13.2432 11.0112 13.1561 10.9927L12.6942 10.9003L12.6045 11.3517C12.5939 11.3992 12.4831 11.4915 12.4355 11.481L11.9684 11.386L11.9499 11.3992L11.8549 11.8663C11.847 11.9059 11.7229 11.9825 11.6807 11.9719L11.2188 11.8795L11.1265 12.3414C11.1159 12.3942 11.005 12.4628 10.9496 12.4575C10.6382 12.3757 10.2845 12.3652 9.97836 12.2754C9.88863 12.249 9.82528 12.1672 9.8332 12.0696C9.85431 11.8479 9.93877 11.5523 9.99156 11.3332C10.018 11.2197 10.01 11.0745 10.113 11.0059L12.7074 9.27718C12.644 8.25313 13.4517 7.38481 14.481 7.40856C14.5391 7.40856 14.6182 7.4112 14.671 7.41912L14.9006 7.46399V7.46927ZM12.2772 11.064L12.3748 10.5784C12.3828 10.5361 12.491 10.4833 12.5385 10.4833C12.7179 10.4886 12.9344 10.5836 13.1191 10.5915C13.2564 10.515 13.3883 10.3936 13.5256 10.3223C13.6945 10.2326 13.7921 10.3487 13.9479 10.4094C15.1355 10.8687 16.2678 9.59654 15.6159 8.47748C14.898 7.24229 13.0611 7.78862 13.0875 9.19008C13.0875 9.2983 13.1376 9.42234 13.0479 9.5068L10.3954 11.2751L10.2502 11.9376L10.8018 12.0484L10.8968 11.576C10.9048 11.5364 11.0235 11.4599 11.0605 11.4678L11.5329 11.5628L11.6253 11.1009C11.6358 11.0455 11.7599 10.9637 11.8153 10.9742L12.2772 11.0666V11.064Z"
        fill="url(#paint1_linear_spec_shield)"
      />
      <path
        d="M14.9693 8.41443C15.3652 8.43554 15.5025 8.95284 15.1488 9.13759C14.7555 9.34346 14.3887 8.81032 14.708 8.51736C14.7687 8.46193 14.8849 8.40915 14.9693 8.41443Z"
        fill="url(#paint2_linear_spec_shield)"
      />
      <defs>
        <linearGradient id="paint0_linear_spec_shield" x1="4.15795" y1="9.58301" x2="14.1665" y2="9.58301" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
        <linearGradient id="paint1_linear_spec_shield" x1="9.8271" y1="9.93295" x2="16.1807" y2="9.93295" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
        <linearGradient id="paint2_linear_spec_shield" x1="14.5858" y1="8.79888" x2="15.3524" y2="8.79888" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IntegrationNodesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.87105 11.3892C6.48679 11.3892 7.02994 11.0419 7.3278 10.5196L13.295 12.8183C13.2699 12.9402 13.2574 13.0649 13.2574 13.1948C13.2574 14.1917 14.0208 15.0003 14.962 15.0003C15.9031 15.0003 16.6665 14.1917 16.6665 13.1948C16.6665 12.1979 15.9031 11.3892 14.962 11.3892C14.3462 11.3892 13.8031 11.7365 13.5052 12.2589L7.53805 9.96015C7.56308 9.83819 7.57559 9.71357 7.57559 9.58366C7.57559 9.45374 7.56308 9.32913 7.53805 9.20717L13.5052 6.90847C13.8056 7.42813 14.3462 7.7781 14.962 7.7781C15.9031 7.7781 16.6665 6.96945 16.6665 5.97255C16.6665 4.97565 15.9031 4.16699 14.962 4.16699C14.0208 4.16699 13.2574 4.97565 13.2574 5.97255C13.2574 6.10246 13.2699 6.22708 13.295 6.34904L7.3278 8.64774C7.02744 8.12808 6.48679 7.7781 5.87105 7.7781C4.92992 7.7781 4.1665 8.58676 4.1665 9.58366C4.1665 10.5806 4.92992 11.3892 5.87105 11.3892ZM14.962 11.9911C15.5877 11.9911 16.0983 12.5319 16.0983 13.1948C16.0983 13.8576 15.5877 14.3985 14.962 14.3985C14.3362 14.3985 13.8256 13.8576 13.8256 13.1948C13.8256 12.5319 14.3362 11.9911 14.962 11.9911ZM14.962 4.76884C15.5877 4.76884 16.0983 5.30972 16.0983 5.97255C16.0983 6.63538 15.5877 7.17625 14.962 7.17625C14.3362 7.17625 13.8256 6.63538 13.8256 5.97255C13.8256 5.30972 14.3362 4.76884 14.962 4.76884ZM5.87105 8.37995C6.4968 8.37995 7.00741 8.92083 7.00741 9.58366C7.00741 10.2465 6.4968 10.7874 5.87105 10.7874C5.2453 10.7874 4.73469 10.2465 4.73469 9.58366C4.73469 8.92083 5.2453 8.37995 5.87105 8.37995Z"
        fill="url(#paint0_linear_spec_nodes)"
      />
      <defs>
        <linearGradient id="paint0_linear_spec_nodes" x1="4.15581" y1="9.58366" x2="16.6665" y2="9.58366" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ProductList({
  products,
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  activeFilter,
  setActiveFilter,
  activeSort,
  setActiveSort,
  onSelect,
  onBack,
  onViewRequests
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

  return (
    <div className="marketplace-container">
      {/* Top Header Row with Title, Back Button, and View My Requests Button */}
      <div className="marketplace-header-row">
        <button
          type="button"
          onClick={onBack}
          className="portal-back-btn"
          aria-label="Back to dashboard"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path
              className="portal-back-btn__path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.343 12L10.414 19.071L9 20.485L1.222 12.707C1.03453 12.5195 0.929214 12.2652 0.929214 12C0.929214 11.7348 1.03453 11.4805 1.222 11.293L9 3.515L10.414 4.929L3.343 12Z"
              fill="url(#paint0_linear_market_back_icon)"
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

        <button
          type="button"
          className="marketplace-view-requests-btn"
          onClick={onViewRequests}
          title="View my requests"
        >
          <span>View my requests</span>
          <svg width="17" height="14" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.7071 8.07107C18.0976 7.68054 18.0976 7.04738 17.7071 6.65685L11.3431 0.292893C10.9526 -0.097631 10.3195 -0.097631 9.92893 0.292893C9.53841 0.683418 9.53841 1.31658 9.92893 1.70711L15.5858 7.36396L9.92893 13.0208C9.53841 13.4113 9.53841 14.0445 9.92893 14.435C10.3195 14.8256 10.9526 14.8256 11.3431 14.435L17.7071 8.07107ZM0 7.36396V8.36396H17V7.36396V6.36396H0V7.36396Z"
              fill="currentColor"
            />
          </svg>
        </button>
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
          <div className={`marketplace-dropdown-wrapper ${filterOpen ? 'marketplace-dropdown-wrapper--open' : ''}`} ref={filterRef}>
            <button
              type="button"
              className={`marketplace-dropdown-btn ${activeFilter !== 'All' ? 'marketplace-dropdown-btn--selected' : ''}`}
              onClick={() => {
                setFilterOpen(!filterOpen);
                setSortOpen(false);
              }}
            >
              <span>{activeFilter === 'All' ? 'Filter by' : activeFilter}</span>
              <div className="marketplace-dropdown-btn-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </button>

            {filterOpen && (
              <div className="marketplace-dropdown-menu">
                <button
                  type="button"
                  className={`marketplace-dropdown-item ${activeFilter === 'All' ? 'marketplace-dropdown-item--selected' : ''}`}
                  onClick={() => {
                    setActiveFilter('All');
                    setFilterOpen(false);
                  }}
                >
                  <span>All Filters</span>
                  <span className="marketplace-checkbox">
                    {activeFilter === 'All' && (
                      <svg className="marketplace-checkbox-check" viewBox="0 0 8 8" fill="currentColor">
                        <path d="M2.5 5.25L0.75 3.5L0.25 4L2.5 6.25L7.75 1L7.25 0.5L2.5 5.25Z" />
                      </svg>
                    )}
                  </span>
                </button>
                {FILTER_OPTIONS.map((opt) => {
                  const isActive = activeFilter === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      className={`marketplace-dropdown-item ${isActive ? 'marketplace-dropdown-item--selected' : ''}`}
                      onClick={() => {
                        setActiveFilter(isActive ? 'All' : opt);
                        setFilterOpen(false);
                      }}
                    >
                      <span>{opt}</span>
                      <span className="marketplace-checkbox">
                        {isActive && (
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
          <div className={`marketplace-dropdown-wrapper ${sortOpen ? 'marketplace-dropdown-wrapper--open' : ''}`} ref={sortRef}>
            <button
              type="button"
              className={`marketplace-dropdown-btn ${activeSort !== 'Recommended' ? 'marketplace-dropdown-btn--selected' : ''}`}
              onClick={() => {
                setSortOpen(!sortOpen);
                setFilterOpen(false);
              }}
            >
              <span>{activeSort === 'Recommended' ? 'Sort by' : activeSort}</span>
              <div className="marketplace-dropdown-btn-icon">
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
            <svg width="17" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.5303 6.0533C17.8232 5.76041 17.8232 5.28553 17.5303 4.99264L12.7574 0.21967C12.4645 -0.0732231 11.9896 -0.0732231 11.6967 0.21967C11.4038 0.512564 11.4038 0.987437 11.6967 1.28033L15.9393 5.52297L11.6967 9.76561C11.4038 10.0585 11.4038 10.5334 11.6967 10.8263C11.9896 11.1192 12.4645 11.1192 12.7574 10.8263L17.5303 6.0533ZM0 5.52297V6.27297H17V5.52297V4.77297H0V5.52297Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="marketplace-categories-list">
          {FIGMA_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                className={`marketplace-category-tag ${isActive ? 'marketplace-category-tag--active' : ''}`}
                onClick={() => setActiveCategory(isActive ? 'All' : cat.name)}
              >
                <span className="marketplace-category-tag__name">{cat.name}</span>
                {isActive && (
                  <span className="marketplace-category-tag__desc">{cat.desc}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Products header title based on active category */}
      <h2 className="marketplace-products-title">
        {activeCategory === 'All' ? 'All Products' : activeCategory}
      </h2>

      {/* Main product display area */}
      {products.length === 0 ? (
        <div className="marketplace-empty-state">
          <h2 className="marketplace-empty-title">No products found</h2>
          <p className="marketplace-empty-subtitle">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="marketplace-products-grid">
          {products.map((prod) => {
            const feature1 = prod.features[0] || 'Up to ~300 Mbps optimised';
            const feature2 = prod.features[1] || 'Secure & reliable';
            const feature3 = prod.features[2] || 'Easy to deploy & manage';
            const currencySymbol = prod.currencySymbol || '£';
            const periodParts = prod.period.trim().split(' ').filter(Boolean);

            return (
              <div key={prod.id} className="marketplace-product-card">
                <div className="marketplace-product-card__content">
                  <div className="marketplace-product-card__image-container">
                    <GpuGraphic />
                  </div>

                  <div className="marketplace-product-card__details">
                    <div className="marketplace-product-card__title-row">
                      <h3 className="marketplace-product-card__name">{prod.name}</h3>
                    </div>
                    <p className="marketplace-product-card__desc" title={prod.description}>
                      {prod.description}
                    </p>

                    <div className="marketplace-product-card__specs">
                      <div className="marketplace-product-card__spec-row">
                        <div className="marketplace-product-card__spec-icon">
                          <SpeedGaugeIcon />
                        </div>
                        <span className="marketplace-product-card__spec-text" title={feature1}>
                          {feature1}
                        </span>
                      </div>

                      <div className="marketplace-product-card__spec-row">
                        <div className="marketplace-product-card__spec-icon">
                          <RoleShieldIcon />
                        </div>
                        <span className="marketplace-product-card__spec-text" title={feature2}>
                          {feature2}
                        </span>
                      </div>

                      <div className="marketplace-product-card__spec-row">
                        <div className="marketplace-product-card__spec-icon">
                          <IntegrationNodesIcon />
                        </div>
                        <span className="marketplace-product-card__spec-text" title={feature3}>
                          {feature3}
                        </span>
                      </div>
                    </div>

                    <div className="marketplace-product-card__price-section">
                      <p className="marketplace-product-card__price-label">Starting from</p>
                      <div className="marketplace-product-card__price-tag">
                        <span className="marketplace-product-card__price">
                          {currencySymbol}{prod.price}
                        </span>
                        <div className="marketplace-product-card__period-wrap">
                          {periodParts.map((p, idx) => (
                            <span key={idx} className="marketplace-product-card__period">
                              {p}
                            </span>
                          ))}
                        </div>
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
