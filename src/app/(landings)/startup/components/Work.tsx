import { Container, Row, Col } from 'react-bootstrap';
import step1 from '@/assets/img/landing/startup/steps/01.svg';
import step2 from '@/assets/img/landing/startup/steps/02.svg';
import step3 from '@/assets/img/landing/startup/steps/03.svg';
import step4 from '@/assets/img/landing/startup/steps/04.svg';

const steps = [
  {
    number: 'Step 1',
    title: 'Find a scooter nearby',
    description:
      'Use the map in the app to find your closest scooter. You can also book it 40 minutes in advance.',
    image: step1,
  },
  {
    number: 'Step 2',
    title: 'Start the ride',
    description:
      'To start your ride, scan the QR code with your app and tap on "Start ride". Hit the throttle to go and pull the brakes to slow.',
    image: step2,
  },
  {
    number: 'Step 3',
    title: 'Enjoy your ride!',
    description:
      "When you're riding past traffic, be sure to follow all street signs and laws. Please ride safely and be mindful of where you park. Make sure you're wearing a helmet.",
    image: step3,
  },
  {
    number: 'Step 4',
    title: 'Park carefully',
    description:
      'After your ride, park the scooter safely and out of the way of pedestrian and car traffic - your community will appreciate it. Finally lock it by tapping on "End ride".',
    image: step4,
  },
];

const Work = () => {
  return (
    <Container className="pb-md-3 pb-lg-4 pb-xl-0 pt-sm-2 pt-md-3 pt-lg-5 mt-2 mt-md-3">
      <h2 className="display-5 text-center pt-5 pb-3 pb-md-4 pb-lg-5 mb-xl-4">
        So, how does it work?
      </h2>

      {steps.map((step, index) => (
        <Row key={index} className="align-items-center pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
          <Col md={6} className="pb-2 pb-md-0 mb-4 mb-md-0">
            <div className="position-relative rounded-3 overflow-hidden">
              <div className="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100"></div>
              <img
                src={step.image}
                alt={step.title}
                className="d-block position-relative zindex-2 mx-auto"
                width={636}
              />
            </div>
          </Col>

          <Col md={6} lg={5} className="offset-lg-1">
            <div className="ps-md-4 ps-lg-0">
              <div className="text-primary fs-xl fw-bold pb-1 mb-2">{step.number}</div>
              <h3 className="h1 mb-lg-4">{step.title}</h3>
              <p className="fs-xl mb-0">{step.description}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Work;
