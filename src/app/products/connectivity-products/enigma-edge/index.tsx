import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Edge from './components';

const EnigmaEdge = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enigma EDGE | Connectivity Products -Products',
    url: `${BASE_URL}/products/connectivity-products/enigma-edge`,
    description:
      'Enigma EDGE brings APN-powered optimisation, bonding, RAIN resilience, encrypted tunnels and real-time visibility to business sites, branches, venues, retail estates and distributed infrastructure.',
  };
  return (
    <>
      <PageMeta
        title="Enigma EDGE | Connectivity Products -Products"
        description="Enigma EDGE brings APN-powered optimisation, bonding, RAIN resilience, encrypted tunnels and real-time visibility to business sites, branches, venues, retail estates and distributed infrastructure."
        url={`${BASE_URL}/products/connectivity-products/enigma-edge`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Edge />

      <Footer />
    </>
  );
};

export default EnigmaEdge;
