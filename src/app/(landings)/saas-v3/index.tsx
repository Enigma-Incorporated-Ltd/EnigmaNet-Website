import Hero from './components/Hero';
import Brand from './components/Brand';
import Feature from './components/Feature';
import FeatureApp from './components/FeatureApp';
import FeatureCrypto from './components/FeatureCrypto';
import Work from './components/Work';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import PageMeta from '@/components/PageMeta';
import Navbar from '@/components/navbar/Navbar';


const Index = () => {
  return (
    <>
      <PageMeta title="SaaS Landing v.3" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Brand />
      <Feature />
      <FeatureApp />
      <FeatureCrypto />
      <Work />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
