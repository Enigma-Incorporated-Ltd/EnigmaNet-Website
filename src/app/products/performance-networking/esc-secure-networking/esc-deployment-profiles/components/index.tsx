

import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const EscDeploymentProfilesPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Performance Networking', href: '/products/performance-networking' },
          {
            label: 'Intelligent Traffic Management',
            href: '/products/performance-networking/esc-secure-networking/',
          },
          { label: 'ESC Deployment Profiles' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="ESC Deployment Profiles"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default EscDeploymentProfilesPage;
