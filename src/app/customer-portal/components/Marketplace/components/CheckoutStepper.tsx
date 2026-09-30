import React from 'react';
import './CheckoutStepper.css';

export type CheckoutStepType = 'configure' | 'review' | 'payment';

interface CheckoutStepperProps {
  currentStep: CheckoutStepType;
  onStepClick?: (step: CheckoutStepType) => void;
}

interface StepItem {
  id: CheckoutStepType;
  num: number;
  label: string;
}

const STEPS: StepItem[] = [
  { id: 'configure', num: 1, label: '1. Configure' },
  { id: 'review', num: 2, label: '2. Review' },
  { id: 'payment', num: 3, label: '3. Payment' }
];

// 14x14 Checkmark Icon (Matching Figma imgCheck)
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 64px Solid or Dotted Processing Line (Matching Figma design)
function StepConnector({ isSolid, active }: { isSolid?: boolean; active?: boolean }) {
  return (
    <div className={`checkout-step-connector ${active ? 'checkout-step-connector--active' : ''} ${isSolid ? 'checkout-step-connector--solid' : 'checkout-step-connector--dotted'}`}>
      <svg width="64" height="2" viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        {isSolid ? (
          <line x1="0" y1="1" x2="64" y2="1" stroke="currentColor" strokeWidth="2" />
        ) : (
          <line x1="1" y1="1" x2="63" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="3 5" strokeLinecap="round" />
        )}
      </svg>
    </div>
  );
}

export default function CheckoutStepper({ currentStep, onStepClick }: CheckoutStepperProps) {
  const getStepIndex = (step: CheckoutStepType) => {
    switch (step) {
      case 'configure': return 1;
      case 'review': return 2;
      case 'payment': return 3;
      default: return 1;
    }
  };

  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="checkout-stepper-container" data-node-id="1252:19116" data-name="progress-container">
      {STEPS.map((step, idx) => {
        const isDone = step.num < currentIndex;
        const isInProcess = step.num === currentIndex;
        const isPending = step.num > currentIndex;

        return (
          <React.Fragment key={step.id}>
            <div 
              className={`checkout-step-col ${isDone ? 'checkout-step-col--done' : ''} ${isInProcess ? 'checkout-step-col--active' : ''} ${isPending ? 'checkout-step-col--pending' : ''} ${onStepClick && isDone ? 'checkout-step-col--clickable' : ''}`}
              onClick={() => {
                if (onStepClick && isDone) {
                  onStepClick(step.id);
                }
              }}
              data-node-id={`step-${step.num}`}
            >
              <div 
                className={`step-circle-icon ${isDone ? 'step-circle-icon--done' : isInProcess ? 'step-circle-icon--in-process' : 'step-circle-icon--pending'}`}
                data-name="done icon processing"
              >
                <CheckIcon />
              </div>
              <p className="step-label-text">{step.label}</p>
            </div>

            {idx < STEPS.length - 1 && (
              <StepConnector 
                isSolid={step.num < currentIndex - 1 || (currentIndex === 3 && step.num === 1)} 
                active={step.num < currentIndex} 
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
