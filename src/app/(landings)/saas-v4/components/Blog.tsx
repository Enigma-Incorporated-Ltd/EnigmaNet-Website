import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Spinner } from 'react-bootstrap';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs('blogs')
      .then(setBlogs)
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <h2 className="h1 mb-md-4 mb-3 pb-lg-3 pb-2 text-center">Latest From Our Blog</h2>

      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : blogs.length === 0 ? (
        <p className="text-center text-muted py-4">No posts available yet.</p>
      ) : (
        <>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              0:   { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="mb-lg-5 mb-4 pb-lg-0 pb-md-2"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id} className="h-auto">
                <article className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-4">
                      <span className="badge fs-sm bg-secondary">{blog.date}</span>
                    </div>
                    <h3 className="h4">
                      <Link
                        to={`/blog-single/${blog.slug}`}
                        className="text-decoration-none text-dark"
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="mb-4">{blog.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
                      >
                        {blog.author.avatar ? (
                          <img
                            src={blog.author.avatar}
                            width={48}
                            height={48}
                            alt={blog.author.name}
                            className="rounded-circle me-3"
                          />
                        ) : (
                          <span
                            className="rounded-circle me-3 bg-primary d-flex align-items-center justify-content-center text-white fw-bold"
                            style={{ width: 48, height: 48, fontSize: 18, flexShrink: 0 }}
                          >
                            {blog.author.name.charAt(0).toUpperCase()}
                          </span>
                        )}
                        {blog.author.name}
                      </Link>
                      <div className="d-flex align-items-center text-muted">
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
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mb-xl-3 text-center">
            <Link to="/blog" className="btn btn-lg btn-outline-primary">
              More blog posts
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
