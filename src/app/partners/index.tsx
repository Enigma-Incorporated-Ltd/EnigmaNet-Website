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
    description: 'Explore Enigma Net strategic technology and business partnerships.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: listPartners.map((partner, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${BASE_URL}${partner.href}`,
        item: {
          '@type': 'Organization',
          name: partner.title,
          description: partner.description,
          url: `${BASE_URL}${partner.href}`,
        },
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
