import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';

import Br from '@/components/ui/NewLine';
import { GridHero } from '@/assets/img/products';
import {
  AssetInformationGetsScattered,
  AutomationNeedsTrusted,
  IncidentContext,
  Inventory,
  Ownership,
  OwnershipBecomes,
  Topology,
} from '@/assets/svgs/products/enigma-platform/grid';
import BlogCard, { type BlogPost } from '@/components/ui/BlogCard';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import NewsLetter from './NewsLetter';

const Core = [
  {
    id: 1,
    icon: AssetInformationGetsScattered,
    title: 'Data-to-GPU performance  ',
    description: `Articles on the performance gap between data, storage, compute and GPU utilisation.  `,
  },
  {
    id: 2,
    icon: IncidentContext,
    title: 'Data movement bottlenecks    ',
    description: `Guides on slow transfers, unreliable data paths and movement across cloud, edge and regions.  `,
  },
  {
    id: 3,
    icon: OwnershipBecomes,
    title: 'Predictable network performance   ',
    description:
      'Content covering latency, jitter, packet loss, throughput and the impact of unstable network behaviour.  ',
  },
  {
    id: 4,
    icon: AutomationNeedsTrusted,
    title: 'AI infrastructure efficiency  ',
    description:
      'Insights on how infrastructure decisions affect AI workloads, training pipelines and production performance.  ',
  },
  {
    id: 5,
    icon: AssetInformationGetsScattered,
    title: 'Cloud cost and scaling pressure  ',
    description:
      'Founder and platform-team guidance on cloud usage, infrastructure cost pressure and scaling decisions.  ',
  },
  {
    id: 6,
    icon: IncidentContext,
    title: 'Operational visibility   ',
    description:
      'Content on diagnosing performance issues, understanding infrastructure behaviour and reducing unknowns.   ',
  },
];

const data2 = [
  {
    id: 1,
    icon: Inventory,
    title: 'Guide 1',
    description: ` <span class="text-dark fw-bold h6">Data-to-GPU performance: why the network matters</span> <br/>A guide to how data movement affects GPU utilisation, AI training speed and infrastructure   
efficiency.    `,
  },
  {
    id: 2,
    icon: Topology,
    title: 'Guide 2',
    description: ` <span class="text-dark fw-bold h6">Predictable network performance for AI and data-heavy systems  </span> <br/>
    A guide to the network conditions that affect distributed infrastructure, cloud workloads and   
production reliability.  
`,
  },
  {
    id: 3,
    icon: Ownership,
    title: 'Guide 3  ',
    description: ` <span class="text-dark fw-bold h6">Understanding infrastructure cost pressure as products scale  
 </span> <br/>
   A guide to how cloud, compute, storage and data movement costs can build as usage grows.   
`,
  },
];

const data4 = [
  {
    id: 1,
    title: 'Workshop  ',
    description: `<ul><li>Building in the Cloud Without Burning Cash  </li> <li>
    How founders scale without killing runway.  
    </li></ul>`,
  },

  {
    id: 2,
    title: 'Diagnostic tool   ',
    description: `<ul><li>Run the TrueCost Diagnostic    </li> <li>
    Understand where infrastructure cost pressure may be building across cloud, compute and   
data movement.   
    </li></ul>`,
  },
  {
    id: 3,
    title: 'Founder guide  ',
    description: `<ul><li>Founder Infrastructure Checklist    </li> <li>
   Questions to ask before cloud bills, data movement and compute demand start scaling.  
    </li></ul>`,
  },
];

