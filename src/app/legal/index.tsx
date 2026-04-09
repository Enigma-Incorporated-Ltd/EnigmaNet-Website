import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import LegalPage from '@/components/legal/Legalpage';

const Legal = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <LegalPage />

      <Footer />
    </>
  );
};

export default Legal;
