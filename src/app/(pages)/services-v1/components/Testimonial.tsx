import test1 from '@/assets/img/testimonials/01.jpg';
import test2 from '@/assets/img/testimonials/02.jpg';
import test3 from '@/assets/img/testimonials/03.jpg';
import { useState } from 'react';

import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';

import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand04 from '@/assets/img/brands/04.svg';

import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sideImages = [test1, test2, test3];

  return (
    <section className="container pb-5 mb-2 mb-lg-4" style={{ marginTop: '-228px' }}>
      <h2 className="h1 pb-3 pb-lg-4">What Our Clients Say</h2>
      <Row>
        <Col md={4} className="d-none d-md-block">
          <div className="swiper-tabs">
            {sideImages.map((img, idx) => (
              <Card
                key={idx}
                className={`bg-transparent border-0 swiper-tab ${
                  idx === activeIndex ? 'active' : ''
                }`}
              >
                <CardBody
                  className="p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center"
                  style={{
                    backgroundImage: `url(${img})`,
                    height: '350px',
                  }}
                ></CardBody>
              </Card>
            ))}
          </div>
        </Col>

        <Col md={8}>
          <div className="position-relative ms-xxl-5">
            <Card className="border-light shadow-sm zindex-2 mt-4 pt-5 p-4 p-xxl-5">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 translate-middle-y">
                <IconifyIcon icon="bxs:quote-left" />
              </span>

              <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: '#prev', nextEl: '#next' }}
                loop
                spaceBetween={24}
                onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                className="mx-0 mb-md-n2 mb-xxl-n3"
              >
                <SwiperSlide>
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">
                        Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor.
                        Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam
                        pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed
                        aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam
                        volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae
                        eleifend pulvinar. In ac fermentum sit in orci.
                      </p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-sm-flex w-100 pb-2">
                      <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                        <img
                          src={avatar01}
                          width={48}
                          className="d-md-none rounded-circle"
                          alt="Darrell Steward"
                        />
                        <div className="ps-3 ps-md-0">
                          <h5 className="fw-semibold lh-base mb-0">Darrell Steward</h5>
                          <span className="fs-sm text-muted">Project Manager</span>
                        </div>
                      </div>
                      <img src={brand04} width={160} alt="Company logo" />
                    </figcaption>
                  </figure>
                </SwiperSlide>

                <SwiperSlide>
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">
                        Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc
                        pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero,
                        amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing
                        malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae
                        eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur
                        lobortis diam, duis orci.
                      </p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-sm-flex w-100 pb-2">
                      <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                        <img
                          src={avatar06}
                          width={48}
                          className="d-md-none rounded-circle"
                          alt="Annette Black"
                        />
                        <div className="ps-3 ps-md-0">
                          <h5 className="fw-semibold lh-base mb-0">Annette Black</h5>
                          <span className="fs-sm text-muted">Strategic Advisor</span>
                        </div>
                      </div>
                      <img src={brand02} width={160} alt="Company logo" />
                    </figcaption>
                  </figure>
                </SwiperSlide>

                <SwiperSlide>
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">
                        Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis
                        varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui
                        imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque
                        cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar
                        turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla
                        arcu fermentum massa.
                      </p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-sm-flex w-100 pb-2">
                      <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                        <img
                          src={avatar05}
                          width={48}
                          className="d-md-none rounded-circle"
                          alt="Ralph Edwards"
                        />
                        <div className="ps-3 ps-md-0">
                          <h5 className="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                          <span className="fs-sm text-muted">Head of Marketing</span>
                        </div>
                      </div>
                      <img src={brand01} width={160} alt="Company logo" />
                    </figcaption>
                  </figure>
                </SwiperSlide>
              </Swiper>
            </Card>
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-center justify-content-md-start pt-3 mt-2 mt-md-3">
        <button
          type="button"
          id="prev"
          className="btn btn-prev btn-icon btn-sm me-2"
          aria-label="Previous"
        >
          <IconifyIcon icon="bx:chevron-left" fontSize={20} />
        </button>
        <button
          type="button"
          id="next"
          className="btn btn-next btn-icon btn-sm ms-2"
          aria-label="Next"
        >
          <IconifyIcon icon="bx:chevron-right" fontSize={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
