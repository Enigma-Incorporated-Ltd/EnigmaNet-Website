import Hero from './components/Hero';
import Courses from './components/Courses';
import Work from './components/Work';
import Iconboxes from './components/Iconboxes';
import Testimonials from './components/Testimonials';
import Brands from './components/Brands';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title='Online Courses Landing' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Courses />
      <Work />
      <Iconboxes />
      <Testimonials />
      <Brands />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
