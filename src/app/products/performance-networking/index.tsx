import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import PerformanceNetworkingList from "./components/PerformanceNetworkingList";


const PerformanceNetworking = () => {
 const structuredData = {
   '@context': 'https://schema.org',
   '@type': 'WebPage',
   name: 'Performance Networking -Products',
   url: `${BASE_URL}/products/performance-networking`,
   description:
     'Enigma Performance Networking combines Enigma APN Core, ESC, Secure Networking, TCP Acceleration, RAIN resilience, Multi-link Bonding and Intelligent Traffic Management to deliver secure, resilient, high-performance connectivity across mission-critical networks.',
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