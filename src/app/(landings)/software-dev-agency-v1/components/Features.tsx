import features1 from '@/assets/img/landing/software-agency-1/features/01.svg';
import features2 from '@/assets/img/landing/software-agency-1/features/02.svg';
import features3 from '@/assets/img/landing/software-agency-1/features/03.svg';
import features4 from '@/assets/img/landing/software-agency-1/features/04.svg';
import { Card, Col, Container, Row } from 'react-bootstrap';

type featureType = {
  id: number;
  icon: string;
  title: string;
};

const features: featureType[] = [
  {
    id: 1,
    icon: features1,
    title: 'Build a functional prototype in 24 hrs',
  },
  {
    id: 2,
    icon: features2,
    title: 'Create an MVP within two weeks',
  },
  {
    id: 3,
    icon: features3,
    title: 'Kickstart software development',
  },
  {
    id: 4,
    icon: features4,
    title: 'Get 24/7 tech & business support',
  },
];

const Features = () => {
  return (
    <section className="py-5 my-2 my-md-4 my-lg-5">
      <Container>
        <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">Why Choose Us?</h2>
        <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">
          We personalize how we work to fit your project needs. Our approach helps augment
          innovation.
        </p>

        <Row xs={1} sm={2} lg={4} className="g-4 pb-xl-3">
          {features.map((feature, index) => (
            <Col
              key={feature.id}
              className={`text-center ${index !== features.length - 1 ? 'border-end' : ''}`}
            >
              <Card className="d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                <img src={feature.icon} width={32} height={32} alt={feature.title} />
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
