import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import { enterprise as heroImg } from '@/assets/img';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';
import NextPageSlider from '@/components/ui/NextPageSlider';
import { useSlug } from '@/utils/useSlug';
import { type CardItem } from '@/components/ui/card';
import CardWithUseCase from '@/components/ui/CardWithUseCase';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import Br from '@/components/ui/NewLine';
import { Commond } from '@/assets/img/products';
const features = [
  {
    id: 1,
    title: 'APN Core     ',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description: 'The underlying performance engine that powers ESC behaviour.  ',

    meta: {
      title: 'APN Core     ',
      description: 'The underlying performance engine that powers ESC behaviour.   ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'Enigma Connect     ',
    href: '/products/connectivity-products/enigma-connect',
    slug: 'enigma-connect',
    description: 'Self-serve APN-powered connectivity that terminates into ESC.   ',

    meta: {
      title: 'Enigma Connect     ',
      description: 'Self-serve APN-powered connectivity that terminates into ESC.     ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'Enigma EDGE     ',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description: 'Managed business and enterprise edge deployments that connect into ESC.    ',

    meta: {
      title: 'Enigma EDGE    ',
      description: 'Managed business and enterprise edge deployments that connect into ESC.    ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'AND/+ Integration Platform  ',
    href: '#',
    slug: 'and-plus',
    description: 'Embeddable APN and ESC integration layer for carriers, OEMs and platforms.    ',

    meta: {
      title: 'AND/+ Integration Platform    ',
      description: 'Embeddable APN and ESC integration layer for carriers, OEMs and platforms.    ',
    },
    image: heroImg,
  },
  {
    id: 5,
    title: 'Nexus Command    ',
    href: '/products/enigma-platform/enigma-command',
    slug: 'enigma-command',
    description:
      'Operational command view for ESC incidents, tunnel health and agent-assisted response.    ',
    image: Commond,
    meta: {
      title: 'Nexus Command     ',
      description:
        'Operational command view for ESC incidents, tunnel health and agent-assisted response.     ',
    },
  },
  {
    id: 6,
    title: 'Nexus Grid   ',
    href: '/products/enigma-platform/enigma-grid',
    slug: 'enigma-grid',
    description: 'Asset and topology system of record for ESC nodes, sites, links and tunnels.    ',
    image: heroImg,
    meta: {
      title: 'Nexus Grid    ',
      description:
        'Asset and topology system of record for ESC nodes, sites, links and tunnels.   ',
    },
  },
];
const featuresChild = [
  {
    id: 1,
    title: 'ESC – Deployment Profiles    ',
    href: '/products/performance-networking/esc-secure-networking/esc-deployment-profiles',
    slug: 'esc-deployment-profiles',
    description: 'Cloud, on-prem, hybrid topologies and reference diagrams.   ',

    meta: {
      title: 'ESC – Deployment Profiles   ',
      description: 'Cloud, on-prem, hybrid topologies and reference diagrams.     ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'ESC – Configuration Guide    ',
    href: '/products/performance-networking/esc-secure-networking/esc-configuration-guide',
    slug: 'esc-configuration-guide',
    description: 'Mapping Enigma concepts to configuration options and use cases.    ',

    meta: {
      title: 'ESC – Configuration Guide   ',
      description: 'Mapping Enigma concepts to configuration options and use cases.    ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'ESC – AWS Implementation Guide     ',
    href: '/products/performance-networking/esc-secure-networking/esc-aws-implementation-guide',
    slug: 'esc-aws-implementation-guide',
    description: 'Detailed EC2 endpoint and policy routing steps.     ',

    meta: {
      title: 'ESC – AWS Implementation Guide      ',
      description: 'Detailed EC2 endpoint and policy routing steps.     ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'ESC – Observability and NOC Integration     ',
    href: '/products/performance-networking/esc-secure-networking/esc-observability-and-noc-integration',
    slug: 'esc-observability-and-noc-integration',
    description: 'vibe-stat, SNMP MIBs and metrics export patterns.     ',

    meta: {
      title: 'ESC – Observability and NOC Integration      ',
      description: 'vibe-stat, SNMP MIBs and metrics export patterns.    ',
    },
    image: heroImg,
  },
  {
    id: 5,
    title: 'ESC – Security & Compliance Notes     ',
    href: '/products/performance-networking/esc-secure-networking/esc-security-compliance-notes',
    slug: 'esc-security-compliance-notes',
    description: 'Key management, cipher selection, audit points and threat model.      ',

    meta: {
      title: 'ESC – Security & Compliance Notes       ',
      description: 'Key management, cipher selection, audit points and threat model.     ',
    },
    image: heroImg,
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Underlays are inconsistent  ',
    description: `Performance varies across ISPs, access types, regions, clouds and edge locations.  `,
  },
  {
    id: 2,
    icon: block3,
    title: 'SD-WAN can still leave transport issues exposed  ',
    description:
      'Failover and routing do not always solve TCP loss, jitter, delay or real-time traffic degradation.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Private overlay deployments are complex ',
    description:
      'Customers need secure tunnels, segmentation, provisioning and policy without rebuilding every network.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Multi-tenant operations need control  ',
    description:
      'Service providers and enterprises need tenant separation, policy enforcement and clear operational boundaries.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Observability is often fragmented  ',
    description:
      'Teams need live tunnel, link, licence and quality data across every deployment model.   ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'APN Core behaviour   ',
    description: `TCP acceleration, byte-level QoS, bonding, RAIN and tunnel resilience.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Secure overlay networking   ',
    description: `Encrypted tunnels, private overlays, tenant segmentation and route realm separation.    `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Provisioning and management   ',
    description: 'Configuration push, licensing, remote actions and policy-based deployment.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Multi-tenant service delivery  ',
    description:
      'Tenant-aware overlays for telecoms, enterprises, MSPs and platform integrations.  ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Observability and control   ',
    description: 'Live tunnel statistics, SNMP integration, vibe-stat metrics and NOC visibility. ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: 'Enigma Connect  ',
    description: `Self-serve thin clients and small edge devices terminate into ESC to give individuals and small   
offices APN-quality connectivity without network design.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Enigma EDGE  ',
    description: `Managed CPE, gateways and virtual appliances connect branches, data centres, clouds and IoT   
networks into ESC.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'ESC – Secure Networking  ',
    description:
      'The core fabric and control plane that endpoints home into. It can run as Enigma-hosted SaaS, customer-hosted cloud VM or on-prem appliance.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'OEM / Carrier / IoT integrations   ',
    description:
      'Partners can embed or connect APN-powered services into ESC for branded, vertical or fleet-based deployments.   ',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'OS and kernel ',
    description: `Recent Linux distribution with TUN/TAP support and netfilter / conntrack enabled.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Runtime libraries   ',
    description:
      'Core dependencies for configuration parsing, kernel integration and cryptography.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Licensing and keys    ',
    description: 'Licence file and asymmetric key storage for APN v6 and later environments.      ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Network requirements  ',
    description:
      'Required UDP ports open between ESC core and CPE, with routing policies aligned to the deployment environment.    ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Cloud routing  ',
    description:
      'In EC2 or similar environments, policy routing ensures traffic exits through the correct interface and public IP.     ',
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'MPLS augmentation or replacement    ',
    description: `Create an internet overlay that supports high-availability targets without relying solely on   
private circuits.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'ISP and MSP SD-WAN services    ',
    description:
      'Allow service providers to package ESC under their own commercial and support model.    ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Trading, healthcare, broadcast and industrial control  ',
    description:
      'Support environments where jitter, packet loss or degraded real-time traffic is operationally unacceptable.     ',
  },
  {
    id: 4,
    icon: block3,
    title: 'IoT and SCADA overlays ',
    description:
      'Tunnel telemetry and control traffic from lightweight gateways back to a secure ESC hub.     ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Cloud and data centre interconnect  ',
    description:
      'Connect branches, cloud environments, enterprise hubs and regional POPs through encrypted APN tunnels.   ',
  },
];
const data6 = [
  {
    id: 1,
    icon: block1,
    title: 'Live tunnel statistics      ',
    description: `View tunnel state, link quality, RTT, jitter and licence state.    `,
  },

  {
    id: 2,
    icon: block3,
    title: 'SNMP integration     ',
    description: 'Use vibeSNMP and dedicated MIBs for NOC-grade monitoring.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Remote control functions    ',
    description:
      'Push configuration, request licence actions, reboot nodes or trigger upgrades.    ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Portal and Nexus integration    ',
    description:
      'Expose ESC health and operational data through Connect, EDGE, Nexus Command and NOC tooling.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Quality monitoring   ',
    description:
      'Track jitter, RTT, tunnel quality and degradation patterns across links and remotes.  ',
  },
];
const data7 = [
  {
    id: 1,
    icon: block1,
    title: 'Encrypted tunnels  ',
    description: `Traffic is protected using strong cryptography through OpenSSL and GNU crypto libraries.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Key management    ',
    description:
      'Keys are stored in defined APN key directories, with APN v6 and later using asymmetric key handling.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Tenant segmentation   ',
    description: 'vpn_id and route_realm options segment traffic into isolated overlays.    ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Zero-trust alignment   ',
    description:
      'ESC can support designs where policy, identity and device posture control access.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Controlled management plane   ',
    description:
      'Provisioning, licence and remote actions are handled through controlled management interfaces.    ',
  },
];
const Command = [
  {
    id: 1,
    title: 'Intelligent Traffic Management    ',
    description:
      'ESC applies byte-level classification and scheduling so real-time traffic is not trapped behind large data transfers.   ',
    usecase: [
      'QoS queues for traffic classes   ',
      'Voice and real-time precedence  ',
      'Bulk transfer control   ',
      'Better experience under congestion   ',
    ],
  },
  {
    id: 2,
    title: 'TCP Acceleration     ',
    description:
      'ESC uses ViBE acceleration logic to improve single-flow performance over lossy or long-distance links.  ',
    usecase: [
      'Optimised congestion behaviour  ',
      'Stronger long-haul throughput  ',
      '13× uplift in controlled 100 Mb/s, 0.5% loss, 300 ms RTT testing   ',
      'Supports data-heavy and latency-sensitive workloads  ',
    ],
  },
  {
    id: 3,
    title: 'Multi-link bonding and resilience    ',
    description:
      'ESC supports bonded and backup paths across multiple links, improving continuity when circuits degrade or fail.   ',
    usecase: [
      'Multi-link tunnel sets  ',
      'Backup paths and failover  ',
      'Link-quality based routing   ',
      'Sub-second continuity support  ',
    ],
  },
  {
    id: 4,
    title: 'RAIN mode      ',
    description:
      'RAIN duplicates high-priority traffic across links to mask packet loss and protect real-time applications.   ',
    usecase: [
      'Loss masking across alternate paths  ',
      'Effective packet loss below 0.1% for protected traffic   ',
      'Stronger VoIP and real-time stability ',
      'Resilience under raw link degradation  ',
    ],
  },
  {
    id: 5,
    title: 'Security overlay      ',
    description:
      'ESC creates encrypted private overlays with tenant segmentation and zero-trust-ready separation.    ',
    usecase: [
      'Encrypted APN tunnels   ',
      'VPN ID and route realm segmentation   ',
      'Multi-tenant isolation  ',
      'Secure key and configuration handling   ',
    ],
  },
  {
    id: 6,
    title: ' Observability and remote control  ',
    description:
      'ESC exposes live tunnel, licence, quality and control data for NOC and operations teams.  ',
    usecase: [
      'vibe-stat tunnel statistics   ',
      'RTT, jitter and quality metrics   ',
      'SNMP via vibeSNMP  ',
      'Remote config push, reboot and upgrade actions ',
    ],
  },
];

const Models = [
  {
    id: 1,
    title: 'Enigma-hosted ESC   ',
    subtitle: 'Default SaaS core.  ',
    description:
      'ESC runs as a hardened cluster in Enigma POPs. Customers deploy Connect or EDGE endpoints that auto-provision into the Enigma-hosted core.  ',
    usecase: [
      'SMEs and enterprises that do not want to run their own core  ',
      'Rapid trials and pilots  ',
      'Telecom resellers bundling Enigma services  ',
      'Fast deployment with lower operational overhead   ',
    ],
    stepList: true,
    stepTitle: 'Ideal for  ',
  },
  {
    id: 2,
    title: 'Customer-hosted ESC VM  ',
    subtitle: 'Public cloud deployment.   ',
    description:
      'Enigma supplies virtual machine images for customers who want ESC inside their own cloud environment.   ',
    usecase: [
      'Data sovereignty requirements  ',
      'Compliance-sensitive organisations  ',
      'Cloud firewall and transit gateway integration  ',
      'IoT and B2B SaaS platforms needing ESC inside their own stack   ',
    ],
    stepList: true,
    stepTitle: 'Ideal for  ',
  },
  {
    id: 3,
    title: 'Customer-hosted ESC appliance   ',
    subtitle: 'On-prem or carrier POP deployment.   ',
    description:
      '  The ESC software stack runs on bare-metal Linux or virtual infrastructure in customer data centres, enterprise hubs or carrier POPs.  ',
    usecase: [
      'Carrier NNI and peering environments   ',
      'Enterprise hub-and-spoke overlays   ',
      'Regional data centre hubs   ',
      'Private or highly controlled infrastructure estates   ',
    ],
    stepList: true,
    stepTitle: 'Ideal for  ',
  },
];
const Capability = [
  {
    id: 1,
    title: 'ViBE engine instance    ',
    description:
      'ESC runs the APN engine on Linux, creating a tunnel interface with its own routing and traffic handling.   ',
    usecase: [
      'Single binary engine  ',
      'TUN/TAP interface    ',
      'Local routing table ',
      'APN encapsulation and decapsulation  ',
    ],
  },
  {
    id: 2,
    title: 'Configuration and licensing    ',
    description:
      'ESC reads configuration and licensing details at startup and applies remote, network and tunnel policies.  ',
    usecase: [
      'Global and per-remote configuration  ',
      'Licence validation  ',
      'Remote definitions  ',
      'Routed prefixes, QoS and VPN IDs  ',
    ],
  },
  {
    id: 3,
    title: 'Tunnel establishment and routing   ',
    description:
      'ESC establishes encrypted tunnels and installs routes for remote networks when tunnels are available.   ',
    usecase: [
      'Encrypted tunnel setup  ',
      'Multiple links and backup peers  ',
      'Route installation and removal  ',
      'Permanent route options where required  ',
    ],
  },
  {
    id: 4,
    title: 'Packet processing     ',
    description:
      'Traffic is queued, shaped, prioritised, encapsulated, sent, reordered and repaired as needed.   ',
    usecase: [
      'QoS class queues   ',
      'Bandwidth shaping   ',
      'Bonded link reordering    ',
      'RAIN / FEC loss repair  ',
      'Forwarding into local networks  ',
    ],
  },
  {
    id: 5,
    title: 'Monitoring and control    ',
    description:
      'Operators can query state and trigger controlled remote actions through ESC management interfaces.   ',
    usecase: [
      'Tunnel state and metrics   ',
      'Licence state   ',
      'Remote config push   ',
      'Reboot or upgrade actions  ',
      'SNMP and NOC integration  ',
    ],
  },
];
const outcomes = [
  'APN Core delivery as software and SaaS    ',
  'Secure private overlay networking   ',
  'Multi-tenant ESC core deployments   ',
  'Provisioning and management plane   ',
  'Observability and remote control   ',
  'Bonding, RAIN, TCP acceleration and QoS  ',
];
const outcomes2 = [
  'Product-specific customer UX for Connect or EDGE     ',
  'Deep APN internals already covered by APN Core pages  ',
  'General file workflows covered by SyncSphere    ',
  'Identity lifecycle covered by Hub    ',
  'Finance and billing workflows covered by Ledger   ',
];
const outcomes3 = [
  'Throughput depends on hardware, hypervisor and licence tier  ',
  'Maximum bonded links vary by deployment and licence   ',
  'Advanced ViBE / AVPN options may not be exposed in standard portals ',
  'Windows and mobile thin clients terminate into ESC but do not run ViBE locally  ',
 
];
const SecureNetworking = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Performance Networking', href: '/products/performance-networking' },
          { label: 'ESC Secure Networking' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeroSection
        title={
          <>
            Secure overlay networking
            <Br isTablet /> powered by APN Core
          </>
        }
        description="ESC – Secure Networking delivers Enigma’s APN Core as a multi-tenant software and SaaS   
        platform, enabling private overlay networking, SD-WAN-style control, traffic acceleration,   
        bonding, RAIN resilience and secure connectivity across any IP network.   "
        image={heroImg}
        buttons={[
          {
            label: 'Talk to Enigma',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
            
          },
        ]}
        features={[
          'Software-defined overlay',
          'Multi-tenant control ',
          'Bonding, RAIN and TCP acceleration  ',
        ]}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Modern networks need more than connectivity. <Br isDesktop  />
                  They need controlled performance over any underlay
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enterprises, service providers and distributed teams increasingly rely on mixed
            networks: broadband, fibre, 5G, LTE, satellite, cloud links, branch circuits and remote
            devices.
            <br />
            <br />
            Traditional network architectures can struggle to deliver consistent performance, secure
            segmentation and operational visibility across that mix.
            <br />
            <br />
            ESC gives Enigma a deployable secure networking layer that runs over any IP network and
            applies APN Core performance, resilience and control consistently.
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
                  ESC turns APN Core into a deployable <Br isDesktop isTablet /> secure networking
                  platform
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ESC packages the ViBE / APN engine, provisioning logic, configuration management and
            observability into a multi-tenant secure networking service.
            <br />
            <br />
            It is the fabric that Connect and EDGE endpoints connect into, and the platform that
            enterprises, carriers, OEMs and IoT environments can deploy as SaaS, cloud VM or on-prem
            infrastructure.
          </>
        }
        data={data2}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  ESC is the fabric that Connect <Br isTablet /> and EDGE connect into
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Connect, EDGE and OEM integrations all use the same APN Core behaviour. ESC is the
            delivery and control layer that makes those services operational at scale.
          </>
        }
        data={data3}
        transitionLine={
          <>
            APN Core is the engine. ESC is how that engine becomes a secure, managed networking
            service.{' '}
          </>
        }
      />
      <CardWithUseCase
        data={Command as CardItem[]}
        headerTitle={
          <>
            APN performance and resilience <Br isTablet /> delivered as a service
          </>
        }
      />
      <CardWithUseCase
        data={Models as CardItem[]}
        headerTitle={
          <>
            Deploy ESC as SaaS, cloud VM <Br isTablet isDesktop /> or on-prem networking fabric
          </>
        }
        description={
          <>
            ESC uses the same APN engine and configuration model across deployment patterns. The
            difference is where the core is hosted and who operates it.
          </>
        }
      />
      <CaseStudyHighlight
        image={heroImg}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>How ESC moves traffic from edge to core.</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            At a high level, ESC creates a secure tunnel fabric between remote endpoints and the ESC
            core. Traffic entering the APN interface is classified, shaped, encrypted, accelerated
            and sent over the appropriate tunnel.
          </>
        }
        transitionLine={
          <>ESC takes imperfect IP links and turns them into managed private overlay paths.</>
        }
      />
      <CardWithUseCase
        data={Capability as CardItem[]}
        headerTitle="The APN engine, configuration and management plane in one service  "
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for Linux-based networking environments </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ESC deployment requires a Linux-compatible environment with networking, cryptography,
            licensing and management dependencies in place.
          </>
        }
        data={data4}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Designed for private overlay networking <Br isTablet isDesktop />
                  across real-world environments
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ESC supports Enigma deployments where secure performance, private overlays, resilience
            and control are required across mixed networks.
          </>
        }
        data={data5}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Operational visibility across every ESC deployment</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ESC exposes the tunnel, licence, link-quality and remote-control information needed by
            NOC teams, Nexus Command and partner operations environments.
          </>
        }
        data={data6}
      />{' '}
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Private overlay networking with <Br isDesktop />
                  tenant separation and encrypted tunnels
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ESC uses APN Core security capabilities to create encrypted tunnels, isolate tenant
            traffic and support zero-trust-oriented private overlay designs.
          </>
        }
        data={data7}
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  ESC is the secure networking fabric,
                  <Br isDesktop isTablet /> not every product interface.
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ESC is intentionally product-agnostic. Connect, EDGE and OEM experiences may expose only
            the controls relevant to their users, while advanced configuration remains reserved for
            engineering, platform or partner projects.
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes2}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Out of scope</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes3}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Known constraints  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <NextPageSlider
        title="ESC connects APN Core to Enigma’s product and deployment ecosystem  "
        data={features}
        currentSlug={slug as string}
      />
      <NextPageSlider
        title="ESC – Secure Networking features"
        data={featuresChild}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Deploy APN Core as a    "
        headline2=" secure networking fabric"
        description="ESC – Secure Networking gives Enigma customers and partners a software-defined private   
overlay platform for accelerated, resilient and observable networking across cloud, edge,   
enterprise and service provider environments.   "
        primaryButton={{
          label: 'Explore ESC',
          href: '#',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default SecureNetworking;
