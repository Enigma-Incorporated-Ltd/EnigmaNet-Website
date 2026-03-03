import Hero from './components/Hero';
import Video from './components/Video';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Specs from './components/Specs';
import Colors from './components/Colors';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title="Product" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Video />
      <Benefits />
      <Gallery />
      <Specs />
      <Colors />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
