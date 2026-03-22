import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import BlogTitle from './components/BlogTitle';
import Digital from './components/Digital';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PageMeta from '@/components/PageMeta';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';
import { useEffect, useState } from 'react';

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
  return (
    <>
      <PageMeta title="Blog grid With Sidebar" />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none fixed-top" />
      <nav className="container mt-lg-4 custom-padding " aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
          <li className="breadcrumb-item">
            <Link to="/index">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            Blogs
          </li>
        </ol>
      </nav>
      <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
        <BlogTitle />
        <Row>
          <Col xl={9} lg={8}>
            <div className="pe-xl-5">
              <Digital posts={filteredPosts} loading={loading} />
            </div>
          </Col>
          <Sidebar loading={loading} posts={posts} setFilteredPosts={setFilteredPosts} />
        </Row>
      </section>
      {/* <Cta /> */}
      <Footer />
    </>
  );
};

export default Index;
