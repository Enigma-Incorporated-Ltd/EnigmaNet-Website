import slider01 from '@/assets/img/portfolio/slider/01.jpg';
import slider02 from '@/assets/img/portfolio/slider/02.jpg';
import slider03 from '@/assets/img/portfolio/slider/03.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const backgroundImages = [slider01, slider02, slider03];

  return (
    <section className="position-relative pt-5 py-lg-5 mt-3 mt-md-4">
      <div className="swiper-tabs position-md-absolute top-0 end-0 w-md-50 h-100">
        {backgroundImages.map((imgSrc, index) => (
          <div
            key={index}
            className={`swiper-tab position-md-absolute w-100 h-100 bg-position-center bg-repeat-0 bg-size-cover ${activeSlide === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${imgSrc})`,
              transition: 'opacity 0.5s ease',
              opacity: activeSlide === index ? 1 : 0,
              zIndex: activeSlide === index ? 2 : 1,
            }}
          >
            <div className="ratio ratio-1x1" />
          </div>
        ))}
      </div>

      <Container className="pt-1 pt-lg-2">
        <Row>
          <Col lg={5} md={6}>
            <nav className="d-none d-md-block pt-4 mt-lg-3" aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/index">
                    <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
                    Home
                  </Link>
                </li>
                <span className="d-flex align-items-center mx-2">
                  <IconifyIcon icon="bx:chevrons-right" />
                </span>
                <li className="breadcrumb-item active" aria-current="page">
                  Portfolio Slider View
                </li>
              </ol>
            </nav>

            <div className="d-none d-lg-block" style={{ height: '160px' }}></div>
            <div className="d-none d-md-block d-lg-none" style={{ height: '80px' }}></div>

            <Swiper
              spaceBetween={30}
              loop={true}
              modules={[Navigation, Pagination]}
              pagination={{
                el: '.swiper-pagination',
                type: 'fraction',
              }}
              navigation={{
                prevEl: '.btn-prev',
                nextEl: '.btn-next',
              }}
              onSlideChange={swiper => {
                const realIndex = swiper.realIndex;
                setActiveSlide(realIndex);
              }}
            >
              <SwiperSlide>
                <h2 className="h1 mb-4">3D Shape Illustration</h2>
                <p className="pb-3 mb-3">
                  Proin odio elit fringilla pellentesque erat sapien, cursus id. Sed mi semper amet
                  fringilla. Eget morbi arcu ac vestibulum sodales. Montes, integer lacinia amet
                  tristique tincidunt.
                </p>
                <table className="mb-5">
                  <tbody>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Client</th>
                      <td className="ps-3 ps-sm-4 pb-2">Coderthemes Inc.</td>
                    </tr>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Category</th>
                      <td className="ps-3 ps-sm-4 pb-2">Graphic Design</td>
                    </tr>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Date</th>
                      <td className="ps-3 ps-sm-4 pb-2">29 November 2023</td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to="/portfolio-single-project"
                  className="btn btn-primary shadow-primary mt-n2"
                >
                  Read more
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <h2 className="h1 mb-4">Scene of Human Head</h2>
                <p className="pb-3 mb-3">
                  Sed vehicula nibh quis ipsum gravida, sit amet convallis est sodales. Integer
                  pulvinar suscipit ipsum, sed facilisis libero vehicula semper. Donec vitae dolor
                  fermentum lorem pretium condimentum.
                </p>
                <table className="mb-5">
                  <tbody>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Client</th>
                      <td className="ps-3 ps-sm-4 pb-2">Lorem Ipsum Ltd.</td>
                    </tr>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Category</th>
                      <td className="ps-3 ps-sm-4 pb-2">Motion Design</td>
                    </tr>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Date</th>
                      <td className="ps-3 ps-sm-4 pb-2">15 October 2023</td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to="/portfolio-single-project"
                  className="btn btn-primary shadow-primary mt-n2"
                >
                  Read more
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <h2 className="h1 mb-4">Blue Whale Shape</h2>
                <p className="pb-3 mb-3">
                  Sed vehicula nibh quis ipsum gravida, sit amet convallis est sodales. Integer
                  pulvinar suscipit ipsum, sed facilisis libero vehicula semper. Donec vitae dolor
                  fermentum lorem pretium condimentum.
                </p>
                <table className="mb-5">
                  <tbody>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Client</th>
                      <td className="ps-3 ps-sm-4 pb-2">Great Company LLC</td>
                    </tr>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Category</th>
                      <td className="ps-3 ps-sm-4 pb-2">3D Design</td>
                    </tr>
                    <tr>
                      <th className="text-dark fw-bold pb-2">Date</th>
                      <td className="ps-3 ps-sm-4 pb-2">18 September 2023</td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to="/portfolio-single-project"
                  className="btn btn-primary shadow-primary mt-n2"
                >
                  Read more
                </Link>
              </SwiperSlide>

              <div className="d-none d-lg-block" style={{ height: '160px' }}></div>
              <div className="d-none d-md-block d-lg-none" style={{ height: '80px' }}></div>
              <div className="d-md-none" style={{ height: '40px' }}></div>

              <div className="d-flex align-items-center ps-2 pb-5">
                <button
                  type="button"
                  className="btn btn-prev btn-icon btn-sm position-static"
                  aria-label="Previous"
                >
                  <IconifyIcon icon="bx:chevron-left" />
                </button>
                <div
                  className="swiper-pagination position-static w-auto mx-3"
                  style={{ minWidth: '30px' }}
                ></div>
                <button
                  type="button"
                  className="btn btn-next btn-icon btn-sm position-static"
                  aria-label="Next"
                >
                  <IconifyIcon icon="bx:chevron-right" />
                </button>
              </div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
