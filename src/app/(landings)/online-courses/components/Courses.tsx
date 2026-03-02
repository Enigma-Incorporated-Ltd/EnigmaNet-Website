import cousrs01 from '@/assets/img/portfolio/courses/01.jpg';
import cousrs02 from '@/assets/img/portfolio/courses/02.jpg';
import cousrs03 from '@/assets/img/portfolio/courses/03.jpg';
import cousrs05 from '@/assets/img/portfolio/courses/05.jpg';
import cousrs08 from '@/assets/img/portfolio/courses/08.jpg';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconifyIcon from '@/components/IconifyIcon';

import { Link } from 'react-router';


type Course = {
  id: number;
  title: string;
  author: string;
  price: string;
  oldPrice?: string;
  hours: string;
  rating: string;
  badge?: { text: string; variant: string };
  image: string;
};

const categories = [
  'Web Development',
  'Data Science',
  'Mobile Development',
  'Programming',
  'Game Development',
  'Software Testing',
  'Software Engineering',
  'Network & Security',
];

const courses: Course[] = [
  {
    id: 1,
    title: 'Fullstack Web Developer Course from Scratch',
    author: 'Albert Flores',
    price: '$12.50',
    hours: '220 hours',
    rating: '94% (4.2K)',
    badge: { text: 'Best Seller', variant: 'success' },
    image: cousrs01,
  },
  {
    id: 2,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: 'Jenny Wilson & Marvin McKinney',
    price: '$15.99',
    hours: '160 hours',
    rating: '92% (3.1K)',
    image: cousrs02,
  },
  {
    id: 3,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: 'Robert Fox',
    price: '$9.99',
    oldPrice: '$44.99',
    hours: '210 hours',
    rating: '98% (2.7K)',
    badge: { text: 'Sale!', variant: 'danger' },
    image: cousrs03,
  },
  {
    id: 4,
    title: 'Data Science & Machine Learning with Python',
    author: 'Esther Howard',
    price: '$13.99',
    hours: '170 hours',
    rating: '96% (3.8K)',
    image: cousrs05,
  },
  {
    id: 5,
    title: 'The Ultimate Guide to Unity Game Development',
    author: 'Albert Flores',
    price: '$29.99',
    hours: '250 hours',
    rating: '95% (5.4K)',
    image: cousrs08,
  },
];

const Courses = () => {
  return (
    <section className="mt-2 mt-sm-3 py-md-3 py-lg-5">
      <Container>
        <Row className="py-5">
          <Col lg={3} md={4}>
            <Nav
              variant="tabs"
              className="flex-nowrap overflow-auto flex-md-column pb-2 pb-md-0 mb-3 mb-md-5"
            >
              {categories.map((cat, idx) => (
                <NavItem key={idx}>
                  <NavLink className="d-inline-block text-nowrap" active={idx === 0}>
                    {cat}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <Button
              href="/portfolio-courses"
              variant="outline-primary"
              size="lg"
              className="d-none d-md-inline-flex"
            >
              See all courses <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
            </Button>
          </Col>

          <Col lg={9} md={8}>
            <div className="d-flex align-items-center justify-content-between pb-4 mb-3">
              <h2 className="h1 mb-0 me-3">Popular Courses</h2>
              <div className="d-flex">
                <Button
                  id="popular-prev"
                  variant="light"
                  size="sm"
                  className="btn btn-prev btn-icon btn-sm me-2"
                >
                  <IconifyIcon icon="bx:chevron-left" fontSize={20} />
                </Button>
                <Button
                  id="popular-next"
                  variant="light"
                  size="sm"
                  className="btn btn-next btn-icon btn-sm ms-2"
                >
                  <IconifyIcon icon="bx:chevron-right" fontSize={20} />
                </Button>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: '#popular-prev',
                nextEl: '#popular-next',
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
              }}
              breakpoints={{
                560: { slidesPerView: 2 },
                768: { slidesPerView: 1 },
                850: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="mx-n2"
            >
              {courses.map(course => (
                <SwiperSlide key={course.id} className="h-auto pb-3">
                  <Card className="h-100 border-0 shadow-sm mx-2">
                    <div className="position-relative">
                      <Link
                        to="/portfolio-single-course"
                        className="d-block position-absolute w-100 h-100 top-0 start-0"
                        aria-label="Course link"
                      />
                      {course.badge && (
                        <span
                          className={`badge bg-${course.badge.variant} position-absolute top-0 start-0 zindex-2 mt-3 ms-3`}
                        >
                          {course.badge.text}
                        </span>
                      )}
                      <Button
                        variant="light"
                        size="sm"
                        className="btn-icon bg-white border-white rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                      >
                        <OverlayTrigger
                          placement="left"
                          overlay={<Tooltip>Save to Favorites</Tooltip>}
                        >
                          <IconifyIcon icon="bx:bookmark" fontSize={18} />
                        </OverlayTrigger>
                      </Button>

                      <img src={course.image} alt={course.title} className="card-img-top" />
                    </div>
                    <CardBody>
                      <CardTitle as="h3" className="h5 mb-2">
                        <Link to="/portfolio-single-course">{course.title}</Link>
                      </CardTitle>
                      <p className="fs-sm mb-2">By {course.author}</p>
                      {course.oldPrice ? (
                        <p className="text-muted mb-0">
                          <span className="fs-lg fw-semibold text-danger me-2">{course.price}</span>
                          <del>{course.oldPrice}</del>
                        </p>
                      ) : (
                        <p className="fs-lg fw-semibold text-primary mb-0">{course.price}</p>
                      )}
                    </CardBody>
                    <CardFooter className="d-flex align-items-center fs-sm text-muted py-4">
                      <div className="d-flex align-items-center me-4">
                        <IconifyIcon icon="bx:time" className="fs-xl me-1" />
                        {course.hours}
                      </div>
                      <div className="d-flex align-items-center">
                        <IconifyIcon icon="bx:like" className="fs-xl me-1" />
                        {course.rating}
                      </div>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination position-relative pt-2 mt-4"></div>
            </Swiper>

            <Button
              href="/portfolio-courses"
              variant="outline-primary"
              size="lg"
              className="w-100 d-md-none mt-3"
            >
              See all courses <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
