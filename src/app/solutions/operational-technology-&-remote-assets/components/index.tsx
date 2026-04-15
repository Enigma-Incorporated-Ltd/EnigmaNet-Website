import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const RemoteAssets = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }, { label: 'Operational Technology & Remote Assets' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Operational Technology & Remote Assets"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default RemoteAssets;
