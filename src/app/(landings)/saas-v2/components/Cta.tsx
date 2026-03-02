import { Link } from 'react-router';
import { Container } from 'react-bootstrap';

const Cta = () => {
  return (
    <section className="bg-secondary py-5">
      <Container className="text-center py-1 py-md-4 py-lg-5">
        <h2 className="h1 mb-4">Ready to Get Started?</h2>
        <p className="lead pb-3 mb-3">Organize your tasks with a 14-day free trial</p>
        <Link to="#" className="btn btn-primary shadow-primary btn-lg mb-1">
          Get started
        </Link>
      </Container>
    </section>
  );
};

export default Cta;
