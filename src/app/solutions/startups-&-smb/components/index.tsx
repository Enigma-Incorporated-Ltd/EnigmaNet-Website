import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import heroImg from '@/assets/img/solutions/startups/Outreach_Topic3_Cloud bill 1.png';
import features1 from '@/assets/svgs/solutions/service-providers-&-partners/pain point - Basic connectivity is harder to differentiate.svg';
import features2 from '@/assets/svgs/solutions/service-providers-&-partners/pain point -  Performance issues damage customer confidence.svg';
import features3 from '@/assets/svgs/solutions/service-providers-&-partners/pain point - Basic connectivity is harder to differentiate.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/service-providers-&-partners/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/service-providers-&-partners/Core capabilities - block 2.svg';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
import PremiumButton from '@/components/ui/PremiumButton';
const features = [
  {
    id: 1,
    icon: features1,
    title: ' Free credits end, but the waste stays ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Hidden cloud and transfer costs start eating into runway ',
  },
  {
    id: 3,
    icon: features3,
    title: 'One weak connection can slow the whole team down ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Enigma Connect ',
    description: `Make your existing internet setup less fragile. Combine fibre, Wi-Fi, 5G or other links into a more resilient network that keeps work moving when one connection fails or degrades.`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Enigma Secure Cloud',
    description: `Run compute, GPU and storage without hyperscaler-style complexity or surprise bills. Get clearer pricing, better-fit infrastructure and support to move out of setups that no longer make sense. `,
  },
];
const quote = [
  'Keep the team working when one link fails',
  'Reduce disruption across calls, demos and cloud tools  ',
  'Add resilience without replacing everything ',
  ' See performance issues more clearly ',
  'Grow connectivity as demand increases ',
];
const bullets = [
  'Bills rise faster than expected ',
  'Data transfer and egress costs are hard to predict   ',
  'Resources stay live that nobody is really using  ',
  ' Infrastructure gets too complex too early ',
  'Small teams end up managing cloud overhead instead of building ',
];
const support = [
  'Review what you are actually using ',
  'Find where spend is being wasted  ',
  'Remove services you do not need  ',
  ' Design a setup that fits better ',
  'Migrate securely with minimal disruption ',
];
const benefits = [
  'More predictable pricing ',
  ' Right-sized compute, GPU and storage  ',
  ' Clearer visibility into usage and cost ',
  ' Better fit for AI, SaaS and data-heavy businesses ',
  ' Less overhead for small teams ',
];
const outcomes = [
  'Clearer view of current usage, storage growth and monthly costs  ',
  'Better understanding of when cloud credits stop protecting runway ',
  'Reduced waste from services, storage or infrastructure no longer aligned to need ',
  'More controlled migration planning before costs or performance issues force the decision ',
];
const Startups = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Startups & SMBs' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Stop waste early. Keep growth moving"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        subtitle={
          <>
            <div className="">
              Enigma helps startups and small businesses avoid post-credit bill shock, reduce
              fragile connectivity problems and build infrastructure that fits how they actually
              operate.
            </div>
          </>
        }
      />
      <HeroSection
        title={<>See what your current setup <br /> may really be costing you</>}
        description="Use the calculator to estimate where cloud or connectivity spend may be leaking value  then talk to Enigma Net about a setup that wastes less cash and causes fewer problems. "
        image={heroImg}
        buttons={[
          {
            label: ' Check Your Savings',
            href: '/trueCost',
            variant: 'blue',
          },
          {
            label: '  Book a Cost Review ',
            href: '/get-in-touch',
            variant: 'gold',
          },
        ]}
        features={[
          ' Cut wasted spend',
          ' Keep the team online',
          '  Move data faster',
          ' Scale without cloud drag',
        ]}
      />
      <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        <PremiumButton
          label="Talk to Enigma Net "
          variant="gold"
          className="btn-lg"
          href="/get-in-touch"
        />
      </div>
      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Free credits make it easy. Reality gets expensive fast"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Early infrastructure decisions are often made quickly, and that is understandable. Free
            credits help. Basic internet is good enough. Everything works until usage climbs, the
            team grows and the setup starts leaking money, time and reliability.
            <br />
            <br />
            Many businesses do not realize the network underneath may also be constraining
            performance. Slow uploads, unstable calls, lagging tools and inconsistent access are
            often treated as separate problems, when the real issue may be how network performance
            is behaving underneath it all. Enigma fixes that. And also provides tools to manage
            consumption and performace of resources in hosting and networking by default. 
          </>
        }
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Less waste. Less fragility. More control"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma helps growing businesses fix the infrastructure issues that get expensive too
            early. That means cutting wasted cloud spend, making connectivity more resilient and
            giving teams a setup that is easier to understand, easier to manage and easier to grow
            with. <br />
            <br />
            Instead of carrying forward rushed decisions that no longer fit, businesses get a
            cleaner foundation built around what they actually need now.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Fix the cost problem, the connectivity problem or both"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        cardShow={2}
        data={Core}
      />
      <CaseStudyHighlight
        data={quote}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="If your internet drops, the whole team feels it"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Most startups and small businesses rely on one main connection and hope it holds. That
            works until calls freeze, demos stall, uploads fail or core tools become unreliable at
            the worst time.
            <br />
            <br />
            Enigma Connect makes the setup you already have more resilient. It brings links
            together, keeps traffic moving when one fails and gives you visibility into what is
            actually happening when performance drops.
          </>
        }
        quote={<>" fewer interruptions, less scrambling, less wasted time"</>}
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Proof where it matters: cost, control and growth pressure "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Startups and small businesses often begin with cloud credits, simple storage and a setup
            that works well enough in the early stages. <br />
            <br />
            But as the business grows, the pressure changes.
            <br />
            <br />
            Storage increases. Data movement grows. Compute requirements become harder to predict.
            Additional monthly costs creep in. What started as a flexible setup can become difficult
            to understand, difficult to control and expensive to keep running.
            <br />
            <br />
            Enigma helps growing businesses identify when their current infrastructure model is
            starting to work against them then supports a more controlled setup built around cost
            visibility, performance and easier migration.
          </>
        }
        quote={
          <>
            " Enigma helped us see where our infrastructure costs were heading before they became a
            bigger problem. We got a clearer view of what we were using, what was driving spend, and
            when it made sense to move."
          </>
        }
        transitionLine={
          <>
            You may not be managing a complex enterprise environment. But if your cloud costs are
            rising, your storage is growing, or your team is starting to question whether the
            current setup still makes sense, Enigma can help you understand the numbers and make the
            next move with more control.
          </>
        }
      />
      <CaseStudyHighlight
        data={bullets}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Stop paying for cloud decisions that no longer fit"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            A lot of teams start on AWS, Azure or Google Cloud because it is the obvious move. Then
            free credits disappear, usage grows and the bill starts saying more than the setup ever
            did.
            <br />
            <br />
            Enigma Secure Cloud gives businesses a cleaner way to run compute, GPU, storage and
            data-heavy workloads. The goal is simple: cut waste, reduce nasty surprises and give
            teams infrastructure that fits their real stage of growth.
          </>
        }
      />
      <CaseStudyHighlight
        data={benefits}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Benefits of Enigma Secure Cloud"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />

      <CaseStudyHighlight
        data={support}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="We help you get out of the setup that is wasting money"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            A lot of businesses stay stuck with expensive infrastructure because moving feels risky
            and time-consuming. Enigma takes on the heavy lifting so the business is not trapped by
            decisions made earlier.
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline=" Enigma Secure Cloud"
        headline2=" for startups and SMBs"
        description=" Get started with Enigma Secure Cloud. We'll help you get out of the setup that is wasting money."
        primaryButton={{
          label: 'Talk to Enigma ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Check Your Savings ',
          href: '/trueCost',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default Startups;
