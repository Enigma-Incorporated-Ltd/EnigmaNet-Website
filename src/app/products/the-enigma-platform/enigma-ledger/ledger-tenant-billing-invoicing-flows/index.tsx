import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import LedgerTenantBillingInvoicingFlowsPage from './components';

const LedgerTenantBillingInvoicingFlows = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Coming Soon',
    url: `${BASE_URL}/products/the-enigma-platform/enigma-ledger/ledger-tenant-billing-invoicing-flows`,
    description: 'We are working hard to launch something amazing. Stay tuned!',
  };
  return (
    <>
      <PageMeta
        title="Coming Soon"
        description="We are working hard to launch something amazing. Stay tuned! "
        url={`${BASE_URL}/products/the-enigma-platform/enigma-ledger/ledger-tenant-billing-invoicing-flows`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <LedgerTenantBillingInvoicingFlowsPage />

      <Footer />
    </>
  );
};

export default LedgerTenantBillingInvoicingFlows;
