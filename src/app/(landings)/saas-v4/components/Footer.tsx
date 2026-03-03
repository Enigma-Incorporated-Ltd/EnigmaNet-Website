import {
  Container,
  Row,
  Col,
  Nav,
  Dropdown,
  Button,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'react-bootstrap';

import logo from '@/assets/img/logo.svg';
import flagUS from '@/assets/img/flags/en.png';
import flagFR from '@/assets/img/flags/fr.png';
import flagDE from '@/assets/img/flags/de.png';
import flagIT from '@/assets/img/flags/it.png';
import IconifyIcon from '@/components/IconifyIcon';

type SocialLink = {
  icon: string;
  label: string;
  href: string;
  btnclassName: string;
};

type Country = {
  name: string;
  flag: string;
};

const socialLinks: SocialLink[] = [
  { href: '#', label: 'Facebook', icon: 'bxl-facebook', btnclassName: 'btn-facebook' },
  { href: '#', label: 'LinkedIn', icon: 'bxl-linkedin', btnclassName: 'btn-linkedin' },
  { href: '#', label: 'Telegram', icon: 'bxl-telegram', btnclassName: 'btn-telegram' },
  { href: '#', label: 'YouTube', icon: 'bxl-youtube', btnclassName: 'btn-youtube' },
];

const countries: Country[] = [
  { name: 'USA', flag: flagUS },
  { name: 'France', flag: flagFR },
  { name: 'Germany', flag: flagDE },
  { name: 'Italy', flag: flagIT },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark border-top border-light py-5" data-bs-theme="dark">
      <Container className="pt-2 pt-sm-4">
        <Row>
          <Col md={6} lg={5} xl={4} className="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4 d-flex align-items-center">
              <img src={logo} width={47} alt="Silicon" className="me-2" />
              Silicon
            </div>
            <p className="text-body mb-0">
              Suscipit ipsum tincidunt pellentesque vitae. Porttitor pellentesque enim consequat
              faucibus fermentum duis mollis facilisis pretium justo velit pretium nec ut imperdiet
              volutpat commodo facilisis.
            </p>
          </Col>

          <Col md={6} xxl={5} className="offset-lg-1 offset-xl-2 offset-xxl-3">
            <Row className="row-cols-1 row-cols-sm-2">
              <Col className="pb-2 pb-sm-0 mb-4 mb-sm-0">
                <h3 className="h5 pb-1 pb-sm-2 pb-lg-3">Contact us</h3>
                <Nav className="flex-column mb-3">
                  <NavLink href="tel:4065550120" className="fs-lg fw-normal px-0 py-1">
                    <IconifyIcon icon="bx:phone-call" className="fs-4 me-2" />
                    (406)&nbsp;555&#8209;0120
                  </NavLink>
                  <NavLink href="mailto:email@example.com" className="fs-lg fw-normal px-0 py-1">
                    <IconifyIcon icon="bx:envelope" className="fs-4 me-2" />
                    email@example.com
                  </NavLink>
                </Nav>
                <div className="d-flex pt-2 pt-sm-3 pt-md-4">
                  {socialLinks.map((social, idx) => (
                    <Button
                      key={idx}
                      className={`btn btn-icon btn-sm btn-secondary ${social.btnclassName} rounded-circle me-3`}
                      aria-label={social.label}
                      href={social.href}
                    >
                      <IconifyIcon icon={social.icon} fontSize={20} />
                    </Button>
                  ))}
                </div>
              </Col>

              <Col className="ps-sm-4 ps-md-5">
                <h3 className="h5 pb-1 pb-sm-2 pb-lg-3">Country</h3>
                <Dropdown>
                  <DropdownToggle
                    as="a"
                    className="nav-link fs-lg fw-normal px-0 py-1 d-flex align-items-center"
                    id="dropdown-country"
                  >
                    <img
                      src={countries[0].flag}
                      width={20}
                      alt={countries[0].name}
                      className="me-2"
                    />
                    {countries[0].name}
                  </DropdownToggle>

                  <DropdownMenu className="my-1">
                    {countries.slice(1).map((country, idx) => (
                      <DropdownItem
                        key={idx}
                        href="#"
                        className="fs-base pb-1 d-flex align-items-center"
                      >
                        <img src={country.flag} width={20} alt={country.name} className="me-2" />
                        {country.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>

        <p className="nav d-block fs-sm pt-5 mb-0">
          <span className="text-light opacity-60">&copy; All rights reserved. Made by </span>
          <NavLink
            className="nav-link d-inline-block p-0"
            href="https://coderthemes.com/"
            target="_blank"
            rel="noopener"
          >
            Coderthemes
          </NavLink>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
