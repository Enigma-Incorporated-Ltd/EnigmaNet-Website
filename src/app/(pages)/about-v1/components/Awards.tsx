import webby from '@/assets/img/landing/digital-agency/awards/webby.svg';
import cssda from '@/assets/img/landing/digital-agency/awards/cssda.svg';
import awward from '@/assets/img/landing/digital-agency/awards/awwwards.svg';
import Fwa from '@/assets/img/landing/digital-agency/awards/fwa.svg';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Awards = () => {
  return (
    <section className="container mb-5 pb-3 pb-md-4 pb-lg-5">
      <Row className="gy-4 py-xl-2">
        <Col md={4}>
          <h2 className="mb-0 text-md-start text-center">Award-winning designs featured by</h2>
        </Col>
        <Col lg={7} className="offset-lg-1 col-md-8">
          <Row className="row-cols-sm-4 row-cols-2 gy-4">
            <Col>
              <div className="position-relative text-center">
                <img src={webby} width="100" alt="Webby" className="d-block mx-auto mb-3" />
                <Link
                  to="#"
                  className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >
                  4x mobile of the day
                </Link>
              </div>
            </Col>
            <Col>
              <div className="position-relative text-center">
                <img src={cssda} width="100" alt="CSSDA" className="d-block mx-auto mb-3" />
                <Link
                  to="#"
                  className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >
                  1x Kudos
                </Link>
              </div>
            </Col>
            <Col>
              <div className="position-relative text-center">
                <img src={awward} width="100" alt="Awwwards" className="d-block mx-auto mb-3" />
                <Link
                  to="#"
                  className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >
                  3x website of the day
                </Link>
              </div>
            </Col>
            <Col>
              <div className="position-relative text-center">
                <img src={Fwa} width="100" alt="FWA" className="d-block mx-auto mb-3" />
                <Link
                  to="#"
                  className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >
                  2x best website
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Awards;
