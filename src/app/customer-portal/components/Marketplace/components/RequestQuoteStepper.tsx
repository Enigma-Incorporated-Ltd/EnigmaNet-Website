import React from 'react';
import './RequestQuoteStepper.css';

export type QuoteStepType = 'product' | 'requirements' | 'contact' | 'review';

interface RequestQuoteStepperProps {
  currentStep: QuoteStepType;
  onStepClick?: (step: QuoteStepType) => void;
}

interface StepItem {
  id: QuoteStepType;
  num: number;
  label: string;
}

const STEPS: StepItem[] = [
  { id: 'product', num: 1, label: '1. Product' },
  { id: 'requirements', num: 2, label: '2. Requirements' },
  { id: 'contact', num: 3, label: '3. Contact details' },
  { id: 'review', num: 4, label: '4. Review' }
];

// Checkmark Icon matching Figma imgCheck / imgCheck1
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 64px Solid or Dotted Processing Line matching Figma design
function StepConnector({ isSolid, active }: { isSolid?: boolean; active?: boolean }) {
  return (
    <div className={`quote-step-connector ${active ? 'quote-step-connector--active' : ''} ${isSolid ? 'quote-step-connector--solid' : 'quote-step-connector--dotted'}`}>
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

export default function RequestQuoteStepper({ currentStep, onStepClick }: RequestQuoteStepperProps) {
  const getStepIndex = (step: QuoteStepType) => {
    switch (step) {
      case 'product': return 1;
      case 'requirements': return 2;
      case 'contact': return 3;
      case 'review': return 4;
      default: return 1;
    }
  };

  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="quote-stepper-container" data-node-id="1252:21245" data-name="progress-container">
      {STEPS.map((step, idx) => {
        const isDone = step.num < currentIndex;
        const isInProcess = step.num === currentIndex;
        const isPending = step.num > currentIndex;

        return (
          <React.Fragment key={step.id}>
            <div 
              className={`quote-step-col ${isDone ? 'quote-step-col--done' : ''} ${isInProcess ? 'quote-step-col--active' : ''} ${isPending ? 'quote-step-col--pending' : ''} ${onStepClick && isDone ? 'quote-step-col--clickable' : ''}`}
              onClick={() => {
                if (onStepClick && isDone) {
                  onStepClick(step.id);
                }
              }}
              data-node-id={`step-${step.num}`}
            >
              <div 
                className={`quote-step-circle-icon ${isDone ? 'quote-step-circle-icon--done' : isInProcess ? 'quote-step-circle-icon--in-process' : 'quote-step-circle-icon--pending'}`}
                data-name="done icon processing"
              >
                <CheckIcon />
              </div>
              <p className="quote-step-label-text">{step.label}</p>
            </div>

            {idx < STEPS.length - 1 && (
              <StepConnector 
                isSolid={step.num < currentIndex} 
                active={step.num < currentIndex} 
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
