import service02 from '@/assets/img/services/service02.jpg';
import insurance from '@/assets/img/services/icons/insurance.svg';
import bankingImg from '@/assets/img/services/icons/banking.svg';
import payment from '@/assets/img/services/icons/payments.svg';
import { Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Banking = () => {
  return (
    <section className="container pt-2 pt-lg-3 mb-md-3 mb-lg-5 pb-5">
      <Row>
        <Col md={6} className="order-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
          <div className="ps-lg-5">
            <img src={service02} className="rounded-3" alt="Image" />
          </div>
        </Col>
        <Col md={6} className="ordr-md-1">
          <h2 className="h3 mb-sm-4">Banking Expertise</h2>
          <ul className="list-unstyled d-md-none d-xl-block pb-2 pb-md-3 mb-3">
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check" className="lead text-primary me-2" />
              Sagittis quam egestas sit sit convallis turpis sit augue interdum morbi.
            </li>
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check" className="lead text-primary me-2" />
              Sollicitudin cursus habitasse adipiscing est sed aenean sapien.
            </li>
            <li className="d-flex align-items-center">
              <IconifyIcon icon="bx:check" className="lead text-primary me-2" />
              At arcu arcu morbi scelerisque nibh. Quam velit fermentum porta facilisi massa.
            </li>
          </ul>
          <div className="border rounded-3 mb-4 mb-lg-5">
            <Row className="row-cols-1 row-cols-sm-2 g-0">
              <Col className="d-flex align-items-center border-end-sm border-bottom p-3">
                <img src={insurance} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Insurance</h3>
                  <p className="fs-xs mb-0">Nunc dui aliquam volutpat augue.</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center border-bottom p-3">
                <img src={bankingImg} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Banking risk</h3>
                  <p className="fs-xs mb-0">Habitasse adipiscing aenean sapien.</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center border-end-sm p-3">
                <img src={payment} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Payments</h3>
                  <p className="fs-xs mb-0">At faucibus molestie egestas sed.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="d-flex flex-column flex-sm-row">
            <Link to="#" className="btn btn-primary mb-3 mb-sm-0 me-sm-3">
              Send request
            </Link>
            <Link to="#" className="btn btn-outline-primary">
              Learn more
              <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2 me-n1" />
            </Link>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Banking;
