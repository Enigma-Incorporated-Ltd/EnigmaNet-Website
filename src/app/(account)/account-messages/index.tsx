import { Col, Row } from 'react-bootstrap';
import Sidebar from '../sidebar-footer/Sidebar';
import Message from './components/Message';
import Navbar from '@/components/navbar/Navbar';
import Footer from '../sidebar-footer/Footer';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <>
      <PageMeta title='Account Message' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Col md={8} lg={9} className="pb-5 mb-lg-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
            <div className="ps-md-3 mt-md-2 pt-md-4 pb-md-2">
              <Row className="g-0 border rounded-3 shadow-sm position-relative overflow-hidden">
                <Message />
              </Row>
            </div>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Index;
