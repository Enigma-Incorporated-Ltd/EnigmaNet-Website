import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import LegalPage from '@/components/legal/Legalpage';

const Legal = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />

      <LegalPage />

      <Footer />
    </>
  );
};

export default Legal;
