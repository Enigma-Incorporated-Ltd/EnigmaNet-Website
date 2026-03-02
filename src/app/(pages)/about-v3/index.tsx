import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Locations from './components/Locations';
import Partners from './components/Partners';
import Story from './components/Story';
import Team from './components/Team';
import Testimonials from './components/Testimonials';


const Index = () => {
  return (
    <>
      <PageMeta title="About v.3" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Story />
      <Locations />
      <Team />
      <Partners />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
