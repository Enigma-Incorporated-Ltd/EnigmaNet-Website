import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';
import Contatct from './components/Contatct';
import Features from './components/Features';
import Footer from './components/Footer';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import PageMeta from '@/components/PageMeta';


const Index = () => {
  return (
    <>
      <PageMeta title='Services v.1' />
      <main className="page-wrapper position-relative zindex-2">
        <Navbar
          Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
          headerSticky="navbar-stuck"
        />
        <div className="bg-secondary pt-5" style={{ paddingBottom: '228px' }}>
          <nav className="container pt-5 pb-4 mb-lg-2" aria-label="breadcrumb">
            <ol className="breadcrumb pt-lg-3 mb-0">
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
                Services v.1
              </li>
            </ol>
          </nav>
          <Services />
        </div>
        <Testimonial />
        <Features />
        <Contatct />
      </main>
      <Footer />
    </>
  );
};

export default Index;
