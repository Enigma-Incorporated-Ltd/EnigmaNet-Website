import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import { enigmaSecureTablet, enterprise as heroImg } from '@/assets/img';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';
import NextPageSlider from '@/components/ui/NextPageSlider';

import { useSlug } from '@/utils/useSlug';
import { type CardItem } from '@/components/ui/card';
import CardWithUseCase from '@/components/ui/CardWithUseCase';
import FeatureComparison from '@/components/ui/FeatureComparison';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import Br from '@/components/ui/NewLine';
import { Commond, GridHero, HeroHub, HeroSyncSphere, LedgerHero, SyncSphereHero } from '@/assets/img/products';
import {
  NexusRelationshipCardsHub,
  NexusRelationshipCardsGrid,
  NexusRelationshipCardsCommander,
  NexusRelationshipCardsLedger,
  NexusRelationshipCardsNexus,
  WhatSyncSphereBringsTogetherHotStorageWorkspaces,
  WhatSyncSphereBringsTogetherLargeFileTransfer,
  WhatSyncSphereBringsTogetherManagedFileTransfer,
  WhatSyncSphereBringsTogetherMultiCloudAndNASIngest,
  WhatSyncSphereBringsTogetherGovernanceAndSharing,
  PainCard1FilesAreScattered,
  PainCard2TransfersAreTooSlow,
  PainCard3SyncJobsLackVisibility,
  PainCard4SharingNeedsControl,
  TrustCards1IAMAwareAccess,
  TrustCards2SecureSharing,
  TrustCards3TransferIntegrity,
  TrustCards5AuditEvidence,
  TrustCards4VisibilityAndReporting,
  ComparisonCardsMASVStylePackageDelivery,
  ComparisonCardsAsperaStyleManagedWorkflows,
  ComparisonCardsSigniantStyleMediaOperations,
  ComparisonCardsDropboxStyleWorkspacesimplicity,
} from '@/assets/svgs/products/enigma-platform/syncsphere';
const features = [
  {
    id: 1,
    title: 'Nexus  ',
    href: '/products/enigma-platform/enigma-nexus',
    slug: 'enigma-nexus',
    description:
      'The universal interface that brings Enigma services, modules and workflows together. ',

    meta: {
      title: 'Nexus  ',
      description:
        'The universal interface that brings Enigma services, modules and workflows together. ',
    },
    image: enigmaSecureTablet,
  },
  {
    id: 2,
    title: 'Hub',
    href: '/products/enigma-platform/enigma-hub',
    slug: 'enigma-hub',
    description: 'Controls identity, roles, permissions and access to SyncSphere workspaces. ',

    meta: {
      title: 'Hub',
      description: 'Controls identity, roles, permissions and access to SyncSphere workspaces. ',
    },
    image: HeroHub,
  },
  {
    id: 3,
    title: 'Grid',
    href: '/products/enigma-platform/enigma-grid',
    slug: 'enigma-grid',
    description:
      'Associates file workflows, configuration bundles and data movement activity with sites and assets.   ',

    meta: {
      title: 'Grid ',
      description:
        'Associates file workflows, configuration bundles and data movement activity with sites and assets.   ',
    },
    image: GridHero,
  },
  {
    id: 4,
    title: 'Command   ',
    href: '/products/enigma-platform/enigma-command',
    slug: 'enigma-command',
    description:
      'Surfaces incidents and operational issues affecting file transfer, storage access and APN   performance.   ',

    meta: {
      title: 'Command  ',
      description:
        'Surfaces incidents and operational issues affecting file transfer, storage access and APN performance.   ',
    },
    image: Commond,
  },
  {
    id: 5,
    title: 'Ledger     ',
    href: '/products/enigma-platform/enigma-ledger',
    slug: '/enigma-ledger',
    description:
      'Records sharing activity, file actions, permissions changes and transfer history.    ',
    image: LedgerHero,
    meta: {
      title: 'Ledger  ',
      description:
        'Records sharing activity, file actions, permissions changes and transfer history.   ',
    },
  },
  {
    id: 6,
    title: 'Hot Storage       ',
    href: '/products/data-&-file-services/hot-storage',
    slug: '/hot-storage',
    description: 'The primary Enigma object storage layer exposed through SyncSphere.   ',
    image: heroImg,
    meta: {
      title: 'Hot Storage    ',
      description: 'The primary Enigma object storage layer exposed through SyncSphere.   ',
    },
  },
  // {
  //   id: 7,
  //   title: 'LFT and MFT     ',
  //   href: '/products/data-&-file-services/large-file-transfer',
  //   slug: '/large-file-transfer',
  //   description: 'The transfer engines that power ad-hoc and managed data movement workflows.  ',
  //   image: heroImg,
  //   meta: {
  //     title: 'LFT and MFT  ',
  //     description: 'The transfer engines that power ad-hoc and managed data movement workflows.  ',
  //   },
  // },
  {
    id: 8,
    title: 'ESC and APN Core    ',
    href: '#',
    slug: '/esc-secure-networking',
    description: 'The accelerated, resilient network layer underneath SyncSphere file movement.   ',
    image: heroImg,
    meta: {
      title: 'ESC and APN Core   ',
      description:
        'The accelerated, resilient network layer underneath SyncSphere file movement.  ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: PainCard1FilesAreScattered,
    title: 'Files are scattered  ',
    description: `Assets often sit across cloud drives, local NAS, external drives, S3 buckets and project folders.   `,
  },
  {
    id: 2,
    icon: PainCard2TransfersAreTooSlow,
    title: 'Transfers are too slow  ',
    description: `Large uploads, downloads and cross-region movement can become painful over long-haul or   
lossy links.  `,
  },
  {
    id: 3,
    icon: PainCard3SyncJobsLackVisibility,
    title: 'Sync jobs lack visibility   ',
    description:
      'Teams need to know what is complete, what failed, what is retrying and where the bottleneck is.',
  },
  {
    id: 4,
    icon: PainCard4SharingNeedsControl,
    title: 'Sharing needs control',
    description:
      'External links, project folders and collaborator access need expiry, permissions and audit trails.  ',
  },
];
const data2 = [
  {
    id: 1,
    icon: WhatSyncSphereBringsTogetherHotStorageWorkspaces,
    title: 'Hot Storage workspaces ',
    description: `Project-based storage views built on Enigma Hot Storage.`,
  },
  {
    id: 2,
    icon: WhatSyncSphereBringsTogetherLargeFileTransfer,
    title: 'Large File Transfer  ',
    description: `Ad-hoc upload and download workflows for large packages, external collaborators and project delivery. `,
  },
  {
    id: 3,
    icon: WhatSyncSphereBringsTogetherManagedFileTransfer,
    title: 'Managed File Transfer    ',
    description:
      'Scheduled, recurring and policy-driven transfer jobs with telemetry, retries and integrity checks.',
  },
  {
    id: 4,
    icon: WhatSyncSphereBringsTogetherMultiCloudAndNASIngest,
    title: 'Multi-cloud and NAS ingest  ',
    description:
      'Connect OneDrive, Google Drive, Synology, WebDAV and local NAS sources into one workspace.',
  },
  {
    id: 5,
    icon: WhatSyncSphereBringsTogetherGovernanceAndSharing,
    title: 'Governance and sharing  ',
    description:
      'IAM-aware folder access, temporary links, versioning, activity records and transfer visibility. ',
  },
];
const data3 = [
  {
    id: 1,
    icon: TrustCards1IAMAwareAccess,
    title: 'IAM-aware access  ',
    description: `Folder, bucket and project permissions are controlled through Hub.   
`,
  },
  {
    id: 2,
    icon: TrustCards2SecureSharing,
    title: 'Secure sharing   ',
    description: `Temporary links and share tokens can include expiry, access scope and external collaborator   
controls.  `,
  },
  {
    id: 3,
    icon: TrustCards3TransferIntegrity,
    title: 'Transfer integrity  ',
    description: 'MFT workflows can include hashing, retries and integrity checks.   ',
  },
  {
    id: 4,
    icon: TrustCards4VisibilityAndReporting,
    title: 'Visibility and reporting   ',
    description:
      'Transfer health, source status, last sync time and error rates are surfaced in the workspace.  ',
  },
  {
    id: 5,
    icon: TrustCards5AuditEvidence,
    title: 'Audit evidence   ',
    description:
      'File actions, sharing activity and permission changes can be recorded for review.   ',
  },
];
const data4 = [
  {
    id: 1,
    icon: ComparisonCardsMASVStylePackageDelivery,
    title: 'MASV-style package delivery  ',
    description: `For ad-hoc large file transfers, external uploads, delivery links and project handoff.  `,
  },

  {
    id: 2,
    icon: ComparisonCardsAsperaStyleManagedWorkflows,
    title: 'Aspera-style managed workflows  ',
    description:
      'For high-speed managed transfer jobs, recurring movement, retries, policy control and integrity checks.  ',
  },
  {
    id: 3,
    icon: ComparisonCardsSigniantStyleMediaOperations,
    title: 'Signiant-style media operations  ',
    description:
      'For distributed creative teams moving large media libraries, rushes and production assets.  ',
  },
  {
    id: 4,
    icon: ComparisonCardsDropboxStyleWorkspacesimplicity,
    title: 'Dropbox-style workspace simplicity  ',
    description:
      'For browsing, sharing and syncing files — but with infrastructure-grade performance and governance.  ',
  },
];
const data5 = [
  {
    id: 1,
    icon: NexusRelationshipCardsHub,
    title: 'Hub    ',
    description: `Hub controls who can access folders, buckets, links, transfer jobs and SyncSphere features.  `,
  },

  {
    id: 2,
    icon: NexusRelationshipCardsGrid,
    title: 'Grid    ',
    description: `Grid links file workflows and configuration artefacts to specific sites, assets and services.  `,
  },
  {
    id: 3,
    icon: NexusRelationshipCardsCommander,
    title: 'Command  ',
    description: `Command surfaces operational issues affecting transfer jobs, storage access or APN performance.    `,
  },
  {
    id: 4,
    icon: NexusRelationshipCardsLedger,
    title: 'Ledger  ',
    description: ` Ledger records file actions, sharing activity, permission changes and transfer history.  `,
  },
  {
    id: 5,
    icon: NexusRelationshipCardsNexus,
    title: 'Nexus    ',
    description: ` Nexus brings SyncSphere into the wider Enigma operational interface. `,
  },
];

const Command = [
  {
    id: 1,
    title: 'Performance cloud storage workspace ',
    description:
      'SyncSphere presents Hot Storage buckets as project workspaces, with fast browsing, local stubs, cache and on-demand access.  ',
    usecase: [
      'Project-based Hot Storage views  ',
      'Lazy folder loading and file metadata  ',
      'Local file stubs and cache  ',
      'Stream large media files before full download  ',
    ],
  },
  {
    id: 2,
    title: 'High-speed transfer and automation  ',
    description:
      'SyncSphere uses Enigma LFT and MFT to move large files, datasets and recurring jobs faster and more reliably.   ',
    usecase: [
      'Ad-hoc large file transfer  ',
      'Scheduled MFT jobs  ',
      'Multi-path bonding and RAIN resilience  ',
      'Job telemetry, retries and hashing  ',
    ],
  },
  {
    id: 3,
    title: 'Unified storage and ingest ',
    description:
      'SyncSphere connects external clouds, NAS and local sources into one file operations workspace.   ',
    usecase: [
      'OneDrive and Google Drive integration ',
      'Synology, SMB and WebDAV NAS connections ',
      'Drag-and-drop movement between sources  ',
      'Server-side copy where possible ',
    ],
  },
  {
    id: 4,
    title: 'Governance, sharing and insight  ',
    description:
      'SyncSphere connects file operations to IAM permissions, sharing controls, activity records and performance insight.   ',
    usecase: [
      'Folder-level read/write access   ',
      'Temporary links and share tokens ',
      'Per-source health metrics   ',
      'Throughput, sync status and error visibility  ',
    ],
  },
];
const assetsFamily = [
  {
    id: 1,
    icon: WhatSyncSphereBringsTogetherHotStorageWorkspaces,
    title: 'Hot Storage workspace',
    description:
      'SyncSphere is the main user interface for Enigma Hot Storage, presenting buckets as clear project workspaces.  ',
    usecase: [
      'S3-compatible buckets shown as projects  ',
      'Cloud-first navigation ',
      'On-demand file download ',
      'Versioning and restore points ',
      'Sync status in the thin client tray ',
    ],
  },
  {
    id: 2,
    title: 'Large File Transfer',
    icon: WhatSyncSphereBringsTogetherLargeFileTransfer,
    description:
      'SyncSphere exposes LFT for fast portal-driven transfers, package delivery and external upload/download links.',
    usecase: [
      'Drop-off and pick-up portals',
      'One-time or reusable transfer links',
      'Non-account collaborator access  ',
      'Hot Storage and S3-compatible transfer targets',
      'TCP-based transfer over standard ports including 443',
    ],
  },
  {
    id: 3,
    title: 'Managed File Transfer',
    icon: WhatSyncSphereBringsTogetherManagedFileTransfer,
    description:
      'SyncSphere includes a policy-driven layer for recurring, scheduled and controlled data movement.',
    usecase: [
      'Scheduled transfer jobs',
      'Retry rules and job policies',
      'PGP encryption  ',
      'SHA-256 integrity checks',
      'Live throughput and remaining-time dashboards',
    ],
  },
  {
    id: 4,
    title: 'Multi-cloud and NAS integration',
    icon: WhatSyncSphereBringsTogetherMultiCloudAndNASIngest,
    description:
      'SyncSphere connects existing clouds and storage sources so customers can consolidate without a hard cut-over.   ',
    usecase: [
      'OneDrive and Google Drive via OAuth',
      'Synology and NAS over SMB or WebDAV',
      'Unified sources and targets pane',
      'Consistent conflict resolution',
      'Import into Hot Storage',
    ],
  },
  {
    id: 5,
    title: 'Desktop thin client experience',
    icon: WhatSyncSphereBringsTogetherGovernanceAndSharing,
    description:
      'SyncSphere extends into the desktop through the Enigma thin client for creators, technical teams and enterprise users.',
    usecase: [
      'Windows, macOS and Linux support  ',
      'Local cache and file stubs  ',
      'Offline mode with queued changes  ',
      'Bandwidth throttling  ',
      'Integrated VPN and monitoring where required',
    ],
  },
];

const workflows = [
  {
    id: 1,
    title: 'Editor moving rushes from set to post house  ',
    transitionLine:
      'Post-production teams can start work faster without waiting for every file to fully transfer.  ',
    usecase: [
      'Ingest local NAS or external drive into a Hot Storage project  ',
      'Share accelerated upload links with the crew  ',
      'Editors browse file stubs through the thin client   ',
      'Large media starts streaming before the full download completes  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 2,
    title: ' Studio consolidating cloud assets  ',
    transitionLine: 'Scattered project storage becomes one controlled Hot Storage workspace.  ',
    usecase: [
      'Connect OneDrive and Google Drive  ',
      'Drag project folders into Hot Storage ',
      'Use server-side copy where possible ',
      'Set MFT policies for nightly incremental sync and archive  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 3,
    title: 'Backup vendor running nightly WAN jobs  ',
    transitionLine: 'Recurring data movement stays visible, resilient and controlled.',
    usecase: [
      'Define MFT jobs from on-prem NFS or SMB shares  ',
      'Target Hot Storage or supported S3 buckets   ',
      'Apply schedules, retries and integrity checks ',
      'Use APN acceleration, bonding and RAIN to support SLA delivery  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 4,
    title: ' Enterprise sharing compliance data  ',
    transitionLine: 'External sharing remains controlled, time-bound and auditable.  ',
    usecase: [
      'Select approved folders or objects ',
      'Create time-limited links for external reviewers  ',
      'Apply IAM-aware permissions   ',
      'Review activity history and access records   ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
];
const SyncSphere = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'The Enigma Platform', href: '/products/the-enigma-platform' },
          { label: 'Enigma SyncSphere' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Move, sync and manage large files <Br isTablet={true} /> from one controlled workspace.
          </>
        }
        description="Enigma SyncSphere brings Hot Storage, Large File Transfer, Managed File Transfer, third-party   
        cloud storage and local NAS into one secure, accelerated workspace built on Enigma’s APN   
        performance layer.  "
        image={HeroSyncSphere}
        buttons={[
          {
            label: 'Explore SyncSphere ',
            href: '#',
            variant: 'blue',
          },
          {
            label: 'Talk to Enigma  ',
            href: '/get-in-touch',
            variant: 'gold',
            disableSentenceCase: true,
          },
        ]}
        features={['Accelerated transfers', 'Unified storage view', 'IAM-aware sharing  ']}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Large files still get trapped between slow transfers, scattered storage and
                  disconnected tools
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Teams working with media, backups, datasets and operational files often rely on separate
            tools for storage, transfer, sync, sharing and archive. That creates friction: files sit
            in multiple clouds, transfers fail or crawl, permissions become hard to manage, and
            teams lose visibility over what has moved, what is syncing and what needs attention.
            <br />
            <br />
            SyncSphere brings those workflows into one controlled workspace, accelerated by Enigma’s
            APN layer.
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
                  SyncSphere turns file storage, transfer and{' '}
                  <Br isTablet={true} isDesktop={true} />
                  sync into one connected workflow
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            SyncSphere sits inside Nexus as the user and workflow layer for Hot Storage, LFT, MFT,
            third-party cloud connections and local file access. It gives customers a single place
            to browse assets, move data, manage jobs, share files and monitor transfer health.
            <br />
            <br />
            It does not replace the APN transport layer. It uses it to make file movement faster,
            more resilient and easier to operate.
          </>
        }
        data={data2}
      />

      <CardWithUseCase
        data={Command as CardItem[]}
        headerTitle={
          <>
            Four pillars for high-performance <Br isTablet={true} /> file operations{' '}
          </>
        }
      />

      <CardWithUseCase
        data={assetsFamily as CardItem[]}
        headerTitle={
          <>
            Built for storage, transfer, <Br isTablet={true} isMobile={true} /> sync and file
            control
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
                  Built for the workloads that <Br isTablet /> outgrow ordinary file tools
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            SyncSphere is designed for teams that need more than consumer sync and more predictable
            economics than pay-per-GB transfer models. It combines high-speed transfer, Hot Storage,
            MFT automation, IAM-aware sharing and a unified storage view in one Nexus workspace.
          </>
        }
        data={data4}
        transitionLine={
          <>
            SyncSphere gives users a familiar file workspace, backed by Enigma’s accelerated
            transport and operational control.{' '}
          </>
        }
      />
      <CardWithUseCase
        data={workflows as CardItem[]}
        headerTitle={
          <>
            Designed around real <Br isTablet={true} /> file movement workflows{' '}
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
                  SyncSphere connects file workflows <Br isTablet={true} isDesktop={true} />
                  to identity, assets and operations
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Inside Nexus, SyncSphere is the file and data management layer. It works with Hub for
            permissions, Grid for asset and site context, Command for operational visibility, and
            Ledger for activity history and audit evidence.
          </>
        }
        data={data5}
        transitionLine={
          <>
            SyncSphere moves the files. <Br isTablet={true} isDesktop={true} /> Nexus keeps the
            workflow controlled.
          </>
        }
      />

      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  A unified file workspace over Enigma storage,
                  <Br isTablet={true} isDesktop={true} /> transfer and APN acceleration
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        image={SyncSphereHero}
        description={
          <>
            SyncSphere combines web views in Nexus, desktop thin-client workflows, backend
            orchestration services, storage platforms and APN-enabled transfer infrastructure.
          </>
        }
        transitionLine={
          <>
            The workspace stays simple for users while the acceleration layer handles the heavy
            movement underneath.{' '}
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
                  Fast file movement still needs <Br isTablet={true} />
                  controlled access
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            SyncSphere uses Nexus identity and permissions so users only see the folders, buckets,
            jobs and links they are entitled to access. Sharing, transfer activity and storage
            actions can be logged and reviewed across Hub and Ledger.
          </>
        }
        data={data3}
      />

      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  SyncSphere is the file workflow layer, <Br isTablet={true} isDesktop={true} /> not
                  the network control plane
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            SyncSphere is focused on file storage, transfer, sync, sharing and file workflow
            visibility. It does not replace APN tuning, ESC deployment, identity lifecycle
            management or general network operations.
            <br />
            <br />
            Those functions remain in the relevant Nexus modules and Enigma product layers.
          </>
        }
        benitsTitle="SyncSphere is"
        limitationsTitle="SyncSphere is not"
        benefits={[
          'The file and data management layer inside Nexus  ',
          'The workspace for Hot Storage, LFT and MFT',
          'The interface for cross-cloud and NAS ingest  ',
          'The place to manage file sharing, sync jobs and transfer visibility  ',
          'The user workflow layer for storage and data movement  ',
        ]}
        limitations={[
          'The APN or ESC deployment tool  ',
          'The general network operations console ',
          'The identity lifecycle and billing module  ',
          'A replacement for Hub, Command or Grid  ',
          'A low-level transport tuning interface  ',
        ]}
      />

      <NextPageSlider
        title="SyncSphere connects storage, transfer and Nexus control"
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Move, sync and manage large files <br />
          </>
        }
        headline2=" without losing control."
        description="Enigma SyncSphere brings storage, transfer, sync, sharing and file visibility into one controlled   
        workspace, built for large assets, distributed teams and performance-sensitive workloads.  "
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

export default SyncSphere;
