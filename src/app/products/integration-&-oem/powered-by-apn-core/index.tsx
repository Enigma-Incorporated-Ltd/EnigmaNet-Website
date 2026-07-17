import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ApnCoreDetails from './components';

const PoweredByApnCore = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Powered By APN Core | OEM & Integration - Products',
    url: `${BASE_URL}/products/integration-&-oem/powered-by-apn-core`,
    description: 'Powered by APN Core gives OEMs, telcos, platform providers and infrastructure partners access to the core engine behind Enigma Net’s connectivity products delivered as a Linux binary, container or virtual appliance integration model. It allows partners to strengthen their own offer while keeping their own brand, customer experience and commercial model.',
  };
  return (
    <>
      <PageMeta
        title="Powered By APN Core | OEM & Integration - Products"
        description="Powered by APN Core gives OEMs, telcos, platform providers and infrastructure partners access to the core engine behind Enigma Net’s connectivity products delivered as a Linux binary, container or virtual appliance integration model.
It allows partners to strengthen their own offer while keeping their own brand, customer experience and commercial model."
        url={`${BASE_URL}/products/integration-&-oem/powered-by-apn-core`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <ApnCoreDetails />

      <Footer />
    </>
  );
};

export default PoweredByApnCore;
