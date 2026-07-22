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
import Br from '@/components/ui/NewLine';
import { Commond, GridHero, HeroHub, HeroSyncSphere, LedgerHero } from '@/assets/img/products';
import { CommandSvg, GridSvg, HubSvg, NexusSvg, PaincardsDeviceestatesneedcommercialcontext, PaincardsFinanceneedsevidence, PaincardsPaymentproviderssitoutsidetheserviceview, PaincardsSubscriptionsbecomehardtotrack, SecuritycardsControlledproviderconnections, SecuritycardsFullcommercialaudittrail, SecuritycardsRolebasedaccess, SecuritycardsSecurePSPcredentialstorage, SecuritycardsTokenbasedpaymenthandling, SyncSphereSvg, UserrolecardsCustomerfinanceandbillingcontacts, UserrolecardsCustomerproductandoperationsteams, UserrolecardsEnigmacommercialandopsteams, UserrolecardsPSPanddevicepartners, WhatLedgerbringstogetherEnigmabilling, WhatLedgerbringstogetherPaymentdevices, WhatLedgerbringstogetherPaymentproviders, WhatLedgerbringstogetherProductusage, WhatLedgerbringstogetherReportingandreconciliation } from '@/assets/svgs/products/enigma-platform/ledger';
const features = [
  {
    id: 1,
    title: 'Nexus ',
    href: '/products/enigma-platform/enigma-nexus',
    slug: 'enigma-nexus',
    description:
      'The universal interface that brings Enigma services, users, assets, workflows and commercial records together.  ',

    meta: {
      title: 'Nexus ',
      description:
        'The universal interface that brings Enigma services, users, assets, workflows and commercial records together.  ',
    },
    image: enigmaSecureTablet,
  },
  {
    id: 2,
    title: 'Hub  ',
    href: '/products/enigma-platform/enigma-hub',
    slug: 'enigma-hub',
    description:
      'Controls tenants, roles, finance users, billing contacts and PSP/device permissions.   ',

    meta: {
      title: 'Hub  ',
      description:
        'Controls tenants, roles, finance users, billing contacts and PSP/device permissions.  ',
    },
    image: HeroHub,
  },
  {
    id: 3,
    title: 'Grid  ',
    href: '/products/enigma-platform/enigma-grid',
    slug: 'enigma-grid',
    description: 'Links payment devices, terminals and services to sites, networks and assets.  ',

    meta: {
      title: 'Grid   ',
      description: 'Links payment devices, terminals and services to sites, networks and assets.  ',
    },
    image: GridHero,
  },
  {
    id: 4,
    title: 'Command   ',
    href: '/products/enigma-platform/enigma-command',
    slug: 'enigma-command',
    description:
      'Surfaces operational incidents that may affect payments, terminals, PSPs or revenue.   ',

    meta: {
      title: 'Command   ',
      description:
        'Surfaces operational incidents that may affect payments, terminals, PSPs or revenue.  ',
    },
    image: Commond,
  },
  {
    id: 5,
    title: 'SyncSphere  ',
    href: '/products/enigma-platform/syncsphere',
    slug: 'syncsphere',
    description: 'Feeds storage, transfer and usage-related services into the commercial model.   ',
    image: HeroSyncSphere,
    meta: {
      title: 'SyncSphere  ',
      description:
        'Feeds storage, transfer and usage-related services into the commercial model.   ',
    },
  },
];
const featuresChild = [
  {
    id: 1,
    title: 'Ledger – Data Model   ',
    href: '/products/enigma-platform/enigma-ledger/ledger-data-model',
    slug: 'ledger-data-model',
    description:
      'Defines billing accounts, subscriptions, PSPs, devices, invoices and transaction records.  ',

    meta: {
      title: 'Ledger – Data Model ',
      description:
        'Defines billing accounts, subscriptions, PSPs, devices, invoices and transaction records.   ',
    },
    image: heroImg,
  },
  {
    id: 2,
    title: 'Ledger – PSP Connectors    ',
    href: '/products/enigma-platform/enigma-ledger/ledger-psp-connectors',
    slug: 'ledger-psp-connectors',
    description: 'Details approved PSP integrations, custom provider flows and test tools.  ',

    meta: {
      title: 'Ledger – PSP Connectors    ',
      description: 'Details approved PSP integrations, custom provider flows and test tools.   ',
    },
    image: heroImg,
  },
  {
    id: 3,
    title: 'Ledger – Payment Device Integrations    ',
    href: '/products/enigma-platform/enigma-ledger/ledger-payment-device-integrations',
    slug: 'ledger-payment-device-integrations',
    description: 'Covers HWE, UCP and other terminal/device supplier mappings.   ',

    meta: {
      title: 'Ledger – Payment Device Integrations     ',
      description: 'Covers HWE, UCP and other terminal/device supplier mappings.    ',
    },
    image: heroImg,
  },
  {
    id: 4,
    title: 'Ledger – Tenant Billing & Invoicing Flows     ',
    href: '/products/enigma-platform/enigma-ledger/ledger-tenant-billing-invoicing-flows',
    slug: 'ledger-tenant-billing-invoicing-flows',
    description: 'Defines invoice, payment, dunning, credit and subscription workflows.    ',

    meta: {
      title: 'Ledger – Tenant Billing & Invoicing Flows     ',
      description: 'Defines invoice, payment, dunning, credit and subscription workflows.  ',
    },
    image: heroImg,
  },
];
const Core = [
  {
    id: 1,
    icon: PaincardsSubscriptionsbecomehardtotrack,
    title: 'Subscriptions become hard to track  ',
    description: `Customers may use Connect, EDGE, ESC, storage and transfer services across multiple sites, users and tenants.  `,
  },
  {
    id: 2,
    icon: PaincardsPaymentproviderssitoutsidetheserviceview,
    title: 'Payment providers sit outside the service view  ',
    description: ` PSP accounts, gateways and merchant IDs often live separately from the services and sites that   
depend on them.  `,
  },
  {
    id: 3,
    icon: PaincardsDeviceestatesneedcommercialcontext,
    title: 'Device estates need commercial context  ',
    description:
      'Payment terminals need to be tied to sites, merchants, PSPs, tenants and operational status.',
  },
  {
    id: 4,
    icon: PaincardsFinanceneedsevidence,
    title: 'Finance needs evidence  ',
    description:
      'Invoices, payments, price changes, provider connections and device mappings need clear records and audit trails.  ',
  },
];
const data2 = [
  {
    id: 1,
    icon: WhatLedgerbringstogetherEnigmabilling,
    title: 'Enigma billing  ',
    description: `Subscriptions, invoices, credits, payment methods, tax details and dunning flows.`,
  },
  {
    id: 2,
    icon: WhatLedgerbringstogetherProductusage,
    title: 'Product usage  ',
    description: `Connect, EDGE, ESC, Hot Storage, LFT and MFT subscriptions linked to tenants and billing accounts.  `,
  },
  {
    id: 3,
    icon: WhatLedgerbringstogetherPaymentproviders,
    title: 'Payment providers  ',
    description: 'Customer-owned PSPs, Enigma-approved providers and custom gateway connections.  ',
  },
  {
    id: 4,
    icon: WhatLedgerbringstogetherPaymentdevices,
    title: 'Payment devices  ',
    description: 'Terminals, readers, device IDs, firmware, status and site mappings.  ',
  },
  {
    id: 5,
    icon: WhatLedgerbringstogetherReportingandreconciliation,
    title: 'Reporting and reconciliation  ',
    description: 'Finance-grade exports, settlement checks, revenue views and audit trails',
  },
];
const data3 = [
  {
    id: 1,
    icon: UserrolecardsCustomerfinanceandbillingcontacts,
    title: 'Customer finance and billing contacts  ',
    description: `View invoices, update billing details, pay Enigma and export records for accounting.   `,
  },
  {
    id: 2,
    icon: UserrolecardsCustomerproductandoperationsteams,
    title: 'Customer product and operations teams  ',
    description: `Connect PSP accounts, view payment device estates and understand which services rely on   
which payment flows.  `,
  },
  {
    id: 3,
    icon: UserrolecardsEnigmacommercialandopsteams,
    title: 'Enigma commercial and ops teams  ',
    description:
      'Manage price plans, discounts, revenue-share rules, settlements and product usage alignment.   ',
  },
  {
    id: 4,
    icon: UserrolecardsPSPanddevicepartners,
    title: 'PSP and device partners  ',
    description: 'Use connector definitions and test tools to integrate with the Enigma ecosystem.',
  },
];
const data4 = [
  {
    id: 1,
    icon: HubSvg,
    title: 'Hub  ',
    description: `Hub defines tenants, users, roles and billing contacts that Ledger uses for access and ownership.  `,
  },

  {
    id: 2,
    icon: GridSvg,
    title: 'Grid  ',
    description:
      'Grid links payment devices and services to physical sites, networks and assets.  ',
  },
  {
    id: 3,
    icon: CommandSvg,
    title: 'Command',
    description:
      'Command surfaces payment-related incidents and operational events that may affect revenue or service availability.   ',
  },
  {
    id: 4,
    icon: SyncSphereSvg,
    title: 'SyncSphere',
    description:
      'SyncSphere usage, storage packages, LFT and MFT services can be reflected in Ledger subscriptions and billing records.  ',
  },
  {
    id: 5,
    icon: NexusSvg,
    title: 'Nexus ',
    description: `Nexus brings finance, operations and service management into one customer and operator   
experience.  `,
  },
];
const data5 = [
  {
    id: 1,
    icon: SecuritycardsSecurePSPcredentialstorage,
    title: 'Secure PSP credential storage  ',
    description: `API keys, OAuth tokens and provider secrets are stored in a secure vault, not plain text.  `,
  },

  {
    id: 2,
    icon: SecuritycardsTokenbasedpaymenthandling,
    title: 'Token-based payment handling  ',
    description: 'Card data remains with PSPs. Ledger manages references, not PANs.  ',
  },
  {
    id: 3,
    icon: SecuritycardsRolebasedaccess,
    title: 'Role-based access',
    description:
      'Finance, Billing, PSP Admin and Device Admin permissions are governed through Hub.   ',
  },
  {
    id: 4,
    icon: SecuritycardsFullcommercialaudittrail,
    title: 'Full commercial audit trail',
    description:
      'Plan changes, pricing updates, PSP changes and device reallocations are logged.  ',
  },
  {
    id: 5,
    icon: SecuritycardsControlledproviderconnections,
    title: 'Controlled provider connections  ',
    description:
      'PSP integrations can be tested, monitored and governed before being used in live environments.  ',
  },
];

