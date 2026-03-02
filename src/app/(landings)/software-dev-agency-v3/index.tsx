import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import About from './components/About';
import Benefits from './components/Benefits';
import Blog from './components/Blog';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Projects from './components/Projects';
import Solutions from './components/Solutions';
import Technologies from './components/Technologies';


const Index = () => {
  return (
    <>
    <PageMeta title='Software Dev Agency Landing v.3'/>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <About />
      <Solutions />
      <Industries />
      <Technologies />
      <Projects />
      <Benefits />
      <Brands />
      <Blog />
      <Footer />
    </>
  );
};

export default Index;
