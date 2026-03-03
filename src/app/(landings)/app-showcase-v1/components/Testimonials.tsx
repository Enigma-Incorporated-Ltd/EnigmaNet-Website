import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import avatar42 from '@/assets/img/avatar/42.png';
import avatar43 from '@/assets/img/avatar/43.png';
import avatar44 from '@/assets/img/avatar/44.png';
import avatar45 from '@/assets/img/avatar/45.png';


import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardFooter, Col, Container, Row } from 'react-bootstrap';

type testimonialType = {
  rating: number;
  text: string;
  img: string;
  name: string;
  role: string;
};
const testimonialsData: testimonialType[] = [
  {
    rating: 3,
    text: 'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit.',
    img: avatar42,
    name: 'Fannie Summers',
    role: 'Designer',
  },
  {
    rating: 5,
    text: 'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet.',
    img: avatar43,
    name: 'Robert Fox',
    role: 'QA Engineer',
  },
  {
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    img: avatar44,
    name: 'Annette Black',
    role: 'Project Manager',
  },
  {
    rating: 5,
    text: 'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.',
    img: avatar45,
    name: 'Jerome Bell',
    role: 'Developer',
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-5 mb-md-2"
      style={{
        background:
          'radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)',
      }}
    >
      <Container className="py-lg-4">
        <Row className="py-md-3">
          <Col xl={3} lg={4} className="pt-2">
            <h2 className="h1 text-center text-lg-start pb-2">Clients are Loving Our App</h2>

            <div className="d-flex justify-content-center justify-content-lg-start pt-lg-5">
              <button
                type="button"
                className="btn btn-prev btn-icon btn-sm me-3"
                aria-label="Previous"
                id="prev-review"
              >
                <IconifyIcon icon="bx:chevron-left" fontSize={20} />
              </button>
              <button
                type="button"
                className="btn btn-next btn-icon btn-sm"
                aria-label="Next"
                id="next-review"
              >
                <IconifyIcon icon="bx:chevron-right" fontSize={20} />
              </button>
            </div>
          </Col>

          <Col lg={8} className="offset-xl-1 pt-4 mt-2 mt-md-3 mt-lg-0 pt-lg-0">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '#prev-review',
                nextEl: '#next-review',
              }}
              spaceBetween={20}
              slidesPerView={1}
              loop
              breakpoints={{
                600: { slidesPerView: 2 },
              }}
              className="px-2 px-sm-0"
            >
              {testimonialsData.map((item, index) => (
                <SwiperSlide key={index} className="h-auto pt-4 pb-3 px-2">
                  <div className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                    <Card className="h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <IconifyIcon icon="bxs:quote-left" />
                      </span>
                      <blockquote className="card-body pb-4 mb-0">
                        <div className="text-nowrap pt-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <IconifyIcon
                              key={i}
                              icon="bxs:star"
                              className={i < item.rating ? 'text-warning' : 'text-muted opacity-75'}
                            />
                          ))}
                        </div>

                        <p className="fs-lg mb-0">{item.text}</p>
                      </blockquote>
                      <CardFooter className="d-flex align-items-center border-0 pt-0">
                        <img
                          src={item.img}
                          width="48"
                          className="rounded-circle ms-n1"
                          alt={item.name}
                        />
                        <div className="ps-2 ms-1">
                          <h6 className="fs-base fw-semibold mb-0">{item.name}</h6>
                          <span className="fs-sm text-muted">{item.role}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
