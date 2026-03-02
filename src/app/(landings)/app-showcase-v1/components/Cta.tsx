import { Col, Container, Row } from 'react-bootstrap';
import notification from '@/assets/img/landing/app-showcase-1/notification-icon.svg';
import IconifyIcon from '@/components/IconifyIcon';

const Cta = () => {
  return (
    <Container>
      <div className="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-lg-5 px-xl-0">
        <Row className="align-items-center py-lg-4">
          <Col xl={5} md={6} className="offset-xl-1 mb-4 mb-md-0">
            <div className="d-flex align-items-center">
              <img src={notification} width="78" alt="Bell icon" />
              <div className="ps-3 ms-sm-3">
                <h2 className="h4 mb-0">
                  Subscribe to our newsletter to stay informed about latest updates
                </h2>
              </div>
            </div>
          </Col>
          <Col xl={5} md={6}>
            <div className="ps-lg-5 ms-xl-2">
              <form className="input-group input-group-lg needs-validation">
                <input
                  type="email"
                  id="subscr-email"
                  className="form-control rounded-start ps-5"
                  placeholder="Your email"
                  required
                />
                <IconifyIcon
                  icon="bx:envelope"
                  className="fs-xl text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
                />
                <div className="invalid-tooltip position-absolute top-100 start-0">
                  Please provide a valid email address.
                </div>
                <button type="submit" className="btn btn-primary px-sm-4">
                  Subscribe
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cta;
