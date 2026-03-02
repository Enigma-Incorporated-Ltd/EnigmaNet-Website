import layer01 from '@/assets/img/landing/app-showcase-3/hero/layer01.png';
import layer02 from '@/assets/img/landing/app-showcase-3/hero/layer02.png';
import layer03 from '@/assets/img/landing/app-showcase-3/hero/layer03.png';
import layer04 from '@/assets/img/landing/app-showcase-3/hero/layer04.png';
import layer05 from '@/assets/img/landing/app-showcase-3/hero/layer05.png';
import layer06 from '@/assets/img/landing/app-showcase-3/hero/layer06.png';
import appstoreLight from '@/assets/img/market/appstore-light.svg';
import appstoreDark from '@/assets/img/market/appstore-dark.svg';
import googleLight from '@/assets/img/market/googleplay-light.svg';
import googleDark from '@/assets/img/market/googleplay-dark.svg';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import Parallax from '@/components/Parallax';

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden zindex-2 pt-4 pt-md-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Parallax>
            <Col xl={6} lg={7} md={6} sm={8} xs={10} className="offset-xl-1 order-md-2">
              <div className="parallax mx-auto" style={{ maxWidth: '556px' }}>
                <div className="parallax-layer" data-depth="0.1">
                  <img src={layer01} alt="Bubble" />
                </div>
                <div className="parallax-layer" data-depth="-0.2">
                  <img src={layer02} alt="Bubble" />
                </div>
                <div className="parallax-layer" data-depth="-0.3">
                  <img src={layer03} alt="Bubble" />
                </div>
                <div className="parallax-layer" data-depth="0.4">
                  <img src={layer04} alt="Bubble" />
                </div>
                <div className="parallax-layer" data-depth="-0.1">
                  <img src={layer05} alt="Screen" />
                </div>
                <div className="parallax-layer" data-depth="0.2">
                  <img src={layer06} alt="Screen" />
                </div>
              </div>
            </Col>
          </Parallax>

          <Col lg={5} md={6} className="text-center text-md-start order-md-1">
            <h1 className="display-5 mb-lg-4">Manage your money in one application</h1>
            <p className="fs-xl pb-3 pb-lg-0 mb-4 mb-lg-5">
              We offer you a new generation of the mobile banking. Save, spend, and manage your
              money on the go.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
              <Link to="#" className="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
                <img src={appstoreLight} className="light-mode-img" width="124" alt="App Store" />
                <img src={appstoreDark} className="dark-mode-img" width="124" alt="App Store" />
              </Link>
              <Link to="#" className="btn btn-dark btn-lg px-3 py-2 mb-sm-3">
                <img src={googleLight} className="light-mode-img" width="139" alt="Google Play" />
                <img src={googleDark} className="dark-mode-img" width="139" alt="Google Play" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
