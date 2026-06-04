import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import KinnamiPartnershipPage from './components';

const KinnamiPartnership = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kinnami Partnership',
    url: `${BASE_URL}/partners/kinnami-partnership`,
    description:
      'Kinnami and Enigma combine distributed operational data synchronization with resilient networking and connectivity infrastructure to support resilient mission-critical operations across complex environments.  ',
  };
  return (
    <>
      <PageMeta
        title="Kinnami Partnership"
        description="Kinnami and Enigma combine distributed operational data synchronization with resilient   
        networking and connectivity infrastructure to support resilient mission-critical operations   
        across complex environments."
        url={`${BASE_URL}/partners/kinnami-partnership`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <KinnamiPartnershipPage />

      <Footer />
    </>
  );
};

export default KinnamiPartnership;
