import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';


const Index = () => {
  return (
    <>
      <PageMeta  title="Contacts v.2"/>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Contact />
      <Branches />
      <Footer />
    </>
  );
};

export default Index;
