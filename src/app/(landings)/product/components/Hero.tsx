import heroBg from '@/assets/img/landing/product/hero/bg.jpg';
import slider01 from '@/assets/img/landing/product/hero/slider/01.jpg';
import slider02 from '@/assets/img/landing/product/hero/slider/02.jpg';
import slider03 from '@/assets/img/landing/product/hero/slider/03.jpg';
import heroImg from '@/assets/img/landing/product/hero/image.png';
import IconifyIcon from '@/components/IconifyIcon';
import GlightBox from '@/components/GlightBox';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const Hero = () => {
  const slides = [slider01, slider02, slider03];
  return (
    <section
      className="min-vh-100 bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-5"
      style={{ backgroundImage: `url(${heroBg})` }}
      data-bs-theme="dark"
    >
      <Container className="pt-lg-3">
        <Row className="flex-lg-nowrap">
          <Col lg={7} xl={6} xxl={5} className="text-center text-lg-start pt-4 pt-md-5 mt-xxl-4">
            <p className="text-body lead pt-5 mt-sm-2 mt-lg-4 mt-xl-5">
              Make your moments fly with
            </p>
            <h1 className="display-3 pb-md-2 mb-5">ProDrone 2.0</h1>
            <div className="mt-n4 ms-lg-n4 ms-n3 pb-sm-3 pb-md-4">
              <GlightBox
                href="https://www.youtube.com/watch?v=NJ3Z1hSOoMc"
                className="btn btn-lg btn-primary mt-lg-4 mt-3 ms-lg-4 ms-3"
                data-bs-toggle="video"
              >
                Watch video
                <IconifyIcon icon="bx:play" className="ms-1 lead" />
              </GlightBox>
              <Link to="#" className="btn btn-lg btn-light mt-lg-4 mt-3 ms-lg-4 ms-3">
                Learn more
                <IconifyIcon icon="bx:right-arrow-alt" className="ms-1 lead" />
              </Link>
            </div>
            <div
              className="swiper-slider mx-auto mt-5 pt-xl-5 pt-lg-2 pt-xl-4"
              style={{ maxWidth: '33rem' }}
            >
              <Swiper
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                centeredSlides
                loop
                speed={650}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 560,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: '.swiper-pagination',
                  type: 'fraction',
                  clickable: true,
                }}
                navigation={{
                  prevEl: '.btn-prev',
                  nextEl: '.btn-next',
                }}
                className="swiper-container"
              >
                {slides.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      width={434}
                      alt={`Slider image ${index + 1}`}
                      className="d-block mx-auto rounded-3"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="d-flex justify-content-center align-items-center pb-3 pt-4 mt-3">
                <button
                  type="button"
                  className="btn btn-prev btn-icon position-relative top-0 mt-0 ms-0 me-2"
                  style={{ transform: 'none' }}
                >
                  <IconifyIcon icon="bx:chevron-left" fontSize={22} />
                </button>
                <div
                  className="swiper-pagination text-light opacity-70 fs-sm fw-medium position-relative top-0 w-auto"
                  style={{ minWidth: '70px' }}
                />
                <button
                  type="button"
                  className="btn btn-next btn-icon position-relative top-0 mt-0 ms-2 me-0"
                  style={{ transform: 'none' }}
                >
                  <IconifyIcon icon="bx:chevron-right" fontSize={22} />
                </button>
              </div>
            </div>
          </Col>

          <div className="d-none d-lg-block pt-5 mt-lg-4 mt-xl-5 ms-lg-n5 mx-xl-0">
            <img src={heroImg} className="d-block pt-xxl-4 mt-5" width="1058" alt="Hero image" />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
