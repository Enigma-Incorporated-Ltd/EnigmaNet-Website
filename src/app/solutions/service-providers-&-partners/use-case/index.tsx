import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ServiceProvidersUseCasePage from './components';

const ServiceProvidersUseCase = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Service Providers & Partners Use Case  | Solutions',
    url: `${BASE_URL}/solutions/service-providers-&-partners/use-case`,
    description:'Enigma helps service providers transform existing connectivity into measurable premium services with stronger performance, resilience and operational visibility. Designed for data-centre operators, carriers and edge-network providers seeking differentiated enterprise-grade offerings.'
        };
  return (
    <>
      <PageMeta
        title="Service Providers & Partners Use Case  | Solutions"
        description="Enigma helps service providers transform existing connectivity into measurable premium services with stronger performance, resilience and operational visibility.
Designed for data-centre operators, carriers and edge-network providers seeking differentiated enterprise-grade offerings."
        url={`${BASE_URL}/solutions/service-providers-&-partners/use-case`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light fixed-top"
        darkenable={false}
        isNavDark={false}
      />
      <ServiceProvidersUseCasePage />

      <Footer />
    </>
  );
};

export default ServiceProvidersUseCase;
