import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const ConnectivityProductList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' }, { label: 'Connectivity Products' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Connectivity Products"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default ConnectivityProductList;
