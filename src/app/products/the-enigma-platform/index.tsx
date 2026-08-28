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
   name: 'The Enigma Platform',
   url: `${BASE_URL}/products/the-enigma-platform`,
   description:
     'The Enigma Platform unifies Enigma Command, Enigma Nexus, Enigma Grid, Enigma SyncSphere, Enigma Hub and Enigma Ledger into a secure, intelligent ecosystem for network operations, orchestration, collaboration, file movement, storage and digital asset management.',
   mainEntity: {
     '@type': 'ItemList',
     itemListElement: theEnigmaPlatform.map((item, index) => ({
       '@type': 'ListItem',
       position: index + 1,
       item: {
         '@type': 'Service',
         name: item.title,
         description: item.description,
         url: `${BASE_URL}${item.href}`,
       },
     })),
   },
 };
  return (
    <>
      <PageMeta
        title="The Enigma Platform"
        description="The Enigma Platform unifies Enigma Command, Enigma Nexus, Enigma Grid, Enigma SyncSphere, Enigma Hub and Enigma Ledger into a secure, intelligent ecosystem for network operations, orchestration, collaboration, file movement, storage and digital asset management."
        url={`${BASE_URL}/products/the-enigma-platform`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <EnigmaPlatformList />

      <Footer />
    </>
  );
};

export default EnigmaPlatform;
