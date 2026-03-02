import { Swiper, SwiperSlide } from 'swiper/react'
import flame from '@/assets/img/blog/flame.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap';

import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import herobg from '@/assets/img/blog/single/cover-image.jpg';
import Jarallax from '@/components/Jarallax';

type Blog = {
  id: number;
  category: string;
  title: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  link: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    category: 'Digital',
    title: 'Mobile App Generates Data for the Energy Management',
    date: '1 day ago',
    likes: 8,
    comments: 4,
    shares: 2,
    link: '/blog-single',
  },
  {
    id: 2,
    category: 'Business',
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    date: 'May 24, 2023',
    likes: 2,
    comments: 0,
    shares: 3,
    link: '/blog-single',
  },
  {
    id: 3,
    category: 'Digital',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    date: 'May 25, 2023',
    likes: 5,
    comments: 0,
    shares: 2,
    link: '/blog-single',
  },
  {
    id: 4,
    category: 'Technology',
    title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
    date: 'May 26, 2023',
    likes: 7,
    comments: 4,
    shares: 1,
    link: '/blog-single',
  },
  {
    id: 5,
    category: 'Startups',
    title: 'Why UX Design Matters and How it Affects Ranking',
    date: 'May 27, 2023',
    likes: 5,
    comments: 3,
    shares: 9,
    link: '/blog-single',
  },
  {
    id: 6,
    category: 'Web',
    title: 'This Week in Search: New Limits and Exciting Features',
    date: 'May 28, 2023',
    likes: 3,
    comments: 5,
    shares: 2,
    link: '/blog-single',
  },
];

const Hero = () => {
  return (
    <section
      className="position-relative jarallax pb-xl-3"
      data-jarallax
      data-speed="0.4"
      data-bs-theme="dark"
    >
      <Jarallax speed={0.4}>
        <div
          className="jarallax-img bg-dark opacity-70"
          style={{
            backgroundImage: `url(${herobg})`,
          }}
        ></div>
      </Jarallax>

      <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70 zindex-1"></span>

      <Container className="position-relative pb-5 zindex-5">
        <nav className="py-4" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 py-3">
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
              Blog Homepage
            </li>
          </ol>
        </nav>

        <Row className="mb-xxl-5 py-md-4 py-lg-5">
          <Col lg={6} md={7} className="pb-3 pb-md-0 mb-4 mb-md-5">
            <div className="mb-3 fs-lg text-light">
              <img src={flame} width={24} alt="Flame icon" className="mt-n1 me-1" />
              Hot Topic
            </div>
            <h1 className="display-5 pb-md-3">
              This Long-Awaited Technology May Finally Change the World
            </h1>
            <div className="d-flex flex-wrap mb-md-5 mb-4 pb-md-2 text-white">
              <div className="border-end border-light h-100 mb-2 pe-3 me-3">
                <span className="badge bg-faded-light fs-base">Technology</span>
              </div>
              <div className="border-end border-light mb-2 pe-3 me-3 opacity-70">12 hours ago</div>
              <div className="d-flex align-items-center mb-2 text-nowrap">
                <div className="d-flex align-items-center me-3 opacity-70">
                  <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                  <span className="fs-sm">8</span>
                </div>
                <div className="d-flex align-items-center me-3 opacity-70">
                  <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                  <span className="fs-sm">4</span>
                </div>
                <div className="d-flex align-items-center opacity-70">
                  <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                  <span className="fs-sm">2</span>
                </div>
              </div>
            </div>
            <Link to="/blog-single" className="btn btn-lg btn-primary">
              Read article
              <IconifyIcon icon="bx:right-arrow-alt" className="ms-2 me-n1 lead" />
            </Link>
          </Col>

          <div className="col-lg-4 offset-lg-2 col-md-5">
            <Swiper
              direction="vertical"
              slidesPerView="auto"
              freeMode
              scrollbar={{ el: '.swiper-scrollbar' }}
              mousewheel
              modules={[FreeMode, Scrollbar, Mousewheel]}
              className="swiper overflow-hidden w-100 ms-n2 ms-md-0 pe-3 pe-sm-4"
              style={{ maxHeight: '405px' }}
            >
              {blogs.map(blog => (
                <SwiperSlide key={blog.id} className="h-auto px-2">
                  <Row className="row-cols-md-1 row-cols-sm-2 row-cols-1 g-md-4 g-3">
                    <Col className="mt-5">
                      <article className="card h-100 border-0 shadow-sm card-hover-primary">
                        <CardBody className="pb-0">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <Link
                              to="#"
                              className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                            >
                              {blog.category}
                            </Link>
                            <span className="fs-sm text-muted">{blog.date}</span>
                          </div>
                          <h3 className="h5 mb-0">
                            <Link to={blog.link} className="stretched-link">
                              {blog.title}
                            </Link>
                          </h3>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center py-4 text-muted border-top-0">
                          <div className="d-flex align-items-center me-3">
                            <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                            <span className="fs-sm">{blog.likes}</span>
                          </div>
                          <div className="d-flex align-items-center me-3">
                            <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                            <span className="fs-sm">{blog.comments}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                            <span className="fs-sm">{blog.shares}</span>
                          </div>
                        </CardFooter>
                      </article>
                    </Col>
                  </Row>
                </SwiperSlide>
              ))}
              <div className="swiper-scrollbar"></div>
            </Swiper>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
