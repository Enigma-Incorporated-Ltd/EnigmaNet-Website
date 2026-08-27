import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Nexus from './components';

const EnigmaNexus = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enigma Nexus - The control layer for Enigma Net',
    url: `${BASE_URL}/products/enigma-platform/enigma-nexus`,
    description:
      'Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform. ',
  };
  return (
    <>
      <PageMeta
        title="Enigma Nexus | The Enigma Platform -Products "
        description=" Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform.  "
        url={`${BASE_URL}/solutions/channel-partner`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <Nexus />

      <Footer />
    </>
  );
};

export default EnigmaNexus;
