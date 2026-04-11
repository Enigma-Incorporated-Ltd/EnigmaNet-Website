import PageTitle from './components/PageTitle';
import { Col, Row } from 'react-bootstrap';

import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import BlogPosts from './components/BlogPosts';
import Sidebar from './grid/components/Sidebar';
import { useEffect, useState } from 'react';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';
import { BASE_URL } from '@/utils';
import Breadcrumb from '@/components/ui/Breadcrumb';
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

      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />

      {/* ✅ Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Blog' }]}
      
        style={{
          paddingTop: '9rem ',
        }}
      />

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
