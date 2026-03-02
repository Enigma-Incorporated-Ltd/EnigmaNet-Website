import map from '@/assets/img/landing/medical/map.jpg';
import { Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Contact = () => {
  return (
    <section className="container pb-5 mb-1 mb-md-4 mb-lg-5">
      <Row className="pb-xl-3">
        <Col md={6} className="pb-2 pb-md-0 mb-4 mb-md-0">
          <div className="gallery rounded-3 shadow-sm">
            <Link
              to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17239.8060668495!2d-122.43668227971098!3d37.741526659411576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1259a3ed73%3A0xaae7371cd8db1e38!2sNoe%20Valley%20Bakery!5e0!3m2!1sen!2sua!4v1637757959377!5m2!1sen!2sua"
              data-iframe="true"
              className="gallery-item rounded-3"
              data-sub-html='<h6 class="fs-sm text-light">Noe Valley Bakery 24th Street, San Francisco, CA, USA</h6>'
            >
              <IconifyIcon
                icon="bxs:map"
                className="text-primary display-5 position-absolute top-50 start-50 translate-middle mb-0"
              />
              <img src={map} alt="Map cover" />
              <div className="gallery-item-caption fs-sm fw-medium">Expand the map</div>
            </Link>
          </div>
        </Col>
        <Col xl={5} md={6} className="offset-xl-1">
          <h2 className="h1 pb-4 mb-1 mb-lg-3">Get Free Professional Consultation</h2>
          <ul className="list-unstyled pb-3 mb-0 mb-lg-3">
            <li className="d-flex mb-3">
              <IconifyIcon icon="bx:map" className="text-muted fs-xl mt-1 me-2" />
              Noe Valley Bakery 24th Street, San Francisco, CA, USA
            </li>
            <li className="d-flex mb-3">
              <i className="bx bx-phone-call text-muted fs-xl mt-1 me-2"></i>
              (406) 555-0120
            </li>
            <li className="d-flex mb-3">
              <IconifyIcon icon="bx:time" className="text-muted fs-xl mt-1 me-2" />
              <div>
                <div>
                  <span className="text-dark fw-semibold me-1">Mon – Fri:</span>
                  9:00 am – 22:00 pm
                </div>
                <div>
                  <span className="text-dark fw-semibold me-1">Sat – Sun:</span>
                  9:00 am – 20:00 pm
                </div>
              </div>
            </li>
            <li className="d-flex mb-3">
              <i className="bx bx-envelope text-muted fs-xl mt-1 me-2"></i>
              example@email.com
            </li>
          </ul>
          <Link to="#" className="btn btn-primary shadow-primary btn-lg">
            Make an appointment
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
