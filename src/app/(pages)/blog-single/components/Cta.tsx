import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const Cta = () => {
  return (
    <section className="container mb-4 pb-2 mb-md-5 pb-lg-5">
      <Row className="gy-5">
        <Col lg={9}>
          {/* Newsletter subscription section */}
          {/* <Card className="p-md-5 p-4 border-0 bg-secondary">
            <CardBody className="w-100 mx-auto px-0" style={{ maxWidth: '746px' }}>
              <h2 className="mb-4 pb-3">Enjoy this post? Join our newsletter</h2>
              <form className="needs-validation" noValidate>
                <div className="input-group mb-3">
                  <IconifyIcon
                    icon="bx:envelope"
                    className="position-absolute start-0 top-50 translate-middle-y zindex-5 ms-3 text-muted"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control ps-5 rounded"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-lg btn-primary w-sm-auto w-100">
                  Subscribe
                </button>
              </form>
            </CardBody>
          </Card> */}
        </Col>
      </Row>
    </section>
  );
};

export default Cta;
