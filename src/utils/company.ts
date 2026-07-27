import { defense } from "@/assets/img";
import { Culture, TrustCenter } from "@/assets/img/company";
import { startup3 } from "@/assets/img/partners/inddex";

export const company = [
  {
    id: 2,
    title: 'Trust & Security',
    href: '/company/trust-&-security',
    slug: 'trust-&-security',
    description:
      'Enigma Net helps organisations move data through secure, encrypted and resilient infrastructure.',
    image: defense,
  },
  {
    id: 3,
    title: 'Resources',
    href: '/company/resources',
    slug: 'resources',
    description:
      'Read official Enigma Net announcements, leadership updates, partnership news, press releases and media updates.',
    image: startup3,
  },
  {
    id: 4,
    title: 'Careers',
    href: '/company/careers',
    slug: 'careers',
    description:
      'Enigma Net brings together people across engineering, product, deployment, infrastructure, design, operations, growth and marketing to solve complex data movement and connectivity challenges.',
    image: Culture,
  },
];


export const trustAndsecurity = [
  {
    id: 1,
    title: 'Trust Centre',
    href: '/company/trust-&-security/trust-centre',
    slug: 'trust-centre',
    description:
      'The Trust Centre brings together information about our security posture, privacy commitments, compliance roadmap, operational transparency and customer-facing policies.',
    image: TrustCenter,
  },
];