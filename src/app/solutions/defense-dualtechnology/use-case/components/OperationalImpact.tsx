import { Col, Container, Row } from 'react-bootstrap';
import { DefenseCase1 } from '@/assets/img';
import HeaderTitle from '@/components/ui/HeaderTitle';

const OperationalImpact = () => {
  return (
    <section className="bg-white py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Image */}
          <Col
            lg={6}
            className="d-flex justify-content-lg-start align-items-center pt-5 justify-content-center"
          >
            <img src={DefenseCase1} alt="Healthcare Remote Site" className="img-fluid rounded-4" />
          </Col>

          {/* Right Content */}
          <Col lg={6}>
            <HeaderTitle
              title=" Flexible Deployment Architecture"
              variant="gold"
              className="d-flex justify-content-lg-start justify-content-center"
            />
            <h5
              className="mb-4 d-flex justify-content-lg-start justify-content-center"
              style={{
                color: '#001A94',
                fontWeight: 500,
              }}
            >
              Enigma enables secure communications continuity across distributed, degraded and
              operationally sensitive environments.
            </h5>

            <div className="mb-4">
              <ul
                className=""
                style={{
                  color: '#000',
                  fontWeight: 400,
                }}
              >
                <li>On-Premise Deployment</li>
                <li>Air-Gapped Infrastructure</li>
                <li>Lightweight Edge Devices</li>
                <li> Fibre / LTE / Satellite Support</li>
                <li>No Production Reconfiguration</li>
                <li>Multi-Carrier Routing</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OperationalImpact;
