import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/defense/defense.jpg';
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
    title: 'Single points of failure create operational risk ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Mixed connectivity types behave inconsistently ',
  },
  {
    id: 3,
    icon: features3,
    title: 'Critical traffic needs guaranteed priority and control ',
  },
];
const Core = [
  {
    id: 1,
    icon: network,
    title: 'SD-WAN for defence networks',
    description: ` Bond and manage multiple connectivity paths so critical traffic can continue even when primary links degrade or fail. `,
  },
  {
    id: 2,
    icon: latency,
    title: 'Private connectivity for unmanned systems ',
    description: ` Support dedicated, policy-controlled connectivity for command and control traffic where stability and prioritisation matter. `,
  },
  {
    id: 3,
    icon: data,
    title: '  Operational visibility and control',
    description:
      'Give teams real-time oversight of network health and performance across complex operational environments.',
  },
];
// const quote = [
//   'Predictable compute performance',
//   'Transparent infrastructure costs',
//   ' Improved responsiveness for users  ',
//   'Flexibility for an evolving product ',
// ];
const outcomes = [
  'Greater resilience under pressure ',
  'Better protection for critical traffic ',
  'More control across mixed connectivity ',
  'Stronger operational confidence ',
];
const DefenseTechnology = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Defense Dualtechnology' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title=" Resilient, controlled connectivity for mission-critical operations."
        description="Enigma provides a secure, high-performance network layer for defence-adjacent and dual-use environments where failure, delay or loss of control is not acceptable. "
        image={heroImg}
        buttons={[
          {
            label: 'Discuss a dual-use programme ',
            href: '/',
            variant: 'blue',
          },
          {
            label: 'Speak to Enigma',
            href: '/',
            variant: 'gold',
          },
        ]}
        features={['Secure by design', 'Multi-link resilience', 'Operational contro']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Modern operations depend on connectivity that conventional networks were not built to deliver."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="From base operations and remote estates to unmanned systems and field connectivity, defence-related environments need secure, resilient communications across mixed link types and difficult conditions. "
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="A commercial-scale technology layer ready for operational demands."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma combines intelligent path management, secure overlay networking and real-time
            control to improve resilience across fixed, cellular, satellite and specialist links.{' '}
            <br />
            <br />
            The result is a more dependable communications layer for demanding environments, without
            relying on fragile single-path architectures.
          </>
        }
        data={Core}
      />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Applicable to a wide range of dual-use environments."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            This section can later feature a defence-adjacent or security use case covering estate
            connectivity, field operations or unmanned systems support.
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for defence and security programmes "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline=" Built for commercial scale. Ready for operational demand."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Talk about your programme ',
          href: '/',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Speak to Enigma ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default DefenseTechnology;
