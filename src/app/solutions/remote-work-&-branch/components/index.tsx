import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import {remoteWork} from '@/assets/img';
import features1 from '@/assets/svgs/solutions/remote-work-&-branch/Pain point - Calls and apps fail when connectivity dips.svg';
import features2 from '@/assets/svgs/solutions/remote-work-&-branch/Pain point - Branches are hard to manage consistently.svg';
import features3 from '@/assets/svgs/solutions/remote-work-&-branch/Pain point - IT teams spend time reacting instead of improving.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/remote-work-&-branch/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/remote-work-&-branch/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/remote-work-&-branch/Core capabilities - block 3.svg';

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
    title: 'Calls and apps fail when connectivity dips ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Branches are hard to manage consistently ',
  },
  {
    id: 3,
    icon: features3,
    title: 'IT teams spend time reacting instead of improving ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'SD-WAN for multi-site and remote environments',
    description: `Manage multiple paths intelligently, prioritise key applications and improve consistency across branches and remote workers. `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Intelligent failover',
    description: ` Keep services running by automatically shifting traffic to backup links when primary circuits degrade or fail.`,
  },
  {
    id: 3,
    icon: block3,
    title: ' Visibility and security',
    description:
      ' Use encrypted, policy-controlled connectivity with real-time performance insight across the whole estate.',
  },
];
const quote = [
  'Better app and voice performance ',
  'Less downtime across sites ',
  'Improved control for IT ',
  'Reduced operational friction ',
];
const outcomes = [
  'More reliable user experience everywhere ',
  'Faster recovery from outages',
  'Easier central management ',
  'Stronger network consistency and control ',
];
const WorkBranch = () => {
  const { theme } = useTheme();
 const slug = useSlug();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Remote Work & Branch' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Give every site and every user a more reliable connection to work from"
        description="Enigma helps businesses improve performance across branches, remote teams and distributed operations with centralised visibility, built-in resilience and better control over critical traffic.  "
        image={remoteWork}
        buttons={[
          {
            label: 'Assess Your Branch Network ',
            href: '#',
            variant: 'blue',
          },
          {
            label: 'Talk to Enigma ',
            href: '/get-in-touch',
            variant: 'gold',
          },
        ]}
        features={['Distributed workforce ', 'Centralised control', 'Built-in resilience']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Most business networks were not designed for how work happens now"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="Hybrid work, branch offices and cloud applications have exposed the limits of traditional network setups. VPN sprawl, single-link dependence and inconsistent branch performance create operational drag that quietly costs the business every day.  "
      />

      <CardSlider data={Core} />
      <CaseStudyHighlight
        data={quote}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Designed for distributed operations"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>Use future case study here for a branch, retail, field or hybrid-work deployment.</>
        }
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for distributed businesses"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Distributed workforce. Centralised control.  "
        headline2="Less complexity"
        description="   "
        primaryButton={{
          label: 'Request an Assessment ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Talk to Enigma ',
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

export default WorkBranch;
