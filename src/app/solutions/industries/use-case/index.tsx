import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import RemoteWorkUseCasePage from './components';

const IndustriesCase = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Industry Use Case | Solutions',
    url: `${BASE_URL}/solutions/industries/use-case`,
    description:
      'Enigma is designed for demanding sectors where poor connectivity directly affects revenue, service quality and operational continuity. ',
  };
  return (
    <>
      <PageMeta
        title="Industry Use Case | Solutions"
        description="Enigma is designed for demanding sectors where poor connectivity directly affects revenue, service quality and operational continuity. "
        url={`${BASE_URL}/solutions/industries/use-case`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <RemoteWorkUseCasePage />

      <Footer />
    </>
  );
};
export default IndustriesCase;
