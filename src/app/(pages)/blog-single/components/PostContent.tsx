import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import type { BlogPost } from '@/services/cmsApi';

interface PostContentProps {
  post: BlogPost;
}

/**
 * Converts plain-text with newlines into paragraphs.
 * If the content already contains HTML tags it is rendered as-is.
 */
function renderContent(content: string) {
  const isHtml = /<[a-z][\s\S]*>/i.test(content);
  if (isHtml) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
  // Plain text — split on double newlines for paragraphs, single newline for <br>
  return content
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((para, i) => (
      <p key={i} className="mb-4 pb-2">
        {para.split('\n').map((line, j, arr) => (
          <span key={j}>
            {line}
            {j < arr.length - 1 && <br />}
          </span>
        ))}
      </p>
    ));
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <section className="container mb-5 pt-4 pb-2 py-mg-4">
      <Row className="gy-4">
        <Col lg={8}>
          {/* Full content */}
          <div className="blog-content">
            {renderContent(post.contentHtml)}
          </div>

          <hr className="mb-4 mt-2" />
          <div className="d-flex flex-sm-row flex-column pt-2">
            <h6 className="mt-sm-1 mb-sm-2 mb-3 me-2 text-nowrap">Category:</h6>
            <div>
              <Link to="#" className="btn btn-sm btn-outline-secondary me-2 mb-2">
                #{post.category}
              </Link>
            </div>
          </div>
        </Col>

        {/* Right sidebar with cover image - larger size */}
        {post.image && (
          <Col lg={4} className="position-relative">
            <div className="sticky-top" style={{ top: '105px' }}>
              <img
                src={post.image}
                alt={post.title}
                className="rounded-3 w-100"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>
        )}
      </Row>
    </section>
  );
};

export default PostContent;
