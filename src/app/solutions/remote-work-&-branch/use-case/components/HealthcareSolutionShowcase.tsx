// HealthcareSolutionShowcase.tsx
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderTitle from '@/components/ui/HeaderTitle';
import PremiumButton from '@/components/ui/PremiumButton';
import { healthUsecase } from '@/assets/img';
import { CircleCheck } from '@/assets/svgs/solutions/remote-work-&-branch/usecase';

// Feature Item Component
const FeatureItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="d-flex gap-3 mb-4">
    <div className="flex-shrink-0">
      <CircleCheck />
    </div>

    <div className="text-black">
      <span className="fw-semibold">{title}: </span>
      <span>{description}</span>
    </div>
  </div>
);

const HealthcareSolutionShowcase: React.FC = () => {
  const features = [
    {
      title: 'Multi-Link Bonding',
      description:
        'APN bonds multiple links into a single resilient pipe with per-packet steering and in-order resequencing.',
    },
    {
      title: 'Critical Traffic First',
      description:
        'Byte-level QoS prioritises telemed video and voice, keeping jitter below 5 ms on broadband.',
    },
    {
      title: 'High-Speed Transfers',
      description:
        'TCP acceleration delivers 7×–65× throughput uplift on long-RTT paths, shrinking imaging and records transfer times from hours to minutes.',
    },
    {
      title: 'Hitless Continuity',
      description:
        'RAIN provides uninterrupted sessions – no dropped calls, no missed vitals during link events.',
    },
  ];

  return (
    <div className="bg-white">
      <Container className="py-5">
        <Row className="align-items-center g-5">
          {/* LEFT CONTENT - HEADER & FEATURES */}
          <Col lg={7}>
            <HeaderTitle title="Healthcare & Remote-Site" variant="gold" />
         
            <p className=" mb-4 fw-semibold fs-xl" style={{ color: '#263777' }}>
              Enigma supports telemedicine, vitals monitoring, PACS imaging and EHR access across
              sites using fibre, 5G and satellite.
            </p>

            {/* FEATURES LIST WITH CIRCLE CHECK ICONS */}
            <div className="mt-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} title={feature.title} description={feature.description} />
              ))}
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={5} className="d-flex justify-content-lg-end justify-content-center">
            <img
              src={healthUsecase}
              alt="Remote Work & Branch"
              width={650}
              height={550}
              className="img-fluid"
            />
          </Col>
        </Row>

        {/* PARTNER BUTTON */}
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center justify-content-lg-start w-100 align-items-center mt-5">
          <PremiumButton label="Explore Healthcare Solutions" variant="blue" href="#" outline />
        </div>
      </Container>
    </div>
  );
};

export default HealthcareSolutionShowcase;
