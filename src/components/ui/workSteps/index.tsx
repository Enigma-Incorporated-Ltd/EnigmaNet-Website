import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderTitle from '../HeaderTitle';
import { useTheme } from '@/utils/useTheme';
interface Step {
  n: number;
  title: React.ReactNode;
  lead?: string;
  desc?: string;
}
interface WorkStepsProps {
  steps: Step[];
  title: React.ReactNode;
  sectionTitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

const WorkSteps = ({ steps, title = '', sectionTitle  , description}: WorkStepsProps) => {
  const { theme } = useTheme();
  return (
    <Container className=" d-flex flex-column align-items-center justify-content-center">
      {sectionTitle && (
        <h5
          className={`h3 text-center text-uppercase text-${theme === 'dark' ? 'light-blue' : 'warning'}`}
        >
          {sectionTitle}
        </h5>
      )}
      <div className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto">
        <HeaderTitle
          key={theme === 'dark' ? 'dark' : 'light'}
          title={<>{title} </>}
          variant={theme === 'dark' ? 'gold' : 'blue'}
        />
      </div>
      {description && (
        <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
          <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
      )}
      <div
        className="steps steps-sm steps-center   pb-5 mb-md-2 mb-lg-3 "
        style={{ maxWidth: '530px' }}
      >
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">
              <div className="step-number-inner">{step.n}</div>
            </div>
            <div className="step-body">
              <h3
                className="mb-3"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,

                  marginBottom: '0.5rem',
                }}
              >
                {step.title}
              </h3>{' '}
              <p
                className="mb-0 text-muted"
                style={{
                  fontSize: '17px',

                  fontWeight: 500,
                  lineHeight: 1.6,
                  margin: '0 0 0.25rem',
                }}
              >
                {step.lead}
              </p>{' '}
              <p
                className="mb-0 text-muted-light"
                style={{
                  fontSize: '14px',

                  fontWeight: 500,
                  lineHeight: 1.6,
                  margin: '0 0 0.25rem',
                }}
              >
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkSteps;
