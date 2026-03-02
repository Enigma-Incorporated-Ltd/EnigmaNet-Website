import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <section
      className="position-relative pt-5"
      style={{ backgroundColor: '#151922' }}
      data-bs-theme="dark"
    >
      <Container className="position-relative zindex-2 pt-5 pb-2 pb-md-0">
        <nav className="pt-lg-4" aria-label="breadcrumb">
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
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item active" aria-current="page">
              Contacts v.1
            </li>
          </ol>
        </nav>

        <Row className="justify-content-center pt-3 mt-3">
          <Col xl={6} lg={7} md={8} sm={10} className="text-center">
            <h1 className="mb-4">Get in Touch</h1>
            <p className="text-body fs-lg pb-3 mb-3">
              Have a project in mind? To request a quote contact us directly or fill out the form
              and let us know how we can help.
            </p>
            <div className="d-flex justify-content-center">
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-facebook rounded-circle mx-2"
                aria-label="Facebook"
              >
                <IconifyIcon icon="bxl:facebook" fontSize={20} />
              </Link>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-instagram rounded-circle mx-2"
                aria-label="Instagram"
              >
                <IconifyIcon icon="bxl:instagram" fontSize={20} />
              </Link>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-google rounded-circle mx-2"
                aria-label="Google"
              >
                <IconifyIcon icon="bxl:google" fontSize={20} />
              </Link>
              <Link
                to="#"
                className="btn btn-icon btn-secondary btn-twitter rounded-circle mx-2"
                aria-label="Twitter"
              >
                <IconifyIcon icon="bxl:twitter" fontSize={20} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <div
        className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n5"
        style={{ color: '#151922' }}
      >
        <div
          className="position-relative start-50 translate-middle-x flex-shrink-0 mt-n5 mt-md-n3 mt-lg-n1"
          style={{ width: '3788px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="3788" height="144" viewBox="0 0 3788 144">
            <path
              fill="currentColor"
              d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
