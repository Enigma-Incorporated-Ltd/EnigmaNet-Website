import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const SecurityPosturePage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Trust & Security', href: '/company/trust-&-security' },
          { label: 'Security Posture', href: '/company/trust-&-security/security-posture' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Security Posture"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default SecurityPosturePage;
