import { Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router';

const CTA2 = () => {
  return (
    <section className="container">
      <div className="position-relative bg-dark border shadow rounded-3 my-4 py-3 overflow-hidden px-3 ">
        <Card className="border-0 bg-transparent position-relative">
          {' '}
          <span
            className="position-absolute top-0 start-0 w-100 h-100"
            // style={{ backgroundColor: 'rgba(255, 255, 255, .05)' }}
          ></span>
          <CardBody className="  text-center">
            <h3 className="h3   text-warning opacity-75">Get Started</h3>
            <h3 className="h4  text-light text-left opacity-75">
              Make your data movement predictable
            </h3>
            <p className="h6 text-light " style={{ fontWeight: 400 }}>
              Faster transfers, stable throughput, zero-trust security — deployed without replacing
              your existing infrastructure.
            </p>
            <div className="pt-md-5 pt-4 pb-md-2">
              <Link
                to="#"
                className="btn btn-warning text-black btn-lg shadow-primary btn-lg  px-5"
                style={{
                  fontWeight: '800',
                  letterSpacing: '3px',
                }}
              >
                TALK TO OUR TEAM
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default CTA2;
