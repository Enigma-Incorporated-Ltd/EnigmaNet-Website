import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router';
import { fetchBlogBySlug, fetchBlogs, type BlogPost } from '@/services/cmsApi';
import Blog from './components/Blog';
import Footer from './components/Footer';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import { OverlayLoader } from '@/components/loading/Loader';


const Index = () => {
  const { id: slug } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchBlogBySlug(slug)
      .then(async (p) => {
        setPost(p);
        // Fetch related posts (all blogs, exclude current)
        try {
          const all = await fetchBlogs('blogs');
          setRelated(all.filter((b) => b.id !== p.id).slice(0, 3));
        } catch {
          setRelated([]);
        }
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <>
      <PageMeta title={post ? post.title : 'Blog Post'} />
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />

      {/* Breadcrumb */}
      <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/index">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item">
            <Link to="/blog-list-with-sidebar">Blog</Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            {post ? post.title : 'Single Post'}
          </li>
        </ol>
      </nav>

      {loading ? (
       <OverlayLoader visible  message="Loading" />
      ) : !post ? (
        <div className="container text-center py-5">
          <h2 className="text-muted">Post not found.</h2>
          <Link to="/blog-list-with-sidebar" className="btn btn-primary mt-3">
            Back to Blog
          </Link>
        </div>
      ) : (
        <>
          <PostTitle post={post} />
          <PostContent post={post} />
          
          <Blog related={related} />
        </>
      )}

      <Footer />
    </>
  );
};

export default Index;
