import logo from '@/assets/img/logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Col, Collapse, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

type Brand = {
  name: string;
  logo: string;
};

type LinkItem = {
  title: string;
  url: string;
};

type Copyright = {
  text: string;
  by: string;
  url: string;
};

type FooterData = {
  description: string;
  email: string;
  brand: Brand;
  links: LinkItem[];
  policies: LinkItem[];
  socials: LinkItem[];
  copyright: Copyright;
};

const footerData: FooterData = {
  description:
    'Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.',
  email: 'email@example.com',
  brand: {
    name: 'Silicon',
    logo: logo,
  },
  links: [
    { title: 'Home', url: '#' },
    { title: 'Features', url: '#' },
    { title: 'Integrations', url: '#' },
    { title: 'Our Clients', url: '#' },
    { title: 'Blog', url: '#' },
  ],
  policies: [
    { title: 'Terms & Conditions', url: '#' },
    { title: 'Privacy Policy', url: '#' },
  ],
  socials: [
    { title: 'Facebook', url: '#' },
    { title: 'LinkedIn', url: '#' },
    { title: 'Twitter', url: '#' },
    { title: 'Instagram', url: '#' },
  ],
  copyright: {
    text: 'All rights reserved. Made by',
    by: 'Coderthemes',
    url: 'https://coderthemes.com/',
  },
};

const Footer = () => {
  const [openUseful, setOpenUseful] = useState(false);
  const [openSocials, setOpenSocials] = useState(false);
  return (
    <footer className="footer pt-5 pb-4 pb-lg-5">
      <Container className="pt-lg-4">
        <Row className="pb-5">
          <Col lg={4} md={6}>
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4 d-flex align-items-center gap-2">
              <img src={footerData.brand.logo} width="47" alt={footerData.brand.name} />
              {footerData.brand.name}
            </div>
            <p className="fs-sm pb-lg-3 mb-4">{footerData.description}</p>

            <form className="needs-validation" noValidate>
              <label htmlFor="subscr-email" className="form-label">
                Subscribe to our newsletter
              </label>
              <div className="input-group position-relative">
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
          </Col>

          <Col xl={6} lg={7} md={5} className="offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <Row id="footer-links">
              <Col lg={4}>
                <h6 className="mb-2">
                  <Link
                    to="#useful-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    onClick={() => setOpenUseful(!openUseful)}
                  >
                    Useful Links
                    <IconifyIcon icon="bx:chevron-down" fontSize={24} className="ms-1" />
                  </Link>
                </h6>
                <Collapse in={openUseful}>
                  <div id="useful-links" className="d-lg-block">
                    <ul className="nav flex-column pb-lg-1 mb-lg-3">
                      {footerData.links.map((link, i) => (
                        <li key={i} className="nav-item">
                          <Link to={link.url} className="nav-link d-inline-block px-0 pt-1 pb-2">
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="nav flex-column mb-2 mb-lg-0">
                      {footerData.policies.map((policy, i) => (
                        <li key={i} className="nav-item">
                          <Link
                            to={policy.url}
                            className="nav-link d-inline-block px-0 pt-1 pb-2"
                          >
                            {policy.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Collapse>
              </Col>

              <Col xl={4} lg={3}>
                <h6 className="mb-2">
                  <Link
                    to="#social-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    onClick={() => setOpenSocials(!openSocials)}
                  >
                    Socials
                    <IconifyIcon icon="bx:chevron-down" fontSize={24} className="ms-1" />
                  </Link>
                </h6>
                <Collapse in={openSocials}>
                  <div id="social-links" className="d-lg-block">
                    <ul className="nav flex-column mb-2 mb-lg-0">
                      {footerData.socials.map((social, i) => (
                        <li key={i} className="nav-item">
                          <Link
                            to={social.url}
                            className="nav-link d-inline-block px-0 pt-1 pb-2"
                          >
                            {social.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Collapse>
              </Col>

              <Col xl={4} lg={5} className="pt-2 pt-lg-0">
                <h6 className="mb-2">Contact Us</h6>
                <Link to={`mailto:${footerData.email}`} className="fw-medium">
                  {footerData.email}
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          &copy; {footerData.copyright.text}{' '}
          <Link
            className="nav-link d-inline-block p-0"
            to={footerData.copyright.url}
            target="_blank"
            rel="noopener"
          >
            {footerData.copyright.by}
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
