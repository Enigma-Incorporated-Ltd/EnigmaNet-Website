import service03 from '@/assets/img/services/service03.jpg';
import assest from '@/assets/img/services/icons/asset.svg';
import operation from '@/assets/img/services/icons/operations.svg';
import finance from '@/assets/img/services/icons/finance.svg';
import audit from '@/assets/img/services/icons/audit.svg';

import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { Col, Row } from 'react-bootstrap';

const Product = () => {
  return (
    <section className="container pt-2 pt-lg-3 mb-md-3 mb-lg-5 pb-5">
      <Row>
        <Col md={6} className="pb-2 pb-md-0 mb-4 mb-md-0">
          <div className="pe-lg-5">
            <img src={service03} className="rounded-3" alt="Image" />
          </div>
        </Col>
        <Col md={6}>
          <h2 className="h3 mb-sm-4">Product Solutions</h2>
          <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">
            Sem scelerisque laoreet commodo velit. Fringilla tempor egestas mattis mauris eu dui in.
            Viverra enim velit fringilla turpis suspendisse amet ipsum, nisi sed.
          </p>
          <div className="border rounded-3 mb-4 mb-lg-5">
            <Row className="row-cols-1 row-cols-sm-2 g-0">
              <Col className="d-flex align-items-center border-end-sm border-bottom p-3">
                <img src={assest} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Asset management</h3>
                  <p className="fs-xs mb-0">Mattis sodales tellus risus placerat in.</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center border-bottom p-3">
                <img src={operation} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Operations &amp; technology</h3>
                  <p className="fs-xs mb-0">Viverra volutpat tellus orci enim.</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center border-end-sm p-3">
                <img src={finance} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Corporate finance</h3>
                  <p className="fs-xs mb-0">Aliquet amet pharetra fermentum sem.</p>
                </div>
              </Col>
              <hr className="d-sm-none" />
              <Col className="d-flex align-items-center p-3">
                <img src={audit} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Audit services</h3>
                  <p className="fs-xs mb-0">Venenatis congue iaculis malesuada.</p>
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

export default Product;
