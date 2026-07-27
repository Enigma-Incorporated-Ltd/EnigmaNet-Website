import Breadcrumb from '@/components/ui/Breadcrumb';
import CardGrid, { type CardItem } from '@/components/ui/card';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { aiAutomation } from '@/utils/products';

const AIAutomationList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' }, { label: 'AI & Automation' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeaderTitle
        title={
          <>
            <span className="text-primary">AI & Automation</span>
          </>
        }
        style={{
          padding: '31px 0px ',
        }}
        className="h1"
        textAlign="center"
      />

      <CardGrid
        data={aiAutomation as CardItem[]}
        columns="col-12 col-md-12 col-lg-6"
        buttonLabel="Explore"
      />
    </div>
  );
};

export default AIAutomationList;
