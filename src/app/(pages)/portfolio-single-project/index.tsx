import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router';
import About from './components/About';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PageTitle from './components/PageTitle';
import Testimonial from './components/Testimonial';
import UserTest from './components/UserTest';


const Index = () => {
  return (
    <>
      <PageMeta title='Portfolio Single Projects' />
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <nav className="container py-4 mb-lg-2 mt-lg-3" aria-label="breadcrumb">
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
          <li className="breadcrumb-item">
            <Link to="/portfolio-grid">Portfolio</Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            Single Project
          </li>
        </ol>
      </nav>
      <PageTitle />
      <Hero />
      <About />
      <UserTest />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
