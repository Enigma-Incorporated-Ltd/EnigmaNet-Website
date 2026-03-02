import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';

const Prices = () => {
  return (
    <section className="container pt-4 pb-2 py-md-4 py-lg-5">
      <Row className="pb-1">
        <Col md={5} xl={4} className="text-center text-md-start pb-4 mb-2">
          <h2 className="h1 mb-lg-4">Our prices for best results</h2>
          <p className="pb-4 mb-1 mb-lg-3">
            Nisi augue at ridiculus ullamcorper ibendum nunc dignissim habitasse in mollis orci.
            Elementum duis ultricies vehicula nullam tristique.
          </p>
          <Link to="#" className="btn btn-primary shadow-primary btn-lg">
            Make an appointment
          </Link>
        </Col>
        <Col md={7} className="offset-xl-1">
          <div className="bg-secondary rounded-3 p-4">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mx-sm-3 mb-4">
              <span className="fs-xl fw-500">Surgery and Implantation</span>
              <span>
                from<span className="h5 ms-2 mb-0">$120</span>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mx-sm-3 mb-4">
              <span className="fs-xl">Full teeth cleaning</span>
              <span>
                from<span className="h5 ms-2 mb-0">$1,200</span>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mx-sm-3 mb-4">
              <span className="fs-xl">Therapeutic dentistry</span>
              <span>
                from<span className="h5 ms-2 mb-0">$500</span>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mx-sm-3 mb-4">
              <span className="fs-xl">Aesthetic dentistry</span>
              <span>
                from<span className="h5 ms-2 mb-0">$2,000</span>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mx-sm-3 mb-4">
              <span className="fs-xl">Professional oral hygiene</span>
              <span>
                from<span className="h5 ms-2 mb-0">$100</span>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center mx-3">
              <span className="fs-xl">Full teeth cleaning</span>
              <span>
                from<span className="h5 ms-2 mb-0">$1,300</span>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Prices;
