import '../card/style.css';
import PremiumButton from '../PremiumButton';
import HeaderTitle from '../HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import IconifyIcon from '@/components/IconifyIcon';

export interface CardItem {
  id?: string | number;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  usecase?: string[];
  href?: string;
  buttonLabel?: string;
  transitionLine?: string | React.ReactNode;

  // NEW
  stepList?: boolean;
  stepTitle?: string;
}

interface CardGridProps {
  data: CardItem[];
  headerTitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  columns?: string;
  showButton?: boolean;
  disableSentenceCase?: boolean;
}

const CardWithUseCase: React.FC<CardGridProps> = ({
  data,
  headerTitle,
  columns = 'col-12 col-md-12 col-lg-6',
  showButton = true,
  description,
  disableSentenceCase = false,
}) => {
  const { theme } = useTheme();

  return (
    <div className="container pb-5 pt-3 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
      <HeaderTitle
        key={theme}
        title={headerTitle}
        variant={theme === 'dark' ? 'gold' : 'blue'}
        className="text-center pb-5 my-4"
      />

      {description && (
        <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
          <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
      )}

      <div className="row g-4">
        {data.map((item, index) => (
          <div key={item.id ?? index} className={columns}>
            <div className="card solution-card h-100 shadow-lg border-0 rounded-4">
              <div className="card-body d-flex flex-column p-4">
                {/* Title */}
                {item.title && (
                  <HeaderTitle
                    key={theme}
                    title={item.title}
                    variant="blue"
                    className="h1 fw-bold text-start mb-2"
                  />
                )}

                {/* Subtitle */}
                {item.subtitle && <h2 className="h4 text-start text-dark mb-3">{item.subtitle}</h2>}

                {/* Description */}
                {item.description && (
                  <p
                    className="h6 mb-4 text-start"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      maxWidth: '40rem',
                    }}
                  >
                    {item.description}
                  </p>
                )}

                {/* Use Cases */}
                {item.usecase && item.usecase.length > 0 && (
                  <>
                    {item.stepList ? (
                      <div className="mb-4">
                        {/* Step Title */}
                        {item.stepTitle && (
                          <h5 className="fw-bold text-start  mb-3">{item.stepTitle}</h5>
                        )}

                        {/* Number List */}
                        <ol className="mb-0 ps-4">
                          {item.usecase.map((use, idx) => (
                            <li key={idx} className="mb-2 text-start fw-bold">
                              <span className="fw-normal">{use}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : (
                      <ul className="list-unstyled mb-4">
                        {item.usecase.map((use, idx) => (
                          <li key={idx} className="d-flex align-items-start mb-2">
                            <IconifyIcon
                              icon="bx:check-circle"
                              className="text-light-blue me-2 mt-1 fs-5"
                            />

                            <span className="text-start">{use}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {item.transitionLine && (
                  <div
                    className="position-relative text-center mt-4 h6 fst-italic fs-4 d-flex flex-wrap justify-content-center mx-auto fw-semibold zindex-5"
                    style={{ maxWidth: '25rem' }}
                  >
                    {item.transitionLine}
                  </div>
                )}

                {/* Button */}
                {showButton && item.href && (
                  <div className="mt-auto pt-3">
                    <PremiumButton
                      label={item.buttonLabel || 'Explore'}
                      variant="blue"
                      className="btn-lg py-3 px-4"
                      href={item.href}
                      fullWidth={true}
                      disableSentenceCase={disableSentenceCase}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWithUseCase;
