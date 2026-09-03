import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import DataStorage, { hotfaq } from './components';

const HotStorage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hot Storage  ',
    url: `${BASE_URL}/products/data-&-file-services/hot-storage`,
    description:
      'Enigma Hot Storage gives teams S3-compatible object storage with accelerated transfer, secure access, flat pricing and workflow visibility designed for media, backups, logs, working assets and large data sets.  ',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hotfaq.map(faq => ({
      '@type': 'Question',
      name: faq.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.trim(),
      },
    })),
  };
  return (
    <>
      <PageMeta
        title="Hot Storage - Data & File Services - Products"
        description="Enigma Hot Storage gives teams S3-compatible object storage with accelerated transfer, secure   
access, flat pricing and workflow visibility designed for media, backups, logs, working assets   
and large data sets.  "
        url={`${BASE_URL}/products/data-&-file-services/hot-storage`}
        structuredData={[structuredData, faqSchema]}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <DataStorage />

      <Footer />
    </>
  );
};

export default HotStorage;
