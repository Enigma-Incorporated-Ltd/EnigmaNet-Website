import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import features1 from '@/assets/svgs/secure-cloud/Pain point - GPU and compute access is difficult to plan and scale.svg';
import features2 from '@/assets/svgs/secure-cloud/Pain points - Large datasets are hard to move efficiently across environments.svg';
import features3 from '@/assets/svgs/secure-cloud/pain poit - Storage pricing and egress charges create cost uncertainty.svg';
import block1 from '@/assets/svgs/secure-cloud/Solution capabilities - Unified controls across environments.svg';
import block2 from '@/assets/svgs/secure-cloud/Solution capabilities - Visibility into sensitive flows.svg';
import block3 from '@/assets/svgs/secure-cloud/Solution capabilities - Predictable pipeline performance.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
import HeroImage from '@/components/ui/HeroImage';
import heroImg from '@/assets/img/heroSlider/secure-cloud.jpg';
const features = [
  {
    id: 1,
    icon: features1,
    title: ' GPU and compute access is difficult to plan and scale ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Storage pricing and egress charges create cost uncertainty',
  },
  {
    id: 3,
    icon: features3,
    title: 'Large datasets are hard to move efficiently across environments  ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Unified controls across environments',
    description: `Apply consistent security intent across dev, training, and production without reinventing policies per cloud. `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Visibility into sensitive flows ',
    description: `Understand how datasets and services connect, and where sensitive movement creates risk. `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Predictable pipeline performance ',
    description: `Reduce the “it worked yesterday” problem by making critical flows and dependencies clearer and more stable.  `,
  },
];


const fits = [
  'Faster iteration across AI workflows  ',
  'Better access to workload-ready compute and GPU capacity ',
  'Simpler storage and transfer planning ',
  'Greater confidence in cost and scaling decisions  ',
];
const outcomes = [
  'Workload-ready hosted infrastructure ',
  'Better control over cloud cost and scale ',
  ' Faster movement between storage and compute ',
  'Simpler operations for AI and data teams  ',
];
const CloudPage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Secure Cloud' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Secure cloud infrastructure for AI <br /> and data-heavy workloads
          </>
        }
        description={
          <div className="fs-5">
            Dedicated compute, GPU, storage and transfer services designed for teams that need
            workload-ready infrastructure with clearer pricing, stronger control and fewer
            hyperscaler constraints.
          </div>
        }
        // image={heroImg}
        buttons={[
          {
            label: 'Talk About Your Workload ',
            href: '/get-in-touch',
            variant: 'blue',
          },
          {
            label: 'Explore Hosting Options ',
            href: '#',
            variant: 'gold',
          },
        ]}
        features={[
          'Dedicated compute and GPU',
          'Predictable pricing ',
          ' Secure storage and transfer',
        ]}
      />
      <HeroImage img={heroImg} />
      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>Standard cloud models become expensive and <br /> awkward under data-heavy demand.</>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            AI and data-intensive teams often need more than generic cloud capacity. They need
            access to usable GPU and compute resources, storage that fits real workload behaviour
            and transfer performance that does not collapse under scale. In many environments,
            hyperscaler pricing and complexity make that harder, not easier.
          </>
        }
      />

      <CardSlider
        data={Core}
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" A hosted infrastructure model built around workload reality."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Secure Cloud provides hosted compute, GPU, storage and transfer services in a
            model designed for performance-sensitive, data-heavy environments. Instead of stitching
            together expensive cloud services with unpredictable economics, teams get a more usable
            infrastructure foundation with clearer control over cost, scale and operational fit.
            <br />
            <br />
            The focus is not on improving existing network links. It is on providing the hosted
            infrastructure itself ready to support workloads that need consistent access to compute,
            storage and movement at scale.
          </>
        }
      />

      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title=" Built for teams running real AI and data workloads."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Global AI team running training and inference across distributed locations. Enigma
            Secure Cloud provided dedicated compute, AI-optimised storage and accelerated transfer
            to simplify infrastructure planning and reduce delays in moving data.
          </>
        }
        data={fits}
        quote={<>"Reserved for approved customer quote"</>}
      />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means in practice"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={outcomes}
      />

      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Run compute, GPU, storage and transfer with more confidence and "
        headline2=" less cloud friction."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Talk About Your Workload ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: ' Explore Hosting Options',
          href: '#',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default CloudPage;
