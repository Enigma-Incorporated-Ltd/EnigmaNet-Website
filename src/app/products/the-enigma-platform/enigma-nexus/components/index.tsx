import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import {  enigmaSecureDesktop,
  enigmaSecureMobile,
  enigmaSecureTablet, enterprise as heroImg } from '@/assets/img';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import Fragmented from '@/assets/svgs/products/enigma-platform/nexus/Pain-card-Fragmented-visibility.svg'
import Slower from '@/assets/svgs/products/enigma-platform/nexus/pain-point-Slower-incident-response.svg';
import Limited from '@/assets/svgs/products/enigma-platform/nexus/Pain-card-Limited-operational-control.svg';
import Growing from '@/assets/svgs/products/enigma-platform/nexus/Pain-card-Growing-service-complexity.svg';
import Networkoperations from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Network-operations.svg';
import Assetvisibility from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Asset-visibility.svg';
import Fileandstorageworkflows from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-File-and-storage-workflows.svg';
import Userandtenantcontrol from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-User-and-tenant-control.svg';
import AIassistedoperations from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-AI-assisted-operations.svg';
import Customeradmins from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Customer-admins.svg';
import Customertechnicalusers from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Customer-technical-users.svg';
import EnigmaNOCandsupportteams from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Enigma-NOC-and-support-teams.svg';
import Enigmaengineering from '@/assets/svgs/products/enigma-platform/nexus/What-Nexus-brings-together-Enigma-engineering-and-platform-teams.svg';
import Onboardcustomer from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Onboard-a-customer.svg';
import Monitorfleethealth from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Monitor-fleet-health.svg';
import Investigateincident from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Investigate-an-incident.svg';
import Movesyncdata from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Move-and-sync-data.svg';
import Reviewactivity from '@/assets/svgs/products/enigma-platform/nexus/Journey-cards-Review-audit-and-compliance-activity.svg';
import Transparentdecisions from '@/assets/svgs/products/enigma-platform/nexus/Key-message-Transparent-decisions.svg';
import Controlledautomation from '@/assets/svgs/products/enigma-platform/nexus/Key-message-Controlled-automation.svg';
import Auditreadyactivity from '@/assets/svgs/products/enigma-platform/nexus/Key-message-Audit-ready-activity.svg';
import Tenantawaresafety from '@/assets/svgs/products/enigma-platform/nexus/Key-message-Tenant-aware-safety.svg';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import NextPageSlider from '@/components/ui/NextPageSlider';
import { useSlug } from '@/utils/useSlug';
import { type CardItem } from '@/components/ui/card';
import CardWithUseCase from '@/components/ui/CardWithUseCase';
import Br from '@/components/ui/NewLine';
import { useEffect, useState } from 'react';
import { ApnCoreHero } from '@/assets/img/products';
const features = [
  {
    id: 1,
    title: 'APN Core ',
    href: '/products/performance-networking/enigma-apn-core',
    slug: 'enigma-apn-core',
    description:
      'The underlying acceleration and optimisation engine that powers Enigma’s network performance.',

    meta: {
      title: 'APN Core',
      description:
        'The underlying acceleration and optimisation engine that powers Enigma’s network performance .',
    },
    image: ApnCoreHero,
  },
  {
    id: 2,
    title: 'ESC – Secure Networking',
    href: '/products/performance-networking/esc-secure-networking',
    slug: 'esc-secure-networking',
    description: 'Secure overlay networking deployments monitored and controlled through Nexus. ',

    meta: {
      title: 'ESC – Secure Networking',
      description: 'Secure overlay networking deployments monitored and controlled through Nexus. ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'Enigma Connect ',
    href: '/products/connectivity-products/enigma-connect',
    slug: 'enigma-connect',
    description:
      'Self-serve connectivity services managed through Nexus for individuals and small teams.',

    meta: {
      title: 'Enigma Connect ',
      description:
        'Self-serve connectivity services managed through Nexus for individuals and small teams.',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'Enigma EDGE ',
    href: '/products/connectivity-products/enigma-edge',
    slug: 'enigma-edge',
    description:
      'Edge devices and site-based services visible through Grid and controlled through Nexus workflows. ',

    meta: {
      title: 'Enigma EDGE ',
      description:
        'Edge devices and site-based services visible through Grid and controlled through Nexus workflows. ',
    },
    image: heroImg,
  },
  {
    id: 5,
    title: 'Hot Storage ',
    href: '/products/data-&-file-services/hot-storage',
    slug: 'hot-storage',
    description: 'Performance storage surfaced through SyncSphere for file and object workflows. ',
    image: heroImg,
    meta: {
      title: 'Hot Storage ',
      description:
        'Performance storage surfaced through SyncSphere for file and object workflows. ',
    },
  },
  {
    id: 6,
    title: 'Large File Transfer / MFT ',
    href: '/products/data-&-file-services/large-file-transfer',
    slug: '/products/data-&-file-services/large-file-transfer',
    description:
      'Accelerated transfer workflows connected into SyncSphere and monitored through Nexus.',
    image: heroImg,
    meta: {
      title: 'Large File Transfer / MFT ',
      description:
        'Accelerated transfer workflows connected into SyncSphere and monitored through Nexus.',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: Fragmented,
    title: 'Fragmented visibility',
    description: `Network health, devices, files, users and tickets are often managed across separate systems.`,
  },
  {
    id: 2,
    icon: Slower,
    title: 'Slower incident response',
    description: ` When alerts, telemetry and actions are disconnected, teams lose time working out what happened and what to do next.`,
  },
  {
    id: 3,
    icon: Limited,
    title: 'Limited operational control',
    description:
      'Customers and support teams need clear permissions, audit trails and approval paths when managing live infrastructure.',
  },
  {
    id: 4,
    icon: Growing,
    title: 'Growing service complexity',
    description:
      'As Connect, EDGE, ESC and storage services scale, teams need one view of customers, assets, subscriptions and performance.',
  },
];
const data2 = [
  {
    id: 1,
    icon: Networkoperations,
    title: 'Network operations',
    description: `Monitor tunnel health, latency, jitter, packet loss, alerts and incidents across Enigma services. `,
  },
  {
    id: 2,
    icon: Assetvisibility,
    title: 'Asset visibility ',
    description: `View sites, devices, gateways, services and topology across Connect, EDGE and ESC deployments.`,
  },
  {
    id: 3,
    icon: Fileandstorageworkflows,
    title: 'File and storage workflows',
    description:
      'Manage Hot Storage, large file transfer, managed file transfer and cross-cloud sync from a single workspace.',
  },
  {
    id: 4,
    icon: Userandtenantcontrol,
    title: 'User and tenant control',
    description:
      'Manage customers, partners, internal users, roles, subscriptions, licences and audit logs. ',
  },
  {
    id: 5,
    icon: AIassistedoperations,
    title: 'AI-assisted operations',
    description:
      'Surface LLM-agent insights, tickets, recommended actions and remediation workflows with human approval and override. ',
  },
];
const data3 = [
  {
    id: 1,
    icon: Customeradmins,
    title: 'Customer admins',
    description: `Manage sites, users, subscriptions, permissions and high-level service policy. `,
  },
  {
    id: 2,
    icon: Customertechnicalusers,
    title: 'Customer technical users ',
    description: `Monitor performance, run diagnostics, approve changes and interact with the AI agent. `,
  },
  {
    id: 3,
    icon: EnigmaNOCandsupportteams,
    title: 'Enigma NOC and support teams ',
    description:
      'Investigate incidents, manage alerts, review agent activity and support live customers. ',
  },
  {
    id: 4,
    icon: Enigmaengineering,
    title: 'Enigma engineering and platform teams',
    description:
      'Manage ESC profiles, integrations, automation workflows and platform-level configuration exposed through Nexus.',
  },
];
const data4 = [
  {
    id: 1,
    icon: Onboardcustomer,
    title: '1. Onboard a customer ',
    description: `Create the customer account, provision Connect, EDGE or ESC services, invite admins and assign permissions.`,
  },

  {
    id: 2,
    icon: Monitorfleethealth,
    title: '2. Monitor fleet health ',
    description:
      'View live tunnel status, link health, latency, jitter, packet loss and device performance across deployed services.',
  },
  {
    id: 3,
    icon: Investigateincident,
    title: '3. Investigate an incident',
    description:
      'Review alerts, agent insights, tickets and operational logs from one place, then approve or override recommended actions. ',
  },
  {
    id: 4,
    icon: Movesyncdata,
    title: '4. Move and sync data ',
    description:
      'Bring a customer’s media library or dataset into Hot Storage and configure ongoing sync through SyncSphere.',
  },
  {
    id: 5,
    icon: Reviewactivity,
    title: '5. Review audit and compliance activity  ',
    description: `Export operational logs, user actions and tenant-wide activity for regulated or compliance-sensitive customers.`,
  },
];
const data5 = [
  {
    id: 1,
    icon: Transparentdecisions,
    title: 'Transparent decisions ',
    description: `See what the agent detected, what it recommended and why action was suggested.`,
  },
  {
    id: 2,
    icon: Controlledautomation,
    title: 'Controlled automation  ',
    description:
      'Approve, pause or override actions before they affect live customer environments.',
  },
  {
    id: 3,
    icon: Auditreadyactivity,
    title: 'Audit-ready activity ',
    description:
      'Track agent actions, user approvals, operational events and exports for compliance. ',
  },
  {
    id: 4,
    icon: Tenantawaresafety,
    title: 'Tenant-aware safety',
    description: 'Every action is scoped by customer, role, permission and service entitlement. ',
  },
];
const outcomes = [
  'Role-aware access across customers, partners and internal teams ',
  ' Tenant-level separation across products and environments ',
  'Audit logs for operational, user and agent activity ',
  ' Compliance support for ISO 27001, SOC 2 and ITIL-style workflows  ',
  'Clear approval and override paths for AI-assisted actions ',
];
const outcomes2 = [
  'Unified customer and operator interface ',
  ' Network, asset, file, user and service workflows ',
  'AI-agent presentation and control ',
  ' Tenant-aware dashboards and audit trails  ',
  'Role-based management across Enigma services ',
];
const outcomes3 = [
  'Kernel-level or protocol-level transport changes ',
  ' Deep APN engineering documentation ',
  'Vendor-specific OEM implementation details  ',
  'Internal-only engineering tools not exposed through customer workflows',
];
const Command = [
  {
    id: 1,
    title: 'Command ',
    subtitle: 'Operations management and NOC control. ',
    description:
      'Command is the central operations view for incidents, tickets, alerts, agent actions and live network events. It gives Enigma teams and customer operators a clear human-in-the-loop control point for AI-assisted network operations.',
    usecase: [
      'View incidents, alerts and operational events ',
      'Track tunnel health, latency, jitter and loss ',
      'Review LLM-agent recommendations and actions ',
      'Pause, approve or override automated actions ',
      'Export operational logs for compliance and audit ',
    ],
    href: '/products/enigma-platform/enigma-command',
    buttonLabel: 'View Command',
  },
  {
    id: 2,
    title: 'Grid',
    subtitle: 'Network asset management and topology visibility. ',
    description:
      'Grid shows what is deployed, where it sits and how it is performing. It gives customers and operators a structured view of sites, devices, gateways, services and network topology across Enigma Connect, Enigma EDGE and ESC deployments. ',
    usecase: [
      'View sites, devices, gateways and services ',
      'Organise assets by customer, region, topology or product ',
      'Monitor ViBE/APN nodes, tunnel status and link health ',
      'Run diagnostics at asset level ',
      'Initiate controlled configuration actions ',
    ],
    href: '/products/enigma-platform/enigma-grid',
    buttonLabel: 'View Grid ',
  },
  {
    id: 3,
    title: 'SyncSphere ',
    subtitle: 'File, storage and data movement management. ',
    description:
      ' SyncSphere gives customers one place to manage storage, file sync, cross-cloud movement and transfer workflows. It connects Hot Storage, third-party clouds and Enigma’s accelerated transfer capabilities into a single file operations workspace.',
    usecase: [
      'Manage Hot Storage and connected cloud storage ',
      'Configure policy-driven file sync ',
      'Control cross-cloud copy and import workflows ',
      'Review performance and health per source ',
      'Connect Large File Transfer and Managed File Transfer workflows ',
    ],
    href: '/products/data-&-file-services/syncsphere',
    buttonLabel: 'View SyncSphere ',
  },
  {
    id: 4,
    title: 'Hub ',
    subtitle: 'Users, tenancy, subscriptions and access control. ',
    description:
      ' Hub is the identity and commercial control point inside Nexus. It manages customers, partners, users, permissions, product entitlements, billing profiles, licences and audit data across Enigma services. ',
    usecase: [
      'Manage tenants, accounts and users ',
      'Assign roles and permissions',
      'Control product entitlements and licences ',
      'Support onboarding, MFA and audit logging ',
      'Provide identity context for safe AI-agent actions ',
    ],
    href: '/products/enigma-platform/enigma-hub',
    buttonLabel: 'View Hub ',
  },
  {
    id: 5,
    title: 'Ledger ',
    subtitle: 'Audit trails, activity history and compliance records. ',
    description:
      'Ledger is the accountability layer inside Nexus. It records user activity, system changes, agent actions, approvals, overrides and operational events across Enigma services, giving customers and internal teams a clear history of what happened, when it happened and who authorised it.',
    usecase: [
      'Track user, system and agent activity',
      'Record approvals, overrides and configuration change',
      'Maintain audit trails across tenants, services and environments ',
      'Support compliance reviews and operational reporting',
      'Provide evidence of controlled, accountable service management ',
    ],
    href: '/products/enigma-platform/enigma-ledger',
    buttonLabel: 'View Ledger ',
    isFullWidth: true,
  },
];

const Nexus = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  const [caseStudyImage, setCaseStudyImage] = useState(enigmaSecureDesktop);
  const [heroImage, setHeroImage] = useState(enigmaSecureTablet);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setCaseStudyImage(enigmaSecureMobile); 
        setHeroImage(enigmaSecureMobile);
      } else if (window.innerWidth < 992) {
        setCaseStudyImage(enigmaSecureTablet); 
        setHeroImage(enigmaSecureTablet);
      } else {
        setCaseStudyImage(enigmaSecureDesktop); 
        setHeroImage(enigmaSecureTablet);
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);

    return () => window.removeEventListener('resize', updateImage);
  }, []);
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'The Enigma Platform', href: '/products/the-enigma-platform' },
          { label: 'Enigma Nexus' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            One interface for every <Br isDesktop isTablet />
            Enigma Net operation
          </>
        }
        description=" Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform. "
        image={heroImage}
        isbg
        buttons={[
          {
            label: 'Explore Nexus ',
            href: '#',
            variant: 'blue',
          },
          {
            label: 'Talk to Enigma',
            href: '/get-in-touch',
            variant: 'gold',
            disableSentenceCase: true,
          },
        ]}
        features={[' Unified control  ', 'Role-aware access', ' AI-assisted operations']}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Infrastructure gets harder to control when <Br isDesktop isTablet /> every service
                  has its own interface{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            As networks, edge devices, storage platforms, users and support workflows grow, teams
            can quickly lose visibility. Performance data sits in one place. Asset information sits
            somewhere else. File workflows, tickets, users, permissions and billing become
            fragmented.
            <br />
            <br />
            Nexus reduces that complexity by giving customers and operators one controlled place to
            understand what is deployed, how it is performing, who can access it and what needs
            action.
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
                  Nexus turns separate infrastructure services <Br isDesktop isTablet /> into
                  connected workflows
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Nexus sits above Enigma’s networking, storage and automation layers. It does not replace
            the underlying technology it makes those capabilities easier to operate, monitor and
            control through a secure, role-aware interface.
          </>
        }
        data={data2}
      />

      <CardWithUseCase
        data={Command as CardItem[]}
        headerTitle="Four modules. One operational view"
        disableSentenceCase
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Built for every role that needs controlled <Br isDesktop isTablet /> access to
                  Enigma services
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Copy Nexus gives each user the right level of visibility and control, based on their
            role, permissions and operational responsibility.
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
                  From onboarding to operations,
                  <Br isDesktop isTablet /> Nexus keeps the workflow connected
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={data4}
      />
      <CaseStudyHighlight
        image={caseStudyImage}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  A secure interface over Enigma’s networking, <Br isDesktop isTablet /> storage and
                  automation layers
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Nexus is a web application and thin-client surface that connects to Enigma’s backend
            services, monitoring systems, storage platforms, identity providers and AI-agent
            workflows.
            <br />
            <br />
            It does not replace the lower-level technology. It orchestrates it into safe, auditable
            workflows.
          </>
        }
        transitionLine={
          <>
            Nexus makes Enigma’s infrastructure easier to operate without exposing unnecessary
            complexity.
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
                  AI-assisted operations with <Br isDesktop isTablet />
                  human control built in
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Nexus is where the LLM-based network agent presents insights, recommended actions,
            tickets and operational events. Teams can review what the agent has detected, understand
            the suggested response, approve action, pause automation or override decisions when
            needed.
          </>
        }
        data={data5}
      />
      <CaseStudyHighlight
        data={outcomes}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Designed for controlled, auditable <Br isDesktop isTablet />
                  infrastructure operations
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Nexus is built around identity, role-based access, tenant boundaries and operational
            audit trails. Every action is tied to a user, role, customer and permission level,
            giving teams confidence when managing live services.
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes2}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Nexus is the control layer, <Br isDesktop isTablet />
                  not the transport engine{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Nexus does not change the low-level APN transport logic, protocol behaviour or ViBE
            binary internals. Those remain part of Enigma’s core networking layer. Instead, Nexus
            gives customers and operators a safer, clearer way to use, monitor and manage the
            capabilities already available across Enigma Net.
          </>
        }
      />
      <CaseStudyHighlight
        data={outcomes3}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Out of scope  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
      />
      <NextPageSlider
        title="Connected across the Enigma Net stack"
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Bring your Enigma services into  "
        headline2=" one controlled view"
        description="Nexus gives customers and operators one place to manage services, monitor performance, control access, review activity and work with AI-assisted network operations. "
        primaryButton={{
          label: 'Explore Nexus',
          href: '#',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Talk to Enigma',
          href: '/get-in-touch',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default Nexus;
