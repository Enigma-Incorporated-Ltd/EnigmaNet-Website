import step1 from '@/assets/img/landing/app-showcase-3/steps/01.png';
import step02 from '@/assets/img/landing/app-showcase-3/steps/02.png';
import step03 from '@/assets/img/landing/app-showcase-3/steps/03.png';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';

const Works = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveImageIndex(swiper.realIndex);
  };

  const images = [
    {
      src: step1,
      alt: 'App screen 1',
      id: 'screen-1',
      background: 'linear-gradient(135deg, #96FBC4 0%, #DBF799 100%)',
    },
    {
      src: step02,
      alt: 'App screen 2',
      id: 'screen-2',
      background: 'linear-gradient(124deg, #F6D365 2.46%, #FDA085 101.25%)',
    },
    {
      src: step03,
      alt: 'App screen 3',
      id: 'screen-3',
      background: 'linear-gradient(90deg, #667EEA 0%, #764BA2 100%)',
    },
  ];

  return (
    <section className="position-relative zindex-2 py-lg-4 py-xl-5">
      <Container className="pb-2 pt-sm-2 py-md-3">
        <Row className="align-items-center justify-content-center py-5 my-sm-2 my-xxl-3">
          <Col xs={10} sm={9} md={6} className="pb-4 pb-md-0 mb-2 mb-md-0">
            <div className="swiper-tabs zindex-2 mx-auto">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  id={image.id}
                  className={`swiper-tab rounded-3 px-4 px-sm-5 px-md-0 ${activeImageIndex === index ? 'active' : ''}`}
                  style={{ background: image.background }}
                >
                  <span
                    className="position-absolute start-0 translate-middle-x zindex-1 rounded-circle"
                    style={{
                      bottom: index === 0 ? '26.6%' : index === 1 ? '38.8%' : '28%',
                      width: '25px',
                      height: '25px',
                      background: image.background.includes('linear-gradient')
                        ? image.background
                        : 'transparent',
                    }}
                  />
                  <span
                    className="position-absolute zindex-1 rounded-circle"
                    style={{
                      bottom: index === 0 ? 'auto' : index === 1 ? '22.5%' : 'auto',
                      top: index === 0 ? '50%' : index === 1 ? 'auto' : '50%',
                      left: index === 0 ? '-18.5%' : index === 1 ? '-14%' : '-16%',
                      marginTop: index === 2 ? '1rem' : '0',
                      width: '14px',
                      height: '14px',
                      background: image.background.includes('linear-gradient')
                        ? image.background
                        : 'transparent',
                    }}
                  />
                  <span
                    className="position-absolute zindex-1 rounded-circle"
                    style={{
                      top: index === 0 ? '10%' : index === 1 ? '14%' : '8.5%',
                      right: index === 0 ? '-10%' : index === 1 ? '-9%' : '-8.5%',
                      width: '11px',
                      height: '11px',
                      background: image.background.includes('linear-gradient')
                        ? image.background
                        : 'transparent',
                    }}
                  />
                  <img src={image.src} className="d-block mx-auto" width="500" alt="image" />
                </div>
              ))}
            </div>
          </Col>

          <Col md={6} lg={5} className="offset-lg-1">
            <div className="ps-md-4 ps-lg-0">
              <div className="text-center text-md-start mt-auto">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    el: '#stepsPagination',
                    type: 'fraction',
                  }}
                  navigation={{
                    prevEl: '#prev-screen',
                    nextEl: '#next-screen',
                  }}
                  modules={[Navigation, Pagination]}
                  onSlideChange={handleSlideChange}
                >
                  <SwiperSlide data-swiper-tab="#screen-1">
                    <div className="h5 text-primary pb-1 mb-2">Step 1</div>
                    <h2 className="h1 pb-1">Create account</h2>
                    <ul className="list-unstyled d-table mx-auto mx-md-0">
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Enter your email and create a password
                      </li>
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Check your inbox to find the confirmation email
                      </li>
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Follow the steps described in the email
                      </li>
                    </ul>
                  </SwiperSlide>

                  <SwiperSlide data-swiper-tab="#screen-2">
                    <div className="h5 text-primary pb-1 mb-2">Step 2</div>
                    <h2 className="h1 pb-1">Connect account</h2>
                    <ul className="list-unstyled d-table mx-auto mx-md-0">
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Authorize in the application
                      </li>
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Fill application forms
                      </li>
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Take a photo of your passport and TIN
                      </li>
                    </ul>
                  </SwiperSlide>

                  <SwiperSlide data-swiper-tab="#screen-3">
                    <div className="h5 text-primary pb-1 mb-2">Step 3</div>
                    <h2 className="h1 pb-1">Get the card</h2>
                    <ul className="list-unstyled d-table mx-auto mx-md-0">
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Specify the desired method of obtaining a card
                      </li>
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Receive the card within 1-2 business days
                      </li>
                      <li className="d-flex fs-lg text-start pb-1 mb-2">
                        <IconifyIcon
                          icon="bx:check"
                          className="text-primary lead pe-1 me-1"
                          style={{ marginTop: '.125rem' }}
                        />
                        Start managing your finances
                      </li>
                    </ul>
                  </SwiperSlide>
                </Swiper>

                <div className="d-flex justify-content-center justify-content-md-start pt-2 pt-lg-3">
                  <button
                    type="button"
                    id="prev-screen"
                    className="btn btn-prev btn-icon btn-sm"
                    aria-label="Previous"
                  >
                    <IconifyIcon icon="bx:chevron-left" />
                  </button>
                  <div
                    id="stepsPagination"
                    className="swiper-pagination position-relative bottom-0 fs-sm lh-1 fw-medium mx-3"
                    style={{ width: '1.5rem' }}
                  ></div>
                  <button
                    type="button"
                    id="next-screen"
                    className="btn btn-next btn-icon btn-sm"
                    aria-label="Next"
                  >
                    <IconifyIcon icon="bx:chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Works;
