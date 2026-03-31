import { Link } from 'react-router';
import type { BlogPost } from '@/services/cmsApi';

interface PostTitleProps {
  post: BlogPost;
}

const PostTitle = ({ post }: PostTitleProps) => {
  return (
    <section className="container mt-4 pt-lg-2 pb-3">
      <h1 className="pb-3" style={{ maxWidth: '970px' }}>
        {post.title}
      </h1>
      <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-3">
        <div className="d-flex align-items-center flex-wrap text-muted mb-md-0 mb-4">
          <div className="fs-xs border-end pe-3 me-3 mb-2">
            <span className="badge bg-faded-primary text-primary fs-base">{post.category}</span>
          </div>
          <div className="fs-sm mb-2">{post.date}</div>
        </div>
        {post.author.name && post.author.name !== 'Unknown' && (
          <div className="d-flex align-items-center position-relative ps-md-3 pe-lg-5 mb-2">
            {post.author.avatar ? (
              <img src={post.author.avatar} className="rounded-circle" width="60" alt={post.author.name} />
            ) : (
              <div
                className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold"
                style={{ width: 60, height: 60, fontSize: 24, flexShrink: 0 }}
              >
                {post.author.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="ps-3">
              <h6 className="mb-1">Author</h6>
              <Link to="#" className="fw-semibold stretched-link">
                {post.author.name}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostTitle;
