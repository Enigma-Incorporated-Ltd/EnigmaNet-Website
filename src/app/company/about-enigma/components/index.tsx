import { Culture } from '@/assets/img/company';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CardSlider from '@/components/ui/CardSlider';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroImage from '@/components/ui/HeroImage';
import HeroSection from '@/components/ui/HeroSection';
import Br from '@/components/ui/NewLine';
import block1 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 3.svg';
import { useTheme } from '@/utils/useTheme';
import WorkSteps from '@/components/ui/workSteps';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'AI data growth  ',
    description: `Modern AI and data-heavy workloads depend on large datasets moving between cloud,   
edge, platforms, collaborators and users.  `,
  },
  {
    id: 2,
    icon: block2,
    title: ' Network bottlenecks  ',
    description: `Existing routes, protocols and public internet paths can limit performance, reliability and   
predictability.   `,
  },
  {
    id: 3,
    icon: block3,
    title: ' Cost and delay  ',
    description:
      'Slow or unreliable data movement can increase operational friction, delay delivery and contribute to rising infrastructure costs.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Resilience risk  ',
    description: `When teams, sites and systems are distributed, network performance becomes a   
business issue, not just an IT one.  `,
  },
];
const Core2 = [
  {
    id: 1,
    title: 'Enigma Nexus  ',
    label: ' Universal Interface  ',
    description: `A single operational interface for Command, Grid, SyncSphere, Hub and Ledger.  `,
  },
  {
    id: 2,
    label: ' Core Engine  ',
    title: 'APN Core  ',
    description: `Software-defined performance overlay for QoS, RAIN, bonding, FEC, encryption and   
intelligent traffic handling.  `,
  },
  {
    id: 3,
    label: 'Deployment Models  ',
    title: 'Enigma Connect · Enigma EDGE · ESC – Secure Networking  ',
    description: ' Self-serve, managed edge and enterprise overlay deployments.   ',
  },
  {
    id: 4,
    label: ' AI Operations  ',
    title: 'Enigma Sentinel  ',
    description: `Monitoring, remediation and AI-supported operational intelligence.   `,
  },
  {
    id: 5,
    label: 'Integration  ',
    title: 'AND/+  ',
    description: `Binary and container integration for carriers, OEMs and platforms.`,
  },
];
const Core3 = [
  {
    id: 1,
    title: 'Works across existing infrastructure   ',
    description: `Designed to operate across fibre, broadband, 5G, satellite, cloud and mixed   
environments.  `,
  },
  {
    id: 2,
    title: ' No application rewrite required  ',
    description: ` Improves transport performance without forcing teams to modify their applications.   `,
  },
  {
    id: 3,
    title: 'Cloud and medium agnostic  ',
    description: 'Not locked to one provider, network type or deployment model.  ',
  },
  {
    id: 4,
    title: 'Security built into the transport layer  ',
    description: ` Secure data movement, controlled access and encrypted pathways are central to the   
platform approach.  `,
  },
  {
    id: 5,
    title: ' Designed for distributed environments  ',
    description:
      'Supports users, sites, cloud services, edge locations and data-heavy workloads from a shared infrastructure foundation.  ',
  },
  {
    id: 6,
    title: 'Operational visibility   ',
    description: `Helps teams understand infrastructure behaviour, performance and service conditions   
more clearly. `,
  },
];
const Core4 = [
  {
    id: 1,
    icon: block1,
    title: 'AI and data workloads   ',
    description: `Supporting the movement of large datasets and workloads across cloud, edge and   
infrastructure environments.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Distributed organisations  ',
    description: `Helping teams, sites and systems stay connected across mixed network conditions.  `,
  },
  {
    id: 3,
    icon: block3,
    title: ' Cloud and infrastructure teams  ',
    description:
      'Improving visibility, control and performance across complex infrastructure environments.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Remote and edge operations  ',
    description: ` Supporting reliable data movement where fixed infrastructure is limited, variable or   
difficult to control. `,
  },
];

const AboutEnigmaPage = () => {
  const { theme } = useTheme();

    const steps = [
      {
        n: 1,
        title: (
          <>
            {' '}
            <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>
              Network performance challenge
            </span>
          </>
        ),
        lead: 'Identifying network inefficiency as a limiting factor for modern digital operations.   ',
      },
      {
        n: 2,
        title: (
          <>
            <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>
              Core technology foundation
            </span>
          </>
        ),
        lead: ' Developing a software-defined performance overlay to improve how data moves.   ',
      },
      {
        n: 3,
        title: (
          <>
            <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>
              Secure deployment models{' '}
            </span>
          </>
        ),
        lead: 'Packaging the technology for users, sites, enterprises, cloud and edge environments.  ',
      },
      {
        n: 4,
        title: (
          <>
            <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>
              Infrastructure platform{' '}
            </span>
          </>
        ),
        lead: ' Expanding into secure networking, cloud infrastructure, operational visibility and AI-ready data movement.   ',
      },
     
    ];
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Careers', href: '/company/careers' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            <h4 className="fw-bold   h2 text-light-blue text-center">About Enigma </h4>
            Building the infrastructure layer <Br isDesktop /> for predictable data movement.
          </>
        }
        description={
          <>
            Enigma Net helps organisations move, protect and manage large data sets across AI,
            cloud, edge and distributed environments.
            <br />
            <br />
            Our technology is designed for a world where network performance can no longer be the
            bottleneck. We help businesses move data faster, more reliably and more predictably
            across the infrastructure layer.
          </>
        }
        // image={TrustCenter}
        buttons={[
          {
            label: 'Talk to us',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        eyebrow="Company  "
      />
      <HeroImage img={Culture} />
      <CardSlider
        sectionTitle="Who we are  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  An infrastructure company built
                  <Br isDesktop /> for data-intensive environments
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net is an advanced connectivity and infrastructure company delivering secure
            networking, scalable hosting and deterministic infrastructure for data-intensive
            environments.
            <br />
            <br />
            We build and operate solutions that help businesses improve the way data moves, performs
            and stays protected across networks, cloud environments and distributed sites.
            <br />
            <br />
            Our products span compute, GPU, storage, networking and managed services, designed to
            work as one controlled, high-performance system.
          </>
        }
      />
      <CardSlider
        sectionTitle="Why Enigma exists"
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Data is growing faster than the networks built to move it</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            AI, cloud platforms, remote operations and data-heavy applications are creating new
            pressure on infrastructure.
           
            Moving data is no longer a background task. It directly affects performance, cost,
            resilience, customer experience and operational control.
            <br />
            <br />
            Traditional internet infrastructure was not designed for today’s scale, speed or
            reliability demands. Large transfers can take too long. Unreliable routes create delays.
            Cloud costs rise. Teams build workarounds. Critical systems become harder to manage.
            <br />
            <br />
            Enigma Net was created to address this infrastructure gap.
          </>
        }
        data={Core}
      />
      <WorkSteps
        sectionTitle="Technology evolution  "
        steps={steps}
        title={
          <>
            From network performance challenge <Br isDesktop /> to infrastructure platform.
          </>
        }
        description={
          <>
            Enigma Net’s technology was developed from a clear infrastructure problem: networks were
            becoming the weak link in increasingly distributed, data-intensive environments.
            <br />
            <br />
            The company’s work has evolved from solving network performance and reliability
            challenges into a broader infrastructure platform supporting secure networking, cloud
            infrastructure, edge deployment, data movement and operational visibility.
          </>
        }
      />
      <CardSlider
        sectionTitle="What we build  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>One core technology. Multiple ways to deploy it</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            At the centre of Enigma Net is APN Core, a software-defined performance overlay that
            improves how data moves across existing infrastructure.
            <br />
            <br />
            All Enigma Net products share the same core technology. They differ by packaging, policy
            and commercial model.
          </>
        }
        data={Core2}
        showLabel={true}
      />
      <CardSlider
        sectionTitle="What makes Enigma different  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Acceleration, security and resilience in one controlled layer</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Core3}
      />
      <CardSlider
        sectionTitle="Real-world use   "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for environments where data movement matters</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net supports organisations working with distributed teams, cloud infrastructure,
            AI workloads, large datasets, remote operations and performance-sensitive services.
            <br />
            <br />
            The technology is designed for situations where speed, reliability, security and
            infrastructure control directly affect business outcomes.
          </>
        }
        data={Core4}
      />
      <CaseStudyHighlight
        sectionTitle="Engineering heritage   "
        data={[
          'Network and infrastructure experience  ',
          'Software and platform development  ',
          'Deployment and technical operations  ',
          'Product and commercial strategy  ',
          'Security and operational awareness  ',
          'Customer-focused delivery  ',
        ]}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built by people who understand networks, <Br isDesktop /> infrastructure and delivery</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net is shaped by network, security, software, deployment, product and
            infrastructure experience.
           
            The company brings together technical and commercial expertise across internet
            infrastructure, enterprise networking, software development, cloud architecture,
            deployment, finance, growth and communications.
            <br />
            <br />
            This multidisciplinary approach helps Enigma Net build technology that is technically
            credible, commercially relevant and designed for real-world deployment.
          </>
        }
      />
      <CaseStudyHighlight
        sectionTitle="Where we are heading   "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Towards a more predictable infrastructure <Br isDesktop /> layer for AI, cloud and edge</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            As organisations become more dependent on AI, cloud services, distributed teams and
            data-heavy applications, infrastructure performance will become increasingly important.
            <br />
            <br />
            Enigma Net is focused on helping organisations move beyond fragmented connectivity and
            uncontrolled data movement towards secure, scalable and more predictable infrastructure.
            <br />
            <br />
            Our aim is to help make data movement faster, safer and easier to manage across the
            environments modern businesses depend on.
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={<>Want to understand</>}
        headline2=" what Enigma Net is building?"
        description="  Explore our products, meet the leadership team or speak to us about secure networking, cloud   
infrastructure and predictable data movement.  "
        primaryButton={{
          label: 'Meet the leadership team',
          href: '/company/leadership',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default AboutEnigmaPage;
