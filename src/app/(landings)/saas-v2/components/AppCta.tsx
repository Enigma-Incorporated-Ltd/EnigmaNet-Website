import device from '@/assets/img/landing/saas-2/device.png';
import screen from '@/assets/img/landing/saas-2/screen.png';
import AppStoredark from '@/assets/img/market/appstore-dark.svg';
import AppStoreLight from '@/assets/img/market/appstore-light.svg';
import googleLight from '@/assets/img/market/googleplay-light.svg';
import googleDark from '@/assets/img/market/googleplay-dark.svg';

import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const AppCta = () => {
  return (
    <Container>
      <div className="bg-secondary rounded-3 overflow-hidden py-5 px-4 ps-lg-0 pe-md-5 pe-lg-0">
        <Row className="align-items-center py-sm-2">
          <Col md={7} lg={6} className="offset-xl-1">
            <div className="position-relative mx-auto mb-5 m-md-0" style={{ maxWidth: '526px' }}>
              <img src={device} className="d-block" alt="Device" />
              <div
                className="rellax d-block position-absolute top-0 end-0 w-100 mt-md-4 me-md-n5"
                data-rellax-percentage="0.5"
                data-rellax-vertical-scroll-axis="xy"
                data-rellax-horizontal-speed="0.6"
                data-rellax-vertical-speed="-0.6"
                data-disable-parallax-down="md"
              >
                <img src={screen} alt="App Screen" />
              </div>
            </div>
          </Col>

          <Col xl={4} md={5} className="mt-n2 mt-md-0">
            <h2 className="h1 text-center text-md-start mb-4 mb-lg-5">
              Download Our App for Any Devices:
            </h2>
            <Row>
              <Col sm={6} md={12} className="pb-4 pb-sm-0">
                <Row className="row-cols-1 row-cols-lg-2 align-items-end text-center text-md-start pb-md-4 mb-lg-3">
                  <Col className="mb-3 mb-lg-0">
                    <p className="text-muted mb-1">App Store</p>
                    <div className="text-nowrap fs-sm pb-lg-1 mb-2">
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                    </div>
                    <h3 className="h4 mb-1">Editor's Choice</h3>
                    <p className="mb-0">rating 4.7, 187K+ reviews</p>
                  </Col>
                  <Col className="d-lg-flex justify-content-end">
                    <Link to="#" className="btn btn-dark btn-lg px-3 py-2">
                      <img
                        src={AppStoreLight}
                        className="light-mode-img"
                        width="124"
                        alt="App Store"
                      />
                      <img
                        src={AppStoredark}
                        className="dark-mode-img"
                        width="124"
                        alt="App Store"
                      />
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col sm={6} md={12}>
                <Row className="row-cols-1 row-cols-lg-2 align-items-end text-center text-md-start">
                  <Col className="mb-3 mb-lg-0">
                    <p className="text-muted mb-1">Google Play</p>
                    <div className="text-nowrap fs-sm pb-lg-1 mb-2">
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                    </div>
                    <h3 className="h4 mb-1">App of the Day</h3>
                    <p className="mb-0">rating 4.8, 30K+ reviews</p>
                  </Col>
                  <Col className="d-lg-flex justify-content-end">
                    <Link to="#" className="btn btn-dark btn-lg px-3 py-2">
                      <img
                        src={googleLight}
                        className="light-mode-img"
                        width="139"
                        alt="Google Play"
                      />
                      <img
                        src={googleDark}
                        className="dark-mode-img"
                        width="139"
                        alt="Google Play"
                      />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppCta;
