import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const DeveloperPortalPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Developer Portal', href: '/developer-portal' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Developer Portal"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default DeveloperPortalPage;
