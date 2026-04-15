import Navbar from '@/components/navbar/Navbar';
import { Container } from 'react-bootstrap';
import Comparison from './components/Comparison';

import Plan from './components/Plan';
import PageMeta from '@/components/PageMeta';
import Footer from '@/components/footer/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';


const Index = () => {
  return (
    <>
      <PageMeta title="Pricing" />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <section className="bg-dark py-4" data-bs-theme="dark">
        <Container className="pb-2 py-lg-3">
          <Breadcrumb items={[{ label: 'Pricing', href: '/pricing' }]} />
          <Header
            title="Pricing"
            style={{
              padding: '21px 0px ',
            }}
          />
          <h1 className="text-center mb-0">Transparent Pricing for You</h1>
        </Container>
        <div style={{ height: '300px' }}></div>
      </section>
      <Plan />
      <Comparison />

      <Footer />
    </>
  );
};

export default Index;
