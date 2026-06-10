import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const LedgerPspConnectorsPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Enigma Ledger', href: '/products/enigma-platform/enigma-ledger' },
          {
            label: 'Ledger PSP Connectors',
          },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Ledger PSP Connectors"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default LedgerPspConnectorsPage;
