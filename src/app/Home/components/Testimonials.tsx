import { Swiper, SwiperSlide } from 'swiper/react';

import IconifyIcon from '@/components/IconifyIcon';
import avatar40 from '@/assets/img/avatar/40.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';
import avatar41 from '@/assets/img/avatar/41.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import { Navigation } from 'swiper/modules';
import { Card, Col, Container, Row } from 'react-bootstrap';


type testimonialType = {
  text: string;
  rating: number;
  img: string;
  name: string;
  role: string;
};

const testimonials: testimonialType[] = [
  {
    text: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
    img: avatar40,
    name: 'Robert Fox',
    role: 'Founder of Lorem Company',
  },
  {
    text: 'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.',
    rating: 5,
    img: avatar06,
    name: 'Annette Black',
    role: 'CEO of Ipsum Company',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    img: avatar41,
    name: 'Jerome Bell',
    role: 'Founder of the Agency',
  },
  {
    text: 'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 5,
    img: avatar05,
    name: 'Albert Flores',
    role: 'CEO of Dolor Ltd.',
  },
];

const Testimonials = () => {
  return (
    <Container className="py-5 mb-2 mt-sm-2 my-md-4 my-lg-5">
      <Row className="pt-2 py-xl-3">
        <Col lg={3} md={4}>
          <h2
            className="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2"
            style={{ maxWidth: '300px' }}
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
              <IconifyIcon icon="bx:chevron-left" fontSize={24} />
            </button>
            <button
              type="button"
              id="next-testimonial"
              className="btn btn-next btn-icon btn-sm ms-2"
              aria-label="Next"
            >
              <IconifyIcon icon="bx:chevron-right" fontSize={24} />
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
            slidesPerView={1}
            spaceBetween={8}
            loop={true}
            breakpoints={{
              500: { slidesPerView: 2 },
              1000: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="mx-n2"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                  <Card className="h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <IconifyIcon icon="bxs:quote-left" />
                    </span>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0">{t.text}</p>
                    </blockquote>
                    <div className="card-footer border-0 text-nowrap pt-0">
                      {Array.from({ length: 5 }, (_, i) => (
                        <IconifyIcon
                          key={i}
                          icon={i < t.rating ? 'bxs:star' : 'bx:star'}
                          className={i < t.rating ? 'text-warning' : 'text-muted opacity-75'}
                        />
                      ))}
                    </div>
                  </Card>
                  <figcaption className="d-flex align-items-center ps-4 pt-4">
                    <img src={t.img} width="48" className="rounded-circle" alt={t.name} />
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
    </Container>
  );
};

export default Testimonials;
