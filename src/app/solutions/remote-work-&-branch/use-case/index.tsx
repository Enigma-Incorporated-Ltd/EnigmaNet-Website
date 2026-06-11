import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import RemoteWorkUseCasePage from './components';

const RemoteWorkUseCase = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Remote Work & Branch Use Case  | Solutions',
    url: `${BASE_URL}/solutions/remote-work-&-branch/use-case`,
    description:
      'Enigma helps distributed teams maintain stable, high-performance connectivity across offices, branches and remote environments without replacing existing infrastructure. The Accelerated Private Network overlay runs alongside existing networks, helping improve latency, session stability, failover and application performance across multi-site environments.',
  };
  return (
    <>
      <PageMeta
        title="Remote Work & Branch Use Case  | Solutions"
        description="Enigma helps distributed teams maintain stable, high-performance connectivity across offices, branches and remote environments without replacing existing infrastructure. The Accelerated Private Network overlay runs alongside existing networks, helping improve latency, session stability, failover and application performance across multi-site environments."
        url={`${BASE_URL}/solutions/remote-work-&-branch/use-case`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light fixed-top"
        darkenable={false}
        isNavDark={false}
      />
      <RemoteWorkUseCasePage />

      <Footer />
    </>
  );
};

export default RemoteWorkUseCase;
