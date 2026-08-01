import { HeroSyncSphere } from '@/assets/img/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import { useTheme } from '@/utils/useTheme';
import HeaderTitle from '@/components/ui/HeaderTitle';
import CardSlider from '@/components/ui/CardSlider';
import FooterStatement from '@/components/ui/FooterStatement';
import MatricCardSlider from '@/components/ui/MatricCardSlider';
import ReusableTable from '@/components/ui/Table';
import Faqs from '@/components/ui/faq';
import CTA from '@/components/ui/CtaBand';
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Transfers take too long  ',
    description: `Large media files, datasets, archives and evidence packages can be slow to move across long-
haul or lossy network paths.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'External recipients need an easy experience  ',
    description: `Customers, crews, agencies, regulators and partners should not need special software just to   
upload or download a package.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Firewall approvals slow everything down ',
    description:
      'UDP-based transfer tools can require protocol approvals or firewall changes before teams can use them.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Teams lose visibility  ',
    description: `It can be hard to see who accessed a file, whether a transfer completed, or which links are still   
active.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Governance becomes messy  ',
    description:
      'Temporary links, retention, expiry, audit logs and permissions need to be managed properly.   ',
  },
];
const stack = [
  {
    id: 1,
    icon: block1,
    title: 'APN Core / ESC Secure Networking ',
    description: `Provides the accelerated transport layer using TCP acceleration, dynamic bonding and RAIN   
resilience.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Large File Transfer  ',
    description: `Provides the ad-hoc transfer engine for sending and receiving large packages through   
shareable links.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Managed File Transfer',
    description:
      'Supports recurring, scheduled and policy-driven transfer jobs for operational workflows.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Hot Storage  ',
    description: `Provides the object storage backend. When LFT targets Hot Storage, storage economics are   
