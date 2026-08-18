import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ResourcesPage from './components';

const Resources = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Resources | Company',
    url: `${BASE_URL}/company/resources`,
    description:
      'Explore Enigma Net’s case studies, white papers, architecture notes, FAQs, and glossary for practical insights, guidance, and information about our solutions.',
  };
  return (
    <>
      <PageMeta
        title="Resources | Company "
        description="Explore Enigma Net’s case studies, white papers, architecture notes, FAQs, and glossary for practical insights, guidance, and information about our solutions."
        url={`${BASE_URL}/company/resources`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <ResourcesPage />

      <Footer />
    </>
  );
};

export default Resources;
