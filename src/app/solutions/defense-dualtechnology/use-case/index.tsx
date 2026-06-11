import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import DefenseDualTechnologyUseCasePage from './components';

const DefenseCase = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'DEFENCE & DUAL-USE TECHNOLOGY USE CASE | Solutions',
    url: `${BASE_URL}/solutions/defense-dualtechnology/use-case`,
    description:
      'Enigma delivers secure, resilient overlay connectivity for environments where operational continuity, low latency and communications stability are critical. Designed for dual-use infrastructure, field operations, emergency response and distributed secure networks. ',
  };
  return (
    <>
      <PageMeta
        title="DEFENCE & DUAL-USE TECHNOLOGY USE CASE | Solutions"
        description="Enigma delivers secure, resilient overlay connectivity for environments where operational continuity, low latency and communications stability are critical.
Designed for dual-use infrastructure, field operations, emergency response and distributed secure networks."
        url={`${BASE_URL}/solutions/defense-dualtechnology/use-case`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light fixed-top"
        darkenable={false}
        isNavDark={false}
      />
      <DefenseDualTechnologyUseCasePage />

      <Footer />
    </>
  );
};
export default DefenseCase;
