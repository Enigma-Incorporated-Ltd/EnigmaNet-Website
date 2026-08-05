import { operations } from '@/assets/img';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CardSlider from '@/components/ui/CardSlider';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroSection from '@/components/ui/HeroSection';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import Br from '@/components/ui/NewLine';
import FooterStatement from '@/components/ui/FooterStatement';
import MatricCardSlider from '@/components/ui/MatricCardSlider';
import Faqs from '@/components/ui/faq';
import CTA from '@/components/ui/CtaBand';
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Storage costs become unpredictable ',
    description: `Traditional cloud storage can become expensive once egress, API calls and data movement are   
added.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Large transfers slow down work  ',
    description: `Media files, backups, logs and large data sets can be difficult to move reliably across ordinary   
networks.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Files are spread across too many platforms  ',
    description:
      'Teams often work across NAS, Dropbox, Drive, OneDrive and cloud storage with no single view.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'External sharing creates risk  ',
    description: `Temporary access, collaborator uploads and compliance data sharing need better control and   
auditability.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Teams need access without downloading everything  ',
    description:
      'Large libraries need to be browsed, searched and accessed without forcing users to pull entire data sets locally.  ',
  },
];
const stack = [
  {
    id: 1,
    icon: block1,
    title: 'APN Core / ESC Secure Networking  ',
    description: `Provides the accelerated and resilient network fabric using TCP acceleration, dynamic bonding   
and RAIN resilience.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Hot Storage  ',
    description: `Provides the cloud object storage layer, exposed through S3-compatible APIs and flat monthly   
pricing.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'SyncSphere  ',
    description:
      'Provides the user and workflow layer for browsing, transferring, sharing and governing files.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'LFT / MFT  ',
    description: `Moves data in and out of Hot Storage through accelerated large file transfer and managed file   
transfer workflows.  `,
  },
];
const features = [
  {
    id: 1,
    icon: block1,
    title: 'S3-compatible object storage ',
    description: `Use Hot Storage as performance cloud object storage with buckets presented as project   
workspaces.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Project workspaces ',
    description: `Organise storage around projects, teams, clients or operational workflows.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Tree-view browsing  ',
    description:
      'Browse folder structures with lazy loading, making large libraries easier to navigate.',
  },
  {
    id: 4,
    icon: block1,
    title: 'Per-item metadata  ',
    description: `View file size, timestamps and key item information without losing context.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Versioning and restore points  ',
    description: `Support versioning and restore points for selected folders and protected workflows.  
`,
  },
  {
    id: 6,
    icon: block3,
    title: 'File stubs and local cache  ',
    description:
      'Browse large libraries through the desktop experience without downloading everything locally.  ',
  },
  {
    id: 7,
    icon: block1,
    title: 'Streamed access  ',
    description: `HTTP range request support allows users to start working with files before a full download   
completes.  `,
  },
];
const transfer = [
  {
    id: 1,
    icon: block1,
    title: 'Large File Transfer, LFT  ',
    description: `A MASV-style ad-hoc portal for uploading and downloading large packages. Supports one-time   
or reusable links for non-account users.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Managed File Transfer, MFT  ',
    description: `Policy-driven recurring or scheduled transfer jobs with encryption, hashing, retries and live   
dashboards.  
`,
  },
  {
    id: 3,
    icon: block3,
    title: 'APN-accelerated transfers  ',
    description:
      'Transfers are accelerated by APN while staying on TCP port 443, helping avoid firewall friction from custom UDP protocols.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Live transfer visibility ',
    description: `Dashboards show transfer progress, status, retries and performance information.   `,
  },
];
const integrate = [
  {
    id: 1,
    icon: block1,
    title: 'OneDrive ',
    description: `Connect Microsoft cloud storage alongside Hot Storage.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Google Drive  ',
    description: `Bring Google-based storage into the same file management view.  
`,
  },
  {
    id: 3,
    icon: block3,
    title: 'NAS integration  ',
    description:
      'Connect compatible NAS environments including Synology, WebDAV and SMB sources.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Server-side copy where possible  ',
    description: `Move data between connected sources efficiently where supported.  
`,
  },
  {
    id: 4,
    icon: block3,
    title: 'Drag-and-drop workflows  ',
    description:
      'Move files and folders between sources using a simpler file management experience.   ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Consolidation without disruption  ',
    description: `Bring assets into Hot Storage over time while existing tools remain available.  `,
  },
];
const governance = [
  {
    id: 1,
    icon: block1,
    title: 'IAM-aware permissions   ',
    description: `Folder-level read/write or read-only access managed through Enigma Hub.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Temporary links and share tokens  ',
    description: `Create time-limited links for external collaborators, uploads or controlled file sharing.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Activity audit  ',
    description:
      'Track user actions, file activity and access events for operational review and compliance support.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Exportable logs ',
    description: `Export activity data and logs where required for governance and reporting.`,
  },
  {
    id: 5,
    icon: block3,
    title: 'Per-source health metrics  ',
    description:
      'View throughput, connection status, last sync time and error rates across connected sources.   ',
  },
];

