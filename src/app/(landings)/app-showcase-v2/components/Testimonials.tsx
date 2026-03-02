import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Card, CardFooter, Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';


const testimonials = [
  {
    text: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    stars: 3,
    name: 'Robert Fox',
    role: 'Founder of Lorem Company',
  },
  {
    text: 'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.',
    stars: 5,
    name: 'Annette Black',
    role: 'CEO of Ipsum Company',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    stars: 4,
    name: 'Jerome Bell',
    role: 'Founder of the Agency',
  },
  {
    text: 'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    stars: 5,
    name: 'Albert Flores',
    role: 'CEO of Dolor Ltd.',
  },
];

const Testimonials = () => {
  return (
    <Container className="py-5 my-1 my-md-4 my-lg-5">
      <Row className="pt-2 py-xl-3">
        <Col lg={3} md={4}>
          <h2
            className="h1 text-center text-md-start mx-auto mx-md-0 pb-3 pb-sm-4 pb-md-0 pt-md-2"
            style={{ maxWidth: '300px' }}
          >
            What <br className="d-none d-md-inline" />
            People Say <br className="d-none d-md-inline" />
            About App:
          </h2>

          <div className="d-none d-md-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5">
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
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={8}
            loop
            navigation={{
              prevEl: '#prev-testimonial',
              nextEl: '#next-testimonial',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              500: { slidesPerView: 2 },
              1000: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="mx-n2"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                  <Card className="h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <IconifyIcon icon="bxs:quote-left" />
                    </span>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0">{item.text}</p>
                    </blockquote>
                    <CardFooter className="border-0 text-nowrap pt-0">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconifyIcon
                          key={i}
                          icon="bxs:star"
                          className={i < item.stars ? 'text-warning' : 'text-muted opacity-75'}
                        />
                      ))}
                    </CardFooter>
                  </Card>
                  <figcaption className="ps-4 pt-4">
                    <h6 className="fs-sm fw-semibold mb-0">{item.name}</h6>
                    <span className="fs-xs text-muted">{item.role}</span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination position-relative d-md-none mt-5"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
