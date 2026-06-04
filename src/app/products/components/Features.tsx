import { Container, Row, Col, Card } from 'react-bootstrap';
import doctorIcon from '@/assets/img/landing/medical/icons/doctor.svg';
import ambulanceIcon from '@/assets/img/landing/medical/icons/ambulance.svg';
import virusIcon from '@/assets/img/landing/medical/icons/virus.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

type Feature = {
  id: number;
  title: string;
  description?: string;
  link: string;
  linkText: string;
  icon: string;
  phone?: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: 'Find a Doctor',
    description: 'Search the right doctor by location and specialty.',
    link: '#',
    linkText: 'See all doctors',
    icon: doctorIcon,
  },
  {
    id: 2,
    title: 'Emergency Service',
    phone: '(406) 555-0120',
    link: '#',
    linkText: 'Contact us',
    icon: ambulanceIcon,
  },
  {
    id: 3,
    title: 'COVID-19 Info',
    description: 'We offer quick COVID-19 testing by appointment.',
    link: '#',
    linkText: 'Learn more',
    icon: virusIcon,
  },
];

const Features = () => {
  return (
    <section className="py-5 mb-2 mb-md-4 mb-lg-5">
      <Container>
        <Row xs={1} md={3} className="g-4 pt-2 pt-md-4 pb-lg-2">
          {features.map(feature => (
            <Col key={feature.id}>
              <Card className="flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100">
                <img src={feature.icon} alt={feature.title} width={168} height={168} />
                <Card.Body className="text-center text-sm-start text-md-center text-xxl-start pb-3 pb-sm-2 pb-md-3 pb-xxl-2">
                  <h3 className="h5 mb-2 mt-n4 mt-sm-0 mt-md-n4 mt-xxl-0">{feature.title}</h3>

                  {feature.phone ? (
                    <p className="d-flex align-items-center text-nav fs-xl fw-medium mb-2">
                      <IconifyIcon icon="bx:phone-call" className="fs-4 text-muted me-1" />
                      {feature.phone}
                    </p>
                  ) : (
                    <p className="fs-sm mb-1">{feature.description}</p>
                  )}

                  <Link to={feature.link} className="btn btn-link stretched-link px-0">
                    {feature.linkText}
                    <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-1" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
