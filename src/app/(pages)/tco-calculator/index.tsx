import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title="TCO Calculator" />
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
                TCO Calculator
              </li>
            </ol>
          </nav>
          <h1 className="text-center mb-2">Total Cost of Ownership Calculator</h1>
          <p className="text-center text-light opacity-70 fs-lg mb-0">
            See for yourself how unpredictable fees for transport, egress, and API requests can inflate your cloud storage budget.
          </p>
        </Container>
        <div style={{ height: '100px' }}></div>
      </section>
      <Calculator />
      <Footer />
    </>
  );
};

export default Index;
