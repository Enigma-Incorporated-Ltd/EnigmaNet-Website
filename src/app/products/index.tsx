import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ProductList from './components/ProductList';

const Products = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Products',
    url: `${BASE_URL}/products`,
    description: 'Enigma Products',
  };
  return (
    <>
      <PageMeta
        title="Products"
        description="Enigma Products"
        url={`${BASE_URL}/products`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <ProductList />

      <Footer />
    </>
  );
};

export default Products;
