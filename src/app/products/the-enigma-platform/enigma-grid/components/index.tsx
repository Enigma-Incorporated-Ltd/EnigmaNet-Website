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
      'Uses Grid context for incident visibility, automation control and operational decision-making. ',

    meta: {
      title: 'Command',
      description:
        'Uses Grid context for incident visibility, automation control and operational decision-making. ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'Hub',
    href: '/products/enigma-platform/enigma-hub',
    slug: 'enigma-hub',
    description: 'Links users, tenants, roles and permissions to the assets they can access.  ',

    meta: {
      title: 'Hub ',
      description: 'Links users, tenants, roles and permissions to the assets they can access.  ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'Ledger ',
    href: '/products/enigma-platform/enigma-ledger',
    slug: 'enigma-ledger',
    description: 'Records asset changes, lifecycle activity, approvals and audit evidence.  ',

    meta: {
      title: 'Ledger',
      description: 'Records asset changes, lifecycle activity, approvals and audit evidence.  ',
    },
    image: heroImg,
  },
  {
    id: 5,
    title: 'SyncSphere   ',
    href: '/products/enigma-platform/enigma-syncsphere',
    slug: '/enigma-syncsphere',
    description:
      'Associates file, storage and configuration artefacts with assets, sites and services.   ',
    image: heroImg,
    meta: {
      title: 'SyncSphere',
      description:
        'Associates file, storage and configuration artefacts with assets, sites and services.   ',
    },
  },
];

const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Asset information gets scattered  ',
    description: `Devices, circuits, tunnels, licences and customer details can end up split across portals,   
spreadsheets, monitoring tools and support notes.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Incident context is harder to find  ',
    description: ` When something fails, teams need to know which customers, services and sites are affected   
