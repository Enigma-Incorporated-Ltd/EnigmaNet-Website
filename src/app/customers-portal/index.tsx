import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import CustomersPortalPage from './components';

const CustomersPortal = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Customer Portal',
    url: `${BASE_URL}/customers-portal`,
    description: 'We are working hard to launch something amazing. Stay tuned!',
  };
  return (
    <>
      <PageMeta
        title="Customer Portal"
        description="We are working hard to launch something amazing. Stay tuned!"
        url={`${BASE_URL}/customers-portal`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <CustomersPortalPage />

      <Footer />
    </>
  );
};

export default CustomersPortal;
