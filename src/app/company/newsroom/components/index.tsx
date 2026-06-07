import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const NewsroomPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Newsroom', href: '/company/leadership' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Newsroom"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default NewsroomPage;
