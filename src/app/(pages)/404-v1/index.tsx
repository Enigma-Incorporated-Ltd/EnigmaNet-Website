import Footer from '@/components/footer/Footer';
import Error from './components/Error';
import PageMeta from '@/components/PageMeta';
import Navbar from '@/components/navbar/Navbar';

const Index = () => {
  return (
    <>
      {' '}
      <PageMeta title="404 Not Found" />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Error />;
      <Footer />
    </>
  );
};

export default Index;
