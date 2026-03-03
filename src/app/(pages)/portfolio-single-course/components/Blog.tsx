import { CardFooter, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import course02 from '@/assets/img/portfolio/courses/02.jpg';
import course03 from '@/assets/img/portfolio/courses/03.jpg';
import course09 from '@/assets/img/portfolio/courses/09.jpg';

import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

type Course = {
  id: number;
  title: string;
  author: string;
  price: string;
  oldPrice?: string;
  image: string;
  duration: string;
  rating: string;
  badge?: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: 'Jenny Wilson & Marvin McKinney',
    price: '$15.99',
    image: course02,
    duration: '160 hours',
    rating: '92% (3.1K)',
  },
  {
    id: 2,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: 'Robert Fox',
    price: '$9.99',
    oldPrice: '$44.99',
    image: course03,
    duration: '210 hours',
    rating: '98% (2.7K)',
    badge: 'Sale!',
  },
  {
    id: 3,
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    author: 'Jenny Wilson',
    price: '$14.50',
    image: course09,
    duration: '120 hours',
    rating: '92% (3.8K)',
  },
];

const Blog = () => {
  return (
    <section className="bg-secondary pt-5 pb-4 pb-lg-5">
      <Container className="py-2 pt-lg-4 pb-lg-0">
        <h2 className="h1 text-center pb-4">More courses like this</h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            560: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="pb-4"
        >
          {courses.map(course => (
            <SwiperSlide key={course.id} className="h-auto pb-3">
              <article className="card h-100 border-0 shadow-sm mx-2">
                <div className="position-relative">
                  <Link
                    to="#"
                    className="d-block position-absolute w-100 h-100 top-0 start-0"
                    aria-label="Course link"
                  ></Link>

                  {course.badge && (
                    <span className="badge bg-danger position-absolute top-0 start-0 zindex-2 mt-3 ms-3">
                      {course.badge}
                    </span>
                  )}

                  <Link
                    to="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                    aria-label="Save to Favorites"
                  >
                    <IconifyIcon icon="bx:bookmark" fontSize={18} />
                  </Link>

                  <img src={course.image} className="card-img-top" alt={course.title} />
                </div>

                <div className="card-body pb-3">
                  <h3 className="h5 mb-2">
                    <Link to="#">{course.title}</Link>
                  </h3>
                  <p className="fs-sm mb-2">By {course.author}</p>

                  {course.oldPrice ? (
                    <p className="text-muted mb-0">
                      <span className="fs-lg fw-semibold text-danger me-2">{course.price}</span>
                      <del>{course.oldPrice}</del>
                    </p>
                  ) : (
                    <p className="fs-lg fw-semibold text-primary mb-0">{course.price}</p>
                  )}
                </div>

                <CardFooter className="d-flex align-items-center fs-sm text-muted py-4">
                  <div className="d-flex align-items-center me-4">
                    <IconifyIcon icon="bx:time" className="fs-xl me-1" />
                    {course.duration}
                  </div>
                  <div className="d-flex align-items-center">
                    <IconifyIcon icon="bx:like" className="fs-xl me-1" />
                    {course.rating}
                  </div>
                </CardFooter>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Blog;