const Command = [
  {
    id: 1,
    title: 'Billing for Enigma services ',
    description:
      'Ledger manages subscriptions, usage, invoices, payment methods, credits and billing records for Enigma products.  ',
    usecase: [
      'Connect, EDGE, ESC, storage and transfer subscriptions ',
      'Usage, overage and one-off charges  ',
      'Invoices, credits and payment status  ',
      'Payment methods and collection rules ',
    ],
  },
  {
    id: 2,
    title: 'Payment provider integration  ',
    description:
      'Ledger stores and manages PSP connections for customers using Enigma to support their own payment services.   ',
    usecase: [
      'Customer-owned PSPs  ',
      'Enigma-approved providers  ',
      'API, OAuth or vault references  ',
      'Merchant IDs and provider status',
    ],
  },
  {
    id: 3,
    title: 'Payment device management   ',
    description:
      ' Ledger tracks terminals and payment devices, linking them to sites, tenants, PSPs and merchants.  ',
    usecase: [
      'Device ID, serial, model and firmware  ',
      'Site linkage through Grid  ',
      'Merchant and tenant linkage through Hub ',
      'Provisioned, active, suspended or retired status  ',
    ],
  },
  {
    id: 4,
    title: 'Reporting, reconciliation and audit   ',
    description:
      'Ledger gives customers and Enigma teams finance-grade reports and a clear history of commercial changes.  ',
    usecase: [
      'Customer spend by product, site or region  ',
      'Revenue views by product, PSP or channel  ',
      'Settlement and reconciliation support ',
      'Audit trail for pricing, PSP and device changes ',
    ],
  },
];
const DataModel = [
  {
    id: 1,
    title: 'Billing accounts  ',
    description:
      'Billing accounts represent the legal and commercial entity responsible for paying Enigma.   ',
    usecase: [
      'Legal entity details  ',
      'Billing contacts  ',
      'Tax IDs   ',
      'Currency and invoicing preferences  ',
      'Linked payment methods and PSP connections  ',
    ],
  },
  {
    id: 2,
    title: 'Subscriptions and price plans  ',
    description: 'Subscriptions represent active commitments to Enigma products and services.  ',
    usecase: [
      'Connect plans per user or site  ',
      'EDGE services per site or cluster   ',
      'ESC tenants   ',
      'Storage and transfer packages  ',
      'Discounts, minimums and commercial terms  ',
    ],
  },
  {
    id: 3,
    title: 'Payment providers   ',
    description:
      ' Payment Provider records represent customer-owned or Enigma-approved PSP and gateway connections.   ',
    usecase: [
      'Stripe, Adyen, Worldpay  ',
      'tapp, Intellipay or approved white-label PSPs   ',
      'API keys, OAuth tokens or vault references  ',
      'Merchant IDs and supported payment methods  ',
    ],
  },
  {
    id: 4,
    title: 'Payment devices  ',
    description:
      'Payment Device records represent physical terminals, readers or payment hardware.  ',
    usecase: [
      'HWE or UCP devices  ',
      'Device ID, serial and model   ',
      'Firmware version  ',
      'Linked site, tenant, merchant and PSP account  ',
      'Device lifecycle status  ',
    ],
  },
  {
    id: 5,
    title: 'Transactions and invoices ',
    description:
      'Ledger records invoices for Enigma services and can optionally surface PSP transaction summaries.  ',
    usecase: [
      'Invoice line items  ',
      'Tax breakdowns ',
      'Issued, due, overdue and paid status ',
      'Payments to Enigma ',
      'Optional PSP volume, auth rate and failure summaries   ',
    ],
  },
];
const Capability = [
  {
    id: 1,
    title: 'Subscriptions and invoicing  ',
    description:
      'Customers can view, manage and export subscriptions and invoices across Enigma products.   ',
    usecase: [
      'Active subscriptions by product  ',
      'Plan upgrades, downgrades and scheduled changes   ',
      'Downloadable PDF, JSON and CSV invoices  ',
      'Invoice status: draft, issued, due, overdue, paid or written off  ',
    ],
  },
  {
    id: 2,
    title: 'Payment methods and collections  ',
    description:
      'Ledger manages how customers pay Enigma and how collection workflows are handled.',
    usecase: [
      'Card, direct debit and bank transfer references  ',
      'Auto-charge or manual payment options  ',
      'Retry schedules and dunning escalation ',
      'Account suspension risk indicators  ',
    ],
  },
  {
    id: 3,
    title: 'Bring-your-own PSP connections   ',
    description:
      ' Tenants can connect their own PSP accounts and map them to sites, services or payment flows.   ',
    usecase: [
      'Select PSP provider type  ',
      'Connect credentials through API keys, OAuth or vault references  ',
      'Map merchant IDs to tenants or sub-tenants   ',
      'Configure routing and failover rules  ',
    ],
  },
  {
    id: 4,
    title: ' Payment device management   ',
    description:
      'Ledger gives customers and Enigma teams one view of payment terminals and their operational context.  ',
    usecase: [
      'Register HWE, UCP or other payment devices  ',
      'Link devices to sites, merchants and PSP accounts  ',
      'Track last seen, firmware and last transaction timestamp  ',
      'Manage ordered, shipped, installed, active, replaced and retired states   ',
    ],
  },
  {
    id: 5,
    title: 'Reporting and reconciliation  ',
    description:
      'Ledger supports finance reporting, customer exports and Enigma revenue reconciliation.   ',
    usecase: [
      'Monthly spend by product   ',
      'Breakdown by site or region   ',
      'Accounting exports  ',
      'Revenue by product, PSP or channel  ',
      'Settlement comparison and reconciliation helpers   ',
    ],
  },
];
const workflows = [
  {
    id: 1,
    title: 'Customer paying Enigma for services  ',
    transitionLine: 'Customers can manage Enigma billing without leaving Nexus.  ',
    usecase: [
      'Finance user opens Ledger in Nexus  ',
      'Reviews upcoming invoice and current usage   ',
      'Adds or updates card, bank or payment details   ',
      'Pays invoice or allows auto-charge to run ',
      'Exports invoice or summary for accounting  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 2,
    title: ' Merchant connecting their own PSP  ',
    transitionLine:
      'Payment providers become visible and manageable inside the Enigma service view.  ',
    usecase: [
      'Tenant admin opens Payment Providers  ',
      ' Chooses bring-your-own PSP  ',
      ' Selects provider such as tapp, Intellipay or custom ',
      'Completes credential or OAuth flow   ',
      'Maps PSP account to sites, services or terminals ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 3,
    title: ' Payment device rollout  ',
    transitionLine:
      'Teams can see which terminals are where, who owns them and which PSP they use.  ',
    usecase: [
      ' Deployment team bulk-imports HWE or UCP device list',
      'Devices are mapped to sites through Grid  ',
      ' Merchants and business units are linked through Hub ',
      'PSP connection is associated through Ledger   ',
      'Devices are tested and moved into active service ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
  {
    id: 4,
    title: '  Finance and ops reconciling issues  ',
    transitionLine: 'Operational payment issues can be understood in commercial terms.   ',
    usecase: [
      'Command surfaces a payment-related alert  ',
      'Command uses Grid and Ledger to identify affected terminals and merchants  ',
      ' Ledger shows PSP and device sets involved   ',
      ' Finance reviews potential revenue exposure  ',
      'Ops and finance act from the same evidence base  ',
    ],
    stepList: true,
    stepTitle: 'Steps',
  },
];
const Ledger = () => {
  const slug = useSlug();
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'The Enigma Platform', href: '/products/the-enigma-platform' },
          { label: 'Enigma Ledger' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={<>Manage billing, payments and provider connections from one secure place</>}
        description=" Enigma Ledger centralises subscriptions, invoices, payment methods, tax details, PSP   
        connections, payment devices, reporting and reconciliation across Enigma Connect, Enigma   
        EDGE, ESC, Hot Storage, LFT and MFT.  "
        image={LedgerHero}
        buttons={[
          {
            label: 'Talk to Enigma',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={[
          ' Subscriptions  ',
          ' PSP connections',
          'Payment devices',
          ' Finance reporting  ',
        ]}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Billing, services and payment infrastructure <Br isDesktop /> often live in
                  separate places
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Customers need to understand what they are paying Enigma for, how their subscriptions
            are changing, which invoices are due and which payment methods are active.
            <br />
            <br />
            At the same time, some customers also need to connect their own PSPs, payment gateways,
            terminals and acquirers to services running over Enigma’s network.
            <br />
            <br />
            Without one commercial control layer, billing, payment infrastructure, devices, sites
            and service ownership become disconnected.
            <br />
            <br />
            Enigma Ledger brings these records together inside Nexus.
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
                  Ledger connects what the customer runs with <Br isDesktop />
                  who pays for it and how payments flow
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Ledger sits inside Nexus as the finance, billing and PSP integration layer. It
            connects Enigma services, customer organisations, payment providers and device estates
            into one commercially aware view.
            <br />
            <br />
            Ledger does not replace PSP dashboards or accounting systems. It gives Nexus the
            financial and payment context needed to manage Enigma services properly.
          </>
        }
        data={data2}
      />

      <CardWithUseCase
        data={Command as CardItem[]}
        headerTitle="Built to make Nexus commercially aware"
      />
      <CardWithUseCase
        data={DataModel as CardItem[]}
        headerTitle={
          <>
            One commercial model for accounts, subscriptions, <Br isDesktop /> providers, devices
            and invoices{' '}
          </>
        }
        description={
          <>
            Ledger manages the core finance and payment entities that connect Enigma services to
            customer organisations, payment providers and device estates.
          </>
        }
      />
      <CardWithUseCase
        data={Capability as CardItem[]}
        headerTitle={
          <>
            From invoice management to <Br isTablet /> PSP and device control
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
                  Built for finance, operations, partners <Br isDesktop />
                  and payment infrastructure teams
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Ledger gives each stakeholder the financial and payment context they need without
            exposing unnecessary complexity.
          </>
        }
        data={data3}
      />

      <CardWithUseCase
        data={workflows as CardItem[]}
        headerTitle={
          <>
            Ledger connects payment activity <Br isDesktop />
            to the services and sites behind it
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
                  Ledger connects finance, services, <Br isDesktop /> identity, assets and
                  operations
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Inside Nexus, Ledger makes the platform commercially aware. It links subscriptions,
            PSPs, payment devices and billing records to tenants, users, sites, assets and
            operational events.{' '}
          </>
        }
        data={data4}
        transitionLine={
          <>
            Hub says who owns it. Grid says where it is. Command says what is happening. Ledger says{' '}
            <Br isDesktop isTablet />
            what it means commercially.{' '}
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
                  Finance-grade control without becoming <Br isDesktop />
                  the card-data system of record{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Ledger manages billing records, PSP metadata, device mappings and payment-routing
            context. Payment card data remains with the PSP. Enigma services work with tokens, vault
            references and provider metadata rather than storing sensitive card numbers.
          </>
        }
        data={data5}
      />

      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Ledger manages finance and payment context, <Br isDesktop /> but it is not an ERP
                  or PSP dashboard
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Ledger is focused on billing, subscriptions, provider connections, device
            mappings, reporting and reconciliation inside Nexus. It does not replace accounting
            systems, PSP dashboards or card-payment systems of record.
          </>
        }
        benitsTitle="Ledger  is  "
        limitationsTitle="Ledger  is not  "
        benefits={[
          'The finance and billing module inside Nexus   ',
          'The place to manage subscriptions, invoices and payment methods  ',
          'The connection point for customer-owned and Enigma-approved PSPs ',
          'The payment device and terminal estate view   ',
          'The commercial context layer for Enigma services  ',
        ]}
        limitations={[
          'A full accounting system or ERP   ',
          'A replacement for PSP dashboards  ',
          'A card-data storage platform  ',
          'The system of record for card payments ',
          'A network, asset or user management tool  ',
        ]}
      />
      <NextPageSlider
        title="Ledger sits alongside the wider Nexus control system"
        data={features}
        currentSlug={slug as string}
      />
      <NextPageSlider
        title="Enigma Ledger features"
        data={featuresChild}
        currentSlug={slug as string}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Connect billing, payments and  "
        headline2=" service context inside Nexus"
        description="Enigma Ledger gives customers, partners and Enigma teams one place to manage   
        subscriptions, invoices, payment methods, PSP connections, device estates, reporting and   
        reconciliation.  "
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

export default Ledger;
