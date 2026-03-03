import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router';

type PricingType = {
  name: string;
  desc: string;
  monthly: number;
  annual: number;
  highlight: boolean;
  btnClass: string;
  cardClass: string;
  cardBg: string;
  textColor: string;
  btnText: string;
};

const pricingPlans: PricingType[] = [
  {
    name: 'Team',
    desc: 'Best for small teams',
    monthly: 15,
    annual: 12,
    highlight: false,
    btnClass: 'btn-outline-primary',
    cardClass: 'border rounded-3 rounded-end-0 shadow-sm me-n1',
    cardBg: 'bg-light h-100 border-0 border-end rounded-end-0',
    textColor: 'text-dark',
    btnText: 'Get started now',
  },
  {
    name: 'Company',
    desc: 'Best for growing teams',
    monthly: 25,
    annual: 20,
    highlight: true,
    btnClass: 'btn-light shadow-secondary',
    cardClass:
      'bg-primary position-relative rounded-3 shadow-primary shadow-dark-mode-none zindex-2 p-4',
    cardBg: 'bg-transparent border-light',
    textColor: 'text-light',
    btnText: 'Get started now',
  },
  {
    name: 'Enterprise',
    desc: 'Best for large teams',
    monthly: 50,
    annual: 40,
    highlight: false,
    btnClass: 'btn-outline-primary',
    cardClass: 'border rounded-3 rounded-start-0 shadow-sm',
    cardBg: 'bg-light h-100 border-0 rounded-start-0',
    textColor: 'text-dark',
    btnText: 'Get started now',
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-secondary py-5">
      <Container className="mt-lg-5 my-md-4 my-3 py-xl-3">
        <h2 className="h1 mb-md-4 mb-3 pb-lg-3 pb-2 text-center">Transparent Pricing for You</h2>
        <div className="price-switch-wrapper">
          <div className="form-check form-switch price-switch justify-content-center mb-md-4 mb-3 pb-lg-3 pb-2">
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
              Annually
            </label>
          </div>
          <div className="table-responsive-lg pb-4">
            <div className="d-flex align-items-center flex-wrap justify-content-center">
              {pricingPlans.map((plan, idx) => (
                <div
                  key={plan.name}
                  className={plan.cardClass}
                  style={{
                    width: idx === 1 ? '36%' : '32%',
                    minWidth: idx === 1 ? '18rem' : '16rem',
                    marginLeft: idx === 2 ? undefined : undefined,
                  }}
                >
                  <div className={`card ${plan.cardBg} py-3 py-sm-4 py-lg-5`}>
                    <div className={`card-body text-center ${plan.textColor}`}>
                      <h3 className={`mb-2 ${plan.textColor}`}>{plan.name}</h3>
                      <div className={`fs-lg pb-4 mb-3 ${plan.highlight ? 'opacity-70' : ''}`}>
                        {plan.desc}
                      </div>
                      <div className={`display-5 mb-1 ${plan.textColor}`}>
                        ${isAnnual ? plan.annual : plan.monthly}
                      </div>
                      <div className={`${plan.highlight ? 'opacity-50' : 'text-muted'} mb-5`}>
                        per month
                      </div>
                    </div>
                    <div className="card-footer border-0 text-center pt-0 pb-4">
                      <Link to="#" className={`btn btn-lg ${plan.btnClass}`}>
                        {plan.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
