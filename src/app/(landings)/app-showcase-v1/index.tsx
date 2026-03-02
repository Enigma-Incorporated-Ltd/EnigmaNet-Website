import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Brands from './components/Brands';
import Cta from './components/Cta';
import Faqs from './components/Faqs';
import Features from './components/Features';
import Fetures from './components/Fetures';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Work from './components/Work';


const Index = () => {
  return (
    <>
      <PageMeta title="Mobile App Showcase Landing v.1" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Brands />
      <Features />
      <Work />
      <Fetures />
      <Testimonials />
      <Faqs />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
