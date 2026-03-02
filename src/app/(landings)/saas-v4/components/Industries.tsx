import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

import industries1 from '@/assets/img/landing/software-agency-3/industries/01.jpg';
import industries2 from '@/assets/img/landing/software-agency-3/industries/02.jpg';
import industries3 from '@/assets/img/landing/software-agency-3/industries/03.jpg';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const industriesData = [
  {
    id: 'industry-1',
    title: 'Finance and insurance',
    desc: `Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer
    blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat,
    cursus enim. Enim ut nulla netus porta lacus diam. Et enim ultrices nunc, nunc. In iaculis venenatis
    at sit.`,
    img: industries1,
  },
  {
    id: 'industry-2',
    title: 'Startup and technology',
    desc: `Nunc, amet et, et at habitant. Eget quis justo, metus at metus sapien. Urna quisque rutrum pharetra
    pulvinar vitae quam blandit non. Orci tempor cursus egestas quis orci at nisi maecenas. Enim in
    ultrices tortor, nibh quis sollicitudin tellus non maecenas. In libero ut semper nunc magna tortor.`,
    img: industries2,
  },
  {
    id: 'industry-3',
    title: 'E-commerce',
    desc: `Vivamus nisl sit volutpat laoreet ligula et. Nunc, duis est justo, cras ipsum vulputate eget tellus
    augue. Amet, sagittis ut enim nisl commodo, pharetra. Sapien imperdiet tristique interdum aliquet
    varius vitae facilisis vel. Erat convallis eget elit eget iaculis. Morbi id facilisis ligula odio sed
    amet suspendisse duis aliquet. Justo quam convallis id sed.`,
    img: industries3,
  },
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <Row className="gy-4 mb-xl-3">
        <Col xl={4} lg={5} className="d-flex flex-column order-2 order-lg-1">
          <h2 className="h1 mb-md-4 mb-3 py-lg-3 text-lg-start text-center">Industries We Serve</h2>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            autoHeight={true}
            navigation={{
              prevEl: '#prev-industry',
              nextEl: '#next-industry',
            }}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            className="mx-0"
          >
            {industriesData.map((industry) => (
              <SwiperSlide key={industry.id}>
                <h3 className="h4 mb-4">
                  <Link
                    to="#"
                    className="nav-link justify-content-center justify-content-lg-start fw-bold p-0"
                  >
                    {industry.title}
                    <IconifyIcon
                      icon="bx:right-arrow-alt"
                      className="text-primary fs-3 fw-normal ms-2 mt-1"
                    />
                  </Link>
                </h3>
                <p>{industry.desc}</p>
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

        <Col lg={7} className="offset-xl-1 order-1 order-lg-2">
          <div className="swiper-tabs">
            {industriesData.map((industry, idx) => (
              <div
                key={industry.id}
                className={`swiper-tab rounded-3 ${activeIndex === idx ? 'active' : ''}`}
              >
                <img src={industry.img} alt={industry.title} className="rounded-3" />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Industries;
