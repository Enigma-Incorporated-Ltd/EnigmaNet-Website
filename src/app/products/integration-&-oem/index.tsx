import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import IntegrationList, { OEMfaqs } from './components';

const IntegrationAndOem = () => {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'OEM & Integration - Products',
    url: `${BASE_URL}/products/integration-&-oem`,
    description:
      'Enigma OEM & Integration combines APN Core, Binary Integration, Container Deployment and Virtual Appliance support to enable seamless deployment, integration and embedding across enterprise environments.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: OEMfaqs.map(faq => ({
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
        title="OEM & Integration - Products"
        description="Enigma OEM & Integration combines APN Core, Binary Integration, Container Deployment and Virtual Appliance support to enable seamless deployment, integration and embedding across enterprise environments."
        url={`${BASE_URL}/products/integration-&-oem`}
        structuredData={[webPageSchema, faqSchema]}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <IntegrationList />
      <Footer />
    </>
  );
};

export default IntegrationAndOem;
