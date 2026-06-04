// HealthcareSolutionShowcase.tsx
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { technologyUsecase } from '@/assets/img';
import { CircleCheck } from '@/assets/svgs/solutions/remote-work-&-branch/usecase';
import { handleCardMouseEnter, handleCardMouseLeave } from '@/utils/cardHover';

// Feature Item Component
const FeatureItem: React.FC<{ title?: string; description: string }> = ({ title, description }) => (
  <div className="d-flex gap-3 mb-3">
    <div className="flex-shrink-0">
      <CircleCheck />
    </div>

    <div
      className="text-black"
      style={{
        color: '#000',
        fontFeatureSettings: "'liga' off, 'clig' off",
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '150%',
        width: '100%',
      }}
    >
      {title && <span className="fw-semibold">{title}: </span>}
      <span>{description}</span>
    </div>
  </div>
);

const NetworkSessions: React.FC = () => {
  const features = [
    {
      description: 'Reduced lag and session instability',
    },
    {
      description: 'Stable voice and party-chat perfomance',
    },
    {
      description: 'Lower churn from degraded sessions',
    },
    {
      description: 'Improved engagement across competitive environments',
    },
    {
      description: 'Global deployment without infrastructure disruption',
    },
  ];

  return (
    <div className="bg-white">
      <Container className="py-5">
        <Row className="align-items-center g-5">
          {/* LEFT CONTENT - HEADER & FEATURES */}
          <Col lg={6}>
            <HeaderTitle
              title="Stable Low-Latency Sessions Across Variable Networks"
              variant="gold"
            />

            <p
              className=" mb-4 "
              style={{
                color: '#263777',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                maxWidth: '600px',
              }}
            >
              Enigma enables resilient real-time connectivity across cloud gaming and live
              interactive platforms where latency, packet loss and jitter directly impact user
              experience and retention. Predictive routing and intelligent traffic duplication
              maintain stable gameplay, voice and session continuity across Wi-Fi, 5G and
              mixed-network environments.
            </p>

            {/* FEATURES LIST WITH CIRCLE CHECK ICONS */}
            <div className="mt-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} description={feature.description} />
              ))}
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6} className="d-flex justify-content-lg-end justify-content-center">
            <img
              src={technologyUsecase}
              alt="Remote Work & Branch"
              width={650}
              height={550}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
              style={{ transition: 'all 0.3s ease' }}
              className="img-fluid rounded-4"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NetworkSessions;
