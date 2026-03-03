import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Row } from 'react-bootstrap';
import Footer from '../sidebar-footer/Footer';
import Sidebar from '../sidebar-footer/Sidebar';
import Notification from './components/Notification';

const Index = () => {
  return (
    <>
      <PageMeta title='Account Notification' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Notification />
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Index;
