import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { CardBody, Col, Row, Spinner, Alert } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

// ── Topic filter list ─────────────────────────────────────────────────────────
const TOPICS = [
  'All Topics',
  'Digital',
  'Marketing',
  'Success Stories',
  'Startups',
  'Events',
  'Technology',
  'Business',
  'Processes & Tools',
];

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400/f3f4f6/9ca3af?text=No+Image';

// ─────────────────────────────────────────────────────────────────────────────

const Posts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeTopic, setActiveTopic] = useState('All Topics');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── Fetch blogs from n0de CMS on mount ──────────────────────────────────
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        // Endpoint: GET https://n0de-laravel-main-acyxzt.laravel.cloud/api/blogs
        const data = await fetchBlogs('blogs');
        if (!cancelled) setPosts(data);
      } catch (err) {
        if (!cancelled)
          setError(err instanceof Error ? err.message : 'Failed to load blogs.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // ── Filter by active topic ───────────────────────────────────────────────
  const filtered =
    activeTopic === 'All Topics'
      ? posts
      : posts.filter(
          (p) => p.category.toLowerCase() === activeTopic.toLowerCase(),
        );

  const visible  = filtered.slice(0, visibleCount);
  const hasMore  = visibleCount < filtered.length;

  return (
    <section className="container mb-5 pt-5 pb-lg-5">
      <h2 className="h1 mb-4 pt-lg-2 pb-lg-3 py-1 text-center">Latest Posts</h2>

      {/* ── Topic Tabs ───────────────────────────────────────────────────── */}
      <ul className="nav nav-tabs justify-content-center mb-lg-5 mb-4 pb-lg-2">
        {TOPICS.map((topic, i) => (
          <li className="nav-item" key={i}>
            <button
              type="button"
              className={`nav-link border-0 bg-transparent ${topic === activeTopic ? 'active' : ''}`}
              onClick={() => {
                setActiveTopic(topic);
                setVisibleCount(4);
              }}
            >
              {topic}
            </button>
          </li>
        ))}
      </ul>

      {/* ── Loading ──────────────────────────────────────────────────────── */}
      {loading && (
        <div className="d-flex justify-content-center align-items-center py-5">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading blogs…</span>
          </Spinner>
          <span className="ms-3 text-muted">Loading blogs…</span>
        </div>
      )}

      {/* ── Error ────────────────────────────────────────────────────────── */}
      {!loading && error && (
        <Alert variant="danger" className="text-center">
          <IconifyIcon icon="bx:error-circle" className="me-2 fs-5" />
          {error}
        </Alert>
      )}

      {/* ── Empty state ──────────────────────────────────────────────────── */}
      {!loading && !error && filtered.length === 0 && (
        <p className="text-center text-muted py-5">
          No posts found{activeTopic !== 'All Topics' ? ` for "${activeTopic}"` : ''}.
        </p>
      )}

      {/* ── Post Cards ───────────────────────────────────────────────────── */}
      {!loading && !error && visible.length > 0 && (
        <div className="pb-3">
          {visible.map((post) => (
            <article
              key={post.id}
              className="card border-0 shadow-sm overflow-hidden mb-4"
            >
              <Row className="g-0">
                {/* Thumbnail */}
                <Col
                  sm={4}
                  className="position-relative bg-repeat-0 bg-size-cover"
                  style={{
                    backgroundImage: `url(${post.image || PLACEHOLDER_IMAGE})`,
                    minHeight: '15rem',
                  }}
                >
                  <Link
                    to={`/blog-single/${post.slug}`}
                    className="position-absolute top-0 start-0 w-100 h-100"
                    aria-label="Read more"
                  />
                  <Link
                    to="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                    title="Read later"
                  >
                    <IconifyIcon icon="bx:bookmark" fontSize={18} />
                  </Link>
                </Col>

                {/* Body */}
                <Col sm={8}>
                  <CardBody>
                    {/* Category + Date */}
                    <div className="d-flex align-items-center mb-3">
                      <button
                        type="button"
                        className="badge fs-sm text-nav bg-secondary text-decoration-none border-0"
                        onClick={() => {
                          setActiveTopic(post.category);
                          setVisibleCount(4);
                        }}
                      >
                        {post.category}
                      </button>
                      <span className="fs-sm text-muted border-start ps-3 ms-3">
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="h4">
                      <Link to={`/blog-single/${post.slug}`}>{post.title}</Link>
                    </h3>

                    {/* Description (plain-text excerpt from content) */}
                    <p className="text-muted">{post.description}</p>

                    <hr className="my-4" />

                    {/* Author + Stats */}
                    <div className="d-flex align-items-center justify-content-between">
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
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

                      <div className="d-flex align-items-center text-muted">
                        <div className="d-flex align-items-center me-3">
                          <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                          <span className="fs-sm">{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </article>
          ))}
        </div>
      )}

      {/* ── Show More ────────────────────────────────────────────────────── */}
      {!loading && !error && hasMore && (
        <button
          type="button"
          className="btn btn-lg btn-outline-primary w-100"
          onClick={() => setVisibleCount((c) => c + 4)}
        >
          <IconifyIcon icon="bx:down-arrow-alt" className="me-2 lh-1 lead" />
          Show more
        </button>
      )}
    </section>
  );
};

export default Posts;
