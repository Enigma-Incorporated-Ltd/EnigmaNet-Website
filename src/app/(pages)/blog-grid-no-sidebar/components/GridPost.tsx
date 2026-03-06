import { useEffect, useState } from 'react';
import { CardBody, Col, OverlayTrigger, Row, Spinner, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image';

const GridPost = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <Row className="row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
      {posts.map((post) => (
        <Col className="pb-3" key={post.id}>
          <article className="card border-0 shadow-sm h-100">
            <div className="position-relative">
              <Link
                to={`/blog-single/${post.slug}`}
                className="position-absolute top-0 start-0 w-100 h-100"
                aria-label="Read more"
              />
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id={`tooltip-${post.id}`}>Read later</Tooltip>}
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
                className="card-img-top"
                alt={post.title}
                style={{ height: '220px', objectFit: 'cover' }}
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
            <div className="card-footer py-4">
              <Link
                to="#"
                className="d-flex align-items-center fw-bold text-dark text-decoration-none"
              >
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    className="rounded-circle me-3"
                    width={48}
                    height={48}
                    alt={post.author.name}
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
            </div>
          </article>
        </Col>
      ))}
    </Row>
  );
};

export default GridPost;
