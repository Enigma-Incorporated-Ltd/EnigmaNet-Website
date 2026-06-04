import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const DataAndFileServicesList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' }, { label: 'Data & File Services' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Data & File Services"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default DataAndFileServicesList;
