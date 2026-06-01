import { Col, Container, Row } from 'react-bootstrap';
import { OilGasUsecase } from '@/assets/img';
import UseCaseButton from '@/components/ui/useCaseButton';
import HeaderTitle from '@/components/ui/HeaderTitle';

const OperationalImpact = () => {
  return (
    <section className="bg-white py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Image */}
          <Col lg={6} className="d-flex justify-content-lg-start justify-content-center">
            <img src={OilGasUsecase} alt="Healthcare Remote Site" className="img-fluid rounded-4" />
          </Col>

          {/* Right Content */}
          <Col lg={6}>
            <HeaderTitle
              title="Oil & Gas"
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
              Connectivity Built for Extreme Industrial Environments
            </h5>

            <p
              className=" mb-4"
              style={{
                color: '#000',
                fontWeight: 500,
              }}
            >
              Remote industrial sites often rely on unstable high-latency infrastructure including
              satellite, microwave and fringe LTE/5G connections where packet loss and jitter
              disrupt critical systems and real-time operations. Enigma combines all available
              network paths into a single resilient transport layer with intelligent traffic
              steering, accelerated TCP performance and sub-second failover.
            </p>

            <div className="mb-4">
              <p
                className="mb-2 fw-semibold"
                style={{
                  color: '#000',
                  fontWeight: 400,
                }}
              >
                Operational Impact
              </p>

              <ul
                className=""
                style={{
                  color: '#000',
                  fontWeight: 400,
                }}
              >
                <li>Seismic data and industrial logs transferred in minutes instead of hours</li>
                <li>Stable SCADA, voice, and alarm connectivity during weather disruption</li>
                <li>No infrastructure replacement required</li>
                <li> Supports legacy operational environments and industrial protocols</li>
              </ul>
            </div>
            <div className="d-flex justify-content-lg-start justify-content-center">
                <UseCaseButton text="Book a Pilot" variant="blue" href="/get-in-touch" />
</div>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OperationalImpact;
