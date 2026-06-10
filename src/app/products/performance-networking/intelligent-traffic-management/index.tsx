import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import TrafficManagement from './components';

const IntelligentTrafficManagement = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Intelligent Traffic Management',
    url: `${BASE_URL}/products/performance-networking/intelligent-traffic-management`,
    description:
      'Intelligent Traffic Management monitors link quality, classifies traffic and adapts routing, QoS and resilience decisions in real time, helping Enigma products keep critical applications responsive across fibre, broadband, 4G, 5G, satellite and mixed networks.  ',
  };
  return (
    <>
      <PageMeta
        title="Intelligent Traffic Management | Performance Networking -Products"
        description="Intelligent Traffic Management monitors link quality, classifies traffic and adapts routing, QoS   
and resilience decisions in real time, helping Enigma products keep critical applications   
responsive across fibre, broadband, 4G, 5G, satellite and mixed networks.  "
        url={`${BASE_URL}/products/performance-networking/intelligent-traffic-management`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <TrafficManagement />

      <Footer />
    </>
  );
};

export default IntelligentTrafficManagement;
