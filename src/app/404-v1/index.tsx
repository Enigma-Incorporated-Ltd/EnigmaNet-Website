import Footer from '@/components/footer/Footer';
import Error from './components/Error';
import PageMeta from '@/components/PageMeta';
import Navbar from '@/components/navbar/Navbar';
import { BASE_URL } from '@/utils';

const Index = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '404 Not Found',
    url: `${BASE_URL}/404`,
    description: 'The page you are looking for does not exist.',
  };

  return (
    <>
      <PageMeta
        title="404 Not Found"
        description="The page you are looking for could not be found. Please return to the homepage."
        url={`${BASE_URL}/404`}
        noIndex
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Error />
      <Footer />
    </>
  );
};

export default Index;
