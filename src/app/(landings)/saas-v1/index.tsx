import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Cta from './components/Cta';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import UseCases from './components/UseCases';
import Work from './components/Work';

const Index = () => {
  return (
    <>
      <PageMeta title="SaaS Landing v.1" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Features />
      <Dashboard />
      <UseCases />
      <Pricing />
      <Testimonials />
      <Work />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
