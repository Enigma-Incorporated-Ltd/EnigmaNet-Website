import single from '@/assets/img/portfolio/courses/single.jpg';
import avatar17 from '@/assets/img/avatar/17.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import Jarallax from '@/components/Jarallax';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section
      className="jarallax bg-dark pt-2 pt-lg-3 pb-lg-5"
      data-jarallax
      data-speed="0.35"
      data-bs-theme="dark"
    >
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70"></span>
      <Jarallax speed={0.35}>
        <div className="jarallax-img" style={{ backgroundImage: `url(${single})` }}></div>
      </Jarallax>
      <div className="container position-relative zindex-5 pb-5">
        <nav className="py-4" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/online-courses">
                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
                Home
              </Link>
            </li>
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item">
              <Link to="/portfolio-courses">Courses</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Fullstack Web Developer Course from Scratch
            </li>
          </ol>
        </nav>

        <div className="d-flex pt-3 pb-4 py-sm-4 pt-lg-5">
          <span className="badge bg-success fs-sm me-2">Best Seller</span>
          <Link to="#" className="badge bg-white text-nav fs-sm text-decoration-none">
            Web Development
          </Link>
        </div>

        <h1>Fullstack Web Developer Course from Scratch</h1>
        <p className="fs-lg text-light opacity-70">
          Egestas feugiat lorem eu neque suspendisse ullamcorper scelerisque aliquam mauris.
        </p>

        <div className="d-sm-flex py-3 py-md-4 py-xl-5">
          <div className="d-flex border-sm-end pe-sm-3 me-sm-3 mb-2 mb-sm-0">
            <div className="text-nowrap me-1">
              <IconifyIcon icon="bxs:star" className="text-warning" />
              <IconifyIcon icon="bxs:star" className="text-warning" />
              <IconifyIcon icon="bxs:star" className="text-warning" />
              <IconifyIcon icon="bxs:star" className="text-warning" />
              <IconifyIcon icon="bx:star" className="text-muted opacity-75" />
            </div>

            <span className="text-light opacity-70">(1.2K reviews)</span>
          </div>
          <div className="d-flex border-sm-end pe-sm-3 me-sm-3 mb-2 mb-sm-0">
            <IconifyIcon icon="bx:like" className="fs-xl text-light opacity-70 me-1" />
            <span className="text-light opacity-70">4.2K likes</span>
          </div>
          <div className="d-flex">
            <IconifyIcon icon="bx:time" className="fs-xl text-light opacity-70 me-1" />
            <span className="text-light opacity-70">220 hours</span>
          </div>
        </div>

        <div className="d-flex align-items-center mt-xl-5 pt-2 pt-md-4 pt-lg-5">
          <img src={avatar17} className="rounded-circle" width="60" alt="Albert Flores" />
          <div className="ps-3">
            <div className="text-light opacity-80 mb-1">Created by</div>
            <h6>Albert Flores</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
