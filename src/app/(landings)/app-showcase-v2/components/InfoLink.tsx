import chat from '@/assets/img/landing/app-showcase-2/icons/chat.svg';
import faq from '@/assets/img/landing/app-showcase-2/icons/faq.svg';
import email from '@/assets/img/landing/app-showcase-2/icons/email.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const InfoLink = () => {
  return (
    <Container className="pt-5 pb-4 pb-sm-5 mb-2 mb-sm-0 mb-lg-3 mb-xl-4 mt-md-2 mt-lg-4 mt-xl-5">
      <Row className="row-cols-1 row-cols-sm-3 pt-sm-3 py-2">
        <Col className="d-flex d-sm-block d-lg-flex align-items-start mb-3 mb-sm-0">
          <div className="d-table bg-primary shadow-primary rounded flex-shrink-0 p-2 mb-3">
            <img src={chat} width="24" className="d-block m-1" alt="Icon" />
          </div>
          <div className="ps-4 ps-sm-0 ps-lg-4 ms-lg-2 me-xl-2 pe-xl-5">
            <h3 className="h4 mb-2 mb-md-3">24/7 Chat Help</h3>
            <p className="mb-1 mb-md-2">Chat support with our customer service specialists.</p>
            <Link to="#" className="btn btn-link px-0">
              Talk to us
              <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
            </Link>
          </div>
        </Col>
        <Col className="d-flex d-sm-block d-lg-flex align-items-start mb-3 mb-sm-0">
          <div className="d-table bg-primary shadow-primary rounded flex-shrink-0 p-2 mb-3">
            <img src={faq} width="24" className="d-block m-1" alt="Icon" />
          </div>
          <div className="ps-4 ps-sm-0 ps-lg-4 ms-lg-2 pe-xl-5">
            <h3 className="h4 mb-2 mb-md-3">FAQ</h3>
            <p className="mb-1 mb-md-2">
              Find answers. Learn more about the features and services.
            </p>
            <Link to="#" className="btn btn-link px-0">
              Learn more
              <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
            </Link>
          </div>
        </Col>
        <Col className="d-flex d-sm-block d-lg-flex align-items-start">
          <div className="d-table bg-primary shadow-primary rounded flex-shrink-0 p-2 mb-3">
            <img src={email} width="24" className="d-block m-1" alt="Icon" />
          </div>
          <div className="ps-4 ps-sm-0 ps-lg-4 ms-lg-2 pe-xl-5">
            <h3 className="h4 mb-2 mb-md-3">Email</h3>
            <p className="mb-1 mb-md-2">Please feel free to drop any questions to our email.</p>
            <Link to="#" className="btn btn-link px-0">
              Drop us a line
              <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoLink;
