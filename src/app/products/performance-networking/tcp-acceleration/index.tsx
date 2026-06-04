import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Acceleration from './components';
import Footer from '@/components/footer/Footer';

const TcpAcceleration = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'TCP Acceleration',
    url: `${BASE_URL}/products/performance-networking/tcp-acceleration`,
    description: `TCP Acceleration is a core APN capability that improves single-flow throughput by replacing legacy TCP congestion behaviour inside Enigma’s encrypted tunnel, helping traffic run closer to line rate even when latency, packet loss or distance would normally slow it down.`,
  };
  return (
    <>
      <PageMeta
        title="TCP Acceleration | Performance Networking -Products"
        description="TCP Acceleration is a core APN capability that improves single-flow throughput by replacing legacy TCP congestion behaviour inside Enigma’s encrypted tunnel, helping traffic run closer to line rate even when latency, packet loss or distance would normally slow it down."
        url={`${BASE_URL}/products/performance-networking/tcp-acceleration`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Acceleration />

      <Footer />
    </>
  );
};

export default TcpAcceleration;
