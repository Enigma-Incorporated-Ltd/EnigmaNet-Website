import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import PremiumButton from '../PremiumButton';
import { useTheme } from '@/utils/useTheme';
import Eyebrow from '../Eyebrow';

type HeroButton = {
  label: string;
  href: string;
  variant: 'blue' | 'gold';
  disableSentenceCase?: boolean;
};

type HeroProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  isbg?: boolean;
  buttons?: HeroButton[];
  features?: string[];
  subtitle?: string | React.ReactNode;
  eyebrow?: string;
  transitionLine?: string | React.ReactNode;
};

const HeroSection = ({
  title,
  description,
  image,
  buttons = [],
  features = [],
  subtitle,
  isbg = false,
  eyebrow,
  transitionLine
}: HeroProps) => {
  const isFullWidth = !image;
const {theme} = useTheme();
  return (
    <section className="position-relative overflow-hidden py-5">
      <Container className="position-relative zindex-5">
        <Row
          className={`align-items-center gy-4 ${
            isFullWidth ? 'justify-content-center text-center' : ''
          }`}
        >
          {/* TEXT CONTENT */}
          <Col
            lg={isFullWidth ? 10 : 6}
            className={!isFullWidth ? 'text-lg-start text-center ' : ''}
          >
            {eyebrow && <Eyebrow label={eyebrow} theme={theme} />}

            <h1 className="display-6 fw-semibold py-4 mb-3">{title}</h1>
            {subtitle && (
              <h3 className="h3 text-center  mx-auto  mt-n2 mt-sm-0 pt-md-2">{subtitle}</h3>
            )}

            {description && (
              <p
                className={`text-muted mb-4 ${isFullWidth ? 'mx-auto' : 'mx-lg-0 mx-auto'}`}
                style={{
                  maxWidth: isFullWidth ? '720px' : '520px',
                  // display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {description}
              </p>
            )}

            {/* BUTTONS */}
            {buttons.length > 0 && (
              <div
                className={`d-flex flex-column flex-lg-row gap-3 mb-4 ${
                  isFullWidth
                    ? 'justify-content-center'
                    : 'justify-content-lg-start justify-content-center'
                }`}
              >
                {buttons.map((btn, index) => (
                  <PremiumButton
                    key={index}
                    label={btn.label}
                    variant={btn.variant}
                    className="btn-lg  "
                    href={btn.href}
                    disableSentenceCase={btn.disableSentenceCase}
                    style={
                      image
                        ? {
                            letterSpacing: '1px',
                            width: '100%',
                            height: '60px',
                            padding: '0 6px',
                            fontSize: '0.9rem',
                          }
                        : undefined
                    }
                  />
                ))}
              </div>
            )}

            {/* FEATURES */}
            {features.length > 0 && (
              <ul
                className={`list-unstyled d-flex flex-wrap gap-3 ${
                  isFullWidth
                    ? 'justify-content-center'
                    : 'justify-content-lg-start justify-content-center'
                }`}
              >
                {features.map((item, i) => (
                  <li key={i} className="d-flex align-items-center small">
                    <IconifyIcon icon="bx:check-circle" className="me-2 text-light-blue fs-5" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Col>
          {image && (
            <Col lg={6}>
              <div className="position-relative">
                <img
                  src={image}
                  alt={title as string}
                  className={`w-100 rounded-4 ${isbg && 'bg-dark'}`}
                  style={{
                    boxShadow: '0 20px 80px rgba(0,0,0,0.15)',
                    maxHeight: '600px',
                  }}
                />
              </div>
            </Col>
          )}
        </Row>
        {transitionLine && (
          <div
            className="position-relative text-center mt-5 pt-4 text-muted fst-italic fs-3 d-flex flex-wrap justify-content-center mx-auto fw-semibold"
            style={{ maxWidth: '45rem' }}
          >
            {transitionLine}
          </div>
        )}
      </Container>
    </section>
  );
};

export default HeroSection;
