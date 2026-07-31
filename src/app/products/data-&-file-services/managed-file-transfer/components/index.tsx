import { startup3 } from '@/assets/img/partners/inddex';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CardSlider from '@/components/ui/CardSlider';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroSection from '@/components/ui/HeroSection';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import FooterStatement from '@/components/ui/FooterStatement';
import ReusableTable from '@/components/ui/Table';
import MatricCardSlider from '@/components/ui/MatricCardSlider';
import Faqs from '@/components/ui/faq';
import CTA from '@/components/ui/CtaBand';
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Manual transfers create operational risk ',
    description: `Recurring jobs can be missed, delayed or inconsistently handled when they depend on manual   
action.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Data pipelines need reliability  ',
    description: `Backups, logs, datasets and compliance files often need to move on time and complete   
successfully.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Network conditions can break transfer windows  ',
    description:
      'Loss, latency and congestion can cause large transfers to miss SLA windows or fail part-way through.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Security and integrity need proof  ',
    description: `Teams need encryption, hashing, logs and clear evidence of what moved, when and whether it   
arrived intact.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Visibility is often fragmented   ',
    description:
      'Without a central dashboard, it can be hard to see which jobs are running, failed, paused, skipped or complete.   ',
  },
];
const Ecosystem = [
  {
    id: 1,
    icon: block1,
    title: 'APN Core / ESC Secure Networking  ',
    description: `Provides the accelerated transport layer using TCP acceleration, dynamic bonding and RAIN   
resilience.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Managed File Transfer  ',
    description: `Provides the policy-driven engine for scheduled, recurring and automated transfer jobs.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Large File Transfer  ',
    description:
      'Provides the ad hoc transfer engine for shareable links, external upload portals and user-led file sends.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Hot Storage  ',
    description: `Provides the S3-compatible object storage backend and simplified storage economics for   
transfer destinations.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'SyncSphere ',
    description:
      'Provides the user-facing file management layer inside Nexus for managing transfers, jobs and file movement.   ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Enigma Hub ',
    description:
      'Provides IAM-aware access control for who can create, schedule, manage and review MFT jobs.  ',
  },
];
const column1 = [
  { key: 'type', label: '' },
  { key: 'large-file-transfer', label: 'Large File Transfer  ' },
  { key: 'managed-file-transfer', label: 'Managed File Transfer  ' },
];

