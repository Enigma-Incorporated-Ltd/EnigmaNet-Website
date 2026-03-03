import tesImage from '@/assets/img/testimonials/03.jpg';
import brand02 from '@/assets/img/brands/02.svg';
import avatar from '@/assets/img/avatar/05.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';

const UserTest = () => {
  return (
    <section className="bg-secondary py-5">
      <Container className="py-2 py-md-4 py-lg-5">
        <Row>
          <Col md={4}>
            <div className="position-relative d-flex h-100">
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-3 bg-size-cover bg-repeat-0 bg-position-center"
                style={{ backgroundImage: `url(${tesImage})` }}
              ></div>
            </div>
          </Col>
          <Col md={8}>
            <figure className="card position-relative border-0 shadow-sm py-3 p-0 p-lg-4 mt-4 mb-0 ms-xl-5">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-lg-5">
                <IconifyIcon icon="bxs:quote-left" />
              </span>
              <blockquote className="card-body mt-2 mb-0">
                <p className="fs-lg">
                  Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius
                  mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget.
                  Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam
                  integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at
                  mauris.
                </p>
              </blockquote>
              <figcaption className="card-footer border-0 d-sm-flex pt-0 mt-n3 mt-lg-0">
                <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-4">
                  <img
                    src={avatar}
                    width="48"
                    className="d-md-none rounded-circle"
                    alt="Ralph Edwards"
                  />
                  <div className="ps-3 ps-md-0">
                    <h5 className="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                    <span className="fs-sm text-muted">Head of Marketing</span>
                  </div>
                </div>
                <img
                  src={brand02}
                  width="160"
                  className="d-block mt-2 ms-5 mt-sm-0 ms-sm-0"
                  alt="Company logo"
                />
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserTest;
