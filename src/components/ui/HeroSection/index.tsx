import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import PremiumButton from '../PremiumButton';

type HeroButton = {
  label: string;
  href: string;
  variant: 'blue' | 'gold';
};

type HeroProps = {
  title: string ;
  description: string;
  image: string;
  buttons?: HeroButton[];
  features?: string[];
};

const HeroSection = ({ title, description, image, buttons = [], features = [] }: HeroProps) => {
  return (
    <section className="position-relative overflow-hidden py-5">
      <Container className="position-relative zindex-5">
        <Row className="align-items-center gy-4">
          {/* LEFT CONTENT */}
          <Col lg={6} className="text-lg-start text-center">
            <h1 className="display-6 fw-semibold mb-3">{title}</h1>

            <p
              className="text-muted mb-4 mx-lg-0 mx-auto"
              style={{
                maxWidth: '520px',
                // display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </p>

            {/* BUTTONS */}
            {buttons.length > 0 && (
              <div className="d-flex flex-column flex-lg-row gap-3 justify-content-lg-start justify-content-center mb-4">
                {buttons.map((btn, index) => (
                  <PremiumButton
                    key={index}
                    label={btn.label}
                    variant={btn.variant}
                    className="btn-lg"
                    href={btn.href}
                    style={{
                      letterSpacing: '1px',
                      width: '100%',
                      height: '60px',
                      padding: '0 6px',
                      fontSize: '0.9rem',
                    }}
                  />
                ))}
              </div>
            )}

            {/* FEATURES */}
            {features.length > 0 && (
              <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-lg-start justify-content-center">
                {features.map((item, i) => (
                  <li key={i} className="d-flex align-items-center small">
                    <IconifyIcon icon="bx:check-circle" className="me-2 text-success fs-5" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6}>
            <div className="position-relative">
              <img
                src={image}
                alt={title}
                className="w-100 rounded-4"
                style={{
                  boxShadow: '0 20px 80px rgba(0,0,0,0.15)',
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
