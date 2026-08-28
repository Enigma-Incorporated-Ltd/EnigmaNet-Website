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
import FeatureComparison from '@/components/ui/FeatureComparison';
import Br from '@/components/ui/NewLine';
import { ApnCoreHero, EscHero, TcpHero } from '@/assets/img/products';

const features = [
  {
    id: 1,
    title: 'APN Core  ',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description: 'The core engine that contains RAIN, TCP-A, bonding, QoS and telemetry.  ',

    meta: {
      title: 'APN Core',
      description: 'The core engine that contains RAIN, TCP-A, bonding, QoS and telemetry.  ',
    },
    image: ApnCoreHero,
  },
  {
    id: 2,
    title: 'TCP Acceleration',
    href: '/products/performance-networking/tcp-acceleration',
    slug: 'tcp-acceleration',
    description: 'Improves throughput over lossy and high-latency links.   ',

    meta: {
      title: 'TCP Acceleration',
      description: 'Improves throughput over lossy and high-latency links.  ',
    },
    image: TcpHero,
  },
  {
    id: 3,
    title: 'Dynamic Bonding   ',
    href: '#',
    slug: '#',
    description: 'Combines multiple links and gives RAIN the path diversity it uses.  ',

    meta: {
      title: 'Dynamic Bonding   ',
      description: 'Combines multiple links and gives RAIN the path diversity it uses.  ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'Intelligent Traffic Management  ',
    href: '/products/performance-networking/intelligent-traffic-management',
    slug: 'intelligent-traffic-management',
    description:
      'Classifies and prioritises critical traffic before resilience policies are applied.   ',

    meta: {
      title: 'Intelligent Traffic Management   ',
      description:
        'Classifies and prioritises critical traffic before resilience policies are applied.  ',
    },
    image: heroImg,
  },

  {
    id: 5,
    title: 'ESC – Secure Networking   ',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description: 'Delivers RAIN as part of secure overlay networking and resilience packaging.    ',
    image: EscHero,
    meta: {
      title: 'ESC – Secure Networking  ',
      description:
        'Delivers RAIN as part of secure overlay networking and resilience packaging.   ',
    },
  },
  {
    id: 6,
    title: 'Enigma EDGE   ',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description: 'Applies RAIN to business, branch, campus and enterprise edge deployments.  ',
    image: heroImg,
    meta: {
      title: 'Enigma EDGE  ',
      description: 'Applies RAIN to business, branch, campus and enterprise edge deployments.  ',
    },
  },
  {
    id: 7,
    title: 'Enigma Connect   ',
    href: '/products/connectivity-products/enigma-connect',
    slug: 'enigma-connect',
    description: 'Uses APN resilience for self-serve connectivity and thin-client use cases.   ',
    image: heroImg,
    meta: {
      title: 'Enigma Connect   ',
      description: 'Uses APN resilience for self-serve connectivity and thin-client use cases.   ',
    },
  },
  {
    id: 8,
    title: 'Enigma Guardian  ',
    href: '#',
    slug: '#',
    description: 'Uses RAIN to protect payment and unattended terminal connectivity.  ',
    image: heroImg,
    meta: {
      title: 'Enigma Guardian  ',
      description: 'Uses RAIN to protect payment and unattended terminal connectivity. ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Packet loss breaks experience  ',
    description: `Even small loss levels can damage voice, video, payments, telemetry and live applications.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Jitter creates instability',
    description: `Variable packet timing can make real-time services feel unreliable before a link fully fails.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Failover can be too late  ',
    description:
      'By the time a backup path activates, users may already have felt interruption.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Retransmission adds delay  ',
    description:
      'Waiting for missing packets to be resent creates latency and visible disruption.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Critical traffic needs protection  ',
    description:
      'Payments, voice, control systems, healthcare, broadcast and trading flows cannot tolerate unstable delivery.  ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Packet duplication  ',
    description: `Critical packets are duplicated before loss affects the service.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Independent paths  ',
    description: `Duplicates can travel across separate links, bonded paths or queues.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Far-end reassembly  ',
    description: 'The receiving side accepts the successful copy and rebuilds the stream.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Reduced retransmission delay  ',
    description: 'Traffic does not need to wait for standard retransmission recovery.  ',
  },

  {
    id: 5,
    icon: block3,
    title: 'Transparent operation  ',
    description: 'RAIN works inside the APN tunnel without application changes.  ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Selective resilience  ',
    description: 'RAIN can be applied to priority flows where continuity matters most.  ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: '1. Classify critical traffic  ',
    description: `APN identifies traffic that needs stronger protection, such as voice, payments, control traffic or   
high-priority RTP.  `,
  },
  {
    id: 2,
    icon: block2,
    title: '2. Duplicate packets  ',
    description: `RAIN sends a second copy of priority packets across another path, queue or tunnel.   `,
  },
  {
    id: 3,
    icon: block3,
    title: '3. Stagger delivery   ',
    description:
      'Duplicates can be delayed or staggered to improve resilience without overwhelming the link.    ',
  },
  {
    id: 4,
    icon: block1,
    title: '4. Reassemble at the far end   ',
    description: 'The receiving side accepts the successful copy and rebuilds the stream.   ',
  },
  {
    id: 5,
    icon: block1,
    title: '5. Hide link loss from the application  ',
    description: 'If one path loses packets, the application can still receive a complete flow.  ',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'Effective packet loss below 0.1%  ',
    description: `RAIN can hold effective packet loss below 0.1% even when raw loss spikes significantly.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Sub-200ms failover support  ',
    description:
      'RAIN and bonded configurations support sub-200ms failover in existing deployment models.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'VoIP stability under constrained bandwidth  ',
    description:
      'APN maintained 180 concurrent G.711 VoIP calls at MOS 4 after an underlying link was throttled from 8 Mb/s to 4 Mb/s.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Ultra-low jitter support  ',
    description:
      'RAIN-supported overlays can help keep jitter below 5 ms for sensitive real-time services.    ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Packet loss masked under raw loss   ',
    description: `RAIN and VoIP-optimised overlays can mask packet loss up to 2% raw loss in relevant   
deployment profiles.  `,
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'Upstream duplication    ',
    description: `<strong class="text-dark">rain_mode = up  </strong><br />
    Duplicates upstream traffic where upload continuity is the priority.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Downstream duplication',
    description: `<strong class="text-dark">rain_mode = down  </strong><br />
    Duplicates downstream traffic where receiving continuity matters most.  `,
  },
  {
    id: 3,
    icon: block1,
    title: 'Bidirectional duplication  ',
    description: `<strong class="text-dark">rain_mode = both  </strong><br />
    Duplicates traffic in both directions for maximum resilience.  `,
  },
  {
    id: 4,
    icon: block3,
    title: 'Enabled mode   ',
    description: `<strong class="text-dark">rain_mode = yes or rain_mode = on  </strong><br />
    Enables RAIN based on the relevant deployment context.  `,
  },
  {
    id: 5,
    icon: block3,
    title: 'High resilience mode  ',
    description: `For CPE or customer-facing interfaces, RAIN can be surfaced as a simplified <strong class="text-dark">High Resilience   
Mode</strong> toggle.  `,
  },
];
const data6 = [
  {
    id: 1,
    icon: block1,
    title: 'TCP Acceleration   ',
    description: `TCP-A fixes throughput behaviour on lossy links. RAIN reduces the effective loss seen by critical   
traffic.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Multi-link bonding  ',
    description: 'Bonding provides the multiple paths that RAIN can use for duplicated delivery.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Byte-level QoS / ITM',
    description:
      'QoS identifies Gold, Silver and Bronze traffic classes so RAIN can protect the most critical flows.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Combi-groups   ',
    description:
      'Combi-groups allow resilience across multiple tunnels with separate sequence space and processing paths.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Forward Error Correction  ',
    description:
      'FEC adds redundancy data. RAIN sends full packet duplicates. Together, they strengthen loss masking.   ',
  },
  {
    id: 6,
    icon: block1,
    title: 'Observability  ',
    description:
      'vibe-stat, SNMP and Nexus dashboards expose loss, jitter, quality and RAIN/failover state.    ',
  },
];
const data8 = [
  {
    id: 1,
    icon: block1,
    title: 'Payment connectivity   ',
    description: `Protect card machines, kiosks, vending, fuel, EV charging and unattended payment devices.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Voice and video  ',
    description:
      'Maintain call quality, conferencing stability, telehealth sessions and real-time communications.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Broadcast and live events  ',
    description:
      'Protect live production, contribution feeds, venue connectivity and event operations.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Financial trading  ',
    description:
      'Support real-time trading and transaction flows where packet loss or delay is unacceptable.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Healthcare and emergency services     ',
    description:
      'Keep clinical, triage, imaging, mobile clinic and emergency communications stable. ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Industrial control and SCADA    ',
    description:
      'Protect telemetry, control signals and remote monitoring across unstable links.   ',
  },
  {
    id: 7,
    icon: block1,
    title: 'Mobile and field operations      ',
    description: 'Support Roam-style deployments across 4G, 5G, satellite and mixed uplinks.   ',
  },
  {
    id: 8,
    icon: block1,
    title: 'Critical branch connectivity    ',
    description:
      'Protect branch sites, retail, logistics, remote offices and distributed infrastructure.    ',
  },
];
const data9 = [
  {
    id: 1,
    icon: block1,
    title: 'Versus standard failover  ',
    description: `Failover switches paths after degradation. RAIN duplicates traffic before degradation becomes   
visible.    `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Versus standard FEC  ',
    description:
      'FEC adds redundancy data within a stream. RAIN sends full duplicated packets across alternate paths.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Versus SD-WAN path switching  ',
    description:
      'SD-WAN can steer traffic between paths. RAIN can actively protect selected traffic across multiple paths.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Versus custom application resilience  ',
    description:
      'RAIN works inside the APN tunnel, so applications do not need to be redesigned.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Versus stacking multiple repair systems  ',
    description:
      'Where APN handles last-mile instability, other transport repair features should be carefully managed to avoid conflicting behaviour. ',
  },
 
];
const data10 = [
  {
    id: 1,
    icon: block1,
    title: 'vibe-stat ',
    description: `Reports RAIN state alongside tunnel status, jitter, RTT, quality and loss.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'vibeSNMP  ',
    description: 'Allows NOC tools to monitor RAIN and tunnel health through SNMP integration.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Nexus dashboards   ',
    description:
      'Can surface RAIN status, failover state and resilience indicators for operators and customers. ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Command integration ',
    description:
      'RAIN-related events can be correlated with incidents, alerts and agent recommendations.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Grid context  ',
    description: 'RAIN status can be tied to specific sites, devices, links and tunnels.  ',
  },
];
const dat11 = [
  {
    id: 1,
    icon: block1,
    title: 'Resilience Pack   ',
    description: `A feature add-on for ESC and selected services where higher continuity is required.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Included resilience  ',
    description:
      'Guardian-style payment and critical-service products can include RAIN by default.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Optional branch resilience  ',
    description: 'EDGE deployments can add RAIN to selected sites, tunnels or critical flows.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'High resilience toggle  ',
    description:
      'Customer-facing portals can expose RAIN as a simplified high resilience mode rather than detailed technical configuration.  ',
  },
];

const data7 = [
  {
    id: 1,
    icon: block1,
    title: 'APN Core    ',
    description: `The core engine that delivers RAIN duplication and packet-level resilience.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'ESC – Secure Networking   ',
    description: 'Exposes RAIN as a SaaS capability and as part of the Resilience Pack.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Enigma EDGE  ',
    description:
      'Uses optional RAIN for mirrored packet paths on critical branch, campus and enterprise flows.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Enigma Connect   ',
    description:
      'Uses packet duplication, FEC and fast failover to reduce effective loss for self-serve connectivity.   ',
  },
  {
    id: 5,
    icon: block3,
    title: 'N0DE',
    description: 'Uses RAIN to support low-latency stability for gamer and thin-client overlays.  ',
  },
  {
    id: 6,
    icon: block1,
    title: 'Q-Fi   ',
    description: 'Uses audio-specific RAIN redundancy for ultra-low jitter streaming.  ',
  },
  {
    id: 7,
    icon: block3,
    title: 'Enigma Guardian  ',
    description: 'Includes Resilience Pack by default to keep payment terminals online.   ',
  },
  {
    id: 8,
    icon: block3,
    title: 'Enigma Roam  ',
    description: 'Uses RAIN and bonding for mobile, field and in-motion deployments.  ',
  },
 
];

const Resilience = () => {

  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Performance Networking', href: '/products/performance-networking' },
          { label: 'Rain Resilience' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Protect critical traffic before <Br isDesktop isTablet /> failure becomes visible
          </>
        }
        description="RAIN duplicates priority traffic across independent paths inside the encrypted APN tunnel,helping Enigma Net maintain session continuity, reduce effective packet loss and protect real-time services when underlying links degrade. "
        image={heroImg}
        buttons={[
          {
            label: ' Explore RAIN Resilience   ',
            href: '#',
            variant: 'blue',
          },
          {
            label: ' Talk to Enigma   ',
            href: '/get-in-touch',
            variant: 'gold',
            disableSentenceCase: true,
          },
        ]}
        features={[
          'Effective loss below 0.1%',
          'Sub-200ms failover',
          'Packet duplication across paths  ',
        ]}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  A connection does not need to fail
                  <Br isDesktop isTablet /> completely to damage performance
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Most network failures are not clean outages. Links degrade first. Packet loss rises.
            Jitter increases. Real-time traffic becomes unstable. Calls glitch, payment flows stall,
            video freezes, files slow down and applications become unpredictable.
            <br />
            <br />
            Traditional failover often reacts after degradation is already visible. RAIN works
            earlier by duplicating critical traffic across independent paths, so packet loss on one
            route can be hidden by successful delivery on another.
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
                  RAIN protects traffic before
                  <Br isTablet /> disruption becomes visible
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN stands for{' '}
            <strong className={`text-dark`}>Reliable Array of Independent Nodes</strong>. It is an
            APN Core capability that duplicates critical packets across alternate paths or queues,
            then reassembles the traffic at the far end.
            <br />
            <br />
            Instead of waiting for packet loss to trigger retransmission or failover, RAIN sends a
            second copy in advance. If one path loses a packet, the receiving side can use the copy
            that arrived successfully through another path.
          </>
        }
        data={data2}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Failover reacts to failure. RAIN prevents
                  <Br isDesktop isTablet /> the failure from becoming visible
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Failover is reactive. It waits until a link drops or degrades, then moves traffic to
            another path.
            <br />
            <br />
            RAIN is proactive. It duplicates priority traffic across independent paths before the
            problem becomes visible. If one path drops packets, the destination can still receive
            the same critical data from another path.
            <br />
            <br />
            That means fewer visible interruptions, stronger session continuity and better
            protection for services that cannot tolerate loss.
          </>
        }
        benitsTitle="Standard failover    "
        limitationsTitle="RAIN resilience   "
        benefits={[
          'Waits for failure or degradation  ',
          'Switches traffic after the event   ',
          'May interrupt active sessions  ',
          'Can still create visible disruption  ',
          'Protects availability, but not always experience   ',
        ]}
        limitations={[
          'Protects traffic before failure is visible  ',
          'Sends duplicated packets across independent paths  ',
          'Masks packet loss before users feel it  ',
          'Helps preserve session continuity  ',
          'Protects experience, not just availability   ',
        ]}
        transitionLine={
          <>RAIN is not just another backup path. It is active packet-level resilience.</>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Duplicated delivery across
                  <Br isTablet /> independent paths
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN trades a controlled amount of bandwidth for stronger resilience. For critical
            flows, APN Core sends duplicate packets across different paths. At the far end, the
            receiving side uses whichever copy arrives successfully and discards unnecessary
            duplicates.
            <br />
            <br />
            This helps hide packet loss, reduce retransmission delay and keep real-time traffic
            stable.
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
                  Built to reduce effective loss <Br isTablet />
                  and protect real-time services
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN is designed for environments where packet loss cannot be allowed to become service
            disruption. It works with APN Core, bonding and QoS to protect priority traffic even
            when raw network conditions degrade.
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
                  Configurable resilience by traffic
                  <Br isDesktop isTablet /> direction and deployment need
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN can be controlled through the ViBE configuration using the rain_mode parameter.
            This allows Enigma to apply duplication based on the deployment, traffic direction and
            service requirement.
          </>
        }
        data={data5}
        transitionLine={
          <>
            For ESC deployments, RAIN can duplicate high-priority RTP payloads across links to
            protect voice and real-time services.{' '}
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
                  RAIN works with the wider <Br isTablet />
                  APN performance stack
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN is strongest when combined with APN Core’s other capabilities. Bonding provides the
            paths. QoS decides what needs protection. TCP-A improves throughput. FEC and RAIN work
            together to mask loss. Observability proves the impact.
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
                  RAIN protects services across <Br isTablet />
                  the Enigma portfolio
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN is a core APN capability that appears across multiple Enigma products and
            deployment models, from ESC and EDGE to payment resilience, mobile field deployments and
            low-jitter audio.
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
                  For environments where packet loss cannot
                  <Br isDesktop isTablet /> become operational disruption
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN is designed for workloads where continuity matters more than raw bandwidth
            efficiency. It is especially valuable where packet loss, jitter or degraded links would
            create immediate business impact.
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
                  Different from standard FEC
                  <Br isDesktop isTablet /> or basic SD-WAN failover
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN should be positioned carefully. It is not just another failover feature. It is
            packet-level duplication across diverse paths, designed to hide loss before applications
            feel the issue.
          </>
        }
        data={data9}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  RAIN is visible, measurable and
                  <Br isTablet /> operationally controlled
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN state and resilience behaviour can be surfaced through Enigma’s operational
            tooling, giving teams visibility into tunnel quality, jitter, RTT, loss and protection
            state.
          </>
        }
        data={data10}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  RAIN can be packaged as resilience <Br isDesktop isTablet />
                  where customers need it most
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN can be bundled into product or solution packaging depending on the customer need.
            In ESC, it can be positioned as part of a{' '}
            <strong className="text-dark"> Resilience Pack </strong>for sites that require stronger
            continuity, packet-loss masking and protected real-time traffic.
          </>
        }
        data={dat11}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  RAIN protects priority traffic, but it is <Br isDesktop isTablet />
                  not a magic bandwidth multiplier
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            RAIN improves resilience by duplicating selected traffic across independent paths. That
            means it intentionally uses additional bandwidth to reduce effective packet loss and
            protect continuity.
            <br />
            <br />
            It should be used where reliability matters more than pure bandwidth efficiency.
          </>
        }
        benitsTitle="RAIN is  "
        limitationsTitle="RAIN is not   "
        benefits={[
          'A packet-level resilience capability inside APN Core  ',
          'A way to duplicate critical traffic across independent paths   ',
          'A method for reducing effective packet loss  ',
          'A complement to bonding, QoS, TCP-A and FEC   ',
          'A protection layer for real-time and critical services   ',
        ]}
        limitations={[
          'A replacement ISP circuit  ',
          'A general bandwidth accelerator by itself',
          'A guarantee that no outage can ever occur  ',
          'The same as standard failover  ',
          'The same as standard FEC   ',
          'A feature that should be applied blindly to all traffic   ',
        ]}
      />

      <NextPageSlider
        title="RAIN strengthens resilience across the APN portfolio"
        data={features}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={<>Make packet loss invisible </>}
        headline2="before users feel it"
        description="RAIN Resilience helps Enigma Net protect critical traffic by duplicating packets across   
independent paths, reducing effective loss and maintaining service continuity across degraded   
networks.   "
        primaryButton={{
          label: 'Explore RAIN Resilience',
          href: '#',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default Resilience;
