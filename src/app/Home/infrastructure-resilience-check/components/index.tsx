import { GridHero } from '@/assets/img/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroImage from '@/components/ui/HeroImage';
import HeroSection from '@/components/ui/HeroSection';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/secure-cloud/Solution capabilities - Unified controls across environments.svg';
import block2 from '@/assets/svgs/secure-cloud/Solution capabilities - Visibility into sensitive flows.svg';
import block3 from '@/assets/svgs/secure-cloud/Solution capabilities - Predictable pipeline performance.svg';
import FlowListCard from '@/components/ui/FlowListCard';
import { channel, providersPartners } from '@/assets/img';
import CardWithUseCase, { type CardItem } from '@/components/ui/CardWithUseCase';
import Lead from './Lead';
import CTA from '@/components/ui/CtaBand';

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Connectivity Resilience',
    description: `How dependent the organisation is on individual connections, sites or providers.`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Failover and Continuity  ',
    description: `What happens when a connection deteriorates or fails.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Data Movement Performance  ',
    description: `How reliably files, applications and workloads move across the network.   `,
  },
  {
    id: 4,
    icon: block1,
    title: 'Operational Visibility  ',
    description: `Whether the organisation can see and understand the conditions affecting performance.  `,
  },
];
const Core1 = [
  {
    id: 1,
    icon: block1,
    title: 'Connectivity Resilience',
    description: `Assess how critical services are connected and whether the organisation relies heavily on a   
single connection or provider.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Failover and Continuity',
    description: `Review what happens when the primary connection fails and whether backup connections are   
automatic, active and regularly tested.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Data Movement Performance  ',
    description: `Identify whether inconsistent throughput, packet loss or latency may be affecting applications,   
cloud access and large-file transfers.  `,
  },
  {
    id: 4,
    icon: block1,
    title: 'Operational Visibility  ',
    description: `Understand whether the organisation can monitor the conditions affecting users, sites and   
workloads.   `,
  },
];

export const assessmentData = {
  title: 'Assessment   ',
  description: "Evaluate your organisation's Infrastructure Resilience Check",
  list: [
    {
      subtitle: 'Your Organisation',
      items: [
        'What type of organisation are you?',
        'How many sites or locations do you support?',
        'Which connection types do you currently use?',
        'Which workloads depend most heavily on your network?',
      ],
      connectionTypes: [
        'Fibre',
        'Business broadband',
        'Leased line',
        '4G',
        '5G',
        'Satellite',
        'Other',
      ],
      workloadTypes: [
        'Cloud applications',
        'Large-file transfer',
        'Video or surveillance',
        'Backups and replication',
        'Voice and video',
        'Remote access',
        'AI or data workloads',
        'IoT or operational systems',
      ],
      note: 'These questions should support qualification but should not necessarily affect the final resilience score.  ',
    },
    {
      subtitle: 'Connectivity Resilience',
      items: [
        'How dependent are critical operations on one connection?',
        'Do you have a secondary connection?',
        'Is that secondary connection active or only used when needed?',
        'Are different connection types used across your sites?',
        'What happens when the primary connection becomes unavailable?',
      ],
    },
    {
      subtitle: 'Failover and Continuity',
      items: [
        'Does traffic automatically switch to a backup connection?',
        'How quickly does failover occur?',
        'When was failover last tested?',
        'Do active calls, sessions or transfers continue during failover?',
        'Are any critical sites operating without backup connectivity?',
      ],
    },
    {
      subtitle: 'Data Movement Performance',
      items: [
        'How predictable is performance when moving files or accessing applications?',
        'Do users experience slow uploads or downloads?',
        'Are file transfers interrupted?',
        'Do backup windows take longer than expected?',
        'Does application performance vary throughout the day?',
        'Do latency or packet loss affect critical workloads?',
      ],
    },
    {
      subtitle: 'Operational Visibility',
      items: [
        'Can the team currently monitor network performance?',
        'Are issues identified before users report them?',
        'Can the organisation measure packet loss, latency, jitter and usable throughput?',
        'Can performance be compared across sites and connections?',
        'Are failover events recorded and visible?',
      ],
      note: 'Enigma Net’s monitoring proposition already covers conditions including lost connections, uploads, downloads, TCP throughput, latency, jitter, packet loss, UDP throughput, DNS resolution and VoIP quality.  ',
    },
  ],
};
const Core2 = [
  {
    id: 1,
    title: 'Strong Resilience Foundation  ',
    description: `Your answers indicate that your organisation has a strong infrastructure foundation, with good   
