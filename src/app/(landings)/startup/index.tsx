import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Hotspots from './components/Hotspots';
import MobileCta from './components/MobileCta';
import Registration from './components/Registration';
import Work from './components/Work';

const Index = () => {
  return (
    <>
      <PageMeta title="Startup Landing" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Features />
      <Hotspots />
      <Work />
      <MobileCta />
      <Registration />
      <Benefits />
      <Footer />
    </>
  );
};

export default Index;
