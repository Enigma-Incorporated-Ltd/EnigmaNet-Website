import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import Grid from "./components";


const EnigmaGrid = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enigma Grid',
    url: `${BASE_URL}/products/the-enigma-platform/enigma-grid`,
    description: `Enigma Grid gives operations, support, engineering and commercial teams a single   
        authoritative view of devices, links, tunnels, sites, tenants, licences and services across Enigma   
        Net deployments. `,
  };
  return (
    <>
      <PageMeta
        title="Enigma Grid | The Enigma Platform -Products"
        description="Enigma Grid gives operations, support, engineering and commercial teams a single   
        authoritative view of devices, links, tunnels, sites, tenants, licences and services across Enigma   
        Net deployments. "
        url={`${BASE_URL}/products/the-enigma-platform/enigma-grid`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Grid />
      <Footer />
    </>
  );
}

export default EnigmaGrid