import logo from '@/assets/img/logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
      <Container className="text-center pt-lg-3">
        <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
          <img src={logo} className="me-2" width="60" alt="Silicon" />
          <span className="fs-4">Silicon</span>
        </div>
        <ul className="nav justify-content-center pt-3 pb-4 pb-lg-5">
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Account
            </Link>
          </li>
        </ul>
        <div className="d-flex flex-column flex-sm-row justify-content-center">
          <Link to="#" className="btn btn-primary shadow-primary btn-lg me-sm-4 mb-3">
            Buy access pass
          </Link>
          <Link to="#" className="btn btn-outline-light btn-lg mb-3">
            <IconifyIcon icon="bx:calendar-check" className="fs-xl me-2 ms-n1" />
            Add to calendar
          </Link>
        </div>
        <div className="d-flex justify-content-center pt-4 mt-lg-3">
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-facebook mx-2"
            aria-label="Facebook"
          >
            <IconifyIcon icon="bxl:facebook" fontSize={20} />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-instagram mx-2"
            aria-label="Instagram"
          >
            <IconifyIcon icon="bxl:instagram" fontSize={20} />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-twitter mx-2"
            aria-label="Twitter"
          >
            <IconifyIcon icon="bxl:twitter" fontSize={20} />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-youtube mx-2"
            aria-label="YouTube"
          >
            <IconifyIcon icon="bxl:youtube" fontSize={20} />
          </Link>
        </div>
        <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
          <span className="opacity-80">&copy; All rights reserved. Made by </span>
          <Link
            className="nav-link d-inline-block p-0"
            to="https://coderthemes.com/"
            target="_blank"
            rel="noopener"
          >
            Coderthemes
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
