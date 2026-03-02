import heroBg from '@/assets/img/landing/saas-3/hero/hero-bg.jpg';
import { Link } from 'react-router';
import avatar14 from '@/assets/img/avatar/14.jpg';
import avatar08 from '@/assets/img/avatar/08.jpg';
import avatar15 from '@/assets/img/avatar/15.jpg';
import layer01 from '@/assets/img/landing/saas-3/hero/layer01.png';
import layer02 from '@/assets/img/landing/saas-3/hero/layer02.png';
import layer03 from '@/assets/img/landing/saas-3/hero/layer03.png';

import { Col, Container, Row } from 'react-bootstrap';
import Parallax from '@/components/Parallax';

const Hero = () => {
  return (
    <section
      className="bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4"
      style={{ backgroundImage: `url(${heroBg})` }}
      data-bs-theme="dark"
    >
      <Container className="position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5">
        <Row className="pt-3 pb-2 py-md-4">
          <Col xl={5} md={6} className="pt-lg-5 text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-3 pb-2 pb-sm-3">Make Your Life Even Easier with Crypto Bank</h1>
            <p className="text-body fs-lg d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5">
              Odio venenatis a, non egestas ut ultrices ultrices quis orci ipsum eu tellus tempor
              sed amet mauris pellentesque ut vitae.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start pb-2 pt-lg-2 pt-xl-0">
              <Link to="#" className="btn btn-lg btn-primary shadow-primary me-3 me-sm-4">
                Start trial now
              </Link>
              <Link to="#" className="btn btn-lg btn-outline-secondary">
                Contact us
              </Link>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start text-start pt-4 pt-lg-5 mt-xxl-5">
              <div className="d-flex me-3">
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img src={avatar14} className="rounded-circle" width="48" alt="Avatar" />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img src={avatar08} className="rounded-circle" width="48" alt="Avatar" />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img src={avatar15} className="rounded-circle" width="48" alt="Avatar" />
                </div>
              </div>
              <div className="text-light">
                <strong>400k+</strong> users already with us
              </div>
            </div>
          </Col>

          <Col xl={7} md={6} className="d-md-flex justify-content-end">
            <Parallax>
              <div className="parallax mx-auto ms-md-0 me-md-n5" style={{ maxWidth: '675px' }}>
                <div className="parallax-layer zindex-2" data-depth="0.1">
                  <img src={layer01} alt="Card" />
                </div>
                <div className="parallax-layer zindex-3" data-depth="0.25">
                  <img src={layer02} alt="Bubble" />
                </div>
                <div className="parallax-layer" data-depth="-0.15">
                  <img src={layer03} alt="Bubble" />
                </div>
              </div>
            </Parallax>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
