import { Container } from 'react-bootstrap';
import '../CaseStudyHighlight/index.css';
type FeatureComparisonProps = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  benefits?: string[];
  limitations?: string[];
  image?: string;
  quote?: string | React.ReactNode;
    transitionLine?: string | React.ReactNode;
    benitsTitle?: string | React.ReactNode;
    limitationsTitle?: string | React.ReactNode;
};

const FeatureComparison = ({
  title,
  description,
  benefits,
  limitations,
  image,
  quote,
    transitionLine,
    benitsTitle,
    limitationsTitle
}: FeatureComparisonProps) => {
  return (
    <Container className="pt-3 pb-5 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
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
        className="rellax d-flex d-sm-block flex-column"
        data-rellax-percentage="0.5"
        data-rellax-speed="0.8"
        data-disable-parallax-down="lg"
      >
        <div className="row g-4">
          {/* benefits */}
          <div className="col-12 col-md-6">
            <div className=" card-body card-hover h-100 p-4 border rounded-4">
              {benitsTitle && <h5 className="fw-bold text-start h3  mb-3">{benitsTitle}</h5>}
              <ol className="mb-0 ps-4">
                {benefits?.map((item, idx) => (
                  <li key={idx} className="mb-2 text-start fw-bold">
                    <span className="fw-normal">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* limitations */}
          <div className="col-12 col-md-6">
            <div className="card-body card-hover h-100 p-4 border rounded-4">
              {limitationsTitle && <h5 className="fw-bold text-start h3  mb-3">{limitationsTitle}</h5>}
              <ol className="mb-0 ps-4">
                {limitations?.map((item, idx) => (
                  <li key={idx} className="mb-2 text-start fw-bold">
                    <span className="fw-normal">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {image && (
          <div className="text-center mb-5">
            <img
              src={image}
              alt="Case Study Highlight"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                borderRadius: '1.5rem',
                boxShadow: '0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)',
              }}
            />
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
            className="position-relative text-center display-1 mt-4 text-muted fst-italic fs-4  d-flex flex-wrap text-center justify-content-center mx-auto  zindex-5"
            style={{ maxWidth: '55rem' }}
          >
            {transitionLine}
          </div>
        )}
      </div>
    </Container>
  );
};

export default FeatureComparison;
