import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import CustomerPortalPage from './components';

const CustomerPortal = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Customer Portal',
    url: `${BASE_URL}/customer-portal`,
    description: 'Sign in once to access your EnigmaNet applications.',
  };

  return (
    <>
      <PageMeta
        title="Customer Portal"
        description="Sign in once to access your EnigmaNet applications."
        url={`${BASE_URL}/customer-portal`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />

      <div className="portal-shell portal-shell--with-site-nav">
        <CustomerPortalPage />
      </div>

      <Footer />
    </>
  );
};

export default CustomerPortal;
