import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const PLACEHOLDER_COVER = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Blog';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs('blogs')
      .then(setPosts)
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="container mb-5 pt-md-4">
      <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3">
        <h2 className="h1 mb-sm-0">Related Posts</h2>
        <Link to="/blog-grid-with-sidebar" className="btn btn-lg btn-outline-primary ms-4">
          All posts
          <IconifyIcon icon="bx:right-arrow-alt" className="ms-1 me-n1 lh-1 lead" />
        </Link>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-muted py-4">No posts available yet.</p>
      ) : (
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            500:  { slidesPerView: 2 },
            768:  { slidesPerView: 3 },
            1000: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="h-auto pb-3">
              <article>
                <div className="d-block position-relative rounded-3 mb-3">
                  <OverlayTrigger
                    placement="left"
                    overlay={<Tooltip id={`tooltip-${post.id}`}>Read later</Tooltip>}
                  >
                    <Link
                      to="#"
                      className="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      aria-label="Read later"
                    >
                      <IconifyIcon icon="bx:bookmark" fontSize={18} />
                    </Link>
                  </OverlayTrigger>

                  {post.author.avatar ? (
                    <img
                      src={post.author.avatar}
                      className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3"
                      width={48}
                      height={48}
                      alt={post.author.name}
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
                    className="rounded-3 w-100"
                    alt={post.title}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                </div>

                <div className="d-flex align-items-center mb-2">
                  <Link to="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">
                    {post.category}
                  </Link>
                  <span className="fs-sm text-muted border-start ps-3 ms-3">{post.date}</span>
                </div>

                <h3 className="h5">
                  <Link to={`/blog-single/${post.slug}`}>{post.title}</Link>
                </h3>

                <div className="d-flex align-items-center text-muted">
                  <div className="d-flex align-items-center me-3">
                    <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                    <span className="fs-sm">{post.likes}</span>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                    <span className="fs-sm">{post.comments}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                    <span className="fs-sm">{post.shares}</span>
                  </div>
                </div>

                <Link to={`/blog-single/${post.slug}`} className="btn btn-link px-0 mt-3">
                  <IconifyIcon icon="bx:right-arrow-alt" className="fs-lg me-2" />
                  Read now
                </Link>
              </article>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4" />
        </Swiper>
      )}
    </section>
  );
};

export default Blog;
