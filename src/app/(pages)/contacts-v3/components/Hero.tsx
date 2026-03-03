import { Link } from 'react-router';
import contacts from '@/assets/img/contacts/bg.svg';
import { Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const Hero = () => {
  return (
    <section
      className="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5"
      style={{ backgroundImage: `url(${contacts})` }}
    >
      <Container className="pt-5 pb-lg-4 pb-xl-5">
        <nav className="pt-lg-4" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="d-flex align-items-center">
                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" /> Home
              </Link>
            </li>
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item active" aria-current="page">
              Contacts v.3
            </li>
          </ol>
        </nav>

        <Row className="pt-md-2 pt-lg-5 pb-2 pb-md-4">
          <Col xxl={4} xl={5} lg={6} className="pt-3 mt-3">
            <h1 className="h3 mb-2">Want to work with us?</h1>
            <h2 className="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3">
              Let&apos;s talk!
            </h2>
            <div className="nav d-block lead pt-lg-5">
              <Link
                to="mailto:email@example.com"
                className="nav-link fw-normal text-decoration-underline p-0 mb-4"
              >
                email@example.com
              </Link>
              <div className="text-nav">+1 406 555-0120</div>
            </div>
          </Col>

          <Col lg={6} className="offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3">
            <form className="needs-validation" noValidate>
              <Row className="g-4">
                <Col sm={6}>
                  <label htmlFor="fn" className="form-label fs-base">
                    Full name
                  </label>
                  <input type="text" className="form-control form-control-lg" id="fn" required />
                  <div className="invalid-feedback">Please enter your full name!</div>
                </Col>

                <Col sm={6}>
                  <label htmlFor="email" className="form-label fs-base">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    required
                  />
                  <div className="invalid-feedback">Please provide a valid email address!</div>
                </Col>

                <Col xs={12} className="pb-2">
                  <label htmlFor="message" className="form-label fs-base">
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    rows={3}
                    required
                  ></textarea>
                  <div className="invalid-feedback">Please provide a message!</div>
                </Col>

                <Col xs={12}>
                  <button type="submit" className="btn btn-lg btn-primary w-100 w-sm-auto">
                    Contact Us
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
