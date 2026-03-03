import { useState } from 'react';
import logo from '@/assets/img/logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Col, Collapse, Container, Nav, NavItem, NavLink, Row } from 'react-bootstrap';

const Footer = () => {
  
  const [openTools, setOpenTools] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  return (
    <footer className="footer bg-dark pt-5 pb-4" data-bs-theme="dark">
      <Container className="pt-1 pt-md-3 pt-lg-4 pt-xl-5">
        <Row>
          <Col lg={5} xl={4} className="mb-4 mb-md-5 mb-lg-0">
            <div className="d-flex align-items-center pb-3 mb-1">
              <div className="navbar-brand text-dark p-0 pe-1 me-0">
                <img src={logo} width={47} alt="Silicon" />
                Silicon
              </div>
              <hr className="vr mt-2 mx-3" style={{ height: '26px' }} />
              <div className="text-white fw-semibold ps-1">Banking made easy.</div>
            </div>
            <p className="text-body fs-sm pb-1 pb-md-2 pb-lg-3 mb-3">
              With just a few taps, you can securely manage your finances from the palm of your
              hand. Download our app today and take control of your finances like never before!
            </p>
            <div className="d-flex flex-column flex-sm-row flex-lg-column align-items-sm-center align-items-lg-start justify-content-between">
              <div className="position-relative">
                <select
                  className="form-select form-select-sm"
                  style={{ maxWidth: '180px', paddingLeft: '1.75rem' }}
                >
                  <option value="" disabled>
                    Choose country
                  </option>
                  <option value="Australia">Australia</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Canada">Canada</option>
                  <option value="Denmark">Denmark</option>
                  <option value="USA">United States</option>
                </select>
                <IconifyIcon
                  icon="bx:map"
                  className="position-absolute top-50 start-0 translate-middle-y text-body ms-2"
                />
              </div>
              <div className="d-flex pt-4 pt-sm-0 pt-lg-4 mt-lg-3">
                <Link
                  to="#"
                  className="btn btn-icon btn-secondary btn-facebook rounded-circle me-3"
                >
                  <IconifyIcon icon="bxl:facebook" fontSize={20} />
                </Link>
                <Link
                  to="#"
                  className="btn btn-icon btn-secondary btn-instagram rounded-circle me-3"
                >
                  <IconifyIcon icon="bxl:instagram" fontSize={20} />
                </Link>
                <Link
                  to="#"
                  className="btn btn-icon btn-secondary btn-youtube rounded-circle me-3"
                >
                  <IconifyIcon icon="bxl:youtube" fontSize={20} />
                </Link>
                <Link
                  to="#"
                  className="btn btn-icon btn-secondary btn-telegram rounded-circle me-3"
                >
                  <IconifyIcon icon="bxl:telegram" fontSize={20} />
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={7} className="offset-xl-1">
            <Row id="footer-links">
              <Col md={4}>
                <h6 className="fs-lg mb-1 mb-md-3">
                  <span className="d-none d-md-block">Tools and features</span>
                  <button
                    className="d-block text-dark dropdown-toggle d-md-none py-2 border-0 bg-transparent"
                    onClick={() => setOpenTools(!openTools)}
                    aria-expanded={openTools}
                  >
                    <span className="me-1">Tools and features</span>
                    <IconifyIcon icon="bx:chevron-down" fontSize={24} />
                  </button>
                </h6>
                <Collapse in={openTools} className="d-md-block">
                  <div>
                    <Nav className="flex-column">
                      <NavItem className="mb-1">
                        <NavLink href="#">Bill payment tracker</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Budgeting goal tracker</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Budget alerts</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Categorize transactions</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Investment tracker</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Loan calculator</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Investment calculator</NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Collapse>
              </Col>

              <Col md={4}>
                <h6 className="fs-lg mb-1 mb-md-3">
                  <span className="d-none d-md-block">Resources</span>
                  <button
                    className="d-block text-dark dropdown-toggle d-md-none py-2 border-0 bg-transparent"
                    onClick={() => setOpenResources(!openResources)}
                    aria-expanded={openResources}
                  >
                    Resources
                    <IconifyIcon icon="bx:chevron-down" fontSize={24} className="ms-1" />
                  </button>
                </h6>
                <Collapse in={openResources} className="d-md-block">
                  <div>
                    <Nav className="flex-column">
                      <NavItem className="mb-1">
                        <NavLink href="#">About Silicon</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Latest news and insights</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Budgeting tips</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Investing tips</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Financial planning tips</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Careers at Silicon</NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Collapse>
              </Col>

              <Col md={4}>
                <h6 className="fs-lg mb-1 mb-md-3">
                  <span className="d-none d-md-block">Help center</span>
                  <button
                    className="d-block text-dark dropdown-toggle d-md-none py-2 border-0 bg-transparent"
                    onClick={() => setOpenHelp(!openHelp)}
                    aria-expanded={openHelp}
                  >
                    Help center
                    <IconifyIcon icon="bx:chevron-down" fontSize={24} className="ms-1" />
                  </button>
                </h6>
                <Collapse in={openHelp} className="d-md-block">
                  <div>
                    <Nav className="flex-column">
                      <NavItem className="mb-1">
                        <NavLink href="#">Help center</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Community</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Support chat</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">API documentation</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Account &amp; transactions</NavLink>
                      </NavItem>
                      <NavItem className="mb-1">
                        <NavLink href="#">Login and password</NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Collapse>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="d-md-flex align-items-center justify-content-between pt-sm-2 pt-md-4 pt-lg-5 pb-2 mt-4">
          <Nav className="order-md-2 ms-n3 ms-md-0 mb-3 mb-md-0">
            <NavItem>
              <NavLink href="">Terms and conditions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Privacy policy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact</NavLink>
            </NavItem>
          </Nav>
          <Nav as="p" className="nav d-block fs-sm mb-0 order-md-1">
            <span className="text-body">&copy; All rights reserved. Made by </span>
            <NavLink
              className="d-inline-block p-0"
              href="https://coderthemes.com/"
              target="_blank"
              rel="noopener"
            >
              Coderthemes
            </NavLink>
          </Nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
