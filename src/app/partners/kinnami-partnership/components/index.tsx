import Breadcrumb from '@/components/ui/Breadcrumb';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroSection from '@/components/ui/HeroSection';
import PainCard from '@/components/ui/PainCard';
import kinnamiImage from '@/assets/img/partners/Kinnami_logo_full.png';
import features1 from '@/assets/svgs/partner/pain-card-distributed-systems-struggle-to-maintain-synchronized-operational-data.svg';
import features2 from '@/assets/svgs/partner/pain-card-communications-instability-creates-operational-disruption.svg';
import features3 from '@/assets/svgs/partner/pain-point-traditional-infrastructure-depends-too-heavily-on-persistent-centralized-connectivity.svg';
import CardSlider from '@/components/ui/CardSlider';
import block1 from '@/assets/svgs/partner/core-capabilities-block1.svg';
import block2 from '@/assets/svgs/partner/core-capabilities-block2.svg';
import block3 from '@/assets/svgs/partner/core-capabilities-block3.svg';
import CompareCard from '@/components/ui/CompareCard';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import mobileBg from '@/assets/svgs/mobile.svg';
import space from '@/assets/svgs/partner/space.svg';
import core1 from '@/assets/svgs/partner/persistent-operational-data.svg';
import core2 from '@/assets/svgs/partner/secure-distributed-synchronization.svg';
import core3 from '@/assets/svgs/partner/operational-continuity.svg';
import land from '@/assets/svgs/globe.svg';
import air from '@/assets/svgs/partner/air.svg';
import cloud from '@/assets/svgs/cloud storage.svg';
import maritime from '@/assets/svgs/partner/maritime.svg';
import edge from '@/assets/svgs/partner/edge.svg';
import satellite from '@/assets/svgs/partner/satellite.svg';
import { useTheme } from '@/utils/useTheme';
import HeroImage from '@/components/ui/HeroImage';
const kinnami = [
  {
    title: 'KINNAMI',
    items: [
      {
        img: air,
        name: 'AIR',
      },
      {
        img: maritime,
        name: 'MARITIME',
      },
      {
        img: land,
        name: 'LAND',
      },
      {
        img: space,
        name: 'SPACE',
      },
    ],
    description: 'Distributed mission data layer across operational environments.',
  },
  {
    title: 'ENIGMA',
    items: [
      {
        img: edge,
        name: 'EDGE',
      },
      {
        img: mobileBg,
        name: 'MOBILE',
      },
      {
        img: satellite,
        name: 'SATELLITE',
      },
      {
        img: cloud,
        name: 'CLOUD',
      },
    ],
    description: 'Secure and scalable intelligence network across connected systems.',
  },
];
const features = [
  {
    id: 1,
    icon: air,
    title: 'AIR  ',
  },
  {
    id: 2,
    icon: maritime,
    title: ' MARITIME',
  },
  {
    id: 3,
    icon: land,
    title: 'LAND ',
  },
  {
    id: 4,
    icon: space,
    title: ' SPACE  ',
  },
];
const paindata = [
  {
    id: 1,
    icon: features1,
    title: 'Distributed systems struggle to maintain synchronized operational data    ',
  },
  {
    id: 2,
    icon: features2,
    title: ' Communications instability creates operational disruption  ',
  },
  {
    id: 3,
    icon: features3,
    title:
      'Traditional infrastructure depends too heavily on persistent centralized connectivity   ',
  },
];
const Core = [
  {
    id: 1,
    icon: core1,
    title: 'Persistent operational data  ',
    description: `Maintain synchronized operational awareness across distributed systems.  `,
  },
  {
    id: 2,
    icon: core2,
    title: 'Secure distributed synchronization  ',
    description: `Trusted synchronization across heterogeneous operational environments.  `,
  },
  {
    id: 3,
    icon: core3,
    title: 'Operational continuity  ',
    description:
      'Support resilient mission operations across unstable communications conditions.  ',
  },
];
const Core2 = [
  {
    id: 1,
    icon: block1,
    title: 'Distributed mission data synchronization  ',
    description: `Maintain trusted operational data across distributed environments and systems.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Predictable Networking & Connectivity',
    description: `Support resilient communications continuity across unstable or degraded infrastructure   
environments.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Operational continuity  ',
    description:
      'Maintain visibility, coordination and data movement across operational ecosystems.  ',
  },
];
const quote = [
  'Persistent operational awareness  ',
  ' Predictable communications continuity  ',
  'Infrastructure interoperability  ',
  ' Distributed operational resilience  ',
];
const quote2 = [
  'Stronger operational continuity  ',
  'More resilient distributed infrastructure  ',
  'Better visibility across operational systems  ',
  'Predictable data movement across complex environments  ',
];
const KinnamiPartnershipPage = () => {
  const { theme } = useTheme();
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Partners', href: '/partners' },
          { label: 'Kinnami Partnership', href: '/partners/kinnami-partnership' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <br />
      <br />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Joint Capability Brief"
        headline={
          <>
            Resilient operational infrastructure for <br />
          </>
        }
        headline2=" complex environments. "
        primaryButton={{
          label: 'Book a meeting at SOF Week',
          href: '/get-in-touch',
          variant: 'gold',
          disableSentenceCase: true,
        }}
        secondaryButton={{
          label: 'Talk to Enigma',
          href: '/get-in-touch',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />
      <HeroSection
        title="Maintaining operational continuity when communications become unpredictable."
        description={
          <HeaderTitle
            key={theme}
            title={
              <div className="fw-semibold text-black fs-4">
                Together, Kinnami and Enigma help mission teams maintain trusted data, predictable
                connectivity, and operational continuity across complex, degraded, and distributed
                environments.
              </div>
            }
            variant={theme === 'dark' ? 'gold' : 'blue'}
          />
        }
        buttons={[
          {
            label: 'Explore the joint solution  ',
            href: '/partners/kinnami-partnership/joint-solution',
            variant: 'blue',
          },
        ]}
        features={[
          'Trusted Data',
          'Predictable Connectivity',
          'Operational Continuity',
          'Faster Mission Outcomes',
        ]}
      />
      <HeroImage img={kinnamiImage} isbg />
      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Distributed operational data synchronization <br />
                  for complex environments.
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Kinnami develops resilient distributed data synchronization technology designed to
            maintain trusted operational data across heterogeneous systems, communications
            environments and operational domains. <br />
            <br />
            Its AmiShare platform enables secure synchronization and persistent data continuity
            across distributed sensors, platforms and operators supporting operational resilience
            when connectivity conditions become unstable or unpredictable.
          </>
        }
        transitionLine={<>Operational domains. mission environments. </>}
      />
      <CardSlider
        data={Core}
        description2={
          <>
            Kinnami delivers secure distributed mission data synchronization across operational
            environments, enabling trusted data continuity across heterogeneous systems and
            communications conditions.
            <br />
            <br />
            Enigma delivers resilient networking and connectivity infrastructure designed to
            maintain predictable data movement and operational continuity across edge, mobile,
            satellite and cloud environments.
            <br />
            <br />
            Together, the partnership supports resilient operational infrastructure for complex and
            distributed environments.
          </>
        }
      />
      <CompareCard
        features={kinnami}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Joint Capability Brief</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <PainCard
        data={paindata}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Operational environments don’t fail cleanly.  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Modern operational systems rely on trusted data and predictable connectivity across
            distributed infrastructure, mobile assets and heterogeneous communications environments.
            When communications become unstable or degraded, operational awareness and continuity
            can quickly become fragmented.
          </>
        }
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Where resilient synchronization meets resilient connectivity. "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Kinnami maintains trusted distributed operational data across <br />
            heterogeneous systems and operational environments.
            <br />
            <br />
            Enigma maintains predictable connectivity and resilient <br /> data movement across
            complex communications infrastructure.
            <br />
            <br />
            Together, the technologies support resilient operational <br /> continuity from edge to
            command.
          </>
        }
        data={Core2}
      />
      <CaseStudyHighlight
        data={quote}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Built for complex operational environments. "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        quote={
          <>
            " Maintaining operational continuity across distributed environments depends on trusted
            data synchronization <br /> and resilient connectivity working together."
          </>
        }
      />
      <CaseStudyHighlight
        data={quote2}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for operational environments  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Resilient operational infrastructure for <br />
          </>
        }
        headline2=" complex environments. "
        primaryButton={{
          label: 'Explore the joint solution  ',
          href: '/partners/kinnami-partnership/joint-solution',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Talk to Enigma',
          href: '/get-in-touch',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default KinnamiPartnershipPage;
