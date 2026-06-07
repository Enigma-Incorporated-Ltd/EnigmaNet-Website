import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const CaseStudiesPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Resources', href: '/company/resources' },
          { label: 'Case Studies', href: '/company/resources/case-studies' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Case Studies"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default CaseStudiesPage;
