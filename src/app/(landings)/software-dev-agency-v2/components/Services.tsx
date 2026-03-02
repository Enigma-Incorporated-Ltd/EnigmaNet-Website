import service1Light from '@/assets/img/landing/software-agency-2/services/01-light.png';
import service1Dark from '@/assets/img/landing/software-agency-2/services/01-dark.png';

import service2Light from '@/assets/img/landing/software-agency-2/services/02-light.png';
import service2Dark from '@/assets/img/landing/software-agency-2/services/02-dark.png';

import vueLight from '@/assets/img/landing/software-agency-2/services/vue-light.png';
import vueDark from '@/assets/img/landing/software-agency-2/services/vue-dark.png';
import nodeLight from '@/assets/img/landing/software-agency-2/services/node-light.png';
import nodeDark from '@/assets/img/landing/software-agency-2/services/node-dark.png';
import javaLogo from '@/assets/img/landing/software-agency-2/services/java.png';
import reactLogo from '@/assets/img/landing/software-agency-2/services/react.png';

import service3Light from '@/assets/img/landing/software-agency-2/services/03-light.png';
import service3Dark from '@/assets/img/landing/software-agency-2/services/03-dark.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

type Service = {
  title: string;
  description: string;
  features?: string[];
  stats?: { value: string; label: string }[];
  images: { light: string; dark?: string; alt: string };
  techStack?: { light: string; dark?: string; alt: string; width: number }[];
};

const services: Service[] = [
  {
    title: 'Product Design',
    description:
      'Nullam semper enim quis vulputate mollis. Donec ultrices elementum mauris, ac porttitor mi cursus eget. Vestibulum gravida risus et lacus finibus tincidunt. Vivamus dui ante, pharetra eu blandit ac, vulputate et diam eu faucibus.',
    features: ['UX/UI', 'Web design', 'Interactive design', 'Motion design'],
    images: { light: service1Light, dark: service1Dark, alt: 'Product Design' },
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu ligula. Vestibulum euismod interdum risus eu interdum. Vivamus suscipit mauris at erat ultricies, vitae placerat nulla feugiat. Integer venenatis blandit efficitur.',
    images: { light: service2Light, dark: service2Dark, alt: 'Web Development' },
    techStack: [
      { light: vueLight, dark: vueDark, alt: 'Vue.js', width: 92 },
      { light: nodeLight, dark: nodeDark, alt: 'Node.js', width: 63 },
      { light: javaLogo, alt: 'Java', width: 77 },
      { light: reactLogo, alt: 'React', width: 104 },
    ],
  },
  {
    title: 'Software Testing',
    description:
      'Phasellus posuere leo vitae quam faucibus cursus. Phasellus eu ex ultrices, facilisis ex at, aliquet felis. Cras id rutrum ante. Curabitur suscipit diam a facilisis laoreet. Duis id elit imperdiet eros vestibulum molestie.',
    stats: [
      { value: '85+', label: 'Tested projects' },
      { value: '200+', label: 'Happy clients' },
    ],
    images: {
      light: service3Light,
      dark: service3Dark,
      alt: 'Software Testing',
    },
  },
];

const Services = () => {
  return (
    <section className="container my-5 py-lg-5 py-md-4 pt-2 pb-3">
      <h2 className="h1 mb-md-5 mb-4 py-xl-3 pb-lg-2 pb-md-0 pb-sm-2 text-center">Our Services</h2>

      {services.map((service, index) => (
        <Row
          key={index}
          className={`gy-4 ${index < services.length - 1 ? 'mb-5 pb-xl-5 pb-md-4 pb-3' : 'mb-xl-3'
            }`}
        >
          <Col
            lg={5}
            md={6}
            className="order-md-1 order-2 d-flex rellax"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.5"
            data-disable-parallax-down="md"
          >
            <div className="align-self-center pe-lg-0 pe-md-4">
              <h3 className="mb-md-4">{service.title}</h3>
              <p className="mb-md-4 mb-3 fs-lg">{service.description}</p>

              {service.features && (
                <>
                  <hr className="my-md-4 my-3" />
                  <ul className="list-unstyled d-flex flex-wrap mt-md-n3 mt-n2 ms-md-n4 ms-n3 mb-0 pb-lg-4 pb-md-2 fw-bold">
                    {service.features.map((f, i) => (
                      <li key={i} className="mt-md-3 mt-2 ms-md-4 ms-3">
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {service.techStack && (
                <>
                  <hr className="my-md-4 my-3" />
                  <div className="d-flex align-items-center mt-n3 ms-n4 pb-lg-4 pb-md-2">
                    {service.techStack.map((tech, i) => (
                      <div key={i} className="mt-3 ms-4 pe-md-2">
                        <img
                          src={tech.light}
                          alt={tech.alt}
                          width={tech.width}
                          height={tech.width}
                          className="d-dark-mode-none d-block me-sm-1"
                        />
                        {tech.dark && (
                          <img
                            src={tech.dark}
                            alt={tech.alt}
                            width={tech.width}
                            height={tech.width}
                            className="d-dark-mode-block d-none me-sm-1"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {service.stats && (
                <div className="d-flex flex-wrap text-nowrap mb-4">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="me-4 pe-3">
                      <h5 className="h2 mb-1">{stat.value}</h5>
                      <span className="text-body">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <Link to="#" className="btn btn-lg btn-outline-primary w-sm-auto w-100 mt-4">
                Learn more
              </Link>
            </div>
          </Col>

          <Col
            md={6}
            className="offset-lg-1 order-md-2 order-1 rellax"
            data-rellax-percentage="0.5"
            data-rellax-speed="0.5"
            data-disable-parallax-down="md"
          >
            <div className="bg-secondary rounded-3">
              <img
                src={service.images.light}
                alt={service.images.alt}
                width={600}
                height={400}
                className="d-dark-mode-none d-block"
              />
              {service.images.dark && (
                <img
                  src={service.images.dark}
                  alt={service.images.alt}
                  width={600}
                  height={400}
                  className="d-dark-mode-block d-none"
                />
              )}
            </div>
          </Col>
        </Row>
      ))}
    </section>
  );
};

export default Services;
