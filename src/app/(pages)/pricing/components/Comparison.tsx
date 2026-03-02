import IconifyIcon from '@/components/IconifyIcon';
import { Col, Row } from 'react-bootstrap';

const Comparison = () => {
  return (
    <section className="container py-5 my-md-3 my-lg-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center text-md-start">
          <h2 className="h1 mb-4">Plan Comparison</h2>
          <p className="fs-lg mb-md-0">
            Choose the option that makes the most sense for your business.
          </p>
        </Col>
        <Col md={8}>
          <Row className="row-cols-1 row-cols-md-3">
            <Col className="text-md-center pb-2 mb-4">
              <h3 className="h5 mb-2 mb-md-3">Team</h3>
              <ul className="d-md-none list-unstyled">
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Users:&nbsp;</span>1 included
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Member support via email:&nbsp;</span>
                  Standard
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Live chat support:&nbsp;</span>
                  <IconifyIcon icon="bx:x" className="lead text-muted" />
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                  <IconifyIcon icon="bx:x" className="lead text-muted" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Projects:&nbsp;</span>4 projects
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Zoom integration:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                  <IconifyIcon icon="bx:x" className="lead text-muted" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                  <IconifyIcon icon="bx:x" className="lead text-muted" />
                </li>
              </ul>
              <button type="button" className="btn btn-outline-primary w-100 w-md-auto">
                Free trial
              </button>
            </Col>
            <Col className="text-md-center pb-2 mb-4">
              <h3 className="h5 mb-2 mb-md-3">Company</h3>
              <ul className="d-md-none list-unstyled">
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Users:&nbsp;</span>5 included
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Member support via email:&nbsp;</span>3
                  hours
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Live chat support:&nbsp;</span>
                  10+ members
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Projects:&nbsp;</span>
                  Unlimited
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Zoom integration:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                  <IconifyIcon icon="bx:x" className="lead text-muted" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
              </ul>
              <button type="button" className="btn btn-outline-primary w-100 w-md-auto">
                Get started
              </button>
            </Col>
            <Col className="text-md-center mb-3">
              <h3 className="h5 mb-2 mb-md-3">Enterprise</h3>
              <ul className="d-md-none list-unstyled">
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Users:&nbsp;</span>
                  10 +
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Member support via email:&nbsp;</span>
                  With highest priority
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Live chat support:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Projects:&nbsp;</span>
                  Unlimited
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Zoom integration:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2">
                  <span className="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
                <li className="d-flex align-items-center p-2 bg-secondary">
                  <span className="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                  <IconifyIcon icon="bx:check" className="lead text-primary" />
                </li>
              </ul>
              <button type="button" className="btn btn-outline-primary w-100 w-md-auto">
                Get started
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="d-none d-md-block pt-5 mt-2 pb-4">
        <Row className="g-0">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Users
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">1 included</Col>
              <Col className="position-relative bg-primary px-2 py-4">
                <span className="text-light opacity-80">5 included</span>
                <span
                  className="position-absolute start-0 bottom-100 w-100 bg-primary rounded-3 rounded-bottom-0"
                  style={{ height: '2rem' }}
                ></span>
              </Col>
              <Col className="px-2 py-4">10+</Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0 bg-secondary rounded-3">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Member support via email
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">Standard</Col>
              <Col className="bg-primary px-2 py-4">
                <span className="text-light opacity-80">3 hours</span>
              </Col>
              <Col className="px-2 py-4">With highest priority</Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Live chat support
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:x" className="lead text-muted" />
              </Col>
              <Col className="bg-primary px-2 py-4">
                <span className="text-light opacity-80">10+ members</span>
              </Col>
              <Col className="px-2 py-4">Unlimited</Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0 bg-secondary rounded-3">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            IT security and legal review
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:x" className="lead text-muted" />
              </Col>
              <Col className="bg-primary px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-light" />
              </Col>
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Projects
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">4 projects</Col>
              <Col className="bg-primary px-2 py-4">
                <span className="text-light opacity-80">Unlimited</span>
              </Col>
              <Col className="px-2 py-4">Unlimited</Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0 bg-secondary rounded-3">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Comments and sharing
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
              <Col className="bg-primary px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-light" />
              </Col>
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Zoom integration
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
              <Col className="bg-primary px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-light" />
              </Col>
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0 bg-secondary rounded-3">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Ongoing strategy calls
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:x" className="lead text-muted" />
              </Col>
              <Col className="bg-primary px-2 py-4">
                <IconifyIcon icon="bx:x" className="lead text-light opacity-50" />
              </Col>
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Analytics dashboard
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
              <Col className="bg-primary px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-light" />
              </Col>
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0 bg-secondary rounded-3">
          <Col md={4} className="text-dark fw-semibold ps-4 pe-2 py-4">
            Get custom integrations
          </Col>
          <Col md={8} className="text-center">
            <Row className="row-cols-3 g-0">
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:x" className="lead text-muted" />
              </Col>
              <Col className="position-relative bg-primary px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-light" />
                <span
                  className="position-absolute start-0 top-100 w-100 bg-primary rounded-3 rounded-top-0"
                  style={{ height: '2rem' }}
                ></span>
              </Col>
              <Col className="px-2 py-4">
                <IconifyIcon icon="bx:check" className="lead text-primary" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Comparison;
