import payment from '@/assets/img/landing/app-showcase-3/features/payment.svg';
import security from '@/assets/img/landing/app-showcase-3/features/security.svg';
import statistics from '@/assets/img/landing/app-showcase-3/features/statistics.svg';
import support from '@/assets/img/landing/app-showcase-3/features/support.svg';
import { Card, Col, Container, Row } from 'react-bootstrap';

const iconStyle = {
  filter:
    'drop-shadow(0px 0.86px 4.6px rgba(99,102,241,0.02)) drop-shadow(0px 2.9px 10.3px rgba(99,102,241,0.05)) drop-shadow(0px 13px 27px rgba(99,102,241,0.17))',
};

type FeaturesType = {
  icon: string;
  title: string;
  desc: string;
};

const features: FeaturesType[] = [
  {
    icon: payment,
    title: 'Easy payments',
    desc: 'Users can easily make payments through the mobile app using various payment methods.',
  },
  {
    icon: security,
    title: 'Data security',
    desc: 'The app employs various security measures to protect user data from unauthorized access or theft.',
  },
  {
    icon: statistics,
    title: 'Cost statistics',
    desc: 'Users can track their spending and view detailed cost statistics, such as expenses by category, time period...',
  },
  {
    icon: support,
    title: 'Support 24/7',
    desc: "Users can get help or support from the app's customer service team at any time of day or night.",
  },
];

const Features = () => {
  return (
    <section className="position-relative zindex-2 px-3 mt-n2 mt-sm-0">
      <Card
        className="border-0 rounded-3 shadow py-5 px-3 px-lg-0 mx-auto"
        style={{ maxWidth: '1560px' }}
      >
        <Container className="py-lg-4 py-xl-5">
          <Row className="pt-md-3 pb-md-2">
            <Col
              lg={5}
              className="d-flex flex-column text-center text-lg-start mb-3 mb-sm-4 mb-lg-0"
            >
              <h2 className="h1">
                New generation mobile bank. An easy way to{' '}
                <span className="text-primary">manage your finances</span> directly from your
                smartphone*.
              </h2>
              <p className="fs-lg mt-auto">
                *Serviced by <span className="fw-semibold">Universal Bank</span>
              </p>
            </Col>

            <Col lg={7} xl={6} className="offset-xl-1">
              <Row className="g-4 g-xl-5">
                {features.map((f, idx) => (
                  <Col sm={6} key={idx}>
                    <div className="text-center text-sm-start pe-md-2">
                      <img
                        src={f.icon}
                        alt={`${f.title} icon`}
                        width={60}
                        height={60}
                        style={iconStyle}
                      />
                      <h3 className="h4 mt-4 mb-2">{f.title}</h3>
                      <p className="mb-2">{f.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
};

export default Features;
