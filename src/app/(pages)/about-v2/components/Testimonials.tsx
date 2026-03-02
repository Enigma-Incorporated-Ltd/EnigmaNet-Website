import avatar01 from '@/assets/img/avatar/01.jpg';
import avatr05 from '@/assets/img/avatar/05.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import clutchLight from '@/assets/img/about/clutch-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim',
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Company',
    avatar: avatr05,
  },
  {
    id: 2,
    text: 'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet',
    name: 'Annette Black',
    role: 'Strategic Advisor at Ipsum Ltd.',
    avatar: avatar06,
  },
  {
    id: 3,
    text: 'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar',
    name: 'Darrell Steward',
    role: 'Project Manager at Company Ltd.',
    avatar: avatar01,
  },
];

const Testimonials = () => {
  return (
    <section className="container pb-5 mb-2 mb-md-4 mb-xl-5">
      <Row>
        <Col md={5} className="mb-4 mb-md-0">
          <Card className="justify-content-center bg-dark h-100 p-4 p-lg-5">
            <div className="p-2">
              <h3 className="display-4 text-primary mb-1">200+</h3>
              <h2 className="text-light pb-5 mb-2">Clients Already Served</h2>
              <Link
                to="#"
                className="d-inline-flex align-items-center rounded-3 text-decoration-none py-3 px-4"
                style={{ backgroundColor: '#3e4265' }}
              >
                <div className="pe-3">
                  <div className="fs-xs text-light text-uppercase opacity-70 mb-2">Reviewed on</div>
                  <img src={clutchLight} alt="Clutch" width={97} height={32} />
                </div>
                <div className="ps-1">
                  <div className="text-nowrap mb-2">
                    {[...Array(5)].map((_, i) => (
                      <IconifyIcon key={i} icon="bxs:star" className="text-warning" />
                    ))}
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
            </div>

            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={24}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{ prevEl: '#prev', nextEl: '#next' }}
              className="mx-0 mb-md-n2 mb-xxl-n3"
            >
              {testimonials.map(t => (
                <SwiperSlide key={t.id} className="h-auto">
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">{t.text}</p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="rounded-circle"
                      />
                      <div className="ps-3">
                        <h5 className="fw-semibold lh-base mb-0">{t.name}</h5>
                        <span className="fs-sm text-muted">{t.role}</span>
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
    </section>
  );
};

export default Testimonials;