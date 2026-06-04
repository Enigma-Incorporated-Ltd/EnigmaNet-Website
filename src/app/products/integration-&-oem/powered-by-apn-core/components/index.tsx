import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const ApnCoreDetails = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Integration & OEM', href: '/products/integration-&-oem' },
          { label: 'Powered by APN Core' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Powered by APN Core"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default ApnCoreDetails;
