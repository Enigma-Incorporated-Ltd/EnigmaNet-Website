import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/enterprise/enterprise.jpg';
import features1 from '@/assets/svgs/solutions/enterprise/pain card - Peak demand exposes weak points.svg';
import features2 from '@/assets/svgs/solutions/enterprise/pain card - Critical systems compete with non-critical traffic.svg';
import features3 from '@/assets/svgs/solutions/enterprise/pain card - IT teams spend too much time firefighting.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
const features = [
  {
    id: 1,
    icon: features1,
    title: 'Peak demand exposes weak points ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Critical systems compete with non-critical traffic ',
  },
  {
    id: 3,
    icon: features3,
    title: 'IT teams spend too much time firefighting ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Traffic prioritisation',
    description: `Protect payment systems, operational platforms and other business-critical services from congestion and match-day or peak-time demand.`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Resilience and failover',
    description: `Maintain service continuity by intelligently steering traffic and reducing the impact of degraded or failed connections.`,
  },
  {
    id: 3,
    icon: block3,
    title: ' Real-time visibility',
    description:
      'Give IT and operations teams a live view of network performance so issues can be identified and managed faster.',
  },
];
const quote = [
  'Up to 40,000 concurrent users supported ',
  'Critical EPOS and access traffic protected',
  'Better control of match-day performance ',
  'New digital revenue opportunities enabled ',
];
const outcomes = [
  'More reliable customer and site experience  ',
  'Better protection for critical traffic ',
  'Lower operational disruption ',
  'Greater confidence in network performance  ',
];
const EnterpriseData = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Enterprise' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Make enterprise connectivity perform the way the business needs it to"
        description="Enigma helps enterprises improve resilience, protect critical traffic and gain visibility across the network without replacing existing infrastructure."
        image={heroImg}
        buttons={[
          {
            label: 'Get a Network Assessment',
            href: '/get-in-touch',
            variant: 'blue',
          },
          {
            label: 'See Enterprise Use Cases',
            href: '#',
            variant: 'gold',
          },
        ]}
        features={['Protect revenue', 'Improve resilience', 'Gain control']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="When the network underperforms, the business feels it"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="Dropped connections, lagging payment systems and inconsistent site performance do more than frustrate IT. They affect revenue, customer experience and operational confidence."
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="A better performing network, built on what you already have"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma adds an intelligent performance and control layer across your existing
            connectivity. That means critical traffic can be prioritised, failures can be handled
            automatically and network behaviour becomes visible in real time. <br />
            <br />
            Instead of living with inconsistent performance, enterprise teams get a network that is
            more predictable, more resilient and easier to manage.{' '}
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
              title=" Proven in high-demand environments"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            <strong>Sheffield Wednesday FC, Hillsborough Stadium</strong> Enigma helped transform a
            major stadium into a connected, revenue-supporting environment by protecting critical
            systems, supporting high user volumes and improving operational visibility.
          </>
        }
        quote={<>"Reserved for implementation quote"</>}
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for enterprise teams"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline=" More revenue. Lower risk. "
        headline2="Better control"
        description="Get a free network performance assessment "
        primaryButton={{
          label: 'Get an Assessment',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Talk to Enigma  ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default EnterpriseData;
