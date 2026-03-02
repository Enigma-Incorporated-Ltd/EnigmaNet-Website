import PageTitle from './components/PageTitle';
import { Col, Row } from 'react-bootstrap';
import Digital from './components/Digital';
import Business from './components/Business';
import Technology from './components/Technology';
import Startups from './components/Startups';
import Business1 from './components/Business1';
import Digital1 from './components/Digital1';
import Startups1 from './components/Startups1';
import IconifyIcon from '@/components/IconifyIcon';
import Sidebar from './components/Sidebar';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title='Blog List With Sidebar' />
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
            Blog List with Sidebar
          </li>
        </ol>
      </nav>
      <section className="container mt-4 mb-2 mb-md-4 mb-lg-5 pt-lg-2 pb-5">
        <PageTitle />
        <Row>
          <Col xl={9} lg={8}>
            <Digital />
            <div className="pb-2 pb-lg-3" />
            <Business />
            <div className="pb-2 pb-lg-3" />
            <Technology />
            <div className="pb-2 pb-lg-3" />
            <Startups />
            <div className="pb-2 pb-lg-3" />
            <Business1 />
            <div className="pb-2 pb-lg-3" />
            <Digital1 />
            <div className="pb-2 pb-lg-3" />
            <Startups1 />
            <div className="pb-2 pb-lg-3" />
            <button type="button" className="btn btn-lg btn-outline-primary w-100 mt-4">
              <IconifyIcon icon="bx:down-arrow-alt" className="fs-xl me-2" />
              Show more
            </button>
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