const desktop = [
  {
    id: 1,
    icon: block1,
    title: 'Windows, macOS and Linux  ',
    description: `Supports users across common desktop environments.  
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'File stubs  ',
    description: `Browse entire libraries without downloading everything.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Local cache  ',
    description: 'Keep active files available locally while reducing unnecessary storage use.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Bandwidth throttling  ',
    description: `Control background sync so transfers do not interfere with calls or live work.  `,
  },
  {
    id: 5,
    icon: block3,
    title: 'Offline mode  ',
    description: 'Queue changes while offline and reconcile automatically when reconnected.  ',
  },
  {
    id: 6,
    icon: block2,
    title: 'Integrated VPN and monitoring  ',
    description: 'Support secure access and visibility as part of the Enigma experience.   ',
  },
];
const pricing = [
  {
    id: 1,
    icon: block1,
    title: 'Storage pricing  ',
    description: `<strong class="text-dark ">US$9.99 per TB</strong> per month.  
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Included connectivity  ',
    description: `Storage pricing includes APN Lite connectivity.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Named user access  ',
    description: `<strong class="text-dark ">US$1.00 per </strong> named user per month.  `,
  },
  {
    id: 4,
    icon: block1,
    title: 'No egress or API fees  ',
    description: `Designed to avoid unpredictable charges from frequent data movement.  `,
  },
  {
    id: 5,
    icon: block3,
    title: 'Minimum commitment  ',
    description: '25 TB minimum commitment for 12 months.  ',
  },
  {
    id: 6,
    icon: block2,
    title: 'Premium support  ',
    description: 'Available as a separate add-on.  ',
  },
  {
    id: 7,
    icon: block1,
    title: 'GBP billing note',
    description: 'For GBP billing, pricing is converted at the prevailing FX rate at order time.  ',
  },
];
const workflows = [
  {
    id: 1,
    icon: block1,
    title: 'Media production  ',
    description: `Editors move rushes from set to post house, ingest from local NAS into Hot Storage, share   
accelerated upload links with crew and begin work while files continue downloading.  
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Asset consolidation  ',
    description: `Studios and teams consolidate assets from Dropbox, Drive and other tools into Hot Storage   
while keeping existing workflows available during transition.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Backup and WAN jobs  ',
    description: `Backup providers use MFT jobs from on-prem storage to Hot Storage, helping scheduled jobs   
complete more reliably under loss or congestion.   `,
  },
  {
    id: 4,
    icon: block1,
    title: 'Compliance data sharing  ',
    description: `Enterprises share controlled data with regulators or external parties using time-limited links,   
versioning and activity audit.  
 `,
  },
];
const data6 = [
  {
    id: 1,
    title: 'Compared with hyperscale object storage  ',
    description: `
    Hot Storage offers flat pricing without separate egress or API fees.   `,
  },

  {
    id: 2,
    title: 'Compared with storage-only providers  ',
    description: `Hot Storage includes APN acceleration and management features, not just storage capacity.  `,
  },
  {
    id: 3,
    title: 'Compared with large file transfer tools  ',
    description: `Hot Storage supports accelerated movement without relying on per-GB transfer models.
`,
  },
  {
    id: 4,
    title: 'Compared with enterprise file sync platforms  ',
    description: `SyncSphere and Hot Storage combine file management, transfer acceleration and flat storage   
economics.  
`,
  },
];
const storage = [
  {
    id: 1,
    icon: block1,
    title: 'Media and creative teams  ',
    description: `Large files, distributed editors, external collaborators and fast-moving production workflows.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'AI and data teams  ',
    description: `Large data sets, cloud environments and data movement between storage and compute.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Backup and recovery providers  ',
    description: `Recurring transfer jobs, WAN movement and SLA-sensitive backup workflows. `,
  },
  {
    id: 4,
    icon: block1,
    title: 'Enterprises with distributed teams  ',
    description: `Shared file libraries, controlled access and multi-location data movement.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Compliance-sensitive organisations  ',
    description: `Versioning, audit logs, time-limited sharing and controlled access.   `,
  },
];

export const hotfaq = [
  {
    question: 'What is Enigma Hot Storage?',
    answer:
      'Enigma Hot Storage is Enigma Net’s performance cloud object storage layer for media, backups, logs, working assets and large data sets.',
  },
  {
    question: 'Is Hot Storage S3-compatible?',
    answer:
      'Yes. Hot Storage is exposed through S3-compatible APIs and can present buckets as project workspaces.',
  },
  {
    question: 'Does Hot Storage include accelerated transfer?',
    answer:
      'Yes. Hot Storage works with APN-accelerated transfer options including Large File Transfer and Managed File Transfer.',
  },
  {
    question: 'Are there egress fees?',
    answer: 'Hot Storage is designed with flat monthly pricing and no egress or API fees.',
  },
  {
    question: 'Can we connect existing storage tools?',
    answer:
      'Yes. Hot Storage can connect with tools such as OneDrive, Google Drive and compatible NAS environments.',
  },
  {
    question: 'Can external collaborators upload or download files?',
    answer: 'Yes. Large File Transfer supports one-time or reusable links for non-account users.',
  },
  {
    question: 'Can users browse files without downloading everything?',
    answer:
      'Yes. The desktop experience supports file stubs and local caching for large libraries.',
  },
];
const DataStorage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Data & File Services', href: '/products/data-&-file-services' },
          { label: 'Hot Storage' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeroSection
        title={
          <>
            Performance cloud storage <Br isTablet /> for data that needs to move
          </>
        }
        description={
          <>
            Enigma Hot Storage gives teams S3-compatible object storage with accelerated transfer,
            secure access, flat pricing and workflow visibility designed for media, backups, logs,
            working assets and large data sets.
          </>
        }
        image={operations}
        buttons={[
          {
            label: 'Talk to Enigma  ',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={[
          'S3-compatible storage',
          'APN acceleration',
          'No egress fees',
          'LFT / MFT transfer',
          'SyncSphere management  ',
        ]}
        transitionLine={
          <div className="text-dark">
            Store, move, browse, share and govern data through one accelerated storage
            experience.{' '}
          </div>
        }
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Cloud storage is easy to start with,
                  <Br isDesktop isTablet /> but painful to scale
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            As teams create more media, backups, logs and working assets, storage quickly becomes
            more than a place to put files.
            <br />
            <br />
            Data needs to move between people, platforms, sites, cloud tools and external
            collaborators. Costs become harder to predict. Transfers slow down. Teams duplicate
            files across multiple platforms. Governance becomes messy.
            <br />
            <br />
            Hot Storage is designed for organisations that need storage, movement and control to
            work together.
          </>
        }
        data={Core}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Storage, transfer and governance in one accelerated layer</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Hot Storage combines S3-compatible cloud object storage with APN-accelerated
            transfer and SyncSphere file management.
            <br />
            <br />
            It gives teams a practical way to store large data sets, move files faster, connect
            existing storage sources and manage access through a single customer-facing experience.
          </>
        }
      />
      <FooterStatement
        text={
          <>
            <HeaderTitle
              className="text-center h2 "
              key={theme}
              title={
                <>
                  Hot Storage is not just cloud storage. It is storage connected to the way data
                  actually moves.
                </>
              }
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
              title={<>How Hot Storage fits into the Enigma platform</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={<>Hot Storage works as part of the wider Enigma Net infrastructure stack.</>}
        data={stack}
        transitionLine={
          <>
            APN accelerates the movement. Hot Storage stores the data. SyncSphere gives users the
            interface and workflow control.{' '}
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for large libraries, working assets and object storage workflows</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={features}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Move large files and recurring jobs without the usual friction</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Hot Storage is designed to work with Enigma’s accelerated transfer tools, helping teams
            move data in and out of storage more reliably.{' '}
          </>
        }
        data={transfer}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Connect the storage tools your teams already use</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Hot Storage can sit alongside existing cloud and NAS platforms, giving teams a clearer
            path to consolidation without forcing an immediate hard cut-over.
          </>
        }
        data={integrate}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Share data without losing control</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Hot Storage and SyncSphere provide access control, sharing tools, health metrics and
            audit visibility for teams managing sensitive or business-critical data.
          </>
        }
        data={governance}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>A desktop experience for large file libraries</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            The thin client gives users a familiar way to browse and work with Hot Storage from
            their operating system, while helping control bandwidth, local storage and offline
            workflows.
          </>
        }
        data={desktop}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Simple storage pricing without the usual cloud surprises</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            <strong className="text-dark">
              Hot Storage is designed around flat monthly pricing, with no egress or API fees.{' '}
            </strong>
            <br />
            This makes it easier for teams to plan storage costs, especially when data needs to move
            frequently.
          </>
        }
        data={pricing}
        showButtons
        primaryButton={{
          label: 'Request storage pricing  ',
          href: '/get-in-touch',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
      <MatricCardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Storage economics with acceleration built in</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Hot Storage is positioned for teams that need more than low-cost storage. It combines
            object storage, accelerated transfer, workflow management and predictable pricing.
          </>
        }
        data={data6}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for real-world data workflows</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={workflows}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Who Hot Storage is for</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={storage}
      />
      <Faqs faqs={hotfaq} sectionTitle="FAQs" title="Common questions" />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Store, move and manage large data sets without <br />
          </>
        }
        headline2="unpredictable cloud storage costs."
        primaryButton={{
          label: 'Request storage pricing',
          href: '/get-in-touch',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default DataStorage;
