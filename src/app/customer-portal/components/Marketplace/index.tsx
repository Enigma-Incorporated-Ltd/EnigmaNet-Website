import { useState, useEffect } from 'react';
import './marketplace.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductConfigure from './components/ProductConfigure';
import OrderReview from './components/OrderReview';
import PaymentBilling from './components/PaymentBilling';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import OrderTracking from './components/OrderTracking';
import RequestQuote from './components/RequestQuote';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  category: string;
  recommended?: boolean;
  newProduct?: boolean;
  features: string[];
  tags?: string[];
  specs: {
    label: string;
    options: string[];
  }[];
  currencySymbol?: string;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'esc-lite',
    name: 'ESC Lite',
    description: 'Secure, high-performance networking for single sites with optimised connectivity.',
    price: 99,
    period: '/site /month',
    category: 'ESC Secure Networking',
    recommended: true,
    currencySymbol: '£',
    tags: ['Single site', 'Virtual/cloud'],
    features: [
      'Up to ~300 Mbps optimised',
      'Secure & reliable',
      'Easy to deploy & manage'
    ],
    specs: [
      { label: 'Deployment Region', options: ['UK & Europe', 'North America', 'Asia-Pacific'] },
      { label: 'Bandwidth Tier', options: ['300 Mbps (Base)', '500 Mbps (+£30/mo)', '1 Gbps (+£70/mo)'] }
    ]
  },
  {
    id: 'esc-tenant-base',
    name: 'ESC Tenant Base',
    description: 'Centralised networking foundation for secure, managed connectivity across your multi-site deployment.',
    price: 150,
    period: '/tenant /month',
    category: 'ESC Secure Networking',
    currencySymbol: '£',
    tags: ['Multi-site', 'High availability'],
    features: [
      'Nexus integration & API access',
      'Global policy engine',
      'First 5 sites included'
    ],
    specs: [
      { label: 'Tenant Tier', options: ['Standard (5 sites)', 'Enterprise (15 sites +£100/mo)', 'Global Unlimited (+£250/mo)'] }
    ]
  },
  {
    id: 'esc-pro',
    name: 'ESC Pro',
    description: 'Enhanced secure networking for enterprise sites requiring ultra-high throughput and dedicated capacity.',
    price: 199,
    period: '/site /month',
    category: 'ESC Secure Networking',
    currencySymbol: '£',
    tags: ['Multi-site', 'High availability', 'Remote'],
    features: [
      'Up to ~1 Gbps optimised',
      'Dedicated SLA & 99.999% uptime',
      'Advanced threat protection'
    ],
    specs: [
      { label: 'Throughput', options: ['1 Gbps Dedicated', '2.5 Gbps Enterprise (+£120/mo)', '10 Gbps Ultra (+£350/mo)'] }
    ]
  },
  {
    id: 'edge',
    name: 'Enigma EDGE Router',
    description: 'Accelerate branch connectivity and security with Enigma Net Edge routing and built-in SD-WAN.',
    price: 120,
    period: '/site /month',
    category: 'Enigma EDGE',
    recommended: true,
    currencySymbol: '£',
    tags: ['Single site', 'Multi-site', 'Remote'],
    features: [
      'High-speed SD-WAN routing',
      'Integrated enterprise firewall',
      'Zero-touch remote console'
    ],
    specs: [
      { label: 'Deployment Region', options: ['UK & Europe', 'North America', 'Asia-Pacific'] },
      { label: 'Throughput Tier', options: ['100 Mbps (Base)', '500 Mbps (+£40/mo)', '1 Gbps (+£80/mo)'] }
    ]
  },
  {
    id: 'esc-storage',
    name: 'ESC Secure Storage',
    description: 'Secure file and data management with fast access, multi-cloud redundancy, and encryption.',
    price: 79,
    period: '/tb /month',
    category: 'ESC Secure Storage',
    currencySymbol: '£',
    tags: ['Virtual/cloud'],
    features: [
      'AES-256 military-grade encryption',
      'Automated daily snapshots',
      'Compliance & access audit logs'
    ],
    specs: [
      { label: 'Storage Tier', options: ['1 TB Standard', '5 TB Pro (+£120/mo)', '20 TB Enterprise (+£400/mo)'] }
    ]
  },
  {
    id: 'large-file-transfer',
    name: 'Enigma LFT (Large File Transfer)',
    description: 'Fast, secure large-file transfers for moving data seamlessly between distributed teams and locations.',
    price: 45,
    period: '/tenant /month',
    category: 'Enigma LFT',
    newProduct: true,
    currencySymbol: '£',
    tags: ['Virtual/cloud', 'Remote'],
    features: [
      'UDP accelerated transfer engine',
      'End-to-end encrypted tunnels',
      'Automated resume & validation'
    ],
    specs: [
      { label: 'Storage Bandwidth', options: ['500 GB (Base)', '2 TB (+£20/mo)', '10 TB (+£60/mo)'] }
    ]
  },
  {
    id: 'single-vpn',
    name: 'Single Site VPN Gateway',
    description: 'Secure remote VPN gateway connectivity for a single branch or office location.',
    price: 29,
    period: '/site /month',
    category: 'ESC Secure Networking',
    currencySymbol: '£',
    tags: ['Single site', 'Remote'],
    features: [
      'IPsec & OpenVPN gateway support',
      'Up to 50 concurrent client links',
      'Active real-time audit logging'
    ],
    specs: [
      { label: 'Server Location', options: ['London (UK)', 'Frankfurt (EU)', 'New York (US East)', 'Singapore'] }
    ]
  },
  {
    id: 'sdn-mesh',
    name: 'Enigma Connect SDN Mesh',
    description: 'Self-service connectivity plans for reliable, high-performance mesh networking between sites.',
    price: 199,
    period: '/network /month',
    category: 'Enigma Connect',
    currencySymbol: '£',
    tags: ['Multi-site', 'High availability'],
    features: [
      'Fully meshed site tunnels',
      'Dynamic routing & failover',
      'Centralized APN controller'
    ],
    specs: [
      { label: 'Connected Nodes', options: ['Up to 5 sites', 'Up to 15 sites (+£80/mo)', 'Unlimited sites (+£200/mo)'] }
    ]
  },
  {
    id: 'ha-gateway',
    name: 'High Availability Gateway',
    description: 'Redundant network gateways with sub-second failover capabilities for mission-critical setups.',
    price: 149,
    period: '/site /month',
    category: 'Enigma Connect',
    recommended: true,
    currencySymbol: '£',
    tags: ['High availability', 'Multi-site'],
    features: [
      'Active-active hot standby mode',
      'Sub-second cellular/fiber failover',
      'Dual ISP dynamic load balancing'
    ],
    specs: [
      { label: 'Backup Link Carrier', options: ['Vodafone 5G Backup', 'EE Cellular Backup', 'Dual Carrier (+£35/mo)'] }
    ]
  },
  {
    id: 'pos-wan',
    name: 'Retail POS WAN Optimizer',
    description: 'Prioritize POS transaction traffic and optimize bandwidth efficiency for retail stores.',
    price: 39,
    period: '/site /month',
    category: 'Enigma Connect',
    currencySymbol: '£',
    tags: ['Retail', 'Single site'],
    features: [
      'POS transaction queue priority',
      'PCI-DSS compliant tunneling',
      'Real-time latency monitoring'
    ],
    specs: [
      { label: 'POS Terminal Count', options: ['1-5 terminals', '6-20 terminals (+£15/mo)', 'Unlimited (+£45/mo)'] }
    ]
  },
  {
    id: 'construction-modem',
    name: 'Construction Site Cellular Link',
    description: 'Managed edge connectivity for businesses, branches, temporary sites, and outdoor construction.',
    price: 89,
    period: '/site /month',
    category: 'Enigma EDGE',
    newProduct: true,
    currencySymbol: '£',
    tags: ['Construction', 'Remote', 'Single site'],
    features: [
      'Ruggedized weatherproof IP65 case',
      'Triple-carrier 5G aggregation',
      'Deployable in minutes with mast mounts'
    ],
    specs: [
      { label: 'Enclosure Type', options: ['Standard Desktop Mount', 'IP67 Rugged Pole Mount (+£12/mo)'] }
    ]
  },
  {
    id: 'remote-access',
    name: 'Remote Access Server',
    description: 'Provide secure clientless web gateway access to internal systems for remote workers.',
    price: 19,
    period: '/seat /month',
    category: 'ESC Secure Networking',
    currencySymbol: '£',
    tags: ['Remote', 'Virtual/cloud'],
    features: [
      'SAML 2.0 / OpenID Connect SSO',
      'Device posture compliance checks',
      'Clientless HTML5 browser access'
    ],
    specs: [
      { label: 'User Seat Band', options: ['1-10 users', '11-50 users (+£20/mo)', '51-200 users (+£50/mo)'] }
    ]
  },
  {
    id: 'esc-enterprise',
    name: 'ESC Enterprise Gateway',
    description: 'Ultra high-speed dedicated gateway with advanced traffic steering and multi-cloud interconnection.',
    price: 249,
    period: '/site /month',
    category: 'ESC Secure Networking',
    newProduct: true,
    currencySymbol: '£',
    tags: ['High availability', 'Multi-site'],
    features: [
      'Up to ~2.5 Gbps throughput',
      'Zero-loss dynamic failover',
      '24/7 dedicated NOC monitoring'
    ],
    specs: [
      { label: 'Uptime Tier', options: ['99.99% Platinum', '99.999% Diamond (+£100/mo)'] }
    ]
  }
];

