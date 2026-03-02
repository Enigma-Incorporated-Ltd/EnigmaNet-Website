import brand02 from '@/assets/img/brands/02.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand07 from '@/assets/img/brands/07.svg';
import layer01 from '@/assets/img/landing/saas-1/hero/layer01.png';
import layer02 from '@/assets/img/landing/saas-1/hero/layer02.png';
import layer03 from '@/assets/img/landing/saas-1/hero/layer03.png';
import layer04 from '@/assets/img/landing/saas-1/hero/layer04.png';
import layer05 from '@/assets/img/landing/saas-1/hero/layer05.png';
import layer06 from '@/assets/img/landing/saas-1/hero/layer06.png';
import layer07 from '@/assets/img/landing/saas-1/hero/layer07.png';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import Parallax from '@/components/Parallax';

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden py-4 mb-3">
      <Container className="pt-lg-3">
        <Row className="flex-lg-nowrap">
          <Col lg={6} xl={5} className="text-center text-lg-start pt-5 mt-xl-4">
            <h1 className="display-4 pt-5 pb-2 pb-lg-3 mt-sm-2 mt-lg-5">
              Task Management Assistant You Gonna Love
            </h1>
            <p className="fs-lg mb-4 mb-lg-5">
              We offer you a new generation of task management system. Plan, manage &amp; track all
              your tasks in one flexible tool.
            </p>
            <Link to="#" className="btn btn-primary btn-lg">
              Get started for free
            </Link>
            <div className="pt-5 mt-xl-5">
              <h6 className="pt-xl-3 pb-3 pb-lg-4">
                Largest companies use our tool to work efficiently
              </h6>
              <div className="d-flex justify-content-center justify-content-lg-start mx-xl-n2">
                <Link to="#" className="d-block me-2">
                  <img src={brand07} width="135" alt="Logo" />
                </Link>
                <Link to="#" className="d-block me-2">
                  <img src={brand04} width="135" alt="Logo" />
                </Link>
                <Link to="#" className="d-block me-2">
                  <img src={brand02} width="135" alt="Logo" />
                </Link>
                <Link to="#" className="d-block me-2">
                  <img src={brand05} width="135" alt="Logo" />
                </Link>
              </div>
            </div>
          </Col>

          <Parallax>
            <div className="parallax mt-4 ms-4 me-lg-0 ms-lg-n5 ms-xl-n3 mt-lg-n4">
              <div className="parallax-layer" data-depth="0.1">
                <img src={layer01} width="1416" alt="Layer" />
              </div>
              <div className="parallax-layer zindex-2" data-depth="0.15">
                <img src={layer02} alt="Layer" />
              </div>
              <div className="parallax-layer zindex-2" data-depth="0.35">
                <img src={layer03} alt="Layer" />
              </div>
              <div className="parallax-layer zindex-2" data-depth="0.25">
                <img src={layer04} alt="Layer" />
              </div>
              <div className="parallax-layer zindex-2" data-depth="0.4">
                <img src={layer05} alt="Layer" />
              </div>
              <div className="parallax-layer zindex-2" data-depth="0.28">
                <img src={layer06} alt="Layer" />
              </div>
              <div className="parallax-layer zindex-2" data-depth="0.35">
                <img src={layer07} alt="Layer" />
              </div>
            </div>
          </Parallax>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
