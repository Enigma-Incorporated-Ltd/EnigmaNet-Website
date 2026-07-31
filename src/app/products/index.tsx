import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ProductList from './components/ProductList';
import { prodcutsList } from '@/utils/products';

const Products = () => {
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Enigma Net Products',
  url: `${BASE_URL}/products`,
  description:
    'Explore Enigma Net products including networking, AI, connectivity, data services, integration and enterprise platform solutions.',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: prodcutsList.length,
    itemListElement: prodcutsList.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${BASE_URL}${product.href}`,
      item: {
        '@type': 'Service',
        name: product.title,
        description: product.description,
        url: `${BASE_URL}${product.href}`,
      },
    })),
  },
};
  return (
    <>
      <PageMeta
        title="Products"
        description="Explore Enigma Net products including networking, AI, connectivity, data services, integration and enterprise platform solutions."
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
