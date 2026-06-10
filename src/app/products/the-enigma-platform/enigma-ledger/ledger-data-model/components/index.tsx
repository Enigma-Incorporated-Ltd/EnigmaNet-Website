import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const LedgerDataModelPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Enigma Ledger', href: '/products/enigma-platform/enigma-ledger' },
          {
            label: 'Ledger Data Model',    
          },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Ledger Data Model"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default LedgerDataModelPage;
