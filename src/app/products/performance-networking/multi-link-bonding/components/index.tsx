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
import FeatureComparison from '@/components/ui/FeatureComparison';

import Br from '@/components/ui/NewLine';
const features = [
  {
    id: 1,
    title: 'APN Core  ',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description:
      'The engine that manages bonding, scheduling, reordering, TCP-A, RAIN and telemetry.   ',

    meta: {
      title: 'APN Core',
      description:
        'The engine that manages bonding, scheduling, reordering, TCP-A, RAIN and telemetry.   ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'TCP Acceleration',
    href: '/products/performance-networking/tcp-acceleration',
    slug: 'tcp-acceleration',
    description: 'Improves throughput over lossy and high-latency links.  ',

    meta: {
      title: 'TCP Acceleration',
      description: 'Improves throughput over lossy and high-latency links.  ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'RAIN Resilience  ',
    href: '/products/performance-networking/rain-resilience',
    slug: 'rain-resilience',
    description: 'Duplicates critical packets across bonded paths for packet-level protection.  ',

    meta: {
      title: 'RAIN Resilience  ',
      description: 'Duplicates critical packets across bonded paths for packet-level protection.  ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'Intelligent Traffic Management  ',
    href: '/products/performance-networking/intelligent-traffic-management',
    slug: 'intelligent-traffic-management',
    description:
      'Prioritises traffic classes before link scheduling and bonding decisions are applied.  ',

    meta: {
      title: 'Intelligent Traffic Management   ',
      description:
        'Prioritises traffic classes before link scheduling and bonding decisions are applied.  ',
    },
    image: heroImg,
  },

  {
    id: 5,
    title: 'ESC – Secure Networking   ',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description: 'Delivers bonding through secure overlay networking and deployment profiles.  ',
    image: heroImg,
    meta: {
      title: 'ESC – Secure Networking  ',
      description: 'Delivers bonding through secure overlay networking and deployment profiles.  ',
    },
  },
  {
    id: 6,
    title: 'Enigma EDGE   ',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description: 'Uses bonding for branch, campus and enterprise edge connectivity.   ',
    image: heroImg,
    meta: {
      title: 'Enigma EDGE  ',
      description: 'Uses bonding for branch, campus and enterprise edge connectivity.  ',
    },
  },
  {
    id: 7,
    title: 'Enigma Roam    ',
    href: '#',
    slug: '#',
    description: 'Applies mobile bonding for field, emergency and broadcast deployments.    ',
    image: heroImg,
    meta: {
      title: 'Enigma Roam    ',
      description: 'Applies mobile bonding for field, emergency and broadcast deployments.   ',
    },
  },
  {
    id: 8,
    title: 'Enigma Guardian  ',
    href: '#',
    slug: '#',
    description:
      'Uses bonding to protect payment, telemetry and unattended device connectivity.   ',
    image: heroImg,
    meta: {
      title: 'Enigma Guardian  ',
      description:
        'Uses bonding to protect payment, telemetry and unattended device connectivity.   ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Backup links sit unused  ',
    description: `Secondary circuits are often paid for but only used after a failure.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Load balancing is not true bonding  ',
    description: `Basic load balancing can spread sessions, but it does not create one intelligent performance   
overlay.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Mixed links behave differently  ',
    description:
      'Fibre, 5G, DSL and satellite have different speed, latency and jitter profiles.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Failover can still interrupt users  ',
    description:
      'Reactive failover may move traffic, but active sessions can still drop or stall.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Performance is hard to prove  ',
    description: 'Teams need visibility across every link, not just a single WAN status light.    ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Aggregate bandwidth  ',
    description: `Use more of the total capacity available across multiple links.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Path diversity  ',
    description: `Combine fibre, broadband, LTE, 5G, satellite, microwave or other circuits.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Intelligent scheduling  ',
    description:
      'Traffic can be proportionally spread across links based on predicted delay, quality and capacity.    ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Session continuity   ',
    description:
      'Sub-second failover helps preserve IP sessions when a circuit fails or degrades.  ',
  },

  {
    id: 6,
    icon: block3,
    title: 'Live visibility   ',
    description:
      'Telemetry exposes link quality, latency, jitter, loss and tunnel behaviour across bonded links.  ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: '1. Multiple links connect to APN   ',
    description: `A site can connect using fibre, broadband, 4G, 5G, satellite, microwave or mixed circuits.   `,
  },
  {
    id: 2,
    icon: block2,
    title: '2. APN measures each path  ',
    description: `Health probes and live telemetry track RTT, jitter, loss and tunnel quality. `,
  },
  {
    id: 3,
    icon: block3,
    title: '3. Traffic is scheduled intelligently  ',
    description:
      'Bulk traffic can be spread across suitable paths, while real-time traffic can favour the lowest-latency link.    ',
  },
  {
    id: 4,
    icon: block1,
    title: '4. Packets are reordered at the far end   ',
    description: 'APN handles sequencing and reordering so applications see one logical path.    ',
  },
  {
    id: 5,
    icon: block1,
    title: '5. Failover happens underneath   ',
    description:
      'When a circuit fails or degrades, APN shifts traffic away from the affected path without exposing the complexity to the application.   ',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'Separate sequence space  ',
    description: `Each tunnel can manage packet ordering independently, reducing the risk of one path dragging   
another down.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Per-tunnel processing  ',
    description: 'Tunnels can be processed across separate CPU cores for better scaling.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Better mixed-link behaviour  ',
    description:
      'High-latency paths such as satellite can be used without forcing all traffic to behave like the slowest path.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Leader and member structure ',
    description:
      'TID 0 acts as the combi-group leader, with additional tunnels joining through matching identities and TID numbering.  ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Stronger high-capacity bonding  ',
    description: `Combi-groups support more scalable bonding for fibre, 5G, satellite and cloud-based environments.   `,
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'TCP Acceleration     ',
    description: `TCP-A improves throughput over lossy and high-latency paths. Bonding provides more available   
path capacity for accelerated traffic.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'RAIN Resilience    ',
    description:
      'RAIN duplicates critical packets across independent bonded paths to reduce effective packet loss.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Intelligent Traffic Management    ',
    description:
      'ITM classifies and prioritises traffic so voice, video, payments or control flows use the right paths.',
  },
  {
    id: 4,
    icon: block3,
    title: 'Combi-groups    ',
    description:
      'Combi-groups improve bonding behaviour across links with different latency, capacity and packet-ordering characteristics.  ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Observability    ',
    description:
      'Telemetry shows link health, tunnel quality, jitter, RTT, loss and failover state.  ',
  },
];
const data6 = [
  {
    id: 1,
    icon: block1,
    title: '95% aggregation   ',
    description: `Bonding can combine multiple WAN links into one high-performance connection with 95%   
aggregation.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Sub-200ms bonded failover  ',
    description: 'Bonded RAIN links are listed as supporting failover in under 200ms.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Up to 10Gbps aggregate capacity  ',
    description:
      'APX Max is described as supporting up to 10Gbps aggregate capacity across bonded paths.    ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Live session continuity  ',
    description:
      'APX Max uses link-aware failover with under 200ms interruption for high-capacity and infrastructure-scale deployments.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Greater path diversity  ',
    description:
      'Venue and stadium examples show bonded fibre, 5G and microwave links supporting thousands of concurrent sessions and business-critical systems during spikes.   ',
  },
];
const data8 = [
  {
    id: 1,
    icon: block1,
    title: 'Branch and campus connectivity    ',
    description: `Combine fibre, broadband and mobile backup into one resilient overlay.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Stadiums and venues  ',
    description:
      'Bond fibre, 5G and microwave to support ticketing, POS, security, fan Wi-Fi and live operations.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Payment and retail estates  ',
    description:
      'Protect POS, EV charging, kiosks and unattended terminals using multiple paths.     ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Critical infrastructure   ',
    description:
      'Support SCADA, telemetry, edge AI and remote monitoring across environmental link failures.    ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Broadcast and field operations    ',
    description:
      'Use 4G, 5G, satellite and local uplinks for live media movement and crew connectivity.    ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Remote and mobile teams     ',
    description:
      'Keep consultants, field engineers, creators and emergency teams connected across changing networks.   ',
  },
  {
    id: 7,
    icon: block1,
    title: 'Large-scale CCTV and video uplink     ',
    description:
      'Use bonded links to support reliable video backhaul where one uplink is not enough.   ',
  },
];
const data9 = [
  {
    id: 1,
    icon: block1,
    title: 'Hardware appliance  ',
    description: `CPE or edge device bonding for branch, kiosk, retail, venue and data-centre sites.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Cloud PoP  ',
    description:
      'Bonded remote endpoints connecting into an Enigma-hosted or customer-hosted ESC core.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'On-prem VM  ',
    description:
      'Customer-owned ESC environments with multiple circuits mapped into a private overlay.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Hybrid hub-and-spoke   ',
    description:
      'Mixed edge links such as fibre, DSL, 4G, 5G and satellite feeding one logical overlay back to hubs.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'OEM / embedded   ',
    description:
      'Partners can embed bonding through APN Core for routers, gateways, devices or platforms.   ',
  },
  {
    id: 6,
    icon: block1,
    title: 'IoT gateway  ',
    description:
      'Lightweight field devices can use bonded connectivity for telemetry, control and monitoring workloads.   ',
  },
];
const data10 = [
  {
    id: 1,
    icon: block1,
    title: 'Versus load balancing   ',
    description: `Load balancing distributes sessions. APN bonding manages traffic inside one controlled overlay.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Versus backup links',
    description:
      'Backup links wait for failure. Bonding can actively use links before failure happens.    ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Versus standard SD-WAN ',
    description:
      'SD-WAN may steer paths, but APN combines bonding with byte-level optimisation, TCP-A, RAIN and tunnel telemetry.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Versus Peplink SpeedFusion  ',
    description:
      'Peplink is a close comparator for multi-link bonding and failover, but Enigma should emphasise APN Core’s wider performance stack: TCP-A, RAIN, ITM and observability.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Versus private circuits  ',
    description:
      'Bonding helps customers use existing mixed connectivity rather than relying only on costly leased-line or MPLS models.  ',
  },
];
const dat11 = [
  {
    id: 1,
    icon: block1,
    title: 'Link health ',
    description: `See which paths are active, degraded, failed or preferred.`,
  },

  {
    id: 2,
    icon: block3,
    title: 'Tunnel quality ',
    description: 'Track RTT, jitter, loss and quality scores per tunnel.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Failover state ',
    description:
      'Understand when traffic has moved, why it moved and whether the session remained stable.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Hybrid hub-and-spoke   ',
    description:
      'Mixed edge links such as fibre, DSL, 4G, 5G and satellite feeding one logical overlay back to hubs.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'RAIN and bonding state ',
    description: 'Monitor when RAIN is protecting traffic across bonded paths.   ',
  },
  {
    id: 6,
    icon: block1,
    title: 'Nexus and Command integration',
    description:
      'Surface bonded link behaviour inside operational dashboards and incident workflows.  ',
  },
];

const data7 = [
  {
    id: 1,
    icon: block1,
    title: 'APN Core    ',
    description: `The engine that delivers bonding, scheduling, reordering, telemetry and failover.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'ESC – Secure Networking   ',
    description: 'Exposes bonding as part of the secure overlay and deployment profiles.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Enigma EDGE Lite  ',
    description: 'Supports smaller sites such as offices, kiosks and EV charger hubs.    ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Enigma EDGE Pro    ',
    description:
      'Supports branch, campus and regional hub deployments using multiple circuits with bonding and RAIN.   ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Enigma EDGE Max  ',
    description:
      'Supports infrastructure-scale deployments, with up to 10Gbps aggregate capacity across bonded paths.  ',
  },
  {
    id: 6,
    icon: block1,
    title: 'Enigma Connect Pro / MAX   ',
    description: 'Brings self-serve bonding to individuals and small teams.      ',
  },
  {
    id: 7,
    icon: block3,
    title: 'Enigma Roam     ',
    description:
      'Uses mobile bonding for field teams, broadcast crews and emergency responders.    ',
  },
  {
    id: 8,
    icon: block3,
    title: 'Enigma Guardian   ',
    description:
      'Uses multi-link bonding for payment and telemetry uptime in retail, EV and unattended environments.  ',
  },
  {
    id: 9,
    icon: block3,
    title: 'Enigma Venue    ',
    description: 'Uses multi-WAN bonding across DIA, 5G and microwave for venues and events.  ',
  },
  {
    id: 10,
    icon: block3,
    title: 'N0DE    ',
    description: 'Uses bonding for gamer, creator and prosumer performance stability.    ',
  },
];

const LinkBonding = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Performance Networking', href: '/products/performance-networking' },
          { label: 'Multi-link bonding' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Combine multiple links into
            <Br isDesktop isTablet /> one resilient performance path
          </>
        }
        description="Multi-Link Bonding combines up to eight circuits per site into a single APN overlay, allowing   
applications to use one logical path while Enigma manages bandwidth aggregation, path   
scheduling, packet ordering and failover underneath.  "
        // image={heroImg}
        buttons={[
          {
            label: ' Explore Multi-Link Bonding  ',
            href: '#',
            variant: 'blue',
          },
        ]}
        features={['Up to 8 links per site', '95% aggregation', 'Sub-200ms bonded failover ']}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  One connection is rarely enough
                  <Br isTablet /> for modern operations
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Modern sites often depend on a mix of fibre, broadband, LTE, 5G, satellite or microwave
            links. Each link has different bandwidth, latency, jitter and reliability
            characteristics.
            <br />
            <br />
            Traditional backup links often sit idle until something fails. Basic load balancing may
            spread traffic, but it does not necessarily preserve sessions, optimise packet flow or
            protect quality of experience.
            <br />
            <br />
            Multi-Link Bonding lets Enigma use multiple circuits as part of one APN-managed overlay,
            so bandwidth and resilience are available before users feel the problem.
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
                  Bonding turns separate access links
                  <Br isDesktop isTablet /> into one managed APN overlay
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Multi-Link Bonding allows Enigma to combine up to eight circuits at a site. Applications
            see one logical path, while APN Core manages how traffic is scheduled, spread, reordered
            and protected across the available links. Instead of letting loss and distance collapse
            throughput, TCP-A uses APN’s transport controls to keep data moving efficiently across
            the available path.
            <br />
            <br />
            This means customers can use mixed access types without exposing that complexity to
            users or applications.
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
                  APN manages the complexity <Br isTablet />
                  underneath the application
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Multi-Link Bonding is configured inside APN Core and ESC using tunnel and remote
            definitions. Each link contributes telemetry such as latency, jitter, loss and quality.
            APN uses that data to decide how traffic should be placed, weighted or failed over.
            <br />
            <br />
            For newer ViBE 6.5+ deployments, combi-groups allow multiple tunnels between the same
            peers to work together while maintaining separate sequence spaces and processing paths.
          </>
        }
        data={data3}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Designed for mixed links with
                  <Br isTablet /> different speeds and latency
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Combi-groups are the newer bonding model in ViBE 6.5+ for handling multiple tunnels
            between the same peers. Each tunnel can maintain its own sequence number space, packet
            queues and CPU processing path. <br />
            <br />
            This is important because mixed links do not behave the same. Fibre, 5G and satellite
            may all be available at one site, but they should not be treated as identical pipes.
          </>
        }
        data={data4}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Bonding improves both bandwidth
                  <Br isTablet /> and continuity
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Bonding is not just about speed. It also provides the path diversity needed for fast
            failover and continuity.
            <br />
            <br />
            The e-book lists <strong>&lt;200ms failover with bonded RAIN links</strong> as a proof
            point for Enigma performance, and the APX Max section describes live failover under
            200ms across bonded fibre, 5G and microwave links for stadium and venue deployments .
          </>
        }
        benitsTitle="Backup link model  "
        limitationsTitle="Enigma bonding model  "
        benefits={[
          'Secondary link often sits idle  ',
          'Switch happens after failure  ',
          'Session impact is more likely  ',
          'Bandwidth is underused  ',
          'Visibility can be limited   ',
        ]}
        limitations={[
          'Links are part of one APN overlay  ',
          'Traffic can use multiple paths  ',
          'Link quality is monitored continuously  ',
          'Failover can happen in under 200ms   ',
          'RAIN can duplicate priority traffic across paths  ',
        ]}
        transitionLine={<>Bonding makes resilience active, not just available.</>}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Bonding is strongest when combined
                  <Br isTablet /> with TCP-A, RAIN and ITM
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Multi-Link Bonding is one part of APN Core. It provides the path diversity and aggregate
            capacity that other APN capabilities can use.
          </>
        }
        data={data5}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for real-world mixed connectivity</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            The e-book positions bonding as a route to bigger bandwidth and near-instant failover,
            with a “Did you know?” callout stating Enigma Net bonding can combine multiple WAN links
            into one ultra-fast connection with <strong>95% aggregation </strong> .
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
                  Bonding powers resilience and
                  <Br isDesktop isTablet /> performance across Enigma products
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Multi-Link Bonding appears across the Enigma portfolio wherever sites, users or devices
            need more throughput, stronger path diversity or resilient continuity across mixed
            links.
          </>
        }
        data={data7}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Use bonding where one link cannot
                  <Br isDesktop isTablet /> carry the operational risk alone
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Multi-Link Bonding is especially useful for sites and users where connectivity must
            remain stable across variable or mixed networks.
          </>
        }
        data={data8}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Bonding works across hardware, software,
                  <Br isDesktop isTablet /> cloud and hybrid deployments
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Bonding appears across ESC deployment patterns, from hardware appliances and on-prem
            hubs to cloud-hosted cores, hybrid hub-and-spoke designs, OEM integration and IoT
            gateways.
          </>
        }
        data={data9}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>More than ordinary load balancing</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Multi-Link Bonding should be positioned carefully against SD-WAN, backup links and load
            balancing. Enigma’s differentiation is not simply “using more than one link.” It is
            APN-managed path behaviour, byte-level optimisation, failover, RAIN and observability
            working together.
          </>
        }
        data={data10}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Every bonded path needs visibility</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Bonding is only valuable if teams can see how the links are behaving. Enigma exposes
            link quality, RTT, jitter, loss, tunnel status and failover events through APN
            telemetry, vibe-stat, SNMP, Nexus and NOC tooling.
          </>
        }
        data={dat11}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Bonding is not just using two internet connections</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Multi-Link Bonding is an APN Core capability that combines multiple links into one
            managed overlay. It is not the same as ordinary dual-WAN, round-robin load balancing or
            a passive backup circuit.
          </>
        }
        benitsTitle="Multi-Link Bonding is"
        limitationsTitle="Multi-Link Bonding is not "
        benefits={[
          'An APN Core capability',
          'A way to combine up to eight circuits per site  ',
          'A logical overlay across mixed access links ',
          'A foundation for RAIN, failover and traffic scheduling  ',
          'A way to improve usable bandwidth and path diversity  ',
          'A capability used across EDGE, Connect, ESC, Roam, Guardian, Venue and N0DE  ',
        ]}
        limitations={[
          'Simple dual-WAN backup  ',
          'Round-robin load balancing  ',
          'A replacement ISP circuit  ',
          'A guarantee that every application will double in speed ',
          'A standalone product separate from APN Core   ',
          'Something to apply blindly without traffic policy  ',
        ]}
      />

      <NextPageSlider
        title="Bonding strengthens the whole APN performance stack"
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Use every link you have without exposing
            <Br isTablet isDesktop />
          </>
        }
        headline2=" complexity to the application. "
        description="Multi-Link Bonding combines fibre, broadband, LTE, 5G, microwave and satellite links into one   
APN-managed overlay, improving bandwidth, continuity and path diversity across real-world   
networks.   "
        primaryButton={{
          label: 'Explore Multi-Link Bonding',
          href: '#',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default LinkBonding;
