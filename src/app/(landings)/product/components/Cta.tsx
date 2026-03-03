import CtaImg from '@/assets/img/landing/product/cta.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router';

const Cta = () => {
  return (
    <section className="overflow-hidden pt-lg-5 pt-3 pt-sm-4">
      <Container className="position-relative">
        <div
          className="w-100 position-absolute top-0 start-50 translate-middle-x text-center px-3"
          style={{ maxWidth: '40rem' }}
        >
          <h3 className="display-5 mb-4 pb-2">
            Don't miss anything with <span className="text-primary">ProDrone 2.0</span>
          </h3>
          <Link to="#" className="btn btn-lg btn-primary">
            Buy now
          </Link>
        </div>
      </Container>
      <div className="pt-5 pt-sm-4 pt-md-0 mt-lg-n5 me-n4 me-sm-n5">
        <img src={CtaImg} width="1296" alt="Image" className="d-block mx-auto" />
      </div>
    </section>
  );
};

export default Cta;
