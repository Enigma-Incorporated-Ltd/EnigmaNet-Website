import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import avatar02 from '@/assets/img/avatar/02.jpg';
import avatar03 from '@/assets/img/avatar/03.jpg';
import avatar10 from '@/assets/img/avatar/10.jpg';

import IconifyIcon from '@/components/IconifyIcon';
import { Card, Col, Row } from 'react-bootstrap';

type Testimonial = {
  id: number;
  text: string;
  rating: number;
  author: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non.',
    rating: 5,
    author: 'Annette Black',
    role: 'Co-founder of Lorem Company',
    avatar: avatar03,
  },
  {
    id: 2,
    text: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 4,
    author: 'Robert Fox',
    role: 'CEO of Ipsum Company',
    avatar: avatar02,
  },
  {
    id: 3,
    text: 'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in.',
    rating: 5,
    author: 'Jerome Bell',
    role: 'Founder of the Agency',
    avatar: avatar10,
  },
  {
    id: 4,
    text: 'Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.',
    rating: 4,
    author: 'Annette Black',
    role: 'Co-founder of Lorem Company',
    avatar: avatar03,
  },
];

const Testimonials = () => {
  return (
    <section className="container mb-5 pb-3 py-lg-4 py-xl-5">
      <Row className="gy-4 gy-md-5 pt-3 py-md-4">
        <Col xl={2} lg={3} className="text-lg-start text-center">
          <h2 className="mb-4 mb-xl-5 pb-2 pb-md-3 pb-lg-4">What Our Clients Say About Us:</h2>
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
        </Col>

        <Col lg={9} className="offset-xl-1">
          <Swiper
            modules={[Navigation]}
            loop
            navigation={{ prevEl: '#prev', nextEl: '#next' }}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            className="pb-3"
          >
            {testimonials.map(item => (
              <SwiperSlide key={item.id} className="h-auto p-2 pb-4">
                <figure className="d-flex flex-column h-100 mt-4">
                  <Card className="h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <IconifyIcon icon="bxs:quote-left" />
                    </span>

                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0">{item.text}</p>
                    </blockquote>

                    <div className="card-footer border-0 text-nowrap pt-0">
                      {[...Array(5)].map((_, i) => (
                        <IconifyIcon
                          key={i}
                          icon="bxs:star"
                          className={i < item.rating ? 'text-warning' : 'text-muted opacity-75'}
                        />
                      ))}
                    </div>
                  </Card>

                  <figcaption className="d-flex align-items-center pt-4">
                    <img
                      src={item.avatar}
                      width="48"
                      className="rounded-circle"
                      alt={item.author}
                    />
                    <div className="ps-3">
                      <h6 className="fs-sm fw-semibold mb-0">{item.author}</h6>
                      <span className="fs-xs text-muted">{item.role}</span>
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
