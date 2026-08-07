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

      <div className="portal-shell">
        <CustomerPortalPage />
      </div>
    </>
  );
};

export default CustomerPortal;
