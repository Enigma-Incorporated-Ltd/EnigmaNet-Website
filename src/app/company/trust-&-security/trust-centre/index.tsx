import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import TrustCentrePage from './components';

const TrustCentre = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Trust Centre',
    url: `${BASE_URL}/company/trust-&-security/trust-centre`,
    description:
      'Enigma Net helps organisations move data through secure, encrypted and resilient infrastructure.',
  };
  return (
    <>
      <PageMeta
        title="Trust Centre | Trust & Security -Company"
        description="Enigma Net helps organisations move data through secure, encrypted and resilient infrastructure."
        url={`${BASE_URL}/company/trust-&-security/trust-centre`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <TrustCentrePage />

      <Footer />
    </>
  );
};

export default TrustCentre;
