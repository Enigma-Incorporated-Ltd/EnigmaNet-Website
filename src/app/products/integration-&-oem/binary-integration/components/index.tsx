import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const IntegrationDetails = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Integration & OEM', href: '/products/integration-&-oem' },
          { label: 'Binary Integration' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Binary Integration"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default IntegrationDetails;
