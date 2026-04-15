import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const Sentinel = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'AI & Automation', href: '/products/ai-&-automation' },
          { label: 'Enigma Sentinel' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Enigma Sentinel"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default Sentinel;
