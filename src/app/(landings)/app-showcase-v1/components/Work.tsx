import screen1 from '@/assets/img/landing/app-showcase-1/screens/01.png';
import screen2 from '@/assets/img/landing/app-showcase-1/screens/02.png';
import screen3 from '@/assets/img/landing/app-showcase-1/screens/03.png';
import screen4 from '@/assets/img/landing/app-showcase-1/screens/04.png';
import frame from '@/assets/img/landing/app-showcase-1/screens/phone-frame.png';
import screen from '@/assets/img/landing/app-showcase-1/screens/phone-screen.png';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from 'react-bootstrap';



type stepType = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

const steps: stepType[] = [
  {
    id: 'text-1',
    title: 'Step 1. Advanced budget management',
    desc: 'Consequat ut cras nisl, enim purus in facilisi. Ipsum amet, lectus malesuada risus sollicitudin accumsan. Id sem elit vel vel lectus risus senectus.',
    img: screen1,
  },
  {
    id: 'text-2',
    title: 'Step 2. Latest transaction history',
    desc: 'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.',
    img: screen2,
  },
  {
    id: 'text-3',
    title: 'Step 3. Transfers to people from your contact list',
    desc: 'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.',
    img: screen3,
  },
  {
    id: 'text-4',
    title: 'Step 4. Card-to-card transfers',
    desc: 'A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.',
    img: screen4,
  },
  {
    id: 'text-5',
    title: 'Step 1. Advanced budget management',
    desc: 'Consequat ut cras nisl, enim purus in facilisi. Ipsum amet, lectus malesuada risus sollicitudin accumsan. Id sem elit vel vel lectus risus senectus.',
    img: screen1,
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="position-relative bg-secondary py-5">
      <Container className="mt-3 pt-md-2 pt-lg-4 pb-2 pb-md-4 pb-lg-5">
        <h2 className="h1 text-center pb-2 pb-md-0 mb-4 mb-md-5">How Does It Work?</h2>

        <div className="position-relative mx-5">
          <button
            type="button"
            id="prev-screen"
            className="btn btn-prev btn-icon position-absolute top-50 start-0 ms-n5 translate-middle-y"
            aria-label="Previous"
          >
            <IconifyIcon icon="bx:chevron-left" fontSize={24} />
          </button>
          <button
            type="button"
            id="next-screen"
            className="btn btn-next btn-icon position-absolute top-50 end-0 me-n5 translate-middle-y"
            aria-label="Next"
          >
            <IconifyIcon icon="bx:chevron-right" fontSize={24} />
          </button>

          <div className="position-absolute top-0 start-50 translate-middle-x h-100 w-100 w-md-33 zindex-5">
            <div
              className="d-flex bg-repeat-0 bg-size-cover w-100 h-100 mx-auto"
              style={{ maxWidth: '328px', backgroundImage: `url(${frame})` }}
            ></div>
          </div>

          <div className="position-absolute top-0 start-50 translate-middle-x h-100 w-100 w-md-33">
            <div
              className="d-flex bg-repeat-0 bg-size-cover w-100 h-100 mx-auto"
              style={{ maxWidth: '328px', backgroundImage: `url(${screen})` }}
            ></div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            centeredSlides
            loop
            navigation={{
              prevEl: '#prev-screen',
              nextEl: '#next-screen',
            }}
            pagination={{
              el: '#swiper-progress',
              type: 'progressbar',
            }}
            breakpoints={{
              768: { slidesPerView: 3 },
            }}
            className="mobile-app-slider"
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          >
            {steps.map((step, idx) => (
              <SwiperSlide key={step.id}>
                <img
                  src={step.img}
                  className="d-block mx-auto"
                  width={328}
                  alt={`Screen ${idx + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Row className="justify-content-center pt-4 mt-2 mt-md-3">
          <Col xl={6} lg={7} md={8} className="swiper-tabs text-center">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                id={step.id}
                className={`swiper-tab ${activeIndex === idx ? 'active' : 'd-none'}`}
              >
                <h3 className="h4 pb-1 mb-2">{step.title}</h3>
                <p className="mb-0">{step.desc}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      <div
        id="swiper-progress"
        className="swiper-pagination bottom-0"
        style={{ top: 'auto' }}
      ></div>
    </section>
  );
};

export default Work;
