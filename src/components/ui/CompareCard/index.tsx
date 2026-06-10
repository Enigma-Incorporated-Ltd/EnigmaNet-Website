import { useTheme } from '@/utils/useTheme';
import HeaderTitle from '../HeaderTitle';
import IconifyIcon from '@/components/IconifyIcon';
import '../CaseStudyHighlight/index.css';
type Feature = {
  title: string;
  items?: {
    img: string;
    name: string;
  }[];
  usecase?: {
    subtitle?: string;
    data?: string[];
  }[];

  description?: string;
};
type Props = {
  features: Feature[];
  title?: string | React.ReactNode;
};

const CompareCard = ({ features, title }: Props) => {
  const { theme } = useTheme();
  return (
    <div className="container py-5">
      {title && (
        <h2
          className="h1 text-center  mx-auto mt-n2 mt-sm-0 pb-5 pt-md-2"
          style={{ maxWidth: '70rem' }}
        >
          {title}
        </h2>
      )}

      <div className="row g-4   ">
        {features.map((feature, index) => (
          <div className={`${feature.usecase ? 'col-12' : 'col-md-6'} col-lg-6 col-12`} key={index}>
            <div
              className="h-100 p-4 p-lg-4 rounded-5 text-center"
              style={{
                boxShadow:
                  theme === 'dark'
                    ? '0 4px 20px rgba(255, 255, 255, 0.1)'
                    : '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <HeaderTitle
                title={feature.title}
                key={theme}
                variant={theme === 'dark' ? 'gold' : 'blue'}
                className="h1 mb-4"
              />
              {/* Items Grid */}
              <div className="row g-4 justify-content-center mb-4">
                {feature?.items?.map((item, idx) => (
                  <div className="col-6 col-lg-6 col-md-12" key={idx}>
                    <div className="d-flex flex-column border card-body card-hover shadow-lg rounded-5 p-3 align-items-center h-100">
                      {/* Icon or Image */}
                      <div
                        className="d-flex align-items-center bg-secondary  p-2 justify-content-center rounded-circle mb-3 overflow-hidden"
                        style={{
                          width: '95px',
                          height: '95px',
                        }}
                      >
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{ objectFit: 'cover' }}
                            className="w-100 h-100 object-fit-cover"
                          />
                        )}
                      </div>

                      {/* Name */}
                      <h6 className="fw-semibold mb-0">{item.name}</h6>
                    </div>
                  </div>
                ))}

                {feature?.usecase?.map((usecase, usecaseIndex) => (
                  <div className="col-12" key={usecaseIndex}>
                    <div className="d-flex flex-column  p-3 h-100">
                      {usecase.subtitle && <h6 className="fw-semibold h3 py-3 mb-3">{usecase.subtitle}</h6>}

                      <div className="row g-3">
                        {usecase.data?.map((item, itemIndex) => (
                          <div className="col-12 col-md-12" key={itemIndex}>
                            <div className="premium-list-item bg-secondary d-flex align-items-center p-3 h-100 rounded-4">
                              <div className="icon-wrapper me-3">
                                <IconifyIcon icon="bx:check-circle" />
                              </div>

                              <div className="d-flex align-items-center h-100">
                                <span className="text-muted-50">{item}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className=" h5 mb-0">{feature.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareCard;
