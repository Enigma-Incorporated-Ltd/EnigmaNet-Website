import Breadcrumb from '@/components/ui/Breadcrumb';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroSection from '@/components/ui/HeroSection';
import CardSlider from '@/components/ui/CardSlider';
import block1 from '@/assets/svgs/partner/core-capabilities-block1.svg';
import block2 from '@/assets/svgs/partner/core-capabilities-block2.svg';
import block3 from '@/assets/svgs/partner/core-capabilities-block3.svg';
import CompareCard from '@/components/ui/CompareCard';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import core1 from '@/assets/svgs/partner/persistent-operational-data.svg';
import core2 from '@/assets/svgs/partner/secure-distributed-synchronization.svg';
import core3 from '@/assets/svgs/partner/operational-continuity.svg';
import { useTheme } from '@/utils/useTheme';
import HeroImage from '@/components/ui/HeroImage';
import FooterStatement from '@/components/ui/FooterStatement';
import { startp1, startp2, startup3, startup4, startup5 } from '@/assets/img/partners/inddex';
const kinnami = [
  {
    title: ' Enigma Net  ',
    usecase: [
      {
        subtitle: 'Infrastructure Backbone  ',
        data: [
          'Secure networking overlays  ',
          'Multi-path resilient connectivity  ',
          'Intelligent traffic management  ',
          'Edge infrastructure  ',
          'AI-ready environments  ',
          'Private cloud infrastructure  ',
          'Operational continuity systems  ',
        ],
      },
      {
        subtitle: 'Product References   ',
        data: [
          'ESC   ',
          'EDGE   ',
          'Nexus    ',
          'Connect  ',
          'SyncSphere  ',
          'Sentinel  ',
          'Venue  ',
        ],
      },
    ],
  },
  {
    title: ' Start-Up Agency',
    usecase: [
      {
        subtitle: 'Engagement & Commercial Layer   ',
        data: [
          'Secure Digital Hubs   ',
          'Progressive Web App delivery  ',
          'Biolinks    ',
          'QR/RFID activation   ',
          'Closed-loop engagement systems  ',
          'AI-enhanced engagement tooling    ',
          'Commercial growth frameworks   ',
        ],
      },
    ],
  },
];
const Core = [
  {
    id: 1,
    icon: core1,
    title: 'Disconnected infrastructure   ',
    description: `  `,
  },
  {
    id: 2,
    icon: core2,
    title: 'Loss of data ownership   ',
    description: `  `,
  },
  {
    id: 3,
    icon: core3,
    title: 'Unpredictable operational performance   ',
    description: '',
  },
  {
    id: 4,
    icon: core1,
    title: 'Fragmented user engagement systems     ',
    description: `  `,
  },
  {
    id: 5,
    icon: core2,
    title: 'App dependency & platform gatekeepers   ',
    description: `  `,
  },
  {
    id: 6,
    icon: core3,
    title: 'Poor visibility across distributed operations    ',
    description: '',
  },
];
const Core2 = [
  {
    id: 1,
    icon: block1,
    title: 'Smart Venues & Events   ',
    description: `Stadium-grade connectivity, fan engagement, mobile operations, ticketing, broadcast resilience.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Rural & Mobile Infrastructure Environments  ',
    description: `Deployable digital environments for rural operations, temporary infrastructure, emergency   
response, and remote operational continuity.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Public Sector & Civic Infrastructure   ',
    description:
      'Secure connected infrastructure for councils, transport, emergency services, and smart districts.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'AI & DeepTech Ecosystems   ',
    description: `Infrastructure environments designed for AI workloads, distributed compute, and scalable data   
movement.    `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Distributed Organisations   ',
    description:
      'Operational visibility and resilient connectivity across remote and multi-site environments.   ',
  },
];
const Core3 = [
  {
    id: 1,
    icon: core1,
    title: 'Resilient Mobile Connectivity    ',
    description: `  `,
  },
  {
    id: 2,
    icon: core2,
    title: 'Rapid Deployment Infrastructure   ',
    description: `  `,
  },
  {
    id: 3,
    icon: core3,
    title: 'Secure Engagement Access   ',
    description: '',
  },
  {
    id: 4,
    icon: core1,
    title: 'Closed-Loop Operational Environments    ',
    description: `  `,
  },
  {
    id: 5,
    icon: core2,
    title: 'Real-Time Operational Visibility    ',
    description: `  `,
  },
  {
    id: 6,
    icon: core3,
    title: 'Rural & Temporary Connectivity Support    ',
    description: '',
  },
];
const Core4 = [
  {
    id: 1,
    icon: core1,
    title: 'Operational Continuity',
    description: `  `,
  },
  {
    id: 2,
    icon: core2,
    title: 'Direct Digital Engagement  ',
    description: `  `,
  },
  {
    id: 3,
    icon: core3,
    title: 'Infrastructure Visibility     ',
    description: '',
  },
  {
    id: 4,
    icon: core1,
    title: 'Scalable Deployment Models   ',
    description: `  `,
  },
  {
    id: 5,
    icon: core2,
    title: 'AI-Ready Environments    ',
    description: `  `,
  },
  {
    id: 6,
    icon: core3,
    title: 'Reduced Platform Dependency     ',
    description: '',
  },
  {
    id: 7,
    icon: core2,
    title: 'Secure User Interaction   ',
    description: `  `,
  },
  {
    id: 8,
    icon: core3,
    title: 'Commercial Growth Support    ',
    description: '',
  },
];
const Strip = [
  'Festivals  ',
  'Sporting events    ',
  'Emergency response    ',
  'Rural deployments   ',
  'Mobile command centres  ',
  'Temporary public infrastructure  ',
];
const quote2 = [
  'reduce dependency    ',
  'improve operational resilience  ',
  'regain infrastructure visibility  ',
  'and maintain ownership of their digital environments ',
];
const problems = [
  'operational friction  ',
  'rising infrastructure costs',
  'security exposure',
  'user ownership loss',
  'unpredictable scalability',
];
const StartUpAgencyPage = () => {
  const { theme } = useTheme();
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Partners', href: '/partners' },
          { label: 'Start Up Agencies', href: '/partners/start-up-agency' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeroSection
        title={
          <>Resilient Infrastructure & Engagement Systems for Digitally Independent Environments </>
        }
        description={
          <HeaderTitle
            key={theme}
            title={
              <div className="fw-semibold text-black fs-4">
                The partnership between Enigma Net and Start-Up Agency combines secure
                infrastructure, frictionless digital engagement, and commercial acceleration into a
                single integrated capability for connected operational environments.
              </div>
            }
            variant={theme === 'dark' ? 'gold' : 'blue'}
          />
        }
        // buttons={[
        //   {
        //     label: 'Explore the joint solution  ',
        //     href: '/partners/kinnami-partnership/joint-solution',
        //     variant: 'blue',
        //   },
        // ]}
        features={[
          'Own your connectivity  ',
          'Own your data  ',
          'Remove operational friction  ',
          'Build resilient environments  ',
        ]}
      />
      <HeroImage img={startup5} isbg />
      <CaseStudyHighlight
        data={problems}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Modern Digital Environments Are Fragmented </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Most organisations now depend on disconnected platforms for connectivity, engagement,
            cloud infrastructure, payments, applications, and data management.
            <br />
            <br />
            As environments become more connected and data-intensive, this fragmentation creates:
          </>
        }
      />
      <CardSlider data={Core} />
      <HeroImage img={startp1} isbg />
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
      <HeroImage img={startp2} isbg />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for Connected Operational Environments</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Core2}
      />
      <HeroImage img={startup3} isbg />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Mobile Infrastructure Without Operational Compromise </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Venue Connect ROAM extends resilient digital infrastructure into temporary,
            rural, and mobile operational environments where traditional connectivity cannot
            reliably support modern digital operations.
          </>
        }
        data={Core3}
      />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Operational Examples </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Strip}
      />
      <HeroImage img={startup4} isbg />
      <CaseStudyHighlight
        data={quote2}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Ownership Is Becoming Strategic </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            As organisations become increasingly dependent on fragmented third-party ecosystems,
            control over connectivity, engagement, and proprietary data is becoming commercially
            critical.
            <br /> <br />
            This partnership is designed to help organisations:{' '}
          </>
        }
        quote={
          <>
            "Own your connectivity.
            <br />
            Own your data. <br />
            Own your digital future."
          </>
        }
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>What the Partnership Delivers </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Core4}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        description={`Whether supporting smart venues, public infrastructure, AI ecosystems, or distributed   
operations, the Enigma Net × Start-Up Agency partnership helps organisations create resilient   
digital environments designed for long-term operational control and scalability.  `}
        headline={<>Build a More Connected </>}
        headline2="Operational Environment"
        primaryButton={{
          label: 'Explore the Ecosystem   ',
          href: '#',
          variant: 'gold',
        }}
      />
      <FooterStatement
        text={
          <>
            <HeaderTitle
              className="text-center h2"
              key={theme}
              title={
                <>
                  Resilient infrastructure and engagement systems for digitally independent
                  environments.{' '}
                </>
              }
              variant={theme === 'dark' ? 'blue' : 'gold'}
            />
          </>
        }
      />
    </div>
  );
};

export default StartUpAgencyPage;
