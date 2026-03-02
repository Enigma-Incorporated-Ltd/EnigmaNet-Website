import screen01 from '@/assets/img/landing/app-showcase-1/features/screen01.png';
import screen02 from '@/assets/img/landing/app-showcase-1/features/screen02.png';
import screen03 from '@/assets/img/landing/app-showcase-1/features/screen03.png';
import screen04 from '@/assets/img/landing/app-showcase-1/features/screen04.png';
import payment from '@/assets/img/landing/app-showcase-1/features/payments.svg';
import cashback from '@/assets/img/landing/app-showcase-1/features/cashback.svg';

import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Fetures = () => {
  return (
    <Container className="pt-5 pb-2 pb-md-3 py-lg-5">
      <Row className="align-items-center my-3 py-md-3 py-lg-5">
        <Col md={6} xl={5} className="offset-lg-1 offset-xl-2 order-md-2 mb-2 mb-md-0 pb-4 pb-md-0">
          <div className="position-relative mx-auto mx-md-0" style={{ maxWidth: '469px' }}>
            <img
              src={screen01}
              className="rellax d-block"
              alt="Screen"
              data-rellax-percentage="0.5"
              data-rellax-speed="-0.5"
              data-disable-parallax-down="md"
            />
            <div
              className="rellax position-absolute top-0 end-0 w-100 h-100"
              data-rellax-percentage="0.5"
              data-rellax-speed="0.75"
              data-disable-parallax-down="md"
            >
              <img src={screen02} alt="Screen" />
            </div>
          </div>
        </Col>
        <Col md={6} lg={5} xl={4} className="offset-xl-1 order-md-1 pb-md-4">
          <h2 className="pb-3">Make your money transfer simple and clear</h2>
          <ul className="list-unstyled pb-3 mb-3">
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check-circle" className="fs-xl text-primary me-2" />
              Banking transactions are free for you
            </li>
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check-circle" className="fs-xl text-primary me-2" />
              No monthly cash commission
            </li>
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check-circle" className="fs-xl text-primary me-2" />
              Manage payments and transactions online
            </li>
          </ul>
          <Link to="#" className="btn btn-primary">
            Learn more
            <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2 me-n1" />
          </Link>
        </Col>
      </Row>
      <Row className="align-items-center mt-2 mt-md-0 pt-5 pt-md-4 pt-lg-0 pb-md-3 pb-lg-5">
        <Col md={6} lg={5} className="offset-xl-1 mb-2 mb-md-0 pb-4 pb-md-0">
          <div className="position-relative mx-auto mx-md-0" style={{ maxWidth: '462px' }}>
            <img
              src={screen03}
              className="rellax d-block"
              alt="Screen"
              data-rellax-percentage="0.5"
              data-rellax-speed="-0.5"
              data-disable-parallax-down="md"
            />
            <div
              className="rellax position-absolute top-0 end-0 w-100 h-100 me-md-n3"
              data-rellax-percentage="0.5"
              data-rellax-speed="0.75"
              data-disable-parallax-down="md"
            >
              <img src={screen04} alt="Screen" />
            </div>
          </div>
        </Col>
        <Col md={6} xl={5} className="offset-lg-1">
          <h2 className="pb-3">Receive payment from international bank details</h2>
          <Row className="row-cols-1 row-cols-sm-2 text-start pb-3">
            <Col className="pb-4">
              <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                <img src={payment} alt="Easy Payments" />
              </div>
              <p className="mb-0">
                Manage your payments online. Mollis congue egestas egestas fermentum fames.
              </p>
            </Col>
            <Col className="pb-4">
              <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                <img src={cashback} alt="Regular Cashback" />
              </div>
              <p className="mb-0">
                A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
              </p>
            </Col>
          </Row>
          <Link to="#" className="btn btn-primary">
            Learn more
            <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2 me-n1" />
          </Link>
        </Col>
      </Row>

      <div className="pt-5 d-none d-dark-mode-block"></div>
    </Container>
  );
};

export default Fetures;
