import CustomButton from '@/components/ui/CustomButton';
import { Card, CardBody } from 'react-bootstrap';

const CTA2 = () => {
  return (
    <section className="container pt-3 pb-4  pb-md-5">
      <div className="position-relative bg-dark border shadow rounded-3 overflow-hidden px-3 ">
        <Card className="border-0 bg-transparent position-relative">
          {' '}
          <span
            className="position-absolute top-0 start-0 w-100 h-100"
            // style={{ backgroundColor: 'rgba(255, 255, 255, .05)' }}
          ></span>
          <CardBody className="p-md-5 p-4  text-center">
            <h3 className="h3   text-warning opacity-75">Get Started</h3>
            <h3 className="h4  text-light text-left opacity-75">
              Make your data movement predictable
            </h3>
            <p className="h5 text-light " style={{ fontWeight: 400 }}>
              Faster transfers, stable throughput, zero-trust security — deployed without replacing
              your existing infrastructure.
            </p>
            <div className="pt-md-5 pt-4 pb-md-2">
              <CustomButton
                label=" TALK TO OUR TEAM"
                bgColor="warning"
                href="/"
                className="btn-lg"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default CTA2;
