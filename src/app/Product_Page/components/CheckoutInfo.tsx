import { useState } from 'react';
import './checkout-info.css';

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg 
    width="43" 
    height="16" 
    viewBox="0 0 43 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    {direction === 'left' ? (
      <path 
        d="M43 8H2M2 8L9 1M2 8L9 15" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    ) : (
      <path 
        d="M0 8H41M41 8L34 1M41 8L34 15" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    )}
  </svg>
);

const CheckoutInfo = () => {
  // Config state matches figma: Virtual checkout starts open, Physical starts closed
  const [virtualOpen, setVirtualOpen] = useState(true);
  const [physicalOpen, setPhysicalOpen] = useState(false);

  const virtualSteps = [
    '1. Choose AWS or Azure',
    '2. Select usage model',
    '3. Deploy through marketplace',
    '4. Connect through marketplace',
    '6. Monitor through customer portal',
    '5. Apply policies'
  ];

  const physicalSteps = [
    '1. Select tier',
    '2. Add site details',
    '3. Add resilience and security options',
    '4. Confirm delivery address',
    '5. Tax and shipping calculated',
    '6. Pay via Stripe or request quote',
    '7. Provisioning initiated via Nexus',
    '8. Device shipped',
    '9. Zero-touch activation',
    '10. Support & RMA enabled'
  ];

  return (
    <section className="checkout-info-section" data-name="EDGE Checkout info">
      
      {/* Header */}
      <div className="checkout-info__header" data-name="Frame 443">
        <h2 className="checkout-info__title" data-name="EDGE Checkout and Fulfilment">
          EDGE Checkout and Fulfilment
        </h2>
        <p className="checkout-info__subtitle" data-name="Choose yours.">
          Choose yours.
        </p>
      </div>

      {/* Side-by-side Columns */}
      <div className="checkout-info__container" data-name="Frame 442">
        
        {/* Left Column: Virtual Checkout */}
        <div className="checkout-column">
          <div className="checkout-card" data-name="Virtual Checkout">
            <div className="checkout-card__content">
              <h3 className="checkout-card__title">Virtual checkout</h3>
              <p className="checkout-card__desc">
                6-steps flow: AWS to Azure marketplace deployment bound to your Nexus tenant in minutes.
              </p>
            </div>
            <button 
              className="btn-checkout-toggle" 
              onClick={() => setVirtualOpen(!virtualOpen)}
              data-name="btn"
            >
              {virtualOpen ? (
                <>
                  Close Checkout <ArrowIcon direction="left" />
                </>
              ) : (
                <>
                  Open Checkout <ArrowIcon direction="right" />
                </>
              )}
            </button>
          </div>

          {/* Virtual Steps List */}
          {virtualOpen && (
            <div className="checkout-steps" data-name="10-steps progress tracker">
              <h4 className="checkout-steps__label">VIRTUAL CHECKOUT</h4>
              <div className="checkout-steps__list">
                {virtualSteps.map((step, idx) => (
                  <div className="checkout-step-item" key={idx} data-name={`Step ${idx + 1}`}>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Physical Checkout */}
        <div className="checkout-column">
          <div className="checkout-card" data-name="Physical Checkout">
            <div className="checkout-card__content">
              <h3 className="checkout-card__title">Physical Checkout</h3>
              <p className="checkout-card__desc">
                10-steps flow: tier selection through to zero-touch activation and 24/7 RMA support.
              </p>
            </div>
            <button 
              className="btn-checkout-toggle" 
              onClick={() => setPhysicalOpen(!physicalOpen)}
              data-name="btn"
            >
              {physicalOpen ? (
                <>
                  Close Checkout <ArrowIcon direction="left" />
                </>
              ) : (
                <>
                  Open Checkout <ArrowIcon direction="right" />
                </>
              )}
            </button>
          </div>

          {/* Physical Steps List */}
          {physicalOpen && (
            <div className="checkout-steps" data-name="10-steps progress tracker">
              <h4 className="checkout-steps__label">PHYSICAL CHECKOUT</h4>
              <div className="checkout-steps__list">
                {physicalSteps.map((step, idx) => (
                  <div className="checkout-step-item" key={idx} data-name={`Step ${idx + 1}`}>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default CheckoutInfo;
