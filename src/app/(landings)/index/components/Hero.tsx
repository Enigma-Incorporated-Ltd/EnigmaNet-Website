import { useEffect } from 'react';
import hero from '@/assets/img/landing/intro/hero/bg.jpg';
import switcher from '@/assets/img/landing/intro/hero/switcher.svg';
import screenShot1 from '@/assets/img/landing/intro/hero/screens01.png';
import screenShot2 from '@/assets/img/landing/intro/hero/screens02.png';
import screenShot3 from '@/assets/img/landing/intro/hero/screens03.png';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import Rellax from 'rellax';

const Hero = () => {
  useEffect(() => {
    const rellax = new Rellax('.rellax', {
      center: false,
      round: true,
      vertical: true,
      horizontal: false,
    });

    return () => {
      rellax.destroy();
    };
  }, []);

  return (
    <section
      className="vh-100 bg-repeat-0 bg-position-center bg-size-cover overflow-hidden"
      style={{ backgroundImage: `url(${hero})` }}
      data-bs-theme="dark"
    >
      <Container className="vh-100">
        <Row className="flex-nowrap vh-100">
          <Col lg={4} md={5} className="d-flex flex-column text-center text-md-start py-5">
            <h1 className="display-3 mt-auto mb-4">Silicon</h1>
            <p className="lead text-light opacity-70 pb-5 mb-0 mb-md-3">
              Multipurpose Business / <br className="d-none d-md-inline" /> Technology Template
            </p>
            <img
              src={switcher}
              width="212"
              className="d-block mx-auto mx-md-0"
              alt="Light / Dark Mode"
            />
            <div className="position-relative d-flex align-items-center justify-content-center justify-content-md-start mb-md-4 mb-lg-5 mt-auto">
              <div className="btn btn-icon btn-secondary rounded-circle">
                <IconifyIcon icon="bx:chevron-down" fontSize={20} />
              </div>
              <Link
                to="#landings"
                className="nav-link stretched-link text-light fw-normal opacity-80 py-2 px-3"
              >
                View Landings
              </Link>
            </div>
          </Col>

          <div className="d-flex flex-shrink-0 align-items-start">
            <img
              src={screenShot1}
              className="rellax d-block flex-shrink-0 mt-n5"
              width="486"
              height="1390"
              alt="Screens"
              data-rellax-speed="4"
            />
            <img
              src={screenShot2}
              className="rellax d-block flex-shrink-0 mt-5"
              width="486"
              height="1470"
              alt="Screens"
              data-rellax-speed="-4"
            />
            <img
              src={screenShot3}
              className="rellax d-block flex-shrink-0"
              width="486"
              height="1480"
              alt="Screens"
              data-rellax-speed="4"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
