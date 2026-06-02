import { handleCardMouseEnter, handleCardMouseLeave } from '@/utils/cardHover';
import React from 'react';

type Metric = {
  icon?: React.ElementType;
  value?: string;
  label?: string;
  description?: string;
};

const UseCaseCard = ({
  metrics,
  cardShow = 4,
  isbg,
}: {
  metrics: Metric[];
  cardShow?: number;
  isbg?: boolean;
}) => {
  // Bootstrap grid column based on cardShow
  const getColClass = () => {
    switch (cardShow) {
      case 1:
        return 'col-12';
      case 2:
        return 'col-12 col-md-6';
      case 3:
        return 'col-12 col-md-6 col-lg-4';
      case 4:
        return 'col-12 col-md-6 col-lg-3';
      case 5:
        return 'col-12 col-md-6 col-lg-custom-5';
      case 6:
        return 'col-12 col-md-6 col-lg-2';
      default:
        return 'col-12 col-md-6 col-lg-3';
    }
  };

  return (
    <>
      <style>
        {`
          .col-lg-custom-5 {
            width: 20%;
          }

          @media (max-width: 991px) {
            .col-lg-custom-5 {
              width: 50%;
            }
          }

          @media (max-width: 767px) {
            .col-lg-custom-5 {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="row g-4">
        {metrics.map((metric, index) => (
          <div key={index} className={getColClass()}>
            <div
              className="text-center p-4 h-100"
              style={{
                borderRadius: '12px',
                background: '#FFF',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: `
                  0px 21px 6px rgba(0, 0, 0, 0.00),
                  0px 13px 5px rgba(0, 0, 0, 0.01),
                  0px 8px 5px rgba(0, 0, 0, 0.05),
                  0px 3px 3px rgba(0, 0, 0, 0.09),
                  0px 1px 2px rgba(0, 0, 0, 0.10)
                `,
                transition: 'all 0.3s ease',
                minHeight: '200px',
              }}
             onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
            >
              <div
                className="fw-bold mb-3 d-flex align-items-center justify-content-center gap-2"
                style={{
                  fontSize: '32px',
                  color: '#001A94',
                }}
              >
                {metric.icon && (
                  <div
                    style={
                      isbg
                        ? {
                            borderRadius: '60px',
                            background: 'rgba(184, 200, 255, 0.09)',
                            width: '70px',
                            height: '70px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }
                        : {}
                    }
                  >
                    <metric.icon />
                  </div>
                )}
                {metric.value && <span>{metric.value}</span>}
              </div>

              {metric.label && (
                <h4
                  className="mb-2 fw-semibold"
                  style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                    color: '#171717',
                  }}
                  dangerouslySetInnerHTML={{ __html: metric.label }}
                />
              )}

              {metric.description && (
                <p
                  style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: '1.5',
                    marginBottom: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: metric?.description }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseCaseCard;
