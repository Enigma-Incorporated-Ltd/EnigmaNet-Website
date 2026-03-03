import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <section className="position-relative bg-secondary pt-5">
      <Container className="position-relative zindex-2 pt-5">
        <nav className="pt-lg-4 pb-3 mb-2 mb-sm-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/index">
                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
                Home
              </Link>
            </li>
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item active" aria-current="page">
              Contacts v.2
            </li>
          </ol>
        </nav>
        <Row>
          <Col xl={4} lg={5} className="pb-4 pb-sm-5 mb-2 mb-sm-0">
            <div className="pe-lg-4 pe-xl-0">
              <h1 className="pb-3 pb-md-4 mb-lg-5">Contact Us</h1>

              <div className="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
                <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                  <IconifyIcon icon="bx:envelope" />
                </div>
                <div className="ps-3 ps-sm-4">
                  <h2 className="h4 pb-1 mb-2">Email us</h2>
                  <p className="mb-2">
                    Please feel free to drop us a line. We will respond as soon as possible.
                  </p>
                  <Button variant="link" size="lg" className="px-0">
                    Leave a message
                    <IconifyIcon icon="bx:right-arrow-alt" className="lead ms-2" />
                  </Button>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                  <IconifyIcon icon="bx:group" />
                </div>
                <div className="ps-3 ps-sm-4">
                  <h2 className="h4 pb-1 mb-2">Careers</h2>
                  <p className="mb-2">
                    Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.
                  </p>
                  <Button variant="link" size="lg" className="px-0">
                    Send an application
                    <IconifyIcon icon="bx:right-arrow-alt" className="lead ms-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={{ span: 6, offset: 2 }} lg={7}>
            <Card className="border-light shadow-lg py-3 p-sm-4 p-md-5 position-relative">
              <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"></div>
              <Card.Body className="position-relative zindex-2">
                <h2 className="card-title pb-3 mb-4">Get Online Consultation</h2>

                <Form className="row g-4 needs-validation" noValidate>
                  <Col xs={12}>
                    <Form.Label htmlFor="fn" className="form-label fs-base">
                      Full name
                    </Form.Label>
                    <Form.Control type="text" id="fn" required className="form-control-lg" />
                    <div className="invalid-feedback">Please enter your full name!</div>
                  </Col>

                  <Col xs={12}>
                    <Form.Label htmlFor="email" className="form-label fs-base">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" id="email" required className="form-control-lg" />
                    <div className="invalid-feedback">Please provid a valid email address!</div>
                  </Col>

                  <Col xs={12}>
                    <Form.Label htmlFor="specialist" className="form-label fs-base">
                      Specialist
                    </Form.Label>
                    <Form.Select
                      id="specialist"
                      required
                      className="form-select-lg"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose a specialist
                      </option>
                      <option value="Therapist">Therapist</option>
                      <option value="Dentist">Dentist</option>
                      <option value="Cardiologist">Cardiologist</option>
                      <option value="Pediatrician">Pediatrician</option>
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Surgeon">Surgeon</option>
                    </Form.Select>
                    <div className="invalid-feedback">Choose a specialist from the list!</div>
                  </Col>

                  <Col sm={6}>
                    <Form.Label htmlFor="date" className="form-label fs-base">
                      Date
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="date"
                      placeholder="mm/dd"
                      required
                      className="form-control-lg"
                    />
                    <div className="invalid-feedback">Enter a date!</div>
                  </Col>

                  <Col sm={6}>
                    <Form.Label htmlFor="time" className="form-label fs-base">
                      Time
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="time"
                      placeholder="hh:mm"
                      required
                      className="form-control-lg"
                    />
                    <div className="invalid-feedback">Enter a time!</div>
                  </Col>

                  <Col xs={12} className="pt-2 pt-sm-3">
                    <Button type="submit" size="lg" className="btn-primary w-100 w-sm-auto">
                      Make an appointment
                    </Button>
                  </Col>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div
        className="position-absolute bottom-0 start-0 w-100 bg-light"
        style={{ height: '8rem' }}
      ></div>
    </section>
  );
};

export default Contact;
