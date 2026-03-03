import industries1 from '@/assets/img/landing/financial/industries/01.jpg';
import industries2 from '@/assets/img/landing/financial/industries/02.jpg';
import industries3 from '@/assets/img/landing/financial/industries/03.jpg';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

import IconifyIcon from '@/components/IconifyIcon';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

type Industry = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const industries: Industry[] = [
  {
    id: 1,
    title: 'Transportation & Logistics',
    description:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim.',
    image: industries1,
  },
  {
    id: 2,
    title: 'Construction & Real Estate',
    description:
      'Nunc, amet et, et at habitant. Eget quis justo, metus at metus sapien. Urna quisque rutrum pharetra pulvinar vitae quam blandit non. Orci tempor cursus egestas quis orci at nisi maecenas.',
    image: industries2,
  },
  {
    id: 3,
    title: 'Education',
    description:
      'Vivamus nisl sit volutpat laoreet ligula et. Nunc, duis est justo, cras ipsum vulputate eget tellus augue. Amet, sagittis ut enim nisl commodo, pharetra. Sapien imperdiet tristique interdum aliquet varius vitae facilisis vel.',
    image: industries3,
  },
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container pt-xl-3 pb-5">
      <h2 className="h1 text-center text-lg-start pb-4 mb-1 mb-lg-3">Industries We Serve</h2>
      <Row className="pb-2 pb-md-4 pb-lg-5">
        <Col xl={4} lg={5} className="d-flex flex-column order-2 order-lg-1">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            navigation={{
              prevEl: '#prev-industry',
              nextEl: '#next-industry',
            }}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            className="mx-0 mb-md-n2 mb-xxl-n3 text-center text-lg-start"
          >
            {industries.map(item => (
              <SwiperSlide key={item.id}>
                <h3 className="h4 mb-4">
                  <Link
                    to="#"
                    className="nav-link justify-content-center justify-content-lg-start fw-bold p-0"
                  >
                    {item.title}
                    <IconifyIcon
                      icon="bx:right-arrow-alt"
                      className="text-primary fs-3 fw-normal ms-2 mt-1"
                    />
                  </Link>
                </h3>
                <p>{item.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="d-flex justify-content-center justify-content-lg-start mt-2 mt-lg-auto">
            <button
              type="button"
              id="prev-industry"
              className="btn btn-prev btn-icon btn-sm me-2"
              aria-label="Previous"
            >
              <IconifyIcon icon="bx:chevron-left" fontSize={20} />
            </button>
            <button
              type="button"
              id="next-industry"
              className="btn btn-next btn-icon btn-sm ms-2"
              aria-label="Next"
            >
              <IconifyIcon icon="bx:chevron-right" fontSize={20} />
            </button>
          </div>
        </Col>

        <Col lg={7} className="offset-xl-1 order-1 order-lg-2 pt-lg-3 mt-lg-n5 mb-4 mb-lg-0">
          <div className="swiper-tabs mt-lg-n5 text-center text-lg-start">
            <img
              src={industries[activeIndex].image}
              className="rounded-3"
              alt={industries[activeIndex].title}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Industries;
