import { aiInfra, enigmaSecureDesktop, enterprise, remoteWork } from '@/assets/img';
import { startp2, startup3 } from '@/assets/img/partners/inddex';
import { Commond, GridHero, HeroHub, HeroSyncSphere } from '@/assets/img/products';

export const theEnigmaPlatform = [
  {
    id: 1,
    title: 'Enigma Nexus',
    href: '/products/enigma-platform/enigma-nexus',
    slug: 'enigma-nexus',
    description:
      'Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform.',

    meta: {
      title: 'Enigma Nexus',
      description:
        'Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform.',
    },
    image: enigmaSecureDesktop,
  },
  {
    id: 2,
    title: 'Enigma Command',
    href: '/products/enigma-platform/enigma-command',
    slug: 'enigma-command',
    description:
      'Enigma Command is the central operations view for incidents, tickets, alerts, agent actions and live network events. It gives Enigma teams and customer operators a clear human-in-the-loop control point for AI-assisted network operations.',

    meta: {
      title: 'Enigma Command',
      description:
        'Enigma Command is the central operations view for incidents, tickets, alerts, agent actions and live network events. It gives Enigma teams and customer operators a clear human-in-the-loop control point for AI-assisted network operations.',
    },
    image: Commond,
  },
  {
    id: 3,
    title: 'Enigma Grid',
    href: '/products/enigma-platform/enigma-grid',
    slug: 'enigma-grid',
    description:
      'Enigma Grid shows what is deployed, where it sits and how it is performing. It gives customers and operators a structured view of sites, devices, gateways, services and network topology across Enigma Connect, Enigma EDGE and ESC deployments.',

    meta: {
      title: 'Enigma Grid',
      description:
        'Enigma Grid shows what is deployed, where it sits and how it is performing. It gives customers and operators a structured view of sites, devices, gateways, services and network topology across Enigma Connect, Enigma EDGE and ESC deployments.',
    },
    image: GridHero,
  },
  {
    id: 4,
    title: 'Enigma SyncSphere',
    href: '/products/enigma-platform/enigma-syncsphere',
    slug: 'enigma-syncsphere',
    description:
      'Enigma SyncSphere gives customers one place to manage storage, file sync, cross-cloud movement and transfer workflows. It connects Hot Storage, third-party clouds and Enigma’s accelerated transfer capabilities into a single file operations workspace.',

    meta: {
      title: 'Enigma SyncSphere',
      description:
        'Enigma SyncSphere gives customers one place to manage storage, file sync, cross-cloud movement and transfer workflows. It connects Hot Storage, third-party clouds and Enigma’s accelerated transfer capabilities into a single file operations workspace.',
    },
    image: HeroSyncSphere,
  },
  {
    id: 5,
    title: ' Enigma Hub',
    href: '/products/enigma-platform/enigma-hub',
    slug: 'enigma-hub',
    description:
      'Enigma Hub is the identity and commercial control point inside Nexus. It manages customers, partners, users, permissions, product entitlements, billing profiles, licences and audit data across Enigma services.',

    meta: {
      title: 'Enigma Hub',
      description:
        'Enigma Hub is the identity and commercial control point inside Nexus. It manages customers, partners, users, permissions, product entitlements, billing profiles, licences and audit data across Enigma services.',
    },
    image: HeroHub,
  },
  {
    id: 6,
    title: 'Enigma Ledger',
    href: '/products/enigma-platform/enigma-ledger',
    slug: 'enigma-ledger',
    description:
      'Enigma Ledger is the accountability layer inside Nexus. It records user activity, system changes, agent actions, approvals, overrides and operational events across Enigma services, giving customers and internal teams a clear history of what happened, when it happened and who authorised it.',

    meta: {
      title: 'Enigma Ledger',
      description:
        'Enigma Ledger is the accountability layer inside Nexus. It records user activity, system changes, agent actions, approvals, overrides and operational events across Enigma services, giving customers and internal teams a clear history of what happened, when it happened and who authorised it.',
    },
    image: enterprise,
  },
];

export const prodcutsList = [
  {
    id: 1,
    title: 'The Enigma Platform',
    href: '/products/the-enigma-platform',
    slug: 'enigma-platform',
    description:
      'The Enigma Platform unifies Enigma Command, Enigma Nexus, Enigma Grid, Enigma SyncSphere, Enigma Hub and Enigma Ledger into a secure, intelligent ecosystem for network operations, orchestration, collaboration, file movement, storage and digital asset management.',
    image: GridHero,
  },
  {
    id: 2,
    title: 'Performance Networking',
    href: '/products/performance-networking',
    slug: 'performance-networking',
    description:
      'Enigma Performance Networking combines Enigma APN Core, ESC, Secure Networking, TCP Acceleration, RAIN resilience, Multi-link Bonding and Intelligent Traffic Management to deliver secure, resilient, high-performance connectivity across mission-critical networks.',
    image: startup3,
  },
  {
    id: 3,
    title: 'Connectivity Products',
    href: '/products/connectivity-products',
    slug: 'connectivity-products',
    description:
      'Enigma Connectivity Products combine Enigma EDGE and Enigma Connect to deliver secure, APN-powered connectivity with intelligent optimisation, encrypted tunnels, multi-link resilience and seamless access for individuals, teams and distributed business environments.',
    image: remoteWork,
  },
  {
    id: 4,
    title: 'Data & File Services',
    href: '/products/data-&-file-services',
    slug: 'data-&-file-services',
    description:
      'Enigma Data & File Services combine SyncSphere, Hot Storage, Large File Transfer, Managed File Transfer and Multi-cloud Integration to deliver secure, scalable data storage, transfer and management.',
    image: HeroSyncSphere,
  },
  {
    id: 5,
    title: 'AI & Automation',
    href: '/products/ai-&-automation',
    slug: 'ai-&-automation',
    description:
      'Enigma AI & Automation is powered by Enigma Sentinel, delivering intelligent automation, AI-driven insights and proactive operational intelligence for enterprise environments.',
    image: aiInfra,
  },
  {
    id: 6,
    title: 'Integration & OEM',
    href: '/products/integration-&-oem',
    slug: 'integration-&-oem',
    description:
      'Enigma Integration & OEM combines APN Core, Binary Integration, Container Deployment and Virtual Appliance support to enable seamless deployment, integration and embedding across enterprise environments.',
    image: startp2,
  },
];

