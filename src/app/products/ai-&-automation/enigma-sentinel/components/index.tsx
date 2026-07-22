import { aiInfra } from '@/assets/img';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CardSlider from '@/components/ui/CardSlider';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroSection from '@/components/ui/HeroSection';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import Br from '@/components/ui/NewLine';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import ReusableTable from '@/components/ui/Table';
import Faqs from '@/components/ui/faq';
import CTA from '@/components/ui/CtaBand';
const Core = [
  {
    id: 1,
    description: `Teams face too many alerts and not enough context  `,
  },
  {
    id: 2,
    description: `Root cause analysis can take too long   `,
  },
  {
    id: 3,
    description: 'Manual remediation slows response  ',
  },
  {
    id: 4,
    description: `Automation can feel risky without visibility and controls  
 `,
  },
  {
    id: 5,
    description: 'Reporting and audit evidence can be difficult to pull together  ',
  },
];
const Core1 = [
  {
    id: 1,
    icon: block1,
    title: 'Enigma Nexus  ',
    description: `The universal interface that brings Enigma services together in one customer and operator   
experience.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Enigma Command    ',
    description: `The operations command centre where teams can view incidents, monitor performance and   
control automation.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Enigma Sentinel   ',
    description:
      'The AI operations agent that monitors, analyses and supports remediation across network infrastructure.  ',
  },
];
const Core2 = [
  {
    id: 1,
    icon: block1,
    title: 'Autonomous monitoring  ',
    description: `Continuously monitors network operations and infrastructure health across Enigma Net   
services.  
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'AI-assisted diagnosis  ',
    description: `Supports faster root cause analysis with incident summaries, operational context and AI-
generated insights.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Controlled remediation  ',
    description:
      'Supports automated actions with guardrails, change controls and agreed automation policy.   ',
  },
  {
    id: 4,
    icon: block2,
    title: 'Operator guidance  ',
    description: `Provides recommendations, capacity planning support and operational insight to help teams   
make better decisions.  `,
  },
  {
    id: 5,
    icon: block3,
    title: 'Audit and action visibility  ',
    description:
      'Maintains traceability of decisions, actions and outcomes through searchable histories and exportable audit trails.    ',
  },
];
const Core3 = [
  {
    id: 1,
    icon: block1,
    title: 'Sentinel Essentials  ',
    description: `Included with ESC Secure Networking. Provides baseline AI-assisted insights as part of the   
service.   
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Sentinel Assist  ',
    description: `For organisations that want faster root cause analysis, incident summaries, operator guidance   
and capacity planning support.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Sentinel Autopilot  ',
    description:
      'For organisations ready for autonomous remediation with agreed guardrails, change controls and automation policy.   ',
  },
];
const column1 = [
  { key: 'product', label: 'Product / SKU  ' },
  { key: 'price', label: 'Price  ' },
  { key: 'unit', label: 'Unit  ' },
  { key: 'customer', label: 'Customer note  ' },
];

