import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Row } from 'react-bootstrap';
import Sidebar from '../sidebar-footer/Sidebar';
import Detail from './components/Detail';
import Footer from './components/Footer';

const Index = () => {
  return (
    <>
    <PageMeta title='Account Details'/>
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Detail />
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Index;
