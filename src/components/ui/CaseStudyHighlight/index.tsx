import IconifyIcon from '@/components/IconifyIcon';
import { Container } from 'react-bootstrap';
import './index.css';
import HeroImage from '../HeroImage';
import PremiumButton from '../PremiumButton';
import { useTheme } from '@/utils/useTheme';
type ButtonConfig = {
  label: string;
  href: string;
  variant?: 'blue' | 'gold';
  disableSentenceCase?: boolean;
};
type CaseStudyHighlightProps = {
  showButtons?: boolean;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  data?: string[];
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  quote?: string | React.ReactNode;
  transitionLine?: string | React.ReactNode;
  image?: string;
  className?: string;
  isbg?: boolean;
  description2?: string | React.ReactNode;
  sectionTitle?: string | React.ReactNode;
};
const CaseStudyHighlight = ({
  data,
  title,
  description,
  quote,
  transitionLine,
  image,
  className,
  isbg,
  showButtons = false,
  primaryButton,
  secondaryButton,
  description2,
  sectionTitle,
}: CaseStudyHighlightProps) => {
  const {theme} = useTheme();
  return (
    <Container className="pt-3 pb-5 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
      {sectionTitle && (
        <h5
          className={`h3 text-center text-uppercase text-${theme === 'dark' ? 'light-blue' : 'warning'}`}
        >
          {sectionTitle}
        </h5>
      )}
      {title && (
        <h2
          className={`h1 text-center  mx-auto mt-n2 mt-sm-0 ${!description ? 'pb-4' : ''} pt-md-2`}
        >
          {title}
        </h2>
      )}
      {description && (
        <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
          <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
      )}
      <div
        className="rellax  d-flex d-sm-block flex-column"
        data-rellax-percentage="0.5"
        data-rellax-speed="0.8"
        data-disable-parallax-down="lg"
      >
        {data && (
          <ul className="list-unstyled row   pb-2 g-3">
            {data.map((item, idx) => (
              <li key={idx} className="col-12 col-md-6">
                <div
                  className={`premium-list-item d-flex align-items-center p-3 h-100 ${
                    !isbg ? 'bg-secondary' : ''
                  }`}
                  style={{
                    background: isbg ? '#f3f6ff' : undefined,
                  }}
                >
                  <div className="icon-wrapper me-3">
                    <IconifyIcon icon="bx:check-circle" />
                  </div>

                  <div className="d-flex align-items-center h-100">
                    <span className={` ${className ? className : 'text-muted-50'} `}>{item}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {/* Secondary description */}
        {description2 && (
          <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
            <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
              <span>{description2}</span>
            </li>
          </ul>
        )}
        {image && (
          <div className="text-center mb-5">
            <HeroImage
              img={image}
              alt={typeof title === 'string' ? title : undefined}
              isbg={isbg}
            />
            {/* <img
              src={image}
              width="100%"
              alt="Case Study Highlight"
              className="img-fluid bg-dark rounded-4 shadow-lg"
              style={{
                borderRadius: '1.5rem',
                boxShadow: '0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)',
              }}
            /> */}
          </div>
        )}
        {quote && (
          <div
            className="text-center quote-top d-flex flex-wrap text-center justify-content-center mx-auto pt-5 mb-5"
            style={{
              maxWidth: '45rem',
            }}
          >
            <blockquote className="blockquote fst-italic ">
              <p className="mb-0 h4">{quote}</p>
            </blockquote>
          </div>
        )}
        {transitionLine && (
          <div
            className="position-relative text-center mt-4 text-muted fst-italic fs-3  d-flex flex-wrap text-center justify-content-center mx-auto fw-semibold zindex-5"
            style={{ maxWidth: '45rem' }}
          >
            {transitionLine}
          </div>
        )}
        {showButtons && (primaryButton || secondaryButton) && (
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
            {primaryButton && (
              <PremiumButton
                label={primaryButton.label}
                href={primaryButton.href}
                variant={primaryButton.variant ?? 'blue'}
                disableSentenceCase={primaryButton.disableSentenceCase}
                className="btn-lg"
              />
            )}
            {secondaryButton && (
              <PremiumButton
                label={secondaryButton.label}
                href={secondaryButton.href}
                variant={secondaryButton.variant ?? 'gold'}
                disableSentenceCase={secondaryButton.disableSentenceCase}
                className="btn-lg"
              />
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default CaseStudyHighlight;
