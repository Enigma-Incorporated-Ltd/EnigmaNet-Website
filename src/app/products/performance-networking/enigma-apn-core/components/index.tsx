import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import { enterprise as heroImg } from '@/assets/img';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';
import NextPageSlider from '@/components/ui/NextPageSlider';
import { useSlug } from '@/utils/useSlug';
import { type CardItem } from '@/components/ui/card';
import CardWithUseCase from '@/components/ui/CardWithUseCase';
import FeatureComparison from '@/components/ui/FeatureComparison';
import Br from '@/components/ui/NewLine';
import { ApnCoreHero, Commond, EscHero, GridHero } from '@/assets/img/products';
import {
  AndPlus,
  APNCoreimprovesContinuoustelemetry,
  APNCoreimprovesencryptedoverlay,
  APNCoreimprovesRAINredudancy,
  Bandwithdowsnotequalperformance,
  Byteleveltrafficmanagement,
  CLI,
  CommandSvg,
  DataMovement,
  EDGE,
  Effectivelosscontrol,
  EnigmaConnect,
  EnigmaPortal,
  Ephemeralkeyexchange,
  ESC,
  Failoveroftenbreakssession,
  MetaDataProtection,
  MultiLink,
  partnerandOEMplatforms,
  Realtimeapplications,
  Realtimetrafficgetstrapped,
  Realtimevoicestability,
  Remoteandedgeaccess,
  RESTandgRPC,
  Sessioncontinuity,
  Signedconfigurationandupdates,
  SNMP,
  Strongencryption,
  TCPacceleration,
  TCPstrugglesoverlossylonghaullinks,
  Teamslacktransportvisibility,
  Testmatrixperformance,
  Throughputuplift,
  Zerotrustaligment,
} from '@/assets/svgs/products/performance-networking/apn-core';
const features = [
  {
    id: 1,
    title: 'Enigma Connect   ',
    href: '/products/connectivity-products/enigma-connect',
    slug: 'enigma-connect',
    description: 'Self-serve APN-powered connectivity for individuals and small teams.   ',

    meta: {
      title: 'Enigma Connect   ',
      description: 'Self-serve APN-powered connectivity for individuals and small teams.  ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'Enigma EDGE    ',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description: 'Managed APN-powered edge networking for business and enterprise sites.  ',

    meta: {
      title: 'Enigma EDGE    ',
      description: 'Managed APN-powered edge networking for business and enterprise sites.   ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'ESC – Secure Networking    ',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description: 'Links payment devices, terminals and services to sites, networks and assets.  ',

    meta: {
      title: 'ESC – Secure Networking     ',
      description:
        'SaaS overlay delivery of APN Core for remote users, thin clients and devices.   ',
    },
    image: EscHero,
  },
  {
    id: 4,
    title: 'AND/+     ',
    href: '#',
    slug: 'and-plus',
    description:
      'Integration platform for embedding APN Core into partner, carrier and OEM environments.   ',

    meta: {
      title: 'AND/+     ',
      description:
        'Integration platform for embedding APN Core into partner, carrier and OEM environments.   ',
    },
    image: heroImg,
  },
  {
    id: 5,
    title: 'Nexus Command    ',
    href: '/products/enigma-platform/enigma-command',
    slug: 'enigma-command',
    description: 'Operational view for incidents, agent activity and live service control.   ',
    image: Commond,
    meta: {
      title: 'Nexus Command     ',
      description: 'Operational view for incidents, agent activity and live service control.    ',
    },
  },
  {
    id: 6,
    title: 'Nexus Grid   ',
    href: '/products/enigma-platform/enigma-grid',
    slug: 'enigma-grid',
    description:
      'Asset and topology view for devices, links, tunnels, sites and service mappings.  ',
    image: GridHero,
    meta: {
      title: 'Nexus Grid    ',
      description:
        'Asset and topology view for devices, links, tunnels, sites and service mappings.   ',
    },
  },
];
const Core = [
  {
    id: 1,
    icon: Bandwithdowsnotequalperformance,
    title: 'Bandwidth does not equal performance',
    description: `A fast circuit can still deliver poor throughput when latency or packet loss is present.  `,
  },
  {
    id: 2,
    icon: TCPstrugglesoverlossylonghaullinks,
    title: 'TCP struggles over lossy long-haul links  ',
    description:
      'Legacy TCP behaviour reduces throughput dramatically when distance, delay or loss increase.  ',
  },
  {
    id: 3,
    icon: Failoveroftenbreakssession,
    title: 'Failover often breaks sessions  ',
    description:
      'Traditional failover can move traffic to another link, but active sessions may still drop or stall.  ',
  },
  {
    id: 4,
    icon: Realtimetrafficgetstrapped,
    title: 'Real-time traffic gets trapped behind bulk data   ',
    description:
      'Voice, video and interactive traffic can suffer when large transfers occupy the queue. ',
  },
  {
    id: 6,
    icon: Teamslacktransportvisibility,
    title: 'Teams lack transport visibility',
    description:
      'Without link and tunnel telemetry, teams struggle to understand latency, jitter, loss, utilisation and MOS in context.   ',
  },
];
const data2 = [
  {
    id: 1,
    icon: Byteleveltrafficmanagement,
    title: 'Byte-level traffic management   ',
    description: `Small, latency-sensitive traffic can be prioritised ahead of bulk data.  `,
  },
  {
    id: 2,
    icon: TCPacceleration,
    title: 'TCP acceleration  ',
    description: `Optimised congestion and recovery behaviour improves throughput over lossy or high-latency paths.    `,
  },
  {
    id: 3,
    icon: MultiLink,
    title: 'Multi-link bonding   ',
    description:
      'Up to eight circuits can be bonded and managed as part of one performance fabric.   ',
  },
  {
    id: 4,
    icon: APNCoreimprovesRAINredudancy,
    title: 'RAIN redundancy   ',
    description:
      'Critical traffic can be duplicated across alternate paths to reduce effective loss.   ',
  },
  {
    id: 5,
    icon: APNCoreimprovesContinuoustelemetry,
    title: 'Continuous telemetry   ',
    description:
      'Latency, jitter, loss, throughput, utilisation and MOS data feed portals, NOC tools and APIs.  ',
  },
  {
    id: 6,
    icon: APNCoreimprovesencryptedoverlay,
    title: 'Encrypted overlay  ',
    description:
      'Traffic is protected inside an encrypted APN tunnel with security controls and limited telemetry. ',
  },
];
const data3 = [
  {
    id: 1,
    icon: Throughputuplift,
    title: 'Throughput uplift   ',
    description: `On a 100 Mb/s link with 0.5% loss and 300 ms RTT, raw TCP achieved approximately 6 Mb/s.   
APN Core restored throughput to approximately 80 Mb/s.    `,
  },
  {
    id: 2,
    icon: Testmatrixperformance,
    title: 'Test matrix performance  ',
    description: `Across high-latency, lossy-link tests, APN Core delivered between 10× and 64× faster transfers   
than raw TCP.   `,
  },
  {
    id: 3,
    icon: Realtimevoicestability,
    title: 'Real-time voice stability   ',
    description:
      'In VoIP stress testing, APN maintained 180 concurrent G.711 calls at MOS 4 after bandwidth was reduced from 8 Mb/s to 4 Mb/s.   ',
  },
  {
    id: 4,
    icon: Effectivelosscontrol,
    title: 'Effective loss control    ',
    description:
      'RAIN and bonding can keep protected traffic below 0.1% effective loss, even when raw loss spikes significantly.  ',
  },
  {
    id: 5,
    icon: Sessioncontinuity,
    title: 'Session continuity   ',
    description:
      'Multi-link bonding and sub-second failover help preserve IP sessions when circuits fail or degrade.  ',
  },
];
const data4 = [
  {
    id: 1,
    icon: EnigmaConnect,
    title: 'Enigma Connect  ',
    description: `Self-serve connectivity products for individuals and small teams. Each plan is a policy and capacity slice on top of APN Core.  `,
  },

  {
    id: 2,
    icon: EDGE,
    title: 'Enigma EDGE    ',
    description:
      'Managed edge and branch connectivity for business, enterprise, sites, campuses and partner networks.   ',
  },
  {
    id: 3,
    icon: ESC,
    title: 'ESC – Secure Networking  ',
    description:
      'SaaS delivery of APN Core for devices, thin clients and remote users without dedicated hardware.    ',
  },
  {
    id: 4,
    icon: AndPlus,
    title: 'AND/+ Integration Platform  ',
    description:
      'APN Core packaged as an embeddable engine for carriers, OEMs and SaaS platforms.   ',
  },
];
const data5 = [
  {
    id: 1,
    icon: CLI,
    title: 'CLI  ',
    description: `Used for day-one provisioning, low-level troubleshooting and engineering workflows.    `,
  },

  {
    id: 2,
    icon: SNMP,
    title: 'SNMP  ',
    description:
      'vibeSNMP exposes per-link latency, loss, jitter, counters and tunnel metrics for NOC tools.   ',
  },
  {
    id: 3,
    icon: RESTandgRPC,
    title: 'REST and gRPC  ',
    description:
      'AND/+ APIs support provisioning, policy updates, telemetry export and billing integration.   ',
  },
  {
    id: 4,
    icon: EnigmaPortal,
    title: 'Enigma portals  ',
    description:
      'Connect, EDGE and ESC portals provide product-specific UX surfaces built on APN Core metrics and control.   ',
  },
  {
    id: 5,
    icon: CommandSvg,
    title: 'Nexus and Command   ',
    description:
      'Operational telemetry can feed Nexus, Command and NOC workflows for incident visibility and automation context.   ',
  },
];
const data6 = [
  {
    id: 1,
    icon: Strongencryption,
    title: 'Strong encryption    ',
    description: `APN tunnels use AES-256-GCM encryption with FIPS-validated OpenSSL primitives.   `,
  },

  {
    id: 2,
    icon: Ephemeralkeyexchange,
    title: 'Ephemeral key exchange    ',
    description: 'Key exchange can use modern approaches such as Curve25519.  ',
  },
  {
    id: 3,
    icon: Signedconfigurationandupdates,
    title: 'Signed configuration and updates  ',
    description:
      'Firmware and configuration updates can be signed and validated before deployment.   ',
  },
  {
    id: 4,
    icon: Zerotrustaligment,
    title: 'Zero-trust alignment   ',
    description:
      'APN can complement SASE and ZTNA policies with identity and device posture controls.   ',
  },
  {
    id: 5,
    icon: MetaDataProtection,
    title: 'Metadata protection  ',
    description:
      'No traffic content is logged, with private DNS and encrypted handshakes protecting sensitive connection context.    ',
  },
];
const data7 = [
  {
    id: 1,
    icon: DataMovement,
    title: 'Data movement    ',
    description: `Large file transfer, backups, sync jobs, media movement and AI dataset transfer.   `,
  },

  {
    id: 2,
    icon: Realtimeapplications,
    title: 'Real-time applications    ',
    description:
      'Voice, video, collaboration, trading, gaming, control traffic and interactive SaaS.   ',
  },
  {
    id: 3,
    icon: MultiLink,
    title: 'Multi-link resilience  ',
    description: 'Sites with fibre, broadband, LTE, 5G, satellite or mixed backup links.    ',
  },
  {
    id: 4,
    icon: Remoteandedgeaccess,
    title: 'Remote and edge access ',
    description:
      'Branch sites, mobile users, field operations, remote devices and thin clients.   ',
  },
  {
    id: 5,
    icon: partnerandOEMplatforms,
    title: 'Partner and OEM platforms   ',
    description:
      'Carriers, SaaS platforms and device vendors embedding APN Core under their own experience.    ',
  },
];
const Command = [
  {
    id: 1,
    title: 'Visibility  ',
    description:
      'APN Core continuously measures link and tunnel behaviour so teams can see how the network is performing.  ',
    usecase: [
      'Latency, jitter, loss, utilisation and throughput   ',
      'MOS visibility for real-time traffic   ',
      'SNMP, REST and gRPC telemetry   ',
      'Portal and NOC dashboard feeds  ',
    ],
  },
  {
    id: 2,
    title: 'Performance   ',
    description:
      'APN Core accelerates data movement by improving TCP behaviour and scheduling traffic more intelligently inside the tunnel.  ',
    usecase: [
      'TCP Acceleration   ',
      'Byte-level prioritisation  ',
      'Better throughput over lossy links   ',
      '10–64× faster transfers in test conditions',
    ],
  },
  {
    id: 3,
    title: 'Stability  ',
    description:
      'APN Core maintains session continuity and reduces effective packet loss through bonding, failover and RAIN duplication.   ',
    usecase: [
      'Multi-link bonding   ',
      'Sub-second failover  ',
      'RAIN packet duplication  ',
      'Loss held below 0.1% for protected traffic  ',
    ],
  },
  {
    id: 4,
    title: 'Security    ',
    description:
      'APN Core protects traffic inside encrypted tunnels and supports zero-trust controls around identity, device posture and policy.   ',
    usecase: [
      'AES-256-GCM encryption    ',
      'Private DNS and encrypted handshakes   ',
      'Optional traffic obfuscation   ',
      'No content logging  ',
    ],
  },
];
const DataModel = [
  {
    id: 1,
    title: 'Cell slicing and prioritisation  ',
    description:
      'Traffic is broken into fixed-size cells so latency-sensitive traffic can move ahead of bulk data.    ',
    usecase: [
      'Voice, video and interactive traffic protected  ',
      'Bulk transfers prevented from blocking real-time traffic ',
      'QoS applied at byte level inside the APN tunnel ',
    ],
  },
  {
    id: 2,
    title: 'Predictive congestion control   ',
    description:
      'APN samples each path and responds to early signs of congestion before user experience is affected.   ',
    usecase: [
      'RTT drift monitoring  ',
      'Queue depth and jitter sampling   ',
      'Traffic re-weighting before loss becomes visible  ',
      'Gold traffic moved away from degrading paths  ',
    ],
  },
  {
    id: 3,
    title: 'Bonding and RAIN mirroring   ',
    description:
      ' APN can combine multiple circuits while duplicating critical traffic across diverse paths.   ',
    usecase: [
      'Up to eight circuits per node   ',
      'Aggregate bandwidth for single-flow performance  ',
      'Staggered duplicates across alternate paths ',
      'Faster recovery without retransmission delays  ',
    ],
  },
  {
    id: 4,
    title: 'Inline TCP Acceleration   ',
    description:
      'APN terminates TCP locally and applies optimised behaviour inside the tunnel before replaying data at the far side.   ',
    usecase: [
      'Improves long RTT performance  ',
      'Reduces the impact of packet loss   ',
      'Drives 10–64× transfer uplift in tests  ',
      'Especially useful for large data movement and long-haul links  ',
    ],
  },
];
const Capability = [
  {
    id: 1,
    title: 'Hardware appliance    ',
    description:
      'Physical APN-enabled devices for homes, branches, SMBs, edge sites and data centre environments.   ',
    usecase: [
      'MT6000 for small branch, home office or SMB sites  ',
      'XE3000 for higher-throughput edge or data centre deployments  ',
      'ECMP gateway support for aggregate throughput   ',
    ],
  },
  {
    id: 2,
    title: 'Software and virtual   ',
    description:
      'APN Core can run as a Linux binary or cloud deployment for virtual edge and SaaS networking use cases.  ',
    usecase: [
      'x86 and ARM Linux binary ',
      'ESC Secure Networking nodes ',
      'Virtual edges   ',
      'Container images and Helm charts  ',
      'Cloud or VPC deployment  ',
    ],
  },
  {
    id: 3,
    title: 'Integration and OEM    ',
    description:
      'AND/+ allows carriers, OEMs and platforms to embed APN Core into their own environments and products.   ',
    usecase: [
      'Signed Linux binary ',
      'Containerised deployment  ',
      'REST and gRPC APIs   ',
      'White-label or embedded partner use cases   ',
    ],
  },
];
const ApnCore = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Performance Networking', href: '/products/performance-networking' },
          { label: 'Enigma APN Core' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeroSection
        title={
          <>
            Fix the transport layer <Br isTablet />
            across any connection
          </>
        }
        description="APN Core is Enigma Net’s software-defined performance overlay, combining byte-level routing,   
        TCP acceleration, multi-link bonding, RAIN redundancy, telemetry and encryption across fibre,   
        broadband, 5G, LTE, satellite and mixed networks.  "
        image={ApnCoreHero}
        buttons={[
          {
            label: 'Explore APN Core  ',
            href: '#',
            variant: 'blue',
          },
          {
            label: 'Talk to Enigma',
            href: '/get-in-touch',
            variant: 'gold',
            disableSentenceCase: true,
          },
        ]}
        features={['10–64× faster transfers', 'Sub-second failover', 'Loss held below 0.1%  ']}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Most connectivity problems are not <Br isDesktop isTablet />
                  solved by adding more bandwidth
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            High bandwidth does not guarantee high performance. Loss, latency, jitter, congestion
            and poor TCP behaviour can still slow transfers, damage real-time applications and
            interrupt sessions.
            <br />
            <br />
            Traditional networks focus heavily on the access link. APN Core focuses on the transport
            layer — where traffic is scheduled, prioritised, accelerated, protected and recovered.
            <br />
            <br />
            That is where Enigma improves how the connection actually behaves.
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
                  APN Core improves how traffic behaves
                  <Br isDesktop isTablet /> across the links you already have
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core wraps application traffic in an encrypted overlay and applies byte-level
            scheduling, predictive congestion control, TCP acceleration, bonding and redundancy
            inside the tunnel.
            <br />
            <br />
            It can sit above commodity broadband, fibre, LTE, 5G, satellite or mixed access
            circuits, giving Enigma products a common performance and resilience model.
          </>
        }
        data={data2}
      />
      <CardWithUseCase
        data={Command as CardItem[]}
        headerTitle={
          <>
            Visibility, performance, stability and <Br isDesktop isTablet /> security in one
            transport fabric
          </>
        }
      />
      <CardWithUseCase
        data={DataModel as CardItem[]}
        headerTitle={
          <>
            A performance overlay that optimises <Br isDesktop isTablet />
            traffic inside the tunnel
          </>
        }
        description={
          <>
            APN Core sits above the underlying ISP circuits. It does not rely on the access link
            behaving perfectly. Instead, it creates an encrypted overlay where Enigma can control
            scheduling, congestion response, bonding, redundancy and recovery.
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
                  Designed for high-loss, high-latency
                  <Br isDesktop isTablet /> and real-time environments
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core is built for the conditions where ordinary connectivity begins to fail: long
            distance, lossy circuits, congested links, mixed access media and real-time workloads.
          </>
        }
        data={data3}
      />
      <CardWithUseCase
        data={Capability as CardItem[]}
        headerTitle="One engine, multiple deployment models"
        description={
          <>
            APN Core can be delivered as hardware, software, virtual infrastructure or embedded OEM
            technology, allowing the same performance engine to support consumer, business, SaaS and
            partner use cases.{' '}
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>APN Core powers the Enigma Net portfolio</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Connect, EDGE, ESC and AND/+ all share the same APN Core behaviour. They differ in
            packaging, policy, UX and commercial model.
          </>
        }
        data={data4}
        transitionLine={
          <>If a node speaks APN Core, it can participate in the Enigma Net performance fabric.</>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  A consistent management surface
                  <Br isDesktop isTablet /> across every APN deployment{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core exposes telemetry and control through CLI, SNMP, REST, gRPC and Enigma portals,
            giving teams flexibility across provisioning, NOC operations, automation and partner
            integration.
          </>
        }
        data={data5}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Encrypted performance networking by design</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core protects traffic inside encrypted tunnels while supporting zero-trust controls,
            private DNS, signed updates and limited telemetry collection.
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
                  Use APN Core when performance has to
                  <Br isDesktop isTablet /> survive real-world network conditions
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core is most valuable when teams need predictable performance across imperfect
            links, mixed media, distributed sites or high-latency paths.
          </>
        }
        data={data7}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  APN Core is the transport engine,
                  <Br isTablet /> not the product wrapper
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core is the shared performance layer underneath Enigma Net products. It is not the
            customer portal, billing system, storage workspace or product-specific packaging.
            <br />
            <br />
            Those experiences are delivered through Connect, EDGE, ESC, AND/+ and Nexus modules.
          </>
        }
        benitsTitle="APN Core   is  "
        limitationsTitle="APN Core   is not  "
        benefits={[
          'The software-defined performance overlay  ',
          'The shared transport fabric across Enigma products   ',
          'The byte-level QoS, bonding, RAIN and TCP-A engine  ',
          'The source of performance telemetry   ',
          'The common behaviour behind Connect, EDGE, ESC and AND/+  ',
        ]}
        limitations={[
          'A replacement ISP circuit  ',
          'A consumer-facing product on its own  ',
          'A billing or subscription management layer  ',
          'A file management or storage interface  ',
          'A general-purpose portal or dashboard   ',
          'A replacement for SASE or ZTNA, though it can complement them ',
        ]}
      />
      <NextPageSlider
        title="APN Core sits beneath every Enigma performance product"
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Improve performance across the    "
        headline2=" links you already use"
        description="APN Core gives Enigma Net products a shared performance engine for acceleration, bonding,   
failover, telemetry, security and transport-layer control across fibre, broadband, 5G, satellite   
and mixed networks.   "
        primaryButton={{
          label: 'Request a performance walkthrough',
          href: '/get-in-touch',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default ApnCore;
