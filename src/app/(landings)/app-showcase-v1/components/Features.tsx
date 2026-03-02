import showcase1 from '@/assets/img/landing/app-showcase-1/features/phone.png';
import Card from '@/assets/img/landing/app-showcase-1/features/card.png';
import payments from '@/assets/img/landing/app-showcase-1/features/payments.svg';
import security from '@/assets/img/landing/app-showcase-1/features/security.svg';
import statistics from '@/assets/img/landing/app-showcase-1/features/statistics.svg';
import support from '@/assets/img/landing/app-showcase-1/features/support.svg';
import cashback from '@/assets/img/landing/app-showcase-1/features/cashback.svg';
import happy from '@/assets/img/landing/app-showcase-1/features/happy.svg';

import { Col, Container, Row } from 'react-bootstrap';

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};
const Features = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Easy Payments',
      description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
      icon: payments,
    },
    {
      id: 2,
      title: 'Data Security',
      description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.',
      icon: security,
    },
    {
      id: 3,
      title: 'Cost Statistics',
      description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
      icon: statistics,
    },
    {
      id: 4,
      title: 'Support 24/7',
      description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
      icon: support,
    },
    {
      id: 5,
      title: 'Regular Cashback',
      description:
        'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.',
      icon: cashback,
    },
    {
      id: 6,
      title: 'Top Standards',
      description:
        'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
      icon: happy,
    },
  ];

  return (
    <Container
      id="features"
      className="pt-lg-2 pt-xl-3 pb-3 pb-xl-5 mt-n2 mt-sm-0 mb-2 mb-md-4 mb-lg-5"
    >
      <Row className="pb-xl-3">
        <Col lg={5} className="d-none d-lg-block">
          <div className="position-relative" style={{ maxWidth: '348px' }}>
            <img src={showcase1} alt="Phone" />
            <div
              className="rellax position-absolute top-0"
              data-rellax-vertical-scroll-axis="x"
              data-rellax-horizontal-speed="0.75"
              data-disable-parallax-down="lg"
              style={{ maxWidth: '348px', right: '-2.75rem' }}
            >
              <img src={Card} alt="Card" />
            </div>
          </div>
        </Col>

        <Col lg={7}>
          <h2 className="h1 text-center text-md-start mb-4">App Features</h2>
          <p className="fs-lg text-muted text-center text-md-start mb-4 mb-xl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
            Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at
            nec lacus.
          </p>

          <Row className="row-cols-1 row-cols-sm-2 pt-2 pt-sm-3 pt-xl-2">
            {features.map((feature, index) => (
              <Col key={feature.id} className={`pb-2 pb-xl-0 mb-4 mb-xl-5`}>
                <div
                  className={`d-flex align-items-start ${index % 2 === 0 ? 'pe-xl-3' : 'ps-xl-3'}`}
                >
                  <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <div className="ps-4 ps-sm-3 ps-md-4">
                    <h3 className="h5 pb-1 mb-2">{feature.title}</h3>
                    <p className="mb-0">{feature.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
