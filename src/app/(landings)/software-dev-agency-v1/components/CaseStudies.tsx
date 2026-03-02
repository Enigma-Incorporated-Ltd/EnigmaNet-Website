import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

import logo01 from '@/assets/img/landing/software-agency-1/case-study-logo01.png';
import logo02 from '@/assets/img/landing/software-agency-1/case-study-logo02.png';
import caseStudy01 from '@/assets/img/landing/software-agency-1/case-study01.jpg';
import caseStudy02 from '@/assets/img/landing/software-agency-1/case-study02.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import Jarallax from '@/components/Jarallax';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

type slideType = {
  id: number;
  bg: string;
  logo: string;
  title: string;
  subtitle: string;
  desc: string;
  link: string;
};

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: slideType[] = [
    {
      id: 1,
      bg: caseStudy01,
      logo: logo01,
      title: 'Cashless payment case study',
      subtitle: 'Payment Service Provider Company',
      desc: 'Aenean dolor elit tempus tellus imperdiet. Elementum, ac convallis morbi sit est feugiat ultrices. Cras tortor maecenas pulvinar nec ac justo. Massa sem eget semper...',
      link: '#',
    },
    {
      id: 2,
      bg: caseStudy02,
      logo: logo02,
      title: 'Smart tech case study',
      subtitle: 'Data Analytics Company',
      desc: 'Adipiscing quis a at ligula. Gravida gravida diam rhoncus cursus in. Turpis sagittis tempor gravida phasellus sapien. Faucibus donec consectetur sed id sit nisl.',
      link: '#',
    },
  ];

  return (
    <section className="bg-secondary pt-1">
      <Container>
        <h2 className="h1 text-center text-md-start mb-lg-4">Case Studies</h2>
        <Row className="align-items-center pb-5">
          <Col md={8} lg={7} xl={6} className="text-center text-md-start">
            <p className="fs-lg text-muted mb-md-0">
              We bring real solutions to each client’s problems through a deep understanding of
              their market, solution, and vision.
            </p>
          </Col>
          <Col
            md={4}
            lg={5}
            xl={6}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <Link to="#" className="btn btn-outline-primary btn-lg">
              See all case studies
            </Link>
          </Col>
        </Row>
      </Container>

      <div className="position-relative py-lg-4 py-xl-5">
        <div className="swiper-tabs position-absolute top-0 start-0 w-100 h-100">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`jarallax position-absolute top-0 start-0 w-100 h-100 swiper-tab ${
                activeIndex === index ? 'active' : ''
              }`}
              data-jarallax
              data-speed="0.4"
            >
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
              <Jarallax speed={0.4}>
                <div
                  className="jarallax-img"
                  style={{ backgroundImage: `url(${slide.bg})` }}
                ></div>
              </Jarallax>
            </div>
          ))}
        </div>

        <Container className="position-relative zindex-5 py-5">
          <Row className="py-2 py-md-3">
            <Col xl={5} lg={7} md={9}>
              <div className="d-flex justify-content-center justify-content-md-start pb-3 mb-3">
                <button
                  type="button"
                  id="case-study-prev"
                  className="btn btn-prev btn-icon btn-sm bg-body me-2"
                  aria-label="Previous"
                >
                  <IconifyIcon icon="bx:chevron-left" fontSize={20} />
                </button>
                <button
                  type="button"
                  id="case-study-next"
                  className="btn btn-next btn-icon btn-sm bg-body ms-2"
                  aria-label="Next"
                >
                  <IconifyIcon icon="bx:chevron-right" fontSize={20} />
                </button>
              </div>

              <Card className="bg-body shadow-sm p-3">
                <CardBody>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    loop
                    navigation={{
                      nextEl: '#case-study-next',
                      prevEl: '#case-study-prev',
                    }}
                    pagination={{
                      el: '#case-study-pagination',
                      clickable: true,
                    }}
                    onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                  >
                    {slides.map(slide => (
                      <SwiperSlide key={slide.id}>
                        <img src={slide.logo} className="d-block mb-3" width={72} alt="Logo" />
                        <h3 className="mb-2">{slide.title}</h3>
                        <p className="fs-sm text-muted border-bottom pb-3 mb-3">{slide.subtitle}</p>
                        <p className="pb-2 pb-lg-3 mb-3">{slide.desc}</p>
                        <Link to={slide.link} className="btn btn-primary">
                          View case study
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </CardBody>
              </Card>

              <div className="pt-4 mt-3" data-bs-theme="dark">
                <div
                  id="case-study-pagination"
                  className="swiper-pagination position-relative bottom-0"
                ></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default CaseStudies;
