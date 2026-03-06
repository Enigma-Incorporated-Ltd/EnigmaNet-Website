import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const PLACEHOLDER_COVER = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Blog';

const Podcasts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs('blogs')
      .then(setPosts)
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="container mb-5 pt-3 pb-lg-5">
      <Row>
        <Col xl={3}>
          <div className="d-xl-block d-flex align-items-center justify-content-between mb-xl-0 mb-4 pb-xl-0 pb-3">
            <h2 className="h1 mb-xl-4 mb-0 pb-xl-3">Latest Posts</h2>
            <Link to="#" className="btn btn-primary ms-xl-0 ms-4">
              All posts
            </Link>
          </div>
        </Col>

        <Col xl={9}>
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : posts.length === 0 ? (
            <p className="text-muted py-4">No posts available yet.</p>
          ) : (
            <Swiper
              modules={[Pagination]}
              spaceBetween={24}
              loop={posts.length > 1}
              pagination={{ clickable: true }}
              breakpoints={{
                576:  { slidesPerView: 2 },
                768:  { slidesPerView: 3 },
                1000: { slidesPerView: 3 },
              }}
              className="pb-4"
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id} className="h-auto pb-3">
                  <article>
                    <div className="d-block position-relative rounded-3 mb-3">
                      <Link
                        to="#"
                        className="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                        title="Read later"
                        aria-label="Read later"
                      >
                        <IconifyIcon icon="bx:bookmark" />
                      </Link>

                      {/* Author initial avatar */}
                      {post.author.avatar ? (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={48}
                          height={48}
                          className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3"
                        />
                      ) : (
                        <span
                          className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3 bg-primary d-flex align-items-center justify-content-center text-white fw-bold"
                          style={{ width: 48, height: 48, fontSize: 18 }}
                        >
                          {post.author.name.charAt(0).toUpperCase()}
                        </span>
                      )}

                      <Link
                        to={`/blog-single/${post.slug}`}
                        className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"
                        aria-label="Read post"
                      />

                      <img
                        src={post.image || PLACEHOLDER_COVER}
                        alt={post.title}
                        className="rounded-3 w-100"
                        style={{ height: '180px', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="d-flex align-items-center mb-2">
                      <Link
                        to="#"
                        className="badge fs-sm text-nav bg-secondary text-decoration-none"
                      >
                        {post.category}
                      </Link>
                      <span className="fs-sm text-muted border-start ps-3 ms-3">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="h5">
                      <Link to={`/blog-single/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <div className="d-flex align-items-center text-muted">
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                        <span className="fs-sm">{post.likes}</span>
                      </div>
                    </div>

                    <Link to={`/blog-single/${post.slug}`} className="btn btn-link px-0 mt-3">
                      <IconifyIcon icon="bx:right-arrow-alt" className="fs-lg me-2" />
                      Read now
                    </Link>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default Podcasts;
