import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const AIAutomationList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' }, { label: 'AI & Automation' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="AI & Automation"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default AIAutomationList;
