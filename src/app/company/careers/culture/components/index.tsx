import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const CulturePage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Careers', href: '/company/careers' },
          { label: 'Culture', href: '/company/careers/culture' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Culture"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default CulturePage;
