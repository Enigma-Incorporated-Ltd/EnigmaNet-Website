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
import WorkStep from './WorkStep';
import PricingCard from '@/components/ui/PricingCard';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import AddOnCard from '@/components/ui/AddOnCard';
import ComparisonTable from './ComparisonTable';
import PremiumButton from '@/components/ui/PremiumButton';
import HeroImage from '@/components/ui/HeroImage';
const features = [
  {
    id: 1,
    title: 'APN Core  ',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description: 'The engine that powers Connect performance, encryption, QoS and telemetry.  ',

    meta: {
      title: 'APN Core',
      description: 'The engine that powers Connect performance, encryption, QoS and telemetry.  ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'TCP Acceleration',
    href: '/products/performance-networking/tcp-acceleration',
    slug: 'tcp-acceleration',
    description: 'Improves data movement over lossy and high-latency links.  ',

    meta: {
      title: 'TCP Acceleration',
      description: 'Improves data movement over lossy and high-latency links.  ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'Intelligent Traffic Management  ',
    href: '/products/performance-networking/intelligent-traffic-management',
    slug: 'intelligent-traffic-management',
    description: 'Prioritises calls, games, streams, cloud apps and critical traffic.  ',

    meta: {
      title: 'Intelligent Traffic Management  ',
      description: 'Prioritises calls, games, streams, cloud apps and critical traffic.  ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'RAIN Resilience  ',
    href: '/products/performance-networking/rain-resilience',
    slug: 'rain-resilience',
    description: 'Helps reduce effective packet loss for protected traffic.  ',

    meta: {
      title: 'RAIN Resilience  ',
      description: 'Helps reduce effective packet loss for protected traffic.   ',
    },
    image: heroImg,
  },
  {
    id: 5,
    title: 'Multi-Link Bonding   ',
    href: '/products/performance-networking/multi-link-bonding',
    slug: 'multi-link-bonding',
    description: 'Supports optional failover and bonding scenarios.   ',

    meta: {
      title: 'Multi-Link Bonding     ',
      description: 'Supports optional failover and bonding scenarios.   ',
    },
    image: heroImg,
  },
  {
    id: 6,
    title: 'Enigma EDGE   ',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description: 'Managed edge connectivity for business sites and branches.   ',
    image: heroImg,
    meta: {
      title: 'Enigma EDGE  ',
      description: 'Managed edge connectivity for business sites and branches.  ',
    },
  },
  {
    id: 7,
    title: 'ESC – Secure Networking   ',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description:
      'Enterprise-grade APN overlay delivery for multi-site and provider deployments.   ',
    image: heroImg,
    meta: {
      title: 'ESC – Secure Networking  ',
      description:
        'Enterprise-grade APN overlay delivery for multi-site and provider deployments.   ',
    },
  },

  {
    id: 8,
    title: 'N0DE ',
    href: '#',
    slug: '#',
    description: 'Specialist gaming experience built on the APN engine.  ',
    image: heroImg,
    meta: {
      title: 'N0DE ',
      description: 'Specialist gaming experience built on the APN engine.    ',
    },
  },
  {
    id: 9,
    title: 'Q-Fi  ',
    href: '#',
    slug: '#',
    description: 'Specialist audio experience built on the APN engine.  ',
    image: heroImg,
    meta: {
      title: 'Q-Fi  ',
      description: 'Specialist audio experience built on the APN engine.  ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Video calls drop or freeze  ',
    description: `Latency, jitter and packet loss can make calls unstable even when bandwidth looks fine.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Gaming and streaming stutter  ',
    description: `Small timing changes can create lag, buffering and poor real-time performance.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'File sync becomes painful  ',
    description: 'Large uploads and cloud folders can slow everything else down.',
  },
  {
    id: 4,
    icon: block1,
    title: 'Public Wi-Fi feels risky  ',
    description: 'Shared networks expose users to privacy and security concerns.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Small teams need control  ',
    description:
      'Freelancers, studios and micro-teams need better connectivity without enterprise complexity.  ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Lightweight client  ',
    description: `Install on desktop or mobile and connect through the Enigma APN tunnel.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Encrypted overlay ',
    description: `Protect traffic across home, public, mobile and shared networks.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Automatic optimisation  ',
    description: 'Prioritise calls, gaming, streaming, cloud access and interactive apps.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Real-time visibility  ',
    description: 'See latency, loss, jitter, usage and connection quality in the portal.   ',
  },

  {
    id: 5,
    icon: block3,
    title: 'Self-serve management  ',
    description: 'Subscribe, upgrade, manage devices and add features from the portal.  ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: 'Remote and hybrid workers  ',
    description: `Business-grade encrypted connectivity from home, hotels, cafés or shared networks.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Freelancers and small studios  ',
    description: `More stable file sync, collaboration, client calls and cloud access.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Security-conscious individuals   ',
    description: 'Always-on encrypted traffic protection for public Wi-Fi and mobile working.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Power users and households  ',
    description:
      'Better performance when calls, streams, downloads and cloud apps run at the same time.  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Gamers and streamers  ',
    description: `Lower jitter, better prioritisation and more stable real-time performance.  
Supporting note: Dedicated gaming experiences can be positioned under <strong> N0DE. </strong> `,
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'Faster, more stable internet  ',
    description: `Improve performance across lossy, congested or high-latency links.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Encrypted APN tunnel  ',
    description: 'Protect traffic with an encrypted overlay across any connection.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Byte-level QoS  ',
    description: 'Prioritise small latency-sensitive traffic before bulk transfers.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Automatic traffic optimisation  ',
    description:
      'Calls, games, streams and interactive apps are prioritised without manual setup. ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Real-time portal visibility  ',
    description: `View latency, loss, jitter, MOS and usage from the Connect portal.  `,
  },
  {
    id: 6,
    icon: block2,
    title: 'Optional resilience add-ons  ',
    description: `Add Public IP, Extra Secure, Site Link, Premium Support or multi-link options as needed.  `,
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'Up to 64× throughput gain  ',
    description: `For high-latency, lossy links compared with plain TCP.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Packet loss reduced  ',
    description:
      'Effective packet loss can be reduced towards approximately 0.1% using RAIN and FEC.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Jitter control   ',
    description: 'Jitter can be held under 5 ms in relevant optimised profiles.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Loss masking   ',
    description: 'Loss can be masked up to 2% raw loss in relevant APN overlays.    ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Fewer support problems   ',
    description: 'Enterprise deployments show reduced network tickets and engineer visits.   ',
  },
];
const addonPrice = [
  {
    id: 1,
    PriceValue: `+£3.99 / month  `,
    title: 'Extra Secure tunnel   ',
    description: `AES-256 upgrade.   `,
  },

  {
    id: 2,
    PriceValue: `+£3.49 / month  `,
    title: 'Public IP  ',
    description: `For hosting, access or specific application requirements.   `,
  },
  {
    id: 3,
    PriceValue: `+£4.99 / month  `,
    title: 'Site Link  ',
    description: `Connect into ESC / EDGE environments.  `,
  },
  {
    id: 4,
    PriceValue: `+£5 / month  `,
    title: 'Premium 24×7 support',
    description: `Enhanced support coverage.  `,
  },
];

const data8 = [
  {
    id: 1,
    icon: block1,
    title: 'Work from anywhere  ',
    description: `Protect and stabilise connectivity from home, hotels, cafés and public Wi-Fi.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Better calls and meetings  ',
    description: 'Prioritise real-time video and voice so calls stay smoother under pressure.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Faster file sync',
    description: 'Improve cloud folders, creative assets, backups and shared project movement.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Safer public Wi-Fi  ',
    description: 'Encrypt traffic when using shared, public or unfamiliar networks.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Gaming and streaming  ',
    description: 'Reduce jitter and prioritise latency-sensitive traffic.  ',
  },

  {
    id: 6,
    icon: block1,
    title: 'Small team connectivity  ',
    description:
      'Give growing teams better performance without moving straight into enterprise networking.  ',
  },
];
const data9 = [
  {
    id: 1,
    icon: block1,
    title: 'One-click tunnel  ',
    description: `Simple on/off control for encrypted, optimised connectivity.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Device management  ',
    description: 'See active devices, plan limits and connected clients.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Performance tiles  ',
    description: 'Latency, loss, jitter, MOS and usage at a glance.   ',
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
    title: 'Add-on management    ',
    description: 'Add Public IP, Extra Secure, Site Link or Premium Support.  ',
  },
  {
    id: 6,
    icon: block1,
    title: 'Upgrade prompts  ',
    description: 'Move from Connect to EDGE Lite or ESC when usage outgrows self-serve plans.',
  },
  
];
const data10 = [
  {
    id: 1,
    icon: block1,
    title: 'Enigma Connect  ',
    description: `General-purpose self-serve connectivity for individuals and small teams.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'N0DE  ',
    description: 'Gaming-focused APN experience for low-latency, stable gameplay and streaming.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Q-Fi  ',
    description:
      'Hi-fi audio-focused APN experience for low-jitter, high-quality audio streaming.  ',
  },
 
];


const data7 = [
  {
    id: 1,
    icon: block1,
    title: '1. Choose a plan  ',
    description: `Select Lite, Mobile, Pro or MAX.  `,
  },

  {
    id: 2,
    icon: block3,
    title: '2. Create account  ',
    description: 'Sign up and complete payment online. ',
  },
  {
    id: 3,
    icon: block1,
    title: '3. Install client  ',
    description: 'Download the client for desktop or mobile.  ',
  },
  {
    id: 4,
    icon: block3,
    title: '4. Connect  ',
    description: 'Turn on the APN tunnel and start using optimised connectivity.   ',
  },
  {
    id: 5,
    icon: block3,
    title: '5. Manage and upgrade  ',
    description:
      'Add devices, change plans, add security options or upgrade when the team grows.   ',
  },
];
const Command = [
  {
    id: 1,
    title: 'Connect Lite    ',
    description: 'Single remote worker, gamer or student.  ',
    PriceValue: '£9.99 / month ex VAT  ',
    usecase: [
      '1 desktop or laptop  ',
      'Thin client access  ',
      'Encrypted APN tunnel  ',
      'Basic portal  ',
      'Latency, loss and usage tiles   ',
    ],
    href: '#',
    buttonLabel: 'Start Lite  ',
    stepList: true,
    stepTitle: 'Includes',
  },
  {
    id: 2,
    title: 'Connect Mobile',
    description: 'Single user with laptop and phone.  ',
    PriceValue: '£14.99 / month ex VAT  ',
    usecase: [
      '2 devices  ',
      'Desktop and mobile access   ',
      'Encrypted APN tunnel  ',
      'Basic portal  ',
      'Latency, loss and usage tiles  ',
    ],
    href: '#',
    buttonLabel: 'Start Mobile  ',
    stepList: true,
    stepTitle: 'Includes',
  },
  {
    id: 3,
    title: 'Connect Pro  ',
    description: 'Micro business or small team.  ',
    PriceValue: '£29.99 / month ex VAT  ',
    usecase: [
      '3 users  ',
      'Up to 6 devices  ',
      'Team portal management  ',
      'Encrypted APN tunnel  ',
      'Basic performance visibility  ',
    ],
    href: '#',
    buttonLabel: 'Start Pro  ',
    stepList: true,
    stepTitle: 'Includes',
  },
  {
    id: 4,
    title: 'Connect MAX  ',
    description: 'Growing team or small office.  ',
    PriceValue: '£69.99 / month ex VAT  ',
    usecase: [
      '10 users  ',
      'Up to 30 devices  ',
      'Team management  ',
      'Portal visibility  ',
      'Upgrade path into EDGE / ESC  ',
    ],
    href: '#',
    buttonLabel: 'Start MAX  ',
    stepList: true,
    stepTitle: 'Includes',
  },
];
const sharedFeatures = [
  'Desktop thin client for Windows, macOS and Linux',
  'Mobile agents for iOS and Android',
  'Encrypted APN tunnel',
  'Byte-level QoS',
  'Basic portal',
  'Latency, loss, usage and quality tiles',
];
const Connect = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Connectivity Products', href: '/products/connectivity-products' },
          { label: 'Enigma Connect' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={<>Upgrade your internet without changing provider</>}
        description="Enigma Connect gives individuals and small teams encrypted, optimised connectivity using the   
        same APN acceleration engine that powers Enigma’s enterprise products — delivered through a   
        lightweight desktop and mobile client.  "
        image={operations}
        buttons={[
          {
            label: 'Start Free  ',
            href: '#',
            variant: 'blue',
          },
          {
            label: 'View Pricing  ',
            href: '#',
            variant: 'gold',
          },
        ]}
        features={['Self-serve setup ', 'Encrypted APN tunnel ', 'Up to 64× faster on lossy links']}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Your internet may be fast, but that does not mean it is stable</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Home Wi-Fi, hotel networks, public hotspots, mobile data and shared connections can all
            become unpredictable. Calls freeze. Uploads stall. Games lag. Cloud apps slow down.
            Files take too long to sync. Public Wi-Fi creates security risk.
            <br />
            <br />
            Enigma Connect improves how your traffic behaves over the connection you already have,
            giving you a more stable, encrypted and responsive experience without replacing your
            internet service.
          </>
        }
        data={Core}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Connect brings Enigma’s APN engine to everyday users</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Connect is the self-serve product family built on APN Core. It uses an encrypted
            overlay, byte-level QoS, traffic optimisation, telemetry and optional resilience
            features to improve performance across everyday internet connections.
            <br />
            <br />
            No sales call. No hardware required. No complex setup.
          </>
        }
        data={data2}
      />
      <WorkStep />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for people who need better internet without enterprise complexity</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={data3}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Everyday connectivity, powered by APN Core</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={data4}
      />
      <PricingCard
        data={Command as CardItem[]}
        headerTitle={<>Choose the plan that fits how you connect</>}
        disableSentenceCase={true}
      />

      <CaseStudyHighlight
        data={sharedFeatures}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Shared across all plans  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />

      <AddOnCard
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Optional Add-ons</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={<>Enhance your connectivity package with additional services.</>}
        data={addonPrice}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Performance you can feel, and measure</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Connect uses the same APN engine as Enigma’s wider product portfolio. That means traffic
            can benefit from acceleration, prioritisation, loss repair, resilience and performance
            telemetry.
          </>
        }
        data={data5}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Start self-serve. Scale when you need more</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Connect is the easiest way to start using Enigma’s APN engine. As users or sites grow,
            customers can upgrade into EDGE or ESC for managed deployments, site-level control and
            enterprise networking.
          </>
        }
      />
      <ComparisonTable />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Start in minutes. Manage everything onlinet</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Connect is built for self-serve adoption. Users can choose a plan, subscribe, install
            the client, connect securely and manage devices from the portal.
          </>
        }
        data={data7}
      />
      <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 py-sm-4 py-md-5 px-3">
        <PremiumButton
          label="Start Free "
          variant="blue"
          href="#"
          className="btn-lg btn-responsive"
        />
        <PremiumButton
          label="View Pricing  "
          variant="gold"
          className="btn-lg btn-responsive"
          href="#"
        />
        <PremiumButton
          label="Configure Plan  "
          variant="blue"
          href="#"
          className="btn-lg btn-responsive"
        />
      </div>
      <HeroImage img={heroImg} />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Designed for the way people actually connect</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={data8}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Simple controls, useful visibility</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            The Connect portal keeps the experience easy for non-technical users while still giving
            power users the information they need.
          </>
        }
        data={data9}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>One APN engine, specialist experiences where needed</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Connect is the general-purpose self-serve connectivity line. N0DE and Q-Fi use the same
            APN foundation but are positioned for specialist audiences.
          </>
        }
        data={data10}
        transitionLine={<>Same APN core. Different defaults, experiences and audiences.</>}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Connect is self-serve connectivity, not a full enterprise deployment</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Connect is designed for individuals, power users and small teams who want immediate APN-
            powered performance without enterprise setup. Larger managed sites, hardware appliances
            and complex overlays belong in EDGE or ESC.
          </>
        }
        benitsTitle="Connect is"
        limitationsTitle="Connect is not "
        benefits={[
          'A B2C self-serve connectivity product  ',
          'A lightweight desktop and mobile client  ',
          'An encrypted APN tunnel  ',
          'A way to improve stability, security and responsiveness',
          'A starting point for APN-powered performance  ',
        ]}
        limitations={[
          'A full enterprise SD-WAN deployment  ',
          'A replacement for EDGE branch appliances ',
          'A customer-hosted ESC core  ',
          'A dedicated gaming brand  ',
          'A full storage or file-management product   ',
          'A managed network design project  ',
        ]}
      />

      <NextPageSlider
        title="Connect is part of the Enigma performance networking family"
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Upgrade your connection in
           
          </>
        }
        headline2=" minutes  "
        description="Enigma Connect gives you encrypted, optimised connectivity across the networks you already   
use, helping calls, gaming, streaming, cloud apps and file sync perform more reliably.  "
        primaryButton={{
          label: 'Start Free',
          href: '#',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default Connect;
