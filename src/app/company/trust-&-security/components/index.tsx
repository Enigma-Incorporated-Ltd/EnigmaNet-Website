import Breadcrumb from '@/components/ui/Breadcrumb';
import CardGrid, { type CardItem } from '@/components/ui/card';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { trustAndsecurity } from '@/utils/company';

const TrustAndSecurityPage = () => {
  return (
    <div className="container pb-5">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Trust & Security', href: '/company/trust-&-security' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeaderTitle
        title={
          <>
            <span className="text-primary">Company</span>
          </>
        }
        style={{
          padding: '31px 0px ',
        }}
        className="h1"
        textAlign="center"
      />

      <CardGrid
        data={trustAndsecurity as CardItem[]}
        columns="col-12 col-md-12 col-lg-6"
        buttonLabel="Explore"
      />
    </div>
  );
};

export default TrustAndSecurityPage;
