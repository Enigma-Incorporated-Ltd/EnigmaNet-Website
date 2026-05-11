import Breadcrumb from '@/components/ui/Breadcrumb';
import { type CardItem } from '@/components/ui/card';
import CardGrid from '@/components/ui/card';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { Partners } from '@/utils/partners';

const PartnersData = () => {
  return (
    <section className="container pb-5 ">
      <Breadcrumb
        items={[{ label: 'Partners', href: '/partners' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeaderTitle
        title={
          <>
            <span className="text-primary">Partners</span>
          </>
        }
        style={{
          padding: '31px 0px ',
        }}
        className="h1"
        textAlign="center"
      />

      <CardGrid
        data={Partners as CardItem[]}
        columns="col-12 col-md-12 col-lg-6"
        buttonLabel="Explore"
      />
    </section>
  );
};

export default PartnersData;
