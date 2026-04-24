import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const SupportData = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Contact Us', href: '/contact-us' }
         , { label: 'Support', href: '/support' },
        
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Support"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default SupportData;
