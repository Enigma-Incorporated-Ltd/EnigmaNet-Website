import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const SolutionList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Solutions "
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default SolutionList;
