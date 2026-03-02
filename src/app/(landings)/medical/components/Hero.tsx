import { Row, Col, Container } from 'react-bootstrap';
import heroImg1 from '@/assets/img/landing/medical/hero-img-1.jpg';
import heroImg2 from '@/assets/img/landing/medical/hero-img-2.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="position-relative pt-md-3 pt-lg-5 mb-md-3 mb-lg-5">
      <Container className="position-relative zindex-5 pt-5">
        <Row className="mt-4 pt-5">
          <Col xl={4} lg={5} className="text-center text-lg-start pb-3 pb-md-4 pb-lg-0">
            <h1 className="fs-xl text-uppercase">Professional Medical Center</h1>
            <h3 className="display-4 pb-md-2 pb-lg-4">We Take Care of Your Health</h3>
            <p className="fs-lg">
              Don&apos;t have insurance?{' '}
              <Link to="#" className="fw-medium">
                Click here.
              </Link>
            </p>
          </Col>

          <Col
            xl={{ span: 5, offset: 1 }}
            lg={6}
            className="position-relative zindex-5 mb-5 mb-lg-0"
          >
            <div
              className="rellax card bg-primary border-0 shadow-primary py-2 p-sm-4 p-lg-5"
              data-rellax-speed="-1"
              data-disable-parallax-down="lg"
            >
              <div className="card-body p-lg-3">
                <h2 className="text-light pb-1 pb-md-3">Silicon Medical Center</h2>
                <p className="fs-lg text-light pb-2 pb-md-0 mb-4 mb-md-5">
                  Our medical center provides a wide range of health care services. We use only
                  advanced technologies to keep your family happy and healthy, without any
                  unexpected surprises. We appreciate your trust greatly. Our patients choose us and
                  our services because they know we are the best.
                </p>
                <Link to="#" className="btn btn-light btn-lg">
                  About Us{' '}
                  <IconifyIcon icon="bx:right-arrow-alt" className="lh-1 fs-4 ms-2 me-n2" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <div className="d-none d-lg-block" style={{ marginTop: '-165px' }}></div>

        <Row className="align-items-end">
          <Col lg={6} className="d-none d-lg-block">
            <img
              src={heroImg2}
              alt="Medical Center"
              className="rellax rounded-3"
              data-rellax-speed="1.35"
              data-disable-parallax-down="md"
            />
          </Col>

          <Col
            lg={6}
            className="d-flex flex-column flex-md-row align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center ps-xl-5 mb-4 mb-md-0">
              <div className="btn btn-icon btn-secondary btn-lg pe-none rounded d-lg-none d-xl-inline-flex">
                <IconifyIcon icon="bx:time" className="text-primary fs-3" />
              </div>
              <ul className="list-unstyled ps-3 ps-lg-0 ps-xl-3 mb-0">
                <li>
                  <strong className="text-dark">Mon – Fri:</strong> 9:00 am – 22:00 pm
                </li>
                <li>
                  <strong className="text-dark">Sat – Sun:</strong> 9:00 am – 20:00 pm
                </li>
              </ul>
            </div>
            <Link to="#" className="btn btn-primary btn-lg shadow-primary">
              Make an appointment
            </Link>
          </Col>
        </Row>
      </Container>

      <div
        className="d-none d-lg-block position-absolute top-0 end-0 w-50 d-flex flex-column ps-3"
        style={{ height: 'calc(100% - 108px)' }}
      >
        <div
          className="w-100 h-100 overflow-hidden bg-position-center bg-repeat-0 bg-size-cover"
          style={{
            backgroundImage: `url(${heroImg1})`,
            borderBottomLeftRadius: '.5rem',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
