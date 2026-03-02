import Hero from './components/Hero';
import Description from './components/Description';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title="Single Course" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Description />
      <Author />
      <Testimonials />
      <Faq />
      <Blog />
      <Footer />
    </>
  );
};

export default Index;
