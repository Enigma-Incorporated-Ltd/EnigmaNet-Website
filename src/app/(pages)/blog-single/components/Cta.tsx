import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Cta = () => {
  return (
    <section className="container mb-4 pb-2 mb-md-5 pb-lg-5">
      <Row className="gy-5">
        <Col lg={9}>
          <Card className="p-md-5 p-4 border-0 bg-secondary">
            <CardBody className="w-100 mx-auto px-0" style={{ maxWidth: '746px' }}>
              <h2 className="mb-4 pb-3">Leave a Comment</h2>
              <form className="row gy-4 needs-validation" noValidate>
                <Col sm={6} xs={12}>
                  <label htmlFor="c-name" className="form-label fs-base">
                    Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    className="form-control form-control-lg"
                    required
                  />
                  <span className="invalid-tooltip">Please, enter your name.</span>
                </Col>
                <Col sm={6} xs={12}>
                  <label htmlFor="c-email" className="form-label fs-base">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    className="form-control form-control-lg"
                    required
                  />
                  <span className="invalid-tooltip">Please, provide a valid email address.</span>
                </Col>
                <Col xs={12}>
                  <label htmlFor="c-comment" className="form-label fs-base">
                    Comment
                  </label>
                  <textarea
                    id="c-comment"
                    className="form-control form-control-lg"
                    rows={3}
                    placeholder="Type your comment here..."
                    required
                  ></textarea>
                  <span className="invalid-tooltip">Please, enter your comment.</span>
                </Col>
                <Col xs={12}>
                  <div className="form-check">
                    <input id="c-save" type="checkbox" className="form-check-input" />
                    <label htmlFor="c-save" className="form-check-label">
                      Save my name and email in this browser for the next time I comment.
                    </label>
                  </div>
                </Col>
                <Col xs={12}>
                  <button type="submit" className="btn btn-lg btn-primary w-sm-auto w-100 mt-2">
                    Post comment
                  </button>
                </Col>
              </form>
            </CardBody>
          </Card>
        </Col>

        <Col lg={3} className="position-relative">
          <div className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4" style={{ top: '70px !important' }}>
            <Row className="gy-lg-5 gy-4 justify-content-center text-lg-start text-center">
              <Col lg={12} sm={7} xs={11}>
                <h6 className="fs-lg">Enjoy this post? Join our newsletter</h6>
                <form className="needs-validation" noValidate>
                  <div className="input-group mb-3">
                    <IconifyIcon
                      icon="bx:envelope"
                      className="position-absolute start-0 top-50 translate-middle-y zindex-5 ms-3 text-muted d-lg-inline-block d-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-control ps-lg-5 rounded text-lg-start text-center"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Subscribe
                  </button>
                </form>
              </Col>

              <Col lg={12} sm={7} xs={11}>
                <h6 className="fs-lg">Don’t forget to share it</h6>
                <div className="mb-4 pb-lg-3">
                  <Link
                    to="#"
                    className="btn btn-icon btn-secondary btn-linkedin me-2 mb-2"
                    aria-label="LinkedIn"
                  >
                    <IconifyIcon icon="bxl:linkedin" fontSize={20} />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-icon btn-secondary btn-facebook me-2 mb-2"
                    aria-label="Facebook"
                  >
                    <IconifyIcon icon="bxl:facebook" fontSize={20} />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-icon btn-secondary btn-twitter me-2 mb-2"
                    aria-label="Twitter"
                  >
                    <IconifyIcon icon="bxl:twitter" fontSize={20} />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-icon btn-secondary btn-instagram me-2 mb-2"
                    aria-label="Instagram"
                  >
                    <IconifyIcon icon="bxl:instagram" fontSize={20} />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Cta;
