import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import Fragmented from '@/assets/svgs/products/enigma-platform/nexus/Pain-card-Fragmented-visibility.svg';
import Slower from '@/assets/svgs/products/enigma-platform/nexus/pain-point-Slower-incident-response.svg';
import Limited from '@/assets/svgs/products/enigma-platform/nexus/Pain-card-Limited-operational-control.svg';
import Growing from '@/assets/svgs/products/enigma-platform/nexus/Pain-card-Growing-service-complexity.svg';
import Networkoperations from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Network-operations.svg';
import Assetvisibility from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Asset-visibility.svg';
import Fileandstorageworkflows from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-File-and-storage-workflows.svg';
import Userandtenantcontrol from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-User-and-tenant-control.svg';
import AIassistedoperations from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-AI-assisted-operations.svg';
import Customeradmins from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Customer-admins.svg';
import Customertechnicalusers from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Customer-technical-users.svg';
import EnigmaNOCandsupportteams from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Enigma-NOC-and-support-teams.svg';
import Onboardcustomer from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Onboard-a-customer.svg';
import Monitorfleethealth from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Monitor-fleet-health.svg';
import Investigateincident from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Investigate-an-incident.svg';
import Movesyncdata from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Move-and-sync-data.svg';
import Reviewactivity from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Review-audit-and-compliance-activity.svg';
import Transparentdecisions from '@/assets/svgs/products/enigma-platform/nexus/Key-message-Transparent-decisions.svg';
import Controlledautomation from '@/assets/svgs/products/enigma-platform/nexus/Key-message-Controlled-automation.svg';
import Auditreadyactivity from '@/assets/svgs/products/enigma-platform/nexus/Key-message-Audit-ready-activity.svg';
import Tenantawaresafety from '@/assets/svgs/products/enigma-platform/nexus/Key-message-Tenant-aware-safety.svg';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';
import NextPageSlider from '@/components/ui/NextPageSlider';
import { useSlug } from '@/utils/useSlug';
import { type CardItem } from '@/components/ui/card';
import CardWithUseCase from '@/components/ui/CardWithUseCase';
import { ApnCoreHero, GridHero } from '@/assets/img/products';
import WorkSteps from '@/components/ui/workSteps';
import PricingCard from '@/components/ui/PricingCard';
import AddOnCard from '@/components/ui/AddOnCard';
import ReusableTable from '@/components/ui/Table';
import FeatureComparison from '@/components/ui/FeatureComparison';
import Br from '@/components/ui/NewLine';
const features = [
  {
    id: 1,
    title: 'APN Core ',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description: 'The engine behind EDGE performance, bonding, RAIN, TCP-A, ITM and telemetry.  ',

    meta: {
      title: 'APN Core',
      description: 'The engine behind EDGE performance, bonding, RAIN, TCP-A, ITM and telemetry.  ',
    },
    image: ApnCoreHero,
  },
  {
    id: 2,
    title: 'ESC – Secure Networking',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description: 'The secure core and control fabric that EDGE nodes connect into.  ',

    meta: {
      title: 'ESC – Secure Networking',
      description: 'The secure core and control fabric that EDGE nodes connect into.  ',
    },
    image: GridHero,
  },
  {
    id: 3,
    title: 'Enigma Connect ',
    href: '/products/connectivity-products/enigma-connect',
    slug: 'enigma-connect',
    description: 'Self-serve APN-powered connectivity for individuals and small teams.  ',

    meta: {
      title: 'Enigma Connect ',
      description: 'Self-serve APN-powered connectivity for individuals and small teams.  ',
    },
    image: GridHero,
  },
  {
    id: 4,
    title: 'Multi-Link Bonding',
    href: '/products/performance-networking/multi-link-bonding',
    slug: 'multi-link-bonding',
    description: 'Combines multiple site links into one logical overlay.  ',

    meta: {
      title: 'Multi-Link Bonding',
      description: 'Combines multiple site links into one logical overlay.  ',
    },
    image: GridHero,
  },
  {
    id: 5,
    title: 'RAIN Resilience   ',
    href: '/products/performance-networking/rain-resilience',
    slug: 'rain-resilience',
    description: 'Protects critical traffic through duplicated packet paths.  ',
    image: GridHero,
    meta: {
      title: 'RAIN Resilience  ',
      description: 'Protects critical traffic through duplicated packet paths.  ',
    },
  },
  {
    id: 6,
    title: 'Intelligent Traffic Management  ',
    href: '/products/performance-networking/intelligent-traffic-management',
    slug: 'intelligent-traffic-management',
    description: 'Prioritises real-time and business-critical traffic at byte level.  ',
    image: GridHero,
    meta: {
      title: 'Intelligent Traffic Management  ',
      description: 'Prioritises real-time and business-critical traffic at byte level.  ',
    },
  },
  {
    id: 7,
    title: 'TCP Acceleration  ',
    href: '/products/performance-networking/tcp-acceleration',
    slug: 'tcp-acceleration',
    description: 'Improves throughput over lossy and high-latency links.    ',

    meta: {
      title: 'TCP Acceleration  ',
      description: 'Improves throughput over lossy and high-latency links.    ',
    },
    image: GridHero,
  },
  {
    id: 8,
    title: 'Payment Guardian   ',
    href: '#',
    slug: '#',
    description: 'Sector bundle for payment and unattended terminal connectivity.   ',
    image: GridHero,
    meta: {
      title: 'Payment Guardian  ',
      description: 'Sector bundle for payment and unattended terminal connectivity.   ',
    },
  },
  {
    id: 9,
    title: 'Venue Connect    ',
    href: '#',
    slug: '#',
    description: 'Sector bundle for stadium, arena and live event connectivity.   ',
    image: GridHero,
    meta: {
      title: 'Venue Connect  ',
      description: 'Sector bundle for stadium, arena and live event connectivity.   ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: Fragmented,
    title: 'Sites depend on mixed links  ',
    description: `Fibre, DSL, 4G, 5G, satellite and microwave all behave differently.  `,
  },
  {
    id: 2,
    icon: Slower,
    title: 'Failover can still disrupt operations  ',
    description: `Backup links may activate, but active sessions, calls or payments can still drop.`,
  },
  {
    id: 3,
    icon: Limited,
    title: 'Branch traffic is increasingly critical  ',
    description:
      'POS, SaaS, EMR, CCTV, telemetry, video and cloud apps all need stable performance.  ',
  },
  {
    id: 4,
    icon: Growing,
    title: 'SD-WAN does not always fix transport behaviour  ',
    description:
      'Path steering alone cannot fully solve packet loss, jitter, TCP slowdown or congestion.  ',
  },
  {
    id: 5,
    icon: Fragmented,
    title: 'Operations teams need visibility  ',
    description:
      'Teams need to see latency, jitter, MOS, packet loss, tunnel health and site status in real time.  ',
  },
];
const data2 = [
  {
    id: 1,
    icon: Networkoperations,
    title: 'Managed edge appliance  ',
    description: `Physical or virtual appliance deployed at the site, cloud or branch edge.  `,
  },
  {
    id: 2,
    icon: Assetvisibility,
    title: 'Private overlay networking  ',
    description: `Encrypted APN tunnels connect sites, clouds, users and services through ESC.  `,
  },
  {
    id: 3,
    icon: Fileandstorageworkflows,
    title: 'Multi-link bonding  ',
    description: 'Aggregate fibre, DSL, broadband, 4G, 5G, satellite or microwave links.  ',
  },
  {
    id: 4,
    icon: Userandtenantcontrol,
    title: 'RAIN resilience  ',
    description: 'Duplicate critical traffic across paths to reduce effective packet loss.  ',
  },
  {
    id: 5,
    icon: AIassistedoperations,
    title: 'Byte-level optimisation',
    description: 'Prioritise real-time and critical traffic before bulk transfers.   ',
  },
  {
    id: 6,
    icon: Fileandstorageworkflows,
    title: 'Operational visibility  ',
    description:
      'Expose link health, tunnel state, latency, loss, jitter and MOS through Nexus and NOC tools. ',
  },
];
const data3 = [
  {
    id: 1,
    icon: Customeradmins,
    title: 'Physical appliance  ',
    description: `<span class="text-primary fs-lg fw-bold ">Best for:</span> branches, retail, EV hubs, venues, depots and industrial sites.  
Plug-and-play appliance installed on site with cloud provisioning and managed policy.  `,
  },
  {
    id: 2,
    icon: Customertechnicalusers,
    title: 'Virtual appliance   ',
    description: `<span class="text-primary fs-lg fw-bold ">Best for:</span> cloud workloads, SaaS platforms, virtual networks and hybrid environments.  
Deploy EDGE as a VM in AWS or Azure and connect cloud environments into the APN overlay.   `,
  },

  {
    id: 3,
    icon: EnigmaNOCandsupportteams,
    title: 'SASE bundle  ',
    description: `<span class="text-primary fs-lg fw-bold ">Best for:</span> customers that want network performance plus cloud security controls.  
EDGE provides the network foundation while a partner SSE/SASE stack adds NGFW, SWG, CASB   
or ZTNA.  `,
  },
];
const data4 = [
  {
    id: 1,
    icon: Onboardcustomer,
    title: 'RTT reduction   ',
    description: `<span class="text-dark  fw-bold ">40–80% RTT reduction</span>  versus raw internet paths in relevant conditions.  `,
  },

  {
    id: 2,
    icon: Monitorfleethealth,
    title: 'Low jitter   ',
    description: 'Jitter held to low single-digit milliseconds on bonded paths.  ',
  },
  {
    id: 3,
    icon: Investigateincident,
    title: 'Near-zero effective loss  ',
    description:
      'Effective packet loss can approach near-zero when RAIN is applied to critical flows.   ',
  },
  {
    id: 4,
    icon: Movesyncdata,
    title: 'Sub-200ms failover  ',
    description: 'RAIN and bonded configurations support sub-200ms failover.  ',
  },
  {
    id: 5,
    icon: Reviewactivity,
    title: 'Session continuity',
    description: `Session stitching helps keep TCP and voice streams alive across link changes.  `,
  },
  {
    id: 6,
    icon: Investigateincident,
    title: 'High-capacity aggregation  ',
    description: `EDGE Max supports high-capacity bonded deployments for large sites and data-heavy   
environments.   `,
  },
];
const data5 = [
  {
    id: 1,
    icon: Transparentdecisions,
    title: 'Multi-site SMEs and mid-market enterprises   ',
    description: `Branch offices, regional hubs, headquarters and distributed business sites.  `,
  },
  {
    id: 2,
    icon: Controlledautomation,
    title: 'EV and parking operators  ',
    description: 'Charger hubs, forecourts, telemetry endpoints and payment connectivity.  ',
  },
  {
    id: 3,
    icon: Auditreadyactivity,
    title: 'Retail estates  ',
    description: 'POS, guest Wi-Fi, back-office SaaS, inventory systems and CCTV.   ',
  },
  {
    id: 4,
    icon: Tenantawaresafety,
    title: 'Industrial, utilities and critical infrastructure  ',
    description: 'SCADA, sensor data, telemetry, remote monitoring and operational control.   ',
  },
  {
    id: 5,
    icon: Transparentdecisions,
    title: 'Healthcare facilities   ',
    description: `EMR, imaging, telemedicine and deterministic latency for clinical workflows.  `,
  },
  {
    id: 6,
    icon: Controlledautomation,
    title: 'Financial offices and trading sites  ',
    description: 'Market feeds, payment flows, compliance systems and low-latency operations.  ',
  },
  {
    id: 7,
    icon: Auditreadyactivity,
    title: 'Media and post-production   ',
    description: 'Large file shuttles, studio connectivity, OB units and remote production.  ',
  },
  {
    id: 8,
    icon: Tenantawaresafety,
    title: 'Stadiums and live venues  ',
    description: 'Event-day connectivity, ticketing, POS, security, broadcast and fan Wi-Fi.  ',
  },
  {
    id: 9,
    icon: Auditreadyactivity,
    title: 'Partners and MSPs ',
    description: 'NaaS, SASE and managed network bundles for end customers.   ',
  },
];
const data6 = [
  {
    id: 1,
    icon: Transparentdecisions,
    title: 'Payment Guardian   ',
    description: `<strong >EDGE Lite + ESC + Resilience Pack  </strong><br/>
    Always-on PCI-aligned payment connectivity for retail, unattended terminals and payment   
estates.   `,
  },
  {
    id: 2,
    icon: Controlledautomation,
    title: 'EV Charging  ',
    description: `<strong >EDGE Lite / Pro + ESC + Resilience Pack  </strong><br/>
   Bonded uptime for charger telemetry, transaction flows and remote payment endpoints.   `,
  },
  {
    id: 3,
    icon: Auditreadyactivity,
    title: 'Venue Connect  ',
    description: `<strong >EDGE Pro / Max + ESC + ITM  </strong><br/>
   Resilient connectivity for stadiums, arenas, events and high-density venues.  `,
  },
  {
    id: 4,
    icon: Tenantawaresafety,
    title: 'Enigma Roam  ',
    description: `<strong >EDGE mobile solutions  </strong><br/>
    Stable connectivity for vehicles, field teams, broadcast crews and emergency responders.   `,
  },
  {
    id: 5,
    icon: Transparentdecisions,
    title: 'CCTV & Surveillance / Sight  ',
    description: `<strong >EDGE + ESC + Analytics Pack  </strong><br/>
    Guaranteed uplink for large-scale video streams, monitoring and surveillance estates. `,
  },
];
const data7 = [
  {
    id: 1,
    icon: Transparentdecisions,
    title: 'Security stack integration  ',
    description: `NGFW, SWG, CASB and ZTNA through selected SSE / SASE partners.  `,
  },
  {
    id: 2,
    icon: Controlledautomation,
    title: 'Unified policy view  ',
    description: `Nexus can provide a combined view of network and security policy.    `,
  },
  {
    id: 3,
    icon: Auditreadyactivity,
    title: 'Flexible pricing  ',
    description: `Pricing can be per user, per Mbps or by quotation depending on partner and deployment.   `,
  },
  {
    id: 4,
    icon: Tenantawaresafety,
    title: 'Lower-cost positioning  ',
    description: `Target pricing should sit below typical high-cost SASE market bands where possible.   `,
  },
  
];
const Command = [
  {
    id: 1,
    title: 'EDGE Lite  ',
    description:
      'Small office, kiosk, EV charger hub, small retail and lightweight branch sites.   ',
    PriceValue: '£149 / month ex VAT  ',
    priceLabel: 'NaaS monthly fee  ',
    priceCustomDescription: (
      <>
        <div>
          <p className="card-text mb-4 text-start">Hardware included, 36-month minimum. </p>
          <div className="d-flex gap-2 align-items-center mb-1">
            <h5 className="fw-bold text-start  mb-3">Hardware buy-out : </h5>
            <h2 className="h4 text-start text-dark mb-3"> £550 one-off </h2>
          </div>
          <h2 className="h4 text-start text-dark ">Hardware class </h2>
          <p className="card-text  text-start">
            Fanless x86 / ARM, 4-core, 8 GB RAM, dual NIC, LTE.{' '}
          </p>
        </div>
      </>
    ),
    usecase: ['Up to 500 Mbps bonded  '],
    href: '#',
    buttonLabel: 'Discuss EDGE Lite  ',
    stepList: true,
    stepTitle: 'Throughput  ',
  },
  {
    id: 2,
    title: 'EDGE Pro  ',
    description:
      'Main branches, larger retail, regional hubs, campuses and small data-centre sites.   ',
    PriceValue: '£299 / month ex VAT  ',
    priceLabel: 'NaaS monthly fee  ',
    priceCustomDescription: (
      <>
        <div>
          <p className="card-text mb-4 text-start">Hardware included, 36-month minimum. </p>
          <div className="d-flex gap-2 align-items-center mb-1">
            <h5 className="fw-bold text-start  mb-3">Hardware buy-out : </h5>
            <h2 className="h4 text-start text-dark mb-3">£950 one-off </h2>
          </div>
          <h2 className="h4 text-start text-dark ">Hardware class </h2>
          <p className="card-text  text-start">8-core x86, 16 GB RAM, 4–6 NICs, optional 10G.</p>
        </div>
      </>
    ),
    usecase: ['Up to 1 Gbps bonded  '],
    href: '#',
    buttonLabel: 'Discuss EDGE Pro  ',
    stepList: true,
    stepTitle: 'Throughput  ',
  },
  {
    id: 3,
    title: 'EDGE Max  ',
    description: 'HQ, data centres, media hubs, large depots, venues and high-capacity sites. ',
    PriceValue: '£599 / month ex VAT  ',
    priceLabel: 'NaaS monthly fee  ',
    priceCustomDescription: (
      <>
        <div>
          <p className="card-text mb-4 text-start">Hardware included, 36-month minimum. </p>
          <div className="d-flex gap-2 align-items-center mb-1">
            <h5 className="fw-bold text-start  mb-3">Hardware buy-out : </h5>
            <h2 className="h4 text-start text-dark mb-3"> £1,650 one-off </h2>
          </div>
          <h2 className="h4 text-start text-dark ">Hardware class </h2>
          <p className="card-text  text-start">16-core x86, 32 GB RAM, multi-10G, optional RAID.</p>
        </div>
      </>
    ),
    usecase: ['Up to 2 Gbps bonded  ', 'Multi-link and RAIN-heavy profiles.  '],
    href: '#',
    buttonLabel: 'Discuss EDGE Max  ',
    stepList: true,
    stepTitle: 'Throughput  ',
  },
];
const addonPrice = [
  {
    id: 1,
    title: 'EDGE Virtual Lite  ',
    description: `Example instance:<strong class="text-dark h5"> c6i.large </strong> <br/>
     Enigma software fee: <strong class="text-dark h5"> $0.35/hour </strong> <br/>
    Approx monthly:   <strong class="text-dark h5"> $252 </strong>  `,
  },

  {
    id: 2,
    title: 'EDGE Virtual Pro  ',
    description: `Example instance:<strong class="text-dark h5"> c6i.xlarge / 2xlarge   </strong> <br/>
     Enigma software fee: <strong class="text-dark h5"> $0.65/hour </strong> <br/>
    Approx monthly:   <strong class="text-dark h5"> $468   </strong>  `,
  },
  {
    id: 3,
    title: 'EDGE Virtual Max  ',
    description: `Example instance:<strong class="text-dark h5"> c6i.4xlarge+   </strong> <br/>
     Enigma software fee: <strong class="text-dark h5"> $1.10 / hour   </strong> <br/>
    Approx monthly:   <strong class="text-dark h5">$792   </strong>  `,
  },
];
const profilecards = [
  {
    id: 1,
    title: 'Small EV charging depot   ',
    description: `<strong class="text-dark h5"> Profile : </strong>  UK depot with two broadband links  <br/>
     <strong class="text-dark h5"> Deployment :</strong> 1 × EDGE Lite NaaS  <br/>
    <strong class="text-dark h5"> Indicative cost : </strong>  £149 / month  `,
  },

  {
    id: 2,
    title: 'Retail chain  ',
    description: `<strong class="text-dark h5"> Profile :</strong> 40 stores + HQ  <br/>
     <strong class="text-dark h5"> Deployment :</strong>35 × EDGE Lite, 5 × EDGE Pro, 1 × EDGE Max   <br/>
   <strong class="text-dark h5"> Environment : </strong>Mixed on-prem and Azure vWAN    `,
  },
  {
    id: 3,
    title: 'Cloud-only SaaS platform  ',
    description: `<strong class="text-dark h5"> Profile :</strong>  Multi-cloud SaaS environment  <br/>
      <strong class="text-dark h5">Deployment :</strong> 2 × EDGE Virtual Pro in AWS, 2 × EDGE Virtual Pro in Azure  <br/>
    <strong class="text-dark h5">Pricing </strong> Marketplace-based   `,
  },
];
const workflows = [
  {
    id: 1,
    title: 'Byte-level QoS  ',
    description:
      'Prioritise critical traffic such as payments, voice, video, EMR, trading, telemetry and SaaS before bulk traffic.   ',
    usecase: [
      'AI-assisted classification  ',
      'Hierarchical shaping  ',
      'Application-aware policies  ',
      'Real-time traffic protection  ',
    ],
  },
  {
    id: 2,
    title: ' Multi-link bonding   ',
    description:
      'Combine diverse links into one logical overlay for stronger bandwidth, resilience and path diversity.  ',
    usecase: [
      'Fibre, DSL, 4G, 5G, satellite and microwave  ',
      'Up to eight diverse links  ',
      'Aggregate site capacity  ',
      'Link-quality-aware scheduling  ',
    ],
  },
  {
    id: 3,
    title: ' RAIN resilience  ',
    description:
      'Duplicate critical traffic across paths to reduce effective packet loss and protect continuity. ',
    usecase: [
      'Optional mirrored packet paths  ',
      'Loss masking for critical flows  ',
      'Works with bonding and FEC  ',
      'Protects real-time services  ',
    ],
  },
  {
    id: 4,
    title: 'Sub-200ms failover  ',
    description:
      'Health-based monitoring and session stitching keep traffic moving when circuits degrade or fail.  ',
    usecase: [
      'Link-quality monitoring  ',
      'Session continuity  ',
      'Failover without unnecessary churn  ',
      'Designed for live operations  ',
    ],
  },
  {
    id: 5,
    title: ' Encrypted zero-trust tunnels   ',
    description:
      'EDGE secures traffic through encrypted APN tunnels with signed configurations and traffic obfuscation.  ',
    usecase: [
      'AES-128 / AES-256 encryption  ',
      'Zero-trust tunnel model  ',
      'Signed configs  ',
      'SAML / OIDC integration via ESC  ',
    ],
  },
  {
    id: 6,
    title: 'Observability and NOC integration  ',
    description:
      'EDGE exposes real-time health and performance data into Nexus, SNMP, Zabbix and NOC tooling.  ',
    usecase: [
      'Latency, jitter, loss and MOS    ',
      'Tunnel status  ',
      'Link quality  ',
      'SNMP / Zabbix hooks   ',
    ],
  },
];
const columns = [
  { key: 'product', label: 'Product ' },
  { key: 'audience', label: 'Audience ' },
  { key: 'delivery', label: 'Delivery ' },
  { key: 'salesModel', label: 'Sales model ' },
  { key: 'bestFor', label: 'Best for ' },
];

const comparisonData = [
  {
    product: 'Connect   ',
    audience: 'B2C self-serve   ',
    delivery: 'Software client + optional small router  ',
    salesModel: 'Self-serve online  ',
    bestFor: 'Individuals, prosumers, small teams  ',
  },
  {
    product: 'EDGE     ',
    audience: 'B2B managed edge / branch   ',
    delivery: 'Hardware CPE or cloud VM   ',
    salesModel: 'Managed / co-managed, design-led',
    bestFor: 'Branches, campuses, industrial, retail estates     ',
  },
  {
    product: 'ESC   ',
    audience: 'Enterprise  SaaS  overlay   ',
    delivery: 'VM, cloud or on-prem core  ',
    salesModel: 'Enterprise design    ',
    bestFor: 'Multi-site enterprise, ISP, OEM   ',
  },
];
const Edge = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  const steps = [
    {
      n: 1,
      title: (
        <>
          Deploy appliance or VM -{' '}
          <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Deploy </span>
        </>
      ),
      lead: 'Install an EDGE appliance at the site or deploy EDGE Virtual in AWS or Azure.  ',
    },
    {
      n: 2,
      title: (
        <>
          Cloud provisioning -{' '}
          <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Provision </span>
        </>
      ),
      lead: 'EDGE auto-provisions to the ESC head-end and receives its site configuration.  ',
    },
    {
      n: 3,
      title: (
        <>
          Form APN tunnels -{' '}
          <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Tunnel</span>
        </>
      ),
      lead: 'Encrypted APN tunnels connect to ESC, other EDGE nodes or approved partner sites.  ',
    },
    {
      n: 4,
      title: (
        <>
          Bond available links -{' '}
          <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Bond </span>
        </>
      ),
      lead: 'Fibre, broadband, DSL, 4G, 5G, satellite or microwave links are combined into one logical overlay.  ',
    },
    {
      n: 5,
      title: (
        <>
          Optimise traffic -{' '}
          <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Optimise </span>
        </>
      ),
      lead: 'ITM prioritises critical traffic, TCP-A improves throughput and QoS protects real-time flows.  ',
    },
    {
      n: 6,
      title: (
        <>
          Protect continuity -{' '}
          <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>
            Resilience{' '}
          </span>
        </>
      ),
      lead: 'RAIN, FEC and sub-200ms failover help preserve sessions when links degrade.  ',
    },
    {
      n: 7,
      title: (
        <>
          Monitor and manage -{' '}
          <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Observe </span>
        </>
      ),
      lead: 'Nexus, SNMP and Zabbix integrations expose real-time link health, tunnel quality and site performance.  ',
    },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Connectivity Products', href: '/products/connectivity-products' },
          { label: 'Enigma Edge' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Resilient edge connectivity <Br isTablet />
            over any mix of links
          </>
        }
        description="Enigma EDGE brings APN-powered optimisation, bonding, RAIN resilience, encrypted tunnels   
and real-time visibility to business sites, branches, venues, retail estates and distributed   
infrastructure.  "
        image={GridHero}
        isbg
        buttons={[
          {
            label: ' Talk to Us  ',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={['Multi-link bonding', ' Sub-200ms failover', ' Encrypted zero-trust tunnels  ']}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Distributed sites cannot rely on
                  <Br isDesktop /> one connection behaving perfectly
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Branches, retail stores, EV charging hubs, clinics, venues, depots and industrial sites
            often depend on mixed connectivity. Fibre may be strong but unavailable. Mobile links
            may fluctuate. Satellite may add latency. Broadband may degrade during peak periods.
            <br />
            <br />
            Traditional routers, backup links and basic SD-WAN tools can keep sites connected, but
            they do not always solve loss, jitter, session drops, failover disruption or poor
            real-time performance.
            <br />
            <br />
            Enigma EDGE brings APN performance directly to the site edge, helping teams keep
            services running across imperfect real-world networks.
          </>
        }
        data={Core}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  EDGE turns each site into an APN-powered <Br isDesktop /> performance point.
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma EDGE places the APN performance engine at the customer site, branch, venue, depot
            or cloud edge. It replaces or augments traditional routers and SD-WAN appliances with
            byte-level optimisation, multi-link bonding, RAIN resilience, encrypted overlay tunnels
            and real-time telemetry.
            <br />
            <br />
            EDGE is the managed B2B counterpart to Enigma Connect and works with ESC as the secure
            networking core.
          </>
        }
        data={data2}
      />
      <WorkSteps
        steps={steps}
        title={
          <>
            Plug in the edge. Provision through the cloud.
            <Br isDesktop /> Optimise every path.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Physical, virtual or SASE-ready.
                  <Br isTablet /> Same APN engine.
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Each EDGE tier can be delivered in three deployment modes. The right option depends on
            where the site sits, who operates it and how much security integration is required.
          </>
        }
        data={data3}
        transitionLine="EDGE can sit where the traffic starts: site, cloud, branch, venue or partner environment.  "
      />
      <PricingCard
        data={Command as CardItem[]}
        headerTitle={<>Choose the EDGE tier for each site profile</>}
        disableSentenceCase={true}
        columns="col-12 col-md-6 col-lg-4"
        transitionLine={
          <>
            Customers who buy hardware outright pay approximately{' '}
            <strong className="text-dark">60–70% of NaaS monthly prices</strong> for the software /
            APN licence only.
          </>
        }
      />

      <AddOnCard
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Deploy EDGE inside AWS or Azure. </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            EDGE Virtual gives customers the same APN-powered capability in cloud environments,
            allowing virtual networks, SaaS platforms and hybrid architectures to connect into the
            Enigma overlay.{' '}
          </>
        }
        data={addonPrice}
        cardShow={3}
        transitionLine={
          <>Azure supports BYOL annual / monthly licensing or PAYG via Marketplace.</>
        }
      />
      <CardWithUseCase
        data={workflows as CardItem[]}
        headerTitle={<>Performance, resilience, security and visibility at the site edge</>}
        columns="col-12 col-md-6 col-lg-4"
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for sites where downtime and degradation cost money</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            EDGE uses the same APN Core capabilities as Enigma’s wider platform, including ITM,
            TCP-A, bonding, RAIN and telemetry. The result is stronger performance under loss,
            congestion and mixed-link conditions.
          </>
        }
        data={data4}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Designed for sites where connectivity is operational infrastructure</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={data5}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  EDGE is the foundation for sector-specific <Br isDesktop />
                  connectivity bundles
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            EDGE underpins multiple Enigma vertical bundles where site connectivity, resilience and
            operational visibility are critical.
          </>
        }
        data={data6}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Self-serve, managed edge <Br isTablet />
                  or enterprise fabric
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Connect, EDGE and ESC all use the same APN Core behaviour. The difference is audience,
            delivery model and level of operational control.
          </>
        }
      />
      <ReusableTable
        columns={columns}
        data={comparisonData}
        footerText="Connect is where users start. EDGE is where business sites become managed APN edges.   
