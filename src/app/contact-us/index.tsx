import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ContactUsData from './components';

const ContactUs = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us - Enigma Net',
    url: `${BASE_URL}/contact-us`,
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

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <ContactUsData />

      <Footer />
    </>
  );
};

export default ContactUs;
