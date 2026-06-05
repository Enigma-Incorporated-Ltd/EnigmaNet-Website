import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Connect from './components';

const EnigmaConnect = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enigma Connect | Connectivity Products -Products',
    url: `${BASE_URL}/products/connectivity-products/enigma-connect`,
    description: 'Enigma Connect gives individuals and small teams encrypted, optimised connectivity using the same APN acceleration engine that powers Enigma’s enterprise products — delivered through a lightweight desktop and mobile client.  ',
  };
  return (
    <>
      <PageMeta
        title="Enigma Connect | Connectivity Products -Products"
        description="Enigma Connect gives individuals and small teams encrypted, optimised connectivity using the   
        same APN acceleration engine that powers Enigma’s enterprise products — delivered through a   
        lightweight desktop and mobile client.  "
        url={`${BASE_URL}/products/connectivity-products/enigma-connect`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Connect />

      <Footer />
    </>
  );
};

export default EnigmaConnect;
