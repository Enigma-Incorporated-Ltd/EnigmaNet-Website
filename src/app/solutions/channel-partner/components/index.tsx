import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/Channel/E10HKINT.jpg';
import features1 from '@/assets/svgs/solutions/channel-partner/pain card - Standard infrastructure offers blur together.svg';
import features2 from '@/assets/svgs/solutions/channel-partner/pain point - Customers expect more outcome-led value.svg';
import features3 from '@/assets/svgs/solutions/channel-partner/pain card -  Differentiation must not create delivery drag.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
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
    title: 'Standard infrastructure offers blur together ',
  },
  {
    id: 2,
    icon: features2,
    title: ' Customers expect more outcome-led value ',
  },
  {
    id: 3,
    icon: features3,
    title: ' Differentiation must not create delivery drag ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: ' Offer differentiation',
    description: `Add meaningful resilience and performance value that helps your proposition stand apart in competitive customer conversations.`,
  },
  {
    id: 2,
    icon: block2,
    title: ' Customer environment enhancement',
    description: ` Improve how customer networks behave without forcing a full rip-and-replace approach.`,
  },
  {
    id: 3,
    icon: block3,
    title: ' Simpler value delivery',
    description:
      'Give customers stronger outcomes while keeping the offer commercially and operationally easy to position.',
  },
];
const quote = [
  'More differentiated customer proposition ',
  ' Better value from existing environments ',
  ' Improved performance and resilience outcomes ',
  ' Stronger partner conversations ',
];
const outcomes = [
  'More distinctive customer offers ',
  ' Better customer value delivery ',
  'Stronger commercial conversations ',
  ' Greater confidence in solution fit ',
];
const ChannelPage = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Channel Partners' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Add a sharper edge to what you already sell"
        description=" Enigma helps channel partners strengthen customer environments with better performance, built-in resilience and clearer visibility creating a more distinctive offer without a heavy delivery burden. "
        image={heroImg}
        buttons={[
          {
            label: 'Talk to Enigma ',
            href: '/get-in-touch',
            variant: 'blue',
          },
          {
            label: 'Explore Channel Partnerships',
            href: '#',
            variant: 'gold',
          },
        ]}
        features={[' Differentiate faster ', 'Add customer value ', 'Keep delivery simple']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Standing out is harder when everyone sells similar things"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="For channel partners, the challenge is often commercial as much as technical. Customers want more value, more resilience and better outcomes but many partner offers still look too similar, making differentiation and margin growth harder to achieve.  "
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="A more valuable offer on top of what customers already have"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma helps channel partners enhance existing customer environments with intelligent
            traffic management, resilience and better operational visibility. <br />
            <br />
            Instead of only reselling access or infrastructure, partners can offer a stronger, more
            differentiated service outcome with clearer operational value.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  A more distinctive offer on top of <br /> what customers already have
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma helps channel partners enhance existing customer environments with intelligent
            traffic management, resilience and better operational visibility. <br />
            <br />
            Instead of only reselling access or infrastructure, partners can offer a more credible,
            more differentiated solution outcome with clearer business value.
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
              title="Built to support stronger partner propositions"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Use this section for a reseller, partner-led deployment or customer environment example
            showing how Enigma improved performance, visibility or resilience while strengthening
            the overall offer.
          </>
        }
        quote={
          <>
            " The right partner offer should help you differentiate faster, create more customer
            value and keep delivery simple."
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" What this means for channel partners"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Add more value without adding "
        headline2="more complexity"
        // description="Get a free network performance assessment "
        primaryButton={{
          label: ' Talk to Enigma ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Explore Channel Partnerships ',
          href: '#',
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

export default ChannelPage;
