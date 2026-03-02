import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from '@/assets/json/animation-digital-agency.json';
import heroBg from '@/assets/img/landing/digital-agency/hero-bg.svg';
import GlightBox from '@/components/GlightBox';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section
      className="jarallax position-relative d-flex align-items-center min-vh-100 bg-light mb-5 py-lg-5 pt-5"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: '0% 100%',
      }}
      data-jarallax
      data-speed="0.5"
    >
      <Container className="position-relative zindex-5 py-5">
        <Row className="justify-content-md-start justify-content-center">
          <Col
            md={6}
            sm={8}
            className="order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center"
          >
            <div className="mb-md-5 pb-xl-5 mb-4">
              <div className="d-inline-flex align-items-center position-relative mb-3">
                <GlightBox
                  href="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
                  className="btn btn-video btn-icon btn-lg flex-shrink-0 me-3 stretched-link"
                  data-bs-toggle="video"
                  aria-label="Play video"
                >
                  <IconifyIcon icon="bx:play" fontSize={20} />
                </GlightBox>
                <h4 className="mb-0">Digital Agency Promo</h4>
              </div>

              <h1 className="display-2 mb-md-5 mb-3 pb-3">
                We <span className="text-gradient-primary">Transform</span> Your Ideas into Reality
              </h1>
              <div className="d-md-flex align-items-md-start">
                <Link
                  to="/contacts-v1"
                  className="btn btn-lg btn-primary flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3"
                >
                  Work with us
                </Link>
                <p className="d-lg-block d-none mb-0 ps-md-3">
                  Silicon is a leading full-service digital agency based in New York. We make mobile
                  apps, websites &amp; brands, that people appreciate all around the world.
                </p>
              </div>
            </div>

            <div className="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative">
              <Link
                to="#benefits"
                data-scroll
                data-scroll-offset="100"
                className="btn btn-video btn-icon rounded-circle shadow-sm flex-shrink-0 stretched-link me-3"
                aria-label="Scroll for more"
              >
                <IconifyIcon icon="bx:chevron-down" fontSize={20} />
              </Link>
              <span className="fs-sm">Discover more</span>
            </div>
          </Col>

          <Col sm={6} xs={9} className="order-md-2 order-1 text-center">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
