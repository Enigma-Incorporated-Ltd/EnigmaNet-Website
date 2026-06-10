

import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const EscSecurityComplianceNotesPage = () => {
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
          { label: 'ESC Security Compliance Notes' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="ESC Security Compliance Notes"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default EscSecurityComplianceNotesPage;
