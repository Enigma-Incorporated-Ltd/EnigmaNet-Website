import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import NetworkPage from './components';

const SecureNetworking = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Secure Networking',
    url: `${BASE_URL}/secure-networking`,
    description:
      'Protect training data, models, and pipelines across environments while keeping experimentation fast and controlled. ',
  };
  return (
    <>
      <PageMeta
        title="Secure Networking"
        description="Protect training data, models, and pipelines across environments while keeping experimentation fast and controlled. "
        url={`${BASE_URL}/secure-networking`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <NetworkPage />

      <Footer />
    </>
  );
};

export default SecureNetworking;
