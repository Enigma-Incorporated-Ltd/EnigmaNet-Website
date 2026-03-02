import avatars from '@/assets/img/landing/saas-3/feature-2/avatars.png';
import { Col, Container, Row } from 'react-bootstrap';
import Parallax from '@/components/Parallax';

const FeatureApp = () => {
  return (
    <Container className="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
      <Row className="align-items-center pt-2 pb-3">
        <Col md={6} xl={5} className="text-center text-md-start mb-5 mb-md-0">
          <h2 className="h1 pb-2 pb-lg-3">Explore Opportunities with Silicon App</h2>
          <p className="pb-2 mb-4 mb-lg-5">
            In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id
            porttitor aliquam eget aliquet sagittis eu aut diam ut phasellus sed convallis iaculis
            neque ultricies convallis sed enim.
          </p>
          <hr />
          <div className="d-flex justify-content-center justify-content-md-between pt-4 pt-lg-5">
            <div className="mx-3 mx-md-0">
              <div className="display-3 text-dark mb-1">23%</div>
              <span>Nulla venenatis everys</span>
            </div>
            <div className="mx-3 mx-md-0">
              <div className="display-3 text-dark mb-1">132b</div>
              <span>Dictum in marko elementum</span>
            </div>
          </div>
        </Col>

        <Parallax>
          <Col md={6} className="offset-xl-1">
            <div className="parallax ratio ratio-1x1 mx-auto" style={{ maxWidth: '550px' }}>
              <div className="parallax-layer position-absolute zindex-2" data-depth="-0.15">
                <img src={avatars} alt="Avatar" />
              </div>

              <div
                className="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                data-depth="0.1"
              >
                <div
                  className="rounded-circle bg-primary"
                  style={{ width: '70%', height: '70%', opacity: '.06' }}
                ></div>
              </div>

              <div
                className="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                data-depth="0.2"
              >
                <div
                  className="rounded-circle bg-primary"
                  style={{ width: '55%', height: '55%', opacity: '.06' }}
                ></div>
              </div>

              <div
                className="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-3"
                data-depth="0.4"
              >
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle bg-primary"
                  style={{
                    width: '93px',
                    height: '93px',
                    boxShadow: '0 .1875rem 1.875rem -.125rem rgba(99,102,241, .95)',
                  }}
                >
                  <span className="h5 text-light mb-0">400K+</span>
                </div>
              </div>

              <div
                className="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                data-depth="0.3"
              >
                <div
                  className="rounded-circle bg-primary"
                  style={{ width: '40%', height: '40%', opacity: '.06' }}
                ></div>
              </div>
            </div>
          </Col>
        </Parallax>
      </Row>
    </Container>
  );
};

export default FeatureApp;
