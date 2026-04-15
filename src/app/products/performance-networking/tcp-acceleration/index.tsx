import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Acceleration from './components';
import Footer from '@/components/footer/Footer';

const TcpAcceleration = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Coming Soon',
    url: `${BASE_URL}/products/performance-networking/tcp-acceleration`,
    description: 'We are working hard to launch something amazing. Stay tuned!',
  };
  return (
    <>
      <PageMeta
        title="Coming Soon"
        description="We are working hard to launch something amazing. Stay tuned!"
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
