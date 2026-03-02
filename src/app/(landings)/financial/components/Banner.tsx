import Lottie from 'lottie-react';
import animationData from '@/assets/json/animation-financial-landing.json';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <section className="container">
      <Card className="bg-white border-primary shadow-sm px-4 px-lg-0" data-bs-theme="light">
        <Row className="align-items-center py-3">
          <Col xl={5} md={6} className="offset-lg-1 text-center text-md-start py-4 py-lg-5">
            <h2 className="h1">Our Response to COVID-19</h2>
            <h3 className="h4 text-primary">Get remote financial consulting help</h3>
            <p className="mb-4 mb-lg-5">
              At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus
              amet ultricies. Magna aliquam id nunc ut eu.
            </p>
            <Link to="#" className="btn btn-primary">
              Find out More
            </Link>
          </Col>

          <Col xl={6} lg={5} md={6}>
            <div style={{ maxWidth: 416, margin: '0 auto' }}>
              <Lottie animationData={animationData} loop autoplay />
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default Banner;
