import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from 'react-bootstrap';

const Contact = () => {
  return (
    <section className="container">
      <div className="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-lg-0">
        <Row className="align-items-center pt-1 pb-2 py-lg-4">
          <Col xl={4} lg={5} md={6} className="offset-lg-1 mb-4 pb-3 mb-md-0 pb-md-0">
            <h2 className="h1 mb-lg-4">Get in Touch</h2>
            <p className="pb-2 pb-md-4 pb-lg-5">
              Have a project in mind? To request a quote contact us directly or fill out the form
              and let us know how we can help.
            </p>

            <h3 className="mb-lg-4">Contact Info</h3>
            <ul className="list-unstyled pb-3 pb-md-4 pb-lg-5 mb-2">
              <li className="mb-2">
                <Link to="tel:4065550120" className="nav-link d-flex align-items-center p-0">
                  <IconifyIcon icon="bx:phone-call" className="fs-xl text-primary me-2" />
                  (406)&nbsp;555&#8209;0120
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="mailto:example@email.com"
                  className="nav-link d-flex align-items-center p-0"
                >
                  <IconifyIcon icon="bx:envelope" className="fs-xl text-primary me-2" />
                  example@email.com
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="nav-link d-flex align-items-center p-0">
                  <IconifyIcon icon="bx:map" className="fs-xl text-primary me-2" />
                  2464 Royal Ln. Mesa, New Jersey 45463
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <Button
                variant="outline-secondary"
                className="btn-icon btn-facebook me-3"
                aria-label="Facebook"
              >
                <IconifyIcon icon="bxl:facebook" fontSize={20} />
              </Button>
              <Button
                variant="outline-secondary"
                className="btn-icon btn-twitter me-3"
                aria-label="Twitter"
              >
                <IconifyIcon icon="bxl:twitter" fontSize={20} />
              </Button>
              <Button
                variant="outline-secondary"
                className="btn-icon btn-linkedin me-3"
                aria-label="LinkedIn"
              >
                <IconifyIcon icon="bxl:linkedin" fontSize={20} />
              </Button>
              <Button
                variant="outline-secondary"
                className="btn-icon btn-instagram"
                aria-label="Instagram"
              >
                <IconifyIcon icon="bxl:instagram" fontSize={20} />
              </Button>
            </div>
          </Col>

          <Col lg={5} md={6} className="offset-xl-1">
            <Card className="border-0 shadow-sm p-sm-2">
              <CardBody>
                <Form noValidate>
                  <FormGroup className="mb-4" controlId="service">
                    <FormLabel className="fs-base">Service</FormLabel>
                    <FormSelect size="lg" required>
                      <option defaultValue="Service" disabled>
                        Choose the service you are interested in
                      </option>
                      <option value="Custom Software Development">
                        Custom Software Development
                      </option>
                      <option value="Software Integration">Software Integration</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Business Analytics">Business Analytics</option>
                      <option value="Software Testing">Software Testing</option>
                      <option value="Project Management">Project Management</option>
                    </FormSelect>
                    <Form.Control.Feedback type="invalid">
                      Please choose the service!
                    </Form.Control.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-4" controlId="name">
                    <FormLabel className="fs-base">Full name</FormLabel>
                    <FormControl type="text" size="lg" required />
                    <Form.Control.Feedback type="invalid">
                      Please enter your name!
                    </Form.Control.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-4" controlId="email">
                    <FormLabel className="fs-base">Email address</FormLabel>
                    <FormControl type="email" size="lg" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address!
                    </Form.Control.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-4 pb-2" controlId="message">
                    <FormLabel className="fs-base">Message</FormLabel>
                    <FormControl
                      as="textarea"
                      rows={3}
                      placeholder="Tell us about your project"
                      size="lg"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your message!
                    </Form.Control.Feedback>
                  </FormGroup>

                  <Button type="submit" variant="primary" size="lg" className="shadow-primary">
                    Send request
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
