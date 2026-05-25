import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import { enterprise as heroImg } from '@/assets/img';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import NextPageSlider from '@/components/ui/NextPageSlider';

import { useSlug } from '@/utils/useSlug';
import FeatureComparison from '@/components/ui/FeatureComparison';
import GraphTable from './GraphTable';
import Br from '@/components/ui/NewLine';
const features = [
  {
    id: 1,
    title: 'APN Core  ',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description:
      'The core engine that contains TCP-A, bonding, RAIN, QoS, telemetry and encryption.  ',

    meta: {
      title: 'APN Core',
      description:
        'The core engine that contains TCP-A, bonding, RAIN, QoS, telemetry and encryption.  ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'ESC – Secure Networking  ',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description:
      'Delivers APN Core and TCP-A as a software and SaaS secure networking platform.   ',

    meta: {
      title: 'ESC – Secure Networking',
      description:
        'Delivers APN Core and TCP-A as a software and SaaS secure networking platform.  ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'Enigma EDGE ',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description: 'Uses TCP-A to improve branch, campus, edge and enterprise throughput.   ',

    meta: {
      title: 'Enigma EDGE ',
      description: 'Uses TCP-A to improve branch, campus, edge and enterprise throughput.   ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'Enigma Connect ',
    href: '/products/connectivity-products/enigma-connect',
    slug: 'enigma-connect',
    description: 'Applies APN acceleration to self-serve connectivity and thin-client use cases.  ',

    meta: {
      title: 'Enigma Connect ',
      description:
        'Applies APN acceleration to self-serve connectivity and thin-client use cases.  ',
    },
    image: heroImg,
  },

  {
    id: 5,
    title: 'SyncSphere / LFT   ',
    href: '/products/data-&-file-services/syncsphere',
    slug: 'syncsphere',
    description:
      'Uses TCP-A to accelerate large file transfer, cloud movement and storage workflows.',
    image: heroImg,
    meta: {
      title: 'SyncSphere / LFT  ',
      description:
        'Uses TCP-A to accelerate large file transfer, cloud movement and storage workflows.',
    },
  },
  {
    id: 6,
    title: 'AND/+  ',
    href: '#',
    slug: '#',
    description:
      'Allows partners, carriers and OEMs to embed APN Core and TCP-A into their own platforms.  ',
    image: heroImg,
    meta: {
      title: 'AND/+  ',
      description:
        'Allows partners, carriers and OEMs to embed APN Core and TCP-A into their own platforms.  ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Bandwidth does not guarantee throughput  ',
    description: `A 100Mb/s line can still perform poorly when packet loss and latency are present.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'TCP reacts too aggressively',
    description: `Standard TCP treats loss as congestion and slows the flow down, even when the path could   
carry more.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Long-distance links suffer most  ',
    description:
      'High RTT paths, satellite, international transfer and cloud-to-premise movement expose TCP limitations quickly.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Large files take longer than they should  ',
    description:
      'Media, backups, logs and datasets can take minutes or hours longer than the available bandwidth suggests.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Cloud workflows feel remote  ',
    description:
      'High RTT and packet loss make cloud sync, file recall and cross-region movement feel slow and unpredictable.   ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Better single-flow performance  ',
    description: `Improves throughput for individual TCP flows that would normally slow down under loss or   
latency.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Loss-aware transport handling  ',
    description: `Uses APN’s tunnel behaviour to reduce the impact of packet loss on application throughput.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Long-haul acceleration',
    description:
      'Helps data continue moving efficiently across high-RTT paths, including cloud, satellite and international routes.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Standard network compatibility  ',
    description:
      'Runs through Enigma’s APN overlay and can operate over normal IP networks without requiring a custom application stack.  ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Portfolio-wide capability  ',
    description:
      'TCP-A appears across APN Core, ESC, EDGE, Connect, AND/+ and SyncSphere/LFT workflows.   ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: 'Local TCP handling  ',
    description: `TCP-A manages TCP behaviour at the APN edge, reducing the impact of long RTT and loss on   
the application flow.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Early acknowledgement   ',
    description: `Traffic can be acknowledged more intelligently inside the tunnel, avoiding the stop-start   
behaviour that slows raw TCP.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Selective retransmit   ',
    description:
      'The e-book describes APN transport behaviour using early-ACK and selective retransmit at the transport layer .  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Forward error correction  ',
    description:
      'APN includes forward-error-correction for TCP and UDP traffic as part of its transport-layer role .  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Byte-level optimisation  ',
    description:
      'TCP-A works alongside Enigma’s byte-level optimisation, which the e-book says supports up to 64× throughput improvement on lossy or high-latency links .   ',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'APN Core   ',
    description: `The engine that contains TCP-A, byte-level QoS, bonding, RAIN and telemetry.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'ESC – Secure Networking  ',
    description:
      'Delivers TCP-A as part of Enigma’s software and SaaS secure networking platform.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Enigma EDGE  ',
    description: 'Uses TCP-A for branch, campus, edge and enterprise connectivity.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Enigma Connect  ',
    description:
      'Uses the same APN behaviour for self-serve connectivity and thin-client experiences.  ',
  },
  {
    id: 5,
    icon: block2,
    title: 'AND/+   ',
    description: `Exposes the ViBE/APN engine for OEM, carrier and embedded integration use cases.  `,
  },
  {
    id: 6,
    icon: block2,
    title: 'SyncSphere / LFT  ',
    description: `Uses APN acceleration and TCP-A to improve large file transfer and storage workflows.    `,
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'Visibility   ',
    description: `Real-time telemetry helps teams understand throughput, latency, loss and link behaviour.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Performance  ',
    description:
      'TCP-A improves throughput when packet loss, congestion or long RTT would normally reduce speed.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Stability  ',
    description:
      'RAIN, bonding and failover help preserve continuity while TCP-A keeps data movement efficient.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Security  ',
    description: 'Traffic remains inside the encrypted APN tunnel, with zero-trust and obfuscation available across the platform.  ',
  },
];
const data6 = [
  {
    id: 1,
    icon: block1,
    title: 'Large file transfer     ',
    description: `Move media files, project packages, creative assets and heavy documents faster across distributed teams.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Cloud storage and sync    ',
    description:
      'Improve access to cloud storage, backup, archive and cross-cloud transfer workflows.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'AI and data pipelines    ',
    description:
      'Support movement of datasets, model updates, logs and telemetry across distributed infrastructure.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Remote and hybrid teams  ',
    description:
      'Help file access, SaaS workflows and collaboration tools stay responsive across variable home or public networks.    ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Satellite and long-haul links   ',
    description:
      'Reduce the performance penalty of high RTT links where standard TCP struggles.    ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Enterprise WAN and branch connectivity  ',
    description:
      'Improve usable throughput across existing circuits without requiring private leased lines.     ',
  },
];
const data7 = [
  {
    id: 1,
    icon: block1,
    title: 'Versus adding bandwidth     ',
    description: `More bandwidth does not solve packet loss, latency or poor TCP behaviour. TCP-A helps recover   
usable performance from the bandwidth already available.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Versus MPLS    ',
    description:
      'MPLS can be expensive and slow to provision. Enigma’s APN overlay is designed to improve performance without requiring a private circuit replacement project.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Versus standard VPNs    ',
    description:
      'VPNs can add overhead. TCP-A is part of an acceleration layer designed to improve performance while keeping traffic protected.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Versus UDP-based file transfer tools    ',
    description:
      'Some file-transfer tools rely on custom UDP protocols. Enigma’s approach supports accelerated transfer through the APN layer while remaining aligned with standard enterprise network environments.    ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Versus cloud-native accelerators  ',
    description:
      'Cloud accelerators can be tied to one provider. TCP-A supports Enigma’s broader any-network positioning across cloud, branch, edge and remote access.  ',
  },
];


const Acceleration = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Performance Networking', href: '/products/performance-networking' },
          { label: 'TCP Acceleration' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Move data faster across lossy <Br isDesktop isTablet /> and high-latency links
          </>
        }
        description="TCP Acceleration is a core APN capability that improves single-flow throughput by replacing   
legacy TCP congestion behaviour inside Enigma’s encrypted tunnel, helping traffic run closer to   
line rate even when latency, packet loss or distance would normally slow it down.  "
        // image={heroImg}
        buttons={[
          {
            label: 'Explore TCP Acceleration  ',
            href: '/products/performance-networking/tcp-acceleration/explore-tcp-acceleration',
            variant: 'blue',
          },
          {
            label: 'Talk to Enigma',
            href: '/get-in-touch',
            variant: 'gold',
            disableSentenceCase: true,
          },
        ]}
        features={[
          'Up to 64× faster transfer',
          '300ms RTT supported',
          'Performance restored over lossy links  ',
        ]}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  TCP was not built for today’s
                  <Br isTablet /> traffic-heavy networks
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Standard TCP was designed for a very different internet. It assumes packet loss means
            congestion, so when loss or latency appears, it slows down aggressively. That behaviour
            can make a high-bandwidth circuit perform like a much smaller one.
            <br />
            <br />
            In the e-book, Enigma identifies this directly as a protocol problem: a 100Mb/s
            connection with only 0.5% packet loss and 300ms latency can be throttled down to around
            6Mb/s under standard TCP behaviour .
            <br />
            <br />
            For modern cloud sync, file transfer, backups, AI datasets, media workflows and
            distributed teams, that creates slowdowns, stalls and poor quality of service.
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
                  TCP-A improves the transport
                  <Br isDesktop isTablet /> behaviour inside the APN tunnel
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            TCP Acceleration replaces standard TCP congestion behaviour with Enigma’s ViBE
            acceleration logic inside the encrypted APN tunnel.
            <br />
            <br />
            Instead of letting loss and distance collapse throughput, TCP-A uses APN’s transport
            controls to keep data moving efficiently across the available path.
            <br />
            <br />
            It works transparently, without requiring application changes.
          </>
        }
        data={data2}
      />
      <CaseStudyHighlight
        image={heroImg}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Measured improvement where <Br isTablet />
                  standard TCP struggles.
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            The e-book provides clear benchmark examples showing how APN acceleration changes
            transfer performance under loss and latency. The standout proof point is that Enigma can
            accelerate transmission up to <strong> 64× standard TCP</strong> under tested conditions
            .
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
                  TCP-A keeps data moving when loss and
                  <Br isDesktop /> latency would normally slow it down
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            TCP-A works inside the APN tunnel. It improves how traffic is acknowledged, scheduled,
            repaired and forwarded across the available path, so applications are less exposed to
            the weaknesses of standard TCP behaviour.
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
                  TCP-A is one part of the APN
                  <Br isTablet /> performance layer.
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            TCP Acceleration is not a standalone trick. It sits inside APN Core alongside
            Intelligent Traffic Management, RAIN, bonding, QoS, telemetry and encryption. <br />
            <br />
            Together, these features allow Enigma to improve throughput, protect real-time traffic
            and preserve performance under pressure.
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
                  TCP-A strengthens performance, <Br isDesktop isTablet />
                  but works with the whole APN stack
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            The e-book frames Enigma Net around four pillars: Visibility, Performance, Stability and
            Security. TCP-A sits most directly under Performance, but it is made stronger by the
            other three pillars .
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
                  Use TCP-A where distance, loss or latency
                  <Br isDesktop isTablet /> slows critical data movement
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            TCP-A is most valuable when traffic needs to move reliably across imperfect real-world
            networks: public internet, satellite, mobile, cloud, branch, remote user and
            international paths.
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
                  Acceleration without forcing
                  <Br isTablet /> a new network model
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Traditional approaches often solve performance problems by adding expensive circuits,
            private backbones or application-specific transfer tools. TCP-A is different because it
            improves transport behaviour inside Enigma’s overlay while using existing
            infrastructure.
          </>
        }
        data={data7}
      />
      <HeaderTitle
        className='text-center py-4'
        key={theme}
        title={<div>Raw TCP vs Enigma TCP-A</div>}
        variant={theme === 'dark' ? 'gold' : 'blue'}
      />
      <GraphTable />
      {/* <TcpAccelerationChart /> */}
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  TCP-A improves transport performance, <Br isDesktop isTablet /> but it is not the
                  whole APN story
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            TCP Acceleration is a core performance feature inside APN Core. It is not a standalone
            product, ISP circuit or file-transfer application. It works best as part of the wider
            APN stack.
          </>
        }
        benitsTitle="TCP-A is  "
        limitationsTitle="TCP-A is not  "
        benefits={[
          'A core capability inside APN Core  ',
          'A transport-layer acceleration method    ',
          'A way to improve throughput under loss and latency    ',
          'A feature used across ESC, EDGE, Connect, AND/+ and SyncSphere  ',
          'A performance enhancer for existing links   ',
        ]}
        limitations={[
          'A replacement ISP circuit  ',
          'A standalone customer portal   ',
          'A storage platform   ',
          'A general VPN product   ',
          'A full SD-WAN product on its own  ',
          'A substitute for RAIN, bonding or QoS  ',
        ]}
      />

      <NextPageSlider
        title="TCP-A powers performance across the Enigma portfolio"
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Recover performance from the
            <Br isTablet />
          </>
        }
        headline2="  connection you already have. "
        description="TCP Acceleration helps Enigma Net products move data faster across lossy, congested and high-
        latency links by improving transport behaviour inside the APN tunnel.   "
        primaryButton={{
          label: 'Explore TCP Acceleration',
          href: '#',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default Acceleration;
