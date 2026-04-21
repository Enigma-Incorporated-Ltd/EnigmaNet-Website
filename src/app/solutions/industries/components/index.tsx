import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/industries/Organisational_operation.png';
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
    title: ' Critical systems cannot tolerate disruption',
  },
  {
    id: 2,
    icon: features2,
    title: ' Limited visibility slows response ',
  },
  {
    id: 3,
    icon: features3,
    title: ' Legacy or fragmented infrastructure creates risk ',
  },
];
const Core = [
  {
    id: 1,
    icon: network,
    title: 'Protecting critical systems',
    description: `Ensure the most important services and operational traffic continue to perform when demand rises or conditions become unstable.`,
  },
  {
    id: 2,
    icon: latency,
    title: 'Connecting distributed sites or assets',
    description: ` Improve consistency and resilience across remote sites, field locations, branches or operational environments.`,
  },
  {
    id: 3,
    icon: data,
    title: '  Improving visibility and control',
    description:
      'Give operational and IT teams a clearer live view of performance so issues can be identified and managed faster.',
  },
  {
    id: 4,
    icon: data,
    title: 'Maintaining continuity during failure',
    description:
      'Reduce disruption by automatically handling degraded or failed connections more effectively.',
  },
];
const relevent = [
  {
    id: 1,
    icon: network,
    title: 'Traffic prioritisation',
    description: ` Protect critical services by ensuring the most important traffic gets the treatment it needs.`,
  },
  {
    id: 2,
    icon: latency,
    title: ' Resilience and failover',
    description: ` Maintain service continuity by intelligently steering traffic and reducing the impact of degraded or failed links.`,
  },
  {
    id: 3,
    icon: data,
    title: ' Real-time visibility',
    description:
      'Give teams live performance insight across the environment so they can respond faster and manage with confidence.',
  },
 
];
const quote = [
  'Improved resilience across critical operations',
  ' Better visibility into network performance ',
  'Reduced disruption during high-pressure periods ',
  ' Greater confidence in infrastructure performance ',
];
const outcomes = [
  ' More reliable operations ',
  'Better protection for critical systems ',
  'Faster response to performance issues ',
  'Greater confidence in infrastructure ',
];
const IndustriesData = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Industries' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Connectivity and infrastructure for demanding industry environments."
        description="Enigma helps organisations improve resilience, protect critical systems and gain visibility across the infrastructure their operations depend on."
        image={heroImg}
        buttons={[
          {
            label: 'Talk to Enigma ',
            href: '/',
            variant: 'blue',
          },
          {
            label: 'Book a consultation',
            href: '/',
            variant: 'gold',
          },
        ]}
        features={['Protect operations ', 'Improve resilience', 'Gain control']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Why connectivity matters differently in this environment."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description=" In some industries, connectivity is not just about access. It affects operational continuity, service delivery, responsiveness, security and the ability to perform under pressure."
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="A more controlled foundation for operational performance."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma adds an intelligent performance and control layer across existing connectivity,
            helping organisations improve resilience, prioritise critical traffic and gain better
            visibility into how the network performs in the real world. <br />
            <br />
            Instead of relying on infrastructure that behaves inconsistently under pressure, teams
            get a foundation that is more predictable, more resilient and easier to manage.{' '}
          </>
        }
        data={Core}
      />
      <CardSlider data={relevent} />
      <CaseStudyHighlight
        data={quote}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Proven in relevant environments."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Use a sector-relevant case study, deployment example or proof block to show how Enigma
            improves resilience, visibility and operational performance in demanding real-world
            settings.
          </>
        }
        quote={<>" Reserved for approved client quote"</>}
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for industry teams"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="A stronger infrastructure foundation for demanding environments."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Talk to Enigma ',
          href: '/',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Book a consultation ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default IndustriesData;
