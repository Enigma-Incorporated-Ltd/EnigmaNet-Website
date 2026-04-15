import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const DataInfrastructure = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'AI & Data Infrastructure' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="AI & Data Infrastructure"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default DataInfrastructure;
