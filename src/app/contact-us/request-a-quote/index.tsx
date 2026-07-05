import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import RequestAQuotePage from './components';

const RequestAQuote = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Request a Quote',
    url: `${BASE_URL}/contact-us/request-a-quote`,
    description: 'We are working hard to launch something amazing. Stay tuned!',
    mainEntity: {
      '@type': 'Organization',
      name: 'Enigma Net',
      url: { BASE_URL },
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+44 (0) 20 8050 4632',
        contactType: 'customer support',
        email: 'support@enigmanet.ai',
        areaServed: 'GB',
        availableLanguage: 'en',
      },
    },
  };
  return (
    <>
      <PageMeta
        title="Request a Quote "
        description="We are working hard to launch something amazing. Stay tuned!"
        url={`${BASE_URL}/contact-us/request-a-quote`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <RequestAQuotePage />

      <Footer />
    </>
  );
};

export default RequestAQuote;
