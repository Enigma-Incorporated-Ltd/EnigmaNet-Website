import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import IntegrationList from './components';


const IntegrationAndOem = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Integration & OEM - Products',
    url: `${BASE_URL}/products/integration-&-oem`,
    description:
      'Enigma Integration & OEM combines APN Core, Binary Integration, Container Deployment and Virtual Appliance support to enable seamless deployment, integration and embedding across enterprise environments.',
  };
  return (
    <>
      <PageMeta
        title="Integration & OEM - Products"
        description="Enigma Integration & OEM combines APN Core, Binary Integration, Container Deployment and Virtual Appliance support to enable seamless deployment, integration and embedding across enterprise environments."
        url={`${BASE_URL}/products/integration-&-oem`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <IntegrationList />

      <Footer />
    </>
  );
};

export default IntegrationAndOem;
