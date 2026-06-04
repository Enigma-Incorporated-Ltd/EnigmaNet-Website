import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import HostingCloud from './components';

const HostingSecureCloud = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hosting Secure Cloud',
    url: `${BASE_URL}/hosting-secure-cloud`,
    description:
      'On-demand compute, GPU and storage infrastructure that efficiently scales with your workloads without unnecessary complexity or hyperscaler-style cost surprises. ',
  };
  return (
    <>
      <PageMeta
        title="Hosting Secure Cloud"
        description="On-demand compute, GPU and storage infrastructure that efficiently scales with your workloads without unnecessary complexity or hyperscaler-style cost surprises. "
        url={`${BASE_URL}/hosting-secure-cloud`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <HostingCloud />

      <Footer />
    </>
  );
};

export default HostingSecureCloud;
