import signin from '@/assets/img/account/signin-bg.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';


const Index = () => {
  return (
    <>
      <PageMeta title='Acount Sign In' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="position-relative h-100 pt-5 pb-4">
        <Container className="d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
          <div className="w-100 align-self-end pt-lg-4 pt-1 mt-lg-5 pt-md-4 pb-4" style={{ maxWidth: '526px' }}>
            <h1 className="text-center text-xl-start pt-3">Create Account</h1>
            <p className="text-center text-xl-start pb-3 mb-3">
              Already have an account?
              <Link to="/account-signin">Sign in here.</Link>
            </p>
            <form className="needs-validation" noValidate>
              <Row>
                <Col sm={6}>
                  <div className="position-relative mb-4">
                    <label htmlFor="name" className="form-label fs-base">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg"
                      required
                    />
                    <div className="invalid-feedback position-absolute start-0 top-100">
                      Please enter your name!
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="position-relative mb-4">
                    <label htmlFor="email" className="form-label fs-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      required
                    />
                    <div className="invalid-feedback position-absolute start-0 top-100">
                      Please enter a valid email address!
                    </div>
                  </div>
                </Col>
                <Col xs={12} className="mb-4">
                  <label htmlFor="password" className="form-label fs-base">
                    Password
                  </label>
                  <div className="password-toggle">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      required
                    />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                      <input className="password-toggle-check" type="checkbox" />
                      <span className="password-toggle-indicator"></span>
                    </label>
                    <div className="invalid-feedback position-absolute start-0 top-100">
                      Please enter a password!
                    </div>
                  </div>
                </Col>
                <Col xs={12} className="mb-4">
                  <label htmlFor="password-confirm" className="form-label fs-base">
                    Confirm password
                  </label>
                  <div className="password-toggle">
                    <input
                      type="password"
                      id="password-confirm"
                      className="form-control form-control-lg"
                      required
                    />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                      <input className="password-toggle-check" type="checkbox" />
                      <span className="password-toggle-indicator"></span>
                    </label>
                    <div className="invalid-feedback position-absolute start-0 top-100">
                      Please enter a password!
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="mb-4">
                <div className="form-check">
                  <input type="checkbox" id="terms" className="form-check-input" />
                  <label htmlFor="terms" className="form-check-label fs-base">
                    I agree to <a href="#">Terms &amp; Conditions</a>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100">
                Sign up
              </button>
            </form>
            <hr className="my-4" />
            <h6 className="text-center mb-4">Or sign up with your social network</h6>
            <Row className="row-cols-1 row-cols-sm-2">
              <Col className="mb-3">
                <Link to="#" className="btn btn-icon btn-secondary btn-google btn-lg w-100">
                  <IconifyIcon icon="bxl:google" className="fs-xl me-2" />
                  Google
                </Link>
              </Col>
              <Col className="mb-3">
                <Link to="#" className="btn btn-icon btn-secondary btn-facebook btn-lg w-100">
                  <IconifyIcon icon="bxl:facebook" className="fs-xl me-2" />
                  Facebook
                </Link>
              </Col>
            </Row>
          </div>
          <div className="w-100 align-self-end">
            <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
              &copy; All rights reserved. Made by
              <Link
                className="nav-link d-inline-block p-0"
                to="https://coderthemes.com/"
                target="_blank"
                rel="noopener"
              >
                Coderthemes
              </Link>
            </p>
          </div>
        </Container>
        <div
          className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
          style={{ backgroundImage: `url(${signin})` }}
        ></div>
      </section>
    </>
  );
};

export default Index;
