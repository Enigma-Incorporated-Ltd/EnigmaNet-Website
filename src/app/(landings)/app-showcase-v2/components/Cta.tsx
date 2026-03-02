import appStore from '@/assets/img/market/appstore-light.svg';
import appStoreDark from '@/assets/img/market/appstore-dark.svg';
import googleplayLight from '@/assets/img/market/googleplay-light.svg';
import googleplayDark from '@/assets/img/market/googleplay-dark.svg';
import showCase from '@/assets/img/landing/app-showcase-2/devices.png';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const Cta = () => {
  return (
    <section className="bg-secondary pt-lg-4 pt-xl-5 overflow-hidden">
      <Container className="pt-5">
        <Row className="pt-2 pt-sm-3 pt-md-4">
          <Col
            md={6}
            xl={5}
            xxl={4}
            className="text-center text-md-start pb-4 pb-sm-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5"
          >
            <h2 className="h1 mb-5">Download Our App for Any Devices:</h2>
            <div className="d-flex d-md-block mt-n2 mt-sm-0">
              <Row className="row-cols-1 row-cols-lg-2 align-items-lg-end me-1 me-md-0 pb-md-4 mb-md-3">
                <Col>
                  <h3 className="fs-base fw-normal opacity-60 mb-2">App Store</h3>
                  <div className="text-nowrap text-warning pb-1 mb-2">
                    <IconifyIcon icon="bxs:star" />
                    <IconifyIcon icon="bxs:star" />
                    <IconifyIcon icon="bxs:star" />
                    <IconifyIcon icon="bxs:star" />
                    <IconifyIcon icon="bxs:star" />
                  </div>
                  <h4 className="mb-1">Editor's Choice</h4>
                  <p className="mb-0">rating 4.7, 187K+ reviews</p>
                </Col>
                <Col className="d-xl-flex justify-content-end">
                  <Link
                    to="#"
                    className="btn btn-dark btn-lg w-xl-100 px-3 py-2 ms-xl-3 mt-3 mt-lg-0"
                  >
                    <img src={appStore} className="light-mode-img" width="124" alt="App Store" />
                    <img
                      src={appStoreDark}
                      className="dark-mode-img"
                      width="124"
                      alt="App Store"
                    />
                  </Link>
                </Col>
              </Row>
              <Row className="row-cols-1 row-cols-lg-2 align-items-lg-end">
                <Col>
                  <h3 className="fs-base fw-normal opacity-60 mb-2">Google Play</h3>
                  <div className="text-nowrap text-warning pb-1 mb-2">
                    <IconifyIcon icon="bxs:star" />
                    <IconifyIcon icon="bxs:star" />
                    <IconifyIcon icon="bxs:star" />
                    <IconifyIcon icon="bxs:star" />
                    <IconifyIcon icon="bxs:star" />
                  </div>
                  <h4 className="mb-1">App of the Day</h4>
                  <p className="mb-0">rating 4.8, 30K+ reviews</p>
                </Col>
                <Col className="d-xl-flex justify-content-end">
                  <Link
                    to="#"
                    className="btn btn-dark btn-lg w-xl-100 px-3 py-2 ms-xl-3 mt-3 mt-lg-0"
                  >
                    <img
                      src={googleplayLight}
                      className="light-mode-img"
                      width="139"
                      alt="Google Play"
                    />
                    <img
                      src={googleplayDark}
                      className="dark-mode-img"
                      width="139"
                      alt="Google Play"
                    />
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6} xl={7} xxl={8}>
            <img src={showCase} width="618" className="rellax d-block mx-auto" alt="Devices" />
            <div className="d-none d-xl-block" style={{ marginBottom: '-450px' }}></div>
            <div className="d-none d-lg-block d-xl-none" style={{ marginBottom: '-800px' }}></div>
            <div className="d-none d-sm-block d-lg-none" style={{ marginBottom: '-400px' }}></div>
            <div className="d-sm-none" style={{ marginBottom: '-240px' }}></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cta;
