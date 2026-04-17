import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { fetchBlogBySlug, fetchBlogs, type BlogPost } from '@/services/cmsApi';
import Blog from './components/Blog';
import Footer from './components/Footer';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import { OverlayLoader } from '@/components/loading/Loader';
import { BASE_URL } from '@/utils';
import Breadcrumb from '@/components/ui/Breadcrumb';

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
      .then(async p => {
        setPost(p);
        // Fetch related posts (all blogs, exclude current)
        try {
          const all = await fetchBlogs('blogs');
          setRelated(all.filter(b => b.id !== p.id).slice(0, 3));
        } catch {
          setRelated([]);
        }
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  const articleSchema = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        image: [post.image],
        author: {
          '@type': 'Organization',
          name: 'Enigma Net',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Enigma Net',
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/company/blog/${post.slug}`,
        },
        datePublished: post.date,
        dateModified: (post as any)?.updatedAt || post.date,
      }
    : undefined;
  const breadcrumbSchema = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${BASE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `${BASE_URL}/company/blog/${post.slug}`,
          },
        ],
      }
    : undefined;
  const structuredData =
    post && articleSchema && breadcrumbSchema ? [articleSchema, breadcrumbSchema] : undefined;

  return (
    <>
      {/* ✅ META */}
      <PageMeta
        title={post ? post.title : 'Blog Post'}
        description={post?.description}
        ogType="article"
        keywords={
          post?.category
            ? `Enigma Net, Blog, ${post.category}, Articles, Insights, Networking`
            : 'Enigma Net, Blog, Articles, Insights'
        }
        url={post ? `${BASE_URL}/company/blog/${post.slug}` : `${BASE_URL}/company/blog`}
        image={post?.image || `${BASE_URL}/logo.png`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Blog', href: '/company/blog' },
          { label: post ? post.title : 'Single Post' },
        ]}
        className={'py-0 mt-0'}
      />
      {/* Breadcrumb */}
      {/* <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item">
            <Link to="/blog">Blog</Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            {post ? post.title : 'Single Post'}
          </li>
        </ol>
      </nav> */}

      {loading ? (
        <OverlayLoader visible message="Loading" />
      ) : !post ? (
        <div className="container text-center py-5">
          <h2 className="text-muted">Post not found.</h2>
          <Link to="/company/blog" className="btn btn-primary mt-3">
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
