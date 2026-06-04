import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const TrustCentrePage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Trust Centre', href: '/company/trust-centre' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title=" Trust Centre"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default TrustCentrePage;
