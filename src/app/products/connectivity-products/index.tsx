import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import ConnectivityProductList from "./components";
import { connectivityProducts } from "@/utils/products";

const ConnectivityProduc = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Connectivity Products',
    url: `${BASE_URL}/products/connectivity-products`,
    description:
      'Enigma Connectivity Products combine Enigma EDGE and Enigma Connect to deliver secure, APN-powered connectivity with intelligent optimisation, encrypted tunnels, multi-link resilience and seamless access for individuals, teams and distributed business environments.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: connectivityProducts.map((item, index) => ({
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
        title="Connectivity Products"
        description="Enigma Connectivity Products combine Enigma EDGE and Enigma Connect to deliver secure, APN-powered connectivity with intelligent optimisation, encrypted tunnels, multi-link resilience and seamless access for individuals, teams and distributed business environments."
        url={`${BASE_URL}/products/connectivity-products`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <ConnectivityProductList />

      <Footer />
    </>
  );
};

export default ConnectivityProduc;
