import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import AIAutomationList from './components/AIAutomationList';
import { enigmaSentinelFaqs } from './enigma-sentinel/components';
import { aiAutomation } from '@/utils/products';

const AIAndAutomation = () => {
 const collectionSchema = {
   '@context': 'https://schema.org',
   '@type': 'CollectionPage',
   name: 'AI & Automation',
   url: `${BASE_URL}/products/ai-&-automation`,
   description:
     'Enigma AI & Automation is powered by Enigma Sentinel, delivering intelligent automation, AI-driven insights and proactive operational intelligence for enterprise environments.',
   mainEntity: {
     '@type': 'ItemList',
     itemListElement: aiAutomation.map((item, index) => ({
       '@type': 'ListItem',
       position: index + 1,
       item: {
         '@type': 'Service',
         name: item.title,
         description: item.description,
         url: `${BASE_URL}${item.href}`,
       },
     })),
   },
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
        structuredData={[collectionSchema, faqSchema]}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <AIAutomationList />

      <Footer />
    </>
  );
};

export default AIAndAutomation;
