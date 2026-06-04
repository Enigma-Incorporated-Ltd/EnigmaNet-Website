import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import PartnersData from './components';
import { Partners as listPartners } from '@/utils/partners';
const Partners = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Enigma Partners',
    url: `${BASE_URL}/partners`,
    description: 'Enigma Partners',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: listPartners.map((item, index) => ({
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
        title="Partners"
        description="Partners"
        url={`${BASE_URL}/partners`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <PartnersData />

      <Footer />
    </>
  );
};

export default Partners;
