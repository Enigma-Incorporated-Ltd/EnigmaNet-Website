import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import features1 from '@/assets/svgs/ai-infrastructure/pain cards - Compute, storage and data.svg';
import features2 from '@/assets/svgs/ai-infrastructure/pain cards - AI performance suffers.svg';
import features3 from '@/assets/svgs/ai-infrastructure/pain cards - team.svg';
import block1 from '@/assets/svgs/ai-infrastructure/section 5 - block 1.svg';
import block2 from '@/assets/svgs/ai-infrastructure/section 5 - block 2.svg';
import block3 from '@/assets/svgs/ai-infrastructure/section 5 - block 3.svg';
import block4 from '@/assets/svgs/ai-infrastructure/section 5 - block 4.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
import HeroImage from '@/components/ui/HeroImage';
import heroImg from '@/assets/img/home/Landing Page_Complete_AI_Infrastructure_wireframe diagram.png';
const features = [
  {
    id: 1,
    icon: features1,
    title: 'Compute, storage and data movement are often managed separately',
  },
  {
    id: 2,
    icon: features2,
    title: 'AI performance suffers when data cannot move predictably to where it is needed',
  },
  {
    id: 3,
    icon: features3,
    title:
      ' Teams end up with infrastructure that is technically available but operationally inefficient ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: ' Controlled data movement',
    description: `Move training data, models, files and outputs more predictably across distributed infrastructure. `,
  },
  {
    id: 2,
    icon: block2,
    title: ' Compute aligned to workload needs',
    description: `Support GPU and compute environments as part of a wider performance system, not as isolated capacity. `,
  },
  {
    id: 3,
    icon: block3,
    title: ' Storage that fits the operational flow',
    description: `Connect storage into the environment in a way that supports speed, accessibility and control.  `,
  },
  {
    id: 4,
    icon: block4,
    title: ' System-wide performance thinking',
    description:
      'Treat AI infrastructure as an integrated environment where movement, resilience and visibility all matter. ',
  },
];
const quote = [
  'Better AI infrastructure performance ',
  ' More joined-up workload delivery ',
  'Improved movement of large datasets ',
  'Stronger control across the environment',
];
const outcomes = [
  ' Better alignment between infrastructure and workload behaviour ',
  'More predictable performance across the AI environment ',
  'Stronger operational confidence ',
  'Less friction between storage, movement and compute ',
];
const outcomes2 = [
  'AI infrastructure designed around actual workload needs ',
  'Better performance across the full environment ',
  ' More efficient movement between storage and compute ',
  ' Greater confidence in scaling AI operations ',
];
const fits = [
  'AI model training environments ',
  'GPU-backed workloads ',
  'Large dataset movement ',
  ' Distributed AI teams ',
  'Hybrid cloud AI operations ',
  ' Data-intensive research and development ',
];
const CompleteAi = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Complete AI infrastructure' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Complete AI Infrastructure <br />
            Designed around your Needs
          </>
        }
        description={
          <div className="fs-5">
            Data movement, compute and storage working as one controlled, <br />
            high-performance system.
          </div>
        }
        // image={heroImg}
        buttons={[
          {
            label: 'Talk to Enigma ',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
          {
            label: 'Explore AI Infrastructure ',
            href: '#',
            variant: 'gold',
          },
        ]}
        features={[
          'Built for AI workloads',
          'Performance in motion',
          'Designed around real-world needs ',
        ]}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  AI infrastructure breaks down when the system <br /> is treated in pieces
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="Many AI environments are built in fragments. Compute is sourced in one place, storage in another, and data movement is left to best-effort network behaviour. The result is an environment that may look powerful on paper, but behaves inconsistently under real workload pressure. "
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="A more complete AI infrastructure model. "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma brings together the parts of AI infrastructure that are too often treated
            separately. By improving how data moves between users, storage and compute, and by
            shaping infrastructure around workload behaviour, Enigma helps create a more joined-up,
            high-performance environment.
            <br />
            <br />
            Instead of stitching together disconnected components, teams gain a system designed to
            behave more consistently as one.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Built around the workload, not around infrastructure silos."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Complete AI infrastructure means thinking beyond isolated hosting, storage or
            connectivity decisions. It means creating an environment where data movement, compute
            access and storage architecture support each other — so the workload performs the way
            the business expects.
            <br />
            <br />
            <strong className="fst-italic">
              Because AI performance depends on how well the whole system works together.
            </strong>
          </>
        }
      />
      <HeroImage img={heroImg} alt="Hero Image" />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What the platform brings together"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Core}
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Why AI infrastructure needs to be designed as a system "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            AI workloads do not depend on compute alone. They depend on the consistent interaction
            between data, storage, networks and processing environments. When those parts are
            fragmented, performance becomes harder to trust, scaling becomes more difficult, and
            costs become less predictable.
            <br />
            <br />A more complete infrastructure model helps organisations build AI environments
            that are easier to operate, easier to scale and better aligned to real business
            outcomes.
          </>
        }
      />
      <CaseStudyHighlight
        data={fits}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Built for AI environments that need more than isolated hosting"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CaseStudyHighlight
        data={quote}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  {' '}
                  Designed for AI environments where performance <br /> depends on the whole
                  system{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Use this section for an AI infrastructure example showing how Enigma improved
            performance by addressing the interaction between data movement, compute and storage
            rather than treating them as separate issues.
          </>
        }
        quote={
          <>
            " Reserved for approved customer quote focused on system performance, data movement or
            AI workload reliability"
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes2}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means in practice "
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
            Build AI infrastructure as one controlled system, <br />
          </>
        }
        headline2=" not a collection of separate parts."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: ' Talk to Enigma ',
          href: '/get-in-touch',
          variant: 'gold',
          disableSentenceCase: true,
        }}
        secondaryButton={{
          label: 'Explore AI Infrastructure ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default CompleteAi;
