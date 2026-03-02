import visa from '@/assets/img/landing/product/payments/visa.png';
import masterCard from '@/assets/img/landing/product/payments/mastercard.png';
import paypal from '@/assets/img/landing/product/payments/paypal.png';
import { Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
      <Container className="pt-lg-4">
        <Row className="gy-5 pb-5">
          <Col lg={4}>
            <div style={{ maxWidth: '26rem' }}>
              <h3 className="mb-4">Newsletter</h3>
              <p className="text-body mb-4 pb-2">
                Please, subscribe to our newsletter to keep updated about our news and offers.
              </p>
              <form className="needs-validation">
                <div className="input-group">
                  <input
                    type="email"
                    id="subscr-email"
                    className="form-control rounded-start ps-5"
                    placeholder="Your email"
                    required
                  />
                  <IconifyIcon
                    icon="bx:envelope"
                    className="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
                  />
                  <div className="invalid-tooltip position-absolute top-100 start-0">
                    Please provide a valid email address.
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={7} className="offset-lg-1">
            <div className="d-flex flex-lg-row flex-column justify-content-lg-between mt-n4 mx-n2">
              <div className="mt-4 px-2">
                <h3 className="mb-4 pb-lg-2">Our office</h3>
                <ul className="nav flex-column mb-0">
                  <li className="mb-1">
                    <Link to="#" className="nav-link align-items-start fw-normal px-0 py-1">
                      <IconifyIcon icon="bx:map" className="fs-5 text-primary me-2" />
                      3517 W. Gray St. Utica, <br /> Pennsylvania 57867
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="tel:4065550120"
                      className="nav-link align-items-start fw-normal px-0 py-1"
                    >
                      <IconifyIcon icon="bx:phone-call" className="fs-5 text-primary me-2" />
                      (406)&nbsp;555&#8209;0120
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mailto:email@example.com"
                      className="nav-link align-items-start fw-normal px-0 py-1"
                    >
                      <IconifyIcon icon="bx:envelope" className="fs-5 text-primary me-2" />
                      email@example.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4 px-2">
                <h3 className="mb-4 pb-lg-2">Payments accepted</h3>
                <div className="mt-n3 ms-n3">
                  <Link to="#" className="mt-3 ms-3 d-inline-block">
                    <img src={visa} width="96" alt="Visa" />
                  </Link>
                  <Link to="#" className="mt-3 ms-3 d-inline-block">
                    <img src={masterCard} width="96" alt="Visa" />
                  </Link>
                  <Link to="#" className="mt-3 ms-3 d-inline-block">
                    <img src={paypal} width="96" alt="Visa" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pt-4">
        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between text-center text-md-start pt-4 border-top border-light">
          <p className="nav d-block fs-sm mb-sm-0 mb-4">
            <span className="text-light opacity-50">&copy; All rights reserved. Made by </span>
            <Link
              className="nav-link d-inline-block p-0"
              to="https://coderthemes.com/"
              rel="noopener"
            >
              Coderthemes
            </Link>
          </p>
          <div className="mt-n3 ms-n3">
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-facebook rounded-circle mt-3 ms-3"
              aria-label="Facebook"
            >
              <IconifyIcon icon="bxl:facebook" fontSize={20} />
            </Link>
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-instagram rounded-circle mt-3 ms-3"
              aria-label="Instagram"
            >
              <IconifyIcon icon="bxl:instagram" fontSize={20} />
            </Link>
            <Link
              to="#"
              className="btn btn-icon btn-secondary btn-twitter rounded-circle mt-3 ms-3"
              aria-label="Twitter"
            >
              <IconifyIcon icon="bxl:twitter" fontSize={20} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
