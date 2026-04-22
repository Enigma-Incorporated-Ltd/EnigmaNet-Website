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
    title: 'Capacity is often harder to scale than expected',
  },
  {
    id: 2,
    icon: features2,
    title: 'Costs become difficult to predict as usage grows  ',
  },
  {
    id: 3,
    icon: features3,
    title: 'Compute, GPU and storage are too often treated separately ',
  },
];
const Core = [
  {
    id: 1,
    icon: network,
    title: 'On-demand compute',
    description: `Access flexible compute capacity that can support application, platform and operational workloads without unnecessary overhead. `,
  },
  {
    id: 2,
    icon: network,
    title: 'GPU hosting',
    description: `Provide GPU-backed infrastructure for AI, model processing, inference and other performance-intensive workloads.`,
  },
  {
    id: 3,
    icon: latency,
    title: ' Scalable storage',
    description: `Support growing data volumes with storage designed for accessibility, operational fit and clearer cost behaviour. `,
  },
  {
    id: 4,
    icon: data,
    title: ' Commercial accessibility',
    description:
      'Make infrastructure easier to adopt with a more approachable model for teams that need performance and scale without hyperscaler-style friction.  ',
  },
];
const quote = [
  'Better access to scalable infrastructure ',
  ' Improved fit between workload and hosting model  ',
  'Stronger cost visibility',
  'Greater operational confidence ',
];
const outcomes = [
  'Easier access to workload-ready infrastructure ',
  'More scalable support for compute, GPU and storage needs ',
  'Better cost visibility as usage grows ',
  'Stronger operational flexibility ',
];
const outcomes2 = [
  ' Hosting that scales with workload demand',
  ' Better access to compute, GPU and storage ',
  'More flexible infrastructure decisions ',
  ' Greater confidence in cost and growth planning ',
];
const fits = [
  'AI and inference workloads ',
  'GPU-backed processing environments ',
  'General application and platform hosting ',
  'Data-heavy storage environments ',
  ' Growing teams that need scalable infrastructure ',
  ' Organisations looking beyond rigid hyperscaler models ',
];
const HostingCloud = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Hosting / Secure Cloud' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title="Affordable, Accessible, Scalable Hosting for Compute, GPU and Storage"
        description={
          <div className="fs-5">
            On-demand compute, GPU and storage infrastructure that efficiently scales with your
            workloads without unnecessary complexity or hyperscaler-style cost surprises.
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
            label: 'Explore hosting options',
            href: '/',
            variant: 'gold',
          },
        ]}
        features={[' On-demand infrastructure', ' Workload-ready scale', 'Clearer cost control']}
      />

      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Infrastructure should scale with demand, not with friction."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description="Many teams need flexible compute, GPU and storage capacity, but the buying experience is often too rigid, too expensive or too hard to model. What looks scalable on paper can quickly become costly, fragmented or operationally awkward in practice."
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Hosting built to scale around real workload needs."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma provides on-demand infrastructure across compute, GPU and storage in a model
            designed to be easier to access, easier to scale and easier to operate.
            <br />
            <br />
            Instead of forcing teams into rigid infrastructure decisions, Enigma helps them match
            resources more closely to workload behaviour while keeping performance and commercial
            visibility in view.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Flexible infrastructure across compute, GPU and storage."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma’s hosting offer is built to support a range of workloads, from general compute
            through to GPU-backed processing and scalable storage. The aim is not just to provide
            capacity, but to provide infrastructure that can be used more efficiently as needs
            change.
            <br />
            <br />
            <strong className="fst-italic">
              Infrastructure should adapt to the workload, not force the workload to adapt to the
              infrastructure.
            </strong>
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What the hosting platform delivers"
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
              title="Why scalable hosting needs to be commercially and operationally usable"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Buyers do not just need infrastructure that exists. They need infrastructure that can
            actually be used, scaled and budgeted for with confidence. When compute, GPU and storage
            are difficult to access or too costly to expand, growth slows and technical teams spend
            too much time working around infrastructure limits. A better hosting model helps
            organisations stay flexible, control spend more effectively and keep infrastructure
            aligned to what workloads genuinely require.
          </>
        }
      />
      <CaseStudyHighlight
        data={fits}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Built for workloads that need flexible infrastructure"
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
              title="Designed for workloads that need flexible, scalable infrastructure"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Use this section for a hosting example showing how Enigma supported compute, GPU or
            storage growth in a way that improved flexibility, cost visibility or operational
            performance.
          </>
        }
        quote={
          <>
            "Reserved for approved customer quote focused on hosting flexibility, GPU access,
            storage scale or commercial clarity "
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes2}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means in practice"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Scale compute, GPU and storage without "
        headline2="scaling complexity."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: ' Talk to Enigma ',
          href: '/',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Explore hosting options ',
          href: '/get-in-touch',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default HostingCloud;
