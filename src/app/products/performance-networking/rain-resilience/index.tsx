import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Resilience from './components';

const RainResilience = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'RAIN Resilience',
    url: `${BASE_URL}/products/performance-networking/rain-resilience`,
    description: `RAIN duplicates priority traffic across independent paths inside the encrypted APN tunnel,helping Enigma Net maintain session continuity, reduce effective packet loss and protect real-time services when underlying links degrade.`,
  };
  return (
    <>
      <PageMeta
        title="RAIN Resilience | Performance Networking -Products"
        description="RAIN duplicates priority traffic across independent paths inside the encrypted APN tunnel,helping Enigma Net maintain session continuity, reduce effective packet loss and protect real-time services when underlying links degrade."
        url={`${BASE_URL}/products/performance-networking/rain-resilience`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Resilience />

      <Footer />
    </>
  );
};

export default RainResilience;
