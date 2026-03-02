import hero05 from '@/assets/img/about/hero/05.jpg';
import hero06 from '@/assets/img/about/hero/06.jpg';
import hero07 from '@/assets/img/about/hero/07.jpg';
import IconifyIcon from '@/components/IconifyIcon';

import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="position-relative pt-5 mb-5" style={{ backgroundColor: '#151922' }}>
      <span
        className="d-dark-mode-none d-block position-absolute start-0 bottom-0 w-100 bg-white"
        style={{ height: '19.875vw' }}
      ></span>
      <span
        className="d-dark-mode-block d-none position-absolute start-0 bottom-0 w-100 bg-light"
        style={{ height: '19.875vw' }}
      ></span>
      <div className="container position-relative zindex-2 pt-5" data-bs-theme="dark">
        <nav className="pt-lg-4" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/index">
                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
                Home
              </Link>
            </li>
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item active" aria-current="page">
              About v.3
            </li>
          </ol>
        </nav>

        <div className="mt-4 mb-lg-5 mb-4 py-3">
          <h1 className="display-4 mb-0">We are Silicon Team</h1>
        </div>

        <Row className="g-md-4 g-3">
          <Col md={6}>
            <img src={hero05} alt="Hero image" className="rounded-3" />
          </Col>
          <Col md={3} xs={6} className="d-md-block d-none mt-5 pt-3 pt-xl-4">
            <img src={hero06} alt="Hero image" className="rounded-3" />
          </Col>
          <div className="col-md-3 col-6 d-md-block d-none">
            <img src={hero07} alt="Hero image" className="rounded-3" />
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
