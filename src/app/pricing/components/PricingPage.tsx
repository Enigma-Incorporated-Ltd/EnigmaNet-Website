import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const PricingPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Pricing', href: '/pricing' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Pricing"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default PricingPage;
