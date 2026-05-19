import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import LedgerPaymentDeviceIntegrationsPage from './components';

const LedgerPaymentDeviceIntegrations = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Coming Soon',
    url: `${BASE_URL}/products/the-enigma-platform/enigma-ledger/ledger-payment-device-integrations`,
    description: 'We are working hard to launch something amazing. Stay tuned!',
  };
  return (
    <>
      <PageMeta
        title="Coming Soon"
        description="We are working hard to launch something amazing. Stay tuned! "
        url={`${BASE_URL}/products/the-enigma-platform/enigma-ledger/ledger-payment-device-integrations`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <LedgerPaymentDeviceIntegrationsPage />

      <Footer />
    </>
  );
};

export default LedgerPaymentDeviceIntegrations;
