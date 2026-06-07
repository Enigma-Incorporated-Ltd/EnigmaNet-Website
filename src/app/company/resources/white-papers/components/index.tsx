import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const WhitePapersPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Resources', href: '/company/resources' },
          { label: 'White Papers', href: '/company/resources/white-papers' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="White Papers"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default WhitePapersPage;
