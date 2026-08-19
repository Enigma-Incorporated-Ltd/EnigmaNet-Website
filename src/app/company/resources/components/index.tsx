import Breadcrumb from '@/components/ui/Breadcrumb';
import CardGrid, { type CardItem } from '@/components/ui/card';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { resources } from '@/utils/company';

const ResourcesPage = () => {
  return (
    <div className="container pb-5">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Resources', href: '/company/resources' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeaderTitle
        title={
          <>
            <span className="text-primary">Resources</span>
          </>
        }
        style={{
          padding: '31px 0px ',
        }}
        className="h1"
        textAlign="center"
      />

      <CardGrid
        data={resources as CardItem[]}
        columns="col-12 col-md-12 col-lg-6"
        buttonLabel="Explore"
      />
    </div>
  );
};

export default ResourcesPage;
