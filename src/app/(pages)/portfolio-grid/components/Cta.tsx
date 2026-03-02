import CtaImg from '@/assets/img/about/cta.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Cta = () => {
  return (
    <section className="container mb-1 mb-md-3 mb-lg-4">
      <div className="bg-secondary rounded-3 overflow-hidden">
        <Row className="align-items-center">
          <Col xl={4} md={5} className="offset-lg-1">
            <div className="pt-5 pb-3 pb-md-5 px-4 px-lg-0 text-center text-md-start">
              <p className="lead mb-3">Ready to get started?</p>
              <h2 className="h1 pb-3 pb-sm-4">
                Take Your <span className="text-primary">Business</span> to the Next Level
              </h2>
              <Link to="#" className="btn btn-primary btn-lg">
                Work with us
              </Link>
            </div>
          </Col>
          <Col lg={6} md={7} className="offset-xl-1">
            <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100">
              <svg
                className="d-none d-md-block position-absolute top-50 start-0 translate-middle-y"
                width="868"
                height="868"
                style={{ minWidth: '868px' }}
                viewBox="0 0 868 868"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.15" cx="434" cy="434" r="434" fill="#6366F1" />
              </svg>
              <img
                src={CtaImg}
                className="position-relative zindex-3 mb-2 my-lg-4"
                width="382"
                alt="Illustration"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Cta;
