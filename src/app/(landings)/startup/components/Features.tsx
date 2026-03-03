import { Container, Row, Col } from 'react-bootstrap';
import scooterIcon from '@/assets/img/landing/startup/icons/riding-scooter.svg';
import diamondIcon from '@/assets/img/landing/startup/icons/diamond.svg';
import planetIcon from '@/assets/img/landing/startup/icons/planet.svg';

const Features = () => {
  const featureData = [
    {
      icon: scooterIcon,
      title: 'Freedom of movement',
      description:
        'Integer laoreet aliquam mi, est at vitae, egestas. Nisl proin ipsum dui, sagittis mauris vel arcu lacinia massa.',
    },
    {
      icon: diamondIcon,
      title: 'Quality & style',
      description:
        'Nunc aliquam arcu pretium mauris nibh quisque quis. Urna purus fringilla iaculis turpis libero mattis commodo.',
    },
    {
      icon: planetIcon,
      title: 'Cities made for living',
      description:
        'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh diam volutpat posuere venenatis.',
    },
  ];

  return (
    <Container className="pt-1 py-sm-2 py-md-4 py-lg-5">
      <Row className="row-cols-1 row-cols-md-3 g-4 py-5 mb-2 mb-sm-3">
        {featureData.map((feature, index) => (
          <Col key={index} className="pt-2 pt-md-0 text-center px-xl-4">
            <img
              src={feature.icon}
              alt={`${feature.title} Icon`}
              width={70}
              height={70}
              className="d-inline-block mb-4"
            />
            <h3 className="h4 mb-2">{feature.title}</h3>
            <p className="fs-lg mb-0">{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
