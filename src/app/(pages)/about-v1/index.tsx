
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Awards from './components/Awards';
import Benefits from './components/Benefits';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Networks from './components/Networks';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Video from './components/Video';

const Index = () => {
  return (
    <>
      <PageMeta title='About v.1' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Benefits />
      <Video />
      <Awards />
      <Testimonials />
      <Team />
      <Cta />
      <Networks />
      <Footer />
    </>
  );
};

export default Index;
