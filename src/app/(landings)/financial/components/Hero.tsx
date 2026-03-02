import finacial from '@/assets/img/landing/financial/hero-img.jpg';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import Jarallax from '@/components/Jarallax';

const Hero = () => {
  return (
    <section className="pt-lg-4 mt-lg-3">
      <div className="position-relative overflow-hidden">
        <Container fluid className="position-relative position-lg-absolute top-0 start-0 h-100">
          <Row className="h-100 me-n4 me-n2">
            <Col lg={7} className="position-relative">
              <div className="d-none d-sm-block d-lg-none" style={{ height: '400px' }}></div>
              <div className="d-sm-none" style={{ height: '300px' }}></div>

              <Jarallax
                speed={0.3}
                className="position-absolute top-0 start-0 w-100 h-100 rounded-3 rounded-start-0 overflow-hidden"
              >
                <div className="jarallax-img" style={{ backgroundImage: `url(${finacial})` }} />
              </Jarallax>
            </Col>
          </Row>
        </Container>

        <Container className="position-relative zindex-5 pt-lg-5 px-0 px-lg-3">
          <Row className="pt-lg-5 mx-n4 mx-lg-n3">
            <Col xl={6} lg={7} className="offset-lg-5 offset-xl-6 pb-5">
              <Card className="bg-dark border-light overflow-hidden py-4 px-2 p-sm-4">
                <span
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{ backgroundColor: 'rgba(255,255,255,.05)' }}
                ></span>
                <CardBody className="position-relative zindex-5">
                  <p className="fs-xl fw-bold text-primary text-uppercase mb-3">
                    Power your business
                  </p>
                  <h1 className="display-5 text-light pb-3 mb-3">Clever Financial Consulting</h1>
                  <p className="fs-lg text-light opacity-70 mb-5">
                    Helping our clients meet their financial needs for more than 10 years. We offer
                    you the full spectrum of global financial services.
                  </p>
                  <div className="d-flex flex-column flex-sm-row">
                    <Link
                      to="#"
                      className="btn btn-primary shadow-primary btn-lg mb-3 mb-sm-0 me-sm-4"
                    >
                      Get started
                    </Link>
                    <Link to="#" className="btn btn-outline-light btn-lg">
                      Who we are
                      <IconifyIcon icon="bx:right-arrow-alt" className="fs-4 lh-1 ms-2 me-n1" />
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xxl={3} lg={4} className="offset-lg-8 offset-xxl-9 pt-lg-5 mt-xxl-5">
              <ul className="list-unstyled mb-0 px-4 px-lg-0">
                <li className="d-flex align-items-center pb-1 mb-2">
                  <IconifyIcon icon="bx:map" className="fs-xl text-primary me-2" />
                  6391 Elgin St. Celina, Delaware 10299
                </li>
                <li className="d-flex align-items-center pb-1 mb-2">
                  <IconifyIcon icon="bx:envelope" className="fs-xl text-primary me-2" />
                  <Link to="mailto:email@example.com" className="nav-link fw-normal p-0">
                    email@example.com
                  </Link>
                </li>
                <li className="d-flex align-items-center pb-1 mb-2">
                  <IconifyIcon icon="bx:phone-call" className="fs-xl text-primary me-2" />
                  <Link to="tel:4065550120" className="nav-link fw-normal p-0">
                    (406)&nbsp;555&#8209;0120
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
