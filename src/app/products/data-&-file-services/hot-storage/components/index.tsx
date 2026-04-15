import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const DataStorage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Data & File Services', href: '/products/data-&-file-services' },
          { label: 'Hot Storage' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Hot Storage"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default DataStorage;
