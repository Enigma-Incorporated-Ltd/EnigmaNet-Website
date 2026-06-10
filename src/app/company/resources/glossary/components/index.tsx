import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const GlossaryPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Resources', href: '/company/resources' },
          { label: 'Glossary', href: '/company/resources/glossary' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Glossary"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default GlossaryPage;
