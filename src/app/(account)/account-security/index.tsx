
import Security from './componnts/Security';
import { Row } from 'react-bootstrap';
import Sidebar from '../sidebar-footer/Sidebar';
import Navbar from '@/components/navbar/Navbar';
import Footer from '../sidebar-footer/Footer';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title='Account Security' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Security />
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Index;
