import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import IndustriesData from './components';

const Industries = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Industries',
    url: `${BASE_URL}/solutions/industries`,
    description:
      'Enigma helps organisations improve resilience, protect critical systems and gain visibility across the infrastructure their operations depend on.',
  };
  return (
    <>
      <PageMeta
        title="Industries"
        description="Enigma helps organisations improve resilience, protect critical systems and gain visibility across the infrastructure their operations depend on."
        url={`${BASE_URL}/solutions/industries`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <IndustriesData />

      <Footer />
    </>
  );
};

export default Industries;
