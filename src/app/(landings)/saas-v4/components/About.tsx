import about01 from '@/assets/img/landing/saas-4/about/01.png';
import about02 from '@/assets/img/landing/saas-4/about/02.png';
import about03 from '@/assets/img/landing/saas-4/about/03.png';

import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

const About = () => {
  return (
    <Container className="my-5 pt-xl-5 pt-lg-4 pt-md-3 pb-lg-5 pb-md-4 pb-3">
      <h2 className="h1 mt-xl-3 mb-4 pb-3 text-center">Why Silicon App?</h2>
      <TabContainer defaultActiveKey="#economic-analysis">
        <Nav
          className="nav nav-tabs flex-nowrap justify-content-sm-center overflow-auto mb-lg-4 mb-3 pb-md-3 pb-2 text-nowrap"
          role="tablist"
        >
          <NavItem>
            <NavLink
              eventKey="#economic-analysis"
              className="nav-link"
              data-bs-toggle="tab"
              role="tab"
            >
              <IconifyIcon icon="bx:star" className="opacity-60 me-2 fs-lg" />
              Economic Analysis
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="#investments" data-bs-toggle="tab" role="tab">
              <IconifyIcon icon="bx:briefcase-alt-2" className="opacity-60 me-2 fs-lg" />
              Investments
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              eventKey="#corporate-finance"
              className="nav-link"
              data-bs-toggle="tab"
              role="tab"
            >
              <IconifyIcon icon="bx:bar-chart-alt-2" className="opacity-60 me-2 fs-lg" />
              Corporate Finance
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent className="mb-xl-3 py-4 bg-secondary rounded-3">
          <TabPane className="fade show" eventKey="#economic-analysis" role="tabpanel">
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="h2 mb-lg-4 mb-3">Economic Analysis</h3>
                <p className="mb-4 pb-lg-3">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters
                </p>
                <Link to="#" className="btn btn-primary">
                  Learn more
                </Link>
              </Col>
              <Col lg={6} md={7} className="mt-4 pt-md-0 pt-2">
                <img
                  src={about01}
                  className="d-block my-lg-2 mx-auto me-md-0"
                  width="595"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane className="fade" eventKey="#investments" role="tabpanel">
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={5} md={6} className="offset-lg-1 text-center text-md-start">
                <h3 className="h2 mb-lg-4 mb-3">Investments</h3>
                <div className="d-sm-flex mb-4 pb-lg-3 text-sm-start">
                  <p className="w-100 mb-sm-0">
                    It is a long established fact that a reader will be distracted by the readable
                    content.
                  </p>
                  <span className="d-sm-block d-none w-1 mx-4">
                    <span className="d-dark-mode-none d-block w-100 h-100 bg-black opacity-25"></span>
                    <span className="d-dark-mode-block d-none w-100 h-100 bg-white opacity-25"></span>
                  </span>
                  <p className="w-100 mb-sm-0">
                    Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio
                  </p>
                </div>
                <Link to="#" className="btn btn-primary">
                  Learn more
                </Link>
              </Col>
              <Col lg={5} md={6} className="mt-4 pt-md-0 pt-2">
                <img
                  src={about02}
                  className="d-block my-lg-2 mx-auto me-md-0 rounded-3"
                  width="595"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane className="fade" eventKey="#corporate-finance" role="tabpanel">
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="h2 mb-lg-4 mb-3">Corporate Finance</h3>
                <ul className="list-unstyled mb-4 pb-lg-3">
                  <li className="d-flex justify-content-md-start justify-content-center mt-2">
                    <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
                    Transparent work management
                  </li>
                  <li className="d-flex justify-content-md-start justify-content-center mt-2">
                    <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
                    Track your progress with interactive charts
                  </li>
                  <li className="d-flex justify-content-md-start justify-content-center mt-2">
                    <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
                    Easiest way to track time spent on tasks
                  </li>
                </ul>
                <Link to="#" className="btn btn-primary">
                  Learn more
                </Link>
              </Col>
              <Col lg={6} md={7} className="mt-4 pt-md-0 pt-2">
                <img
                  src={about03}
                  className="d-block my-lg-2 mx-auto me-md-0 rounded-3"
                  width="595"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default About;
