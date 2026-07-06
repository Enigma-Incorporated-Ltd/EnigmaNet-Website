import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import BlogInsightPage from './components';

const BlogInsight = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Blog Insight',
    url: `${BASE_URL}/company/blog-insight`,
    description:
      'Explore Enigma Net perspectives on the infrastructure problems that slow down AI workloads, cloud environments, data pipelines and distributed systems.  ',
  };
  return (
    <>
      <PageMeta
        title="Blog Insight"
        description="Explore Enigma Net perspectives on the infrastructure problems that slow down AI workloads,   
cloud environments, data pipelines and distributed systems.  "
        url={`${BASE_URL}/company/blog-insight`}
        structuredData={structuredData}
      />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <BlogInsightPage />
    
      <Footer />
    </>
  );
};

export default BlogInsight;
