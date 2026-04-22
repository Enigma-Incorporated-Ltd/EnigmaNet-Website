import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import CloudPage from './components';

const SecureCloud = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Secure Cloud',
    url: `${BASE_URL}/secure-cloud`,
    description:
      'Protect training data, models, and pipelines across environments while keeping experimentation fast and controlled. ',
  };
  return (
    <>
      <PageMeta
        title="Secure Cloud"
        description="Protect training data, models, and pipelines across environments while keeping experimentation fast and controlled. "
        url={`${BASE_URL}/secure-cloud`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <CloudPage />

      <Footer />
    </>
  );
};

export default SecureCloud;
