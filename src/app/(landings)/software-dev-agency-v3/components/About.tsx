import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutImg from '@/assets/img/landing/software-agency-1/about-img.jpg';
import clutchLight from '@/assets/img/landing/software-agency-3/awards/clutch-light.png';
import clutchDark from '@/assets/img/landing/software-agency-3/awards/clutch-dark.png';
import forbesLight from '@/assets/img/landing/software-agency-3/awards/forbes-light.png';
import forbesDark from '@/assets/img/landing/software-agency-3/awards/forbes-dark.png';
import awwwardsLight from '@/assets/img/landing/software-agency-3/awards/awwwards-light.png';
import awwwardsDark from '@/assets/img/landing/software-agency-3/awards/awwwards-dark.png';

const About = () => {
  return (
    <section className="my-5 py-lg-5 py-md-4 py-3">
      <Container>
        <Row className="gy-4 py-xl-3">
          <Col md={6}>
            <img src={aboutImg} alt="About us" className="rounded-3" />
          </Col>

          <Col lg={5} md={6} className="offset-lg-1 d-flex">
            <div className="align-self-center ps-lg-0 ps-md-4">
              <h2 className="h1 mb-lg-4 mb-3">Award-Winning Software Company</h2>
              <p className="mb-4 pb-lg-3 fs-lg">
                Erat pharetra sed at fringilla etiam nullam platea fringilla. Gravida sodales sit
                mauris amet massa justo. Egestas ipsum amet tortor hendrerit amet phasellus
                adipiscing. Eget porta posuere pellentesque sed commodo gravida dignissim dignissim
                iaculis. Elementum nibh duis at in.
              </p>

              <div className="d-flex align-items-center ms-sm-n4 ms-n3 mb-4 pb-lg-3">
                <div className="ms-sm-4 ms-3">
                  <img
                    src={clutchLight}
                    width={63}
                    alt="Clutch"
                    className="d-dark-mode-none d-block"
                  />
                  <img
                    src={clutchDark}
                    width={63}
                    alt="Clutch"
                    className="d-dark-mode-block d-none"
                  />
                </div>

                <div className="ms-sm-4 ms-3">
                  <img
                    src={forbesLight}
                    width={72}
                    alt="Forbes"
                    className="d-dark-mode-none d-block"
                  />
                  <img
                    src={forbesDark}
                    width={72}
                    alt="Forbes"
                    className="d-dark-mode-block d-none"
                  />
                </div>

                <div className="ms-sm-4 ms-3">
                  <img
                    src={awwwardsLight}
                    width={37}
                    alt="Awwwards"
                    className="d-dark-mode-none d-block"
                  />
                  <img
                    src={awwwardsDark}
                    width={37}
                    alt="Awwwards"
                    className="d-dark-mode-block d-none"
                  />
                </div>
              </div>

              <Button size="lg" variant="outline-primary">
                More about us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
