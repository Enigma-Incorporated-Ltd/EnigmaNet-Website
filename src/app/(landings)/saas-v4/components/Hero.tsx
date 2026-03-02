import heroBg from '@/assets/img/landing/saas-4/hero-bg.png';
import heroImg from '@/assets/img/landing/saas-4/hero-img.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="position-relative pt-5 overflow-hidden">
      <span className="position-absolute top-0 start-0 d-dark-mode-none d-block w-100 h-100 bg-secondary"></span>

      <span
        className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100"
        style={{
          background:
            'radial-gradient(84.79% 172.9% at 73.31% 31.4%, rgba(99, 135, 241, .1) 0%, rgba(218, 70, 239, .05) 52.47%, rgba(99, 135, 241, .1) 100%)',
        }}
      >
        <span
          className="d-block w-100 h-100 bg-position-center bg-size-cover bg-repeat-0"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        ></span>
      </span>

      <Container className="position-relative mt-5 pt-xl-5 pt-md-3 zindex-5">
        <Row className="justify-content-md-start justify-content-center flex-md-nowrap pt-lg-5 pt-4">
          <Col
            xl={5}
            md={6}
            sm={10}
            className="d-flex flex-column justify-content-between mb-md-5 mb-md-4 mb-3 pb-xl-5 pb-lg-4"
          >
            <div className="text-md-start text-center">
              <h1 className="display-4 mb-lg-4 mb-3">Keep your finances even more easily.</h1>
              <p
                className="mb-4 mx-md-0 mx-auto pb-xl-3 pb-lg-2 fs-lg"
                style={{ maxWidth: '30.5rem' }}
              >
                Here you can manage and monitor your finances much more conveniently with the help
                of the new application that we have created.
              </p>
              <Link to="#" className="btn btn-lg btn-primary">
                Digitize Now
              </Link>
            </div>

            <ul
              className="list-unstyled row row-cols-2 gy-sm-2 gy-1 gx-sm-4 gx-2 mt-lg-5 mt-4 mx-md-0 mx-auto pt-lg-0 pt-md-2 mb-md-5 mb-4 pb-xl-4 pb-lg-3 pb-md-2 pb-sm-0 pb-2 text-nowrap"
              style={{ maxWidth: '23.625rem' }}
            >
              <li className="col d-flex align-items-start">
                <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
                Public economy
              </li>
              <li className="col d-flex align-items-start">
                <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
                Corporate finance
              </li>
              <li className="col d-flex align-items-start">
                <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
                Financial planning
              </li>
              <li className="col d-flex align-items-start">
                <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
                Project finance
              </li>
            </ul>
          </Col>

          <Col md={12} className="offset-xl-1 d-flex mt-lg-4 mb-4">
            <div
              className="align-self-end ms-xl-0 ms-md-4 p-lg-4 p-sm-3 p-2 rounded-4 overflow-hidden"
              style={{
                background:
                  'linear-gradient(153.32deg, rgba(255, 255, 255, .3) -65.62%, rgba(255, 255, 255, .1) 83.28%)',
                boxShadow: '0 .25rem 1.5rem -.0625rem rgba(0, 0, 0, .2)',
                backdropFilter: 'blur(25px)',
              }}
            >
              <img
                src={heroImg}
                width={1122}
                alt="Layer"
                className="rounded-4"
                style={{
                  boxShadow: '0 0 7.5rem rgba(0, 0, 0, .1)',
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <span className="position-absolute bottom-0 start-0 w-100">
        <span className="d-dark-mode-none d-block w-100 h-100 py-xl-5 pt-lg-4 pt-md-0 pt-4 pb-5 bg-light"></span>
        <span className="d-dark-mode-block d-none w-100 h-100 py-xl-5 pt-lg-4 pt-md-0 pt-4 pb-5 bg-dark"></span>
      </span>
    </section>
  );
};

export default Hero;
