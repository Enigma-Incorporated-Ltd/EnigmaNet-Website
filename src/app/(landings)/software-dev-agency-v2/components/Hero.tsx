
import herobg from '@/assets/img/landing/software-agency-2/hero-bg.png';
import Rating from '@/assets/img/landing/software-agency-2/clutch-rating.png';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

const Hero = () => {
  return (
    <section
      className="jarallax bg-dark min-vh-100"
      data-jarallax
      data-speed="0.4"
      data-bs-theme="dark"
    >
      <span
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            'radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)',
        }}
      ></span>
      <div className="jarallax-img" style={{ backgroundImage: `url(${herobg})` }}></div>
      <div className="min-vh-100 d-flex flex-column py-5">
        <Container className="position-relative text-center zindex-5 pt-4 pt-md-5 pb-5 mt-auto">
          <Row className="mt-5">
            <Col xl={10} className="mx-auto">
              <h1 className="display-1 mb-md-4 pb-3">Software Development Experts</h1>
              <p
                className="text-body mx-auto mb-md-5 mb-4 pb-xl-2 pb-md-0 pb-sm-2 fs-5"
                style={{ maxWidth: '36.5rem' }}
              >
                We are experts with
                <img
                  src={Rating}
                  width="136"
                  alt="Clutch rating"
                  className="d-inline-block mt-n3 ms-1"
                />
                providing the widest range of IT services and solutions for growing your business.
              </p>
              <Link to="#" className="btn btn-lg btn-primary shadow-primary">
                Start your project
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="mt-auto pb-lg-2 pb-xl-3">
          <ul className="list-unstyled d-flex align-items-start justify-content-center flex-wrap text-nowrap mt-xl-0 mt-md-n4 mt-sm-n3 mt-n2 ms-md-n4 ms-n3 mb-0 pt-lg-5 pt-md-4">
            <li className="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
              <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
              Extensive work experience
            </li>
            <li className="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
              <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
              Flexible working conditions
            </li>
            <li className="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
              <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
              Large and friendly team
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
