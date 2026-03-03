import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


const Index = () => {
  return (
    <>
      <PageMeta title='Portfolio Slider View' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Index;
