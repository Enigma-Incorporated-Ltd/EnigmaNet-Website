import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import LeadershipPage from './components';

const Leadership = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Leadership | Company',
    url: `${BASE_URL}/company/leadership`,
    description:
      'Enigma Net is led by a team with experience across infrastructure, networking, software development, security, finance, product, commercial growth, marketing and technical delivery.',
  };
  
  return (
    <>
      <PageMeta
        title="Leadership | Company"
        description="Enigma Net is led by a team with experience across infrastructure, networking, software development, security, finance, product, commercial growth, marketing and technical delivery."
        url={`${BASE_URL}/company/leadership`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <LeadershipPage />

      <Footer />
    </>
  );
};

export default Leadership;
