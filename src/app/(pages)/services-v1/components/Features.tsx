import { Container, Row, Col, Card } from 'react-bootstrap';
import features1 from '@/assets/img/landing/software-agency-1/features/01.svg';
import features2 from '@/assets/img/landing/software-agency-1/features/02.svg';
import features3 from '@/assets/img/landing/software-agency-1/features/03.svg';
import features4 from '@/assets/img/landing/software-agency-1/features/04.svg';

type Feature = {
  id: number;
  title: string;
  icon: string;
  alt: string;
  bordered?: boolean;
};

const features: Feature[] = [
  {
    id: 1,
    title: 'Build a functional prototype in 24 hrs',
    icon: features1,
    alt: 'Prototype Icon',
    bordered: true,
  },
  {
    id: 2,
    title: 'Create an MVP within two weeks',
    icon: features2,
    alt: 'MVP Icon',
    bordered: true,
  },
  {
    id: 3,
    title: 'Kickstart software development',
    icon: features3,
    alt: 'Development Icon',
    bordered: true,
  },
  {
    id: 4,
    title: 'Get 24/7 tech & business support',
    icon: features4,
    alt: 'Support Icon',
    bordered: false,
  },
];

const Features = () => {
  return (
    <section className="pb-5 mb-2 mb-md-4 mb-lg-5">
      <Container>
        <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">Why Choose Us?</h2>
        <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">
          We personalize how we work to fit your project needs. Our approach helps augment
          innovation.
        </p>
        <Row xs={1} sm={2} lg={4} className="g-4 pb-xl-3">
          {features.map(feature => (
            <Col key={feature.id} className={`text-center ${feature.bordered ? 'border-end' : ''}`}>
              <Card className="d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                <img src={feature.icon} width="32" alt={feature.alt} />
              </Card>
              <h3 className="h5 mb-2 mb-lg-0">{feature.title}</h3>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
