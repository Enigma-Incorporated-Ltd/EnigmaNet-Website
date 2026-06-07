import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const OPENINGSPAGE = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Careers', href: '/company/careers' },
          { label: 'Open Roles', href: '/company/careers/openings' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Open Roles"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default OPENINGSPAGE;
