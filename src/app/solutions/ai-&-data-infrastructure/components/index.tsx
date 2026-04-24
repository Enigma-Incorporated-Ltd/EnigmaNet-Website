import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/ai-infra/ai-infra.jpg';
import features1 from '@/assets/svgs/solutions/ai-&-data-infrastructure/Pain point -GPU costs.svg';
import features2 from '@/assets/svgs/solutions/ai-&-data-infrastructure/Pain point - Storage costs creep up quietly.svg';
import features3 from '@/assets/svgs/solutions/ai-&-data-infrastructure/Pain point - Engineering time gets pulled away.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/ai-&-data-infrastructure/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/ai-&-data-infrastructure/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/ai-&-data-infrastructure/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
const features = [
  {
    id: 1,
    icon: features1,
    title: 'GPU costs are hard to model  ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Storage costs creep up quietly  ',
  },
  {
    id: 3,
    icon: features3,
    title: 'Engineering time gets pulled away ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Dedicated GPU hosting',
    description: `Run training and inference on high-performance dedicated GPU infrastructure with stronger cost visibility and more control over how workloads scale.`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Scalable cloud storage',
    description: `Store growing datasets and outputs in API-ready infrastructure built for pipeline integration, without surprise ingress or egress charges.`,
  },
  {
    id: 3,
    icon: block3,
    title: ' Secure Cloud APN',
    description:
      ' Improve movement between users, storage and compute with an encrypted network performance layer that handles packet loss, jitter and unstable conditions in the background.',
  },
];
const quote = [
  'Predictable compute performance',
  'Transparent infrastructure costs',
  ' Improved responsiveness for users  ',
  'Flexibility for an evolving product ',
];
const outcomes = [
  ' Scale with more control ',
  'Reduce performance friction ',
  'Avoid hyperscaler drag ',
  'Keep technical flexibility ',
];
const DataInfrastructure = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'AI & Data Infrastructure' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="AI infrastructure that stays fast, flexible and under your control."
        description="From GPU hosting to storage and data movement, Enigma helps AI and data-intensive teams scale without hyperscaler cost shocks, lock-in or hidden performance bottlenecks. "
        image={heroImg}
        buttons={[
          {
            label: 'Talk about your AI stack ',
            href: '/',
            variant: 'blue',
          },
          {
            label: 'Book an infrastructure call',
            href: '/',
            variant: 'gold',
          },
        ]}
        features={['Predictable compute', 'Transparent storage', 'Controlled data movement']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="The wrong infrastructure choices get made early"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="Many AI teams default to hyperscalers because they feel like the safe option. But familiar infrastructure often creates problems later: unpredictable GPU costs, expensive storage behaviour and architectures that become restrictive before the business is ready. "
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Infrastructure designed around performance economics, not platform dependency"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma brings together dedicated compute, scalable storage and an optimised data
            movement layer so the infrastructure works as one coordinated system. <br />
            <br />
            That gives AI teams more predictable performance, clearer cost visibility and more room
            to evolve their architecture without being boxed in too early.
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
              title=" Built for data-heavy AI platforms."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            AI369 Enigma supported AI369 with dedicated GPU hosting, scalable video storage and an
            optimised data transfer layer for a platform turning long-form gameplay into
            social-ready clips.
          </>
        }
        quote={
          <>
            "ai369’s Founder, Ethan Pattison explained: “GPU compute is central to everything we do.
            Video analysis is resource-intensive, and unpredictable pricing from hyper-scalers was a
            real concern for us as an early-stage company. Enigma Net has given us the performance
            we need with cost predictability, which is critical when you’re trying to build
            sustainable unit economics from day one."
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means for AI and data teams"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Build faster. Scale smarter. Stay in control."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Talk about your AI stack ',
          href: '/',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Book an infrastructure call ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default DataInfrastructure;
