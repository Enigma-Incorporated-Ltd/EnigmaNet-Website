import AppStoreLight from '@/assets/img/market/appstore-light.svg';
import AppStoreDark from '@/assets/img/market/appstore-dark.svg';
import googlplayDark from '@/assets/img/market/googleplay-dark.svg';
import googlplayLight from '@/assets/img/market/googleplay-light.svg';
import phone1 from '@/assets/img/landing/app-showcase-1/hero-phone-1.png';
import phone2 from '@/assets/img/landing/app-showcase-1/hero-phone-2.png';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <section
      className="overflow-hidden pt-5"
      style={{
        background:
          'radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)',
      }}
    >
      <Container className="pt-3 pt-sm-4 pt-xl-5">
        <Row className="pt-md-2 pt-lg-5">
          <Col md={5} className="d-flex flex-column mt-md-4 pt-5 pb-3 pb-sm-4 py-md-5">
            <h1 className="display-4 text-center text-md-start mb-4">
              Manage All Your Money in One App
            </h1>
            <p className="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4 mb-lg-5">
              We offer you a new generation of the mobile banking.
              <br />
              Save, spend &amp; manage money in your pocket.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
              <Link to="#" className="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
                <img src={AppStoreLight} className="light-mode-img" width="124" alt="App Store" />
                <img src={AppStoreDark} className="dark-mode-img" width="124" alt="App Store" />
              </Link>
              <Link to="#" className="btn btn-dark btn-lg px-3 py-2 mb-3">
                <img
                  src={googlplayLight}
                  className="light-mode-img"
                  width="139"
                  alt="Google Play"
                />
                <img
                  src={googlplayDark}
                  className="dark-mode-img"
                  width="139"
                  alt="Google Play"
                />
              </Link>
            </div>
            <div className="position-relative d-inline-flex align-items-center justify-content-center justify-content-md-start mt-auto pt-3 pt-md-4 pb-xl-2">
              <Link
                to="#features"
                className="btn btn-icon btn-light bg-white stretched-link rounded-circle me-3"
                data-scroll
                data-scroll-offset="120"
                aria-label="Scroll for more"
              >
                <IconifyIcon icon="bx:chevron-down" fontSize={20} />
              </Link>
              <span className="fs-sm">Discover more</span>
            </div>
          </Col>
          <Col md={7} className="align-self-end">
            <div
              className="position-relative overflow-hidden mt-4 pb-3 pt-4 mx-auto me-md-0"
              style={{ maxWidth: '632px' }}
            >
              <div className="ratio ratio-1x1"></div>
              <img
                src={phone1}
                className="rellax position-absolute top-0 start-0 zindex-2"
                data-rellax-speed="1.6"
                data-disable-parallax-down="md"
                alt="Phone"
              />
              <img
                src={phone2}
                className="rellax position-absolute top-0 start-0"
                data-rellax-speed="2.8"
                data-disable-parallax-down="md"
                alt="Phone"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
