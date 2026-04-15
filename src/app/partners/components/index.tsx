import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const PartnersData = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Partners', href: '/partners' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Partners"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default PartnersData;
