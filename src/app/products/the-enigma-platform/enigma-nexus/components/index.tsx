import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const Nexus = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'The Enigma Platform', href: '/products/the-enigma-platform' },
          { label: 'Enigma Nexus' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Enigma Nexus"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default Nexus;
