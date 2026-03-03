import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar02 from '@/assets/img/avatar/02.jpg';
import avatar03 from '@/assets/img/avatar/03.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';
import { Card, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Fannie Summers',
    role: 'Medical Center patient',
    text: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    avatar: avatar03,
    rating: 3,
  },
  {
    id: 2,
    name: 'Robert Fox',
    role: 'Medical Center patient',
    text: 'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.',
    avatar: avatar02,
    rating: 5,
  },
  {
    id: 3,
    name: 'Annette Black',
    role: 'Medical Center patient',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    avatar: avatar06,
    rating: 4,
  },
  {
    id: 4,
    name: 'Jerome Bell',
    role: 'Medical Center patient',
    text: 'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.',
    avatar: avatar05,
    rating: 3,
  },
  {
    id: 5,
    name: 'Albert Flores',
    role: 'Medical Center patient',
    text: 'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    avatar: avatar01,
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="container py-5 mb-2 mt-md-2 mb-md-4 mt-lg-4 mb-lg-5">
      <Row className="pt-xl-1 pb-xl-3">
        <Col lg={3} md={4}>
          <h2
            className="text-center text-md-start mx-auto mx-md-0 pt-md-2"
            style={{ maxWidth: 300 }}
          >
            What Our <br className="d-none d-md-inline" />
            Clients Say <br className="d-none d-md-inline" />
            About Us:
          </h2>

          <div className="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5">
            <button
              type="button"
              id="prev-testimonial"
              className="btn btn-prev btn-icon btn-sm me-2"
              aria-label="Previous"
            >
              <IconifyIcon icon="bx:chevron-left" fontSize={20} />
            </button>
            <button
              type="button"
              id="next-testimonial"
              className="btn btn-next btn-icon btn-sm ms-2"
              aria-label="Next"
            >
              <IconifyIcon icon="bx:chevron-right" fontSize={20} />
            </button>
          </div>
        </Col>

        <Col lg={9} md={8}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '#prev-testimonial',
              nextEl: '#next-testimonial',
            }}
            spaceBetween={16}
            loop
            breakpoints={{
              500: { slidesPerView: 2 },
              1000: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="mx-n2"
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id} className="h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                  <Card className="h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <IconifyIcon icon="bxs:quote-left" />
                    </span>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0">{t.text}</p>
                    </blockquote>
                    <div className="card-footer border-0 text-nowrap pt-0">
                      {[...Array(5)].map((_, i) => (
                        <IconifyIcon
                          key={i}
                          icon="bxs:star"
                          className={i < t.rating ? 'text-warning' : 'text-muted opacity-75'}
                        />
                      ))}
                    </div>
                  </Card>
                  <figcaption className="d-flex align-items-center ps-4 pt-4">
                    <img
                      src={t.avatar}
                      width={48}
                      height={48}
                      className="rounded-circle"
                      alt={t.name}
                    />
                    <div className="ps-3">
                      <h6 className="fs-sm fw-semibold mb-0">{t.name}</h6>
                      <span className="fs-xs text-muted">{t.role}</span>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;