simplified with no egress or API fees.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'SyncSphere  ',
    description:
      'Provides the user-facing file management layer inside Nexus, including portal access, transfer console, sharing and governance.   ',
  },
];
const features = [
  {
    id: 1,
    icon: block1,
    title: 'Shareable upload and download links ',
    description: `Create one-time or reusable links for sending or receiving large file packages.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'No recipient software install  ',
    description: `External users can access the portal, drag and drop files, track progress and confirm completion   
from a browser.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Download-only links ',
    description: 'Share selected files or folders with download-only access.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Expiry dates and optional passwords  ',
    description: `Control how long a link remains active and add extra access protection where needed.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Branded external portal    ',
    description:
      'Give collaborators a professional, customer-facing upload and download experience.  ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Admin link visibility  ',
    description:
      'Admins can view active links, expiry dates, usage count, last access and revoke links when required.  ',
  },
];
const data7 = [
  {
    id: 1,
    title: 'APN acceleration  ',
    description:
      'Leverages TCP acceleration, multi-path bonding and RAIN resilience to improve large file movement across difficult network conditions. ',
  },
  {
    id: 2,
    title: '39–64× speedups  ',
    description:
      'Designed to achieve significant speedups versus raw TCP on long-haul, lossy links.  ',
  },
  {
    id: 3,
    title: 'Benchmark example ',
    description:
      'A 20 MB file that takes approximately 70 seconds over raw TCP on a 300 ms / 0.5% loss path can arrive in approximately 1.8 seconds over LFT.  ',
  },
  {
    id: 4,
    title: 'TCP port 443 ',
    description:
      'Stays on TCP/443 to avoid the firewall friction often created by custom UDP-based transfer protocols.  ',
  },
  {
    id: 5,
    title: 'Graceful resume ',
    description:
      'Supports transfer recovery after network disruption, helping avoid failed transfers starting from scratch.  ',
  },
  {
    id: 6,
    title: 'Live transfer visibility  ',
    description: 'Track retries, throughput, elapsed time and hop-by-hop loss visibility.  ',
  },
];
const targets = [
  {
    id: 1,
    icon: block1,
    title: 'Hot Storage  ',
    description: `Use Hot Storage as the accelerated object storage target for large file packages.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'S3-compatible endpoints  ',
    description: `Send transfers to compatible object storage environments.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Cloud storage ingest  ',
    description:
      'Move files into cloud storage platforms such as Google or Microsoft environments.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'NAS and connected storage  ',
    description: `Work alongside connected NAS and storage sources where available through SyncSphere.  `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Reusable transfer workflows  ',
    description:
      'Use reusable links for repeated upload or download workflows with collaborators.   ',
  },
];
const workflows = [
  {
    id: 1,
    icon: block1,
    title: 'OneDrive to Hot Storage  ',
    description: `Bring files from Microsoft storage environments into Enigma Hot Storage.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Google Drive to Hot Storage  ',
    description: `Consolidate Google-based content into a managed storage layer.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'NAS to cloud  ',
    description:
      'Move files from on-premise or NAS storage into Hot Storage or connected cloud targets.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Project ingest  ',
    description: `Use LFT to support initial bulk upload or project intake before ongoing management through   
SyncSphere.  `,
  },
];
const governance = [
  {
    id: 1,
    icon: block1,
    title: 'IAM-aware permissions  ',
    description: `Control who can create portals, upload links, download links and transfer packages through   
Enigma Hub.  
 `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Per-tenant policies  ',
    description: `Set rules such as maximum link expiry periods, password requirements or logging   
requirements.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Link controls  ',
    description: 'Monitor, expire or revoke active links.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Full activity audit  ',
    description: `Track upload, download, access and transfer activity for operational and compliance review. `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Exportable logs  ',
    description: `Export logs and activity records for governance, reporting or compliance evidence.   `,
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
    product: 'Tenant platform fee',
    price: '£99',
    unit: 'per tenant / month',
    customer:
      '	Access to portal, APIs, LFT engine, analytics and standard support',
  },
  {
    product: 'PAYG transfer',
    price: '£0.15',
    unit: 'per GB transferred',
    customer: 'No long-term commitment',
  },
  {
    product: 'LFT Commit 25',
    price: '£0.13',
    unit: 'per GB transferred',
    customer: '25 TB annual commit',
  },
  {
    product: 'LFT Commit 100',
    price: '£0.12',
    unit: 'per GB transferred',
    customer: '100 TB annual commit',
  },
  {
    product: 'LFT Commit 500',
    price: '£0.11',
    unit: 'per GB transferred',
    customer: '500 TB annual commit',
  },
  {
    product: 'Extended retention / archive',
    price: '£7.50',
    unit: 'per TB / month',
    customer: 'Uses ESC Secure Storage rate',
  },
  {
    product: 'Dedicated LFT appliance',
    price: '£149',
    unit: 'per appliance / month	',
    customer: 'Rental and support add-on',
  },
  {
    product: 'Professional services',
    price: '£7,500–  £15,000',
    unit: 'per project',
    customer: 'Minimum engagement for pipeline integration',
  },
];
const data8 = [
  {
    id: 1,
    title: 'Compared with MASV  ',
    description:
      'LFT offers a low entry point and APN-integrated acceleration, with committed pricing options for heavier transfer use.  ',
  },
  {
    id: 2,
    title: 'Compared with Aspera and FileCatalyst  ',
    description:
      'LFT stays on TCP/443, avoiding the firewall friction often created by custom UDP-based transfer protocols.   ',
  },
  {
    id: 3,
    title: 'Compared with Signiant Media Shuttle  ',
    description:
      'LFT supports large file movement and external collaboration with flexible pricing and Enigma platform integration.  ',
  },
  {
    id: 4,
    title: 'Compared with Riverbed SteelHead  ',
    description:
      'LFT is purpose-built for file transfer workflows rather than general WAN optimisation.  ',
  },
];
const journey = [
  {
    id: 1,
    icon: block1,
    title: 'Editor moving rushes from set to post house  ',
    description: `Ingest from local NAS into Hot Storage, share accelerated upload links with crew and allow   
editors to start work while files continue transferring.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Studio consolidating assets from Dropbox or Drive  ',
    description: `Connect cloud accounts, drag folders into Hot Storage and use LFT for the initial bulk ingest.`,
  },
  {
    id: 3,
    icon: block3,
    title: 'Backup vendor running WAN jobs  ',
    description:
      'Use APN acceleration to keep transfer jobs within SLA even under network loss and congestion.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Enterprise sharing compliance data with regulators  ',
    description: `Use time-limited links, versioning and full activity audit to share controlled data externally.  
`,
  },
];
const persona = [
  {
    id: 1,
    icon: block1,
    title: 'Content creators and editors  ',
    description: `For media, post-production, gaming and creative teams moving large working assets.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Data engineers and DevOps teams  ',
    description: `For AI dataset movement, model movement and data-heavy operational workflows.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Customer admins  ',
    description: 'For teams managing link policies, usage, permissions and external sharing. ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Backup and compliance teams  ',
    description: `For evidence transfer, regulated data exchange and recurring large file movement.   
`,
  },
];
export const lftfaq = [
  {
    question: 'What is Enigma Large File Transfer? ',
    answer:
      'Enigma LFT is the ad-hoc, high-speed file transfer engine inside SyncSphere. It lets users send files to internal or external recipients using shareable links accelerated by APN.  ',
  },
  {
    question: 'Do recipients need to install software?',
    answer:
      'No. Recipients can upload or download packages through the web portal without installing software. ',
  },
  {
    question: 'Can non-account users use LFT links?',
    answer: 'Yes. One-time or reusable links can be created for non-account users. ',
  },
  {
    question: 'Does LFT use UDP? ',
    answer:
      'No. LFT stays on TCP port 443, helping avoid firewall friction from custom UDP protocols.',
  },
  {
    question: 'Can LFT transfer into cloud storage? ',
    answer:
      'Yes. LFT can support transfers into cloud storage such as Google, Microsoft and other connected storage environments.  ',
  },
  {
    question: 'Can admins revoke links? ',
    answer: 'Yes. Admins can view active links, check usage and revoke links where required.  ',
  },
  {
    question: 'How is LFT different from MFT? ',
    answer: 'LFT is for ad-hoc, user-led large file transfers through shareable links. MFT is for scheduled, recurring and policy-driven transfer jobs.  ',
  },
];
const FileTransfer = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Data & File Services', href: '/products/data-&-file-services' },
          { label: 'Large File Transfer' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeroSection
        title={<>Send large files faster, without the usual transfer friction</>}
        description={
          <>
            Enigma Large File Transfer lets users send files to anyone through secure shareable
            links, with APN-accelerated transfer, portal-based upload and download, link controls,
            audit visibility and support for external collaborators.
          </>
        }
        image={HeroSyncSphere}
        buttons={[
          {
            label: 'Talk to Enigma  ',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={[
          'Shareable links',
          'No recipient install',
          'APN acceleration',
          'TCP/443',
          'Audit visibility',
        ]}
        transitionLine={
          <div className="text-dark">
            Drop files. Share a link.
            <br /> Track the transfer. Keep control.
          </div>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Large file transfer still creates too much friction</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Teams need to move large files between people, locations, cloud platforms and external
            collaborators every day.
            <br />
            <br />
            But large transfers can be slow, unreliable, difficult to track and awkward for
            recipients. Enterprise tools can be expensive or complex, while consumer file-sharing
            tools often lack the control, visibility and governance organisations need.
            <br />
            <br />
            LFT is designed for teams that need fast, simple and controlled file movement without
            creating more operational friction.
          </>
        }
        data={Core}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Fast ad-hoc transfer with link sharing, visibility and control</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma LFT allows users to send large files or folders through a branded web portal
            using one-time or reusable upload and download links.
            <br />
            <br />
            Recipients can upload or download packages without installing software, while customer
            admins can control link policies, permissions, expiry, usage and audit visibility.
            <br />
            <br />
            Transfers are accelerated by Enigma’s APN transport fabric, helping large packages move
            faster and more reliably across difficult network conditions.
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
                  LFT gives teams the simplicity of a shareable link with the performance and
                  control of Enigma Net’s accelerated transport layer.
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
              title={<>How LFT fits into the Enigma platform</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>Large File Transfer works inside the wider Enigma SyncSphere and APN ecosystem.</>
        }
        data={stack}
        transitionLine={
          <>
            APN accelerates the route. LFT moves the package. SyncSphere gives users the portal,
            sharing and control layer.{' '}
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Send and receive large packages through a simple web portal</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            LFT gives users a branded portal experience for sending files to anyone, including
            external recipients who do not have an Enigma account.{' '}
          </>
        }
        data={features}
      />

      <MatricCardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Accelerated by APN, without custom firewall friction</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            LFT uses Enigma’s APN transport fabric to move files faster and more reliably across
            high-latency, lossy or congested network paths.
            <br />
            <br />
            Unlike UDP-based transfer tools, LFT stays on TCP port 443, helping avoid firewall
            friction, custom protocol approvals and deployment delays.
          </>
        }
        data={data7}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Move files into the right storage destination</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>LFT can send packages to people, storage targets and connected cloud environments.</>
        }
        data={targets}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Move files between storage environments, not just people</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            LFT supports workflows where files need to be transferred into cloud storage or
            consolidated from existing tools, rather than simply downloaded by a recipient.{' '}
          </>
        }
        data={workflows}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Share files without losing control</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            LFT gives customer admins visibility and policy control over who can create links, how
            links behave, and what activity is recorded.
          </>
        }
        data={governance}
      />
      <ReusableTable
        columns={column1}
        data={comparisonData1}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Flexible pricing for occasional and committed transfer use</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            LFT pricing supports both pay-as-you-go usage and committed annual transfer volumes.{' '}
            <br />
            All prices are GBP ex VAT.
          </>
        }
        isbold
        footerText={
          <>
            LFT pricing depends on how files are being moved, where they are stored and whether the
            customer requires premium APN-accelerated transfer, extended retention, committed
            transfer volumes or dedicated deployment support. Final pricing should be confirmed
            based on the customer’s storage setup, transfer volume and workflow requirements.
          </>
        }
        showButtons
        primaryButton={{
          href: '#',
          label: 'Request LFT pricing  ',
          disableSentenceCase: true,
        }}
      />
      <MatricCardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Fast transfer without enterprise transfer complexity</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            LFT is positioned for teams that want high-speed file movement, link sharing and
            governance without the deployment friction or bill shock of traditional enterprise
            transfer models.
          </>
        }
        data={data8}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for real-world file movement</>}
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
              title={<>Who LFT is for</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={persona}
      />
      <Faqs faqs={lftfaq} sectionTitle="FAQs" title="Common questions" />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Move large files faster, share them easily <br />
          </>
        }
        headline2="and keep control of every transfer."
        primaryButton={{
          label: 'Explore Hot Storage',
          href: '/products/data-&-file-services/hot-storage',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default FileTransfer;
