import avatar1 from '@/assets/img/avatar/01.jpg';
import avatar3 from '@/assets/img/avatar/05.jpg';
import avatar2 from '@/assets/img/avatar/06.jpg';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

import brand1 from '@/assets/img/brands/01.svg';
import brand2 from '@/assets/img/brands/02.svg';
import brand3 from '@/assets/img/brands/04.svg';

import testi1 from '@/assets/img/testimonials/01.jpg';
import testi2 from '@/assets/img/testimonials/02.jpg';
import testi3 from '@/assets/img/testimonials/03.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const testimonials = [
  {
    id: 1,
    text: 'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.',
    name: 'Ralph Edwards',
    role: 'Head of Marketing',
    avatar: avatar1,
    brand: brand1,
    bg: testi1,
  },
  {
    id: 2,
    text: 'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci.',
    name: 'Annette Black',
    role: 'Strategic Advisor',
    avatar: avatar2,
    brand: brand2,
    bg: testi2,
  },
  {
    id: 3,
    text: 'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.',
    name: 'Darrell Steward',
    role: 'Project Manager',
    avatar: avatar3,
    brand: brand3,
    bg: testi3,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container mb-5 pt-2 pb-3 py-md-4 py-lg-5">
      <h2 className="h1 pb-2 pb-lg-0 mb-4 mb-lg-5 text-center">What They Say About Us</h2>
      <Row>
        <Col md={8}>
          <Card className="border-0 shadow-sm p-4 p-xxl-5 mb-4 me-xxl-4">
            <div className="pb-4 mb-2">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <IconifyIcon icon="bxs:quote-left" />
              </span>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              loop={true}
              navigation={{
                prevEl: '.page-prev',
                nextEl: '.page-next',
              }}
              className="mx-0"
              onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            >
              {testimonials.map(item => (
                <SwiperSlide key={item.id} className="h-auto">
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">{item.text}</p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                      <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                        <img
                          src={item.avatar}
                          width={48}
                          height={48}
                          className="rounded-circle"
                          alt={item.name}
                        />
                        <div className="ps-3">
                          <h5 className="fw-semibold lh-base mb-0">{item.name}</h5>
                          <span className="fs-sm text-muted">{item.role}</span>
                        </div>
                      </div>
                      <img
                        src={item.brand}
                        width={160}
                        height={40}
                        className="d-block mt-2 ms-5 mt-sm-0 ms-sm-0"
                        alt="Company logo"
                      />
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>

          <nav className="pagination d-flex justify-content-center justify-content-md-start">
            <div className="page-item me-2">
              <button className="page-link page-prev btn-icon btn-sm" aria-label="Previous">
                <IconifyIcon icon="bx:chevron-left" fontSize={18} />
              </button>
            </div>
            <ul className="list-unstyled d-flex justify-content-center w-auto mb-0"></ul>
            <div className="page-item ms-2">
              <button className="page-link page-next btn-icon btn-sm" aria-label="Next">
                <IconifyIcon icon="bx:chevron-right" fontSize={18} />
              </button>
            </div>
          </nav>
        </Col>

        <Col md={4} className="d-none d-md-block">
          <div className="swiper-tabs">
            {testimonials.map((item, idx) => (
              <Card
                key={item.id}
                className={`bg-transparent border-0 swiper-tab ${
                  activeIndex === idx ? 'active' : ''
                }`}
              >
                <CardBody
                  className="p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center"
                  style={{ backgroundImage: `url(${item.bg})` }}
                ></CardBody>
                <div className="card-footer d-flex w-100 border-0 pb-0">
                  <img
                    src={item.brand}
                    width={160}
                    height={40}
                    className="d-none d-xl-block"
                    alt="Company logo"
                  />
                  <div className="border-start-xl ps-xl-4 ms-xl-2">
                    <h5 className="fw-semibold lh-base mb-0">{item.name}</h5>
                    <span className="fs-sm text-muted">{item.role}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;
