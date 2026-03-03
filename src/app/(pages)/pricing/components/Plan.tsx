import { useState } from 'react';
import { CardBody } from 'react-bootstrap';
import { Link } from 'react-router';

type PlanType = {
  id: number;
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  highlight?: boolean;
  buttonClass: string;
  buttonText: string;
  cardClass?: string;
  bodyClass?: string;
};

const plans: PlanType[] = [
  {
    id: 1,
    name: 'Team',
    description: 'Best for small teams',
    monthlyPrice: '$15',
    annualPrice: '$12',
    buttonClass: 'btn btn-outline-primary btn-lg',
    buttonText: 'Get started now',
    cardClass: 'border rounded-3 rounded-end-0 shadow-sm me-n1',
    bodyClass: 'card bg-light h-100 border-0 border-end rounded-end-0 py-3 py-sm-4 py-lg-5',
  },
  {
    id: 2,
    name: 'Company',
    description: 'Best for growing teams',
    monthlyPrice: '$25',
    annualPrice: '$20',
    highlight: true,
    buttonClass: 'btn btn-light btn-lg shadow-secondary',
    buttonText: 'Get started now',
    cardClass:
      'bg-primary position-relative rounded-3 shadow-primary shadow-dark-mode-none zindex-2 p-4',
    bodyClass: 'card bg-transparent border-light py-3 py-sm-4 py-lg-5',
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'Best for large teams',
    monthlyPrice: '$50',
    annualPrice: '$40',
    buttonClass: 'btn btn-outline-primary btn-lg',
    buttonText: 'Get started now',
    cardClass: 'border rounded-3 rounded-start-0 shadow-sm',
    bodyClass: 'card bg-light h-100 border-0 rounded-start-0 py-3 py-sm-4 py-lg-5',
  },
];

const Plan = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="container position-relative zindex-2" style={{ marginTop: '-300px' }}>
      <div className="price-switch-wrapper">
        <div className="pb-2 pb-lg-3" data-bs-theme="dark">
          <div
            className="form-check form-switch price-switch justify-content-center mt-2 mb-4"
            data-bs-toggle="price"
          >
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
              Annually <span className="text-danger fs-xs fw-semibold mt-n2 ms-2">-20%</span>
            </label>
          </div>
        </div>

        <div className="table-responsive-lg">
          <div className="d-flex align-items-center pb-4">
            {plans.map(plan => (
              <div
                key={plan.id}
                className={plan.cardClass}
                style={{
                  width: plan.name === 'Company' ? '36%' : '32%',
                  minWidth: plan.name === 'Company' ? '18rem' : '16rem',
                }}
              >
                <div className={plan.bodyClass}>
                  <CardBody
                    className={`text-center ${plan.highlight ? 'text-light' : 'text-dark'}`}
                  >
                    <h3 className={`mb-2 ${plan.highlight ? 'text-light' : ''}`}>{plan.name}</h3>
                    <div className={`fs-lg pb-4 mb-3 ${plan.highlight ? 'opacity-70' : ''}`}>
                      {plan.description}
                    </div>

                    <div className={`display-5 mb-1 ${plan.highlight ? '' : 'text-dark'}`}>
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </div>

                    <div className={`mb-5 ${plan.highlight ? 'opacity-50' : 'text-muted'}`}>
                      per month
                    </div>
                  </CardBody>
                  <div className="card-footer border-0 text-center pt-0 pb-4">
                    <Link to="#" className={plan.buttonClass}>
                      {plan.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
