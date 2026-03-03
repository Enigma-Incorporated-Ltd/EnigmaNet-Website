import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';

const PageTitle = () => {
  return (
    <section className="container pb-5 mb-md-2 mb-lg-4 mb-xl-5">
      <Row className="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
        <Col lg={6}>
          <h1 className="display-2 mb-0">Custom Software Development</h1>
        </Col>
        <Col lg={6} xl={5} className="offset-xl-1 pt-3 pt-sm-4 pt-lg-3">
          <p className="fs-xl pb-4 mb-1 mb-md-2 mb-xl-3">
            Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum
            bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada
            blandit justo, quam.
          </p>
          <Link to="#" className="btn btn-lg btn-primary shadow-primary">
            Start your project
          </Link>
        </Col>
      </Row>
      <hr />
    </section>
  );
};

export default PageTitle;
