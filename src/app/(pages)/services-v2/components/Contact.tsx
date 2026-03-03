import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
} from 'react-bootstrap';

const Contact = () => {
  return (
    <section className="position-relative pt-2 pt-lg-0 pb-5">
      <Container className="position-relative zindex-5 pb-2 pb-md-4 pb-lg-5">
        <Row className="justify-content-center text-center pt-xl-2 pb-4 mb-1 mb-lg-3">
          <Col xl={6} lg={7} md={8} sm={11}>
            <h2 className="mb-4">Let's Change the Game Together</h2>
            <p className="text-muted mb-0">
              Like what you have seen? Let’s get started. Just fill in a few details and we will get
              in touch as soon as possible.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Form noValidate>
              <Row>
                <Col sm={6} className="mb-4">
                  <FormGroup controlId="fn">
                    <FormLabel>First name</FormLabel>
                    <FormControl type="text" required />
                    <Form.Control.Feedback type="invalid">
                      Please, enter your first name!
                    </Form.Control.Feedback>
                  </FormGroup>
                </Col>

                <Col sm={6} className="mb-4">
                  <FormGroup controlId="ln">
                    <FormLabel>Last name</FormLabel>
                    <FormControl type="text" required />
                    <Form.Control.Feedback type="invalid">
                      Please, enter your last name!
                    </Form.Control.Feedback>
                  </FormGroup>
                </Col>

                <Col sm={6} className="mb-4">
                  <FormGroup controlId="email">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" required />
                    <Form.Control.Feedback type="invalid">
                      Please, provide a valid email address!
                    </Form.Control.Feedback>
                  </FormGroup>
                </Col>

                <Col sm={6} className="mb-4">
                  <FormGroup controlId="phone">
                    <FormLabel>Phone</FormLabel>
                    <FormControl type="text" placeholder="+1 ___ ___ __" />
                  </FormGroup>
                </Col>

                <Col sm={6} className="mb-4">
                  <FormGroup controlId="city">
                    <FormLabel>City</FormLabel>
                    <FormSelect required>
                      <option value="">Choose city</option>
                      <option value="Boston">Boston</option>
                      <option value="Chicago">Chicago</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="Miami">Miami</option>
                      <option value="New York">New York</option>
                      <option value="Philadelphia">Philadelphia</option>
                    </FormSelect>
                    <Form.Control.Feedback type="invalid">
                      Please, choose your city!
                    </Form.Control.Feedback>
                  </FormGroup>
                </Col>

                <Col sm={6} className="mb-4">
                  <FormGroup controlId="company">
                    <FormLabel>Your company</FormLabel>
                    <FormControl type="text" />
                  </FormGroup>
                </Col>

                <Col sm={6} className="mb-4">
                  <FormGroup controlId="position">
                    <FormLabel>Your position</FormLabel>
                    <FormSelect>
                      <option value="Owner">Owner</option>
                      <option value="CEO">CEO</option>
                      <option value="Manager">Manager</option>
                      <option value="Accountant">Accountant</option>
                    </FormSelect>
                  </FormGroup>
                </Col>

                <Col sm={6} className="mb-4">
                  <FormGroup controlId="people">
                    <FormLabel>People in company</FormLabel>
                    <FormSelect>
                      <option value="0-10">0-10</option>
                      <option value="10-25">10-25</option>
                      <option value="25-50">25-50</option>
                      <option value="50-100">50-100</option>
                    </FormSelect>
                  </FormGroup>
                </Col>

                <Col xs={12} className="mb-4">
                  <FormGroup controlId="message">
                    <FormLabel>Message</FormLabel>
                    <FormControl as="textarea" rows={4} required />
                    <Form.Control.Feedback type="invalid">
                      Please, enter your message!
                    </Form.Control.Feedback>
                  </FormGroup>
                </Col>

                <Col xs={12} className="text-center pt-2 pt-md-3 pt-lg-4">
                  <Button type="submit" variant="primary" size="lg" className="shadow-primary">
                    Send a request
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      <div className="position-absolute end-0 bottom-0 text-primary">
        <svg
          width="469"
          height="343"
          viewBox="0 0 469 343"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M273.631 680.872C442.436 768.853 639.315 708.216 717.593 558.212C795.871 408.208 732.941 212.157 564.137 124.176C395.333 36.195 198.453 96.8326 120.175 246.836C41.8972 396.84 104.827 592.891 273.631 680.872ZM236.335 752.344C440.804 858.914 688.289 788.686 789.109 595.486C889.928 402.286 805.903 159.274 601.433 52.7043C396.964 -53.8654 149.479 16.3623 48.6595 209.562C-52.1598 402.762 31.8652 645.774 236.335 752.344Z"
            fill="currentColor"
          />
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M298.401 633.404C434.98 704.59 598.31 656.971 664.332 530.451C730.355 403.932 675.946 242.827 539.367 171.642C402.787 100.457 239.458 148.076 173.435 274.595C107.413 401.114 161.822 562.219 298.401 633.404ZM288.455 652.464C434.545 728.606 611.369 678.429 683.403 540.391C755.437 402.353 695.402 228.725 549.312 152.583C403.222 76.4404 226.398 126.617 154.365 264.655C82.331 402.693 142.365 576.321 288.455 652.464Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Contact;
