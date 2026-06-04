import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const JointSolutionPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Partners', href: '/partners' },
          { label: 'Kinnami Partnership', href: '/partners/kinnami-partnership' },
          { label: 'Joint Solution', href: '/partners/kinnami-partnership/joint-solution' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Joint Solution"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default JointSolutionPage;
