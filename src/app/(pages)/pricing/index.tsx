import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';
import { Container } from 'react-bootstrap';
import Brand from './components/Brand';
import Comparison from './components/Comparison';
import Cta from './components/Cta';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Plan from './components/Plan';
import PageMeta from '@/components/PageMeta';


const Index = () => {
  return (
    <>
      <PageMeta title="Pricing" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <section className="bg-dark py-4" data-bs-theme="dark">
        <Container className="pb-2 py-lg-3">
          <nav className="pb-4 mb-lg-3" aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
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
                Pricing
              </li>
            </ol>
          </nav>
          <h1 className="text-center mb-0">Transparent Pricing for You</h1>
        </Container>
        <div style={{ height: '300px' }}></div>
      </section>
      <Plan />
      <Comparison />
      <Faq />
      <Brand />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
