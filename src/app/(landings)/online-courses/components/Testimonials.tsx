import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import avatar1 from '@/assets/img/avatar/13.jpg';
import avatar2 from '@/assets/img/avatar/14.jpg';
import avatar3 from '@/assets/img/avatar/11.jpg';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const testimonials = [
  {
    id: 1,
    text: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est.',
    author: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Ltd.',
    avatar: avatar1,
  },
  {
    id: 2,
    text: 'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam.',
    author: 'Annette Black',
    role: 'Strategic Advisor at Company LLC',
    avatar: avatar2,
  },
  {
    id: 3,
    text: 'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo.',
    author: 'Darrell Steward',
    role: 'Project Manager at Ipsum Ltd.',
    avatar: avatar3,
  },
];

const Testimonials = () => {
  return (
    <section className="container pt-md-2 pb-5">
      <Row>
        <Col md={5}>
          <Card className="h-100 border-0 overflow-hidden px-md-4">
            <span className="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100 opacity-10 d-none d-md-block"></span>
            <CardBody className="d-flex flex-column align-items-center justify-content-center position-relative zindex-2 p-0 pb-2 p-lg-4">
              <h2 className="h1 text-center text-md-start p-lg-4">
                What Our Students Say About Online Courses
              </h2>
            </CardBody>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="border-0 shadow-sm p-4 p-xxl-5">
            <div className="d-flex justify-content-between pb-4 mb-2">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <IconifyIcon icon="bxs:quote-left" />
              </span>
              <div className="d-flex">
                <button
                  type="button"
                  id="testimonials-prev"
                  className="btn btn-prev btn-icon btn-sm me-2"
                  aria-label="Previous"
                >
                  <IconifyIcon icon="bx:chevron-left" fontSize={20} />
                </button>
                <button
                  type="button"
                  id="testimonials-next"
                  className="btn btn-next btn-icon btn-sm ms-2"
                  aria-label="Next"
                >
                  <IconifyIcon icon="bx:chevron-right" fontSize={20} />
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              loop
              pagination={{ clickable: true }}
              navigation={{
                prevEl: '#testimonials-prev',
                nextEl: '#testimonials-next',
              }}
              className="mx-0 mb-md-n2 mb-xxl-n3"
            >
              {testimonials.map(item => (
                <SwiperSlide key={item.id} className="h-auto">
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">{item.text}</p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                      <img
                        src={item.avatar}
                        width={60}
                        height={60}
                        alt={item.author}
                        className="rounded-circle"
                      />
                      <div className="ps-3">
                        <h6 className="fw-semibold lh-base mb-0">{item.author}</h6>
                        <span className="fs-sm text-muted">{item.role}</span>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination position-relative mt-5"></div>
            </Swiper>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;
