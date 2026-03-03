import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Awards from './components/Awards';
import Benefits from './components/Benefits';
import Cta from './components/Cta';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import Video from './components/Video';
import Works from './components/Works';


const Index = () => {
  return (
    <>
      <PageMeta title='Mobile App Showcase Landing v.3' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <section className="position-relative">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"
          style={{
            zIndex: -1,
            background: 'linear-gradient(141deg, rgba(255, 255, 255, 0.01) 17.3%, #F3F6FF 78.21%)',
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
          style={{
            zIndex: -1,
            background:
              'linear-gradient(141deg, rgba(11, 15, 25, 0.01) 17.3%, rgba(255, 255, 255, 0.04) 78.21%)',
          }}
        />
        <Hero />
        <Integrations />
        <Features />
      </section>

      <Works />
      <Video />
      <Benefits />
      <Testimonials />

      <section className="position-relative">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-secondary d-none d-dark-mode-block"
          style={{ zIndex: -1 }}
        />
        <Awards />
        <Cta />
      </section>

      <Footer />
    </>
  );
};

export default Index;
