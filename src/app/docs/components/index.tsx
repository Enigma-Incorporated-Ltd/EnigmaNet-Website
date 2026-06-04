import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const DocsPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Docs', href: '/docs' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Docs"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default DocsPage;
