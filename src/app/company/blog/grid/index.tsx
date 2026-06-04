import Navbar from '@/components/navbar/Navbar';
import { Col, Row } from 'react-bootstrap';
import BlogTitle from './components/BlogTitle';
import Digital from './components/Digital';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PageMeta from '@/components/PageMeta';
import { fetchBlogs, type BlogPost } from '@/services/cmsApi';
import { useEffect, useState } from 'react';
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
  console.log(filteredPosts);
  return (
    <>
      <PageMeta title="Blog" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Breadcrumb
        items={[{ label: 'Company', href: '/company' }, { label: 'Blog' }]}
        style={{
          paddingTop: '12rem ',
        }}
      />
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
