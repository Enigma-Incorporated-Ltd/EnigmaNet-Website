import layer01 from '@/assets/img/landing/app-showcase-2/hero/layer01.png';
import layer02 from '@/assets/img/landing/app-showcase-2/hero/layer02.png';
import layer03 from '@/assets/img/landing/app-showcase-2/hero/layer03.png';
import appstoreLight from '@/assets/img/market/appstore-light.svg';
import appstoreDark from '@/assets/img/market/appstore-dark.svg';
import googlplayDark from '@/assets/img/market/googleplay-dark.svg';
import googlplayLight from '@/assets/img/market/googleplay-light.svg';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import Parallax from '@/components/Parallax';

const Hero = () => {
  return (
    <Container className="py-5 mt-5 mt-md-4 mb-md-3 mb-lg-4 mb-xl-5">
      <Row className="align-items-center align-items-lg-stretch mb-2 mb-sm-3">
        <Col
          xl={7}
          md={6}
          className="d-flex justify-content-center justify-content-md-end overflow-hidden order-md-2 mt-n5 mt-sm-n4 mt-md-0"
        >
          <div className="position-relative mt-5" style={{ maxWidth: '660px' }}>
            <div
              className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 rounded-3 opacity-15"
              style={{ height: '95%' }}
            ></div>
            <Parallax>
              <div className="parallax zindex-2">
                <div className="parallax-layer zindex-2 mb-n3" data-depth="0.1">
                  <img src={layer01} alt="Device" />
                </div>
                <div className="parallax-layer" data-depth="-0.22">
                  <img src={layer02} alt="Bubble" />
                </div>
                <div className="parallax-layer" data-depth="0.3">
                  <img src={layer03} alt="Bubble" />
                </div>
              </div>
            </Parallax>
          </div>
        </Col>

        <Col xl={5} md={6} className="d-flex flex-column order-md-1">
          <div className="text-center text-md-start pt-4 pt-sm-5 pt-xl-0 mt-2 mt-sm-0 mt-lg-auto">
            <h1 className="display-3 mb-4">Buy Trade and Store in One App</h1>
            <p className="fs-lg mb-0 d-md-none d-xl-block">
              Odio venenatis a, non egestas ut ultrices ultrices quis orci ipsum eu tellus tempor
              sed amet mauris pellentesque ut vitae.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start pt-2 mt-4 mt-md-5">
              <Link to="#" className="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
                <img src={appstoreLight} className="light-mode-img" width="124" alt="App Store" />
                <img src={appstoreDark} className="dark-mode-img" width="124" alt="App Store" />
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
          </div>
          <div className="d-sm-flex d-md-none d-lg-flex justify-content-center justify-content-md-start mt-auto pt-3 pt-md-0">
            <div className="d-flex align-items-center w-100 pe-xxl-2 mb-2 mb-md-0">
              <div className="h1 mb-0">23k+</div>
              <div className="ps-2 ms-1">downloads of the application</div>
            </div>
            <div className="vr d-none d-sm-block text-border my-2 mx-4"></div>
            <div className="d-flex align-items-center w-100 ps-xxl-2">
              <div className="h1 mb-0">13b+</div>
              <div className="ps-2 ms-1">trading volume per every day</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
