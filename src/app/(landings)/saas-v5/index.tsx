import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Cases from './components/Cases';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Map from './components/Map';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Video from './components/Video';

const Index = () => {
  return (
    <>
      <PageMeta title="SaaS Landing v.5" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Categories />
      <Cases />
      <Map />
      <Video />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
};

export default Index;
