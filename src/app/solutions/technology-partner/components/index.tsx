import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/Technology/tech.jpg';
import features1 from '@/assets/svgs/solutions/technology-partner/pain card - Customer environments introduce unpredictable performance.svg';
import features2 from '@/assets/svgs/solutions/technology-partner/pain point - Connectivity issues reduce platform value.svg';
import features3 from '@/assets/svgs/solutions/technology-partner/pain point - Limited visibility makes problems harder to diagnose.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/technology-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/technology-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/technology-partner/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
import NextPageSlider from '@/components/ui/NextPageSlider';
import { solutions } from '@/utils/solutions';
import { useSlug } from '@/utils/useSlug';
const features = [
  {
    id: 1,
    icon: features1,
    title: 'Customer environments introduce unpredictable performance ',
  },
  {
    id: 2,
    icon: features2,
    title: ' Connectivity issues reduce platform value  ',
  },
  {
    id: 3,
    icon: features3,
    title: 'Limited visibility makes problems harder to diagnose ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Performance support',
    description: `Improve how applications, platforms and services behave across customer environments with better traffic handling and more consistent connectivity.`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Resilience and continuity',
    description: `Reduce service disruption by improving failover behaviour and protecting critical traffic when underlying connections degrade.`,
  },
  {
    id: 3,
    icon: block3,
    title: 'Visibility and insight',
    description:
      'Give teams clearer visibility into network conditions affecting platform performance, making issues easier to identify and explain.',
  },
];
const quote = [
  'Better real-world platform performance ',
  ' Reduced operational friction ',
  ' Improved visibility into customer environments ',
  'Stronger overall solution value ',
];
const outcomes = [
  'Better platform performance in the field ',
  'More consistent customer experience ',
  ' Stronger solution value ',
  'Greater operational confidence ',
];
const TechnologiesPage = () => {
  const { theme } = useTheme();
  const slug = useSlug();

  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Technology Partners' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Make your technology perform better in the real world"
        description=" Enigma helps technology partners improve resilience, protect critical traffic and gain better visibility across the infrastructure their platforms depend on. "
        image={heroImg}
        buttons={[
          {
            label: 'Talk to Enigma ',
            href: '/get-in-touch',
            variant: 'blue',
          },
          {
            label: 'Explore Technology Partnerships',
            href: '/get-in-touch',
            variant: 'gold',
          },
        ]}
        features={['Improve performance ', 'Reduce friction', ' Extend value']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Great technology can still be limited by the environment it runs in"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="Many platforms depend on customer networks, distributed infrastructure or variable connectivity conditions they do not control. When performance drops, the platform experience suffers — even when the product itself is not the problem. "
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" A stronger performance layer around your platform"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma helps technology partners improve how their platform performs across real-world
            environments by adding resilience, traffic control and visibility over existing
            connectivity. <br />
            <br />
            Instead of leaving customer experience exposed to unpredictable network behaviour,
            partners can support a more reliable, more consistent and more controllable environment
            around the technology they deliver.
          </>
        }
        data={Core}
      />
      <CaseStudyHighlight
        data={quote}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Built to strengthen technology delivery in live environments"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Use this section for a platform, integration or solution-partner example showing how
            Enigma improved performance, resilience or operational clarity around a technology
            deployment.
          </>
        }
        quote={
          <>
            "When platforms, infrastructure and data movement work together, customers get more than
            separate tools they get a better operating environment."
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for technology partners"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Strengthen the environment your "
        headline2="technology depends on"
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Talk to Enigma ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Explore Technology Partnerships ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
      <NextPageSlider
        buttonText="All Solutions"
        buttonLink="/solutions"
        title="Related Solutions"
        basePath="/solutions"
        data={solutions}
        currentSlug={slug as string}
      />
    </div>
  );
};

export default TechnologiesPage;
