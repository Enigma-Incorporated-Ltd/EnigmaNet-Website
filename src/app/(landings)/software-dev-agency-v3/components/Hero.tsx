import { Container, Row, Col, Button } from 'react-bootstrap';
import clutchRating from '@/assets/img/landing/software-agency-3/clutch-rating.png';
import heroBg from '@/assets/img/landing/software-agency-3/hero-bg.png';

const Hero = () => {
  return (
    <section className="position-relative d-flex align-items-center min-vh-100 py-5 bg-dark overflow-hidden">
      <span className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75"></span>
      <Container
        className="position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3"
        data-bs-theme="dark"
      >
        <Row className="gy-5">
          <Col xl={5} lg={6}>
            <div className="position-relative zindex-5 text-lg-start text-center">
              <h1 className="display-2 mb-4 pb-lg-3 pb-md-2">
                Top <span className="text-primary">software</span> engineering company
              </h1>
              <p className="mb-4 pb-lg-3 pb-md-2 d-flex align-items-center justify-content-center justify-content-lg-start">
                <span className="me-2 text-light">We are the Top Rated agency on</span>
                <img src={clutchRating} width={193} alt="Clutch rating" className="mt-n1" />
              </p>
              <Button size="lg" variant="primary">
                Start your project
              </Button>
            </div>
          </Col>

          <Col lg={6} xl={{ span: 6, offset: 1 }}>
            <div className="position-relative ms-xl-0 ms-lg-4">
              <div
                className="position-absolute top-50 start-50 translate-middle ratio ratio-1x1"
                style={{ width: '125%', maxWidth: '49.75rem' }}
              >
                <div className="p-md-0 p-5">
                  <img src={heroBg} alt="Shape" className="hero-animation-spin p-md-0 p-5" />
                </div>
              </div>

              <Row className="position-relative row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
                <Col>
                  <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                    <div
                      className="d-flex align-items-center justify-content-center bg-secondary rounded-3"
                      style={{ minHeight: '176px', backdropFilter: 'blur(6px)' }}
                    >
                      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade text-white">I need AI engineers</span>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center bg-secondary rounded-3"
                      style={{ minHeight: '176px', backdropFilter: 'blur(6px)' }}
                    >
                      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade hero-animation-delay-2 text-white">
                          We are looking for Shopify Experts
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col className="mt-sm-5 mt-2 pt-sm-5">
                  <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                    <div
                      className="d-flex align-items-center justify-content-center bg-secondary rounded-3"
                      style={{ minHeight: '176px', backdropFilter: 'blur(6px)' }}
                    >
                      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade hero-animation-delay-1 text-white">
                          I need MVP for startup
                        </span>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-center bg-secondary rounded-3"
                      style={{ minHeight: '176px', backdropFilter: 'blur(6px)' }}
                    >
                      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade hero-animation-delay-3 text-white">
                          I need web development
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
