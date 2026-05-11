import { useTheme } from '@/utils/useTheme';
import HeaderTitle from '../HeaderTitle';

type Feature = {
  title: string;
  items: {
    img: string;
    name: string;
  }[];
  description: string;
};

const CompareCard = ({ features }: { features: Feature[] }) => {
  const { theme } = useTheme();
  return (
    <div className="container py-5">
      <div className="row g-4   ">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-6 col-12 " key={index}>
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
                {feature.items.map((item, idx) => (
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