ESC is the secure fabric behind it.  "
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  EDGE can become the network <Br isTablet />
                  foundation for SASE
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            EDGE provides the performance and secure overlay foundation for customers that also need
            cloud security services. Rather than bundling an SSE stack into the base price, SASE can
            be offered as an add-on through partner security providers.
          </>
        }
        data={data7}
      />
      <AddOnCard
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Example EDGE deployment profiles</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={profilecards}
        cardShow={3}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  EDGE is managed site connectivity, <Br isDesktop /> not a consumer app or
                  standalone core
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            EDGE is designed for business sites, branches, venues, retail estates, industrial
            environments and cloud edges. It is not the same as the self-serve Connect app or the
            full ESC core.
          </>
        }
        benitsTitle="EDGE  is"
        limitationsTitle="EDGE  is not "
        benefits={[
          'A B2B managed edge connectivity product   ',
          'A physical or virtual APN-powered appliance   ',
          'A site-level private overlay and optimisation layer  ',
          'A replacement or complement to routers and SD-WAN boxes  ',
          'A foundation for vertical bundles and partner services  ',
          'A managed / co-managed deployment model  ',
        ]}
        limitations={[
          'A B2C self-serve desktop app  ',
          'A full customer-hosted ESC core  ',
          'A generic router  ',
          'A basic dual-WAN load balancer  ',
          'A standalone security product  ',
          'A one-size-fits-all consumer subscription  ',
        ]}
      />
      <NextPageSlider
        title="EDGE sits inside the wider Enigma connectivity portfolio"
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Make every site a <br />
          </>
        }
        headline2=" managed performance edge"
        description="Enigma EDGE gives business sites APN-powered bonding, resilience, encrypted overlay   
networking and live visibility across the links they already use.   "
        secondaryButton={{
          label: ' Talk to Us',
          href: '/get-in-touch',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default Edge;
