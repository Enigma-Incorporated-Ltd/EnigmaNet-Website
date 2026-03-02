import analytics from '@/assets/img/services/icons/analytics.svg';
import Cms from '@/assets/img/services/icons/cms.svg';
import MobileApp from '@/assets/img/services/icons/mobile-app.svg';
import Rocket from '@/assets/img/services/icons/rocket.svg';
import timer from '@/assets/img/services/icons/timer.svg';
import webSearch from '@/assets/img/services/icons/web-search.svg';
import { CardBody, Col, Row } from 'react-bootstrap';

import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
};

const services: Service[] = [
  {
    id: 1,
    title: 'Custom Software Development',
    description:
      'Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa.',
    icon: Cms,
    link: '/services-single-v1',
  },
  {
    id: 2,
    title: 'Software Integration',
    description:
      'Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst.',
    icon: Rocket,
    link: '/services-single-v1',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description:
      'Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est.',
    icon: MobileApp,
    link: '/services-single-v1',
  },
  {
    id: 4,
    title: 'Business Analytics',
    description:
      'Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl.',
    icon: analytics,
    link: '/services-single-v1',
  },
  {
    id: 5,
    title: 'Software Testing',
    description:
      'Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare.',
    icon: webSearch,
    link: '/services-single-v1',
  },
  {
    id: 6,
    title: 'Project Management',
    description:
      'Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae.',
    icon: timer,
    link: '/services-single-v1',
  },
];

const Services = () => {
  return (
    <section className="container pb-2 pb-md-4 pb-lg-5 mb-3">
      <h1 className="pb-4">Services v.1</h1>
      <Row xs={1} md={2}>
        {services.map(service => (
          <Col key={service.id} className="py-4 my-2 my-sm-3">
            <Link
              to={service.link}
              className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
            >
              <CardBody className="pt-3">
                <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                  <img
                    src={service.icon}
                    className="d-block m-1"
                    width="40"
                    alt={service.title}
                  />
                </div>
                <h2 className="h4 d-inline-flex align-items-center">
                  {service.title}
                  <IconifyIcon icon="bx:right-arrow-circle" className="text-primary fs-3 ms-2" />
                </h2>
                <p className="fs-sm text-body mb-0">{service.description}</p>
              </CardBody>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