const comparisonData1 = [
  {
    type: 'Mode',
    'large-file-transfer': 'Ad hoc, user-led',
    'managed-file-transfer': 'Scheduled, recurring, policy-driven',
  },
  {
    type: 'Best for',
    'large-file-transfer':
      'One-off sends, shareable links, external uploads, download links, project delivery',
    'managed-file-transfer':
      'Nightly sync jobs, repeat workflows, automated file movement, compliance-led transfers',
  },
  {
    type: 'Trigger',
    'large-file-transfer': 'A person clicks send or creates a link',
    'managed-file-transfer':
      'A schedule runs, a policy triggers, or an admin manually triggers a job',
  },
  {
    type: 'User experience',
    'large-file-transfer': 'Recipient-friendly web portal',
    'managed-file-transfer': 'Admin-controlled job dashboard',
  },
  {
    type: 'Typical audience',
    'large-file-transfer':
      'Editors, creators, external collaborators, project teams	',
    'managed-file-transfer': 'Data engineers, admins, backup teams, compliance teams, NOC/support',
  },
];
const features = [
  {
    id: 1,
    icon: block1,
    title: 'Recurring jobs  ',
    description: `Define scheduled transfer jobs that sync files between storage environments.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Include and exclude patterns  ',
    description: `Control which files, folders or file types should be included or excluded from each job.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Bandwidth controls  ',
    description:
      'Set job-level maximum bandwidth so transfer activity does not disrupt other services. ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Retention rules  ',
    description: `Apply retention rules to support archive, compliance or operational policies.   `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Manual trigger option   ',
    description:
      'Run a job outside its normal schedule when needed, such as after a one-off bulk ingest.  ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Retry rules',
    description:
      'Use scheduling and retry behaviour to improve resilience when transfers fail or network conditions change.  ',
  },
];
const targets = [
  {
    id: 1,
    icon: block1,
    title: 'On-prem SMB/NFS shares  ',
    description: `Automate movement from existing on-premise file shares.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'S3 buckets  ',
    description: `Move data into S3-compatible storage environments, including AWS, Azure, GCP and Enigma   
Hot Storage.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Hot Storage  ',
    description: 'Use Enigma Hot Storage as an accelerated object storage destination.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Cross-region destinations  ',
    description: `Schedule movement between regions for resilience, distribution or operational workflows.   `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Cross-cloud destinations  ',
    description:
      'Support file movement across cloud storage environments where configured through SyncSphere.  ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Other SyncSphere targets  ',
    description: 'Use supported connected targets within the SyncSphere environment.  ',
  },
];
const security = [
  {
    id: 1,
    icon: block1,
    title: 'PGP encryption  ',
    description: `Supports PGP encryption for transfer workflows requiring protected data movement.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'SHA-256 hashing  ',
    description: `Uses SHA-256 hashing and integrity checks to help verify files end-to-end.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'APN-accelerated secure transfer  ',
    description: 'Transfers are accelerated by APN while staying on TCP port 443.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Integrity validation  ',
    description: `Supports checks that help confirm files were transferred successfully and without corruption.   `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Policy-led operation  ',
    description: 'Security and integrity requirements can be built into recurring job policies.  ',
  },
];
const data7 = [
  {
    id: 1,
    title: '39–64× speedups  ',
    description:
      'Designed to deliver significant speedups versus raw TCP on long-haul, lossy links.  ',
  },
  {
    id: 2,
    title: 'TCP port 443  ',
    description:
      'Stays on TCP/443 to avoid firewall friction from custom UDP transfer protocols.  ',
  },
  {
    id: 3,
    title: 'Graceful resume  ',
    description:
      'Supports transfer recovery after network disruption, helping jobs continue without restarting unnecessarily.',
  },
  {
    id: 4,
    title: 'Retries and monitoring  ',
    description:
      'Includes retries, throughput monitoring, elapsed time and hop-by-hop loss visibility.  ',
  },
  {
    id: 5,
    title: 'Reliable job windows  ',
    description:
      'Helps recurring jobs complete within defined operational windows, even when network conditions are imperfect.   ',
  },
];
const visibility = [
  {
    id: 1,
    icon: block1,
    title: 'Live dashboards  ',
    description: `View throughput, remaining time, current job status and hop-by-hop loss.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Per-job telemetry  ',
    description: `Monitor each job individually, including retries, performance and progress.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Job status indicators  ',
    description: 'Track whether jobs are running, idle, failed, paused or complete.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Detailed job logs  ',
    description: `See which files were transferred, skipped, deleted or failed.   `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Last-run results   ',
    description: 'Review the outcome of the most recent job execution.  ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Historical run history  ',
    description:
      'Access job history over time for troubleshooting, reporting and operational review.   ',
  },
];
const governance = [
  {
    id: 1,
    icon: block1,
    title: 'IAM-aware permissions  ',
    description: `Control who can create, schedule, manage and review MFT jobs through Enigma Hub.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Read-only reviewer access  ',
    description: `Give compliance reviewers visibility into job definitions and history without allowing accidental   
changes.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Full activity audit  ',
    description: 'Track job activity, transfer events, user actions and outcomes.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Exportable logs  ',
    description: `Export logs for compliance review, audit evidence or operational reporting.    `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Per-tenant policies   ',
    description: 'Apply automated enforcement rules across a tenant environment.   ',
  },
];
const journey = [
  {
    id: 1,
    icon: block1,
    title: 'Backup vendor running nightly WAN jobs  ',
    description: `Define MFT jobs from on-prem NFS shares to Hot Storage. APN acceleration, bonding and RAIN   
help keep jobs within SLA even under loss and congestion.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Studio consolidating assets from Dropbox or Drive  ',
    description: `Connect cloud accounts through SyncSphere, then set MFT policies for nightly incremental sync   
and long-term archive into Hot Storage.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Enterprise running compliance-led data movement  ',
    description:
      'Schedule recurring transfer jobs with PGP encryption and SHA-256 hashing. Export audit logs for regulatory review and give auditors read-only access.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Data engineer running cross-region copies  ',
    description: `Define jobs targeting S3 buckets across AWS, Azure, GCP and Hot Storage in a single policy.   
Monitor throughput and job health from a central dashboard.   `,
  },
];
const persona = [
  {
    id: 1,
    icon: block1,
    title: 'Data engineers and DevOps teams  ',
    description: `For automated pipelines moving AI datasets, models, logs, archives and large technical files.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Customer admins  ',
    description: `For teams managing job policies, schedules, user access and transfer visibility.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Backup and compliance teams   ',
    description:
      'For evidence movement, regulated data exchange, recurring file packages and compliance data.    ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Support and NOC teams  ',
    description: `For file-layer issue visibility, failed job investigation and escalation support.   `,
  },
];
const data8 = [
  {
    id: 1,
    title: 'Compared with IBM Aspera  ',
    description:
      'MFT stays on TCP/443, avoids firewall friction and includes PGP encryption and SHA-256 integrity checks natively.  ',
  },
  {
    id: 2,
    title: 'Compared with Signiant  ',
    description:
      'MFT supports scheduled transfer workflows with APN acceleration and integration inside the Enigma platform.  ',
  },
  {
    id: 3,
    title: 'Compared with Riverbed SteelHead  ',
    description:
      'MFT is purpose-built for file transfer automation rather than general WAN optimisation.  ',
  },
  {
    id: 4,
    title: 'Compared with FileCatalyst   ',
    description:
      'MFT avoids the firewall friction associated with custom UDP-based transfer protocols.  ',
  },
];
export const mftfaq = [
  {
    question: 'What is Enigma Managed File Transfer?  ',
    answer:
      'Enigma MFT is the policy-driven, scheduled transfer engine inside SyncSphere. It automates recurring file movement between storage environments with encryption, integrity checks, monitoring and governance.  ',
  },
  {
    question: 'How is MFT different from LFT?  ',
    answer:
      'LFT is for ad hoc, user-led file sends using shareable links. MFT is for recurring, scheduled and policy-driven file movement that needs to run automatically.  ',
  },
  {
    question: 'Can MFT jobs be triggered manually?  ',
    answer: 'Yes. MFT jobs can be manually triggered outside their normal schedule when needed.  ',
  },
  {
    question: 'What storage targets does MFT support?  ',
    answer:
      'MFT can target on-prem SMB/NFS shares, S3-compatible buckets including AWS, Azure, GCP and Enigma Hot Storage, and other supported targets within SyncSphere.  ',
  },
  {
    question: 'Does MFT support encryption and integrity checks?   ',
    answer: 'Yes. MFT supports PGP encryption, SHA-256 hashing and end-to-end integrity checks.  ',
  },
  {
    question: 'Does MFT use UDP?  ',
    answer:
      'No. MFT stays on TCP port 443, helping avoid firewall friction from custom UDP transfer protocols.  ',
  },
  {
    question: 'Can compliance reviewers access job history?  ',
    answer:
      'Yes. MFT can support read-only access to job definitions and history for compliance review.   ',
  },
  {
    question: 'Is MFT pricing confirmed?  ',
    answer: 'No. A dedicated MFT pricing model still needs commercial confirmation.  ',
  },
];
const ManagedFileTransferData = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Data & File Services', href: '/products/data-&-file-services' },
          { label: 'Managed File Transfer' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeroSection
        title={<>Automated file movement for workflows that cannot rely on manual transfer</>}
        description={
          <>
            Enigma Managed File Transfer automates recurring file movement between storage
            environments with scheduling, encryption, integrity checks, APN acceleration, monitoring
            and governance.
          </>
        }
        image={startup3}
        buttons={[
          {
            label: 'Talk to Enigma  ',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={[
          'Scheduled transfers',
          'Policy-driven jobs',
          'APN acceleration',
          'TCP/443',
          'Audit visibility',
        ]}
        transitionLine={
          <div className="text-dark">
            Schedule the job. Protect the data. Monitor the transfer. Keep the pipeline moving.
          </div>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>Recurring file movement should not depend on people remembering to press send</>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Many teams rely on recurring file movement for backups, evidence exchange, compliance
            workflows, dataset movement, operational logs and cross-cloud storage pipelines.
            <br />
            <br />
            When these transfers are manual, they become fragile. Jobs are missed, files are
            duplicated, errors go unnoticed and compliance evidence becomes difficult to prove.
            <br />
            <br />
            MFT is designed for teams that need repeatable file movement with scheduling, policy
            control, monitoring and auditability.
          </>
        }
        data={Core}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Scheduled, policy-driven file transfer with acceleration and governance</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Managed File Transfer automates the movement of files between storage
            environments on a schedule, with encryption, integrity checks, retries, monitoring and
            audit visibility.
            <br />
            <br />
            It gives teams a controlled way to run recurring transfer jobs without relying on manual
            intervention, while APN acceleration helps improve transfer speed and reliability across
            difficult network conditions.
          </>
        }
      />
      <FooterStatement
        text={
          <>
            <HeaderTitle
              className="text-center h2 "
              key={theme}
              title={<>MFT turns file movement into a managed workflow, not a manual task.</>}
              variant={theme === 'dark' ? 'blue' : 'gold'}
            />
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>How MFT fits into the Enigma platform</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Managed File Transfer works inside the wider Enigma SyncSphere, APN and Nexus ecosystem.
          </>
        }
        data={Ecosystem}
        transitionLine={
          <>
            APN accelerates the route. MFT automates the job. SyncSphere gives users the dashboard,
            scheduling and control layer. Hot Storage provides the storage destination. Hub controls
            permissions and access.
          </>
        }
      />
      <ReusableTable
        columns={column1}
        data={comparisonData1}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>The difference between Large File Transfer and Managed File Transfer</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            LFT and MFT are sister capabilities inside SyncSphere, but they are designed for
            different transfer behaviours.
          </>
        }
        footerText={
          <>
            LFT is for sending large files when people need them. MFT is for recurring file movement
            when the workflow needs to run automatically.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Automate recurring transfer jobs with policy control</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            MFT provides a policy-driven job layer for recurring and automated transfers between
            storage environments.
          </>
        }
        data={features}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Move files between the storage environments your teams depend on</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            MFT jobs can target multiple storage environments within a single policy, supporting on-
            premise, cloud, cross-region and cross-cloud workflows.
          </>
        }
        data={targets}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Protect the transfer and prove the file arrived intact</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            MFT is designed for workflows where data movement needs security, integrity and
            governance, not just speed.
          </>
        }
        data={security}
      />
      <MatricCardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>APN-accelerated transfer for difficult network conditions</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            MFT inherits the same APN acceleration as Large File Transfer, helping recurring jobs
            complete more reliably across long-haul, lossy or congested network paths.
          </>
        }
        data={data7}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Know what is running, what completed and what needs attention</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            MFT gives operational teams visibility across active, scheduled and historical transfer
            jobs.
          </>
        }
        data={visibility}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for controlled and compliance-led file movement</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            MFT supports organisations that need controlled file movement, auditability and review
            access for compliance or operational governance.
          </>
        }
        data={governance}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for recurring file movement that matters</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={journey}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Who MFT is for</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={persona}
      />
      <MatricCardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Managed transfer without custom protocol friction</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            MFT is positioned as the automated, policy-driven complement to LFT. It sits in the
            managed workflow space, helping teams automate recurring transfer jobs while avoiding
            the firewall friction associated with custom UDP protocols.
          </>
        }
        data={data8}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>MFT pricing</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            <strong className="text-dark">
              {' '}
              Managed File Transfer pricing is tailored to your workflow.{' '}
            </strong>{' '}
            <br />
            Pricing depends on transfer volume, storage destination, scheduling requirements,
            compliance needs and the level of APN-accelerated automation required. Speak to Enigma
            Net to confirm the right model for your environment.{' '}
          </>
        }
        showButtons
        primaryButton={{
          href: '/get-in-touch',
          label: 'Talk to Enigma about MFT pricing  ',
          disableSentenceCase: true,
          variant: theme === 'dark' ? 'gold' : 'blue',
        }}
      />
      <Faqs faqs={mftfaq} sectionTitle="FAQs" title="Common questions" />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Automate recurring file movement with scheduling, <br />
          </>
        }
        headline2=" acceleration, integrity checks and
            governance."
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

export default ManagedFileTransferData;
