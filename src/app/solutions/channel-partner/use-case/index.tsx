import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import TechnologyCasePage from './components';

const TechnologyCase = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Technology Partner Use Case | Solutions',
    url: `${BASE_URL}/solutions/defense-dualtechnology/use-case`,
    description:
      'Enigma helps technology partners improve the performance, reliability and resilience of platforms that depend on low-latency connectivity and uninterrupted user experience. Designed for cloud platforms, SaaS environments, edge infrastructure and real-time applications operating across variable networks.',
  };
  return (
    <>
      <PageMeta
        title="Technology Partner Use Case | Solutions"
        description="Enigma helps technology partners improve the performance, reliability and resilience of platforms that depend on low-latency connectivity and uninterrupted user experience.
Designed for cloud platforms, SaaS environments, edge infrastructure and real-time applications operating across variable networks."
        url={`${BASE_URL}/solutions/defense-dualtechnology/use-case`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <TechnologyCasePage />

      <Footer />
    </>
  );
};
export default TechnologyCase;
