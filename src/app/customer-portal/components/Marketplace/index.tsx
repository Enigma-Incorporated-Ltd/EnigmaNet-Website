import { useState } from 'react';
import './marketplace.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductConfigure from './components/ProductConfigure';
import OrderReview from './components/OrderReview';
import PaymentBilling from './components/PaymentBilling';
import SuccessView from './components/SuccessView';

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
    description: 'Centralised networking foundation for secure, managed connectivity across your sites.',
    price: 99,
    period: '/site/month',
    category: 'ESC Secure Networking',
    recommended: true,
    currencySymbol: '£',
    features: [
      'Secure connectivity',
      'Managed networking',
      'APN integration',
      'Centralised policy management',
      'Monitoring'
    ],
    specs: []
  },
  {
    id: 'esc-tenant-base',
    name: 'ESC Tenant Base',
    description: 'Centralised networking foundation for secure, managed connectivity across your sites.',
    price: 150,
    period: '/tenant/month',
    category: 'ESC Secure Networking',
    currencySymbol: '£',
    features: [
      'Nexus integration & API access',
      'Global policy engine',
      'First 5 sites included'
    ],
    specs: []
  },
  {
    id: 'esc-pro',
    name: 'ESC Pro',
    description: 'Enhanced secure networking for sites requiring higher performance and greater connectivity capacity.',
    price: 199,
    period: '/site/month',
    category: 'ESC Secure Networking',
    currencySymbol: '£',
    features: [
      'Up to ~1 Gbps optimised',
      'Secure & reliable',
      'Easy to deploy & manage'
    ],
    specs: []
  },
  {
    id: 'edge',
    name: 'EDGE',
    description: 'Accelerate branch connectivity and security with Enigma Net Edge routing and built-in SD-WAN.',
    price: 120,
    period: '/mo',
    category: 'Enigma EDGE',
    recommended: true,
    features: [
      'High-speed SD-WAN routing and traffic steering',
      'Integrated enterprise branch firewall protection',
      'Zero-touch provisioning and remote management console',
      'Dual LTE cellular failover backup SIM card slot'
    ],
    specs: [
      { label: 'Deployment Region', options: ['North America', 'Europe', 'Asia-Pacific'] },
      { label: 'Throughput Tier', options: ['100 Mbps (Base)', '500 Mbps (+$50/mo)', '1 Gbps (+$100/mo)'] }
    ]
  },
  {
    id: 'esc-storage',
    name: 'ESC Secure Storage Vault',
    description: 'Highly secure, encrypted cloud storage vault with automated snapshot backups and compliance logging.',
    price: 79,
    period: '/tb/month',
    category: 'ESC Secure Storage',
    currencySymbol: '£',
    features: [
      'AES-256 military-grade encryption',
      'Automated daily snapshots & retention policies',
      'Compliance & access audit logs',
      '99.999% durability & availability'
    ],
    specs: [
      { label: 'Storage Tier', options: ['1 TB Standard', '5 TB Pro (+$150/mo)', '20 TB Enterprise (+$500/mo)'] }
    ]
  },
  {
    id: 'large-file-transfer',
    name: 'Large File Transfer',
    description: 'Secure and reliable high-speed data transfer solutions for large payloads and files across servers.',
    price: 45,
    period: '/mo',
    category: 'Enigma LFT',
    newProduct: true,
    features: [
      'UDP accelerated transfer protocols for low-latency delivery',
      'End-to-end AES-256 encryption for corporate files',
      'No physical file size limit limitations',
      'Automated retry, validation check, and resume logic'
    ],
    specs: [
      { label: 'Storage Capacity', options: ['500 GB (Base)', '2 TB (+$25/mo)', '10 TB (+$80/mo)'] }
    ]
  },
  {
    id: 'single-vpn',
    name: 'Single Site VPN',
    description: 'Secure remote VPN gateway connectivity for a single branch or office location.',
    price: 29,
    period: '/mo',
    category: 'ESC Secure Networking',
    features: [
      'Secure IPsec & OpenVPN gateway support',
      'Up to 50 concurrent client connections',
      'Active network audit logging',
      'Self-service client provisioning portal'
    ],
    specs: [
      { label: 'Server Location', options: ['US East', 'US West', 'EU West', 'Asia East'] }
    ]
  },
  {
    id: 'sdn-mesh',
    name: 'SDN Mesh Network',
    description: 'Connect multiple office sites together in a dynamic, self-healing site-to-site SDN network.',
    price: 199,
    period: '/mo',
    category: 'Enigma CONNECT',
    features: [
      'Fully meshed site-to-site tunnels',
      'Dynamic routing and path path selection',
      'Low-latency overlay tunneling',
      'Centralized APN controller dashboard console'
    ],
    specs: [
      { label: 'Number of Sites', options: ['Up to 5 sites', 'Up to 15 sites (+$100/mo)', 'Unlimited sites (+$250/mo)'] }
    ]
  },
  {
    id: 'ha-gateway',
    name: 'High Availability Gateway',
    description: 'Redundant network gateways with sub-second failover capabilities for mission-critical setups.',
    price: 149,
    period: '/mo',
    category: 'Enigma CONNECT',
    recommended: true,
    features: [
      'Active-active redundancy hot standby mode',
      'Automatic sub-second cellular/fiber failover link',
      'Dual provider ISP load balancing algorithms',
      'SLA guaranteed 99.999% uptime benchmark'
    ],
    specs: [
      { label: 'Secondary ISP Link', options: ['Verizon Wireless Backup', 'AT&T Cellular Backup', 'Dual Provider (+$40/mo)'] }
    ]
  },
  {
    id: 'pos-wan',
    name: 'Retail POS WAN Optimizer',
    description: 'Prioritize POS transaction traffic and optimize bandwidth efficiency for retail stores.',
    price: 39,
    period: '/mo',
    category: 'Enigma CONNECT',
    features: [
      'POS transaction packet priority queueing',
      'PCI-DSS compliance tunnels by design',
      'Ultra-low bandwidth packet optimization algorithms',
      'Real-time transaction transaction latency monitoring dashboards'
    ],
    specs: [
      { label: 'POS Terminal Count', options: ['1-5 terminals', '6-20 terminals (+$20/mo)', 'Enterprise unlimited (+$60/mo)'] }
    ]
  },
  {
    id: 'construction-modem',
    name: 'Construction Site Cellular Link',
    description: 'Heavy-duty weather-proof cellular router for outdoor construction projects and temporary sites.',
    price: 89,
    period: '/mo',
    category: 'Enigma EDGE',
    newProduct: true,
    features: [
      'Ruggedized weather-resistant casing (IP65)',
      'Triple-carrier aggregate cellular 5G modems',
      'Deployable in minutes with portable portable mast mounts',
      'GPS location tracking & network coverage mapping'
    ],
    specs: [
      { label: 'Enclosure Type', options: ['Standard indoor desktop', 'IP67 Rugged Outdoor (+$15/mo)'] }
    ]
  },
  {
    id: 'remote-access',
    name: 'Remote Access Server',
    description: 'Provide secure clientless web gateway access to internal systems for remote workers.',
    price: 19,
    period: '/mo',
    category: 'ESC Secure Networking',
    features: [
      'SAML 2.0 / OpenID Connect SSO integration',
      'Device posture compliance authentication',
      'Granular directory group access controller',
      'Clientless HTML5 support for remote browser access'
    ],
    specs: [
      { label: 'User Seat Band', options: ['1-10 users', '11-50 users (+$25/mo)', '51-200 users (+$65/mo)'] }
    ]
  }
];

