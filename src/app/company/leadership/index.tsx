import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import LeadershipPage from './components';

const Leadership = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Leadership | Company',
    url: `${BASE_URL}/company/leadership`,
    description: 'We are working hard to launch something amazing. Stay tuned!',
  };
  return (
    <>
      <PageMeta
        title="Leadership | Company"
        description="We are working hard to launch something amazing. Stay tuned!"
        url={`${BASE_URL}/company/leadership`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <LeadershipPage />

      <Footer />
    </>
  );
};

export default Leadership;
