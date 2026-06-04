import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const IntegrationList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' } , { label: 'Integration & OEM' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Integration & OEM"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default IntegrationList;
