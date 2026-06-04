import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const ApplianceDetails = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Integration & OEM', href: '/products/integration-&-oem' },
          { label: 'Virtual Appliance' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Virtual Appliance"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default ApplianceDetails;
