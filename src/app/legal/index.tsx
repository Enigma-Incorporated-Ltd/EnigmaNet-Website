import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import LegalPage from '@/components/legal/Legalpage';

const Legal = () => {
  return (
    <>
      <PageMeta title="Standard Terms | Enigma Net" />
      <Navbar Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky" />
      <LegalPage />

      <Footer />
    </>
  );
}

export default Legal