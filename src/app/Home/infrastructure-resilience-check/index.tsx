import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Footer from '../components/Footer';
import InfrastructureResilienceCheckPage from './components';

const InfrastructureResilienceCheck = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Infrastructure Resilience Check',
    url: `${BASE_URL}/infrastructure-resilience-check`,
    description:
      'Your connection may appear fast when everything is working. The real test is what happens when conditions change. Complete the Enigma Net Infrastructure Resilience Check to identify potential weaknesses across connectivity, failover, data movement, security and operational visibility.    ',
  };
  return (
    <>
      <PageMeta
        title="Infrastructure Resilience Check"
        description="Your connection may appear fast when everything is working. The real test is what happens when conditions change. Complete the Enigma Net Infrastructure Resilience Check to identify potential weaknesses across connectivity, failover, data movement, security and operational visibility.    "
        url={`${BASE_URL}/infrastructure-resilience-check`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <InfrastructureResilienceCheckPage />

      <Footer />                                                                                                                          
    </>
  );
};

export default InfrastructureResilienceCheck;
