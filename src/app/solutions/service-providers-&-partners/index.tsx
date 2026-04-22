import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ProvidersPartners from './components';

const ServicesProvidersAndPartners = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Service Providers & Partners',
    url: `${BASE_URL}/solutions/service-providers-and-partners`,
    description:
      'Enigma enables service providers and partners to deliver stronger performance, built-in resilience and better visibility across customer connectivity environments without adding unnecessary complexity.',
  };
  return (
    <>
      <PageMeta
        title="Service Providers & Partners"
        description="Enigma enables service providers and partners to deliver stronger performance, built-in resilience and better visibility across customer connectivity environments without adding unnecessary complexity."
        url={`${BASE_URL}/solutions/service-providers-and-partners`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <ProvidersPartners />

      <Footer />
    </>
  );
};

export default ServicesProvidersAndPartners;
