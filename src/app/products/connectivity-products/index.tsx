import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import ConnectivityProductList from "./components";

const ConnectivityProduc = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Connectivity Products -Products',
    url: `${BASE_URL}/products/connectivity-products`,
    description:
      'Enigma Connectivity Products combine Enigma EDGE and Enigma Connect to deliver secure, APN-powered connectivity with intelligent optimisation, encrypted tunnels, multi-link resilience and seamless access for individuals, teams and distributed business environments.',
  };
  return (
    <>
      <PageMeta
        title="Connectivity Products -Products"
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
