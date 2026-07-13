import Breadcrumb from '@/components/ui/Breadcrumb';
import CardGrid, { type CardItem } from '@/components/ui/card';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { prodcutsList } from '@/utils/products';

const ProductList = () => {
  return (
      <div className="container pb-5 ">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
    
      <HeaderTitle
        title={
          <>
            <span className="text-primary">Products</span>
          </>
        }
        style={{
          padding: '31px 0px ',
        }}
        className="h1"
        textAlign="center"
      />

      <CardGrid
        data={prodcutsList as CardItem[]}
        columns="col-12 col-md-12 col-lg-6"
        buttonLabel="Explore"
      />
    </div>
  );
};

export default ProductList;