interface MarketplaceProps {
  setActiveNav: (nav: string) => void;
}

export default function Marketplace({ setActiveNav }: MarketplaceProps) {
  const [step, setStep] = useState<'list' | 'details' | 'configure' | 'review' | 'payment' | 'success'>('list');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [config, setConfig] = useState<Record<string, string>>({});
  
  // Local browsing states
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSort, setActiveSort] = useState<string>('');

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
    return matchesSearch && matchesCategory;
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
      // Edge and Mesh SDN network first (mock rule)
      const aWeight = a.id === 'edge' || a.id === 'sdn-mesh' ? 2 : 0;
      const bWeight = b.id === 'edge' || b.id === 'sdn-mesh' ? 2 : 0;
      return bWeight - aWeight;
    }
    if (activeSort === 'Most resilient') {
      // High Availability Gateway and Construction Link first (mock rule)
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
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          onSelect={handleSelectProduct} 
          onBack={() => setActiveNav('dashboard')} 
        />
      )}
      {step === 'details' && selectedProduct && (
        <ProductDetails 
          product={selectedProduct}
          products={MOCK_PRODUCTS}
          onBuy={() => setStep('configure')} 
          onBack={() => setStep('list')} 
          onExploreProduct={handleSelectProduct}
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
          onContinue={() => setStep('success')} 
          onBack={() => setStep('review')} 
        />
      )}
      {step === 'success' && selectedProduct && (
        <SuccessView 
          product={selectedProduct}
          config={config}
          onFinish={() => {
            setStep('list');
            setActiveNav('dashboard');
          }} 
        />
      )}
    </div>
  );
}
