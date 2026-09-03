import Logo from '@/assets/img/EnigmaNet-logo.png';
export type NavLink = {
  label: string;
  href: string;
  badge?: string;
  type?: 'info' | 'warning' | 'error' | 'success';
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export type MegaMenuItem = {
  label: string;
  leftRail: { label: string; id: string }[];
  panels: Record<string, NavSection[]>;
  footerLink?: { label: string; href: string };
  promo?: {
    label: string;
    image?: string;
    description?: string;
    cta: string;
    ctaHref: string;
  };
};

export type NavItem =
  | { type: 'link'; label: string; href: string }
  | { type: 'dropdown'; label: string; links: NavLink[] }
  | { type: 'mega'; label: string; data: MegaMenuItem };
type UtilityNavItem = {
  label: string;
  href: string;
};
type HeaderConfig = {
  logo: { text: string; href: string };
  nav_items: NavItem[];
  utility_nav?: UtilityNavItem[];
  cta_button?: { label: string; href: string; icon?: string; variant?: string; size?: string };
};

export interface NavClass {
  Headerclass?: string;
  headerSticky?: string;
  isNavDark?: boolean;
  darkenable?: boolean;
}

// ── Mega Menu Data (Updated per Enigma Recommendation) ────────────────────────────────────────────────
export const MEGA_MENU_DATA: Record<string, MegaMenuItem> = {
  Products: {
    leftRail: [
      // { label: 'The Enigma Platform', id: 'platform' },
      { label: 'Performance Networking', id: 'networking' },
      { label: 'Connectivity Products', id: 'connectivity' },
      { label: 'Data & File Services', id: 'data' },
      // { label: 'AI & Automation', id: 'ai' },
      // { label: 'OEM & Integration', id: 'integration' },
      // { label: 'View All Products', id: 'all' },
    ],
    panels: {
      // platform: [
      //   {
      //     title: 'The Enigma Platform',
      //     links: [
      //       { label: 'Enigma Nexus', href: '/products/enigma-platform/enigma-nexus' },
      //       { label: 'Enigma Command', href: '/products/enigma-platform/enigma-command' },
      //       { label: 'Enigma Grid', href: '/products/enigma-platform/enigma-grid' },
      //       { label: 'Enigma SyncSphere', href: '/products/enigma-platform/enigma-syncsphere' },
      //       { label: 'Enigma Hub', href: '/products/enigma-platform/enigma-hub' },
      //       { label: 'Enigma Ledger', href: '/products/enigma-platform/enigma-ledger' },
      //     ],
      //   },
      // ],
      networking: [
        {
          title: 'Performance Networking',
          links: [
            { label: 'Enigma APN Core', href: '/products/performance-networking/enigma-apn-core' },
            {
              label: 'ESC - Secure Networking',
              href: '/products/performance-networking/esc-secure-networking',
            },
            {
              label: 'TCP Acceleration',
              href: '/products/performance-networking/tcp-acceleration',
            },
            { label: 'RAIN resilience', href: '/products/performance-networking/rain-resilience' },
            {
              label: 'Multi-link bonding',
              href: '/products/performance-networking/multi-link-bonding',
            },
            {
              label: 'Intelligent Traffic Management',
              href: '/products/performance-networking/intelligent-traffic-management',
            },
          ],
        },
      ],
      connectivity: [
        {
          title: 'Connectivity Products',
          links: [
            {
              label: 'Enigma Connect ',
              href: '/products/connectivity-products/enigma-connect',
              badge: 'Start Free',
              type: 'success',
            },
            // { label: 'Enigma Connect Mobile', href: '/connect/mobile', badge: 'View Pricing' },
            // { label: 'Enigma Connect Pro', href: '/connect/pro' },
            // { label: 'Enigma Connect MAX', href: '/connect/max' },
            // { label: 'Enigma EDGE Lite', href: '/edge/lite' },
            { label: 'Enigma EDGE ', href: '/products/connectivity-products/enigma-edge' },
            // { label: 'Enigma EDGE Max', href: '/edge/max' },
          ],
        },
      ],
      data: [
        {
          title: 'Data & File Services',
          links: [
            // { label: 'SyncSphere ', href: '/products/data-&-file-services/syncsphere' },
            { label: 'Hot Storage', href: '/products/data-&-file-services/hot-storage' },
            // {
            //   label: 'Large File Transfer',
            //   href: '/products/data-&-file-services/large-file-transfer',
            // },
            {
              label: 'Managed File Transfer',
              href: '/products/data-&-file-services/managed-file-transfer',
            },
            // {
            //   label: 'Multi-cloud integration',
            //   href: '/products/data-&-file-services/multi-cloud-integration',
            // },
          ],
        },
      ],
      ai: [
        {
          title: 'Ai & Automation',
          links: [
            { label: 'Enigma Sentinel', href: '/products/ai-&-automation/enigma-sentinel' },
            // { label: 'Autonomous monitoring', href: '/ai/autonomous-monitoring' },
            // { label: 'Diagnosis', href: '/ai/diagnosis' },
            // { label: 'Remediation', href: '/ai/remediation' },
            // { label: 'Audit and action visibility', href: '/ai/audit' },
          ],
        },
      ],
      integration: [
        {
          title: 'OEM & Integration',
          links: [
            {
              label: 'Powered by APN Core',
              href: '/products/oem-integration/powered-by-apn-core',
            },
            {
              label: 'OEM & Integration',
              href: '/products/oem-integration',
            },
            {
              label: 'Binary Integration',
              href: '/products/oem-integration#binary-integration',
            },
            {
              label: 'Container Deployment',
              href: '/products/oem-integration#container-deployment',
            },
            {
              label: 'Virtual Appliance',
              href: '/products/oem-integration#virtual-appliance',
            },
          ],
        },
      ],
      // all: [
      //   {
      //     title: 'Self-service Options',
      //     links: [
      //       { label: 'Compare Plans', href: '/products/compare' },
      //       { label: 'View Pricing', href: '/pricing' },
      //       { label: 'Start Free', href: '/free-trial' },
      //       { label: 'Build Your Deployment', href: '/deployment' },
      //     ],
      //   },
      // ],
    },
    footerLink: { label: 'View All Products »', href: '/products' },
    promo: {
      label: 'GARTNER.',
      description:
        'Enigma Named a Leader in the 2025 Gartner Magic Quadrant™ for Hybrid Layer Firewall',
      image: Logo,
      cta: 'Get the Report »',
      ctaHref: '/products',
    },
    label: '',
  },
  Solutions: {
    leftRail: [
      // { label: 'Enterprise', id: 'enterprise' },
      { label: 'AI & Data Infrastructure', id: 'ai-data' },
      // { label: 'Remote Work & Branch', id: 'remote' },
      // { label: 'Operational Technology & Remote Assets', id: 'ot' },
      // { label: 'Industries', id: 'industries' },
      { label: 'Service Providers & Partners', id: 'providers' },
      // { label: 'Defense Dualtechnology', id: 'defense' },
      { label: 'Technology Partner', id: 'techpartner' },
      { label: 'Channel Partner ', id: 'channel' },
      { label: 'Startups & SMBs', id: 'startups' },
    ],
    panels: {
      enterprise: [
        {
          title: 'Enterprise',
          links: [
            {
              label: 'Enterprise ',
              href: '/solutions/enterprise',
            },
            // { label: 'Hybrid cloud performance', href: '/solutions/enterprise/hybrid-cloud' },
            // { label: 'Network control and visibility', href: '/solutions/enterprise/visibility' },
            // { label: 'Multi-site continuity', href: '/solutions/enterprise/continuity' },
          ],
        },
      ],
      'ai-data': [
        {
          title: 'AI & Data Infrastructure',
          links: [
            { label: 'AI & Data Infrastructure', href: '/solutions/ai-&-data-infrastructure' },
            // { label: 'Model movement and synchronisation', href: '/solutions/ai/model-sync' },
            // { label: 'Cloud-to-cloud transfer', href: '/solutions/ai/cloud-transfer' },
            // { label: 'Distributed compute workflows', href: '/solutions/ai/distributed-compute' },
            // { label: 'Large file transfer at scale', href: '/solutions/ai/large-file-scale' },
          ],
        },
      ],
      remote: [
        {
          title: 'Remote Work & Branch',
          links: [
            { label: 'Remote Work & Branch', href: '/solutions/remote-work-&-branch' },
            // { label: 'Remote device connectivity', href: '/solutions/remote/connectivity' },
            // { label: 'Mobile resilience', href: '/solutions/remote/mobile' },
            // { label: 'Business continuity over poor links', href: '/solutions/remote/continuity' },
          ],
        },
      ],
      ot: [
        {
          title: 'Operational Technology & Remote Assets',
          links: [
            {
              label: 'Operational Technology & Remote Assets',
              href: '/solutions/operational-technology-&-remote-assets',
            },
            // { label: 'Remote asset resilience', href: '/solutions/ot/asset-resilience' },
            // { label: 'Rugged / constrained environments', href: '/solutions/ot/rugged' },
            // { label: 'Secure telemetry and control traffic', href: '/solutions/ot/telemetry' },
          ],
        },
      ],
      industries: [
        {
          title: 'Industries',
          links: [
            { label: 'Industries', href: '/solutions/industries' },
            // { label: 'Healthcare', href: '/industries/healthcare' },
            // { label: 'Retail', href: '/industries/retail' },
            // { label: 'Media & content', href: '/industries/media' },
            // { label: 'Education', href: '/industries/education' },
            // { label: 'Energy & utilities', href: '/industries/energy' },
          ],
        },
      ],
      providers: [
        {
          title: 'Service Providers & Partners',
          links: [
            {
              label: 'Service Providers & Partners',
              href: '/solutions/service-providers-&-partners',
            },
            // { label: 'OEM / CPE integration', href: '/solutions/providers/oem' },
            // { label: 'Carrier / telco deployment', href: '/solutions/providers/telco' },
            // { label: 'White-label opportunities', href: '/solutions/providers/white-label' },
          ],
        },
      ],
      defense: [
        {
          title: 'Defense Dualtechnology',
          links: [{ label: 'Defense Dualtechnology', href: '/solutions/defense-dualtechnology' }],
        },
      ],
      techpartner: [
        {
          title: 'Technology Partner',
          links: [{ label: 'Technology Partner', href: '/solutions/technology-partner' }],
        },
      ],
      channel: [
        {
          title: 'Channel Partner',
          links: [{ label: 'Channel Partner', href: '/solutions/channel-partner' }],
        },
      ],
      startups: [
        {
          title: 'Startups & SMBs',
          links: [{ label: 'Startups & SMBs', href: '/solutions/startups-&-smb' }],
        },
      ],
    },
    promo: {
      label: 'Why Enigma?',
      image: Logo,
      description: 'For AI and large data movement',
      cta: 'Find the Right Solution »',
      ctaHref: '/solutions',
    },
    label: '',
  },
  Support: {
    leftRail: [
      { label: 'Customer Portal', id: 'customer' },
      // { label: 'Professional Services', id: 'professional' },
      // { label: 'Documentation & Downloads', id: 'docs' },
      // { label: 'Developer / Integration Portal', id: 'developer' },
      // { label: 'Training & Onboarding', id: 'training' },
    ],
    panels: {
      customer: [
        {
          title: 'Utility',
          links: [
            // { label: 'Contact support', href: '/support' },
            { label: 'Customer Portal', href: '/customers-portal' },
            { label: 'Developer Portal', href: '/developer-portal' },
            { label: 'Docs', href: '/docs' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Status', href: '/status' },
          ],
        },
      ],
      // professional: [
      //   {
      //     title: 'PROFESSIONAL SERVICES',
      //     links: [
      //       { label: 'Solution design', href: '/services/design' },
      //       { label: 'Deployment support', href: '/services/deployment' },
      //       { label: 'Migration planning', href: '/services/migration' },
      //       { label: 'Health checks', href: '/services/health-check' },
      //       { label: 'Advisory', href: '/services/advisory' },
      //     ],
      //   },
      // ],
      // docs: [
      //   {
      //     title: 'DOCUMENTATION & DOWNLOADS',
      //     links: [
      //       { label: 'Product docs', href: '/docs/products' },
      //       { label: 'Admin guides', href: '/docs/admin' },
      //       { label: 'Release notes', href: '/docs/releases' },
      //       { label: 'Downloads', href: '/downloads' },
      //       { label: 'Status page', href: '/status' },
      //     ],
      //   },
      // ],
      // developer: [
      //   {
      //     title: 'DEVELOPER / INTEGRATION PORTAL',
      //     links: [
      //       { label: 'API docs', href: '/developer/api' },
      //       { label: 'SDKs', href: '/developer/sdks' },
      //       { label: 'Auth', href: '/developer/auth' },
      //       { label: 'Integration guides', href: '/developer/guides' },
      //       { label: 'OEM documentation', href: '/developer/oem' },
      //     ],
      //   },
      // ],
      // training: [
      //   {
      //     title: 'TRAINING & ONBOARDING',
      //     links: [
      //       { label: 'Getting started', href: '/getting-started' },
      //       { label: 'Quick Start Guides', href: '/quick-start' },
      //       { label: 'Common Deployment Templates', href: '/templates' },
      //       { label: 'Guided Setup', href: '/guided-setup' },
      //       { label: 'API Quickstarts', href: '/quick-start/api' },
      //       { label: 'Troubleshooting by Product', href: '/troubleshooting' },
      //       { label: 'Onboarding Checklists', href: '/onboarding' },
      //       { label: 'Knowledge base', href: '/kb' },
      //       { label: 'Best practices', href: '/best-practices' },
      //     ],
      //   },
      // ],
    },
    promo: {
      label: 'DEPLOY IN 15 MINUTES',
      image: Logo,
      description: 'Quick start guide for Enigma Connect',
      cta: 'Get Started »',
      ctaHref: '/get-in-touch',
    },
    label: '',
  },
  Partners: {
    leftRail: [
      { label: 'Kinnami Partnership  ', id: 'for-partners' },
      { label: 'Start Up Agency ', id: 'startup' },
      // { label: 'Become a Partner', id: 'become' },
      // { label: 'Find a Partner', id: 'find' },
    ],
    panels: {
      'for-partners': [
        {
          title: 'Partners ',
          links: [
            { label: 'Kinnami Partnership  ', href: '/partners/kinnami-partnership' },
            // { label: 'Deal registration', href: '/partners/deal-reg' },
            // { label: 'Shared resources', href: '/partners/resources' },
          ],
        },
        // {
        //   title: 'PARTNER PROGRAMMES',
        //   links: [
        //     { label: 'Technology partners', href: '/partners/technology' },
        //     { label: 'Resellers', href: '/partners/reseller' },
        //     { label: 'MSPs / MSSPs', href: '/partners/msp' },
        //     { label: 'Global system integrators', href: '/partners/gsis' },
        //     { label: 'OEM / CPE partners', href: '/partners/oem' },
        //     { label: 'Telco / carrier partners', href: '/partners/telco' },
        //   ],
        // },
      ],
      startup: [
        {
          title: 'Partners ',
          links: [{ label: 'Start Up Agency ', href: '/partners/start-up-agency' }],
        },
      ],
      // become: [
      //   {
      //     title: 'BECOME A PARTNER',
      //     links: [
      //       { label: 'Apply Now', href: '/partners/apply' },
      //       { label: 'Partner Benefits', href: '/partners/benefits' },
      //       { label: 'Partner Programs Overview', href: '/partners/overview' },
      //     ],
      //   },
      // ],
      // find: [
      //   {
      //     title: 'FIND A PARTNER',
      //     links: [
      //       { label: 'Partner Locator', href: '/partners/locator' },
      //       { label: 'Partner Directory', href: '/partners/directory' },
      //     ],
      //   },
      // ],
    },
    promo: {
      label: 'FEATURED PARTNER',
      image: Logo,
      description: 'See how TechPartner Inc. delivers Enigma solutions',
      cta: 'Read Case Study »',
      ctaHref: '/partners',
    },
    label: '',
  },
  Company: {
    leftRail: [
      { label: 'Company', id: 'company' },
      { label: 'Trust & Security', id: 'trust' },
      { label: 'Resources', id: 'resources' },
      { label: 'Careers', id: 'careers' },
    ],
    panels: {
      company: [
        {
          title: 'Company',
          links: [
            { label: 'About Enigma', href: '/company/about-enigma' },
            { label: 'Leadership', href: '/company/leadership' },
            { label: 'Newsroom', href: '/company/newsroom' },

            { label: 'Blog / Insights', href: '/company/blog-insight' },
          ],
        },
      ],
      trust: [
        {
          title: 'Trust & Security',
          links: [
            { label: 'Trust Centre', href: '/company/trust-&-security/trust-centre' },
            {
              label: 'Security Posture',
              href: '/company/trust-&-security/trust-centre#security-posture',
            },
            {
              label: 'Compliance / Certifications',
              href: '/company/trust-&-security/trust-centre#compliance-and-certifications',
            },
            { label: 'Policies', href: '/company/trust-&-security/policies' },
            { label: 'Legal', href: '/legal' },
          ],
        },
      ],
      resources: [
        {
          title: 'RESOURCES',
          links: [
            { label: 'Case Studies', href: '/company/resources/case-studies' },
            { label: 'White Papers', href: '/company/resources/white-papers' },
            { label: 'Architecture Notes', href: '/company/resources/architecture' },
            { label: 'FAQ', href: '/company/resources/faq' },
            { label: 'Glossary', href: '/company/resources/glossary' },
          ],
        },
      ],
      careers: [
        {
          title: 'CAREERS',
          links: [
            { label: 'Careers', href: '/company/careers' },
            { label: 'Culture', href: '/company/careers#culture' },
            {
              label: 'Open Roles',
              href: '/company/careers#opening-roles',
              badge: 'No open roles currently',
              type: 'info',
            },
            { label: 'Why Enigma', href: '/company/careers#why-enigma' },
          ],
        },
        //   {
        //     title: 'EVENTS & WEBINARS',
        //     links: [
        //       { label: 'Events', href: '/events' },
        //       { label: 'Webinars', href: '/webinars' },
        //       { label: 'On-demand sessions', href: '/webinars/on-demand' },
        //     ],
        //   },
      ],
    },
    promo: {
      label: 'FEATURED CONTENT',
      image: Logo,
      description: "How Enigma powers the world's largest data movements",
      cta: 'Read Case Study »',
      ctaHref: '/company',
    },
    label: '',
  },
  ContactUs: {
    leftRail: [
      { label: 'Contact Us', id: 'sales' },
      //   { label: 'Partner Enquiry', id: 'partner' },
      { label: 'Support', id: 'support' },
    ],
    panels: {
      sales: [
        {
          title: 'Contact Us',
          links: [
            { label: 'Contact Us', href: '/get-in-touch' },
            { label: 'Request A Quote', href: '/contact-us/request-a-quote' },
          ],
        },
      ],
      support: [
        {
          title: 'Support',
          links: [{ label: 'Support', href: '/contact-us/support' }],
        },
      ],
      // partner: [
      //   {
      //     title: 'PARTNERSHIPS',
      //     links: [
      //       { label: 'Technology partnership', href: '/contact/tech-partner' },
      //       { label: 'OEM / CPE enquiry', href: '/contact/oem' },
      //       { label: 'MSP / reseller enquiry', href: '/contact/msp' },
      //       { label: 'Telco / carrier enquiry', href: '/contact/telco' },
      //     ],
      //   },
      // ],
      // support: [
      //   {
      //     title: 'SUPPORT',
      //     links: [
      //       { label: 'Existing customer support', href: '/support/contact' },
      //       { label: 'Customer portal', href: '/portal' },
      //       { label: 'Escalation path', href: '/support/escalation' },
      //     ],
      //   },
      // ],
    },
    promo: {
      label: 'Talk to Enigma',
      image: Logo,
      description: 'Get in touch with our team',
      cta: 'Contact Us »',
      ctaHref: '/contact-us',
    },
    label: '',
  },
  TrueCost: {
    leftRail: [{ label: 'TrueCost', id: 'truecost' }],
    panels: {
      truecost: [
        {
          title: 'TrueCost',
          links: [
            { label: 'TrueCost', href: '/truecost' },
            { label: 'Hot storage TCO Calculator', href: '/hot-storage-tco-calculator' },
            // {
            //   label: 'Infrastructure Resilience Check',
            //   href: '/infrastructure-resilience-check',
            // },
          ],
        },
      ],
    },
    label: '',
  },
};

// ── Fallback config (Updated with utility nav and Start Free CTA) ────────────────────────────────────────
export const FALLBACK_CONFIG: HeaderConfig = {
  logo: { text: 'enigmanet', href: '/' },
  nav_items: [
    {
      href: '/',
      type: 'link',
      label: 'Home',
    },
    { type: 'mega', label: 'Products', data: MEGA_MENU_DATA.Products },
    { type: 'mega', label: 'Solutions', data: MEGA_MENU_DATA.Solutions },

    { type: 'mega', label: 'Partners', data: MEGA_MENU_DATA.Partners },
    { type: 'mega', label: 'Company', data: MEGA_MENU_DATA.Company },
    { type: 'mega', label: 'Contact Us', data: MEGA_MENU_DATA.ContactUs },

    {
      type: 'mega',
      label: 'TrueCost',
      data: MEGA_MENU_DATA.TrueCost,
    },
    {
      href: '/login',
      type: 'link',
      label: 'Log in',
    },
    { type: 'mega', label: '☰', data: MEGA_MENU_DATA.Support },
  ],
  utility_nav: [
    { label: 'Customer Portal', href: '/customers-portal' },
    { label: 'Developer Portal', href: '/developer-portal' },
    { label: 'Docs', href: '/docs' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Status', href: '/status' },
  ],
  // cta_button: {
  //   label: 'Start free',
  //   href: '#',
  //   icon: 'bx:rocket',
  //   variant: 'primary',
  //   size: 'sm',
  // },
};
