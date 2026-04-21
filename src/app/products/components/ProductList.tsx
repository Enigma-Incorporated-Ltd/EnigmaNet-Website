import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';
// import Services from './Services';
// import Industries from './Industries';
// import Projects from './Projects';
// import Solutions from './Solutions';
// import Features from './Features';
// import Cta from './Cta';

const ProductList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Products "
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
      {/* <Services />
      <Features />
      <Industries />
      <Solutions />
      <Cta />
      <Projects/> */}
    </div>
  );
};

export default ProductList;
