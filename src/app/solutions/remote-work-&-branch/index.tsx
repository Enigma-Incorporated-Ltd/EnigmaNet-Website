import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import WorkBranch from './components';

const RemoteWork = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Remote Work & Branch',
    url: `${BASE_URL}/solutions/remote-work-&-branch`,
    description:
      'Enigma helps businesses improve performance across branches, remote teams and distributed operations with centralised visibility, built-in resilience and better control over critical traffic.  ',
  };
  return (
    <>
      <PageMeta
        title="Remote Work & Branch"
        description="Enigma helps businesses improve performance across branches, remote teams and distributed operations with centralised visibility, built-in resilience and better control over critical traffic.  "
        url={`${BASE_URL}/solutions/remote-work-&-branch`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <WorkBranch />

      <Footer />
    </>
  );
};

export default RemoteWork;
