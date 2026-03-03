import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import clutchDark from '@/assets/img/about/clutch-logo-dark.svg';
import clutchLight from '@/assets/img/about/clutch-logo-light.svg';
import membersLight from '@/assets/img/about/members-light.png';
import membersDark from '@/assets/img/about/members-dark.png';
import chatLight from '@/assets/img/about/chat-light.svg';
import chatDark from '@/assets/img/about/chat-dark.svg';
import graphBg from '@/assets/img/about/graph.svg';

import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand03 from '@/assets/img/brands/03.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand06 from '@/assets/img/brands/06.svg';

import { Link } from 'react-router';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const brandLogos = [brand01, brand02, brand03, brand04, brand05, brand06];

const Partners = () => {
  return (
    <section className="bg-secondary mb-5 py-lg-4 py-xl-5">
      <Container className="pt-5">
        <Row className="align-items-center gy-5 pt-2 pt-sm-3 pt-md-4">
          <Col lg={5} className="text-lg-start text-center">
            <h2 className="h1 mb-4 pb-lg-2">Company built by a global team of innovators</h2>
            <p className="mb-4 pb-1 pb-sm-2 pb-lg-3">
              In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id
              porttitor aliquam eget aliquet sagittis eu aut diam ut phasellus sed convallis iaculis
              neque ultricies convallis sed enim
            </p>
            <Link to="/contacts-v2" className="btn btn-primary">
              Contact us
            </Link>
          </Col>
          <Col lg={6} className="offset-lg-1">
            <Row className="row-cols-sm-2 row-cols-1 g-4 align-items-center">
              <Col>
                <Card className="border-0">
                  <CardBody className="m-xl-3 m-1 text-center">
                    <Link to="#" className="d-inline-block mb-4 pb-2">
                      <img
                        src={clutchDark}
                        width="116"
                        alt="Clutch"
                        className="d-dark-mode-none d-block"
                      />
                      <img
                        src={clutchLight}
                        width="116"
                        alt="Clutch"
                        className="d-dark-mode-block d-none"
                      />
                    </Link>
                    <h5 className="mb-3 fs-lg fw-normal lh-1">
                      <span className="h1 d-block w-100 mb-0">100%</span>
                      Positive Feedback
                    </h5>
                    <div className="mb-3 text-nowrap">
                      {[...Array(5)].map((_, i) => (
                        <IconifyIcon key={i} icon="bxs:star" className="text-warning fs-sm" />
                      ))}
                    </div>
                    <img
                      src={membersDark}
                      width="168"
                      alt="Members"
                      className="d-dark-mode-none d-block mx-auto"
                    />
                    <img
                      src={membersLight}
                      width="168"
                      alt="Members"
                      className="d-dark-mode-block d-none mx-auto"
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <CardBody className="m-xl-3 m-1 text-center">
                    <img
                      src={chatLight}
                      width="56"
                      alt="Icon"
                      className="d-dark-mode-none d-block mx-auto mb-4"
                    />
                    <img
                      src={chatDark}
                      width="56"
                      alt="Icon"
                      className="d-dark-mode-block d-none mx-auto mb-4"
                    />
                    <h5 className="mb-3 fs-lg fw-normal lh-1">
                      <span className="h1 d-block w-100 mb-0">24/7</span>
                      Customer support
                    </h5>
                  </CardBody>
                </Card>
                <Card className="border-0 mt-4">
                  <CardBody
                    className="m-xl-3 m-1 bg-repeat-0 bg-position-top-end"
                    style={{ backgroundImage: `url(${graphBg})` }}
                  >
                    <h5 className="mb-3 fs-lg fw-normal lh-1 mt-5">
                      <span className="h1 d-block w-100 mb-0">+12k</span>
                      new leads for clients
                    </h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="mt-lg-5 mt-sm-2 mt-md-4 pt-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={2}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              500: { slidesPerView: 3, spaceBetween: 8 },
              650: { slidesPerView: 4, spaceBetween: 8 },
              900: { slidesPerView: 5, spaceBetween: 8 },
              1100: { slidesPerView: 6, spaceBetween: 8 },
            }}
          >
            {brandLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Link to="#" className="card card-body bg-none border-0 px-2 mx-2">
                  <img
                    src={logo}
                    className="d-block mx-auto my-2"
                    width="154"
                    alt={`Brand ${index + 1}`}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
