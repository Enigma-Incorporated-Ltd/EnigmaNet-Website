import logo from '@/assets/img/logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-4 pb-lg-5">
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

        <div className="d-inline-block mt-n3 ms-n3 pb-2 pb-md-3 mb-4 mb-lg-5">
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
        <p className="mb-0 mx-auto fs-sm text-muted" style={{ maxWidth: '53.5rem' }}>
          &copy; All rights reserved. Made by
          <Link
            className="nav-link d-inline-block p-0"
            to="https://coderthemes.com/"
            target="_blank"
            rel="noopener"
          >
            Coderthemes
          </Link>
          . Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada
          suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare
          consectetur.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
