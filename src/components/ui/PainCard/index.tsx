import { Card, Col, Container, Row } from 'react-bootstrap';

type featureType = {
  id: number;
  icon: string;
  title: string;
};

type FeatureCardProps = {
  data?: featureType[];
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  transitionLine?: string | React.ReactNode;
};
const PainCard = ({ data, title, description, transitionLine }: FeatureCardProps) => {
  return (
    <section className="py-5 my-2 my-md-4 my-lg-5">
      <Container>
        <h2 className="h1 text-center  mx-auto mt-n2 mt-sm-0 pt-md-2">{title}</h2>
        <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
          <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
        {data && (
          <Row
            xs={1}
            sm={2}
            lg={4}
            className="gy-5 justify-content-lg-center justify-content-center  pb-xl-3"
          >
            {data.map((feature, index) => (
              <Col
                key={feature.id}
                className={`text-center ${index !== data.length - 1 ? 'border-end' : ''}`}
              >
                <Card className="d-table border-0 rounded-circle shadow-secondroy bg-secondary shadow-sm p-3 mx-auto mb-4">
                  <img src={feature.icon} width={42} height={42} alt={feature.title} />
                </Card>
                <h3 className="h5 mb-2 mb-lg-0">{feature.title}</h3>
              </Col>
            ))}
          </Row>
        )}

        {/* Transition Line */}
        {transitionLine && (
          <div
            className="position-relative text-center mt-4 text-muted fst-italic fs-3  d-flex flex-wrap text-center justify-content-center mx-auto fw-semibold zindex-5"
            style={{ maxWidth: '45rem' }}
          >
            {transitionLine}
          </div>
        )}
      </Container>
    </section>
  );
};

export default PainCard;
