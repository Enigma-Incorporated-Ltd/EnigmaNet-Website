import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Sentinel, { enigmaSentinelFaqs } from './components';

const index = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enigma Sentinel -AI & Automation | Products',
    url: `${BASE_URL}/products/ai-&-automation/enigma-sentinel`,
    description: 'Enigma Sentinel helps teams monitor network infrastructure, diagnose incidents faster and support controlled remediation through AI-assisted operations, clear audit trails and human-in-the-loop oversight.  ',
  };
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: enigmaSentinelFaqs.map(faq => ({
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
        title="Enigma Sentinel -AI & Automation | Products"
        description="Enigma Sentinel helps teams monitor network infrastructure, diagnose incidents faster and   
support controlled remediation through AI-assisted operations, clear audit trails and human-in-
the-loop oversight.  "
        url={`${BASE_URL}/products/ai-&-automation/enigma-sentinel`}
        structuredData={[structuredData, faqSchema]}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <Sentinel />

      <Footer />
    </>
  );
};

export default index;
