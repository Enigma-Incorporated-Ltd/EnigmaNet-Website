import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import CareerPage from './components';

const Careers = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Careers - Company',
    url: `${BASE_URL}/company/careers`,
    description:
      'Enigma Net brings together people across engineering, product, deployment, infrastructure, design, operations, growth and marketing to solve complex data movement and connectivity challenges.',
  };
  return (
    <>
      <PageMeta
        title="Careers - Company"
        description="Enigma Net brings together people across engineering, product, deployment, infrastructure, design, operations, growth and marketing to solve complex data movement and connectivity challenges."
        url={`${BASE_URL}/company/careers`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <CareerPage />

      <Footer />
    </>
  );
};

export default Careers;
