import Navbar from '@/components/navbar/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import News from './components/News';
import Prices from './components/Prices';
import Services from './components/Services';
import Team from './components/Team';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title='Services Single v.2' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Services />
      <Team />
      <Prices />
      <News />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
