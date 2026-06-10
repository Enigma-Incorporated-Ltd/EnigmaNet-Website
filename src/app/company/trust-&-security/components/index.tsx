import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const TrustAndSecurityPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Trust & Security', href: '/company/trust-&-security' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Trust & Security"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default TrustAndSecurityPage;
