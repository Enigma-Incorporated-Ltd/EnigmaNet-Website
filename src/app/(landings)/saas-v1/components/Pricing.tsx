import basic from '@/assets/img/landing/saas-1/pricing/basic.png';
import standard from '@/assets/img/landing/saas-1/pricing/standard.png';
import ultimate from '@/assets/img/landing/saas-1/pricing/ultimate.png';
import IconifyIcon from '@/components/IconifyIcon';

import { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

type Feature = {
  text: string;
  available: boolean;
};

type PricingPlan = {
  name: string;
  monthly: number;
  annually: number;
  image: string;
  featured: boolean;
  features: Feature[];
};
const plans: PricingPlan[] = [
  {
    name: 'Basic',
    monthly: 6,
    annually: 5.4,
    image: basic,
    featured: false,
    features: [
      { text: 'Aenean neque tortor, purus faucibus', available: true },
      { text: 'Nullam augue vitae et volutpat sagittis', available: true },
      { text: 'Mauris massa penatibus enim elit quam', available: false },
      { text: 'Nec ac sagittis nunc bibendum', available: false },
      { text: 'Odio ut orci volutpat ultricies eleifend', available: false },
    ],
  },
  {
    name: 'Standard',
    monthly: 12,
    annually: 10.8,
    image: standard,
    featured: true,
    features: [
      { text: 'Aenean neque tortor, purus faucibus', available: true },
      { text: 'Nullam augue vitae et volutpat sagittis', available: true },
      { text: 'Mauris massa penatibus enim elit quam', available: true },
      { text: 'Nec ac sagittis nunc bibendum', available: true },
      { text: 'Odio ut orci volutpat ultricies eleifend', available: false },
    ],
  },
  {
    name: 'Ultimate',
    monthly: 18,
    annually: 16.2,
    image: ultimate,
    featured: false,
    features: [
      { text: 'Aenean neque tortor, purus faucibus', available: true },
      { text: 'Nullam augue vitae et volutpat sagittis', available: true },
      { text: 'Mauris massa penatibus enim elit quam', available: true },
      { text: 'Nec ac sagittis nunc bibendum', available: true },
      { text: 'Odio ut orci volutpat ultricies eleifend', available: true },
    ],
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
      <h2 className="h1 text-center pb-3 pb-md-4">Transparent Pricing for You</h2>

      <div className="form-check form-switch price-switch justify-content-center mt-2 mb-4">
        <input
          type="checkbox"
          className="form-check-input"
          id="pricing"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
        />
        <label className="form-check-label" htmlFor="pricing">
          Monthly
        </label>
        <label className="form-check-label d-flex align-items-start" htmlFor="pricing">
          Annually <span className="text-danger fs-xs fw-semibold mt-n2 ms-2">-10%</span>
        </label>
      </div>

      <Row className="g-4 flex-nowrap overflow-auto pb-3">
        {plans.map((plan, idx) => (
          <Col key={idx} style={{ minWidth: '18rem' }}>
            <Card
              className={`h-100 border-0 shadow-sm ${
                plan.featured ? 'bg-primary text-light shadow-primary' : ''
              }`}
            >
              <CardBody>
                <div className="d-flex align-items-center pb-3 mb-3">
                  <div
                    className={`flex-shrink-0 rounded-3 ${
                      plan.featured ? 'bg-white bg-opacity-10' : 'bg-secondary'
                    }`}
                  >
                    <img src={plan.image} width={84} height={84} alt={`${plan.name} plan`} />
                  </div>
                  <div className="ps-4">
                    <h3
                      className={`fs-lg fw-normal mb-2 ${
                        plan.featured ? 'text-light opacity-75' : 'text-body'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <h4 className={`h3 lh-1 mb-0 ${plan.featured ? 'text-light' : 'text-body'}`}>
                      ${isAnnual ? plan.annually : plan.monthly}
                      <span className="fs-sm fw-normal opacity-70"> / per month</span>
                    </h4>
                  </div>
                </div>

                <ul className="list-unstyled fs-sm pb-3 mb-3">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className={`d-flex mb-2 ${
                        f.available
                          ? plan.featured
                            ? 'text-light'
                            : ''
                          : plan.featured
                            ? 'text-light opacity-50'
                            : 'text-muted'
                      }`}
                    >
                      <IconifyIcon
                        icon={f.available ? 'bx:check' : 'bx:x'}
                        className={`fs-xl me-1 ${f.available ? 'text-primary' : 'text-danger'}`}
                      />
                      <span className={plan.featured ? 'opacity-75' : ''}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>

              <CardFooter className="border-0 pt-0 pb-4">
                <Button variant={plan.featured ? 'light' : 'outline-primary'} className="w-100">
                  Start free trial
                </Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pricing;
