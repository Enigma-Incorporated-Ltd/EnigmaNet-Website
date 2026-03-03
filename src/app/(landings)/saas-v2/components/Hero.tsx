import layer01 from '@/assets/img/landing/saas-2/hero/layer01.png';
import layer02 from '@/assets/img/landing/saas-2/hero/layer02.png';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import VanillaTilt from 'vanilla-tilt';

const Hero = () => {
  useEffect(() => {
    const tiltElements = document.querySelectorAll<HTMLElement>('.tilt-3d');
    tiltElements.forEach(el => {
      VanillaTilt.init(el, {
        max: 12,
        perspective: 1200,
        'full-page-listening': true,
      });
    });
  }, []);

  return (
    <section className="position-relative overflow-hidden">
      <div className="position-relative bg-dark zindex-4 pt-lg-3 pt-xl-5">
        <Container className="zindex-5 pt-5">
          <Row className="justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
            <Col xl={8} lg={9} md={19} className="py-5">
              <h1 className="display-4 text-light pt-sm-2 pb-1 pb-sm-3 mb-3">
                Task Management Assistant You Gonna Love
              </h1>
              <p className="fs-lg text-light opacity-70 pb-2 pb-sm-0 mb-4 mb-sm-5">
                We offer you a new generation of task and project management system. Plan, manage
                and track all your tasks in one flexible software!
              </p>
              <Link to="#" className="btn btn-primary shadow-primary btn-lg">
                Get early access
              </Link>
            </Col>
          </Row>
        </Container>

        <div
          className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n4 mt-sm-n1"
          style={{ color: 'var(--si-dark)' }}
        >
          <div
            className="position-relative start-50 translate-middle-x flex-shrink-0"
            style={{ width: '3788px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3788"
              height="144"
              viewBox="0 0 3788 144"
            >
              <path
                fill="currentColor"
                d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
              />
            </svg>
          </div>
        </div>

        <div className="d-none d-lg-block" style={{ height: '300px' }}></div>
        <div className="d-none d-md-block d-lg-none" style={{ height: '150px' }}></div>
      </div>

      <div
        className="position-relative zindex-5 mx-auto"
        style={{ maxWidth: '1250px', transform: 'translateZ(-100px)' }}
      >
        <div className="d-none d-lg-block" style={{ marginTop: '-300px' }}></div>
        <div className="d-none d-md-block d-lg-none" style={{ marginTop: '-150px' }}></div>

        <div className="tilt-3d" data-tilt data-tilt-max="12">
          <img src={layer01} alt="Dashboard"  />
          <div className="tilt-3d-inner position-absolute top-0 start-0 w-100 h-100">
            <img src={layer02} alt="Cards"  />
          </div>
        </div>
      </div>

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(255,255,255,.05)' }}
      ></div>
    </section>
  );
};

export default Hero;
