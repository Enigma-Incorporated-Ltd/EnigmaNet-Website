import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import flame from '@/assets/img/blog/flame.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { CardBody, CardFooter, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import herobg from '@/assets/img/blog/single/cover-image.jpg';
import Jarallax from '@/components/Jarallax';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const Hero = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs('blogs')
      .then(setBlogs)
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  // Use the first blog as the featured "hot topic"
  const featured = blogs[0] ?? null;
  // Rest go in the sidebar swiper
  const sidebarBlogs = blogs.slice(1);

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
          style={{ backgroundImage: `url(${herobg})` }}
        />
      </Jarallax>

      <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70 zindex-1" />

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

        {loading ? (
          <div className="d-flex justify-content-center align-items-center py-5">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <Row className="mb-xxl-5 py-md-4 py-lg-5">
            {/* ── Featured post ─────────────────────────────────────────── */}
            <Col lg={6} md={7} className="pb-3 pb-md-0 mb-4 mb-md-5">
              <div className="mb-3 fs-lg text-light">
                <img src={flame} width={24} alt="Flame icon" className="mt-n1 me-1" />
                Hot Topic
              </div>

              {featured ? (
                <>
                  <h1 className="display-5 pb-md-3">{featured.title}</h1>
                  <div className="d-flex flex-wrap mb-md-5 mb-4 pb-md-2 text-white">
                    <div className="border-end border-light h-100 mb-2 pe-3 me-3">
                      <span className="badge bg-faded-light fs-base">
                        {featured.category}
                      </span>
                    </div>
                    <div className="border-end border-light mb-2 pe-3 me-3 opacity-70">
                      {featured.date}
                    </div>
                    <div className="d-flex align-items-center mb-2 text-nowrap">
                      <div className="d-flex align-items-center me-3 opacity-70">
                        <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                        <span className="fs-sm">{featured.likes}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/blog-single/${featured.slug}`}
                    className="btn btn-lg btn-primary"
                  >
                    Read article
                    <IconifyIcon icon="bx:right-arrow-alt" className="ms-2 me-n1 lead" />
                  </Link>
                </>
              ) : (
                <p className="text-white opacity-70">No posts available yet.</p>
              )}
            </Col>

            {/* ── Sidebar swiper ────────────────────────────────────────── */}
            {sidebarBlogs.length > 0 && (
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
                  {sidebarBlogs.map((blog) => (
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
                                <Link
                                  to={`/blog-single/${blog.slug}`}
                                  className="stretched-link"
                                >
                                  {blog.title}
                                </Link>
                              </h3>
                            </CardBody>
                            <CardFooter className="d-flex align-items-center py-4 text-muted border-top-0">
                              <div className="d-flex align-items-center me-3">
                                <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                                <span className="fs-sm">{blog.likes}</span>
                              </div>
                            </CardFooter>
                          </article>
                        </Col>
                      </Row>
                    </SwiperSlide>
                  ))}
                  <div className="swiper-scrollbar" />
                </Swiper>
              </div>
            )}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Hero;
