import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const CustomerPortalPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Customer Portal', href: '/customer-portal' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Customer Portal"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default CustomerPortalPage;
