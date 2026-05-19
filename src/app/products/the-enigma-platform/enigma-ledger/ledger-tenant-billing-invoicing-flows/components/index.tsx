import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const LedgerTenantBillingInvoicingFlowsPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Enigma Ledger', href: '/products/enigma-platform/enigma-ledger' },
          {
            label: 'Ledger Tenant Billing Invoicing Flows',
          },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Ledger Tenant Billing Invoicing Flows"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default LedgerTenantBillingInvoicingFlowsPage;