const featuredPosts: BlogPost[] = [
  {
    id: 1,
    slug: '#',
    title: 'Why AI performance is not only a compute problem  ',
    summary:
      'AI workloads depend on more than GPU availability. Data movement, network performance, storage access and pipeline stability all affect how efficiently infrastructure performs.  ',
    category: 'AI infrastructure  ',
    image: GridHero,
    date: 'July 2, 2026',
    readingTime: '5 min read',
  },
];
const latestPosts: BlogPost[] = [
  {
    id: 1,
    slug: '#',
    title: 'AI performance is not only a compute problem   ',
    summary:
      'Why data movement, storage, networking and infrastructure design matter as AI workloads scale.  ',
    category: 'AI infrastructure  ',
    image: GridHero,
    date: 'July 2, 2026',
    readingTime: '5 min read',
    buttonText: ' Read more  ',
  },
  {
    id: 2,
    slug: '#',
    title: 'When data movement becomes the bottleneck  ',
    summary:
      'How large datasets, distributed teams and cloud platforms expose hidden infrastructure friction.  ',
    category: 'Data movement  ',
    image: GridHero,
    date: 'July 2, 2026',
    readingTime: '5 min read',
    buttonText: ' Read more  ',
  },
  {
    id: 3,
    slug: '#',
    title: 'Why latency, jitter and packet loss still matter  ',
    summary:
      'A practical explainer on the network conditions that affect cloud, AI and real-time workloads.    ',
    category: 'Predictable networking  ',
    image: GridHero,
    date: 'July 2, 2026',
    readingTime: '5 min read',
    buttonText: ' Read more  ',
  },
  {
    id: 4,
    slug: '#',
    title: 'The free credit cliff: what founders need to understand before usage scales   ',
    summary:
      'How free cloud credits can hide infrastructure cost pressure until product usage starts growing.    ',
    category: 'Cloud cost  ',
    image: GridHero,
    date: 'July 2, 2026',
    readingTime: '5 min read',
    buttonText: ' Read more  ',
  },
];
const BlogInsightPage = () => {
  
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Blog-Insight', href: '/company/blog-insight' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={<>Insights on data movement, AI infrastructure and performance bottlenecks.</>}
        description="Explore Enigma Net perspectives on the infrastructure problems that slow down AI workloads,   
cloud environments, data pipelines and distributed systems.  "
        image={GridHero}
        buttons={[
          {
            label: 'Read latest insights  ',
            href: '/company/blog',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={[
          ' Data movement',
          'Data-to-GPU performance',
          'Predictable networking',
          'AI infrastructure',
          'Cloud cost ',
        ]}
      />
      <BlogCard
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Featured insight</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>Highlight the most important current article, guide or thought leadership piece.</>
        }
        posts={featuredPosts}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Explore by content cluster</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Insights are organised around real infrastructure bottlenecks, not product categories.
          </>
        }
        data={Core}
      />

      <BlogCard
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Latest insights</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            {' '}
            Read recent Enigma Net articles, explainers and perspectives on the infrastructure
            decisions shaping modern AI, cloud and data-intensive systems.{' '}
          </>
        }
        posts={latestPosts}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Pillar guides</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={<>Long-form guides that explain core infrastructure problems end-to-end.</>}
        data={data2}
        showButtons={true}
        primaryButton={{
          label: 'View all pillar guides  ',
          href: '#',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>TrueCost insights</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            TrueCost content helps founders, startup teams and scaling businesses understand where
            cloud usage, compute demand, data movement and infrastructure decisions can quietly
            become expensive as products grow.
          </>
        }
        data={data4}
        showButtons={true}
        primaryButton={{
          label: 'Explore TrueCost   ',
          href: '/truecost',
          variant: 'blue',
          disableSentenceCase: true,
        }}
        secondaryButton={{
          label: 'Register for workshop  ',
          href: 'https://bitc.enigmanet.ai/',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
      <CaseStudyHighlight
        data={[
          'What is data movement?  ',
          'What is data-to-GPU performance?  ',
          'Why latency, jitter and packet loss matter  ',
          'Why GPU utilisation depends on more than compute  ',
          'How data pipelines become bottlenecks  ',
          'Why predictable throughput matters  ',
          'What happens when free cloud credits end  ',
          'How infrastructure visibility helps diagnose cost and performance issues  ',
        ]}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Technical explainers  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Clear explanations of technical infrastructure topics for buyers, founders, platform
            teams and engineering leaders.
          </>
        }
        showButtons={true}
        primaryButton={{
          label: 'View technical explainers   ',
          href: '#',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />
      <h2 className="h1 text-center text-light-blue">Popular topics</h2>

      <HeroSection
        title={<>Data-to-GPU Performance</>}
        description="Understand how the movement of data between storage, networks and GPU infrastructure   
affects AI training, workload performance and infrastructure efficiency.  "
        features={[
          'GPU utilisation',
          ' Data pipelines',
          'AI training',
          ' Infrastructure performance  ',
        ]}
      />
      <CaseStudyHighlight
        data={[
          'GPUs waiting on data  ',
          'Slow dataset transfer  ',
          'Pipeline bottlenecks   ',
          'Poor utilisation of expensive compute  ',
        ]}
        quote={<>Improve the path between data, compute and AI performance. </>}
      />

      <HeroSection
        title={<>AI Infrastructure </>}
        description="Explore the infrastructure decisions behind AI performance, from compute and GPU access to   
data movement, networking, storage and operational visibility.   "
        features={['Compute ', '  GPU', ' Storage', ' Data movement  ', 'Networking']}
      />
      <CaseStudyHighlight
        data={[
          'Compute without enough data flow  ',
          'Scaling workloads across environments  ',
          'Infrastructure cost pressure  ',
          'Performance instability  ',
        ]}
        quote={<>Understand the infrastructure layer behind AI performance.</>}
      />

      <HeroSection
        title={<>Data Movement </>}
        description="Learn why data movement matters for AI, cloud, remote teams and data-heavy operations —   
and how slow or unreliable movement can affect performance, cost and scale.  "
        features={[
          'Large datasets ',
          ' Cloud transfer',
          ' Storage',
          ' Distributed teams ',
          ' Throughput ',
        ]}
      />
      <CaseStudyHighlight
        data={[
          'Slow file or dataset transfer  ',
          'Fragmented cloud and storage environments  ',
          'Unpredictable transfer performance  ',
          'Workarounds that increase operational friction  ',
        ]}
        quote={<>Make data movement easier to understand, manage and improve. </>}
      />

      <HeroSection
        title={<>GPU Utilisation </>}
        description="Explore why expensive GPU resources can underperform when data pipelines, storage access   
       or network behaviour cannot keep up."
        features={['Compute efficiency', ' AI training', ' Pipeline performance', '  Data access']}
      />
      <CaseStudyHighlight
        data={[
          'GPUs waiting for data  ',
          'Overprovisioning compute   ',
          'Dataset transfer delays  ',
          'Poor visibility into performance blockers  ',
        ]}
        quote={<>Keep compute working harder by improving the infrastructure around it. </>}
      />

      <HeroSection
        title={<>Cloud Cost Visibility </>}
        description="Understand where cloud costs come from, why they become harder to predict   
as usage grows, and how infrastructure decisions can affect runway.  "
        features={['Cloud spend ', ' Compute demand ', 'Storage ', ' Data transfer ', 'Runway    ']}
      />
      <CaseStudyHighlight
        data={[
          'Free credit cliffs   ',
          'Hidden data movement costs   ',
          'Scaling without usage visibility  ',
          'Infrastructure decisions made too late  ',
        ]}
        quote={<>Find the cost pressure before the bill finds you. </>}
        showButtons={true}
        primaryButton={{
          label: 'Run TrueCost Diagnostic  ',
          href: '/truecost',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />

      <HeroSection
        title={<>Secure Networking </>}
        description="Explore how secure networking supports controlled data movement, protected access and   
resilient connectivity across users, sites, cloud and edge environments.  "
        features={[
          'Encrypted transport ',
          'Controlled access ',
          'Resilience',
          ' Distributed environments  ',
        ]}
      />
      <CaseStudyHighlight
        data={[
          'Public internet exposure  ',
          'Distributed users and sites  ',
          'Performance trade-offs from traditional approaches  ',
          'Poor visibility across network behaviour  ',
        ]}
        quote={<>Protect data movement without losing control of performance. </>}
      />

      <HeroSection
        title={<>Predictable Throughput </>}
        description="Understand why stable, predictable throughput matters when moving large files, datasets,   
workloads and traffic across complex infrastructure.  
"
        features={['Throughput ', ' Transfer speed ', 'Stability ', ' Workload performance   ']}
      />
      <CaseStudyHighlight
        data={[
          'Inconsistent transfer rates  ',
          'Large file movement delays  ',
          'Network performance variation   ',
          'Difficulty planning workload movement  ',
        ]}
        quote={<>Make performance more predictable across the data path. </>}
      />

      <HeroSection
        title={<>Latency and Packet Loss </>}
        description="Learn how latency, jitter and packet loss affect real-world performance across cloud, AI, data   
movement and distributed operations.  "
        features={['Latency  ', '  Jitter  ', ' Packet loss ', ' Network performance   ']}
      />
      <CaseStudyHighlight
        data={[
          'Slow application response   ',
          'Broken or delayed transfers   ',
          'Unstable real-time services  ',
          'Reduced throughput under poor network conditions',
        ]}
        quote={<>Understand the network conditions behind slow or unstable performance. </>}
      />

      <HeroSection
        title={<>Founder Guidance </>}
        description="Practical infrastructure guidance for founders and scaling teams making decisions about cloud,   
compute, data movement, cost and resilience.   "
        features={['Cloud cost   ', '  Runway   ', 'Scaling  ', ' Infrastructure decisions  ']}
      />
      <CaseStudyHighlight
        data={[
          'Scaling before cost visibility  ',
          'Relying on free credits too long    ',
          'Choosing infrastructure under pressure   ',
          'Missing hidden data movement costs  ',
        ]}
        quote={<>Make better infrastructure decisions before scale creates pressure. </>}
        showButtons={true}
        primaryButton={{
          label: 'Register for TrueCost Workshop  ',
          href: 'https://bitc.enigmanet.ai/',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />

      <HeroSection
        title={<>TrueCost </>}
        description="TrueCost helps founders and scaling teams understand where cloud usage, compute demand,   
data movement and infrastructure decisions can quietly become expensive as products grow.  "
        features={['Cloud cost', 'Compute', 'Data movement', 'Runway', 'Diagnostic tools']}
      />
      <CaseStudyHighlight
        data={[
          'Cloud bills rising without clear cause  ',
          'Free cloud credits ending   ',
          'Compute and storage demand increasing  ',
          'Data movement costs hiding in plain sight   ',
        ]}
        quote={<>Understand the real infrastructure cost behind scale. </>}
        showButtons={true}
        primaryButton={{
          label: 'Run TrueCost Diagnostic   ',
          href: '/truecost',
          variant: 'blue',
          disableSentenceCase: true,
        }}
        secondaryButton={{
          label: 'Register for workshop   ',
          href: 'https://bitc.enigmanet.ai/',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />

      <HeroSection
        title={<>Operational Visibility </>}
        description="Explore why infrastructure visibility matters for teams managing performance, resilience,   
incidents, cloud usage and data movement across complex environments.  "
        features={[
          'Monitoring ',
          'Incident visibility    ',
          'Performance data   ',
          ' Service health ',
        ]}
      />
      <CaseStudyHighlight
        data={[
          'Issues that are hard to diagnose  ',
          'Lack of clear performance data ',
          'Hidden infrastructure bottlenecks  ',
          'Teams firefighting without enough context  ',
        ]}
        quote={<>See the behaviour behind infrastructure performance. </>}
      />

      <HeroSection
        title={<>Infrastructure Resilience </>}
        description="Understand how resilient infrastructure helps organisations reduce disruption, maintain   
continuity and protect performance across distributed environments.   "
        features={['Continuity', 'Failover', 'Resilience ', '  Distributed systems  ']}
      />
      <CaseStudyHighlight
        data={[
          'Connection failure or degradation  ',
          'Service disruption across sites  ',
          'Lack of failover planning  ',
          'Critical traffic exposed to unstable conditions  ',
        ]}
        quote={<>Build infrastructure that keeps working when conditions change. </>}
      />
      <CardSlider
        sectionTitle="Stay updated  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Stay close to the infrastructure conversations <Br isDesktop isTablet /> that
                  matter as you scale
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Get Enigma Net insights, TrueCost workshop invites and practical guidance across cloud,
            compute, secure networking, data movement, resilience and AI-ready infrastructure.{' '}
          </>
        }
      />
      <NewsLetter />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Understand the infrastructure decisions <br />
            behind performance,{' '}
          </>
        }
        headline2="cost and scale.  "
        primaryButton={{
          label: 'Talk to Enigma  ',
          href: '/get-in-touch',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default BlogInsightPage;
