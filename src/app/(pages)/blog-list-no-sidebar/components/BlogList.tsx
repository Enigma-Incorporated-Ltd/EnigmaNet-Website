import { useEffect, useState } from 'react';
import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image';

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All categories');

  useEffect(() => {
    fetchBlogs('blogs')
      .then(setBlogs)
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  // Derive unique categories from CMS data
  const categories = ['All categories', ...Array.from(new Set(blogs.map((b) => b.category)))];

  const filtered = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === 'All categories' || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
      <Row className="align-items-end gy-3 mb-4 pb-lg-3 pb-1">
        <Col lg={5} md={4}>
          <h1 className="mb-2 mb-md-0">Blog List</h1>
        </Col>
        <Col lg={7} md={8}>
          <Row>
            <Col lg={5} sm={6}>
              <div className="d-flex align-items-center">
                <div className="nav flex-nowrap me-sm-4 me-3">
                  <Link
                    to="/blog-list-no-sidebar"
                    className="nav-link me-2 p-0 active"
                    aria-label="List view"
                  >
                    <IconifyIcon icon="bx:list-ul" className="fs-1" />
                  </Link>
                  <Link
                    to="/blog-grid-no-sidebar"
                    className="nav-link p-0"
                    aria-label="Grid view"
                  >
                    <IconifyIcon icon="bx:grid-alt" className="fs-1" />
                  </Link>
                </div>
                <select
                  className="form-select"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </Col>
            <Col lg={7} sm={6}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control pe-5 rounded"
                  placeholder="Search the blog..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <IconifyIcon
                  icon="bx:search"
                  className="position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-muted py-5">No posts found.</p>
      ) : (
        filtered.map((blog) => (
          <article key={blog.id} className="card border-0 shadow-sm overflow-hidden mb-4">
            <Row className="g-0">
              <Col
                sm={4}
                className="position-relative bg-position-center bg-repeat-0 bg-size-cover"
                style={{
                  backgroundImage: `url(${blog.image || PLACEHOLDER_IMAGE})`,
                  minHeight: '15rem',
                }}
              >
                <Link
                  to={`/blog-single/${blog.slug}`}
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
              </Col>
              <Col sm={8}>
                <CardBody>
                  <div className="d-flex align-items-center mb-3">
                    <Link to="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">
                      {blog.category}
                    </Link>
                    <span className="fs-sm text-muted border-start ps-3 ms-3">{blog.date}</span>
                  </div>
                  <h3 className="h4">
                    <Link to={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p>{blog.description}</p>
                  <hr className="my-4" />
                  <div className="d-flex align-items-center justify-content-between">
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
                    >
                      {blog.author.avatar ? (
                        <img
                          src={blog.author.avatar}
                          className="rounded-circle me-3"
                          width={48}
                          height={48}
                          alt={blog.author.name}
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
                </CardBody>
              </Col>
            </Row>
          </article>
        ))
      )}
    </section>
  );
};

export default BlogList;
