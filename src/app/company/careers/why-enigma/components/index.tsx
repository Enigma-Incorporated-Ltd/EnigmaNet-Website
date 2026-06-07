import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const WhyENIGMAPAGE = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Careers', href: '/company/careers' },
          { label: 'Why Enigma', href: '/company/careers/why-enigma' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Why Enigma"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default WhyENIGMAPAGE;
