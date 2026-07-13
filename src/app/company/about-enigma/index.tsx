import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import AboutEnigmaPage from './components';

const AboutEnigma = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'About Enigma - Company',
    url: `${BASE_URL}/company/about-enigma`,
    description:
      'Enigma Net helps organisations move, protect and manage large data sets across AI, cloud, edge and distributed environments.  ',
  };
  return (
    <>
      <PageMeta
        title="About Enigma - Company"
        description="Enigma Net helps organisations move, protect and manage large data sets across AI, cloud,   
edge and distributed environments.  "
        url={`${BASE_URL}/company/about-enigma`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <AboutEnigmaPage />

      <Footer />
    </>
  );
};

export default AboutEnigma;
