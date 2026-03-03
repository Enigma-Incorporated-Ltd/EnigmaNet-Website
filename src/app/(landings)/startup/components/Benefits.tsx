import { Container, Row, Col, Button } from 'react-bootstrap';
import mobileIcon from '@/assets/img/landing/startup/icons/mobile.svg';
import scooterIcon from '@/assets/img/landing/startup/icons/scooter.svg';
import handIcon from '@/assets/img/landing/startup/icons/hand.svg';
import smileyIcon from '@/assets/img/landing/startup/icons/smiley.svg';
import IconifyIcon from '@/components/IconifyIcon';

const benefitsData = [
  {
    icon: mobileIcon,
    title: 'Trial app',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo venenatis.',
  },
  {
    icon: scooterIcon,
    title: 'High-end scooters',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    icon: handIcon,
    title: 'Lowest price for riding',
    description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.',
  },
  {
    icon: smileyIcon,
    title: 'Happiness guarantee',
    description:
      'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris pretium.',
  },
];

const Benefits = () => {
  return (
    <section className="py-2 py-sm-3 py-md-4 py-lg-5">
      <Container>
        <Row className="py-5 my-md-2 my-lg-3">
          <Col lg={5} xl={4} className="mb-5 mb-lg-0 text-center text-lg-start pe-lg-5 pe-xl-0">
            <h2 className="h1 pb-3 pb-lg-5">
              We need your <span className="text-primary">support!</span> Become a backer on
              Kickstarter now and get some <span className="text-primary">benefits</span>
            </h2>
            <Button href="#" className="btn-lg w-100 w-sm-auto">
              Back us on Kickstarter
              <IconifyIcon icon="bx:right-arrow-alt" className="lead ms-2 me-n1" />
            </Button>
          </Col>

          <Col lg={7} xl={6} className="offset-xl-2">
            <Row className="row-cols-1 row-cols-sm-2 gy-5">
              {benefitsData.map((item, index) => (
                <Col key={index} className="pt-md-2 text-center text-sm-start pe-sm-3 pe-xl-4">
                  <div>
                    <img
                      src={item.icon}
                      width={60}
                      height={60}
                      alt={item.title}
                      className="d-inline-block mb-4"
                    />
                    <h3 className="h4 mb-2">{item.title}</h3>
                    <p className="fs-lg mb-0">{item.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
