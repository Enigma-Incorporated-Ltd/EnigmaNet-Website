import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import AppCta from './components/AppCta';
import Comparison from './components/Comparison';
import Cta from './components/Cta';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Work from './components/Work';


const Index = () => {
  return (
    <>
      <PageMeta title="SaaS Landing v.2" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Features />
      <Comparison />
      <Testimonials />
      <AppCta />
      <Pricing />
      <Work />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
