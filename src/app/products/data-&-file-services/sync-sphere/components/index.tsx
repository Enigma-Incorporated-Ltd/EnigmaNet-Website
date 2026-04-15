import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const DataSphere = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Data & File Services', href: '/products/data-&-file-services' },
          { label: 'Sync Sphere' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Sync Sphere"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default DataSphere;
