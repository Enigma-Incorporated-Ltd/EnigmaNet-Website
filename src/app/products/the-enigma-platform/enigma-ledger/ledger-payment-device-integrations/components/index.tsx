import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const LedgerPaymentDeviceIntegrationsPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Enigma Ledger', href: '/products/enigma-platform/enigma-ledger' },
          {
            label: 'Ledger Payment Device Integrations',        
          },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Ledger Payment Device Integrations"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default LedgerPaymentDeviceIntegrationsPage;
