import Course01 from '@/assets/img/portfolio/courses/01.jpg';
import Course02 from '@/assets/img/portfolio/courses/02.jpg';
import Course03 from '@/assets/img/portfolio/courses/03.jpg';
import Course04 from '@/assets/img/portfolio/courses/04.jpg';
import Course05 from '@/assets/img/portfolio/courses/05.jpg';
import Course06 from '@/assets/img/portfolio/courses/06.jpg';
import Course07 from '@/assets/img/portfolio/courses/07.jpg';
import Course08 from '@/assets/img/portfolio/courses/08.jpg';
import Course09 from '@/assets/img/portfolio/courses/09.jpg';

import { CardBody, CardFooter, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

type CourseType = {
  id: number;
  title: string;
  author: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  image: string;
  duration: string;
  rating: string;
  link: string;
  hiddenOnSm?: boolean;
};

const courses: CourseType[] = [
  {
    id: 1,
    title: 'Fullstack Web Developer Course from Scratch',
    author: 'Albert Flores',
    price: '$12.50',
    badge: 'Best Seller',
    image: Course01,
    duration: '220 hours',
    rating: '94% (4.2K)',
    link: '/portfolio-single-course',
  },
  {
    id: 2,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: 'Jenny Wilson & Marvin McKinney',
    price: '$15.99',
    image: Course02,
    duration: '160 hours',
    rating: '92% (3.1K)',
    link: '/portfolio-single-course',
  },
  {
    id: 3,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: 'Robert Fox',
    price: '$9.99',
    oldPrice: '$44.99',
    badge: 'Sale!',
    image: Course03,
    duration: '210 hours',
    rating: '98% (2.7K)',
    link: '/portfolio-single-course',
  },
  {
    id: 4,
    title: 'iOS & Swift - The Complete iOS App Development Course',
    author: 'Marvin McKinney',
    price: '$15.99',
    image: Course04,
    duration: '170 hours',
    rating: '95% (3.3K)',
    link: '/portfolio-single-course',
  },
  {
    id: 5,
    title: 'Data Science & Machine Learning with Python',
    author: 'Esther Howard',
    price: '$19.75',
    badge: 'Best Seller',
    image: Course05,
    duration: '150 hours',
    rating: '96% (3.8K)',
    link: '/portfolio-single-course',
  },
  {
    id: 6,
    title: 'Creative CSS Drawing Course: Make Art With CSS',
    author: 'Robert Fox',
    price: '$17.99',
    image: Course06,
    duration: '110 hours',
    rating: '92% (5.3K)',
    link: '/portfolio-single-course',
  },
  {
    id: 7,
    title: 'Blender Character Creator v2.0 for Video Games Design',
    author: 'Ralph Edwards',
    price: '$25.00',
    image: Course07,
    duration: '160 hours',
    rating: '93% (4.5K)',
    link: '/portfolio-single-course',
  },
  {
    id: 8,
    title: 'The Ultimate Guide to 2D Mobile Game Development with Unity',
    author: 'Albert Flores',
    price: '$12.99',
    oldPrice: '$34.99',
    badge: 'Sale!',
    image: Course08,
    duration: '230 hours',
    rating: '97% (4.1K)',
    link: '/portfolio-single-course',
  },
  {
    id: 9,
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    author: 'Jenny Wilson',
    price: '$14.50',
    image: Course09,
    duration: '120 hours',
    rating: '92% (3.8K)',
    link: '/portfolio-single-course',
    hiddenOnSm: true,
  },
];

const Course = () => {
  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-3 gx-md-4 mt-n2 mt-sm-0">
      {courses.map(course => (
        <Col
          key={course.id}
          className={`pb-1 pb-lg-3 mb-4 ${course.hiddenOnSm ? 'd-sm-none d-lg-block' : ''}`}
        >
          <article className="card h-100 border-0 shadow-sm">
            <div className="position-relative">
              <Link
                to={course.link}
                className="d-block position-absolute w-100 h-100 top-0 start-0"
                aria-label="Course link"
              ></Link>

              {course.badge && (
                <span
                  className={`badge ${
                    course.badge === 'Sale!' ? 'bg-danger' : 'bg-success'
                  } position-absolute top-0 start-0 zindex-2 mt-3 ms-3`}
                >
                  {course.badge}
                </span>
              )}

              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-fav">Save to Favorites</Tooltip>}
              >
                <Link
                  to="#"
                  className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                  aria-label="Save to Favorites"
                >
                  <IconifyIcon icon="bx:bookmark" fontSize={18} />
                </Link>
              </OverlayTrigger>

              <img src={course.image} className="card-img-top" alt={course.title} />
            </div>

            <CardBody className="pb-3">
              <h3 className="h5 mb-2">
                <Link to={course.link}>{course.title}</Link>
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
            </CardBody>

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
        </Col>
      ))}
    </Row>
  );
};

export default Course;
