import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import { enterprise as heroImg, operations } from '@/assets/img';
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
import { type CardItem } from '@/components/ui/card';
import Br from '@/components/ui/NewLine';
import CardWithUseCase from '@/components/ui/CardWithUseCase';
const features = [
  {
    id: 1,
    title: 'APN Core  ',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description:
      'The performance engine that contains ITM, TCP-A, bonding, RAIN and telemetry.    ',

    meta: {
      title: 'APN Core',
      description:
        'The performance engine that contains ITM, TCP-A, bonding, RAIN and telemetry.   ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'TCP Acceleration',
    href: '/products/performance-networking/tcp-acceleration',
    slug: 'tcp-acceleration',
    description: 'Improves throughput when loss and latency slow standard TCP.  ',

    meta: {
      title: 'TCP Acceleration',
      description: 'Improves throughput when loss and latency slow standard TCP.   ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'RAIN Resilience  ',
    href: '/products/performance-networking/rain-resilience',
    slug: 'rain-resilience',
    description: 'Protects Gold traffic through packet duplication and loss masking.   ',

    meta: {
      title: 'RAIN Resilience  ',
      description: 'Protects Gold traffic through packet duplication and loss masking.   ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'Multi-Link Bonding   ',
    href: '/products/performance-networking/multi-link-bonding',
    slug: 'multi-link-bonding',
    description: 'Gives ITM multiple paths to schedule, balance and protect traffic across.   ',

    meta: {
      title: 'Multi-Link Bonding     ',
      description: 'Gives ITM multiple paths to schedule, balance and protect traffic across.    ',
    },
    image: heroImg,
  },

  {
    id: 5,
    title: 'ESC – Secure Networking   ',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description: 'Delivers ITM as part of the secure overlay and APN control plane.  ',
    image: heroImg,
    meta: {
      title: 'ESC – Secure Networking  ',
      description: 'Delivers ITM as part of the secure overlay and APN control plane.   ',
    },
  },
  {
    id: 6,
    title: 'Enigma EDGE   ',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description:
      'Uses ITM to manage branch, campus and enterprise traffic across multiple links.  ',
    image: heroImg,
    meta: {
      title: 'Enigma EDGE  ',
      description:
        'Uses ITM to manage branch, campus and enterprise traffic across multiple links.   ',
    },
  },
  {
    id: 7,
    title: 'Enigma Connect  ',
    href: '/products/connectivity-products/enigma-connect',
    slug: 'enigma-connect',
    description: 'Uses ITM to improve self-serve connectivity and thin-client performance.    ',
    image: heroImg,
    meta: {
      title: 'Enigma Connect  ',
      description: 'Uses ITM to improve self-serve connectivity and thin-client performance.    ',
    },
  },
  {
    id: 8,
    title: 'Nexus Command   ',
    href: '#',
    slug: '#',
    description:
      'Surfaces ITM-driven events, link quality changes and performance decisions for operators. ',
    image: heroImg,
    meta: {
      title: 'Nexus Command    ',
      description:
        'Surfaces ITM-driven events, link quality changes and performance decisions for operators. ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Critical traffic gets trapped  ',
    description: `Small real-time packets can sit behind large bulk transfers, damaging voice, video, payments   
and control systems.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Congestion is often detected too late  ',
    description: `Traditional systems may wait for hard failure, SLA breach or visible packet loss before reacting.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Networks change constantly  ',
    description:
      'Path quality shifts with peak usage, link degradation, carrier issues and mixed access types.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Teams lack application-level visibility  ',
    description:
      'Knowing a circuit is “up” does not explain why calls are poor, transfers are slow or latency has changed.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Manual tuning does not scale  ',
    description:
      'Static QoS rules and manual routing decisions struggle across distributed, multi-link environments.   ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Traffic classification  ',
    description: `Identifies traffic by port, protocol, flow behaviour and service type.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Byte-level prioritisation  ',
    description: `Breaks traffic into cells so latency-sensitive traffic can move ahead of bulk data.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Link quality awareness  ',
    description:
      'Uses live latency, jitter, loss and quality metrics to influence routing and bonding decisions.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Predictive congestion response  ',
    description: 'Responds to early signs of queue build-up before users feel degradation.  ',
  },

  {
    id: 5,
    icon: block3,
    title: 'Resilience decisions  ',
    description: 'Works with RAIN, FEC and bonding to protect priority traffic.  ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Live observability  ',
    description: 'Reports the metrics customers and NOC teams need to prove performance.  ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: '1. Observe  ',
    description: `ITM monitors traffic flows, link health, latency, jitter, loss, throughput and MOS.  `,
  },
  {
    id: 2,
    icon: block2,
    title: '2. Classify  ',
    description: `Traffic is tagged by class and behaviour, separating critical flows from bulk or background   
traffic.   `,
  },
  {
    id: 3,
    icon: block3,
    title: '3. Decide  ',
    description:
      'ITM decides whether to prioritise, reroute, duplicate, pace, fail over or rebalance traffic.   ',
  },
  {
    id: 4,
    icon: block1,
    title: '4. Act   ',
    description:
      'Policies are applied through APN scheduling, bonding, RAIN, FEC, QoS or path selection.  ',
  },
  {
    id: 5,
    icon: block1,
    title: '5. Verify  ',
    description:
      'Performance metrics confirm whether the change improved stability, throughput or quality of experience.',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'Byte-level tagging  ',
    description: `Cells carry traffic class and offset information so they can be scheduled with precision.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Cell interleaving  ',
    description: 'Small latency-sensitive cells can move between large bulk-transfer cells.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Per-link health tracking  ',
    description: 'Live probes measure path quality and feed the scheduler.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Gold traffic protection  ',
    description: 'Critical flows can receive RAIN duplication or FEC support.  ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Bulk traffic pacing  ',
    description: `Large transfers can continue without starving interactive applications.   `,
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'Predictive congestion detection  ',
    description: `Moves or re-weights flows before congestion causes visible service impact.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Direction-aware failover  ',
    description:
      'Can drain one direction of a link while keeping the other direction active where appropriate.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Closed-loop control   ',
    description: 'Observes, acts and verifies performance in a continuous cycle.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Session preservation  ',
    description: 'Supports long-lived session continuity by avoiding unnecessary churn.   ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Policy-driven behaviour      ',
    description:
      'Applies configured priorities, traffic classes and resilience policies consistently.  ',
  },
];
const data6 = [
  {
    id: 1,
    icon: block1,
    title: 'Versioned policy templates  ',
    description: `Configuration can be managed through controlled templates and policy objects.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'REST and gRPC APIs   ',
    description: 'Expose policy, telemetry and integration points for platforms and partners.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'WebHooks   ',
    description:
      'Support event-driven integrations with NOC tools, dashboards and external systems.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Nexus dashboards   ',
    description:
      'Surface ITM behaviour, performance and policy state through customer and operator interfaces.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'LLM-agent integration  ',
    description: 'Provide telemetry and policy context for automated diagnosis and remediation.  ',
  },
];
const data8 = [
  {
    id: 1,
    icon: block1,
    title: 'ESC – Secure Networking    ',
    description: `Applies QoS templates and per-flow policies for sites, users and tunnels.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'ESC – Large File Transfer  ',
    description: 'Keeps bulk transfer jobs from starving interactive traffic.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'ESC – Compute and GPU Hosting  ',
    description:
      'Prioritises model traffic, checkpoints and inference API calls over background sync.      ',
  },
  {
    id: 4,
    icon: block3,
    title: 'AND/+ Integrations  ',
    description:
      'Exposes ITM policy and telemetry via APIs for carriers, MSPs and SaaS platforms.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Enigma Connect   ',
    description: 'Prioritises calls, games, interactive apps and latency-sensitive traffic.   ',
  },

  {
    id: 6,
    icon: block1,
    title: 'Enigma EDGE',
    description:
      'Uses byte-level QoS, classification, shaping and resilience for branches and enterprise sites.    ',
  },
  {
    id: 7,
    icon: block3,
    title: 'N0DE  ',
    description:
      'Prioritises game and streaming traffic to reduce stutters and congestion effects.   ',
  },
  {
    id: 8,
    icon: block3,
    title: 'Q-Fi  ',
    description: 'Applies audio-specific prioritisation and ultra-low jitter pacing.   ',
  },
];
const data9 = [
  {
    id: 1,
    icon: block1,
    title: 'AI and data-intensive workloads  ',
    description: `Prioritise inference calls, model updates, gradients and checkpoints while background sync   
continues.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'EV, parking and edge-IoT  ',
    description:
      'Keep transaction and telemetry flows alive over flaky broadband, LTE or mixed links.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Financial trading and risk    ',
    description:
      'Prioritise market data, FIX sessions and real-time risk traffic with RAIN support for micro-outages.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Media, gaming and collaboration   ',
    description:
      'Keep streams, gameplay, voice and collaborative tools smooth while uploads or downloads run.    ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Healthcare  ',
    description:
      'Protect EMR access, imaging, triage, telehealth and remote consultation traffic.  ',
  },
  {
    id: 6,
    icon: block1,
    title: 'Industrial and utilities  ',
    description:
      'Support SCADA, telemetry and control systems across mixed terrestrial and satellite links. ',
  },
  {
    id: 7,
    icon: block1,
    title: 'Telco and carrier partners  ',
    description:
      'Expose white-labelled ITM inside partner portals with API-driven SLA reporting.  ',
  },
];
const data10 = [
  {
    id: 1,
    icon: block1,
    title: 'Standard ESC inclusion  ',
    description: `ITM is included as part of ESC – Secure Networking for standard tenants.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Product-specific defaults  ',
    description:
      'Connect, EDGE, N0DE and Q-Fi use the same engine with different defaults and policy choices.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Advanced ITM analytics  ',
    description:
      'Long-term retention, custom WebHooks and external observability integrations for larger deployments.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Dedicated ITM control cluster   ',
    description:
      ' Higher scale, multi-tenant policy handling and increased API rate limits for carriers and OEM partners.  ',
  },
  
];
const dat11 = [
  {
    id: 1,
    icon: block1,
    title: 'Versus static QoS   ',
    description: `Static QoS applies fixed rules. ITM adapts to live path conditions and traffic behaviour.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Versus basic SD-WAN path steering  ',
    description:
      'SD-WAN may select a path. ITM influences scheduling, protection, pacing and verification inside the APN overlay.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Versus manual tuning   ',
    description:
      'Manual tuning cannot react quickly enough to congestion, jitter or link degradation across distributed networks.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Versus monitoring alone  ',
    description:
      'Monitoring tells you what happened. ITM acts on the data and verifies the outcome.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Versus application-only prioritisation  ',
    description: 'ITM works below the application, inside the network overlay, without requiring each application to solve the problem itself.   ',
  },
 
];

const data7 = [
  {
    id: 1,
    icon: block1,
    title: 'Live performance metrics  ',
    description: `ITM tracks latency, loss, MOS and throughput so teams can see performance changes in real   
time.  `,
  },

  {
    id: 2,
    icon: block3,
    title: '64× throughput gain   ',
    description:
      'The e-book lists 64× throughput gain on lossy or high-latency links as part of Enigma’s proof in performance .   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Sub-200ms failover   ',
    description: 'Bonded RAIN links are listed as supporting failover under 200ms .  ',
  },
  {
    id: 4,
    icon: block3,
    title: '70% fewer engineer tickets',
    description:
      'The e-book lists a 70% reduction in engineer tickets in the first 30 days as a proof point .   ',
  },
  {
    id: 5,
    icon: block3,
    title: '80% backhaul reduction  ',
    description:
      'The proof section also lists an 80% reduction in backhaul for concurrent G.711 calls with MOS 4.0 .   ',
  },
  {
    id: 6,
    icon: block1,
    title: 'Ten key metrics  ',
    description: `The older PowerPoint material says ITM monitors the ten key service-impact metrics, including   
lost connection, TCP throughput, latency, jitter, packet loss, UDP throughput, DNS resolution   
and VoIP MOS .  `,
  },
];
const Command = [
  {
    id: 1,
    title: 'Application-aware prioritisation    ',
    description:
      'ITM classifies traffic and prioritises latency-sensitive flows such as voice, video, payments, games, trading and control traffic.',
    usecase: [
      'Detect by port, protocol, flow and behaviour  ',
      'Prioritise critical and interactive applications  ',
      'Prevent real-time traffic being delayed by bulk transfers  ',
      'Support Gold, Silver and Bronze traffic classes  ',
    ],
  },
  {
    id: 2,
    title: 'Byte-level QoS     ',
    description:
      'Traffic is split into smaller cells so high-priority flows are not trapped behind larger packets or bulk transfer queues.   ',
    usecase: [
      'Fixed-size cell handling   ',
      'Traffic class tagging   ',
      'Interleaving of small and large traffic cells  ',
      'More precise control than session-level prioritisation  ',
    ],
  },
  {
    id: 3,
    title: 'Predictive congestion control    ',
    description:
      'ITM watches for early signs of congestion, such as RTT drift, jitter changes and queue build-up, before service quality drops.     ',
    usecase: [
      'Detects congestion before hard failure   ',
      'Re-weights traffic across cleaner paths  ',
      'Protects critical flows before user impact  ',
      'Supports real-time performance under pressure  ',
    ],
  },
  {
    id: 4,
    title: ' Dynamic path and bonding decisions    ',
    description:
      'ITM uses live path quality to support bonding, routing and failover decisions across mixed links.   ',
    usecase: [
      'Fibre, DSL, 4G, 5G, satellite and microwave   ',
      'Per-link latency, jitter and loss monitoring   ',
      'Up to eight diverse links  ',
      'Supports around 95% usable aggregation in bonding scenarios  ',
    ],
  },
  {
    id: 5,
    title: 'RAIN and FEC protection  ',
    description:
      'ITM helps apply resilience to priority traffic by deciding which flows require duplication or loss repair.  ',
    usecase: [
      'Gold traffic can receive duplicated delivery  ',
      'RAIN can reduce effective packet loss below 0.1%  ',
      'FEC supports additional loss masking   ',
      'Protects real-time services and critical flows   ',
    ],
  },
  {
    id: 6,
    title: 'Deep observability    ',
    description:
      'ITM exposes performance data so customers and operators can see what is happening and prove the impact.  ',
    usecase: [
      'Latency, loss, jitter and throughput    ',
      'MOS scoring   ',
      'Per-flow and per-class metrics   ',
      'RCA hints and NOC visibility   ',
    ],
  },
];
const TrafficManagement = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Performance Networking', href: '/products/performance-networking' },
          { label: 'Intelligent Traffic Management' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Prioritise what matters before <Br isDesktop isTablet /> congestion becomes visible
          </>
        }
        description="Intelligent Traffic Management monitors link quality, classifies traffic and adapts routing, QoS   
and resilience decisions in real time, helping Enigma products keep critical applications   
responsive across fibre, broadband, 4G, 5G, satellite and mixed networks.  "
        image={operations}
        buttons={[
          {
            label: 'Explore Intelligent Traffic Management  ',
            href: '#',
            variant: 'blue',
          },
        ]}
        features={[
          'Live QoS control',
          'Latency, loss, jitter and MOS visibility',
          'Closed-loop optimisation  ',
        ]}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Not all traffic should be treated the same</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Modern networks carry everything at once: video calls, payment flows, cloud apps, AI
            APIs, file transfers, backups, gaming, telemetry and background sync.
            <br />
            <br />
            When every flow competes equally, the wrong traffic can win. Large transfers can delay
            real-time calls. Background sync can affect payments. Congestion can build before users
            know why performance has dropped.
            <br />
            <br />
            ITM gives Enigma the live control needed to identify, prioritise and protect the traffic
            that matters most.
          </>
        }
        data={Core}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>ITM turns traffic management into a live, adaptive control loop</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM continuously observes network and traffic behaviour, decides how flows should be
            handled, acts through APN scheduling and policy controls, then verifies whether
            performance improved.
            <br />
            <br />
            It is not a standalone product. It is built into Enigma’s APN and ESC platform so every
            product can behave like one predictable network fabric.
          </>
        }
        data={data2}
      />
      <CardWithUseCase
        data={Command as CardItem[]}
        headerTitle={<>Adaptive QoS, path selection, resilience and visibility in one layer</>}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Observe. Decide. Act. Verif</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM operates as a closed-loop control system. It watches live traffic and link
            behaviour, decides what should change, applies policy through the APN overlay, then
            checks whether the outcome improved.
          </>
        }
        data={data3}
        transitionLine={<>ITM is the decision layer that makes APN adaptive instead of static. </>}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Traffic control at byte level, not just session level</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM does not only decide which application gets priority. It manages traffic at a more
            granular level, splitting flows into cells that can be scheduled, tagged, interleaved
            and protected inside the APN tunnel. <br />
            <br />
            The e-book places this capability directly in the Enigma performance layer, describing
            APN’s role as application-aware shaping, telemetry, byte-level FEC, latency reduction,
            packet-loss repair and dynamic multi-path routing .
          </>
        }
        data={data4}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Predictive control before performance breaks</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM watches changing network conditions and reacts before degradation becomes visible.
            Instead of waiting for packet loss or user complaints, it responds to early signs such
            as RTT drift, jitter movement and queue build-up.
          </>
        }
        data={data5}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Policy-controlled and integration-ready</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM policies are managed through configuration templates and APIs, allowing Enigma
            products, Nexus dashboards, third-party systems and LLM agents to consume telemetry and
            apply controlled policy changes.
          </>
        }
        data={data6}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Measured performance, not assumed improvement</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            The e-book states that every Enigma deployment is measured, not assumed, with ITM
            tracking live latency, loss, MOS and throughput so customers can prove impact instantly
            .
          </>
        }
        data={data7}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>One optimisation engine across Enigma products</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM is not sold as a separate standalone product. It is part of the APN and ESC
            platform, shared across Enigma services, with different defaults, policies and user
            experiences depending on the product.
          </>
        }
        data={data8}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>For environments where the right traffic has to win</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM is most valuable where networks carry mixed workloads and critical traffic cannot be
            allowed to compete equally with background or bulk traffic.
          </>
        }
        data={data9}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Included by default, advanced at scale</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM should be positioned as included within ESC – Secure Networking and the wider APN-
            powered portfolio, not as a separate line item for standard customers.
            <br />
            <br />
            For larger enterprises, MSPs and carriers, advanced analytics, export and dedicated
            control-plane options can be priced by quotation.
          </>
        }
        data={data10}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>More than static QoS or basic traffic shaping</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            ITM should be positioned against traditional QoS, SD-WAN steering and manual traffic
            shaping. The difference is that ITM is dynamic, byte-level, policy-aware and tied to APN
            telemetry, bonding, RAIN, FEC and TCP-A.
          </>
        }
        data={dat11}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>ITM is the control brain, not a standalone product</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Intelligent Traffic Management is part of the APN and ESC platform. It is the
            optimisation layer that makes Enigma products behave predictably, but it is not a
            separate customer-facing service on its own.
          </>
        }
        benitsTitle="ITM  is"
        limitationsTitle="ITM  is not "
        benefits={[
          'The real-time optimisation layer inside APN / ESC  ',
          'The traffic classification and prioritisation engine   ',
          'The control layer for QoS, path selection and congestion response  ',
          'The policy and telemetry layer for performance visibility  ',
          'The decision brain behind adaptive APN behaviour',
        ]}
        limitations={[
          'A standalone product  ',
          'A replacement ISP circuit  ',
          'A simple traffic-shaping rule  ',
          'A generic monitoring dashboard  ',
          'A manual QoS configuration page   ',
          'A full SD-WAN product by itself  ',
        ]}
      />

      <NextPageSlider
        title="ITM connects the APN performance stack"
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Make the right traffic
            <Br isTablet isDesktop />
          </>
        }
        headline2=" win, automatically  "
        description="Intelligent Traffic Management helps Enigma products classify, prioritise, route, protect and   
verify traffic in real time, keeping critical services responsive even when networks are busy,   
degraded or unpredictable.  "
        primaryButton={{
          label: ' Explore Intelligent Traffic Management',
          href: '#',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default TrafficManagement;
