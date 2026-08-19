import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import FaqPage from './components';

const FAQ = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'FAQ | Resources | Company',
    url: `${BASE_URL}/company/resources/faq`,
    description: 'Find quick answers about Enigma Net products, secure networking, data and file storage, APN acceleration, deployment options, pricing, security and support.  ',
  };
  return (
    <>
      <PageMeta
        title="FAQ | Resources | Company"
        description="Find quick answers about Enigma Net products, secure networking, data and file storage, APN   
acceleration, deployment options, pricing, security and support.  "
        url={`${BASE_URL}/company/resources/faq`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <FaqPage />

      <Footer />
    </>
  );
};

export default FAQ;