interface MarketplaceProps {
  setActiveNav: (nav: string) => void;
}

export default function Marketplace({ setActiveNav }: MarketplaceProps) {
  const [step, setStep] = useState<'list' | 'details' | 'configure' | 'review' | 'payment' | 'confirmed' | 'success' | 'quote'>('list');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [config, setConfig] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);
  
  // Local browsing states (default to ESC Secure Networking matching Figma)
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('ESC Secure Networking');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeSort, setActiveSort] = useState<string>('Recommended');

  // Handle product selection
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    
    // Initialize default specs
    const initialConfig: Record<string, string> = {
      sites: '5',
      billing: 'Monthly',
      securityPack: 'false',
      resiliencePack: 'false',
      analyticsPack: 'false'
    };
    product.specs.forEach(spec => {
      initialConfig[spec.label] = spec.options[0];
    });
    setConfig(initialConfig);
    setStep('details');
  };

  // Filter logic
  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesFilter = activeFilter === 'All' || (product.tags && product.tags.includes(activeFilter));
    return matchesSearch && matchesCategory && matchesFilter;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === 'Highest price') {
      return b.price - a.price;
    }
    if (activeSort === 'Lowest price') {
      return a.price - b.price;
    }
    if (activeSort === 'Highest throughput') {
      const aWeight = a.id === 'edge' || a.id === 'sdn-mesh' || a.id === 'esc-pro' ? 2 : 0;
      const bWeight = b.id === 'edge' || b.id === 'sdn-mesh' || b.id === 'esc-pro' ? 2 : 0;
      return bWeight - aWeight;
    }
    if (activeSort === 'Most resilient') {
      const aWeight = a.id === 'ha-gateway' || a.id === 'construction-modem' ? 2 : 0;
      const bWeight = b.id === 'ha-gateway' || b.id === 'construction-modem' ? 2 : 0;
      return bWeight - aWeight;
    }
    return 0;
  });

  return (
    <div className="marketplace-container">
      {step === 'list' && (
        <ProductList 
          products={sortedProducts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          onSelect={handleSelectProduct} 
          onBack={() => setActiveNav('dashboard')} 
          onViewRequests={() => setActiveNav('activities')}
        />
      )}
      {step === 'details' && selectedProduct && (
        <ProductDetails 
          product={selectedProduct}
          products={MOCK_PRODUCTS}
          onBuy={() => setStep('configure')} 
          onBack={() => setStep('list')} 
          onRequestQuote={() => setStep('quote')}
          onExploreProduct={handleSelectProduct}
          onViewRequests={() => setActiveNav('activities')}
        />
      )}
      {step === 'quote' && selectedProduct && (
        <RequestQuote
          product={selectedProduct}
          products={MOCK_PRODUCTS}
          onBack={() => setStep('details')}
          onViewRequests={() => setActiveNav('activities')}
          onGoToMarketplace={() => {
            setStep('list');
            setSelectedProduct(null);
          }}
        />
      )}
      {step === 'configure' && selectedProduct && (
        <ProductConfigure 
          product={selectedProduct}
          config={config}
          setConfig={setConfig}
          onContinue={() => setStep('review')} 
          onBack={() => setStep('details')} 
        />
      )}
      {step === 'review' && selectedProduct && (
        <OrderReview 
          product={selectedProduct}
          config={config}
          onContinue={() => setStep('payment')} 
          onBack={() => setStep('configure')} 
        />
      )}
      {step === 'payment' && selectedProduct && (
        <PaymentBilling 
          product={selectedProduct}
          config={config}
          onContinue={() => setStep('confirmed')} 
          onBack={() => setStep('review')} 
        />
      )}
      {step === 'confirmed' && selectedProduct && (
        <OrderConfirmationModal
          product={selectedProduct}
          config={config}
          onGoToServices={() => {
            setStep('list');
            setActiveNav('services');
          }}
          onViewOrderDetails={() => setStep('success')}
          onBackToMarketplace={() => {
            setStep('list');
            setSelectedProduct(null);
          }}
        />
      )}
      {step === 'success' && selectedProduct && (
        <OrderTracking 
          product={selectedProduct}
          config={config}
          onBack={() => setStep('confirmed')}
          onViewServices={() => {
            setStep('list');
            setActiveNav('services');
          }} 
        />
      )}
    </div>
  );
}