continuity planning and visibility across important services.
<br/>
<br/>There may still be opportunities to improve performance, strengthen individual sites or prepare   
for future growth.  
`,
  },
  {
    id: 2,
    title: 'Some Resilience Gaps  ',
    description: `Your infrastructure appears to support current operations, but some areas may remain   
vulnerable to connection failure, inconsistent performance or limited visibility.  
<br/>
<br/>Addressing these gaps could improve predictability and operational continuity.    
`,
  },
  {
    id: 3,
    title: 'Material Infrastructure Exposure  ',
    description: `Your answers suggest that several infrastructure conditions may be affecting resilience,   
performance or continuity.  
<br/>
<br/>Dependence on individual connections, limited failover readiness or insufficient visibility may   
create avoidable operational risk.  
`,
  },
  {
    id: 4,
    title: 'High Operational Exposure  ',
    description: `Your organisation may be heavily exposed to connection failure, unpredictable performance or   
limited infrastructure visibility.   
<br/>
<br/>A focused review may be needed to identify immediate resilience priorities.   
`,
  },
 
];
const outcome = [
  {
    id: 1,
    title: 'Learn More   ',
    subtitle: 'For visitors with a strong score or early-stage interest.  ',
    description: 'Recommended content may include:  ',
    usecase: [
      'Educational guides',
      'Performance explainers',
      'Data Plane articles',
      'Infrastructure workshops',
      'Enigma Net videos and demonstrations',
    ],
    href: '#',
    buttonLabel: 'Explore Educational Resources',
  },
  {
    id: 2,
    title: 'Review Your Findings  ',
    subtitle: 'For visitors with some resilience gaps.  ',
    description: 'Offer a downloadable summary containing:   ',
    usecase: [
      'Overall score',
      'Category scores',
      'Key findings',
      'Suggested areas for review',
      'Relevant educational content',
    ],
    href: '#',
    buttonLabel: 'Receive My Full Findings  ',
  },
  {
    id: 3,
    title: 'Speak to Enigma Net ',
    subtitle: 'For visitors with material or high exposure. ',
    description: 'Offer a short infrastructure review to discuss:',
    usecase: [
      'Current connection model',
      'Business-critical sites',
      'Failover arrangements ',
      'Data movement challenges  ',
      'Operational priorities  ',
    ],
    href: '/get-in-touch',
    buttonLabel: 'Book an Infrastructure Review  ',
  },
];

const InfrastructureResilienceCheckPage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Infrastructure Resilience Check' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        eyebrow="FREE INFRASTRUCTURE ASSESSMENT  "
        title="How resilient is the infrastructure your business depends on?"
        description={
          <div className=" text-md-start text-center">
            Your connection may appear fast when everything is working. The real test is what
            happens when conditions change.
            <br />
            <br />
            Complete the Enigma Net Infrastructure Resilience Check to identify potential weaknesses
            across connectivity, failover, data movement, security and operational visibility.
          </div>
        }
        buttons={[
          {
            label: 'Start the Free Check  ',
            href: '#',
            variant: 'blue',
            disableSentenceCase: true,
          },
          {
            label: 'See What the Check Covers  ',
            href: '#',
            variant: 'gold',
          },
        ]}
        features={[
          'Free three-minute assessment  ',
          'Immediate resilience score ',
          'No detailed technical knowledge required  ',
          'Practical recommendations based on your answers  ',
        ]}
        transitionLine={
          <div className="text-dark">
            Takes approximately three minutes. Receive an immediate resilience score and recommended
            next steps.
          </div>
        }
      />
      <HeroImage img={GridHero} alt="GridHero" />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Fast does not always mean resilient  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <div>
            Most organisations know the advertised speed of their connection. <br /> Far fewer know
            what happens when that connection becomes congested, unstable or unavailable.
            Infrastructure performance can be affected by conditions such as:
          </div>
        }
        data={[
          'Packet loss',
          'Latency',
          'Jitter',
          'Inconsistent throughput ',
          'Connection failure',
          'Limited failover',
          'Poor visibility across sites and services',
        ]}
        description2={
          <div>
            These issues can affect cloud applications, remote access, large-file transfers, video,
            backups and business-critical systems. Without the right visibility, different
            infrastructure problems can appear to be the same issue.
          </div>
        }
        image={providersPartners}
      />
      <CardSlider
        data={Core}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Understand what is happening beneath the connection "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            The Infrastructure Resilience Check looks beyond headline bandwidth.
            <br />
            It helps organisations consider how connections perform under real operating conditions
            and how prepared the business is to respond when those conditions change. <br /> The
            assessment reviews four key areas:
          </>
        }
        showButtons
        primaryButton={{
          label: 'Check My Infrastructure  ',
          href: '#',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />
      <CardSlider
        data={Core1}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What the assessment covers  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Take a closer look at your infrastructure "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <div>
            Answer a short series of questions about your connections, sites, workloads and current
            visibility. Your answers will be used to create an indicative Infrastructure Resilience
            Score and identify areas that may benefit from further investigation.
          </div>
        }
        data={[
          'Approximately 10–12 questions  ',
          'Multiple-choice answers',
          'One question shown at a time  ',
          'Immediate results  ',
          'No sensitive technical information required  ',
        ]}
        showButtons
        primaryButton={{
          label: 'Begin Assessment',
          href: '#',
          variant: 'blue',
          disableSentenceCase: true,
        }}
        transitionLine={
          <div className="text-dark">
            This check provides an initial educational assessment. It is not a formal technical,
            security or compliance audit.
          </div>
        }
      />
      <FlowListCard
        title={
          <>
            <HeaderTitle
              key={theme}
              title={assessmentData.title}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={assessmentData.description}
        list={assessmentData.list}
      />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Infrastructure resilience depends on more than bandwidth  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <div>
            A high-speed connection can still perform poorly when affected by packet loss, latency,
            congestion or unstable routing.
            <br />
            <br />
            Enigma Net is designed to improve the movement of data across existing infrastructure
            using capabilities such as:
          </div>
        }
        data={[
          'TCP optimisation ',
          'Quality of Service ',
          'Secure tunnels  ',
          'Failover  ',
          'Link bonding  ',
          'RAIN resilience  ',
          'Intelligent traffic monitoring ',
        ]}
        description2={
          <div>
            Enigma Net can work across mixed connection types, including fibre, broadband, mobile
            and satellite, while supporting secure and reliable data movement.
          </div>
        }
        image={channel}
        transitionLine={<div className="text-dark">Performance you can prove.</div>}
      />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Your Infrastructure Resilience Score  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <div>
            The visitor should receive an immediate overall result after completing the assessment.
          </div>
        }
        data={[
          'Overall score out of 100  ',
          'Result band  ',
          'Scores across the four assessment areas  ',
          'Up to three personalised findings  ',
          'Recommended educational content  ',
          'Suggested next step  ',
        ]}
      />
      <CardSlider data={Core2} />
      <CardWithUseCase
        data={outcome as CardItem[]}
        headerTitle="What happens next?  "
        disableSentenceCase
        description={
          <>
            The results should guide the visitor towards the most relevant next step rather than
            sending every visitor directly to the same sales CTA.
          </>
        }
      />
      <Lead
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Receive your complete findings  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <div>
            Enter your details to receive your Infrastructure Resilience Summary, including your
            category scores, priority findings and recommended next steps.
          </div>
        }
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Resilient infrastructure starts with understanding <br />
          </>
        }
        headline2="where the risks are  "
        description="Complete the free Infrastructure Resilience Check and identify where connectivity, failover, data   
movement or limited visibility may be affecting your business.  "
        primaryButton={{
          label: 'Start the Free Check ',
          href: '#',
          variant: 'gold',
          disableSentenceCase: true,
        }}
        secondaryButton={{
          label: 'Speak to Enigma Net',
          href: '/get-in-touch',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default InfrastructureResilienceCheckPage;
