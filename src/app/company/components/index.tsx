import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const CompanyData = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Company', href: '/company' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title=" Company"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default CompanyData;
