import { useEffect, useState } from 'react';
import { CardBody, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image';

const Digital = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

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
      <div className="masonry-grid row row-cols-sm-2 row-cols-1 g-4">
        {visible.map((post) => (
          <Col key={post.id} className="masonry-grid-item pb-2 pb-lg-3">
            <article className="card border-0 bg-transparent h-100">
              <div className="position-relative overflow-hidden rounded-3">
                <Link
                  to={`/blog-single/${post.slug}`}
                  className="position-absolute top-0 start-0 w-100 h-100"
                  aria-label="Read more"
                />
                <Link
                  to="#"
                  className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                  title="Read later"
                  aria-label="Read later"
                >
                  <IconifyIcon icon="bx:bookmark" fontSize={18} />
                </Link>
                <img
                  src={post.image || PLACEHOLDER_IMAGE}
                  alt={post.title}
                  className="w-100"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
              </div>
              <CardBody className="pb-1 px-0">
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
                  <div className="fs-sm border-end pe-3 me-3">{post.date}</div>
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
              </CardBody>
            </article>
          </Col>
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          className="btn btn-lg btn-outline-primary w-100 mt-4"
          onClick={() => setVisibleCount((c) => c + 6)}
        >
          <IconifyIcon icon="bx:down-arrow-alt" className="fs-xl me-2" />
          Show more
        </button>
      )}
    </>
  );
};

export default Digital;
