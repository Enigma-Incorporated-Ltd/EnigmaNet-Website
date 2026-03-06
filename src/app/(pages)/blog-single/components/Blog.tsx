import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, OverlayTrigger, Tooltip } from 'react-bootstrap';
import type { BlogPost } from '@/services/cmsApi';

const PLACEHOLDER_IMAGE = 'https://placehold.co/800x500/e2e8f0/94a3b8?text=No+Image';

interface BlogProps {
  related: BlogPost[];
}

const Blog = ({ related }: BlogProps) => {
  if (related.length === 0) return null;

  return (
    <section className="container mb-5 pt-md-4">
      <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3">
        <h2 className="h1 mb-sm-0">Related Articles</h2>
        <Link to="/blog-list-with-sidebar" className="btn btn-lg btn-outline-primary ms-4">
          All posts
          <IconifyIcon icon="bx:right-arrow-alt" className="ms-1 me-n1 lh-1 lead" />
        </Link>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={8}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        className="mx-n2"
      >
        {related.map((post) => (
          <SwiperSlide key={post.id} className="h-auto pb-3">
            <article className="card border-0 shadow-sm h-100 mx-2">
              <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                <Link
                  to={`/blog-single/${post.slug}`}
                  className="position-absolute top-0 start-0 w-100 h-100"
                  aria-label="Read more"
                />
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id={`tip-${post.id}`}>Read later</Tooltip>}
                >
                  <Link
                    to="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                    aria-label="Read later"
                  >
                    <IconifyIcon icon="bx:bookmark" fontSize={18} />
                  </Link>
                </OverlayTrigger>
                <img
                  src={post.image || PLACEHOLDER_IMAGE}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  alt={post.title}
                />
              </div>
              <CardBody className="pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <Link to="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">
                    {post.category}
                  </Link>
                  <span className="fs-sm text-muted">{post.date}</span>
                </div>
                <h3 className="h5 mb-0">
                  <Link to={`/blog-single/${post.slug}`}>{post.title}</Link>
                </h3>
              </CardBody>
              {post.author.name && post.author.name !== 'Unknown' && (
                <div className="card-footer py-4">
                  <div className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                    {post.author.avatar ? (
                      <img
                        src={post.author.avatar}
                        className="rounded-circle me-3"
                        width="48"
                        alt={post.author.name}
                      />
                    ) : (
                      <div
                        className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold me-3"
                        style={{ width: 48, height: 48, fontSize: 20, flexShrink: 0 }}
                      >
                        {post.author.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    {post.author.name}
                  </div>
                </div>
              )}
            </article>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4" />
      </Swiper>
    </section>
  );
};

export default Blog;
