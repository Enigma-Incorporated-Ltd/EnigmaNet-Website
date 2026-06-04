import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const AboutEnigmaPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'About Enigma', href: '/company/about-enigma' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="About Enigma"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default AboutEnigmaPage;
