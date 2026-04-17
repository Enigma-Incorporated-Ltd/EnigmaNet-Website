import { lazy } from 'react';

// Landings
// const Index = lazy(() => import("@/app/(landings)/index"))
const ShowCase1 = lazy(() => import('@/app/(landings)/app-showcase-v1'));
const ShowCase2 = lazy(() => import('@/app/(landings)/app-showcase-v2'));
const ShowCase3 = lazy(() => import('@/app/(landings)/app-showcase-v3'));
const Blog = lazy(() => import('@/app/(landings)/blog-list'));
const Conference = lazy(() => import('@/app/(landings)/conference'));
const DigitalAgency = lazy(() => import('@/app/(landings)/digital-agency'));
const Finacial = lazy(() => import('@/app/(landings)/financial'));
const Medical = lazy(() => import('@/app/(landings)/medical'));
const OnlineCourse = lazy(() => import('@/app/(landings)/online-courses'));
const Product = lazy(() => import('@/app/(landings)/product'));
const SaasV1 = lazy(() => import('@/app/(landings)/saas-v1'));
const SaasV2 = lazy(() => import('@/app/(landings)/saas-v2'));
const Home = lazy(() => import('@/app/Home'));
const SaasV4 = lazy(() => import('@/app/(landings)/saas-v4'));
const SaasV5 = lazy(() => import('@/app/(landings)/saas-v5'));
const Agency1 = lazy(() => import('@/app/(landings)/software-dev-agency-v1'));
const Agency2 = lazy(() => import('@/app/(landings)/software-dev-agency-v2'));
const Agency3 = lazy(() => import('@/app/(landings)/software-dev-agency-v3'));
const Startup = lazy(() => import('@/app/(landings)/startup'));
const Legal = lazy(() => import('@/app/company/legal'));
//pages

const Error1 = lazy(() => import('@/app/404-v1'));
const Error2 = lazy(() => import('@/app/(pages)/404-v2'));
const AboutV1 = lazy(() => import('@/app/(pages)/about-v1'));
const AboutV2 = lazy(() => import('@/app/(pages)/about-v2'));
const AboutV3 = lazy(() => import('@/app/(pages)/about-v3'));
const GridNoSidebar = lazy(() => import('@/app/(pages)/blog-grid-no-sidebar'));
const GridWithSidebar = lazy(() => import('@/app/company/blog/grid'));
const ListNoSidebar = lazy(() => import('@/app/(pages)/blog-list-no-sidebar'));
const ListWithSidebar = lazy(() => import('@/app/company/blog'));
const Podcast = lazy(() => import('@/app/(pages)/blog-podcast'));
const SimpleFeed = lazy(() => import('@/app/(pages)/blog-simple-feed'));
const BlogSingle = lazy(() => import('@/app/company/blog/components/blog-single'));
const ContactV1 = lazy(() => import('@/app/(pages)/contacts-v1'));
const ContactV2 = lazy(() => import('@/app/get-in-touch'));
const ContactV3 = lazy(() => import('@/app/(pages)/contacts-v3'));
const PortfolioCourses = lazy(() => import('@/app/(pages)/portfolio-courses'));
const PortfolioGrid = lazy(() => import('@/app/(pages)/portfolio-grid'));
const PortfolioList = lazy(() => import('@/app/(pages)/portfolio-list'));
const PortfolioSingleCourse = lazy(() => import('@/app/(pages)/portfolio-single-course'));
const PortfolioSingleProject = lazy(() => import('@/app/(pages)/portfolio-single-project'));
const PortfolioSlider = lazy(() => import('@/app/(pages)/portfolio-slider'));
const Pricing = lazy(() => import('@/app/pricing'));
const ServiceSingle1 = lazy(() => import('@/app/(pages)/services-single-v1'));
const ServiceSingle2 = lazy(() => import('@/app/(pages)/services-single-v2'));
const ServiceV1 = lazy(() => import('@/app/(pages)/services-v1'));
const ServiceV2 = lazy(() => import('@/app/(pages)/services-v2'));

