import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
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
    title: 'Performance varies across distributed environments  ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Critical traffic is exposed to disruption and contention ',
  },
  {
    id: 3,
    icon: features3,
    title: 'Visibility is often too limited to see what is really happening ',
  },
];
const Core = [
  {
    id: 1,
    icon: network,
    title: 'More predictable performance',
    description: `Help critical traffic move more consistently across mixed and distributed environments.`,
  },
  {
    id: 2,
    icon: network,
    title: 'Stronger resilience',
    description: `Reduce the impact of unstable links, interruptions and changing network conditions. `,
  },
  {
    id: 3,
    icon: latency,
    title: 'Clearer visibility',
    description: `Give teams better insight into network behaviour, bottlenecks and service conditions. `,
  },
  {
    id: 4,
    icon: data,
    title: ' Overlay without replacement',
    description:
      'Improve outcomes across current infrastructure without a major rip-and-replace project. ',
  },
];
const quote = [
  'Better performance across existing infrastructure ',
  ' Improved resilience during network issues ',
  'Clearer operational visibility ',
  'Stronger support for critical services',
];
const outcomes = [
  ' Better support for data-intensive operations ',
  'Greater confidence in service performance ',
  'Reduced disruption across distributed environments ',
  'Stronger operational control ',
];
const fits = [
  ' Multi-site enterprise environments  ',
  'Cloud-connected infrastructure ',
  'Large file and data movement ',
  ' Distributed teams and users  ',
  'Critical business applications ',
  ' High-value operational traffic  ',
];
const SmarterInfrastructurePage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Smarter Infrastructure' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Make infrastructure perform the way your business needs it to."
        description={
          <div className="fs-5">
            Enigma improves how data moves across distributed environments, helping organisations
            gain more predictable performance, stronger resilience and clearer visibility without
            replacing the infrastructure they already have.
          </div>
        }
        // image={heroImg}
        buttons={[
          {
            label: 'Talk to Enigma ',
            href: '/',
            variant: 'blue',
          },
          {
            label: 'Book a network assessment ',
            href: '/',
            variant: 'gold',
          },
        ]}
        features={[' Predictable performance ', ' Built-in resilience', 'No rip-and-replace']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Modern infrastructure is often powerful, but not predictable."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="Many organisations already have good infrastructure in place, but still struggle with inconsistent performance, weak resilience and limited operational visibility. As data moves between users, sites, cloud, storage and compute, bottlenecks and instability can appear in ways that are hard to diagnose and even harder to control."
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Enigma improves how data moves across the environments you already have."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma adds intelligence across existing infrastructure to make network behaviour more
            controlled, resilient and visible. Instead of relying on best-effort movement of data,
            organisations can prioritise important traffic, reduce the impact of poor network
            conditions and support more consistent service delivery across distributed operations.
            <br />
            <br />
            <strong className="fst-italic">
              This means better outcomes without forcing a full replacement of the underlying
              environment.
            </strong>
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" A performance and resilience layer across existing infrastructure."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma works across customer environments to improve traffic handling, protect critical
            workloads and provide clearer operational insight. It helps organisations make better
            use of existing connectivity, sites, cloud environments and infrastructure investments
            by improving behaviour in motion rather than requiring a rebuild underneath.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" What the solution delivers"
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
              title="Why organisations need a better way to manage data in motion"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            As environments become more distributed, performance problems are no longer just about
            access or bandwidth. They are often about how well data is handled across the path. When
            that movement is inconsistent, organisations feel it in slower operations, disrupted
            workflows, poor user experience and reduced confidence in critical services.
          </>
        }
      />
      <CaseStudyHighlight
        data={fits}
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Built for environments where performance and resilience matter"
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
              title=" Designed to improve real-world infrastructure outcomes"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Use this section for a proof example showing how Enigma improved performance, resilience
            or visibility across an existing customer environment.
          </>
        }
        quote={<>"Reserved for approved customer quote "</>}
      />

      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Improve performance, resilience and visibility without"
        headline2=" rebuilding everything."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: ' Talk to Enigma ',
          href: '/',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Book a network assessment ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default SmarterInfrastructurePage;
