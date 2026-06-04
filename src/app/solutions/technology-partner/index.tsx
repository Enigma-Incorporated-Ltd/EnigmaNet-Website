import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import TechnologiesPage from './components';

const TechnologyPartner = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Technology Partner',
    url: `${BASE_URL}/solutions/technology-partner`,
    description:
      'Enigma helps technology partners improve resilience, protect critical traffic and gain better visibility across the infrastructure their platforms depend on.',
  };
  return (
    <>
      <PageMeta
        title="Technology Partner"
        description="Enigma helps technology partners improve resilience, protect critical traffic and gain better visibility across the infrastructure their platforms depend on."
        url={`${BASE_URL}/solutions/technology-partner`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <TechnologiesPage />

      <Footer />
    </>
  );
};

export default TechnologyPartner;
