import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import jsLight from '@/assets/img/landing/software-agency-3/technologies/js-light.svg';
import jsDark from '@/assets/img/landing/software-agency-3/technologies/js-dark.svg';
import nodeLight from '@/assets/img/landing/software-agency-3/technologies/node-light.svg';
import nodeDark from '@/assets/img/landing/software-agency-3/technologies/node-dark.svg';
import reactLight from '@/assets/img/landing/software-agency-3/technologies/react-light.svg';
import reactDark from '@/assets/img/landing/software-agency-3/technologies/react-dark.svg';
import phpLight from '@/assets/img/landing/software-agency-3/technologies/php-light.svg';
import phpDark from '@/assets/img/landing/software-agency-3/technologies/php-dark.svg';
import angularLight from '@/assets/img/landing/software-agency-3/technologies/angular-light.svg';
import angularDark from '@/assets/img/landing/software-agency-3/technologies/angular-dark.svg';
import pythonLight from '@/assets/img/landing/software-agency-3/technologies/python-light.svg';
import pythonDark from '@/assets/img/landing/software-agency-3/technologies/python-dark.svg';

type Technology = {
  name: string;
  logoLight: string;
  logoDark: string;
};

const technologies: Technology[] = [
  { name: 'Javascript', logoLight: jsLight, logoDark: jsDark },
  { name: 'Node.js', logoLight: nodeLight, logoDark: nodeDark },
  { name: 'React', logoLight: reactLight, logoDark: reactDark },
  { name: 'PHP', logoLight: phpLight, logoDark: phpDark },
  { name: 'Angular', logoLight: angularLight, logoDark: angularDark },
  { name: 'Python', logoLight: pythonLight, logoDark: pythonDark },
];

const Technologies = () => {
  return (
    <section className="py-5 bg-light dark:bg-dark">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="h1">Technologies We Use</h2>
          </Col>
        </Row>

        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          loop={true}
          autoplay={{ delay: 2000 }}
          className="pb-4"
        >
          {technologies.map((tech, idx) => (
            <SwiperSlide key={idx}>
              <div className="d-flex flex-column align-items-center">
                <div className="d-block dark:d-none">
                  <img src={tech.logoLight} alt={tech.name} className="img-fluid" />
                </div>
                <div className="d-none dark:d-block">
                  <img src={tech.logoDark} alt={tech.name} className="img-fluid" />
                </div>
                <p className="mt-2">{tech.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Technologies;
