import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Banner from './components/Banner';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Latestnews from './components/Latestnews';
import Service from './components/Service';
import Testimonials from './components/Testimonials';

const Index = () => {
  return (
    <>
      <PageMeta title='Financial Consulting Landing' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Service />
      <Banner />
      <Features />
      <Industries />
      <Brands />
      <Testimonials />
      <Latestnews />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
