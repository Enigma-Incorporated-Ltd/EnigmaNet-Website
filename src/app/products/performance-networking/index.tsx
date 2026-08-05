import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import PerformanceNetworkingList from "./components/PerformanceNetworkingList";
import { performanceNetworking } from "@/utils/products";


const PerformanceNetworking = () => {
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Performance Networking',
  url: `${BASE_URL}/products/performance-networking`,
  description:
    'Enigma Performance Networking combines Enigma APN Core, ESC, Secure Networking, TCP Acceleration, RAIN resilience, Multi-link Bonding and Intelligent Traffic Management to deliver secure, resilient, high-performance connectivity across mission-critical networks.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: performanceNetworking.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
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
        title="Performance Networking -Products"
        description="Enigma Performance Networking combines Enigma APN Core, ESC, Secure Networking, TCP Acceleration, RAIN resilience, Multi-link Bonding and Intelligent Traffic Management to deliver secure, resilient, high-performance connectivity across mission-critical networks."
        url={`${BASE_URL}/products/performance-networking`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <PerformanceNetworkingList />

      <Footer />
    </>
  );
}

export default PerformanceNetworking