export const performanceNetworking = [
  {
    id: 1,
    title: 'Enigma APN Core',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description:
      'APN Core is Enigma Net’s software-defined performance overlay, combining byte-level routing, TCP acceleration, multi-link bonding, RAIN redundancy, telemetry and encryption across fibre, broadband, 5G, LTE, satellite and mixed networks.',
    image: startup3,
  },
  {
    id: 2,
    title: 'ESC - Secure Networking',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description:
      'ESC – Secure Networking delivers Enigma’s APN Core as a multi-tenant software and SaaS platform, enabling private overlay networking, SD-WAN-style control, traffic acceleration, bonding, RAIN resilience and secure connectivity across any IP network.',
    image: startup3,
  },
  {
    id: 3,
    title: 'TCP Acceleration',
    href: '/products/performance-networking/tcp-acceleration',
    slug: 'tcp-acceleration',
    description:
      'TCP Acceleration is a core APN capability that improves single-flow throughput by replacing legacy TCP congestion behaviour inside Enigma’s encrypted tunnel, helping traffic run closer to line rate even when latency, packet loss or distance would normally slow it down.',
    image: startup3,
  },
  {
    id: 4,
    title: 'RAIN resilience',
    href: '/products/performance-networking/rain-resilience',
    slug: 'rain-resilience',
    description:
      'RAIN duplicates priority traffic across independent paths inside the encrypted APN tunnel,helping Enigma Net maintain session continuity, reduce effective packet loss and protect real-time services when underlying links degrade.',
    image: startup3,
  },
  {
    id: 5,
    title: 'Multi-link bonding',
    href: '/products/performance-networking/multi-link-bonding',
    slug: 'multi-link-bonding',
    description:
      'Multi-Link Bonding combines up to eight circuits per site into a single APN overlay, allowing applications to use one logical path while Enigma manages bandwidth aggregation, path scheduling, packet ordering and failover underneath.',
    image: startup3,
  },
  {
    id: 6,
    title: 'Intelligent Traffic Management',
    href: '/products/performance-networking/intelligent-traffic-management',
    slug: 'intelligent-traffic-management',
    description:
      'Intelligent Traffic Management monitors link quality, classifies traffic and adapts routing, QoS and resilience decisions in real time, helping Enigma products keep critical applications responsive across fibre, broadband, 4G, 5G, satellite and mixed networks.',
    image: startup3,
  },
];

export const connectivityProducts = [
  {
    id: 1,
    title: 'Enigma Connect',
    href: '/products/connectivity-products/enigma-connect',
    slug: 'enigma-connect',
    description:
      'Enigma Connect gives individuals and small teams encrypted, optimised connectivity using the same APN acceleration engine that powers Enigma’s enterprise products — delivered through a lightweight desktop and mobile client.',
    image: startup3,
  },
  {
    id: 2,
    title: 'Enigma EDGE',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description:
      'Enigma EDGE brings APN-powered optimisation, bonding, RAIN resilience, encrypted tunnels and real-time visibility to business sites, branches, venues, retail estates and distributed infrastructure.',
    image: startup3,
  },
];

export const DataFilesServices = [
  {
    id: 1,
    title: 'SyncSphere',
    href: '/products/data-&-file-services/syncsphere',
    slug: 'syncsphere',
    description:
      ' SyncSphere is a multi-cloud file transfer service that provides secure, reliable and cost-effective data transfer between cloud environments.',
    image: startup3,
  },
  {
    id: 2,
    title: 'SyncSphere',
    href: '/products/data-&-file-services/syncsphere',
    slug: 'syncsphere',
    description:
      ' SyncSphere is a multi-cloud file transfer service that provides secure, reliable and cost-effective data transfer between cloud environments.',
    image: startup3,
  },
];


export const IntegrationOem = [
  {
    id: 1,
    title: 'Powered by APN Core',
    href: '/products/integration-&-oem/powered-by-apn-core',
    slug: 'powered-by-apn-core',
    description:
      'Powered by APN Core gives OEMs, telcos, platform providers and infrastructure partners access to the core engine behind Enigma Net’s connectivity products delivered as a Linux binary, container or virtual appliance integration model. It allows partners to strengthen their own offer while keeping their own brand, customer experience and commercial model.',
    image: startup3,
  },
];