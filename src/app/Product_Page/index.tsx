import Footer from '@/components/footer/Footer';
import PageMeta from '@/components/PageMeta';
import Navbar from '@/components/navbar/Navbar';
import { BASE_URL } from '@/utils';
import Banner from './components/Banner';
import TabMenu from './components/TabMenu';
import Section2Headline from './components/Section2Headline';
import ProductGrid from './components/ProductGrid';
import GuideSelection from './components/GuideSelection';
import PricingTable from './components/PricingTable';
import AddOns from './components/AddOns';
import VirtualEditions from './components/VirtualEditions';
import TrustStrip from './components/TrustStrip';

const ProductPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'New Product Page',
    url: `${BASE_URL}/product-page`,
    description: 'Explore the new product offerings and features of Enigma.',
  };

  return (
    <>
      <PageMeta
        title="New Product Page | Enigma"
        description="Explore the new product offerings and features of Enigma."
        url={`${BASE_URL}/product-page`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />

      <main className="pb-5">
        <Banner />
        <TabMenu />
        <Section2Headline />
        <ProductGrid />
        <GuideSelection />
        <PricingTable />
        <AddOns />
        <VirtualEditions />
        <TrustStrip />
        {/* Small components will be imported and called here */}
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
