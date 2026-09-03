import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import RemoteAssets from './components';

const OperationalTechnology = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Operational Technology & Remote Assets',
    url: `${BASE_URL}/solutions/operational-technology-and-remote-assets`,
    description: 'Enigma helps organisations keep remote sites, industrial systems and operational assets connected with resilient, policy-controlled networking across difficult environments.',
  };
  return (
    <>
      <PageMeta
        title="Operational Technology & Remote Assets"
        description="Enigma helps organisations keep remote sites, industrial systems and operational assets connected with resilient, policy-controlled networking across difficult environments."
        url={`${BASE_URL}/solutions/operational-technology-and-remote-assets`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <RemoteAssets />

      <Footer />
    </>
  );
};

export default OperationalTechnology;