//account

const Collections = lazy(() => import('@/app/(account)/account-collections'));
const Details = lazy(() => import('@/app/(account)/account-details'));
const Messages = lazy(() => import('@/app/(account)/account-messages'));
const Notification = lazy(() => import('@/app/(account)/account-notifications'));
const Payement = lazy(() => import('@/app/(account)/account-payment'));
const SaveItem = lazy(() => import('@/app/(account)/account-saved-items'));
const Security = lazy(() => import('@/app/(account)/account-security'));
const SignIn = lazy(() => import('@/app/(account)/account-signin'));
const SignUp = lazy(() => import('@/app/(account)/account-signup'));
const TCOCalculator = lazy(() => import('@/app/product-tco-calculator/index'));
const Product2 = lazy(() => import('@/app/product-2/index'));

//Products
const Products = lazy(() => import('@/app/products'));
// Enigma Platform
const EnigmaPlatform = lazy(() => import('@/app/products/the-enigma-platform'));
const EnigmaHub = lazy(() => import('@/app/products/the-enigma-platform/enigma-hub'));
const EnigmaGrid = lazy(() => import('@/app/products/the-enigma-platform/enigma-grid'));
const EnigmaLedger = lazy(() => import('@/app/products/the-enigma-platform/enigma-ledger'));
const EnigmaNexus = lazy(() => import('@/app/products/the-enigma-platform/enigma-nexus'));
const EnigmaSyncSphere = lazy(() => import('@/app/products/the-enigma-platform/enigma-syncSphere'));
const EnigmaCommand = lazy(() => import('@/app/products/the-enigma-platform/enigma-command'));

// Performance Networking
const PerformanceNetworking = lazy(() => import('@/app/products/performance-networking'));
const ApnCore = lazy(() => import('@/app/products/performance-networking/enigma-apn-core'));
const EscSecureNetworking = lazy(
  () => import('@/app/products/performance-networking/esc-secure-networking')
);
const TcpAcceleration = lazy(
  () => import('@/app/products/performance-networking/tcp-acceleration')
);
const RainResilience = lazy(() => import('@/app/products/performance-networking/rain-resilience'));
const MultiLinkBonding = lazy(
  () => import('@/app/products/performance-networking/multi-link-bonding')
);
const IntelligentTrafficManagement = lazy(
  () => import('@/app/products/performance-networking/intelligent-traffic-management')
);

//ai-&-automation
const EnigmaSentinel = lazy(() => import('@/app/products/ai-&-automation/enigma-sentinel'));
const AiAutomation = lazy(() => import('@/app/products/ai-&-automation'));

//connectivity-products
const ConnectivityProducts = lazy(() => import('@/app/products/connectivity-products'));
const EnimgaConnect = lazy(() => import('@/app/products/connectivity-products/enigma-connect'));
const EnigmaEdge = lazy(() => import('@/app/products/connectivity-products/enigma-edge'));

//data-&-file-services
const DataFileServices = lazy(() => import('@/app/products/data-&-file-services'));
const HotStorage = lazy(() => import('@/app/products/data-&-file-services/hot-storage'));
const LargeFileTransfer = lazy(
  () => import('@/app/products/data-&-file-services/large-file-transfer')
);
const ManagedFileTransfer = lazy(
  () => import('@/app/products/data-&-file-services/managed-file-transfer')
);
const MultiCloudIntegration = lazy(
  () => import('@/app/products/data-&-file-services/multi-cloud-integration')
);
const SyncSphere = lazy(() => import('@/app/products/data-&-file-services/sync-sphere'));

