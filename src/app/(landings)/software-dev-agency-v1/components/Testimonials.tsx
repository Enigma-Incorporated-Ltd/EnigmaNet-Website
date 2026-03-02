import { Container, Row, Col, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import clutchLogo from '@/assets/img/about/clutch-logo.svg';
import avatar1 from '@/assets/img/avatar/05.jpg';
import avatar2 from '@/assets/img/avatar/06.jpg';
import avatar3 from '@/assets/img/avatar/01.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

type testimonialsType = {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
};

const testimonials: testimonialsType[] = [
  {
    id: 1,
    text: 'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.',
    author: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Company',
    avatar: avatar1,
  },
  {
    id: 2,
    text: 'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.',
    author: 'Annette Black',
    role: 'Strategic Advisor at Ipsum Ltd.',
    avatar: avatar2,
  },
  {
    id: 3,
    text: 'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar.',
    author: 'Darrell Steward',
    role: 'Project Manager at Company Ltd.',
    avatar: avatar3,
  },
];

const Testimonials = () => {
  return (
    <section className="pb-5 mb-md-2 mb-xl-4">
      <Container>
        <Row className="pb-lg-2">
          <Col md={5} className="mb-4 mb-md-0">
            <Card className="justify-content-center bg-dark h-100 p-4 p-lg-5 border-0">
              <div className="p-2">
                <h3 className="display-4 text-primary mb-1">200+</h3>
                <h2 className="text-light pb-5 mb-2">Clients Already Served</h2>

                <Link
                  to="#"
                  className="d-inline-flex align-items-center rounded-3 text-decoration-none py-3 px-4"
                  style={{ backgroundColor: '#3e4265' }}
                >
                  <div className="pe-3">
                    <div className="fs-xs text-light text-uppercase opacity-70 mb-2">
                      Reviewed on
                    </div>
                    <img src={clutchLogo} alt="Clutch" width={97} height={30} />
                  </div>
                  <div className="ps-1">
                    <div className="text-nowrap mb-2">
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                      <IconifyIcon icon="bxs:star" className="text-warning" />
                    </div>
                    <div className="text-light opacity-70">49 reviews</div>
                  </div>
                </Link>
              </div>
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
                    id="testimonial-prev"
                    className="btn btn-prev btn-icon btn-sm me-2"
                    aria-label="Previous"
                  >
                    <IconifyIcon icon="bx:chevron-left" fontSize={20} />
                  </button>
                  <button
                    type="button"
                    id="testimonial-next"
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
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                navigation={{
                  prevEl: '#testimonial-prev',
                  nextEl: '#testimonial-next',
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
                          alt={item.author}
                          width={48}
                          height={48}
                          className="rounded-circle"
                        />
                        <div className="ps-3">
                          <h5 className="fw-semibold lh-base mb-0">{item.author}</h5>
                          <span className="fs-sm text-muted">{item.role}</span>
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination position-relative pt-3 mt-4"></div>
              </Swiper>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
