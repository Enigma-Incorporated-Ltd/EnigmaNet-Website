import ctaImg1 from '@/assets/img/landing/medical/cta/01.jpg';
import ctaImg2 from '@/assets/img/landing/medical/cta/02.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Controller, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';

type Slide = {
  id: number;
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonVariant: 'success' | 'danger';
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: (
      <>
        New Service — Start Your Care <span className="text-success">Online</span> Now
      </>
    ),
    description:
      'Morbi lacus vulputate mauris ut et nunc, tempor. Placerat augue eu amet feugiat mi sagittis velit. Sed suscipit nunc suspendisse morbi pharetra libero consectetur. Proin eros sollicitudin augue tempus. Aliquet id sit donec aliquam.',
    buttonText: 'Learn more',
    buttonVariant: 'success',
    image: ctaImg1,
  },
  {
    id: 2,
    title: (
      <>
        Support Groups for <span className="text-danger">Depression</span> &amp; Anxiety
      </>
    ),
    description:
      'Magna cursus feugiat sed sodales praesent vehicula integer arcu. Felis duis lectus felis, tempus aliquet quis non. At integer consectetur eget nunc, fames. Et facilisi vel, luctus sed interdum vitae nec, velit. Maecenas purus et pharetra, at volutpat aenean.',
    buttonText: 'Learn more',
    buttonVariant: 'danger',
    image: ctaImg2,
  },
];

const Cta = () => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);
  const [_secondSwiper, setSecondSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="pb-5 mb-2 mb-md-4 mb-lg-5" style={{ paddingTop: '80px' }}>
      <div className="bg-secondary pb-lg-4 pb-xl-5">
        <Container className="pb-4 pb-md-5">
          <Row>
            <Col xl={5} lg={6} style={{ marginTop: '-80px' }}>
              <div style={{ maxWidth: 526, margin: '0 auto' }}>
                <Swiper
                  modules={[Navigation, Controller, EffectFade]}
                  loop
                  spaceBetween={30}
                  effect='fade'
                  onSwiper={setFirstSwiper}
                >
                  {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                      <img
                        src={slide.image}
                        alt={`CTA Slide ${slide.id}`}
                        className="rounded-3"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>

            <Col xl={5} lg={6} className="offset-xl-1 pt-2 pt-md-4 pt-lg-5 mt-4">
              <div className="d-flex justify-content-center justify-content-lg-start pb-3 mb-3">
                <Button
                  variant="outline-dark"
                  size="sm"
                  className="btn btn-prev swiper-prev btn-icon btn-sm me-2"
                  aria-label="Previous"
                >
                  <IconifyIcon icon="bx:chevron-left" fontSize={20} />
                </Button>
                <Button
                  variant="outline-dark"
                  size="sm"
                  className="btn btn-next swiper-next btn-icon btn-sm ms-2"
                  aria-label="Next"
                >
                  <IconifyIcon icon="bx:chevron-right" fontSize={20} />
                </Button>
              </div>

              <Swiper
                modules={[Navigation, Controller]}
                navigation={{
                  prevEl: '.swiper-prev',
                  nextEl: '.swiper-next',
                }}
                loop
                spaceBetween={30}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
              >
                {slides.map(slide => (
                  <SwiperSlide key={slide.id}>
                    <div className="pb-4">
                      <h2 className="h1 mb-4">{slide.title}</h2>
                      <p className="pb-2 pb-xl-0 mb-4 mb-xl-5">{slide.description}</p>
                      <Button
                        variant={slide.buttonVariant}
                        size="lg"
                        className={`shadow-${slide.buttonVariant}`}
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Cta;