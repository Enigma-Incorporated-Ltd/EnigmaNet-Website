import { Link } from 'react-router';
import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap';

type PricingPlan = {
  name: string;
  description: string;
  price: number | string;
  period: string;
  highlight?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: 'Team',
    description: 'Best for small teams',
    price: 10,
    period: 'per month',
    highlight: true,
  },
  {
    name: 'Company',
    description: 'Best for growing teams',
    price: 25,
    period: 'per month',
  },
  {
    name: 'Enterprise',
    description: 'Best for large teams',
    price: 50,
    period: 'per month',
  },
];

const Pricing = () => {
  return (
    <Container className="pt-5">
      <Row className="justify-content-center text-center pt-2 pt-md-4 pt-lg-5 pb-4 pb-lg-5 mb-1">
        <Col xl={6} lg={7} md={9} sm={11} className="pt-xl-3">
          <h2 className="h1 mb-lg-4">Transparent Pricing for You</h2>
          <p className="fs-lg text-muted mb-0">
            Varius sed maecenas massa dictum viverra in. Viverra vel in elit, vivamus dui interdum.
            Nulla congue lobortis amet amet eleifend.
          </p>
        </Col>
      </Row>

      <div className="table-responsive-lg">
        <div className="d-flex align-items-center pb-4">
          {pricingPlans
            .filter(plan => plan.highlight)
            .map((plan, index) => (
              <div
                key={index}
                className="bg-primary rounded-3 shadow-primary p-4"
                style={{ width: '36%', minWidth: '18rem' }}
              >
                <Card className="bg-transparent border-light py-3 py-sm-4 py-lg-5">
                  <CardBody className="text-light text-center">
                    <h3 className="text-light mb-2">{plan.name}</h3>
                    <div className="fs-lg opacity-70 pb-4 mb-3">{plan.description}</div>
                    <div className="display-5 mb-1">${plan.price}</div>
                    <div className="opacity-50 mb-5">{plan.period}</div>
                  </CardBody>
                  <CardFooter className="border-0 text-center pt-0 pb-4">
                    <Link to="#" className="btn btn-light btn-lg shadow-secondary">
                      Get started now
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}

          <Row
            className="flex-nowrap border rounded-3 rounded-start-0 shadow-sm g-0"
            style={{ width: '64%', minWidth: '32rem' }}
          >
            {pricingPlans
              .filter(plan => !plan.highlight)
              .map((plan, index) => (
                <Col key={index}>
                  <Card className="bg-light h-100 border-0 border-end rounded-0 py-3 py-sm-4 py-lg-5">
                    <CardBody className="text-center">
                      <h3 className="mb-2">{plan.name}</h3>
                      <div className="fs-lg pb-4 mb-3">{plan.description}</div>
                      <div className="display-5 text-dark mb-1">${plan.price}</div>
                      <div className="text-muted mb-5">{plan.period}</div>
                    </CardBody>
                    <CardFooter className="border-0 text-center pt-0 pb-4">
                      <Link to="" className="btn btn-outline-primary btn-lg">
                        Get started now
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
