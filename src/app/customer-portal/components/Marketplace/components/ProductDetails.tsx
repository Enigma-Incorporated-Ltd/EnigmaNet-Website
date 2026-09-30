import { useState } from 'react';
import './ProductDetails.css';
import type { Product } from '../index';

interface ProductDetailsProps {
  product: Product;
  products?: Product[];
  onBuy: () => void;
  onBack: () => void;
  onExploreProduct?: (product: Product) => void;
  onViewRequests?: () => void;
}

// 3 Exact Figma Spec Icons
function SpeedGaugeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 6.27539C6.675 6.27539 3.96875 8.98164 3.96875 12.3035C3.96875 12.5004 4.12813 12.6566 4.325 12.6566C4.52188 12.6566 4.68125 12.4973 4.68125 12.3035C4.68125 9.36914 7.06875 6.98164 10.0031 6.98164C11.3437 6.98164 12.5687 7.47852 13.5031 8.30039L10.7219 11.0816C10.5094 10.9566 10.2656 10.8848 10.0031 10.8848C9.22187 10.8848 8.58437 11.5223 8.58437 12.3035C8.58437 13.0848 9.22187 13.7223 10.0031 13.7223C10.7844 13.7223 11.4219 13.0848 11.4219 12.3035C11.4219 12.041 11.35 11.7941 11.225 11.5848L14.0062 8.80352C14.825 9.74102 15.325 10.966 15.325 12.3035C15.325 12.5004 15.4844 12.6566 15.6812 12.6566C15.8781 12.6566 16.0375 12.4973 16.0375 12.3035C16.0375 8.97851 13.3312 6.27539 10.0094 6.27539H10ZM10 13.016C9.60937 13.016 9.29062 12.6973 9.29062 12.3066C9.29062 11.916 9.60937 11.5973 10 11.5973C10.0625 11.5973 10.125 11.6066 10.1844 11.6223L9.75 12.0566C9.6125 12.1941 9.6125 12.4191 9.75 12.5598C9.81875 12.6285 9.90937 12.6629 10 12.6629C10.0906 12.6629 10.1812 12.6285 10.25 12.5598L10.6844 12.1254C10.7 12.1848 10.7094 12.2441 10.7094 12.3098C10.7094 12.7004 10.3906 13.0191 10 13.0191V13.016Z"
        fill="url(#details_paint_speed)"
      />
      <defs>
        <linearGradient id="details_paint_speed" x1="3.95843" y1="9.99883" x2="16.0375" y2="9.99883" gradientUnits="userSpaceOnUse">
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
        fill="url(#details_paint_shield_0)"
      />
      <path
        d="M14.9006 7.46927L15.1408 7.559C15.7267 7.81237 16.1332 8.39038 16.1807 9.02645V9.33525C16.1569 9.4197 16.149 9.51208 16.1253 9.59654C16.0435 9.89478 15.8455 10.2036 15.6185 10.4147C15.0828 10.9162 14.32 11.0376 13.6575 10.6998C13.5625 10.7394 13.2432 11.0112 13.1561 10.9927L12.6942 10.9003L12.6045 11.3517C12.5939 11.3992 12.4831 11.4915 12.4355 11.481L11.9684 11.386L11.9499 11.3992L11.8549 11.8663C11.847 11.9059 11.7229 11.9825 11.6807 11.9719L11.2188 11.8795L11.1265 12.3414C11.1159 12.3942 11.005 12.4628 10.9496 12.4575C10.6382 12.3757 10.2845 12.3652 9.97836 12.2754C9.88863 12.249 9.82528 12.1672 9.8332 12.0696C9.85431 11.8479 9.93877 11.5523 9.99156 11.3332C10.018 11.2197 10.01 11.0745 10.113 11.0059L12.7074 9.27718C12.644 8.25313 13.4517 7.38481 14.481 7.40856C14.5391 7.40856 14.6182 7.4112 14.671 7.41912L14.9006 7.46399V7.46927ZM12.2772 11.064L12.3748 10.5784C12.3828 10.5361 12.491 10.4833 12.5385 10.4833C12.7179 10.4886 12.9344 10.5836 13.1191 10.5915C13.2564 10.515 13.3883 10.3936 13.5256 10.3223C13.6945 10.2326 13.7921 10.3487 13.9479 10.4094C15.1355 10.8687 16.2678 9.59654 15.6159 8.47748C14.898 7.24229 13.0611 7.78862 13.0875 9.19008C13.0875 9.2983 13.1376 9.42234 13.0479 9.5068L10.3954 11.2751L10.2502 11.9376L10.8018 12.0484L10.8968 11.576C10.9048 11.5364 11.0235 11.4599 11.0605 11.4678L11.5329 11.5628L11.6253 11.1009C11.6358 11.0455 11.7599 10.9637 11.8153 10.9742L12.2772 11.0666V11.064Z"
        fill="url(#details_paint_shield_1)"
      />
      <path
        d="M14.9693 8.41443C15.3652 8.43554 15.5025 8.95284 15.1488 9.13759C14.7555 9.34346 14.3887 8.81032 14.708 8.51736C14.7687 8.46193 14.8849 8.40915 14.9693 8.41443Z"
        fill="url(#details_paint_shield_2)"
      />
      <defs>
        <linearGradient id="details_paint_shield_0" x1="4.15795" y1="9.58301" x2="14.1665" y2="9.58301" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
        <linearGradient id="details_paint_shield_1" x1="9.8271" y1="9.93295" x2="16.1807" y2="9.93295" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
        <linearGradient id="details_paint_shield_2" x1="14.5858" y1="8.79888" x2="15.3524" y2="8.79888" gradientUnits="userSpaceOnUse">
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
        fill="url(#details_paint_nodes)"
      />
      <defs>
        <linearGradient id="details_paint_nodes" x1="4.15581" y1="9.58366" x2="16.6665" y2="9.58366" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Gradient Dot Icon for 5 specs list
function SpecDotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.5" cy="10.5" r="5.5" fill="url(#details_paint_spec_dot)" />
      <defs>
        <linearGradient id="details_paint_spec_dot" x1="4.99" y1="10.5" x2="16" y2="10.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#002398" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Circular 120px connection graphic for recommendations card
function CircularGpuGraphic() {
  return (
    <div className="rec-card-gpu-box">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rec-card-gpu-svg"
      >
        <g clipPath="url(#clip_rec_gpu_circle)">
          <rect width="120" height="120" rx="60" fill="#0D1B29" />
          <g opacity="0.8">
            <ellipse cx="153" cy="111.5" rx="150" ry="121.5" fill="#152869" filter="blur(35px)" />
          </g>
          <g>
            <circle cx="187.5" cy="135.5" r="121.5" fill="#0D1B29" filter="blur(35px)" />
          </g>
          {/* Interlocking connection paths */}
          <g transform="translate(14, 14) scale(0.77)">
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
          <clipPath id="clip_rec_gpu_circle">
            <rect width="120" height="120" rx="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Graphic Box with exact gradient & glowing connection vector
function DetailsGraphicBox() {
  return (
    <div className="details-graphic-box">
      <div className="details-graphic-inner">
        <svg
          width="255"
          height="132"
          viewBox="0 0 255 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="details-gpu-svg"
        >
          <g clipPath="url(#clip_details_gpu)">
            <rect width="255" height="132" rx="4" fill="#0D1B29" />
            <g opacity="0.8">
              <ellipse cx="160" cy="120" rx="160" ry="130" fill="#152869" filter="blur(35px)" />
            </g>
            <g>
              <circle cx="200" cy="140" r="130" fill="#0D1B29" filter="blur(35px)" />
            </g>
            {/* 70px Interlocking connection graphic */}
            <g transform="translate(92.5, 31)">
              <path
                d="M40.1 29.9V32.45H32.45C31.1 32.45 29.8 32.99 28.84 33.94C27.88 34.9 27.34 36.2 27.34 37.55V42.65C27.34 44 27.88 45.3 28.84 46.26C29.8 47.21 31.1 47.75 32.45 47.75H45.2C46.55 47.75 47.85 47.21 48.81 46.26C49.76 45.3 50.3 44 50.3 42.65V37.55C50.3 36.66 49.97 35.78 49.52 35C49.07 34.23 48.43 33.58 47.65 33.13V30.33C49.14 30.86 50.44 31.84 51.35 33.13C52.26 34.42 52.75 35.96 52.75 37.55V42.65C52.75 44.68 51.94 46.62 50.51 48.06C49.07 49.49 47.13 50.3 45.2 50.3H32.45C30.43 50.3 28.48 49.49 27.05 48.06C25.61 46.62 24.81 44.68 24.81 42.65V37.55C24.81 35.52 25.61 33.58 27.05 32.14C28.48 30.71 30.43 29.9 32.45 29.9H40.1Z"
                fill="#2ADEFF"
              />
              <path
                d="M29.9 40.1V37.55H37.55C38.9 37.55 40.2 37.01 41.16 36.06C42.12 35.1 42.66 33.8 42.66 32.45V27.35C42.66 26 42.12 24.7 41.16 23.74C40.2 22.79 38.9 22.25 37.55 22.25H24.8C23.45 22.25 22.15 22.79 21.19 23.74C20.24 24.7 19.7 26 19.7 27.35V32.45C19.7 33.34 20.03 34.22 20.48 35C20.93 35.77 21.57 36.42 22.35 36.87V39.67C20.86 39.14 19.56 38.16 18.65 36.87C17.74 35.58 17.25 34.04 17.25 32.45V27.35C17.25 25.32 18.06 23.38 19.49 21.94C20.93 20.51 22.87 19.7 24.8 19.7H37.55C39.57 19.7 41.52 20.51 42.95 21.94C44.39 23.38 45.19 25.32 45.19 27.35V32.45C45.19 34.48 44.39 36.42 42.95 37.86C41.52 39.29 39.57 40.1 37.55 40.1H29.9Z"
                fill="#2ADEFF"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip_details_gpu">
              <rect width="255" height="132" rx="4" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function ProductDetails({
  product,
  products = [],
  onBuy,
  onBack,
  onExploreProduct,
  onViewRequests
}: ProductDetailsProps) {
  const [quoteStatus, setQuoteStatus] = useState<string | null>(null);

  const currency = product.currencySymbol || '£';

  // 5 Detailed spec rows matching Figma
  const specItems = [
    'Secure connectivity',
    'Managed networking',
    'APN integration',
    'Centralised policy management',
    'Monitoring'
  ];

  // Specifications / Product information list
  const specProductInfoList = [
    'Throughput',
    'Deployment',
    'Billing',
    'Minimum commitment',
    'Included services',
    'Support',
    'Availability'
  ];

  // Includes list
  const productIncludesList = [
    'Enigma Net Core integration',
    'Global policy management',
    'API access',
    'Site connectivity',
    'Monitoring'
  ];

  // Get dynamic family products (filter out current product)
  const familyRecommendations = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 2);

  // Fallback if not enough in same category
  const recommendationsToRender = familyRecommendations.length > 0
    ? familyRecommendations
    : products.filter(p => p.id !== product.id).slice(0, 2);

  const handleRequestQuote = () => {
    setQuoteStatus('Processing…');
    setTimeout(() => {
      setQuoteStatus(`Quote request submitted! Reference: ENM-QT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  return (
    <div className="details-layout-container" data-node-id="1252:19059">
      {/* Header Row with Back Button & View My Requests */}
      <div className="details-header-row" data-node-id="1252:19070">
        <div className="details-header-left">
          <button type="button" className="details-back-arrow-btn" onClick={onBack} aria-label="Go back to list">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="details-header-titles">
            <h1 className="details-page-title">{product.name}</h1>
            <p className="details-page-subtitle">{product.description}</p>
          </div>
        </div>

        {onViewRequests && (
          <button
            type="button"
            className="details-view-requests-btn"
            onClick={onViewRequests}
          >
            <span>View my requests</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L17 6M17 6L12 11M17 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Main Product Card (Figma node 1252:19076) */}
      <div className="details-main-product-card" data-node-id="1252:19076">
        {/* Top Two-Column Block */}
        <div className="details-card-top-content">
          {/* Left Column: Graphic & 3 Badges */}
          <div className="details-card-left">
            <DetailsGraphicBox />

            <div className="details-badge-row">
              <div className="details-badge-item">
                <div className="details-badge-icon">
                  <SpeedGaugeIcon />
                </div>
                <span className="details-badge-text">Up to ~300 Mbps optimised</span>
              </div>
              <div className="details-badge-item">
                <div className="details-badge-icon">
                  <RoleShieldIcon />
                </div>
                <span className="details-badge-text">Secure & reliable</span>
              </div>
              <div className="details-badge-item">
                <div className="details-badge-icon">
                  <IntegrationNodesIcon />
                </div>
                <span className="details-badge-text">Easy to deploy & manage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle, 5 Specs, Pricing & Buttons */}
          <div className="details-card-right">
            <div className="details-card-right-header">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>

            {/* 5-row Vertical Specs Box */}
            <div className="details-card-specs-box">
              {specItems.map((spec, idx) => (
                <div key={idx} className="details-spec-row-item">
                  <div className="details-spec-icon-wrap">
                    <SpecDotIcon />
                  </div>
                  <span className="details-spec-text">{spec}</span>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="details-card-price-section">
              <span className="price-label">Starting from</span>
              <div className="price-value-row">
                <span className="price-amount">{currency}{product.price}</span>
                <span className="price-period">/site /month</span>
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

        {/* Bottom Specs & Information Section */}
        <div className="details-bottom-specs-stack">
          {/* Contract */}
          <div className="details-specs-block">
            <h3 className="details-specs-heading">Contract</h3>
            <p className="details-specs-text">24-month initial term, then 12-month renewal</p>
          </div>

          {/* Specifications / Product information */}
          <div className="details-specs-block">
            <h3 className="details-specs-heading">Specifications / Product information</h3>
            <ul className="details-specs-bullet-list">
              {specProductInfoList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Product includes */}
          <div className="details-specs-block">
            <h3 className="details-specs-heading">{product.name} includes</h3>
            <ul className="details-specs-bullet-list">
              {productIncludesList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Recommendations / Family Products Section (Figma node 1252:19077) */}
      <div className="details-recommendations-section" data-node-id="1252:19077">
        <div className="recommendations-header" data-node-id="1252:19078">
          <h2>Looking for more performance?</h2>
          <p>Check the family products “{product.category}”</p>
        </div>

        <div className="recommendations-cards-row" data-node-id="1252:19082">
          {recommendationsToRender.map((recProd) => (
            <div key={recProd.id} className="recommendation-product-card" data-name="product cards">
              <div className="rec-card-top-layout">
                <CircularGpuGraphic />

                <div className="rec-card-info-box">
                  <div className="rec-card-header">
                    <h3>{recProd.name}</h3>
                    <p>{recProd.description}</p>
                  </div>

                  <div className="rec-card-specs-box">
                    <div className="rec-spec-row-item">
                      <div className="rec-spec-icon">
                        <SpeedGaugeIcon />
                      </div>
                      <span className="rec-spec-text">
                        {recProd.features[0] || 'Up to ~1 Gbps optimised'}
                      </span>
                    </div>
                    <div className="rec-spec-row-item">
                      <div className="rec-spec-icon">
                        <RoleShieldIcon />
                      </div>
                      <span className="rec-spec-text">
                        {recProd.features[1] || 'Secure & reliable'}
                      </span>
                    </div>
                    <div className="rec-spec-row-item">
                      <div className="rec-spec-icon">
                        <IntegrationNodesIcon />
                      </div>
                      <span className="rec-spec-text">
                        {recProd.features[2] || 'Easy to deploy & manage'}
                      </span>
                    </div>
                  </div>

                  <div className="rec-card-price-section">
                    <span className="rec-price-label">Starting from</span>
                    <div className="rec-price-val-row">
                      <span className="rec-price-amount">{recProd.currencySymbol || '£'}{recProd.price}</span>
                      <span className="rec-price-period">
                        {recProd.period === '/mo' ? '/site /month' : recProd.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="rec-explore-btn"
                onClick={() => {
                  if (onExploreProduct) {
                    onExploreProduct(recProd);
                  }
                }}
              >
                Explore product
              </button>
            </div>
          ))}
        </div>

        {/* View More Footer Action */}
        <div className="recommendations-footer">
          <button type="button" className="rec-view-more-btn" onClick={onBack}>
            <span>View more</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L17 6M17 6L12 11M17 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
