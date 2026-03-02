import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Cost from './components/Cost';
import Cta from './components/Cta';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoLink from './components/InfoLink';
import Testimonials from './components/Testimonials';
import Work from './components/Work';


const Index = () => {
  return (

    <>
      <PageMeta title='Mobile App Showcase Landing v.2' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Cost />
      <Features />
      <Work />
      <Testimonials />
      <Cta />
      <InfoLink />
      <Footer />
    </>
  );
};

export default Index;
