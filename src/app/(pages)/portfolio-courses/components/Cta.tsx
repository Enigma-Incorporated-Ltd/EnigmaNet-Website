import StepDark from '@/assets/img/landing/online-courses/steps/04-dark.svg';
import stepLight from '@/assets/img/landing/online-courses/steps/04-light.svg';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Cta = () => {
  return (
    <div className="bg-secondary rounded-3 my-2 my-md-4 my-lg-5 py-5 px-3 px-md-0">
      <Row className="align-items-center">
        <Col
          md={5}
          className="offset-lg-1 text-center text-md-start ps-md-5 ps-lg-0 ps-xl-5 pb-2 pb-md-0 mb-4 mb-md-0"
        >
          <p className="lead mb-3">Ready to get started?</p>
          <h2 className="h1 pb-2 pb-md-4">
            Take Your <span className="text-primary">Skills</span> to the Next Level
          </h2>
          <Link to="#" className="btn btn-primary btn-lg">
            Sign up now!
          </Link>
        </Col>
        <div className="col-lg-6 col-md-7">
          <div className="d-table mx-auto">
            <img src={StepDark} className="d-dark-mode-none" width="380" alt="Illustration" />
            <img
              src={stepLight}
              className="d-none d-dark-mode-block"
              width="380"
              alt="Illustration"
            />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Cta;