without manually piecing it together.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Ownership becomes unclear  ',
    description:
      'Support, billing, product and operations teams need a shared view of who owns each asset and what service it belongs to.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Automation needs trusted context',
    description:
      'The LLM agent and Command workflows need accurate asset data before they can diagnose,   recommend or remediate safely.  ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Inventory ',
    description: `A canonical record of devices, sites, links, tunnels, tenants and licences.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Topology',
    description: `A structured view of how sites, devices, circuits, tunnels, POPs and services connect.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Ownership  ',
    description:
      'Customer, tenant, product, licence and support relationships linked to each asset.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Lifecycle status  ',
    description:
      'Track assets from planned, staging and live through to degraded, retired or replaced.  ',
  },
  {
    id: 5,
    icon: block3,
    title: 'Automation context  ',
    description:
      'Provide Command and the LLM agent with reliable asset data for diagnostics, impact analysis and remediation.  ',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: 'Define the asset schema  ',
    description: `Create the canonical model for assets, relationships, ownership, lifecycle states and product bindings.  
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Ingest existing sources  ',
    description: `Bring in data from ViBE SNMP, existing portals, Zabbix, cloud inventories and interim spreadsheets.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Expose the Grid API ',
    description:
      'Provide stable query patterns for Command and the LLM agent, including asset by key, topology for site and assets by tenant/product.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Establish governance  ',
    description:
      'Define who can create, modify or retire asset records and align changes with security practices for management plane access.  ',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: 'NOC and operations teams  ',
    description: `Use Grid to understand assets, links, tunnels and POPs during incidents and planned changes.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Implementation and field engineers  ',
    description:
      'Check which devices, SIMs, circuits and licences belong to a site before install, replacement or maintenance.  ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Customer success and support  ',
    description:
      'Answer questions about what is installed at a customer site and how it relates to SLAs or escalations.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Finance, billing and product teams  ',
    description:
      'Map assets and circuits to product tiers, licences, subscriptions and billing entities.  ',
  },
  {
    id: 5,
    icon: block2,
    title: 'LLM Network Agent   ',
    description: `Uses Grid to map alerts and telemetry to real assets, sites, customers and services before   
analysis or remediation.  `,
  },
];
const data5 = [
  {
    id: 1,
    icon: block1,
    title: 'Command  ',
    description: `Command answers <strong> what is happening </strong>. Grid gives Command the asset and topology context behind incidents and actions.`,
  },

  {
    id: 2,
    icon: block3,
    title: 'Hub  ',
    description: `Hub answers <strong> who is allowed to access it </strong>.  Grid links assets to tenants, users, roles and service ownership. `,
  },
  {
    id: 3,
    icon: block1,
    title: 'SyncSphere',
    description: `SyncSphere answers <strong> where files, objects and configuration artefacts sit </strong>. Grid links storage and configuration workflows back to sites and assets.  `,
  },
  {
    id: 4,
    icon: block3,
    title: 'Ledger',
    description: `Ledger answers   <strong> what happened and who changed it  </strong>. Grid provides asset context for audit trails, lifecycle changes and operational history.  `,
  },
];

const Command = [
  {
    id: 1,
    title: 'Authoritative inventory   ',
    description: 'Grid maintains the canonical list of network assets across Enigma deployments.  ',
    usecase: [
      'Hardware, virtual appliances and logical network objects  ',
      'Customer, tenant and product relationships  ',
      'Licence, subscription and capacity references  ',
    ],
  },
  {
    id: 2,
    title: 'Topology and relationships  ',
    description: 'Grid models how assets connect and depend on each other.   ',
    usecase: [
      'Sites to devices  ',
      'Devices to links and tunnels  ',
      'Tunnels to tenants, products and services  ',
    ],
  },
  {
    id: 3,
    title: 'Lifecycle tracking   ',
    description: 'Teams can track asset status across the full deployment lifecycle.  ',
    usecase: ['Planned  ', 'In staging  ', 'In service  ', 'Degraded  ', 'Retired  '],
  },
  {
    id: 4,
    title: 'Source of truth for automation   ',
    description:
      'Grid provides structured context to Command and the LLM agent before operational actions are taken.  ',
    usecase: [
      'Asset context for diagnostics  ',
      'Site and customer mapping  ',
      'Service impact analysis  ',
    ],
  },
  {
    id: 5,
    title: 'Compliance and audit support   ',
    description: 'Grid records historical changes to asset attributes and relationships.  ',
    usecase: ['Configuration history  ', 'Ownership changes', 'SLA and compliance evidence  '],
  },
];
const assetsFamily = [
  {
    id: 1,
    title: 'Physical and virtual infrastructure   ',
    description: 'Grid records the infrastructure that carries or supports Enigma traffic.   ',
    usecase: [
      'Enigma EDGE appliances and CPE  ',
      'ESC virtual appliances and VM instances  ',
      'APN entry and exit servers  ',
      'POP and core nodes  ',
      'Managed supporting infrastructure   ',
    ],
  },
  {
    id: 2,
    title: 'Links and connectivity  ',
    description: 'Grid tracks the access links and logical link groups used by Enigma services. ',
    usecase: [
      'Fibre, DSL, 4G, 5G, satellite and microwave links  ',
      'Bonding and failover groups  ',
      'RAIN duplication paths  ',
      'Carrier, SLA, location and bandwidth details  ',
    ],
  },
  {
    id: 3,
    title: 'Logical network constructs  ',
    description: 'Grid models the logical objects used across APN and service deployments.   ',
    usecase: [
      'APN tunnels and overlay paths    ',
      'QoS policies and class maps  ',
      'Sites and tenant objects  ',
      'Product and service bindings  ',
      'Config references such as vibe.conf objects    ',
    ],
  },
  {
    id: 4,
    title: 'Commercial and security metadata   ',
    description: 'Grid connects assets to the commercial and security context that governs them.  ',
    usecase: [
      'Product tier and entitlement  ',
      'Licence keys and subscription IDs  ',
      'Capacity limits  ',
      'Customer ownership and support contracts  ',
      'Security posture and management access methods',
    ],
  },
];
const capabilities = [
  {
    id: 1,
    title: 'Unified inventory views   ',
    description:
      'Teams can view the estate globally or by tenant, site, product, region, device or lifecycle state.  ',
    usecase: [
      'Global, tenant, site and device views  ',
      'Filters by product, media type, geography, carrier or criticality  ',
      'Drill down from service view to exact devices, tunnels and circuits  ',
    ],
  },
  {
    id: 2,
    title: 'Topology and impact mapping  ',
    description:
      'Grid helps teams understand what is affected when a link, device, tunnel or service has an issue.   ',
    usecase: [
      'Map sites to devices   ',
      'Map devices to circuits and tunnels  ',
      'Map tunnels to POPs, ESC cores, customers and SLAs  ',
    ],
  },
  {
    id: 3,
    title: 'State sync with live infrastructure  ',
    description:
      'Grid reconciles inventory records against live infrastructure sources to detect drift.  ',
    usecase: [
      'ViBE SNMP MIBs and CLI output  ',
      'AND/+ and ESC APIs  ',
      'Cloud provider inventories  ',
      'Missing nodes, unregistered CPE and orphaned tunnel detection  ',
    ],
  },
  {
    id: 4,
    title: 'Monitoring and automation integration  ',
    description:
      'Grid links monitoring entities back to real network assets and gives Command and the LLM agent operational context.  ',
    usecase: [
      'Zabbix host IDs, triggers and item keys  ',
      'Asset context for incident timelines  ',
      'Diagnostic prompts tied to site, device and service data  ',
    ],
  },
  {
    id: 5,
    title: 'Change history and audit  ',
    description: 'Grid records changes to assets, relationships and key operational attributes.  ',
    usecase: [
      'Who created, updated or retired each asset  ',
      'Previous values for serials, locations, IPs and product tiers',
      'Evidence for configuration and asset management reviews   ',
    ],
  },
];
const workflows = [
  {
    id: 1,
    title: 'Investigate an incident',
    transitionLine: 'Faster incident understanding with less manual investigation. ',
    usecase: [
      'Alert appears in Command   ',
      'Command pulls asset context from Grid  ',
      'Operator sees affected site, device, link, tunnel and customer  ',
      'Impact is assessed before action is taken   ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 2,
    title: ' Prepare a site installation   ',
    transitionLine: 'Cleaner deployments with fewer missing parts or unclear ownership gaps.  ',
    usecase: [
      'Field engineer opens the site record  ',
      'Devices, circuits, SIMs and licences are reviewed  ',
      'Planned assets are checked against customer requirements  ',
      'Site is moved through staging into service   ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 3,
    title: 'Detect inventory drift   ',
    transitionLine: 'Inventory stays aligned with the real network.   ',
    usecase: [
      'Grid syncs with live infrastructure sources  ',
      'Actual state is compared against expected records  ',
      'Missing, orphaned or mismatched assets are flagged  ',
      'Teams resolve the discrepancy before it affects operations  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 4,
    title: 'Support billing and product mapping  ',
    transitionLine: 'Commercial visibility matches operational reality.   ',
    usecase: [
      'Finance or product team filters assets by customer or product  ',
      'Licences, capacity limits and service bindings are reviewed  ',
      'Assets are mapped to billing entities and subscriptions   ',
      'Commercial records stay aligned with live deployments  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
];
const Grid = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'The Enigma Platform', href: '/products/the-enigma-platform' },
          { label: 'Enigma Grid' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            See what’s deployed, how it connects <Br isDesktop isTablet /> and what depends on
            it{' '}
          </>
        }
        description="Enigma Grid gives operations, support, engineering and commercial teams a single   
        authoritative view of devices, links, tunnels, sites, tenants, licences and services across Enigma   
        Net deployments.  "
        // image={heroImg}
        buttons={[
          {
            label: ' Talk to Enigma  ',
            href: '/get-in-touch',
            variant: 'blue',
          },
        ]}
        features={[' Authoritative inventory ', 'Topology visibility', ' Service ownership  ']}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  You cannot operate what
                  <Br isTablet />
                  you cannot clearly see
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            As Enigma deployments grow across customers, sites, devices, cloud environments and
            product families, teams need a reliable source of truth for the network estate.
            <br />
            <br />
            Without a clear asset and topology layer, teams waste time asking basic operational
            questions:{' '}
            <strong>
              {' '}
              what is installed, where it sits, who owns it, what service it supports and what else
              depends on it.{' '}
            </strong>
            <br />
            <br />
            Enigma Grid brings that information into one structured view.
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
                  Grid turns the Enigma estate into <Br isDesktop isTablet /> a single source of
                  truth
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Grid is the inventory and topology layer inside Nexus. It models physical
            infrastructure, connectivity links, APN tunnels, service bindings, tenants, licences and
            ownership relationships.
            <br />
            <br />
            It does not replace live monitoring systems. Instead, it correlates asset information
            with operational data so Command, the LLM agent and support teams can act with accurate
            context.
          </>
        }
        data={data2}
      />

      <CardWithUseCase
        data={Command as CardItem[]}
        headerTitle={
          <>
            Built to define what exists, where it is and
            <Br isDesktop isTablet /> how it is connected
          </>
        }
      />

      <CardWithUseCase
        data={assetsFamily as CardItem[]}
        headerTitle={
          <>
            One model for physical, logical, <Br isDesktop isTablet />
            commercial and security context
          </>
        }
        description={
          <>
            Grid manages the assets and relationships that make up Enigma Net deployments, from
            physical CPE and links through to logical tunnels, tenants, licences and security
            metadata.
          </>
        }
      />
      <CardWithUseCase
        data={capabilities as CardItem[]}
        headerTitle={
          <>
            From inventory to impact mapping,
            <Br isDesktop isTablet /> Grid gives every asset context{' '}
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
                  Built for every team that needs a trusted view <Br isDesktop isTablet />
                  of the network estate
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Grid gives operational, engineering, support, commercial and automation teams the same
            structured view of what exists and how it is connected.{' '}
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
                  Grid provides the context other
                  <Br isTablet /> Nexus modules rely on
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Inside Nexus, Grid acts as the inventory and topology system of record. Other modules
            use Grid data to understand which assets, customers and services are involved in each
            workflow.
          </>
        }
        data={data5}
        transitionLine={
          <>
            Command shows the event.
            <br /> Grid shows the estate behind it.
          </>
        }
      />
      <CardWithUseCase
        data={workflows as CardItem[]}
        headerTitle={
          <>
            Grid turns asset questions into
            <Br isTablet /> fast operational answers{' '}
          </>
        }
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built around a canonical asset model </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Grid depends on a clear asset schema, trusted data sources and governance for who can
            create, update or retire asset records.
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
                  Grid is the asset and topology layer, <Br isTablet isDesktop /> not the live monitoring
                  engine{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Grid focuses on inventory, topology, ownership, lifecycle status and asset
            relationships. It consumes and correlates monitoring outputs, but it does not replace
            monitoring systems or directly execute infrastructure changes.
          </>
        }
        benitsTitle="Grid is"
        limitationsTitle="Grid is not"
        benefits={[
          'The network asset management layer inside Nexus',
          'The source of truth for assets, topology and ownership ',
          'The context layer for Command and the LLM agent ',
          'The lifecycle record for Enigma network assets',
          'The relationship model between sites, devices, links, tunnels, tenants and services ',
        ]}
        limitations={[
          'A primary time-series database for metrics or logs ',
          'A replacement for dedicated CMDB systems outside Enigma Net scope ',
          'A place to store unnecessary sensitive customer data  ',
          'A direct execution tool for device or cloud configuration changes ',
          'A replacement for Command, ESC orchestrators or controlled management interfaces ',
        ]}
      />

      <NextPageSlider
        title="Grid connects the operational estate across Nexus "
        data={features}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Give every team a trusted view of    "
        headline2=" what is deployed."
        description="Enigma Grid gives operations, support, engineering, finance and automation teams a single   
        source of truth for network assets, topology, ownership and service relationships.  "
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

export default Grid;
