import Hero from './components/Hero';
import PopularPosts from './components/PopularPosts';
import Posts from './components/Posts';
import Podcasts from './components/Podcasts';
import Cta from './components/Cta';
import Navbar from '@/components/navbar/Navbar';
import Footer from './components/Footer';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title="Blog Homepage" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <PopularPosts />
      <Posts />
      <Podcasts />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
