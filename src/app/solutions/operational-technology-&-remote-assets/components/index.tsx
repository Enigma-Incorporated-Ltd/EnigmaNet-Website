import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/operation/operation.jpg';
import features1 from '@/assets/svgs/solutions/operational-technology/pain point - Link instability threatens safety and uptime.svg';
import features2 from '@/assets/svgs/solutions/operational-technology/pain point - Critical OT traffic competes with lower-priority traffic.svg';
import features3 from '@/assets/svgs/solutions/operational-technology/pain point - Public internet conditions undermine consistency.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/operational-technology/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/operational-technology/pain point - Public internet conditions undermine consistency.svg';
import block3 from '@/assets/svgs/solutions/operational-technology/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
const features = [
  {
    id: 1,
    icon: features1,
    title: 'Link instability threatens safety and uptime ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Critical OT traffic competes with lower-priority traffic ',
  },
  {
    id: 3,
    icon: features3,
    title: 'Public internet conditions undermine consistency ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Resilient connectivity across link types ',
    description: ` Aggregate and manage fixed wireless, cellular, satellite or other available paths to reduce single points of failure.`,
  },
  {
    id: 2,
    icon: block2,
    title: 'OT traffic prioritisation',
    description: `Apply policy-based prioritisation so safety-critical and latency-sensitive operational traffic is protected. `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Secure Cloud APN ',
    description:
      ' Use an encrypted private network layer to improve throughput consistency and reduce the effects of public internet instability.',
  },
];

const outcomes = [
  'Better resilience in harsh environments ',
  'Greater protection for OT traffic ',
  'Improved uptime and asset visibility ',
  'More secure remote connectivity ',
];
const RemoteAssets = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Operational Technology & Remote Assets' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Reliable connectivity for remote assets and operational technology."
        description="Enigma helps organisations keep remote sites, industrial systems and operational assets connected with resilient, policy-controlled networking across difficult environments. "
        image={heroImg}
        buttons={[
          {
            label: 'Talk about remote assets ',
            href: '/',
            variant: 'blue',
          },
          {
            label: 'Request a consultation ',
            href: '/',
            variant: 'gold',
          },
        ]}
        features={['Remote operations', 'Resilient links', 'OT-aware control']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Remote environments expose every weakness in the network."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="Operational sites often depend on unstable links, harsh conditions and limited support on the ground. But the systems running there still need secure, predictable connectivity for monitoring, control and communications."
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" A more controlled network for remote operations."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma adds a resilient overlay across available connectivity, helping remote sites
            maintain service continuity and giving critical operational traffic the treatment it
            needs. <br />
            <br />
            Instead of relying on fragile single links, teams get a more stable, visible and secure
            connectivity foundation for remote operations.
          </>
        }
        data={Core}
      />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Relevant to high-consequence remote environments."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Potential future proof themes: maritime and coastguard, offshore energy, remote
            infrastructure, emergency services.
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for remote operations"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline=" Connectivity that works where failure has consequences."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Start a conversation ',
          href: '/',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Talk to Enigma ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default RemoteAssets;
