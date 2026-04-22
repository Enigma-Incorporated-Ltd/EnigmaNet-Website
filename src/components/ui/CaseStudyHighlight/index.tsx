import IconifyIcon from '@/components/IconifyIcon';
import { Container } from 'react-bootstrap';
import './index.css';
type CaseStudyHighlightProps = {
  data?: string[];
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  quote?: string | React.ReactNode;
};
const CaseStudyHighlight = ({ data, title, description, quote }: CaseStudyHighlightProps) => {
  return (
    <Container className="pt-3 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
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
          <ul className="list-unstyled row offset-xl-2 pb-2 g-3">
            {data.map((item, idx) => (
              <li key={idx} className="col-12 col-md-6">
                <div className="premium-list-item bg-secondary d-flex align-items-center p-3 h-100">
                  <div className="icon-wrapper me-3">
                    <IconifyIcon icon="bx:check-circle" />
                  </div>

                  <div className="d-flex align-items-center h-100">
                    <span className="text-muted-50">{item}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {quote && (
          <div
            className="text-center d-flex flex-wrap text-center justify-content-center mx-auto pt-5 mb-5"
            style={{ maxWidth: '45rem' }}
          >
            <blockquote className="blockquote fst-italic ">
              <p className="mb-0 h4">{quote}</p>
            </blockquote>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CaseStudyHighlight;
