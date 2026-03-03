import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';

const Cta = () => {
  return (
    <Container>
      <div className="bg-dark border border-light rounded-3 py-5 px-4 px-sm-0">
        <Row className="justify-content-center py-sm-2 py-lg-5">
          <Col xl={6} lg={7} md={8} sm={10} className="text-center">
            <h2 className="h1 text-light mb-4">Ready to Get Started?</h2>
            <p className="fs-lg text-light opacity-70 pb-4 mb-3">
              Organize your tasks with a 14-day free trial
            </p>

            <form className="input-group input-group-lg d-none d-sm-flex needs-validation mb-3">
              <input
                type="email"
                className="form-control rounded-start ps-5"
                placeholder="Your email"
                required
              />
              <IconifyIcon
                icon="bx:envelope"
                className="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
              />
              <div className="invalid-tooltip position-absolute top-100 start-0">
                Please provide a valid email address.
              </div>
              <button type="submit" className="btn btn-primary">
                Get started for free
              </button>
            </form>

            <form className="needs-validation d-sm-none mb-3">
              <div className="position-relative mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-start ps-5"
                  placeholder="Your email"
                  required
                />
                <IconifyIcon
                  icon="bx:envelope"
                  className="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
                />
                <div className="invalid-tooltip position-absolute top-0 start-0 mt-n4">
                  Please provide a valid email address.
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Get started for free
              </button>
            </form>
            <p className="fs-sm text-light opacity-50 mb-0">
              No subscriptions. No annual fees. No lock-ins.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cta;
