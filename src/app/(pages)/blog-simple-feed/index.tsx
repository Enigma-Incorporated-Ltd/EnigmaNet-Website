import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router';
import BlogSimple from './components/BlogSimple';
import Cta from './components/Cta';
import Footer from './components/Footer';
import PageContent from './components/PageContent';


const Index = () => {
  return (
    <>
      <PageMeta title="Blog Simple Feed" />
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
            Blog Simple Feed
          </li>
        </ol>
      </nav>
      <PageContent />
      <BlogSimple />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
