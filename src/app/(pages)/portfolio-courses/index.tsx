import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router';
import Course from './components/Course';
import Cta from './components/Cta';
import Footer from './components/Footer';
import PageTitle from './components/PageTitle';
import Paginations from './components/Paginations';

const Index = () => {
  return (
    <>
      <PageMeta title="Courses" />
      <section className="container">
        <Navbar
          Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
          headerSticky="navbar-stuck"
        />
        <nav className="pt-4 mt-lg-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/landing-online-courses">
                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
                Home
              </Link>
            </li>
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item active" aria-current="page">
              Courses
            </li>
          </ol>
        </nav>
        <PageTitle />
        <Course />
        <Paginations />
        <Cta />
        <Footer />
      </section>
    </>
  );
};

export default Index;
