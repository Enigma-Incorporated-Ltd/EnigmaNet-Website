import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import hero from '@/assets/img/landing/software-agency-1/hero-bg.jpg';
import Jarallax from '@/components/Jarallax';

type Slide = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const slides: Slide[] = [
  {
    title: 'The Best IT Solutions for Your Business',
    description:
      'We provide the wide range of high quality IT services and best practices solutions to our customers making their business better.',
    buttonText: 'Start your project',
    buttonLink: '#',
  },
  {
    title: 'Award-Winning Software Development',
    description:
      'We build complex web, desktop and mobile applications. With us you get quality software and perfect service every time.',
    buttonText: 'View case studies',
    buttonLink: '#',
  },
  {
    title: '24/7 Tech & Business Support',
    description:
      "We ensure lifetime support of all applications we've built. Our support department is a team of professionals who will assist you 24/7.",
    buttonText: 'Work with us',
    buttonLink: '#',
  },
];

const Hero = () => {
  return (
    <section
      className="jarallax bg-dark py-xxl-5"
      data-jarallax
      data-speed="0.4"
      data-bs-theme="dark"
    >
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-translucent"></span>
      <Jarallax speed={0.4}>
        <div
          className="jarallax-img"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>
      </Jarallax>

      <div className="position-relative text-center zindex-5 overflow-hidden pt-4 py-md-5">
        <button
          type="button"
          id="hero-prev"
          className="btn btn-prev btn-icon btn-xl bg-transparent shadow-none position-absolute top-50 start-0 translate-middle-y d-none d-md-inline-flex ms-n3 ms-lg-2"
          aria-label="Previous"
        >
          <IconifyIcon icon="bx:chevron-left" className="fs-1" />
        </button>
        <button
          type="button"
          id="hero-next"
          className="btn btn-next btn-icon btn-xl bg-transparent shadow-none position-absolute top-50 end-0 translate-middle-y d-none d-md-inline-flex me-n3 me-lg-2"
          aria-label="Next"
        >
          <IconifyIcon icon="bx:chevron-right" className="fs-1" />
        </button>

        <Container className="text-center py-xl-5">
          <Row className="justify-content-center pt-lg-5">
            <Col xl={8} lg={9} md={10} xs={11}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={500}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                navigation={{
                  prevEl: '#hero-prev',
                  nextEl: '#hero-next',
                }}
                className="pt-5 pb-4 py-md-5"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <h2 className="display-2 from-start mb-lg-4">{slide.title}</h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        {slide.description}
                      </p>
                    </div>
                    <div className="scale-up delay-1">
                      <Link
                        to={slide.buttonLink}
                        className="btn btn-primary shadow-primary btn-lg"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination position-relative d-md-none pt-2 mt-5"></div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="d-flex flex-column flex-sm-row align-items-center justify-content-between position-relative zindex-5 pb-5">
        <div className="d-flex mb-4 mb-sm-0">
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-linkedin rounded-circle me-2"
            aria-label="LinkedIn"
          >
            <IconifyIcon icon="bxl:linkedin" fontSize={20} />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-facebook rounded-circle me-2"
            aria-label="Facebook"
          >
            <IconifyIcon icon="bxl:facebook" fontSize={20} />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-twitter rounded-circle me-2"
            aria-label="Twitter"
          >
            <IconifyIcon icon="bxl:twitter" fontSize={20} />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-youtube rounded-circle me-2"
            aria-label="YouTube"
          >
            <IconifyIcon icon="bxl:youtube" fontSize={20} />
          </Link>
        </div>
        <Link to="#" className="nav-link px-0">
          Our case studies <IconifyIcon icon="bx:right-arrow-circle" className="fs-4 ms-2" />
        </Link>
      </Container>
    </section>
  );
};

export default Hero;
