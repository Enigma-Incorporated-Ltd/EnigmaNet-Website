import './style.css';
import PremiumButton from '../PremiumButton';
import HeaderTitle from '../HeaderTitle';
import { useTheme } from '@/utils/useTheme';

export interface CardItem {
  id?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href?: string;
}

interface CardGridProps {
  data: CardItem[];
  buttonLabel?: string;
  columns?: string;
  showButton?: boolean;
  isBg?: boolean;
  customClass?: string;
}

const CardGrid: React.FC<CardGridProps> = ({
  data,
  buttonLabel = 'Explore',
  columns = 'col-12 col-sm-12 col-lg-6',
  showButton = true,
  isBg = false,
  customClass = '',
}) => {
  const { theme } = useTheme();

  return (
    <div className="row g-4 container mx-auto">
      {data.map((item, index) => (
        <div key={item.id ?? index} className={columns}>
          <div
            className="card solution-card h-100 shadow-sm border-1"
           
          >
            {/* Image */}
            {item.image && (
              <div className={` ${customClass ? customClass : 'image-wrapper'}`}>
                <img
                  src={item.image}
                  alt={item.title || 'card-image'}
                  className={` ${customClass ? customClass : 'w-100 h-100 rounded-top'}`}
                  style={{
                    backgroundColor: isBg ? '#fff' : '#151822',
                  }}
                />
              </div>
            )}

            {/* Content */}
            <div className="card-body d-flex flex-column pt-2 mt-3">
              {item.title && (
                <HeaderTitle
                  key={theme}
                  title={item.title}
                  variant="blue"
                  className={`h3 fw-bold pb-3`}
                />
              )}
              {item.subtitle && (
                <h2 className={`h4 text-start mt-2 }`} >
                  {item.subtitle}
                </h2>
              )}
              {item.description && (
                <p
                  className="text-muted mb-3"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.description}
                </p>
              )}

              {/* Button */}
              {showButton && item.href && (
                <div className="mt-auto">
                  <PremiumButton
                    label={buttonLabel}
                    variant="blue"
                    className="btn-lg py-3 mt-3 px-5 btn btn-responsive"
                    href={item.href}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
