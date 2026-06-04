import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import CompleteAi from './components';

const CompAIInfrastructure = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Complete AI Infrastructure',
    url: `${BASE_URL}/complete-ai-infrastructure`,
    description:
      'Data movement, compute and storage working as one controlled, high-performance system.',
  };
  return (
    <>
      <PageMeta
        title="Complete AI Infrastructure"
        description="Data movement, compute and storage working as one controlled, high-performance system."
        url={`${BASE_URL}/complete-ai-infrastructure`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <CompleteAi />

      <Footer />
    </>
  );
};

export default CompAIInfrastructure;
