import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Footer from './components/Footer';
import Hero from './components/Hero';

const Index = () => {
  return (
    <>
      <PageMeta title="Contacts v.3" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Footer />
    </>
  );
};

export default Index;
