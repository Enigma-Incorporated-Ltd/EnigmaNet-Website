import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import {defense} from '@/assets/img';
import features1 from '@/assets/svgs/solutions/defense-dualtechnology/pain point - Single points of failure create operational risk.svg';
import features2 from '@/assets/svgs/solutions/defense-dualtechnology/pain point - Mixed connectivity types behave inconsistently.svg';
import features3 from '@/assets/svgs/solutions/defense-dualtechnology/pain point - Critical traffic needs guaranteed priority and control.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/defense-dualtechnology/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/defense-dualtechnology/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/defense-dualtechnology/Core capabilities - block 3.svg';
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
    icon: block1,
    title: 'SD-WAN for defence networks',
    description: ` Bond and manage multiple connectivity paths so critical traffic can continue even when primary links degrade or fail. `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Private connectivity for unmanned systems ',
    description: ` Support dedicated, policy-controlled connectivity for command and control traffic where stability and prioritisation matter. `,
  },
  {
    id: 3,
    icon: block3,
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
 const slug = useSlug();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Defense Dualtechnology' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title=" Resilient, controlled connectivity for mission-critical operations"
        description="Enigma provides a secure, high-performance network layer for defence-adjacent and dual-use environments where failure, delay or loss of control is not acceptable. "
        image={defense}
        buttons={[
          {
            label: 'Discuss a Dual-Use Programme',
            href: '/get-in-touch',
            variant: 'blue',
          },
          {
            label: 'Speak to Enigma',
            href: '/get-in-touch',
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
              title="Modern operations depend on connectivity that conventional networks were not built to deliver"
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
              title="A commercial-scale technology layer ready for operational demands"
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
              title=" Applicable to a wide range of dual-use environments"
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
        headline=" Built for commercial scale. "
        headline2="Ready for operational demand"
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Talk About Your Programme ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Speak to Enigma ',
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

export default DefenseTechnology;
