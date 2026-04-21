import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/ProvidersPartners/ProvidersPartners.jpg';
import features1 from '@/assets/svgs/storage durability.svg';
import features2 from '@/assets/svgs/laptop.svg';
import features3 from '@/assets/svgs/team.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import network from '@/assets/svgs/icon payment.svg';
import latency from '@/assets/svgs/playbook.svg';
import data from '@/assets/svgs/Analyze long-form video content.svg';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
const features = [
  {
    id: 1,
    icon: features1,
    title: 'Basic connectivity is harder to differentiate ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Performance issues damage customer confidence ',
  },
  {
    id: 3,
    icon: features3,
    title: 'Adding value without adding complexity is difficult ',
  },
];
const Core = [
  {
    id: 1,
    icon: network,
    title: ' Service enhancement ',
    description: ` Add resilience, prioritisation and better real-world performance on top of existing access services.`,
  },
  {
    id: 2,
    icon: latency,
    title: 'Customer visibility',
    description: `Give customers and internal teams clearer insight into how the network is performing across sites and services.`,
  },
  {
    id: 3,
    icon: data,
    title: 'Operational resilience',
    description:
      'Reduce disruption by improving failover behaviour and protecting critical traffic when conditions change.',
  },
];
const quote = [
  'Stronger service differentiation',
  'Better customer performance outcomes ',
  'Improved visibility across the environment ',
  'Greater value from existing connectivity ',
];
const outcomes = [
  ' More differentiated service offers ',
  ' Better customer retention potential ',
  'Stronger operational confidence ',
  ' Greater value per customer environment ',
];
const ProvidersPartners = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Service Providers & Partners' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Help your customers get more from the networks they already have."
        description="Enigma enables service providers and partners to deliver stronger performance, built-in resilience and better visibility across customer connectivity environments without adding unnecessary complexity."
        image={heroImg}
        buttons={[
          {
            label: ' Talk to Enigma ',
            href: '/',
            variant: 'blue',
          },
          {
            label: ' Explore partner opportunities ',
            href: '/',
            variant: 'gold',
          },
        ]}
        features={['Add value', 'Improve performance', ' Strengthen retention']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Customers expect more than basic connectivity."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description=" For service providers and partners, the challenge is no longer just delivering access. Customers increasingly expect resilience, visibility, prioritisation and a better real-world experience across the services they already buy."
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" A stronger service layer on top of existing connectivity."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma gives service providers and partners a way to enhance customer environments with
            intelligent performance management, resilience and visibility across the network. <br />
            <br />
            Instead of competing on access alone, partners can offer a more valuable, more
            controllable and more differentiated service experience.
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
              title="Built to support higher-value connectivity services."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Use this section for a partner, multi-site deployment or service-led customer example
            showing how Enigma helped improve customer experience, resilience or visibility.
          </>
        }
        quote={<>" Reserved for approved partner or customer quote"</>}
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for service provider partners"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline=" Deliver more than connectivity alone."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Talk to Enigma ',
          href: '/',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Explore partner opportunities ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default ProvidersPartners;
