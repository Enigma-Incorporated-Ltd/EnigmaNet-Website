import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const DeploymentDetails = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Integration & OEM', href: '/products/integration-&-oem' },
          { label: 'Container Deployment' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Container Deployment"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default DeploymentDetails;
