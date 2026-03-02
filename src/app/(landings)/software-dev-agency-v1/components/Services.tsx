import cms from '@/assets/img/services/icons/cms.svg';
import rocket from '@/assets/img/services/icons/rocket.svg';
import mobileApp from '@/assets/img/services/icons/mobile-app.svg';
import analytics from '@/assets/img/services/icons/analytics.svg';
import search from '@/assets/img/services/icons/web-search.svg';
import timer from '@/assets/img/services/icons/timer.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

type Service = {
  title: string;
  description: string;
  link: string;
  icon: string;
};

const services: Service[] = [
  {
    title: 'Custom Software Development',
    description:
      'Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa.',
    link: '/services-single-v1',
    icon: cms,
  },
  {
    title: 'Software Integration',
    description:
      'Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget.',
    link: '/services-single-v1',
    icon: rocket,
  },
  {
    title: 'Mobile App Development',
    description:
      'Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis.',
    link: '/services-single-v1',
    icon: mobileApp,
  },
  {
    title: 'Business Analytics',
    description:
      'Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu.',
    link: '/services-single-v1',
    icon: analytics,
  },
  {
    title: 'Software Testing',
    description:
      'Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in.',
    link: '/services-single-v1',
    icon: search,
  },
  {
    title: 'Project Management',
    description:
      'Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae.',
    link: '/services-single-v1',
    icon: timer,
  },
];

const Services = () => {
  return (
    <section className="bg-secondary pb-md-2 pb-lg-5">
      <div className="d-none d-lg-block" style={{ marginTop: '-60px', paddingTop: '60px' }}></div>

      <Container className="pb-4 pt-5">
        <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">Our Services</h2>

        <Row className="align-items-center pb-5 mb-lg-2">
          <Col md={8} className="text-center text-md-start">
            <p className="fs-lg text-muted mb-md-0">
              We are focused on helping brands grow through digital transformation services. We
              bring real solutions to each client’s problems through a deep understanding of their
              market, solution, and vision.
            </p>
          </Col>
          <Col md={4} className="d-flex justify-content-center justify-content-md-end">
            <Link to="/services-v1" className="btn btn-outline-primary btn-lg">
              See all services
            </Link>
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-md-2">
          {services.map((service, index) => (
            <Col key={index} className="py-4 my-2 my-sm-3">
              <Link
                to={service.link}
                className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
              >
                <div className="card-body pt-3 ">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="d-block m-1"
                    />
                  </div>

                  <h2 className="h4 d-inline-flex align-items-center">
                    {service.title}
                    <IconifyIcon icon="bx:right-arrow-circle" className="text-primary fs-3 ms-2" />
                  </h2>

                  <p className="fs-sm text-body mb-0">{service.description}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
