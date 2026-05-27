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

import { type CardItem } from '@/components/ui/card';
import CardWithUseCase from '@/components/ui/CardWithUseCase';
import FeatureComparison from '@/components/ui/FeatureComparison';
import Br from '@/components/ui/NewLine';
const features = [
  {
    id: 1,
    title: 'Nexus  ',
    href: '/products/enigma-platform/enigma-hub',
    slug: 'enigma-hub',
    description:
      'The universal interface that brings Enigma services, modules and workflows together.  ',
    meta: {
      title: 'Nexus  ',
      description:
        'The universal interface that brings Enigma services, modules and workflows together.  ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'Command',
    href: '/products/enigma-platform/enigma-command',
    slug: 'enigma-command',
    description:
      'Uses Hub permissions for incident visibility, approvals and automation control.  ',
    meta: {
      title: 'Command',
      description:
        'Uses Hub permissions for incident visibility, approvals and automation control.  ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'Grid  ',
    href: '/products/enigma-platform/enigma-grid',
    slug: 'enigma-grid',
    description:
      'Uses Hub access rules to determine which assets, sites and devices users can see or manage.  ',
    meta: {
      title: 'Grid ',
      description:
        'Uses Hub access rules to determine which assets, sites and devices users can see or manage.  ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'SyncSphere   ',
    href: '/products/enigma-platform/enigma-syncsphere',
    slug: 'enigma-syncsphere',
    description: 'Uses Hub permissions for folder, bucket, file transfer and storage access.   ',
    image: heroImg,
    meta: {
      title: 'SyncSphere',
      description: 'Uses Hub permissions for folder, bucket, file transfer and storage access.  ',
    },
  },
  {
    id: 5,
    title: 'Ledger ',
    href: '/products/enigma-platform/enigma-ledger',
    slug: 'enigma-ledger',
    description: 'Uses Hub identities to record who did what, when and under which authority.   ',
    meta: {
      title: 'Ledger',
      description: 'Uses Hub identities to record who did what, when and under which authority.   ',
    },
    image: heroImg,
  },
];

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'User access gets fragmented  ',
    description: `Users, roles and permissions can become scattered across products, portals and workflows.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Permissions become unclear  ',
    description: `Teams need to know exactly who can view, manage or approve actions across services.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Security policies need consistency  ',
    description:
      'Password rules, 2FA, session timeouts and account status need central enforcement.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Audit trails are essential',
    description:
      'Customers and operators need clear evidence of who did what, when and under which permission level.  ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Tenants and organisations   ',
    description: `Manage customer, partner and internal Enigma organisations in one place.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Users and groups  ',
    description: `Create, invite, suspend, delete and organise users by team, role or function.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Roles and permissions    ',
    description:
      'Control what users can see, manage, approve or administer across products and resources.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Security policies  ',
    description:
      'Enforce password rules, 2FA requirements, session timeouts and account recovery controls.  ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Audit activity  ',
    description:
      'Track logins, failed logins, permission changes and significant resource actions.  ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: 'Zero Trust access model  ',
    description: `Identity and policy define access, rather than network location.    
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Strong credential handling  ',
    description: `Passwords, tokens and service account credentials are protected, rotated and controlled.  `,
  },
  {
    id: 3,
    icon: block3,
    title: '2FA and session governance  ',
    description:
      'Tenants can enforce two-factor authentication, idle timeouts and session revocation.   ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Service account scoping  ',
    description:
      'Automation identities are limited to the minimum required permissions and audited separately.  ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Audit-ready records  ',
    description:
      'User activity, access changes and significant actions are recorded for review and compliance.  ',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'Product access',
    description: `Controls access to Enigma Connect, Enigma EDGE, ESC, SyncSphere, LFT, MFT and Hot Storage features.   `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Resource access  ',
    description:
      'Controls access to specific folders, buckets, sites, CPE devices, ESC profiles and customer environments.   ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Administrative rights ',
    description:
      'Controls who can create users, manage groups, assign roles, enforce security policies and run audit reports.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Effective permissions  ',
    description:
      'Combines direct user permissions with all group and role permissions to calculate what a user can actually do.  ',
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'Command  ',
    description: `Command uses Hub to determine who can view incidents, approve actions, override   
automation or access operational reports.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Grid    ',
    description: `Grid uses Hub to determine which sites, devices, tunnels and assets a user can see or manage.  
`,
  },
  {
    id: 3,
    icon: block1,
    title: 'SyncSphere',
    description: `SyncSphere uses Hub to control access to storage buckets, folders, file shares, LFT and MFT   
workflows.    `,
  },
  {
    id: 4,
    icon: block3,
    title: 'Ledger',
    description: `Ledger uses Hub identity records to show who performed an action, who approved it and under   
which role.   `,
  },
  {
    id: 5,
    icon: block1,
    title: 'LLM Agent ',
    description: `The LLM agent uses Hub identities, roles and service accounts to decide what actions are   
allowed on behalf of a user or tenant.  `,
  },
];

const Command = [
  {
    id: 1,
    title: 'Identity source of truth  ',
    description:
      'Hub is the authoritative record for users, tenants, groups, roles and service accounts.   ',
    usecase: [
      'Customer, partner and internal tenants  ',
      'Human users and non-human service accounts  ',
      'Status, security state and role membership  ',
    ],
  },
  {
    id: 2,
    title: 'Product and feature access  ',
    description: 'Hub controls which Enigma products and features each user can access.  ',
    usecase: [
      'Enigma Connect plans  ',
      'Enigma EDGE services  ',
      'ESC tenant views  ',
      'SyncSphere, LFT, MFT and Hot Storage permissions  ',
    ],
  },
  {
    id: 3,
    title: 'Resource-level permissions',
    description: 'Hub maps users and groups to specific resources through Grid and SyncSphere.  ',
    usecase: [
      'Storage bucket and folder access  ',
      'Site and device permissions  ',
      'ESC profile visibility and management rights  ',
    ],
  },
  {
    id: 4,
    title: 'Security policy enforcement  ',
    description: 'Hub applies tenant-level security rules across Nexus and connected services.  ',
    usecase: [
      'Password policy  ',
      'Two-factor authentication  ',
      'Session timeout and token revocation  ',
    ],
  },
  {
    id: 5,
    title: 'Audit and activity reporting  ',
    description:
      'Hub records user activity and access changes for security, compliance and operational review.  ',
    usecase: [
      'Logins and failed logins  ',
      'Permission and role changes  ',
      'Exportable activity reports  ',
    ],
  },
];
const assetsFamily = [
  {
    id: 1,
    title: 'Tenants and organisations  ',
    description: 'A tenant represents a customer, partner or internal Enigma business unit.  ',
    usecase: [
      'Enigma Connect subscriptions  ',
      'Enigma EDGE services  ',
      'ESC profiles  ',
      'Hot Storage and SyncSphere workspaces  ',
    ],
  },
  {
    id: 2,
    title: 'Users',
    description:
      'Users are individual human identities with status, roles and security properties.  ',
    usecase: [
      'Email and name  ',
      'Active, suspended or deleted status  ',
      'Tenant roles',
      '2FA and password policy state  ',
    ],
  },
  {
    id: 3,
    title: 'Groups and roles  ',
    description:
      'Groups and roles reduce manual permission setup by assigning access in a structured way.  ',
    usecase: [
      'Video Editors  ',
      'Network Admins  ',
      'Admin  ',
      'Operator  ',
      'Viewer  ',
      'Billing contact  ',
    ],
  },
  {
    id: 4,
    title: 'Service accounts   ',
    description: 'Service accounts are non-human identities used by automation and integrations.  ',
    usecase: [
      'LLM-agent connectors  ',
      'Provisioning scripts  ',
      'Integration tools  ',
      'Scoped automation identities  ',
    ],
  },
];
const capabilities = [
  {
    id: 1,
    title: 'User lifecycle management  ',
    description:
      'Hub manages users from creation and invitation through to suspension, deletion and recovery.   ',
    usecase: [
      'Searchable user list  ',
      'Invite workflow with password setup  ',
      'Suspend, reactivate or delete accounts  ',
      'Forgot password flow with time-limited reset links  ',
    ],
  },
  {
    id: 2,
    title: 'Groups, roles and permission matrices  ',
    description: 'Hub lets admins assign permissions by user, group, role, product and resource.  ',
    usecase: [
      'Group-level permissions  ',
      'Storage bucket and folder access  ',
      'Site, device and ESC access via Grid mappings  ',
      'Product-level feature permissions  ',
    ],
  },
  {
    id: 3,
    title: 'Authentication and session control  ',
    description:
      'Hub enforces tenant-level authentication policies and active session controls.   ',
    usecase: [
      'Password complexity and reset rules  ',
      'Optional or mandatory 2FA  ',
      'Backup codes for recovery  ',
      'Idle timeout and session revocation',
    ],
  },
  {
    id: 4,
    title: 'Audit logging and reports  ',
    description:
      'Hub records key user and permission events across Nexus and connected services.  ',
    usecase: [
      'Login and failed login records  ',
      'Permission changes  ',
      'Significant resource actions  ',
      'CSV export for audit or SIEM integration  ',
    ],
  },
];
const workflows = [
  {
    id: 1,
    title: 'Onboard a new customer tenant  ',
    transitionLine: 'A new customer starts with controlled access from day one.  ',
    usecase: [
      'Create tenant record in Hub  ',
      'Create or invite the initial admin user  ',
      'Link Connect, EDGE, ESC and storage subscriptions  ',
      'Tenant admin invites additional users  ',
      'Password and 2FA policies are applied  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 2,
    title: '  Grant project-specific access',
    transitionLine: 'Teams get the access they need without exposing unrelated resources.  ',
    usecase: [
      'Create a group such as “Video Editors”  ',
      'Assign read/write access to selected Hot Storage buckets  ',
      'Add users to the group  ',
      'Users only see the relevant folders in SyncSphere  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 3,
    title: ' Offboard a departing employee  ',
    transitionLine: 'Access is removed quickly, cleanly and with evidence.  ',
    usecase: [
      'Suspend or delete the user in Hub  ',
      'Active sessions are invalidated  ',
      'Ownership of shares or admin roles is reassigned  ',
      'User activity report is exported for compliance  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 4,
    title: ' Investigate suspicious activity  ',
    transitionLine: 'Security teams can trace user activity across Nexus workflows.  ',
    usecase: [
      'Security admin searches Hub activity logs  ',
      'Events are filtered by user, date range or action type  ',
      'Permission changes and resource activity are reviewed  ',
      'Records are cross-referenced with Command incidents where needed ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
];
const Hub = () => {

  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'The Enigma Platform', href: '/products/the-enigma-platform' },
          { label: 'Enigma Hub' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Control who has access, what <Br  isTablet /> they can seeand what they can do.
          </>
        }
        description="Enigma Hub centralises users, tenants, groups, roles, security policies and audit trails across   
        Enigma Connect, Enigma EDGE, ESC – Secure Networking, SyncSphere and Nexus workflows.  "
        image={heroImg}
        buttons={[
          {
            label: 'Talk to Enigma',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={['Identity control', 'Role-based access ', 'Audit-ready activity']}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  As services grow, access <Br isDesktop isTablet /> becomes harder to control
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Customers, partners and internal teams need different levels of access across Enigma
            services. One user may need storage access. Another may need site visibility. A billing
            contact may only need subscription information. An operator may need permission to
            approve actions inside Command.
            <br />
            <br />
            Without a central identity and access layer, permissions become fragmented, inconsistent
            and harder to audit. what is installed, where it sits, who owns it, what service it
            supports and what else depends on it. <br />
            <br />
            Enigma Hub gives every user, tenant and service a controlled access model.
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
                  Hub makes identity the control point for
                  <Br isDesktop isTablet />
                  every Nexus workflow.{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Hub is the IAM and user management module inside Nexus. It controls users,
            tenants, groups, roles, product access, resource permissions, security policies and
            activity records.
            <br />
            <br />
            Hub does not store network assets or files itself. It connects people and permissions to
            those resources through Grid, SyncSphere, Command and ESC.
          </>
        }
        data={data2}
      />

      <CardWithUseCase
        data={Command as CardItem[]}
        headerTitle={
          <>
            Built to define who can access <Br isDesktop isTablet /> what across Enigma Net
          </>
        }
      />

      <CardWithUseCase
        data={assetsFamily as CardItem[]}
        headerTitle={
          <>
            A clear model for tenants, users,
            <Br isDesktop isTablet /> groups, roles and service accounts
          </>
        }
        description={
          <>
            Hub manages the identity objects that determine who can access Enigma services and under
            what conditions.
          </>
        }
      />
      <CardWithUseCase
        data={capabilities as CardItem[]}
        headerTitle={
          <>
            From onboarding to offboarding,
            <Br isDesktop isTablet /> Hub controls the full user lifecycle{' '}
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
                  Access can be controlled by <Br isDesktop isTablet /> product, resource and role
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Hub gives Enigma customers and internal teams layered control over who can access
            products, features, files, folders, sites, devices and administrative functions.
          </>
        }
        data={data4}
      />

      <CardWithUseCase
        data={workflows as CardItem[]}
        headerTitle={
          <>
            Hub keeps user access controlled through
            <Br isDesktop isTablet />
            every stage of the customer lifecycle{' '}
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
                  Hub defines who is allowed to interact
                  <Br isDesktop isTablet /> with every Nexus module
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Inside Nexus, Hub is the identity and access authority. Other modules rely on Hub to
            understand who the user is, which tenant they belong to and what they are allowed to do.
          </>
        }
        data={data5}
        transitionLine={
          <>
            Hub defines the identity. <br />
            The rest of Nexus respects it.{' '}
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
                  Identity-led control for secure
                  <Br isDesktop isTablet /> Nexus operations
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Hub underpins the security model across Enigma Nexus by enforcing identity, policy and
            audit controls. Access is defined by who the user is, what tenant they belong to, what
            role they hold and what resource permissions they have.
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
                  Hub controls access, but it does not <Br isDesktop isTablet /> replace product
                  configuration
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Hub is focused on identity, access, security policies and audit trails. It does
            not store network assets, manage file content or act as the billing engine.
            <br />
            <br />
            Those functions live in other Nexus modules and connected Enigma systems.
          </>
        }
        benitsTitle="Hub is  "
        limitationsTitle="Hub is not  "
        benefits={[
          'The IAM and user management layer inside Nexus  ',
          'The source of truth for users, tenants, groups and roles',
          'The authority for product and resource access  ',
          'The place to enforce security policies  ',
          'The source of user activity and access audit trails  ',
        ]}
        limitations={[
          'The billing engine  ',
          'The network asset inventory  ',
          'The file or storage management system ',
          'A general-purpose directory for systems outside Enigma Net  ',
          'A direct configuration tool for networking or storage services  ',
        ]}
      />

      <NextPageSlider
        title="Hub connects identity and access across Nexus "
        data={features}
       
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Give every user the right access, with the <br /> right evidence.
          </>
        }
        headline2=" with the right evidence."
        description="Enigma Hub centralises users, roles, permissions, security policies and audit activity across   
        Nexus, helping teams control access without slowing operations down.  "
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

export default Hub;
