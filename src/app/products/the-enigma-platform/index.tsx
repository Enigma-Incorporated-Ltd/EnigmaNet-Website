import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import EnigmaPlatformList from './components/EnigmaPlatformList';
import { theEnigmaPlatform } from '@/utils/products';

const EnigmaPlatform = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The Enigma Platform -Products',
    url: `${BASE_URL}/products/the-enigma-platform`,
    description:
      'Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: theEnigmaPlatform.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `${BASE_URL}${item.href}`,
      })),
    },
  };
  return (
    <>
      <PageMeta
        title="The Enigma Platform -Products"
        description="Enigma Nexus brings network operations, asset management, file movement, storage workflows, user administration and AI-assisted insights into one secure, role-aware platform."
        url={`${BASE_URL}/products/the-enigma-platform`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <EnigmaPlatformList />

      <Footer />
    </>
  );
};

export default EnigmaPlatform;
