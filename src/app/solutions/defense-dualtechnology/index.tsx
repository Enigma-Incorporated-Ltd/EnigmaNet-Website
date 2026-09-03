import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import DefenseTechnology from './components';

const Defense = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Defense Dualtechnology',
    url: `${BASE_URL}/solutions/defense-dualtechnology`,
    description:
      'Enigma provides a secure, high-performance network layer for defence-adjacent and dual-use environments where failure, delay or loss of control is not acceptable. ',
  };
  return (
    <>
      <PageMeta
        title="Defense Dualtechnology"
        description="Enigma provides a secure, high-performance network layer for defence-adjacent and dual-use environments where failure, delay or loss of control is not acceptable. "
        url={`${BASE_URL}/solutions/defense-dualtechnology`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <DefenseTechnology />

      <Footer />
    </>
  );
};

export default Defense;
