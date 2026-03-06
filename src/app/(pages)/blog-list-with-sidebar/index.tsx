import PageTitle from './components/PageTitle';
import { Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import Sidebar from './components/Sidebar';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';
import BlogPosts from './components/BlogPosts';

const Index = () => {
  return (
    <>
      <PageMeta title="Blog List With Sidebar" />
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
            <BlogPosts />
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
