import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import phone from '@/assets/img/landing/startup/hero/phone.png';
import scooter from '@/assets/img/landing/startup/hero/scooters.png';
import IconifyIcon from '@/components/IconifyIcon';
import Parallax from '@/components/Parallax';

const Hero = () => {
  return (
    <section className="overflow-hidden pt-2 pt-md-4 pt-lg-5">
      <Container className="pt-1 pt-sm-0">
        <Row className="align-items-center">
          <Col md={7} className="order-md-2 mb-3 mb-sm-2 mb-md-0">
            <Parallax>
              <div className="parallax" style={{ maxWidth: '746px' }}>
                <div className="parallax-layer" data-depth="0.1">
                  <img src={phone} alt="Phone" className="img-fluid" />
                </div>
                <div className="parallax-layer" data-depth="0.2">
                  <img src={scooter} alt="Scooters" className="img-fluid" />
                </div>
              </div>
            </Parallax>
          </Col>

          <Col md={5} className="order-md-1">
            <h1 className="display-4 mb-4">We ride. We care. We share.</h1>
            <p className="fs-xl pb-2 mb-4 mb-xl-5" style={{ maxWidth: '450px' }}>
              Empower citizens to move with ease and style by sharing sustainable vehicles.
            </p>

            <div
              className="position-relative d-md-none d-lg-block mb-4"
              style={{ maxWidth: '416px' }}
            >
              <IconifyIcon
                icon="bxl:kickstarter"
                className="d-flex justify-content-center align-items-center position-absolute bg-dark text-white rounded-1"
                style={{
                  top: 0,
                  left: '63%',
                  width: '1.5rem',
                  height: '1.5rem',
                  marginTop: '-.525rem',
                  marginLeft: '-.5rem',
                  fontSize: '1rem',
                }}
              />
              <IconifyIcon
                icon="bxl:kickstarter"
                className="d-none d-dark-mode-flex justify-content-center align-items-center position-absolute bg-white fs-lg badge text-dark rounded-1 p-0"
                style={{
                  top: 0,
                  left: '63%',
                  width: '1.5rem',
                  height: '1.5rem',
                  marginTop: '-.525rem',
                  marginLeft: '-.5rem',
                  fontSize: '1rem',
                }}
              />

              <ProgressBar now={63} variant="success" style={{ height: '6px' }} />
            </div>

            <ul className="list-unstyled d-md-none d-lg-block pb-1 pb-xl-0 mb-4 mb-xl-5">
              <li className="d-flex align-items-center mb-2">
                <IconifyIcon icon="bx:check-circle" className="text-primary me-2 fs-5" />
                $8,294 pledged
              </li>
              <li className="d-flex align-items-center mb-2">
                <IconifyIcon icon="bx:check-circle" className="text-primary me-2 fs-5" />
                63% funded
              </li>
              <li className="d-flex align-items-center mb-2">
                <IconifyIcon icon="bx:check-circle" className="text-primary me-2 fs-5" />
                15 days to go
              </li>
            </ul>

            <Button size="lg" className="btn-primary w-100 w-sm-auto">
              Back us on Kickstarter
              <IconifyIcon icon="bx:arrow-right" className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
