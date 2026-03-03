import color01 from '@/assets/img/landing/product/colors/01.png';
import color02 from '@/assets/img/landing/product/colors/02.png';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Colors = () => {
  return (
    <section className="mb-5 py-5 bg-secondary">
      <Container className="my-xl-5 my-lg-4 pb-2 py-sm-3 py-md-4">
        <Row className="my-2">
          <Col xl={4} lg={5}>
            <div
              className="mb-lg-0 mb-5 mx-lg-0 mx-auto text-lg-start text-center"
              style={{ maxWidth: '26rem' }}
            >
              <h2 className="h1 mb-4 pb-3">
                Two colors.
                <br />
                Choose your best.
              </h2>
              <p className="mb-4">
                “ProDrone 2.0 changes the rules of the game in aerial photography. Now you can
                capture more details from a safe distance, as well as implement different visual
                effects with different focal lengths.”
              </p>
              <h5 className="mb-1">Wade Warren</h5>
              <span>ProDrone Inc. Co-Owner</span>
            </div>
          </Col>
          <Col lg={7} className="offset-xl-1">
            <Row className="row-cols-sm-2 row-cols-1 gy-4">
              <Col>
                <Card className="card-hover border-0 shadow position-relative">
                  <img src={color01} alt="Skin image" className="card-img-top" />
                  <CardBody className="mt-n5 mx-3 mb-3 pt-0 text-center">
                    <span>White ProDrone 2.0</span>
                    <h3 className="mt-2 mb-4">$1200</h3>
                    <Link to="#" className="btn btn-primary stretched-link">
                      Buy now
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              <Col>
                <Card className="card-hover border-0 shadow position-relative">
                  <img src={color02} alt="Skin image" className="card-img-top" />
                  <CardBody className="mt-n5 mx-3 mb-3 pt-0 text-center">
                    <span>White ProDrone 2.0</span>
                    <h3 className="mt-2 mb-4">$1100</h3>
                    <Link to="#" className="btn btn-primary stretched-link">
                      Buy now
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Colors;
