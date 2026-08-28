import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Legal from './Legal';

const Policies = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />

      <Legal />

      <Footer />
    </>
  );
};

export default Policies;
