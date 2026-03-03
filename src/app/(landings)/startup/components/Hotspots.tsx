import { Container, Row, Col } from 'react-bootstrap';
import scooterImage from '@/assets/img/landing/startup/scooter.png';
import React from 'react';

const Hotspots = () => {
  const hotspots = [
    { number: 1, label: 'GPS / GSM enabled', top: '0%', left: '61.7%' },
    { number: 2, label: 'Urban design', top: '3.2%', right: '68.3%' },
    { number: 3, label: 'Long-lasting\nbattery', top: '26.8%', right: '49.9%' },
    { number: 4, label: 'Anti-theft\nencryption', top: '45%', left: '64.8%' },
    { number: 5, label: 'Safety elements', top: '62%', right: '74.5%' },
    { number: 6, label: 'Enhanced motor\noutput', top: '67%', left: '72.5%' },
  ];

  return (
    <section className="position-relative pt-sm-2 pt-md-4 pt-lg-5">
      <div
        className="bg-gradient-primary position-absolute top-0 start-0 w-100 opacity-15"
        style={{ height: 'calc(100% - 7rem)' }}
      ></div>

      <Container className="position-relative zindex-2 pt-5">
        <Row className="row-cols-1 row-cols-md-2 pt-2 pt-md-3 pb-5 mb-md-2 mb-lg-4">
          <Col className="mb-4">
            <h2 className="h1 mb-0">
              User-friendly electric <span className="text-primary">scooter</span> designed
              exceptionally for <span className="text-primary">sharing</span>
            </h2>
          </Col>
          <Col>
            <p className="fs-xl mb-0">
              With a seamless form and swanlike silhouette, our scooter is designed to change
              micro-mobility forever. We engineered every element around the comfort of our riders,
              putting the vehicle through rigorous testing to verify its safety and durability in
              all environments.
            </p>
          </Col>
        </Row>

        <div
          className="position-relative bg-dark rounded-3 overflow-hidden px-5"
          style={{ paddingTop: '9.7%', paddingBottom: '6%' }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
          ></div>

          <div className="position-relative zindex-2 mx-auto" style={{ maxWidth: '852px' }}>
            <img src={scooterImage} alt="Scooter" className="d-block" />

            {hotspots.map((hotspot, index) => (
              <div
                key={index}
                className="d-flex align-items-center position-absolute"
                style={{
                  top: hotspot.top,
                  left: hotspot.left ? hotspot.left : undefined,
                  right: hotspot.right ? hotspot.right : undefined,
                }}
              >
                <div className="btn btn-icon btn-primary bg-transparent fs-lg text-white fw-bold rounded-circle pe-none">
                  {hotspot.number}
                </div>

                <div className="fs-xl text-white opacity-70 ms-3 d-none d-md-block">
                  {hotspot.label.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                <div className="fs-sm text-white opacity-70 ms-2 d-md-none">
                  {hotspot.label.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hotspots;
