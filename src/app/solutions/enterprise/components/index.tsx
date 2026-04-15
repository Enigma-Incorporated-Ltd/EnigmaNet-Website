import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const EnterpriseData = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Enterprise' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Enterprise"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default EnterpriseData;
