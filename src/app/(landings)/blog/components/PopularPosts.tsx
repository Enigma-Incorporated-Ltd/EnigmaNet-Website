import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Button, CardBody, CardFooter, Container, OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image';

const PopularPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs('blogs')
      .then(setPosts)
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-secondary py-5 mb-lg-5">
      <Container className="pt-2 pt-lg-4 pt-xl-5">
        <h2 className="h1 mb-4 pb-lg-3 pt-lg-1 pb-1 text-center">Popular Posts</h2>
      </Container>

      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-muted py-4">No posts available yet.</p>
      ) : (
        <div className="pb-lg-5 mb-xl-3">
          <Swiper
            pagination={{ clickable: true }}
            loop={posts.length > 1}
            breakpoints={{
              0:    { slidesPerView: 1 },
              576:  { slidesPerView: 2 },
              768:  { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id} className="h-auto px-2">
                <article className="card border-0 h-100 mx-1">
                  <div className="position-relative">
                    <Link
                      to={`/blog-single/${post.slug}`}
                      className="position-absolute top-0 start-0 w-100 h-100"
                      aria-label="Read more"
                    />
                    <OverlayTrigger
                      placement="left"
                      overlay={<Tooltip id={`tooltip-readlater-${post.id}`}>Read later</Tooltip>}
                    >
                      <Button
                        variant="light"
                        size="sm"
                        className="btn-icon bg-white border-white rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                        aria-label="Read later"
                      >
                        <IconifyIcon icon="bx:bookmark" fontSize={18} />
                      </Button>
                    </OverlayTrigger>
                    <img
                      src={post.image || PLACEHOLDER_IMAGE}
                      alt={post.title}
                      className="card-img-top"
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                  </div>

                  <CardBody className="pb-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <Link
                        to="#"
                        className="badge fs-sm text-nav bg-secondary text-decoration-none"
                      >
                        {post.category}
                      </Link>
                      <span className="fs-sm text-muted">{post.date}</span>
                    </div>
                    <h3 className="h5 mb-0">
                      <Link to={`/blog-single/${post.slug}`}>{post.title}</Link>
                    </h3>
                  </CardBody>

                  <CardFooter className="py-4">
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-bold text-dark text-decoration-none"
                    >
                      {post.author.avatar ? (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="rounded-circle me-3"
                          width={48}
                          height={48}
                        />
                      ) : (
                        <span
                          className="rounded-circle me-3 bg-primary d-flex align-items-center justify-content-center text-white fw-bold"
                          style={{ width: 48, height: 48, fontSize: 18, flexShrink: 0 }}
                        >
                          {post.author.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                      {post.author.name}
                    </Link>
                  </CardFooter>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination position-relative pt-1 pt-sm-3 mt-5 d-xl-none d-flex" />
        </div>
      )}
    </section>
  );
};

export default PopularPosts;
