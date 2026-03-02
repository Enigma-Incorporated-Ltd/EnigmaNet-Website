import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router';
import Cta from './components/Cta';
import Footer from './components/Footer';
import GridPost from './components/GridPost';
import PageTitle from './components/PageTitle';
import Paginations from './components/Paginations';


const Index = () => {

  return (
    <>
      <PageMeta title='Blog grid No Sidebar' />
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
            Blog Grid
          </li>
        </ol>
      </nav>
      <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
        <PageTitle />
        <GridPost />
        <Paginations />
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
