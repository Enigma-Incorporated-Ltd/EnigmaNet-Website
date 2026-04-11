import Footer from '@/components/footer/Footer';

import PageMeta from '@/components/PageMeta';
import Navbar from '@/components/navbar/Navbar';
import { BASE_URL } from '@/utils';
import ProductContent from './components';

const Product2 = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Coming Soon',
    url: `${BASE_URL}/product-2`,
    description: 'We are working hard to launch something amazing. Stay tuned!',
  };

  return (
    <>
      <PageMeta
        title="Coming Soon"
        description="We are working hard to launch something amazing. Stay tuned!"
        url={`${BASE_URL}/product-2`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
     <ProductContent />
     
      <Footer />
    </>
  );
};

export default Product2;
