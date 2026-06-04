import Breadcrumb from '@/components/ui/Breadcrumb';
import { type CardItem } from '@/components/ui/card';
import CardGrid from '@/components/ui/card';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { theEnigmaPlatform } from '@/utils/products';

const EnigmaPlatformList = () => {
  return (
    <section className="container pb-5 ">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'The Enigma Platform', href: '/products/the-enigma-platform' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeaderTitle
        title={
          <>
            <span className="text-primary">The Enigma Platform</span>
          </>
        }
        style={{
          padding: '31px 0px ',
        }}
        className="h1"
        textAlign="center"
      />

      <CardGrid
        data={theEnigmaPlatform as CardItem[]}
        columns="col-12 col-md-12 col-lg-6"
        buttonLabel="Explore"
      />
    </section>
  );
};

export default EnigmaPlatformList;
