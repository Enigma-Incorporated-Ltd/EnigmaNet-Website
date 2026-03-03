import Lottie from 'lottie-react';
import animation404 from '@/assets/json/animation-404-v1.json';
import { Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import Navbar from '@/components/navbar/Navbar';

const Error = () => {
  return (
    <>
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <section className="container my-5 text-md-start text-center">
        <Row className="align-items-center">
          <Col xl={6} md={7} className="order-md-2 ms-n5">
            <Lottie animationData={animation404} loop autoplay />
          </Col>

          <Col md={5} className="offset-xl-1 order-md-1">
            <h1 className="display-1 mb-sm-4 mt-n4 mt-sm-n5">Error 404</h1>
            <p className="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">
              The page you are looking for was moved, removed, or might never have existed.
            </p>
            <Link to="/" className="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
              <IconifyIcon icon="bx:home-alt" className="me-2 ms-n1 lead" />
              Go to homepage
            </Link>
          </Col>
        </Row>
      </section>
      <footer
        className="container text-md-start text-center py-lg-5 py-4"
        style={{ transform: 'translateY(-100%)' }}
      >
        <div className="row">
          <div className="col-xl-11 offset-xl-1">
            <p className="nav d-block fs-sm text-center text-md-start mb-0">
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
        </div>
      </footer>
    </>
  );
};

export default Error;
