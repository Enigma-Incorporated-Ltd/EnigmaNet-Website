// BlogCard.tsx
import { Card, Badge, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface BlogPost {
  id: string | number;
  slug: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  date: string;
  readingTime: string;
  buttonText?: string;
}

interface BlogCardProps {
  posts: BlogPost[];
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

const BlogCard = ({ posts, title, description }: BlogCardProps) => {
  return (
    <section className="container pb-5 pt-3 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
      {title && (
        <h2 className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2" style={{ maxWidth: '70rem' }}>
          {title}
        </h2>
      )}

      {description && (
        <ul className="list-unstyled d-flex flex-wrap justify-content-center text-center mb-4">
          <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
      )}

      <Row className="g-4">
        {posts.map(post => (
          <Col key={post.id} xs={12} md={6} lg={4}>
            <Card className="border-0 shadow-sm overflow-hidden h-100">
              {/* Featured Image */}
              <div className="position-relative ratio ratio-16x9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />

        {/* Category Badge */}
        <Badge
          bg="primary"
          className="position-absolute top-0 start-0 m-3 px-3 py-2"
          style={{ width: 'fit-content', height: 'fit-content' }}
        >
          {post.category}
        </Badge>
      </div>

      {/* Card Content */}
      <Card.Body className="p-4 d-flex flex-column">
        <h2 className="h4 mb-3">
          <Link to={`/company/blog/${post.slug}`} className="text-decoration-none text-dark">
            {post.title}
          </Link>
        </h2>

        <p
          className="text-muted mb-4"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.summary}
        </p>

        <div className="d-flex flex-wrap justify-content-between align-items-center text-muted mb-4 gap-2">
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>

        <div className="mt-auto">
          <Link to={`${post.slug}`} className="fw-semibold text-decoration-none">
            {post.buttonText || ' Read insight'} →
          </Link>
        </div>
      </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default BlogCard;
