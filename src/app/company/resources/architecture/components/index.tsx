import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const ArchitecturePage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Resources', href: '/company/resources' },
          { label: 'Architecture Notes', href: '/company/resources/architecture' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Architecture Notes"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default ArchitecturePage;
