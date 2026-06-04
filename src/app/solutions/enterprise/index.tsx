import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import EnterpriseData from './components';

const Enterprise = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enterprise',
    url: `${BASE_URL}/solutions/enterprise`,
    description:
      'Enigma helps enterprises improve resilience, protect critical traffic and gain visibility across the network without replacing existing infrastructure.',
  };
  return (
    <>
      <PageMeta
        title="Enterprise"
        description="Enigma helps enterprises improve resilience, protect critical traffic and gain visibility across the network without replacing existing infrastructure."
        url={`${BASE_URL}/solutions/enterprise`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <EnterpriseData />

      <Footer />
    </>
  );
};

export default Enterprise;
