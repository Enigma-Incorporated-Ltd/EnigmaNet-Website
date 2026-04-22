import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import SmarterInfrastructurePage from './components';

const SmarterInfrastructure = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Smarter Infrastructure',
    url: `${BASE_URL}/smarter-infrastructure`,
    description: '  Enigma improves how data moves across distributed environments, helping organisations gain more predictable performance, stronger resilience and clearer visibility without replacing the infrastructure they already have.',
  };
  return (
    <>
      <PageMeta
        title="Smarter Infrastructure"
        description=" Enigma improves how data moves across distributed environments, helping organisations gain more predictable performance, stronger resilience and clearer visibility without replacing the infrastructure they already have."
        url={`${BASE_URL}/smarter-infrastructure`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <SmarterInfrastructurePage />

      <Footer />
    </>
  );
};

export default SmarterInfrastructure;
