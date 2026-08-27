import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Ledger from './components';

const EnigmaLedger = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enigma Ledger',
    url: `${BASE_URL}/products/the-enigma-platform/enigma-ledger`,
    description:
      'Enigma Ledger centralises subscriptions, invoices, payment methods, tax details, PSP connections, payment devices, reporting and reconciliation across Enigma Connect, Enigma EDGE, ESC, Hot Storage, LFT and MFT.  ',
  };
  return (
    <>
      <PageMeta
        title="Enigma Ledger | The Enigma Platform -Products "
        description="Enigma Ledger centralises subscriptions, invoices, payment methods, tax details, PSP   
        connections, payment devices, reporting and reconciliation across Enigma Connect, Enigma   
        EDGE, ESC, Hot Storage, LFT and MFT.  "
        url={`${BASE_URL}/products/the-enigma-platform/enigma-ledger`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <Ledger />

      <Footer />
    </>
  );
};

export default EnigmaLedger;
