import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { serviceProvidersUsecase } from '@/assets/img';
import UseCaseButton from '@/components/ui/Use-Case/UseCaseButton';

const TurningNetworkUsecase: React.FC = () => {
  return (
    <div className="bg-white">
      <Container className="py-5">
        <Row className="align-items-center g-5">
          {/* LEFT CONTENT - HEADER & FEATURES */}
          <Col lg={7}>
            <HeaderTitle title="EDGE Max" variant="gold" />

            <p className=" mb-4 fw-semibold fs-xl" style={{ color: '#263777' }}>
              Turning Network Performance Into Catalogue Products
            </p>
            <p className="mb-4 text-black" style={{ lineHeight: 1.8 }}>
              EDGE Max enables service providers and data-centre operators to package premium
              connectivity services across cross-connects, campus fabric, metro routes and edge
              backhaul infrastructure. A structured pilot model allows providers to benchmark
              measurable improvements before wider rollout.
            </p>
            <div className="d-flex flex-column justify-content-start flex-sm-row gap-3 w-100 w-lg-auto">
              <UseCaseButton text={'Book a Pilot'} href={'#'} />
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={5} className="d-flex justify-content-lg-end justify-content-center">
            <img
              src={serviceProvidersUsecase}
              alt="Remote Work & Branch"
              width={650}
              height={550}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TurningNetworkUsecase;
