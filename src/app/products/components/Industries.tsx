import { Container, Row, Col, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import industry1 from '@/assets/img/landing/software-agency-3/industries/01.jpg';
import industry2 from '@/assets/img/landing/software-agency-3/industries/02.jpg';
import industry3 from '@/assets/img/landing/software-agency-3/industries/03.jpg';
import IconifyIcon from '@/components/IconifyIcon';

type Industry = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const industriesData: Industry[] = [
  {
    id: 1,
    title: 'Finance and insurance',
    description:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim.',
    image: industry1,
  },
  {
    id: 2,
    title: 'Startup and technology',
    description:
      'Interdum amet lobortis viverra et sapien aliquam nunc amet. Bibendum eu pellentesque sit risus leo commodo. Nibh dictum tellus lectus in risus eget cursus vitae nisi lacinia aliquam utuismod cras pellentesque.',
    image: industry2,
  },
  {
    id: 3,
    title: 'E-commerce',
    description:
      'Egestas nunc eleifend lacinia suspendisse bibendum ultrices risus. Facilisis neque eleifend diam orci id. Iaculis dignissim sed malesuada porttitor ac iaculis nullam donec sed volutpat quis vulputate sollicitudin tincidunt.',
    image: industry3,
  },
];

const Industries = () => {
  return (
    <section className="mb-5 pb-lg-5 pb-md-4 pb-3">
      <Container>
        <h2 className="h1 mb-4 text-center d-lg-none">Industries We Serve</h2>
        <Row className="gy-md-5 gy-4 mb-xl-3">
          <Col xl={4} lg={5} className="d-flex flex-column order-2 order-lg-1">
            <h2 className="h1 mb-4 pb-3 pt-2 d-none d-lg-block">Industries We Serve</h2>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '#prev-industry',
                nextEl: '#next-industry',
              }}
              spaceBetween={24}
              loop
              autoHeight
              className="mx-0"
            >
              {industriesData.map(industry => (
                <SwiperSlide key={industry.id} className="text-lg-start text-center">
                  <h3 className="h5 mb-lg-4 mb-3">{industry.title}</h3>
                  <p>{industry.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="d-flex justify-content-center justify-content-lg-start mt-2 mt-lg-auto">
              <Button
                id="prev-industry"
                variant="light"
                className="btn btn-prev btn-icon btn-sm me-2"
                aria-label="Previous"
              >
                <IconifyIcon icon="bx:chevron-left" fontSize={20} />
              </Button>
              <Button
                id="next-industry"
                variant="light"
                className="btn btn-next btn-icon btn-sm ms-2"
                aria-label="Next"
              >
                <IconifyIcon icon="bx:chevron-right" fontSize={20} />
              </Button>
            </div>
          </Col>

          <Col lg={7} xl={{ span: 7, offset: 1 }} className="order-1 order-lg-2">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '#prev-industry',
                nextEl: '#next-industry',
              }}
              spaceBetween={24}
              loop
              autoHeight
              className="swiper-tabs"
            >
              {industriesData.map(industry => (
                <SwiperSlide key={industry.id}>
                  <img src={industry.image} alt={industry.title} className="rounded-3" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Industries;
