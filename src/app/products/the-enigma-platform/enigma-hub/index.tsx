import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Hub from './components';

const EnigmaHub = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Egnima Hub',
    url: `${BASE_URL}/products/the-enigma-platform/enigma-hub`,
    description:
      'Enigma Hub centralises users, tenants, groups, roles, security policies and audit trails across Enigma Connect, Enigma EDGE, ESC – Secure Networking, SyncSphere and Nexus workflows.  ',
  };
  return (
    <>
      <PageMeta
        title="Enigma Hub"
        description="Enigma Hub centralises users, tenants, groups, roles, security policies and audit trails across   
Enigma Connect, Enigma EDGE, ESC – Secure Networking, SyncSphere and Nexus workflows.  "
        url={`${BASE_URL}/products/the-enigma-platform/enigma-hub`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Hub />

      <Footer />
    </>
  );
};

export default EnigmaHub;
