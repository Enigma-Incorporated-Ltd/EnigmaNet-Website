import React from 'react';
import UseCaseButton from '../UseCaseButton';
type ButtonConfig = {
  label: string;
  href?: string;
  variant?: 'blue' | 'white';
};
type PromoCard = {
  title: string;
  description: string;
  buttons: ButtonConfig[];
};
const ConnectivityPromo: React.FC<PromoCard> = ({ title, description, buttons = [] }) => {
  return (
    <div
      className="pb-5 "
      style={{
        background: '#fff',
      }}
    >
      <section className="container my-5">
        <div
          className="rounded-4 shadow d-flex flex-column flex-lg-row align-items-center align-items-lg-center justify-content-between gap-4 px-4 px-md-5 py-4"
          style={{
            background: 'linear-gradient(90deg, #04152B 0%, #071B34 50%, #04152B 100%)',
          }}
        >
          {/* Left Content */}
          <div className="">
            <h2
              className="fw-semibold mb-3"
              style={{
                color: '#fff',
                fontSize: 'clamp(1.5rem, 1.7vw, 1.7rem)',
                lineHeight: '1.3',
              }}
            >
              {title}
            </h2>

            <p
              className="mb-0 "
              style={{
                color: '#fff',
                maxWidth: '700px',
                fontSize: 'clamp(0.9rem, 0.7vw, 0.9rem)',
                lineHeight: '1.7',
              }}
            >
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-column justify-content-center flex-sm-row gap-3 w-100 w-lg-auto">
            {buttons.map((btn, index) => (
              <UseCaseButton
                key={index}
                text={btn.label}
                variant={btn.variant}
                href={btn.href}
                className="px-4"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectivityPromo;
