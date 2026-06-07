import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const FaqPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Resources', href: '/company/resources' },
          { label: 'FAQ', href: '/company/resources/faq' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="FAQ"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default FaqPage;
