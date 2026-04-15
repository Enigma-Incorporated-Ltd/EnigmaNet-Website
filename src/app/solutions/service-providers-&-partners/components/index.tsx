import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const ProvidersPartners = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Service Providers & Partners' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Service Providers & Partners"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default ProvidersPartners;
