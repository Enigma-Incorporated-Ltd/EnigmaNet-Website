import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const IndustriesData = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Industries' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Industries"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default IndustriesData;
