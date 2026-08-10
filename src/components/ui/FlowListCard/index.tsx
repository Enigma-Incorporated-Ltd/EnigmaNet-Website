import { useTheme } from '@/utils/useTheme';
import React, { useState, useEffect } from 'react';

interface ListItem {
  subtitle: string;
  items: string[];
  connectionTypes?: string[];
  workloadTypes?: string[];
  note?: string;
}

interface Props {
  sectionTitle?: string | React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  list?: ListItem[];
}

const FlowListCard = ({ sectionTitle, title, description, list = [] }: Props) => {
  const { theme } = useTheme();
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextStep = () => {
    if (step < list.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (step > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentStep = list[step];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextStep();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevStep();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, isAnimating]);

  if (!list || list.length === 0) {
    return null;
  }

  return (
    <section className={`container py-5 flow-list-card ${theme}`}>
      {/* Header Section */}
      <div className="text-center mb-5">
        {sectionTitle && (
          <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2 mb-3 d-inline-block">
            {sectionTitle}
          </span>
        )}
        {title && <h2 className="display-5 fw-bold mb-3 text-dark">{title}</h2>}
        {description && (
          <p className="text-muted mx-auto mb-0" style={{ maxWidth: '600px' }}>
            {description}
          </p>
        )}
      </div>

      {/* Card */}
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
        <div className="bg-primary py-3 px-4">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="mb-0 fw-bold  text-white">
              Question {step + 1} of {list.length}
            </h4>
          </div>
        </div>

        <div className="card-body p-4 p-lg-5">
          <div
            className={`fade-slide ${isAnimating ? 'animating' : ''}`}
            style={{
              animation: isAnimating ? 'slideFade 0.3s ease-in-out' : 'none',
            }}
          >
            <h3 className="fw-bold mb-4 text-dark d-flex align-items-center">
              <span
                className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-3"
                style={{ width: '40px', height: '40px', flexShrink: 0 }}
              >
                {step + 1}
              </span>
              {currentStep.subtitle}
            </h3>

            {/* Main Questions with Circle Bullets */}
            <ul className="list-unstyled mb-4">
              {currentStep.items.map((item, index) => (
                <li
                  key={index}
                  className="d-flex align-items-start mb-3"
                  style={{
                    animation: isAnimating
                      ? `fadeInItem ${0.3 + index * 0.05}s ease-in-out`
                      : 'none',
                    opacity: isAnimating ? 0 : 1,
                    animationFillMode: 'forwards',
                  }}
                >
                  <span
                    className="d-inline-flex align-items-center  justify-content-center me-3 mt-1 flex-shrink-0"
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: theme === 'dark' ? '#fff' : '#000',
                    }}
                  />
                  <span className="text-dark fs-6">{item}</span>
                </li>
              ))}
            </ul>

            {/* Connection Types - Step 1 Only */}
            {step === 0 && currentStep.connectionTypes && (
              <div className="mt-4 pt-3 border-top">
                <h5
                  className={`fw-semibold ${theme === 'dark' ? 'text-light ' : 'text-primary '}  mb-3`}
                >
                  Possible connection types:
                </h5>
                <div className="d-flex flex-wrap gap-2">
                  {currentStep.connectionTypes.map((type, index) => (
                    <span
                      key={index}
                      className={`badge ${theme === 'dark' ? 'bg-primary text-light ' : 'bg-light text-dark'} border px-3 py-2 rounded-pill`}
                      style={{
                        animation: isAnimating
                          ? `fadeInItem ${0.5 + index * 0.05}s ease-in-out`
                          : 'none',
                        opacity: isAnimating ? 0 : 1,
                        animationFillMode: 'forwards',
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Workload Types - Step 1 Only */}
            {step === 0 && currentStep.workloadTypes && (
              <div className="mt-4 pt-3 border-top">
                <h5
                  className={`fw-semibold ${theme === 'dark' ? 'text-light ' : 'text-primary '}  mb-3`}
                >
                  Possible workload types:
                </h5>
                <div className="d-flex flex-wrap gap-2">
                  {currentStep.workloadTypes.map((type, index) => (
                    <span
                      key={index}
                      className={`badge ${theme === 'dark' ? 'bg-primary text-light ' : 'bg-light text-dark'} border px-3 py-2 rounded-pill`}
                      style={{
                        animation: isAnimating
                          ? `fadeInItem ${0.5 + index * 0.05}s ease-in-out`
                          : 'none',
                        opacity: isAnimating ? 0 : 1,
                        animationFillMode: 'forwards',
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Note  */}
            {currentStep.note && (
              <div className="mt-4 pt-3 border-top">
                <div className="alert alert-info bg-info bg-opacity-10 border-0 rounded-3">
                  <span className="text-dark">{currentStep.note}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-outline-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all"
          onClick={prevStep}
          disabled={step === 0 || isAnimating}
          style={{
            transition: 'all 0.3s ease',
            opacity: step === 0 ? '0.5' : '1',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Previous
        </button>

        <div className="d-flex align-items-center gap-3">
          {/* Progress indicators */}
          <div className="d-none d-md-flex gap-2">
            {list.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setStep(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className="btn p-0 border-0"
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === step ? '#3d5a9e' : '#e0e0e0',
                  transition: 'all 0.3s ease',
                  opacity: isAnimating ? 0.5 : 1,
                }}
                disabled={isAnimating}
              />
            ))}
          </div>
          <span className="badge bg-primary bg-opacity-10 text-primary fs-6 px-4 py-2 rounded-pill fw-semibold">
            {step + 1} / {list.length}
          </span>
        </div>

        <button
          className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all"
          onClick={nextStep}
          disabled={step === list.length - 1 || isAnimating}
          style={{
            transition: 'all 0.3s ease',
            opacity: step === list.length - 1 ? '0.5' : '1',
          }}
        >
          Next
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes slideFade {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInItem {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .transition-all {
          transition: all 0.3s ease-in-out;
        }

        .fade-slide {
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .fade-slide.animating {
          opacity: 0;
        }

        .btn:disabled {
          cursor: not-allowed;
        }

        .card {
          box-shadow: 0 10px 40px rgba(61, 90, 158, 0.1);
        }

        .card:hover {
          box-shadow: 0 15px 50px rgba(61, 90, 158, 0.15);
        }

        .badge.bg-primary.bg-opacity-10 {
          background-color: rgba(61, 90, 158, 0.1) !important;
        }

        .badge.bg-light {
          background-color: #f8f9fa !important;
        }

        .badge.bg-opacity-20 {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }

        .alert-info.bg-opacity-10 {
          background-color: rgba(13, 202, 240, 0.1) !important;
        }

        @media (max-width: 576px) {
          .btn {
            padding: 0.5rem 1rem !important;
            font-size: 0.875rem;
          }
          
          .display-5 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FlowListCard;
