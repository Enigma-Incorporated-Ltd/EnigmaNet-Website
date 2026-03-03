import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from 'react-bootstrap';

const Detail = () => {
  return (
    <Col md={8} className="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div className="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 className="h2 pt-xl-1 pb-3">Account Details</h1>

        <h2 className="h5 text-primary mb-4">Basic info</h2>
        <Form className="border-bottom pb-3 pb-lg-4">
          <Row className="pb-2">
            <Col sm={6} className="mb-4">
              <FormGroup controlId="fn">
                <FormLabel className="fs-base">First name</FormLabel>
                <FormControl size="lg" type="text" defaultValue="John" required />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name!
                </Form.Control.Feedback>
              </FormGroup>
            </Col>

            <Col sm={6} className="mb-4">
              <FormGroup controlId="sn">
                <FormLabel className="fs-base">Second name</FormLabel>
                <FormControl size="lg" type="text" defaultValue="Doe" required />
                <Form.Control.Feedback type="invalid">
                  Please enter your second name!
                </Form.Control.Feedback>
              </FormGroup>
            </Col>

            <Col sm={6} className="mb-4">
              <FormGroup controlId="email">
                <FormLabel className="fs-base">Email address</FormLabel>
                <FormControl size="lg" type="email" defaultValue="jonny@email.com" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address!
                </Form.Control.Feedback>
              </FormGroup>
            </Col>

            <Col sm={6} className="mb-4">
              <FormGroup controlId="phone">
                <FormLabel className="fs-base">
                  Phone <small className="text-muted">(optional)</small>
                </FormLabel>
                <Form.Control size="lg" type="text" placeholder="+1 ___ ___ __" />
              </FormGroup>
            </Col>

            <Col xs={12} className="mb-4">
              <FormGroup controlId="bio">
                <FormLabel className="fs-base">
                  Bio <small className="text-muted">(optional)</small>
                </FormLabel>
                <FormControl as="textarea" rows={4} size="lg" placeholder="Add a short bio..." />
              </FormGroup>
            </Col>
          </Row>

          <div className="d-flex mb-3">
            <Button variant="secondary" type="reset" className="me-3">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </div>
        </Form>

        <h2 className="h5 text-primary pt-1 pt-lg-3 my-4">Address</h2>
        <Form className="border-bottom pb-2 pb-lg-4">
          <Row className="pb-2">
            <Col sm={6} className="mb-4">
              <FormGroup controlId="country">
                <FormLabel className="fs-base">Country</FormLabel>
                <FormSelect size="lg" defaultValue="USA" required>
                  <option disabled value="">
                    Choose country
                  </option>
                  <option>Australia</option>
                  <option>Belgium</option>
                  <option>Canada</option>
                  <option>Denmark</option>
                  <option>USA</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  Please choose your country!
                </Form.Control.Feedback>
              </FormGroup>
            </Col>

            <Col sm={6} className="mb-4">
              <FormGroup controlId="state">
                <FormLabel className="fs-base">State</FormLabel>
                <FormSelect size="lg" defaultValue="Florida" required>
                  <option disabled value="">
                    Choose state
                  </option>
                  <option>Arizona</option>
                  <option>California</option>
                  <option>Iowa</option>
                  <option>Florida</option>
                  <option>Michigan</option>
                  <option>Texas</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  Please choose your state!
                </Form.Control.Feedback>
              </FormGroup>
            </Col>

            <Col sm={6} className="mb-4">
              <FormGroup controlId="city">
                <FormLabel className="fs-base">City</FormLabel>
                <FormSelect size="lg" defaultValue="Miami" required>
                  <option disabled value="">
                    Choose city
                  </option>
                  <option>Boston</option>
                  <option>Chicago</option>
                  <option>Los Angeles</option>
                  <option>Miami</option>
                  <option>New York</option>
                  <option>Philadelphia</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  Please choose your city!
                </Form.Control.Feedback>
              </FormGroup>
            </Col>

            <Col sm={6} className="mb-4">
              <FormGroup controlId="zip">
                <FormLabel className="fs-base">ZIP code</FormLabel>
                <FormControl size="lg" type="text" required />
                <Form.Control.Feedback type="invalid">
                  Please enter your ZIP code!
                </Form.Control.Feedback>
              </FormGroup>
            </Col>

            <Col xs={12} className="mb-4">
              <FormGroup controlId="address1">
                <FormLabel className="fs-base">Address line 1</FormLabel>
                <FormControl size="lg" type="text" required />
              </FormGroup>
            </Col>

            <Col xs={12} className="mb-4">
              <FormGroup controlId="address2">
                <FormLabel className="fs-base">
                  Address line 2 <small className="text-muted">(optional)</small>
                </FormLabel>
                <FormControl size="lg" type="text" />
              </FormGroup>
            </Col>
          </Row>

          <div className="d-flex mb-3">
            <Button variant="secondary" type="reset" className="me-3">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </div>
        </Form>

        <h2 className="h5 text-primary pt-1 pt-lg-3 mt-4">Delete account</h2>
        <p>
          When you delete your account, your public profile will be deactivated immediately. If you
          change your mind before the 14 days are up, sign in with your email and password, and
          we’ll send you a link to reactivate your account.
        </p>
        <Form.Check
          type="checkbox"
          id="delete-account"
          label="Yes, I want to delete my account"
          className="mb-4 fs-base"
        />
        <Button variant="danger" type="button">
          Delete
        </Button>
      </div>
    </Col>
  );
};

export default Detail;
