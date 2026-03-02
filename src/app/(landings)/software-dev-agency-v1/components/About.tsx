import awards from '@/assets/img/landing/software-agency-1/awards.svg';
import about from '@/assets/img/landing/software-agency-1/about-img.jpg';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
      <Row className="pt-xl-3">
        <Col md={5} className="text-center text-md-start pb-5">
          <h1 className="mb-4">Award-Winning Software Company</h1>
          <p className="fs-lg pb-lg-3 mb-4">
            We create diverse, complex, web and mobile solutions for any business need. With us you
            get quality software and perfect service every time.
          </p>
          <Link to="/about-v2" className="btn btn-primary shadow-primary btn-lg">
            More About Us
          </Link>
          <div className="mt-3 mt-sm-0 pt-4 pt-sm-5 mt-xl-4">
            <h2 className="h6 mb-4">Some of our awards:</h2>
            <img src={awards} alt="Awards" />
          </div>
        </Col>
        <Col xl={6} md={7} className="offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
          <img src={about} className="rounded-3 shadow-sm" alt="Image" />
        </Col>
      </Row>
    </section>
  );
};

export default About;
