import { Col, Container, Row } from 'react-bootstrap';
import StraightLine from './StraightLine';
import IconifyIcon from '@/components/IconifyIcon';
import CustomButton from '@/components/ui/CustomButton';

const features = [
  {
    title: 'New Revenue Stream',
    desc: 'Resell secure networking and cloud infrastructure as a managed service with margin built in..',
  },
  {
    title: 'Solve Real Customer Pain',
    desc: 'Your customers get more reliable connectivity and data movement, you get a compelling reason to call.',
  },
  {
    title: 'Bundle And Grow',
    desc: ' Start with networking, add compute, GPU, and storage as your customers need it.',
  },
  {
    title: 'Simple Enablement',
    desc: ' Positioning, provisioning, and support designed for partners, not an afterthought.',
  },
];

const Partner = () => {
  return (
    <Container className="py-5  mt-md-4">
      <Row className="align-items-center mt-5">
        {/* LEFT CONTENT */}
        <Col lg={6} className="mb-4 mb-lg-0">
          <p className=" h2 text-warning fw-semibold text-uppercase mb-4">For Partners</p>

          <h1 className="fw-bold mb-4" style={{ lineHeight: '1.3' }}>
            Help your customers get more reliable connectivity and data movement, without building
            it all yourself
          </h1>

          <StraightLine />

          <p className="text-muted">
            Enigma Net gives MSPs and channel partners a differentiated infrastructure offering they
            can package, provision, and resell. Secure networking now, with compute and storage to
            bundle later.
          </p>
        </Col>

        {/* RIGHT FEATURES */}
        <Col lg={6}>
          {features.map((item, index) => (
            <div key={index} className="d-flex mb-4">
              {/* ICON */}
              <div className="me-3">
                <div>
                  <IconifyIcon
                    icon={'solar:forward-outline'}
                    className="display-5 text-warning mb-3"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h6 className="fw-bold mb-1 ">{item.title}</h6>
                <p className="text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
      <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        <CustomButton label="Our  Partners " bgColor="warning" href="/" className="btn-lg" />
      </div>
    </Container>
  );
};

export default Partner;
