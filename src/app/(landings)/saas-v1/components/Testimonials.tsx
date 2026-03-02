import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import avatar14 from '@/assets/img/avatar/14.jpg';
import avatar13 from '@/assets/img/avatar/13.jpg';
import avatar11 from '@//assets/img/avatar/11.jpg';

import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

type testimonialsType = {
  text: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: testimonialsType[] = [
  {
    text: 'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada.',
    name: 'Annette Black',
    role: 'Strategic Advisor at Company LLC',
    image: avatar14,
  },
  {
    text: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus.',
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Ltd.',
    image: avatar13,
  },
  {
    text: 'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa.',
    name: 'Darrell Steward',
    role: 'Project Manager at Ipsum Ltd.',
    image: avatar11,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary py-5">
      <Container className="py-2 py-md-3 py-lg-4 py-xl-5">
        <Row className="row-cols-1 row-cols-md-2 gx-3 gx-lg-4">
          <Col md={6} className="mb-3 mb-md-0">
            <Card className="border-0 bg-dark h-100 p-xl-4">
              <CardBody>
                <h2 className="display-1 text-light">420k</h2>
                <p className="lead fw-medium text-light">
                  <span className="opacity-70">users are taking advantage of our</span>{' '}
                  <span className="fw-bold">Task Manager Tool</span>
                  <span className="opacity-70">
                    . It’s a new transparent and efficient way to organize all of your daily tasks.
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md={6}>
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
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <figure className="card h-100 position-relative border-0 bg-transparent">
                      <blockquote className="card-body p-0 mb-0">
                        <p className="fs-lg mb-0">{t.text}</p>
                      </blockquote>
                      <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                        <img src={t.image} width="60" className="rounded-circle" alt={t.name} />
                        <div className="ps-3">
                          <h6 className="fw-semibold lh-base mb-0">{t.name}</h6>
                          <span className="fs-sm text-muted">{t.role}</span>
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
      </Container>
    </section>
  );
};

export default Testimonials;
