import service01 from '@/assets/img/services/service01.jpg';
import digital from '@/assets/img/services/icons/digital.svg';
import chart from '@/assets/img/services/icons/chart.svg';
import marketing from '@/assets/img/services/icons/marketing.svg';
import cyber from '@/assets/img/services/icons/cybersecurity.svg';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { Col, Row } from 'react-bootstrap';

const Service = () => {
  return (
    <section className="container mb-md-3 mb-lg-5 pb-5">
      <Row>
        <Col md={6} className="pb-2 pb-md-0 mb-4 mb-md-0">
          <div className="pe-lg-5">
            <img src={service01} className="rounded-3" alt="Image" />
          </div>
        </Col>
        <Col md={6}>
          <h2 className="h3 mb-sm-4">Consulting Services</h2>
          <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">
            Orci, ac libero sit ultrices enim volutpat augue. Congue sit nulla velit ornare cras.
            Facilisis tempus non erat ornare imperdiet. In ac ullamcorper proin urna, lacus, tortor,
            ullamcorper egestas mattis mauris.
          </p>
          <div className="border rounded-3 mb-4 mb-lg-5">
            <Row className="row-cols-1 row-cols-sm-2 g-0">
              <Col className="d-flex align-items-center border-end-sm border-bottom p-3">
                <img src={digital} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Digital transformation</h3>
                  <p className="fs-xs mb-0">Aliquam quis odio senectus.</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center border-bottom p-3">
                <img src={chart} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Analytics services</h3>
                  <p className="fs-xs mb-0">Curabitur neque ut morbi sapien.</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center border-end-sm p-3">
                <img src={marketing} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Marketing &amp; sales</h3>
                  <p className="fs-xs mb-0">At faucibus molestie egestas sed.</p>
                </div>
              </Col>
              <hr className="d-sm-none" />
              <Col className="d-flex align-items-center p-3">
                <img src={cyber} width="48" alt="Icon" />
                <div className="ps-2 ms-1">
                  <h3 className="h6 mb-0">Cybersecurity &amp; strategy</h3>
                  <p className="fs-xs mb-0">Orci bibendum ullamcorper lorem.</p>
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

export default Service;
