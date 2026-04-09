import PageTitle from './components/PageTitle';
import { Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';
import BlogPosts from './components/BlogPosts';
import Sidebar from './grid/components/Sidebar';
import { useEffect, useState } from 'react';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';
import { BASE_URL } from '@/utils';
const Index = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs('blogs')
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch(() => {
        setPosts([]);
        setFilteredPosts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // ✅ Structured Data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BASE_URL}/blog`,
    name: 'Enigma Net Blog',
    url: `${BASE_URL}/blog`,
    description: 'Explore the latest articles, insights, and updates from Enigma Net.',
    publisher: {
      '@type': 'Organization',
      name: 'Enigma Net',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.ico`,
      },
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      description: post.description,
      image: post.image,
      datePublished: post.date,
    })),
  };

  return (
    <>
      {/* ✅ META TAGS */}
      <PageMeta
        title="Blog "
        description="Explore the latest articles, insights, and updates from Enigma Net."
        url={`${BASE_URL}/blog`}
        image={`${BASE_URL}/logo.png`}
        keywords={'Enigma Net, Blog, Articles, Insights, Networking, Digital Solutions'}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none fixed-top" />

      {/* ✅ Breadcrumb */}
      <nav className="container mt-lg-4 custom-padding" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
          <li className="breadcrumb-item">
            <Link to="/">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>

      {/* ✅ Main Content */}
      <section className="container mt-4 mb-2 mb-md-4 mb-lg-5 pt-lg-2 pb-5">
        <PageTitle />
        <Row>
          <Col xl={9} lg={8}>
            <BlogPosts posts={filteredPosts} loading={loading} />
          </Col>
          <Sidebar loading={loading} posts={posts} setFilteredPosts={setFilteredPosts} />
        </Row>
      </section>

      <Footer />
    </>
  );
};

export default Index;