const comparisonData1 = [
  {
    product: 'Sentinel Essentials  ',
    price: ' £0 ',
    unit: 'Included with ESC Secure Networking   ',
    customer: 'Included as part of the service   ',
  },
  {
    product: 'Assist — up to 10 sites ',
    price: ' £250  ',
    unit: 'Per tenant / month',
    customer: 'SMB AIOps add-on  ',
  },
  {
    product: 'Assist — 11–50 sites  ',
    price: ' £650',
    unit: 'Per tenant / month',
    customer: 'Mid-market AIOps add-on',
  },
  {
    product: 'Assist — 51–200 sites',
    price: '£1,600',
    unit: 'Per tenant / month',
    customer: 'Enterprise AIOps add-on',
  },
  {
    product: 'Assist — 200+ sites',
    price: '£4,000',
    unit: 'Per tenant / month floor',
    customer: 'Larger estates quoted above this floor',
  },
  {
    product: 'Autopilot — up to 10 sites',
    price: '£500',
    unit: 'Per tenant / month',
    customer: 'Automation-focused tier',
  },
  {
    product: 'Autopilot — 11–50 sites',
    price: '£1,300',
    unit: 'Per tenant / month',
    customer: 'Automation-focused tier',
  },
  {
    product: 'Autopilot — 51–200 sites',
    price: '£3,200',
    unit: 'Per tenant / month',
    customer: 'Automation-focused tier',
  },
  {
    product: 'Autopilot — 200+ sites',
    price: '£8,000',
    unit: 'Per tenant / month floor',
    customer: 'Larger estates quoted above this floor ',
  },
  {
    product: 'AI analysis overage units	',
    price: '£0.75	',
    unit: 'Per 1,000 analysis units	',
    customer: 'Usage-based overage pricing',
  },
];
export const enigmaSentinelFaqs = [
  {
    question: 'Is Enigma Sentinel a standalone product?  ',
    answer:
      ' Sentinel is part of the Enigma ecosystem and works alongside Enigma Nexus and Enigma Command. Sentinel Essentials is bundled with ESC Secure Networking, while Assist and Autopilot are available as additional tiers.  ',
  },
  {
    question: 'What is the difference between Assist and Autopilot?  ',
    answer:
      ' Assist focuses on faster analysis, summaries, operator guidance and planning support. Autopilot adds autonomous remediation with guardrails, change controls and agreed automation policy.  ',
  },
  {
    question: 'Can teams stay in control?  ',
    answer:
      'Yes. Enigma Command provides a human-in-the-loop control plane with visibility into Sentinel activity and the ability to manage automation levels.  ',
  },
  {
    question: 'What does Sentinel monitor?  ',
    answer:
      ' Sentinel monitors network operations and infrastructure health across Enigma Net services.  ',
  },
  {
    question: 'Does Sentinel support auditability?  ',
    answer:
      'Yes. Sentinel activity can be tracked through incident timelines, operational logs and exportable audit trails.  ',
  },
];
const Sentinel = () => {
  const { theme } = useTheme();
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'AI & Automation', href: '/products/ai-&-automation' },
          { label: 'Enigma Sentinel' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeroSection
        title={<>AI-powered network operations with human control</>}
        description="Enigma Sentinel helps teams monitor network infrastructure, diagnose incidents faster and   
support controlled remediation through AI-assisted operations, clear audit trails and human-in-
the-loop oversight.  "
        image={aiInfra}
        buttons={[
          {
            label: 'Talk to Enigma  ',
            href: '/get-in-touch',
            variant: 'blue',
          },
        ]}
        features={[
          'Autonomous monitoring ',
          'AI-assisted diagnosis ',
          'Controlled remediation ',
          'Audit visibility  ',
        ]}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Network operations are becoming harder <Br isDesktop /> to manage manually
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            As networks, cloud environments and distributed sites become more complex, operations
            teams face more alerts, more performance data and more incidents to interpret.
            <br />
            <br />
            Manual triage can slow response times, increase operational pressure and make it harder
            to understand what happened, why it happened and what action was taken.
          </>
        }
        data={Core}
        cardShow={4}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  AI-assisted operations with visibility, <Br isDesktop />
                  control and accountability
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Sentinel acts as the AI operations agent within the Enigma Net ecosystem. It
            continuously monitors network infrastructure, helps diagnose incidents, supports
            controlled remediation and provides operational insight for teams managing complex
            environments.
            <br />
            <br />
            Sentinel is designed to improve response times and reduce manual effort while keeping
            operators in control. Through Enigma Command, teams can see what Sentinel is doing,
            review incident timelines and manage automation levels.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built into the Enigma platform experience</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Sentinel works alongside Enigma Nexus and Enigma Command to give customers a joined-up
            operational view.
          </>
        }
        data={Core1}
        transitionLine={
          <>
            Sentinel does the analysis and operational work.
            <br /> Command gives people visibility and control.
            <br /> Nexus brings the platform together.
          </>
        }
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>What Sentinel does</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Core2}
      />
      <CaseStudyHighlight
        data={[
          'Unified incident view showing active issues and handling status  ',
          'Real-time decision stream showing automated activity and rationale  ',
          'Per-incident timelines covering alerts, analysis, actions and outcomes  ',
          'Live controls to pause, approve or override automated actions  ',
          'Performance visibility across latency, jitter, packet loss and tunnel health  ',
          'Daily operational logs and exportable reports  ',
        ]}
        description={
          <>
            Through Enigma Command, operators can work alongside Sentinel rather than handing
            control to automation without visibility.{' '}
          </>
        }
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Automation without the black box"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CardSlider
        description={
          <>
            Sentinel is available in tiers depending on how much AI-assisted analysis, operator
            guidance and automation a customer needs.{' '}
          </>
        }
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Choose the right level of AI operations support</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Core3}
      />
      <ReusableTable
        columns={column1}
        data={comparisonData1}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Sentinel pricing </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Sentinel Essentials is included with ESC Secure Networking. Sentinel Assist and Sentinel
            Autopilot are available as additional AI operations tiers.
          </>
        }
        isbold
        showButtons
        primaryButton={{
          label: 'Talk to Enigma about Sentinel pricing',
          href: '/get-in-touch',
          disableSentenceCase: true,
        }}
      />
      <CaseStudyHighlight
        data={[
          'Faster incident response without relying entirely on manual triage   ',
          'Clearer operational visibility into what is happening and why  ',
          'Safer automation adoption with controls, auditability and oversight  ',
          'Better reporting and governance for operational reviews    ',
          'A scalable operating model for growing networks and distributed environments   ',
        ]}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Why customers choose Sentinel"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <CaseStudyHighlight
        data={[
          'Network operations teams  ',
          'Infrastructure and platform teams  ',
          'Managed service providers  ',
          'Distributed enterprises  ',
          'ESC Secure Networking customers   ',
          'Teams managing multiple sites or complex network environments  ',
        ]}
        description={
          <>
            Sentinel is especially valuable for organisations that need faster incident handling,
            clearer operational visibility and a safer path from manual operations towards more
            automated network management.
          </>
        }
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Who Sentinel is for"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <Faqs faqs={enigmaSentinelFaqs} sectionTitle="FAQs" title="Common questions" />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Improve network operations with AI-assisted monitoring, <br />
          </>
        }
        headline2="diagnosis and controlled
            remediation.  "
        primaryButton={{
          label: 'Talk to Enigma',
          href: '/get-in-touch',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default Sentinel;
