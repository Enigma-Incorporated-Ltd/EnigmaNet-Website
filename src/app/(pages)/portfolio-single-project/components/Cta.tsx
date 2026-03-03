import digital from '@/assets/img/landing/digital-agency/contact-bg.png';
import { Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router';

const Cta = () => {
  return (
    <section className="container pb-lg-2 mt-md-n2">
      <Card className="border-0 bg-gradient-primary">
        <CardBody
          className="p-md-5 p-4 bg-size-cover"
          style={{ backgroundImage: `url(${digital})` }}
        >
          <div className="py-md-5 py-4 text-center">
            <h3 className="h4 fw-normal text-light opacity-75">Want to work with us? Let’s talk</h3>
            <Link to="mailto:email@example.com" className="display-6 text-light">
              email@example.com
            </Link>
            <div className="pt-md-5 pt-4 pb-md-2">
              <Link to="/contacts-v1" className="btn btn-lg btn-light">
                Contact us
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default Cta;
