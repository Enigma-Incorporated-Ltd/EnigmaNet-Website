import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const EnigmaPlatformList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' } , { label: 'The Enigma Platform' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="The Enigma Platform "
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
}

export default EnigmaPlatformList