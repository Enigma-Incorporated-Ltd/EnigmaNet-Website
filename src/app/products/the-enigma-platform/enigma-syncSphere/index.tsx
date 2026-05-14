import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import SyncSphere from './components';

const EnigmaSyncSphere = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enigma SyncSphere',
    url: `${BASE_URL}/products/the-enigma-platform/enigma-syncSphere`,
    description: 'Enigma SyncSphere brings Hot Storage, Large File Transfer, Managed File Transfer, third-party cloud storage and local NAS into one secure, accelerated workspace built on Enigma’s APN performance layer.  ',
  };
  return (
    <>
      <PageMeta
        title="Enigma SyncSphere"
        description="Enigma SyncSphere brings Hot Storage, Large File Transfer, Managed File Transfer, third-party   
        cloud storage and local NAS into one secure, accelerated workspace built on Enigma’s APN   
        performance layer.  "
        url={`${BASE_URL}/products/the-enigma-platform/enigma-syncSphere`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <SyncSphere />

      <Footer />
    </>
  );
};

export default EnigmaSyncSphere;