//integration-&-oem
const IntegrationOem = lazy(() => import('@/app/products/integration-&-oem'));
const BinaryIntegration = lazy(() => import('@/app/products/integration-&-oem/binary-integration'));
const ContainerDeployment = lazy(
  () => import('@/app/products/integration-&-oem/container-deployment')
);
const PoweredByApnCore = lazy(() => import('@/app/products/integration-&-oem/powered-by-apn-core'));
const VirtualAppliance = lazy(() => import('@/app/products/integration-&-oem/virtual-appliance'));

//Solutions
const Solutions = lazy(() => import('@/app/solutions'));
const AiAndDataInfrastructure = lazy(() => import('@/app/solutions/ai-&-data-infrastructure'));
const RemoteWork = lazy(() => import('@/app/solutions/remote-work-&-branch'));
const OperationalTechnology = lazy(
  () => import('@/app/solutions/operational-technology-&-remote-assets')
);
const Industries = lazy(() => import('@/app/solutions/industries'));
const ServiceProviders = lazy(() => import('@/app/solutions/service-providers-&-partners'));
const Enterprise = lazy(() => import('@/app/solutions/enterprise'));

//support
const Support = lazy(() => import('@/app/support'));

//partner
const Partners = lazy(() => import('@/app/partners'));

//company
const Company = lazy(() => import('@/app/company'));
const AboutEnigma = lazy(() => import('@/app/company/about-enigma'));
const Leadership = lazy(() => import('@/app/company/leadership'));
const TrustCentre = lazy(() => import('@/app/company/trust-centre'));

//contact-us
const ContactUs = lazy(() => import('@/app/contact-us'));
const RequestAQuote = lazy(() => import('@/app/contact-us/request-a-quote'));

