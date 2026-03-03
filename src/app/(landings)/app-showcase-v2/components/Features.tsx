import payments from '@/assets/img/landing/app-showcase-2/features/payments.svg';
import cashback from '@/assets/img/landing/app-showcase-2/features/cashback.svg';
import statistics from '@/assets/img/landing/app-showcase-2/features/statistics.svg';
import security from '@/assets/img/landing/app-showcase-2/features/security.svg';
import stats from '@/assets/img/landing/app-showcase-2/stats.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
  return (
    <Container className="py-5 my-md-3 my-lg-4 my-xl-5">
      <Row className="align-items-center align-items-xl-end py-2 pb-sm-3">
        <Col md={6} className="mb-5 mb-md-0">
          <div style={{ maxWidth: '570px' }}>
            <h2 className="h1 pb-3 mb-2 mb-md-3">
              Get possibilities for better trading with Silicon
            </h2>
            <Row className="row-cols-1 row-cols-sm-2 gx-lg-5 g-4">
              <Col className="d-md-flex d-xl-block align-items-center pt-1 pt-sm-2 pt-md-0 pt-xl-3">
                <div className="d-table bg-secondary rounded flex-shrink-0 p-2 mb-3 me-md-3 me-xl-0">
                  <img src={payments} width="19" className="d-block m-1" alt="Icon" />
                </div>
                <h3 className="h5 pb-sm-1 mb-2">
                  <span className="d-md-none d-xl-block">Top Up Account Easily</span>
                  <span className="fs-base text-nav d-none d-md-block d-xl-none">
                    Top Up Account Easily
                  </span>
                </h3>
                <p className="fs-sm mb-0 d-md-none d-xl-block">
                  Mollis consectetur congue egestas egestas suspendisse blandit proin volutpat
                  mollis egestas in ultrices.
                </p>
              </Col>
              <Col className="d-md-flex d-xl-block align-items-center pt-1 pt-sm-2 pt-md-0 pt-xl-3">
                <div className="d-table bg-secondary rounded flex-shrink-0 p-2 mb-3 me-md-3 me-xl-0">
                  <img src={cashback} width="19" className="d-block m-1" alt="Icon" />
                </div>
                <h3 className="h5 pb-sm-1 mb-2">
                  <span className="d-md-none d-xl-block">Regular Cashback</span>
                  <span className="fs-base text-nav d-none d-md-block d-xl-none">
                    Regular Cashback
                  </span>
                </h3>
                <p className="fs-sm mb-0 d-md-none d-xl-block">
                  Id mollis consectetur congue egestas egestas suspendisse blandit justo lorem ipsum
                  dolor sit amet, consectetur elit.
                </p>
              </Col>
              <Col className="d-md-flex d-xl-block align-items-center pt-1 pt-sm-2 pt-md-0 pt-xl-3">
                <div className="d-table bg-secondary rounded flex-shrink-0 p-2 mb-3 me-md-3 me-xl-0">
                  <img src={statistics} width="19" className="d-block m-1" alt="Icon" />
                </div>
                <h3 className="h5 pb-sm-1 mb-2">
                  <span className="d-md-none d-xl-block">Cost Statistics</span>
                  <span className="fs-base text-nav d-none d-md-block d-xl-none">
                    Cost Statistics
                  </span>
                </h3>
                <p className="fs-sm mb-0 d-md-none d-xl-block">
                  Congue fames odio tincidunt mus. Eleifend in at arcu id sit scelerisque in. Elit
                  quis sem dictum non turpis eget.
                </p>
              </Col>
              <Col className="d-md-flex d-xl-block align-items-center pt-1 pt-sm-2 pt-md-0 pt-xl-3">
                <div className="d-table bg-secondary rounded flex-shrink-0 p-2 mb-3 me-md-3 me-xl-0">
                  <img src={security} width="19" className="d-block m-1" alt="Icon" />
                </div>
                <h3 className="h5 pb-sm-1 mb-2">
                  <span className="d-md-none d-xl-block">Data Security</span>
                  <span className="fs-base text-nav d-none d-md-block d-xl-none">
                    Data Security
                  </span>
                </h3>
                <p className="fs-sm mb-0 d-md-none d-xl-block">
                  Vulputate commodo tincidunt risus ac odio cursus morbi ipsum ut in laoreet
                  fermentum condimentum.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="col-md-6">
          <div
            className="rellax position-relative rounded-3 mb-xl-5"
            style={{ boxShadow: '-7px 12px 60px 0 rgba(126,123,160, .12)' }}
            data-rellax-percentage="0.5"
            data-rellax-speed="1.3"
            data-disable-parallax-down="xl"
          >
            <img src={stats} className="d-block rounded-3" alt="Stats screen" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
