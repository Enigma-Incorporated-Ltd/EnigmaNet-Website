import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Contacts from './components/Contacts';
import Cta from './components/Cta';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Video from './components/Video';


const Index = () => {
  return (
    <>
      <PageMeta title='Medical Landing' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Features />
      <Video />
      <Cta />
      <Team />
      <Testimonials />
      <LatestNews />
      <Contacts />
      <Footer />
    </>
  );
};

export default Index;