//utility
const Docs = lazy(() => import('@/app/docs'));
const DeveloperPortal = lazy(() => import('@/app/developer-portal'));
const CustomerPortal = lazy(() => import('@/app/customer-portal'));
const Status = lazy(() => import('@/app/status'));
export const AllRoutes = [
  // Home
  { path: '/', name: 'index1', element: <Home /> },
  { path: '*', name: 'not-found', element: <Error1 /> },

  // Products Routes
  { path: '/products', name: 'Products', element: <Products /> },

  // Enigma Platform Routes
  { path: '/products', element: <Products /> },
  { path: '/products/enigma-platform', element: <EnigmaPlatform /> },
  { path: '/products/enigma-platform/enigma-grid', element: <EnigmaGrid /> },
  { path: '/products/enigma-platform/enigma-ledger', element: <EnigmaLedger /> },
  { path: '/products/enigma-platform/enigma-nexus', element: <EnigmaNexus /> },
  { path: '/products/enigma-platform/enigma-syncsphere', element: <EnigmaSyncSphere /> },
  { path: '/products/enigma-platform/enigma-command', element: <EnigmaCommand /> },
  { path: '/products/enigma-platform/enigma-hub', element: <EnigmaHub /> },

  // Performance Networking Routes
  { path: '/products/performance-networking', element: <PerformanceNetworking /> },
  { path: '/products/performance-networking/enigma-apn-core', element: <ApnCore /> },
  {
    path: '/products/performance-networking/esc-secure-networking',
    element: <EscSecureNetworking />,
  },
  { path: '/products/performance-networking/tcp-acceleration', element: <TcpAcceleration /> },
  { path: '/products/performance-networking/rain-resilience', element: <RainResilience /> },
  { path: '/products/performance-networking/multi-link-bonding', element: <MultiLinkBonding /> },
  {
    path: '/products/performance-networking/intelligent-traffic-management',
    element: <IntelligentTrafficManagement />,
  },

  //ai-&-automation
  { path: '/products/ai-&-automation/enigma-sentinel', element: <EnigmaSentinel /> },
  { path: '/products/ai-&-automation', element: <AiAutomation /> },

  //connectivity-products
  { path: '/products/connectivity-products/enigma-connect', element: <EnimgaConnect /> },
  { path: '/products/connectivity-products/enigma-edge', element: <EnigmaEdge /> },
  { path: '/products/connectivity-products', element: <ConnectivityProducts /> },

  //data-&-file-services
  { path: '/products/data-&-file-services', element: <DataFileServices /> },
  { path: '/products/data-&-file-services/hot-storage', element: <HotStorage /> },
  { path: '/products/data-&-file-services/large-file-transfer', element: <LargeFileTransfer /> },
  {
    path: '/products/data-&-file-services/managed-file-transfer',
    element: <ManagedFileTransfer />,
  },
  {
    path: '/products/data-&-file-services/multi-cloud-integration',
    element: <MultiCloudIntegration />,
  },
  { path: '/products/data-&-file-services/syncsphere', element: <SyncSphere /> },

  //integration-&-oem
  { path: '/products/integration-&-oem', element: <IntegrationOem /> },
  { path: '/products/integration-&-oem/binary-integration', element: <BinaryIntegration /> },
  { path: '/products/integration-&-oem/container-deployment', element: <ContainerDeployment /> },
  { path: '/products/integration-&-oem/powered-by-apn-core', element: <PoweredByApnCore /> },
  { path: '/products/integration-&-oem/virtual-appliance', element: <VirtualAppliance /> },

  //solutions
  { path: '/solutions', element: <Solutions /> },
  { path: '/solutions/ai-&-data-infrastructure', element: <AiAndDataInfrastructure /> },
  { path: '/solutions/operational-technology-&-remote-assets', element: <OperationalTechnology /> },
  { path: '/solutions/industries', element: <Industries /> },
  { path: '/solutions/remote-work-&-branch', element: <RemoteWork /> },
  { path: '/solutions/service-providers-&-partners', element: <ServiceProviders /> },
  { path: '/solutions/enterprise', element: <Enterprise /> },

  //support
  { path: '/support', element: <Support /> },

  //partner
  { path: '/partners', element: <Partners /> },

  //company
  { path: '/company', element: <Company /> },
  { path: '/company/about-enigma', element: <AboutEnigma /> },
  { path: '/company/trust-centre', element: <TrustCentre /> },
  { path: '/company/leadership', element: <Leadership /> },
  { path: '/company/legal', name: 'legal', element: <Legal /> },
  { path: 'company/legal/:slug', name: 'legal', element: <Legal /> },
  { path: '/company/blog', name: 'blog', element: <ListWithSidebar /> },
  { path: '/company/blog/grid', name: 'blog-grid', element: <GridWithSidebar /> },
  { path: '/company/blog/:id', name: 'blog-id', element: <BlogSingle /> },


  
  //contact-us
  { path: '/contact-us', element: <ContactUs /> },
  { path: '/contact-us/request-a-quote', element: <RequestAQuote /> },

  //utility
  { path: '/developer-portal', element: <DeveloperPortal /> },
  { path: '/customer-portal', element: <CustomerPortal /> },
  { path: '/status', element: <Status /> },
  { path: '/docs', element: <Docs /> },

  // Pages Routes
  { path: '/app-showcase-v1', name: 'case1', element: <ShowCase1 /> },
  { path: '/product-tco-calculator', name: 'TCOCalculator', element: <TCOCalculator /> },
  { path: '/product-2', name: 'CommingSoon', element: <Product2 /> },
  { path: '/app-showcase-v2', name: 'case2', element: <ShowCase2 /> },
  { path: '/app-showcase-v3', name: 'case3', element: <ShowCase3 /> },
  { path: '/blog-list', name: 'blog', element: <Blog /> },

  { path: '/conference', name: 'conercence', element: <Conference /> },
  { path: '/digital-agency', name: 'DigitalAgency', element: <DigitalAgency /> },
  { path: '/financial', name: 'finacial', element: <Finacial /> },
  { path: '/medical', name: 'medical', element: <Medical /> },
  { path: '/online-courses', name: 'OnlineCourse', element: <OnlineCourse /> },
  { path: '/product', name: 'Product', element: <Product /> },
  { path: '/saas-v1', name: 'saasV1', element: <SaasV1 /> },
  { path: '/saas-v2', name: 'saasV2', element: <SaasV2 /> },
  { path: '/saas-v3', name: 'Home', element: <Home /> },
  { path: '/saas-v4', name: 'saasV4', element: <SaasV4 /> },
  { path: '/saas-v5', name: 'saasV5', element: <SaasV5 /> },
  { path: '/software-dev-agency-v1', name: 'agency1', element: <Agency1 /> },
  { path: '/software-dev-agency-v2', name: 'agency2', element: <Agency2 /> },
  { path: '/software-dev-agency-v3', name: 'agency3', element: <Agency3 /> },
  { path: '/startup', name: 'startup', element: <Startup /> },

  { path: '/404-v1', name: 'Error1', element: <Error1 /> },
  { path: '/404-v2', name: 'Error2', element: <Error2 /> },
  { path: '/about-v1', name: 'AboutV1', element: <AboutV1 /> },
  { path: '/about-v2', name: 'AboutV2', element: <AboutV2 /> },
  { path: '/about-v3', name: 'AboutV3', element: <AboutV3 /> },
  { path: '/blog-grid-no-sidebar', name: 'blog-grid-no-sidebar', element: <GridNoSidebar /> },

  { path: '/blog-list-no-sidebar', name: 'blog-list-no-sidebar', element: <ListNoSidebar /> },

  { path: '/blog-podcast', name: 'blog-podcast', element: <Podcast /> },
  { path: '/blog-simple-feed', name: 'blog-simple-feed', element: <SimpleFeed /> },
  // { path: '/blog-single', name: 'blog-single', element: <BlogSingle /> },

  { path: '/contacts-v1', name: 'contacts-v1', element: <ContactV1 /> },
  { path: '/get-in-touch', name: 'get-in-touch', element: <ContactV2 /> },
  { path: '/contacts-v3', name: 'contacts-v3', element: <ContactV3 /> },
  { path: '/portfolio-courses', name: 'portfolio-courses', element: <PortfolioCourses /> },
  { path: '/portfolio-grid', name: 'portfolio-grid', element: <PortfolioGrid /> },
  { path: '/portfolio-list', name: 'portfolio-list', element: <PortfolioList /> },
  {
    path: '/portfolio-single-course',
    name: 'portfolio-single-course',
    element: <PortfolioSingleCourse />,
  },
  {
    path: '/portfolio-single-project',
    name: 'portfolio-single-project',
    element: <PortfolioSingleProject />,
  },
  { path: '/portfolio-slider', name: 'portfolio-slider', element: <PortfolioSlider /> },
  { path: '/pricing', name: 'pricing', element: <Pricing /> },
  { path: '/services-single-v1', name: 'services-single-v1', element: <ServiceSingle1 /> },
  { path: '/services-single-v2', name: 'services-single-v2', element: <ServiceSingle2 /> },
  { path: '/services-v1', name: 'services-v1', element: <ServiceV1 /> },
  { path: '/services-v2', name: 'services-v2', element: <ServiceV2 /> },

  { path: '/account-collections', name: 'account-collections', element: <Collections /> },
  { path: '/account-details', name: 'account-details', element: <Details /> },
  { path: '/account-messages', name: 'account-messages', element: <Messages /> },
  { path: '/account-notifications', name: 'account-notification', element: <Notification /> },
  { path: '/account-payment', name: 'account-payment', element: <Payement /> },
  { path: '/account-saved-items', name: 'account-saveItem', element: <SaveItem /> },
  { path: '/account-security', name: 'account-security', element: <Security /> },
  { path: '/account-signin', name: 'account-signin', element: <SignIn /> },
  { path: '/account-signup', name: 'account-signup', element: <SignUp /> },
];
