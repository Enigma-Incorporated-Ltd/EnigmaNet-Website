import { Col, Container, Row } from 'react-bootstrap';
import sassMap from '@/assets/img/landing/saas-5/map.png';


const Map = () => {
  return (
    <section className="bg-dark py-5" data-bs-theme="dark">
      <Container className="pt-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
        <Row className="pt-lg-2 pt-xl-3">
          <Col md={6}>
            <h2 className="h1 pe-xxl-5 me-xl-4 mb-md-0">
              Our <span className="text-warning">data centers</span> spread all over the world. Get
              access to the API from anywhere
            </h2>
          </Col>
          <Col md={6} xl={5} className="offset-xl-1">
            <p className="text-body fs-xl mb-0">
              Our data centers are a key component of our global infrastructure, providing reliable
              and scalable computing resources to customers around the world. We offer a highly
              distributed and resilient platform that can support the most demanding workloads.
            </p>
          </Col>
        </Row>
        <div className="pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
          <img src={sassMap} alt="Map" />
        </div>
      </Container>
    </section>
  );
};

export default Map;
