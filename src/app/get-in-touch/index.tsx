import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BASE_URL } from '@/utils';

const Index = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us - Enigma Net',
    url: `${BASE_URL}/get-in-touch`,
    description: 'Get in touch with Enigma Net for enquiries, support, or Book a Demo.',
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
      {/* ✅ META */}
      <PageMeta
        title="Contact Us"
        description="Get in touch with Enigma Net for enquiries, support, or business opportunities."
        url={`${BASE_URL}/get-in-touch`}
        image={`${BASE_URL}/logo.png`}
        keywords={
          'contact, Get In Touch, Support, enquiries, Business opportunities, , Contact information, Customer service, Reach out,  Email, Phone'
        }
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />

      <Contact />
      <Footer />
    </>
  );
};

export default Index;
