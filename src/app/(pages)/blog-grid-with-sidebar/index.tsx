import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import BlogTitle from './components/BlogTitle';
import Cta from './components/Cta';
import Digital from './components/Digital';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PageMeta from '@/components/PageMeta';


const Index = () => {
  return (
    <>
      <PageMeta title="Blog grid With Sidebar" />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none fixed-top" />
      <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
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
            Blog Grid with Sidebars
          </li>
        </ol>
      </nav>
      <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
        <BlogTitle />
        <Row>
          <Col xl={9} lg={8}>
            <div className="pe-xl-5">
              <Digital />
            </div>
          </Col>
          <Sidebar />
        </Row>
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
