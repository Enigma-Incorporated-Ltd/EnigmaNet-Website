import battery from '@/assets/img/landing/product/benefits/battery.svg';
import drone from '@/assets/img/landing/product/benefits/drone.svg';
import monitor from '@/assets/img/landing/product/benefits/monitor.svg';
import zoomIn from '@/assets/img/landing/product/benefits/zoom-in.svg';
import microProcessor from '@/assets/img/landing/product/benefits/computer-microprocessor.svg';
import audio from '@/assets/img/landing/product/benefits/audio.svg';
import thermometer from '@/assets/img/landing/product/benefits/thermometer.svg';
import light from '@/assets/img/landing/product/benefits/led-light.svg';
import benefitsImg from '@/assets/img/landing/product/benefits/image.png';
import { Col, Container, Row } from 'react-bootstrap';

type BenefitItem = {
  icon: string;
  title: string;
  value: string;
};

type SideBenefits = {
  col: 'left' | 'right';
  items: BenefitItem[];
};

const sideBenefits: SideBenefits[] = [
  {
    col: 'left',
    items: [
      { icon: battery, title: 'Flight time', value: '60 min' },
      { icon: drone, title: 'Obstacle sensing', value: '5-Direction' },
      { icon: monitor, title: 'Ultra-clear video', value: '4K' },
    ],
  },
  {
    col: 'right',
    items: [
      { icon: zoomIn, title: 'Optical camera', value: '2x zoom' },
      { icon: microProcessor, title: 'Sensor', value: '1 inch' },
      { icon: audio, title: 'Noise reduction', value: '4dB' },
    ],
  },
];

const centerBenefits: BenefitItem[] = [
  { icon: thermometer, title: 'Working temperature', value: '-10°C to 40°C' },
  { icon: light, title: 'For night time', value: 'LED searchlight' },
];

const Benefits = () => {
  return (
    <Container className="mb-5 pt-md-2 pt-lg-4 pt-xl-5">
      <h2 className="h1 my-4 pt-2 text-center">The benefits of world-changing drone</h2>
      <Row className="pb-4">
        <Col md={3} xs={6} className="order-md-1 order-2">
          <div className="d-flex flex-column justify-content-between h-100 text-center">
            {sideBenefits[0].items.map((benefit, idx) => (
              <div className="mt-md-5 mt-4" key={idx}>
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  width={60}
                  height={60}
                  className="d-inline-block mb-4"
                />
                <h3 className="h4 mb-0 lh-1">
                  <span className="d-block mb-2 fs-base fw-normal">{benefit.title}</span>
                  {benefit.value}
                </h3>
              </div>
            ))}
          </div>
        </Col>

        <Col md={6} xs={12} className="order-md-2 order-1">
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="mx-md-n5 mb-md-n5">
              <img src={benefitsImg} alt="Drone" width={600} height={400} />
            </div>
            <Row className="row-cols-2 mt-md-5 mt-4 text-center">
              {centerBenefits.map((benefit, idx) => (
                <Col key={idx}>
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    width={60}
                    height={60}
                    className="d-inline-block mb-4"
                  />
                  <h3 className="h4 mb-0 lh-1">
                    <span className="d-block mb-2 fs-base fw-normal">{benefit.title}</span>
                    {benefit.value}
                  </h3>
                </Col>
              ))}
            </Row>
          </div>
        </Col>

        <Col md={3} xs={6} className="order-md-3 order-3">
          <div className="d-flex flex-column justify-content-between h-100 text-center">
            {sideBenefits[1].items.map((benefit, idx) => (
              <div className="mt-md-5 mt-4" key={idx}>
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  width={60}
                  height={60}
                  className="d-inline-block mb-4"
                />
                <h3 className="h4 mb-0 lh-1">
                  <span className="d-block mb-2 fs-base fw-normal">{benefit.title}</span>
                  {benefit.value}
                </h3>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Benefits;
