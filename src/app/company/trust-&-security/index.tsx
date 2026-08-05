import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import TrustAndSecurityPage from './components';
import { trustAndsecurity } from '@/utils/company';

const Trust = () => {
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Trust & Security',
  url: `${BASE_URL}/company/trust-&-security`,
  description:
    'Explore Enigma Net Trust & Security resources, including our Trust Centre, security posture, privacy commitments, compliance roadmap, and operational transparency.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: trustAndsecurity.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'WebPage',
        name: item.title,
        description: item.description,
        url: `${BASE_URL}${item.href}`,
      },
    })),
  },
};
  return (
    <>
      <PageMeta
        title="Trust & Security | Company"
        description="Explore Enigma Net Trust & Security resources, including our Trust Centre, security posture, privacy commitments, compliance roadmap, and operational transparency."
        url={`${BASE_URL}/company/trust-&-security`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <TrustAndSecurityPage />

      <Footer />
    </>
  );
};

export default Trust;
