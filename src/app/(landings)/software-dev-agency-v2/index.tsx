
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Awards from './components/Awards';
import CaseStudies from './components/CaseStudies';
import Clients from './components/Clients';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';


const Index = () => {
  return (
    <>
      <PageMeta title='Software Dev Agency Landing v.2' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Services />
      <Awards />
      <CaseStudies />
      <Clients />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
