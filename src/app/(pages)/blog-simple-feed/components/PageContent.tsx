import { useEffect, useState } from 'react';
import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, CardFooter, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const PageContent = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBlogs('blogs')
      .then(setBlogs)
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="container mt-4 pt-lg-2 pb-4">
      <Row className="gy-4 align-items-end mb-2 pb-md-3">
        <Col lg={8} md={6}>
          <h1 className="mb-0">Blog Simple Feed</h1>
        </Col>
        <Col lg={4} md={6}>
          <form className="input-group" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search the blog..."
              className="form-control form-control-lg rounded-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-icon btn-lg btn-primary rounded-3 ms-3"
              aria-label="Search"
            >
              <IconifyIcon icon="bx:search" />
            </button>
          </form>
        </Col>
      </Row>

      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-muted py-5">No posts found.</p>
      ) : (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={8}
          breakpoints={{
            0:   { slidesPerView: 1 },
            560: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="mx-n2"
        >
          {filtered.map((blog) => (
            <SwiperSlide key={blog.id} className="h-auto py-3">
              <article className="card p-md-3 p-2 border-0 shadow-sm card-hover-primary h-100 mx-2">
                <CardBody className="pb-0">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link
                      to="#"
                      className="badge fs-sm text-nav bg-secondary text-decoration-none position-relative zindex-2"
                    >
                      {blog.category}
                    </Link>
                    <span className="fs-sm text-muted">{blog.date}</span>
                  </div>
                  <h3 className="h4">
                    <Link to={`/blog-single/${blog.slug}`} className="stretched-link">
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="mb-0">{blog.description}</p>
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
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4" />
        </Swiper>
      )}
    </section>
  );
};

export default PageContent;
