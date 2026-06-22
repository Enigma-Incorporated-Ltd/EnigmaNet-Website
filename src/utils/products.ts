import { enigmaSecureDesktop, enterprise } from '@/assets/img';
import { Commond, HeroHub, HeroSyncSphere } from '@/assets/img/products';

export const theEnigmaPlatform = [
  {
    id: 1,
    title: 'Enigma Nexus',
    href: '/products/enigma-platform/enigma-nexus',
    slug: 'enigma-nexus',
    description:
      'Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform.',

    meta: {
      title: 'Enigma Nexus',
      description:
        'Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform.',
    },
    image: enigmaSecureDesktop,
  },
  {
    id: 2,
    title: 'Enigma Command',
    href: '/products/enigma-platform/enigma-command',
    slug: 'enigma-command',
    description:
      'Enigma Command is the central operations view for incidents, tickets, alerts, agent actions and live network events. It gives Enigma teams and customer operators a clear human-in-the-loop control point for AI-assisted network operations.',

    meta: {
      title: 'Enigma Command',
      description:
        'Enigma Command is the central operations view for incidents, tickets, alerts, agent actions and live network events. It gives Enigma teams and customer operators a clear human-in-the-loop control point for AI-assisted network operations.',
    },
    image: Commond,
  },
  {
    id: 3,
    title: 'Enigma Grid',
    href: '/products/enigma-platform/enigma-grid',
    slug: 'enigma-grid',
    description:
      'Enigma Grid shows what is deployed, where it sits and how it is performing. It gives customers and operators a structured view of sites, devices, gateways, services and network topology across Enigma Connect, Enigma EDGE and ESC deployments.',

    meta: {
      title: 'Enigma Grid',
      description:
        'Enigma Grid shows what is deployed, where it sits and how it is performing. It gives customers and operators a structured view of sites, devices, gateways, services and network topology across Enigma Connect, Enigma EDGE and ESC deployments.',
    },
    image: enterprise,
  },
  {
    id: 4,
    title: 'Enigma SyncSphere',
    href: '/products/enigma-platform/enigma-syncsphere',
    slug: 'enigma-syncsphere',
    description:
      'Enigma SyncSphere gives customers one place to manage storage, file sync, cross-cloud movement and transfer workflows. It connects Hot Storage, third-party clouds and Enigma’s accelerated transfer capabilities into a single file operations workspace.',

    meta: {
      title: 'Enigma SyncSphere',
      description:
        'Enigma SyncSphere gives customers one place to manage storage, file sync, cross-cloud movement and transfer workflows. It connects Hot Storage, third-party clouds and Enigma’s accelerated transfer capabilities into a single file operations workspace.',
    },
    image: HeroSyncSphere,
  },
  {
    id: 5,
    title: ' Enigma Hub',
    href: '/products/enigma-platform/enigma-hub',
    slug: 'enigma-hub',
    description:
      'Enigma Hub is the identity and commercial control point inside Nexus. It manages customers, partners, users, permissions, product entitlements, billing profiles, licences and audit data across Enigma services.',

    meta: {
      title: 'Enigma Hub',
      description:
        'Enigma Hub is the identity and commercial control point inside Nexus. It manages customers, partners, users, permissions, product entitlements, billing profiles, licences and audit data across Enigma services.',
    },
    image: HeroHub,
  },
  {
    id: 6,
    title: 'Enigma Ledger',
    href: '/products/enigma-platform/enigma-ledger',
    slug: 'enigma-ledger',
    description:
      'Enigma Ledger is the accountability layer inside Nexus. It records user activity, system changes, agent actions, approvals, overrides and operational events across Enigma services, giving customers and internal teams a clear history of what happened, when it happened and who authorised it.',

    meta: {
      title: 'Enigma Ledger',
      description:
        'Enigma Ledger is the accountability layer inside Nexus. It records user activity, system changes, agent actions, approvals, overrides and operational events across Enigma services, giving customers and internal teams a clear history of what happened, when it happened and who authorised it.',
    },
    image: enterprise,
  },
];
