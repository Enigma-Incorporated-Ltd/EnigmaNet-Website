import { Col, Container, Row } from 'react-bootstrap';
import space01 from '@/assets/img/landing/product/specs/01.png';
import space02 from '@/assets/img/landing/product/specs/02.png';
import space03 from '@/assets/img/landing/product/specs/03.png';
import space04 from '@/assets/img/landing/product/specs/04.png';

const Specs = () => {
  return (
    <Container className="pb-5 pt-md-2 pt-lg-4 pt-xl-5">
      <h2 className="h1 mb-5">Specs</h2>
      <Row className="pb-md-2 pb-lg-4 pb-xl-5 mb-xxl-2">
        <Col lg={8} md={9}>
          <div className="table-responsive border-top mb-0">
            <table className="table align-middle">
              <tbody>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Weight (Battery &amp; Propellers Included)
                  </th>
                  <td className="pe-0">
                    <span className="d-inline-block my-4 py-1">1400 g</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Max Flight Time
                  </th>
                  <td className="pe-0">
                    <span className="d-inline-block my-4 py-1">Approx. 60 minutes</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Vision System
                  </th>
                  <td className="pe-0">
                    <div className="d-inline-block my-4 py-1">
                      <ul className="list-unstyled mb-0">
                        <li>Forward Vision System</li>
                        <li>Backward Vision System</li>
                        <li>Downward Vision System</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Obstacle Sensing
                  </th>
                  <td className="pe-0">
                    <div className="d-inline-block my-4 py-1">
                      <ul className="list-unstyled mb-0">
                        <li>Front &amp; Rear Obstacle Avoidance</li>
                        <li>Left &amp; Right Infrared Obstacle Avoidance</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Camera Sensor
                  </th>
                  <td className="pe-0">
                    <div className="d-inline-block my-4 py-1">
                      <ul className="list-unstyled mb-0">
                        <li>1" CMOS</li>
                        <li>Effective pixels: 20 M</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Max. Video Recording Resolution
                  </th>
                  <td className="pe-0">
                    <span className="d-inline-block my-4 py-1">4K 60P</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Max Transmission Distance
                  </th>
                  <td className="pe-0">
                    <span className="d-inline-block my-4 py-1">FCC: 4.3 mi</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Video Transmission System
                  </th>
                  <td className="pe-0">
                    <span className="d-inline-block my-4 py-1">Lightbridge</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="ps-0 h5">
                    Operating Frequency
                  </th>
                  <td className="pe-0">
                    <span className="d-inline-block my-4 py-1">2.4 GHz/5.8 GHz</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col md={3} className="offset-lg-1">
          <Row className="row-cols-2 row-cols-md-1">
            <Col>
              <img src={space01} alt="Image" />
            </Col>
            <Col>
              <img src={space02} alt="Image" />
            </Col>
            <Col>
              <img src={space03} alt="Image" />
            </Col>
            <Col>
              <img src={space04} alt="Image" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Specs;
