import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const StatusPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Status', href: '/status' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Status"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default StatusPage;
