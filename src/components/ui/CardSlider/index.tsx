import PremiumButton from '@/components/ui/PremiumButton';
import { Card } from 'react-bootstrap';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconifyIcon from '@/components/IconifyIcon';
import HeaderTitle from '@/components/ui/HeaderTitle';
type FeatureItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
type ButtonConfig = {
  label: string;
  href: string;
  variant?: 'blue' | 'gold';
};

type CardSliderProps = {
  data: FeatureItem[];
  cardShow?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  showButtons?: boolean;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
};
const CardSlider = ({
  data,
  cardShow = 3,
  title,
  description,
  showButtons = false,
  primaryButton,
  secondaryButton,
}: CardSliderProps) => {
  return (
    <section className="container  my-2 my-md-4 my-lg-5">
      {title && <h2 className="h1 text-center  mx-auto mt-n2 mt-sm-0 pt-md-2">{title}</h2>}
      {description && (
        <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
          <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
      )}
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={8}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
          1200: { slidesPerView: cardShow },
        }}
        className="mx-n2 pb-4"
      >
        {data.map(feature => (
          <SwiperSlide key={feature.id} className="h-auto py-3">
            <Card className="h-100 card-body card-hover mx-2">
              {typeof feature.icon === 'string' && feature.icon.startsWith('solar:') ? (
                <IconifyIcon
                  icon={feature.icon}
                  className="display-5 text-warning fw-normal card-icon"
                  style={{ color: '#b4b7c9' }}
                />
              ) : (
                <img src={feature.icon} width={100} height={100} alt={feature.title} className="" />
              )}
              <HeaderTitle title={feature.title} className="h5 text-warning pt-3 pb-1 mb-2" />
              <p className="mb-0">{feature.description}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {showButtons && (primaryButton || secondaryButton) && (
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
          {primaryButton && (
            <PremiumButton
              label={primaryButton.label}
              href={primaryButton.href}
              variant={primaryButton.variant || 'blue'}
              className="btn-lg"
            />
          )}

          {secondaryButton && (
            <PremiumButton
              label={secondaryButton.label}
              href={secondaryButton.href}
              variant={secondaryButton.variant || 'gold'}
              className="btn-lg"
            />
          )}
        </div>
      )}
    </section>
  );
};

export default CardSlider;
