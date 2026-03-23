import { useEffect, useState } from 'react';
import { CardBody, CardText, CardTitle, Col, OverlayTrigger, Row, Spinner, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const BlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(7);

  useEffect(() => {
    fetchBlogs('blogs')
      .then(setPosts)
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (posts.length === 0) {
    return <p className="text-center text-muted py-5">No posts available yet.</p>;
  }

  const visible = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <>
      {visible.map((post, index) => {
        // Alternate between with-image (horizontal) and text-only card layouts
        const hasImage = !!post.image;
        const isImageLeft = index % 2 === 0;

        if (hasImage) {
          return (
            <article key={post.id} className="card border-0 bg-transparent me-xl-5 mb-4">
              <Row className="g-0">
                {isImageLeft && (
                  <Col
                    sm={5}
                    className="position-relative bg-position-center bg-repeat-0 bg-size-cover rounded-3"
                    style={{ backgroundImage: `url(${post.image})`, minHeight: '15rem' }}
                  >
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
                  </Col>
                )}
                <Col sm={7}>
                  <CardBody className="px-0 pt-sm-0 ps-sm-4 pb-0 pb-sm-4">
                    <Link
                      to="#"
                      className="badge fs-sm text-nav bg-secondary text-decoration-none mb-3"
                    >
                      {post.category}
                    </Link>
                    <h3 className="h4">
                      <Link to={`/blog-single/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mb-4">{post.description}</p>
                    <div className="d-flex align-items-center text-muted">
                      <div className="fs-sm">{post.date}</div>
                    </div>
                  </CardBody>
                </Col>
                {!isImageLeft && (
                  <Col
                    sm={5}
                    className="position-relative bg-position-center bg-repeat-0 bg-size-cover rounded-3"
                    style={{ backgroundImage: `url(${post.image})`, minHeight: '15rem' }}
                  >
                    <Link
                      to={`/blog-single/${post.slug}`}
                      className="position-absolute top-0 start-0 w-100 h-100"
                      aria-label="Read more"
                    />
                    <OverlayTrigger
                      placement="left"
                      overlay={<Tooltip id={`tip-r-${post.id}`}>Read later</Tooltip>}
                    >
                      <Link
                        to="#"
                        className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                        aria-label="Read later"
                      >
                        <IconifyIcon icon="bx:bookmark" fontSize={18} />
                      </Link>
                    </OverlayTrigger>
                  </Col>
                )}
              </Row>
            </article>
          );
        }

        // Text-only card (no image available)
        return (
          <div key={post.id} className="card me-xl-5 mb-4">
            <CardBody>
              <div className="d-flex justify-content-between mb-3 position-relative">
                <Link
                  to="#"
                  className="badge fs-sm text-nav bg-secondary text-decoration-none"
                >
                  {post.category}
                </Link>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id={`tip-txt-${post.id}`}>Read later</Tooltip>}
                >
                  <Link
                    to="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                    aria-label="Read later"
                  >
                    <IconifyIcon icon="bx:bookmark" fontSize={20} />
                  </Link>
                </OverlayTrigger>
              </div>
              <CardTitle as="h3" className="h4">
                <Link to={`/blog-single/${post.slug}`} className="text-decoration-none">
                  {post.title}
                </Link>
              </CardTitle>
              <CardText className="mb-4">{post.description}</CardText>
              <div className="d-flex align-items-center text-muted">
                <div className="fs-sm">{post.date}</div>
              </div>
            </CardBody>
          </div>
        );
      })}

      {hasMore && (
        <button
          type="button"
          className="btn btn-lg btn-outline-primary w-100 mt-4"
          onClick={() => setVisibleCount((c) => c + 7)}
        >
          <IconifyIcon icon="bx:down-arrow-alt" className="fs-xl me-2" />
          Show more
        </button>
      )}
    </>
  );
};

export default BlogPosts;
