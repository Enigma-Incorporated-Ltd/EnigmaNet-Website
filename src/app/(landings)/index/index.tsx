import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LandingPage from './components/LandingPage';
import SiliconFeatures from './components/SiliconFeatures';


const Index = () => {
  return (
    <>
      <PageMeta title='Multipurpose Technology Bootstrap Template' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light shadow-sm fixed-top" />
      <Hero />
      <Features />
      <LandingPage />
      <SiliconFeatures />
      <Footer />
    </>
  );
};

export default Index;
