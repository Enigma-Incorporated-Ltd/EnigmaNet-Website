import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import AIAutomationList from './components/AIAutomationList';
import { enigmaSentinelFaqs } from './enigma-sentinel/components';

const AIAndAutomation = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Ai & Automation - Products',
    url: `${BASE_URL}/products/ai-&-automation`,
    description:
      'Enigma AI & Automation is powered by Enigma Sentinel, delivering intelligent automation, AI-driven insights and proactive operational intelligence for enterprise environments.',
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
        title="Ai & Automation - Products"
        description="Enigma AI & Automation is powered by Enigma Sentinel, delivering intelligent automation, AI-driven insights and proactive operational intelligence for enterprise environments."
        url={`${BASE_URL}/products/ai-&-automation`}
        structuredData={[structuredData, faqSchema]}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <AIAutomationList />

      <Footer />
    </>
  );
};

export default AIAndAutomation;
