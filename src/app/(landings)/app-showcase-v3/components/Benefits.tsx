import IconifyIcon from '@/components/IconifyIcon';
import business from '@/assets/img/landing/app-showcase-3/categories/business.png';
import startups from '@/assets/img/landing/app-showcase-3/categories/startups.png';
import student from '@/assets/img/landing/app-showcase-3/categories/students.png';
import payment from '@/assets/img/landing/app-showcase-3/features/payment.svg';
import users from '@/assets/img/landing/app-showcase-3/features/users.svg';
import statistics from '@/assets/img/landing/app-showcase-3/features/statistics.svg';
import cashback from '@/assets/img/landing/app-showcase-3/features/cashback.svg';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Benefits = () => {
  return (
    <section className="bg-secondary pt-5">
      <Container className="pt-2 pt-sm-3 pt-md-4 pt-lg-5">
        <Row className="pt-xl-2 pt-xxl-4 pb-3 pb-sm-4 pb-md-5 mt-2">
          <Col md={6} xl={5} xxl={4}>
            <h2 className="h1">
              We offer <span className="text-primary">beneficial conditions</span> for all
              categories of users
            </h2>
          </Col>
          <Col md={6} xl={5} className="offset-xl-2 offset-xxl-3">
            <ul className="list-unstyled">
              <li className="d-flex fs-xl pb-2 mb-1">
                <IconifyIcon
                  icon="bx:check-circle"
                  className="text-dark d-flex pe-1 me-2"
                  style={{ marginTop: '.375rem' }}
                />
                Banking transactions are free for you
              </li>
              <li className="d-flex fs-xl pb-2 mb-1">
                <IconifyIcon
                  icon="bx:check-circle"
                  className="text-dark d-flex pe-1 me-2"
                  style={{ marginTop: '.375rem' }}
                />
                No monthly cash commission
              </li>
              <li className="d-flex fs-xl pb-2 mb-1">
                <IconifyIcon
                  icon="bx:check-circle"
                  className="text-dark d-flex pe-1 me-2"
                  style={{ marginTop: '.375rem' }}
                />
                Manage payments and transactions online
              </li>
              <li className="d-flex fs-xl pb-2 mb-1">
                <IconifyIcon
                  icon="bx:check-circle"
                  className="text-dark d-flex pe-1 me-2"
                  style={{ marginTop: '.375rem' }}
                />
                Receive real-time alerts
              </li>
              <li className="d-flex fs-xl">
                <IconifyIcon
                  icon="bx:check-circle"
                  className="text-dark d-flex pe-1 me-2"
                  style={{ marginTop: '.375rem' }}
                />
                Receive payment from international banks
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3">
          <Col
            xs={10}
            sm={9}
            md={6}
            xl={7}
            className="d-flex justify-content-md-end order-md-2 pb-2 pb-md-0 mb-4 mb-md-0"
          >
            <img src={business} width="642" alt="Businessman" />
          </Col>
          <Col md={6} xl={5} className="order-md-1 text-center text-md-start">
            <h2 className="mb-lg-4">For business services</h2>
            <p className="fs-lg pb-4 mb-0">
              Our app simplifies the process of tracking your company's financial health. From cash
              flow analysis to expense tracking, our app offers a wide range of tools that help you
              make informed decisions about your business finances. Stay on top of your financial
              performance.
            </p>
            <Link to="#" className="btn btn-outline-primary mt-1">
              Learn more
              <IconifyIcon icon="bx:chevron-right" className="fs-lg ms-2 me-n2" />
            </Link>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3">
          <Col xs={10} sm={9} md={6} xl={7} className="pb-2 pb-md-0 mb-4 mb-md-0">
            <div className="pe-md-4 pe-xl-0">
              <img src={startups} width="636" alt="Startupper" />
            </div>
          </Col>
          <Col md={6} xl={5} className="text-center text-md-start">
            <h2 className="mb-lg-4">Offer for startups</h2>
            <p className="fs-lg pb-4 mb-0">
              Starting a new business is a challenging venture, and managing your finances can be
              overwhelming. Our app offers a range of features designed specifically for startups,
              from budget tracking to financial planning. It helps you make informed decisions, and
              focus on growing your business.
            </p>
            <Link to="#" className="btn btn-outline-primary mt-1">
              Learn more
              <IconifyIcon icon="bx:chevron-right" className="fs-lg ms-2 me-n2" />
            </Link>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3">
          <Col
            xs={10}
            sm={9}
            md={6}
            xl={7}
            className="d-flex justify-content-md-end order-md-2 pb-2 pb-md-0 mb-4 mb-md-0"
          >
            <img src={student} width="640" alt="Student" />
          </Col>
          <Col md={6} xl={5} className="order-md-1 text-center text-md-start">
            <h2 className="mb-lg-4">Benefits for students</h2>
            <p className="fs-lg pb-4 mb-0">
              Managing your finances as a student can be difficult, but our app makes it easy. It
              offers a variety of features that help you track your expenses, set budgets, and save
              money. Easily monitor your spending habits and make informed decisions about your
              finances. Start managing your money like a pro!
            </p>
            <Link to="#" className="btn btn-outline-primary mt-1">
              Learn more
              <IconifyIcon icon="bx:chevron-right" className="fs-lg ms-2 me-n2" />
            </Link>
          </Col>
        </Row>

        <div className="pb-5 pt-2 pt-sm-3 pt-lg-4 pt-xl-5">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            breakpoints={{
              500: { slidesPerView: 2, spaceBetween: 8 },
              650: { slidesPerView: 2, spaceBetween: 8 },
              900: { slidesPerView: 3, spaceBetween: 8 },
              1100: { slidesPerView: 4, spaceBetween: 8 },
            }}
            className="pb-sm-2 pb-md-4 pb-lg-5 mb-xxl-3 mx-n2"
          >
            <SwiperSlide className="h-auto py-3">
              <Card className="border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
                <CardBody>
                  <img
                    src={payment}
                    alt="Payment icon"
                    style={{
                      filter:
                        'drop-shadow(0px 0.864px 4.6px rgba(99,102,241,0.02)) drop-shadow(0px 2.9px 10.3px rgba(99,102,241,0.05)) drop-shadow(0px 13px 27px rgba(99,102,241,0.17))',
                    }}
                  />
                  <h3 className="h1 pt-4 mb-1">
                    355 <span className="h4">billions</span>
                  </h3>
                  <p className="fs-lg mb-0">Money spent</p>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide className="h-auto py-3">
              <Card className="border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
                <CardBody>
                  <img
                    src={users}
                    alt="Users icon"
                    style={{
                      filter:
                        'drop-shadow(0px 0.864px 4.6px rgba(8,14,138,0.02)) drop-shadow(0px 2.9px 10.3px rgba(8,14,138,0.04)) drop-shadow(0px 15px 30px rgba(8,14,138,0.10))',
                    }}
                  />
                  <h3 className="h1 pt-4 mb-1">
                    3.4 <span className="h4">millions</span>
                  </h3>
                  <p className="fs-lg mb-0">Application users</p>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide className="h-auto py-3">
              <Card className="border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
                <CardBody>
                  <img
                    src={statistics}
                    alt="Statistics icon"
                    style={{
                      filter:
                        'drop-shadow(0px 0.864px 4.6px rgba(99,102,241,0.02)) drop-shadow(0px 2.9px 10.3px rgba(99,102,241,0.05)) drop-shadow(0px 13px 27px rgba(99,102,241,0.17))',
                    }}
                  />
                  <h3 className="h1 pt-4 mb-1">
                    1.2 <span className="h4">billions</span>
                  </h3>
                  <p className="fs-lg mb-0">Transactions a month</p>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide className="h-auto py-3">
              <Card className="border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
                <CardBody>
                  <img
                    src={cashback}
                    alt="Cashback icon"
                    style={{
                      filter:
                        'drop-shadow(0px 0.864px 4.6px rgba(8,14,138,0.02)) drop-shadow(0px 2.9px 10.3px rgba(8,14,138,0.04)) drop-shadow(0px 14px 28px rgba(8,14,138,0.10))',
                    }}
                  />
                  <h3 className="h1 pt-4 mb-1">
                    1.7 <span className="h4">billions</span>
                  </h3>
                  <p className="fs-lg mb-0">Accrued cashback</p>
                </CardBody>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
