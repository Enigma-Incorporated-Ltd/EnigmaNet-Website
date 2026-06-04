import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const ProductContent = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Product-2' }]}
        style={{
          paddingTop: '8rem',
        }}
      />
      <Header
        title="Product "
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default ProductContent;
