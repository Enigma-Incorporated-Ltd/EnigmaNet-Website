import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router';
import About from './components/About';
import Brand from './components/Brand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Leaders from './components/Leaders';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';


const Index = () => {
  return (
    <>
      <PageMeta title='About v.2s' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <nav className="container py-4 mb-2 my-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/index">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            About v.1
          </li>
        </ol>
      </nav>
      <About />
      <Stats />
      <Gallery />
      <Brand />
      <Testimonials />
      <Leaders />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
