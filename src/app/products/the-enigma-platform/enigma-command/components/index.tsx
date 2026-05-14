import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import { enterprise as heroImg } from '@/assets/img';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';
import NextPageSlider from '@/components/ui/NextPageSlider';
import { useSlug } from '@/utils/useSlug';
import { type CardItem } from '@/components/ui/card';
import CardWithUseCase from '@/components/ui/CardWithUseCase';
import FeatureComparison from '@/components/ui/FeatureComparison';
import Br from '@/components/ui/NewLine';
const features = [
  {
    id: 1,
    title: 'Nexus  ',
    href: '/products/enigma-platform/enigma-nexus',
    slug: 'enigma-nexus',
    description:
      'The universal interface that brings Enigma services, users, workflows and modules together.  ',

    meta: {
      title: 'Nexus  ',
      description:
        'The universal interface that brings Enigma services, users, workflows and modules together.  ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'Grid  ',
    href: '/products/enigma-platform/enigma-grid',
    slug: 'enigma-grid',
    description: 'Shows the assets, devices, sites and topology involved in operational events.   ',

    meta: {
      title: 'Command',
      description:
        'Shows the assets, devices, sites and topology involved in operational events.   ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'Hub',
    href: '/products/enigma-platform/enigma-hub',
    slug: 'enigma-hub',
    description: 'Controls users, roles, tenants, permissions, subscriptions and access context.  ',

    meta: {
      title: 'Hub ',
      description:
        'Controls users, roles, tenants, permissions, subscriptions and access context.  ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'Ledger ',
    href: '/products/enigma-platform/enigma-ledger',
    slug: 'enigma-ledger',
    description:
      'Stores audit trails, action history, approvals, overrides and compliance records.   ',

    meta: {
      title: 'Ledger',
      description:
        'Stores audit trails, action history, approvals, overrides and compliance records.  ',
    },
    image: heroImg,
  },
  {
    id: 5,
    title: 'SyncSphere   ',
    href: '/products/enigma-platform/enigma-syncsphere',
    slug: '/enigma-syncsphere',
    description:
      'Connects file, storage, sync and data movement workflows where incidents relate to transfer or storage activity.  ',
    image: heroImg,
    meta: {
      title: 'SyncSphere',
      description:
        'Connects file, storage, sync and data movement workflows where incidents relate to transfer or storage activity.  ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Too many disconnected signals  ',
    description: `Alerts, tickets, emails, telemetry and infrastructure events often sit across separate tools.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Limited visibility into automation ',
    description: `Operators need to know what the agent is doing, why it is acting and when it needs approval. `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Slow incident response  ',
    description:
      'When operational context is scattered, teams lose time moving between systems before they can act.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Audit pressure ',
    description:
      'Regulated and critical environments need clear evidence of every incident, action, approval and override.',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Incidents   ',
    description: `See active incidents, severity, ownership and status in one place.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Agent actions  ',
    description: `Review what the LLM agent has detected, recommended, escalated or resolved.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Live controls    ',
    description: 'Pause, resume, override, defer or approve automation when required.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Operational timelines  ',
    description: 'View the sequence of alerts, analysis, actions, outcomes and operator notes.   ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Audit history  ',
    description:
      'Export logs, reports and incident evidence for management, compliance and post-mortem review.   ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: 'Monitoring  ',
    description: `Zabbix alerts, SNMP metrics, email-based alarms, ViBE and ITM statistics.  
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Ticketing and collaboration  ',
    description: `Jira ticket status, comments, escalation triggers and technician overrides.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Communication  ',
    description: 'Microsoft 365 incident-related emails and communications via Graph API.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Infrastructure  ',
    description:
      'Kubernetes and AWS events connected to scaling, recovery and self-healing workflows.   ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Enigma backend    ',
    description:
      '.NET APIs for tunnel stats, device status, service data and operational context.  ',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'Monitor only  ',
    description: `The agent observes, analyses and reports without taking direct action.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Recommend   ',
    description: 'The agent suggests actions for operators to review and approve.',
  },
  {
    id: 3,
    icon: block1,
    title: 'Assisted remediation  ',
    description:
      'The agent can perform approved actions while operators retain pause and override control.   ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Full auto-remediation  ',
    description:
      'The agent acts within agreed policy limits, with all decisions logged and auditable.  ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Supporting note  ',
    description: `Every mode change is logged with user identity, timestamp and reason where provided.  `,
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'NOC operators    ',
    description: `Monitor the live log, acknowledge alerts, adjust automation mode and request diagnostics.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Duty managers and team leads    ',
    description: `Review daily reports, track KPIs, receive high-risk event alerts and decide what is safe to automate.  `,
  },
  {
    id: 3,
    icon: block1,
    title: 'Platform and SRE engineers  ',
    description: `Use performance graphs and incident history to identify recurring issues, tune policies and   
adjust scaling rules.  `,
  },
  {
    id: 4,
    icon: block3,
    title: 'Compliance and audit teams  ',
    description: `Export incident timelines, operational logs and action histories for governance and external   
review.  `,
  },
];
const data = [
  {
    id: 1,
    icon: block1,
    title: 'Authentication and SSO  ',
    description: `Access is restricted to authenticated users through Enigma SSO or directory integration.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Role-based access control  ',
    description: `Users only see the customers, services and actions they are authorised to access.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Action and approval logging   ',
    description:
      'Every operator and agent action is recorded with identity, timestamp and action context.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Guardrails and rate limits  ',
    description: 'Policy controls prevent unsafe, excessive or unauthorised actions.   ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Audit support  ',
    description:
      'Exportable timelines, reports and logs support ISO 27001, SOC 2 and ITIL-style governance.  ',
  },
];

const capabilities = [
  {
    id: 1,
    title: 'Unified dashboard  ',
    description:
      'A single operational view of incidents, alerts, automation activity and performance events.  ',
    usecase: [
      'Active incidents by severity, customer, region and time window  ',
      'Recent automated actions and escalations   ',
      'Per-incident timelines showing alerts, analysis, actions and outcomes  ',
    ],
  },
  {
    id: 2,
    title: 'Live controls and overrides  ',
    description:
      'Operators can control automation levels and intervene before sensitive actions are executed.  ',
    usecase: [
      'Pause, resume or drain agent activity  ',
      'Cancel, defer or approve queued actions   ',
      'Trigger diagnostics or re-analysis on specific sites or devices  ',
    ],
  },
  {
    id: 3,
    title: 'Daily operational log   ',
    description:
      'Command creates a clear daily record of incidents, automated actions, escalations and unusual patterns. ',
    usecase: [
      'Incident counts and one-line summaries  ',
      'Auto-resolved and escalated events  ',
      'Exportable PDF, JSON and CSV reports  ',
    ],
  },
  {
    id: 4,
    title: 'Visualisation and metrics  ',
    description:
      'Teams can quantify the impact of automation and track performance across customers and services.   ',
    usecase: [
      'Incident volume by customer and day  ',
      'Auto-resolution rate versus human-handled events  ',
      'Mean time to detect and resolve  ',
    ],
  },
  {
    id: 5,
    title: 'Agent platform health  ',
    description:
      'Command also monitors the health of the automation layer itself, so teams know when connectors or services are degraded.  ',
    usecase: [
      'Connector status for Zabbix, SNMP, Jira, Microsoft 365 and .NET APIs  ',
      'Liveness and readiness of microservices and LLM engines  ',
      'Alerts for failed containers, connectors or inference endpoints ',
    ],
  },
  {
    id: 6,
    title: 'Historical search and audit   ',
    description:
      'Search, review and export the full history of incidents, actions, communications and operator decisions.  ',
    usecase: [
      'Search by customer, device, protocol, outcome or time range ',
      'Export incident timelines for audit or review   ',
      'Add shift notes, handover comments and lessons learned  ',
    ],
  },
];
const workflows = [
  {
    id: 1,
    title: 'Live incident oversight  ',
    transitionLine:
      'Operators see what happened, what the agent did and what needs human action.  ',
    usecase: [
      'Alert is ingested from Zabbix, SNMP or email',
      'Agent opens a new incident in Command  ',
      'Operator watches the live timeline as analysis runs   ',
      'Agent recommends or applies an approved action  ',
      'Operator pauses, approves or overrides if needed  ',
      'Outcome is logged against the incident record  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 2,
    title: ' Daily review and tuning  ',
    transitionLine: 'Command helps teams improve automation safely over time.   ',
    usecase: [
      'NOC lead opens the daily Command report  ',
      'Incident counts, escalations and recurring issues are reviewed  ',
      'Patterns are tagged for knowledge base updates  ',
      'Policies or automation rules are adjusted  ',
      'Lessons feed back into the operational learning loop  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 3,
    title: ' Audit and post-mortem  ',
    transitionLine: 'Every operational decision can be traced, reviewed and evidenced.  ',
    usecase: [
      'Investigator searches by customer, site, device or ticket ID  ',
      'Full timeline is pulled from Command  ',
      'Alerts, agent analysis, actions, approvals and notes are reviewed',
      'Timeline is exported for post-incident reporting  ',
      'Evidence is attached to compliance or governance records  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
];
const Command = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'The Enigma Platform', href: '/products/the-enigma-platform' },
          { label: 'Enigma Command' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={<>Operational control for AI-assisted network management</>}
        description="Enigma Command gives NOC and platform teams a single operational view of incidents, alerts,   
        LLM-agent actions, automation status and performance events across Enigma Net services.  "
        // image={heroImg}
        buttons={[
          {
            label: ' Talk to Enigma  ',
            href: '/get-in-touch',
            variant: 'blue',
          },
        ]}
        features={[
          'Live incident visibility',
          'Human-in-the-loop control',
          ' Full operational audit  ',
        ]}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Automation only works when <Br isDesktop isTablet />
                  teams can see and control it
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            As Enigma services scale across customers, regions and environments, operational teams
            need more than alerts. They need to understand what the AI agent has detected, what
            action it recommends, what it has already done, and when human approval is required.
            <br />
            <br />
            Without a clear command layer, incidents, tickets, telemetry,
            <br /> emails and automation decisions can become fragmented.
            <br />
            <br />
            Enigma Command brings those signals into one operational view.
          </>
        }
        data={Core}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Command gives operators one live view of incidents, agent actions and operational
                  control
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Command sits inside Nexus as the NOC-facing command centre. It surfaces activity
            from the LLM-based agent and connects operational data from Zabbix, SNMP, Jira,
            Microsoft 365, ViBE, ITM and the Enigma.NET backend.
            <br />
            <br />
            It does not replace product configuration pages. It provides the operational control
            surface above them.
          </>
        }
        data={data2}
      />
      <CardWithUseCase
        data={capabilities as CardItem[]}
        headerTitle={
          <>
            Built for live operations, AI collaboration
            <Br isDesktop isTablet />
            and audit-ready control
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
                  AI-assisted operations, with human
                  <Br isDesktop isTablet /> control where it matters
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Command allows Enigma teams to choose the right automation mode for <br /> each
            customer, region or situation. The agent can monitor, recommend, <br /> escalate or
            remediate depending on the level of control selected.
            <br />
            <br />
            Operators stay in command. Automation supports the team, <br />
            but sensitive actions can still require human approval.
          </>
        }
        data={data4}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Designed for the teams responsible <Br isDesktop isTablet /> for live service
                  control
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Command gives each operational role the right level of visibility, control and evidence.
          </>
        }
        data={data5}
      />
      <CardWithUseCase
        data={workflows as CardItem[]}
        headerTitle={
          <>
            From live incident to audit trail, Command <Br isDesktop isTablet /> keeps the operation
            connected
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
                  Connected to the systems operations <Br isDesktop isTablet />
                  teams already rely on
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Command does not collect telemetry directly. It surfaces and correlates data from the
            LLM-agent layer and its connectors, turning multiple operational feeds into a
            human-friendly command view.
          </>
        }
        data={data3}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Controlled access. Logged actions.
                  <Br isDesktop isTablet /> Audit-ready evidence
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <div
            style={{
              maxWidth: '40rem',
            }}
          >
            Command inherits security and governance from the wider Nexus and <br /> LLM-agent
            architecture. Access is role-based, actions are logged, <br />
            and automation is constrained by policy validators, allow lists and rate limits.
          </div>
        }
        data={data}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Command is the operations layer, <Br isDesktop isTablet />
                  not the product configuration portal
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Command is focused on live operations, incident oversight, AI collaboration and
            audit history. It does not replace the configuration pages for Connect, EDGE, ESC or
            storage products.
            <br />
            <br />
            Those product-specific controls remain in their relevant Nexus modules and product
            interfaces.
          </>
        }
        benitsTitle="Command is"
        limitationsTitle="Command is not"
        benefits={[
          'The NOC-facing command centre inside Nexus  ',
          'The operational surface for the LLM agent  ',
          'The place to observe, control and audit automation',
          'The incident, action and escalation view across Enigma Net services  ',
        ]}
        limitations={[
          'A general configuration portal for Connect, EDGE, ESC or storage  ',
          'A replacement for Zabbix, Jira, Microsoft 365 or other source systems  ',
          'A low-level APN or ViBE engineering interface   ',
          'A duplicate monitoring platform  ',
        ]}
      />

      <NextPageSlider
        title="Command works with the wider Nexus platform.  "
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Give operations teams one place to see, control and <br />
          </>
        }
        headline2=" audit live infrastructure.  "
        description="Enigma Command brings incidents, alerts, agent activity, automation controls and operational   
history into one command centre for Enigma Net services.   "
        primaryButton={{
          label: 'Talk to Enigma  ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'See Grid in action',
          href: '#',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default Command;
