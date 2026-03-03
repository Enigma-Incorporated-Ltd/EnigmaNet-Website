import screen01 from '@/assets/img/landing/app-showcase-2/screens/01.png';
import screen02 from '@/assets/img/landing/app-showcase-2/screens/02.png';
import screen03 from '@/assets/img/landing/app-showcase-2/screens/03.png';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconifyIcon from '@/components/IconifyIcon';


const steps = [
  {
    img: screen01,
    step: 'step 1',
    title: 'Create your account',
    desc: 'Tellus est ullamcorper diam phasellus. Commodo acine pharetra quam lacinia fames quam nibh in elementum pulvinar consectetur adipiscing. Et viverra maecenas quis cras sed gravida volutpat, cursus enim enim ut nulla netus porta lacus.',
  },
  {
    img: screen02,
    step: 'step 2',
    title: 'Set up payment details',
    desc: 'Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam.',
  },
  {
    img: screen03,
    step: 'step 3',
    title: 'Start trading',
    desc: 'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta.',
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <div className="text-center pb-4 mb-3 mx-auto" style={{ maxWidth: '530px' }}>
        <h2 className="h1">How Does It Work?</h2>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus
          facilisis ultrices
        </p>
      </div>
      <Row className="align-items-center">
        <Col md={6} className="pb-4 pb-md-0 mb-2 mb-md-0">
          <div className="position-relative px-5">
            <div className="swiper-tabs zindex-2 mx-auto" style={{ maxWidth: '384px' }}>
              <img src={steps[activeIndex].img} alt="App screen" />
            </div>
            <div
              className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 opacity-15 rounded-3"
              style={{ height: '86.5%' }}
            ></div>
          </div>
        </Col>

        <Col md={6} lg={5} className="offset-lg-1">
          <div className="ps-md-4 ps-lg-0">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop
              navigation={{
                prevEl: '#prev-screen',
                nextEl: '#next-screen',
              }}
              onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
              className="text-center text-md-start mt-auto"
            >
              {steps.map((step, idx) => (
                <SwiperSlide key={idx}>
                  <div className="fs-xl text-muted mb-3 mb-lg-4">{step.step}</div>
                  <h3 className="mb-lg-4">{step.title}</h3>
                  <p>{step.desc}</p>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="d-flex justify-content-center justify-content-md-start pt-2 pt-lg-3">
              <button type="button" id="prev-screen" className="btn btn-prev btn-icon btn-sm me-2">
                <IconifyIcon icon="bx:chevron-left" fontSize={20} />
              </button>
              <button type="button" id="next-screen" className="btn btn-next btn-icon btn-sm ms-2">
                <IconifyIcon icon="bx:chevron-right" fontSize={20} />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Work;
