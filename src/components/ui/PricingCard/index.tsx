import '../card/style.css';
import PremiumButton from '../PremiumButton';
import HeaderTitle from '../HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import IconifyIcon from '@/components/IconifyIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowButton } from '../AddOnCard';
import '../CardSlider/style.css';
import { Pagination } from 'swiper/modules';
export interface CardItem {
  id?: string | number;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  usecase?: string[];
  href?: string;
  buttonLabel?: string;
  transitionLine?: string | React.ReactNode;
  PriceValue?: string | React.ReactNode;
  priceLabel?: string | React.ReactNode;
  priceCustomDescription?: string | React.ReactNode;
  // NEW
  stepList?: boolean;
  stepTitle?: string;
}

interface CardGridProps {
  data: CardItem[];
  headerTitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  transitionLine?: string | React.ReactNode;
  columns?: string;
  showButton?: boolean;
  disableSentenceCase?: boolean;
}

const PricingCard: React.FC<CardGridProps> = ({
  data,
  headerTitle,
  columns = 'col-12 col-md-12 col-lg-6',
  showButton = true,
  description,
  disableSentenceCase = false,
  transitionLine,
}) => {
  const { theme } = useTheme();
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const goPrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const goNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);
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
      <div className="d-none d-lg-block">
        <div className="row g-4">
          {data.map((item, index) => (
            <div key={item.id ?? index} className={columns}>
              <div className="card solution-card h-100 shadow-lg border-1 rounded-4">
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
                  <h5 className="fw-bold text-start  my-3">Best for </h5>
                  {/* Subtitle */}
                  {item.subtitle && (
                    <h2 className="h4 text-start text-dark mb-3">{item.subtitle}</h2>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p
                      className="card-text mb-4 text-start"
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
                      {item.stepList && (
                        <div className="mb-4">
                          {/* Step Title */}
                          {item.stepTitle && (
                            <h5 className="fw-bold text-start  mb-3">{item.stepTitle}</h5>
                          )}

                          <ul className="list-unstyled mb-1">
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
                        </div>
                      )}
                      <h5 className="fw-bold text-start  mb-3">{item.priceLabel || 'Price'} </h5>
                      {item.PriceValue && (
                        <h2 className="h4 text-start text-dark mb-3">{item.PriceValue}</h2>
                      )}
                    </>
                  )}
                  {item.priceCustomDescription && (
                    <p className="card-text mb-4 text-start">{item.priceCustomDescription}</p>
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
                    <div className="mt-auto ">
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
      <div className="d-lg-none ">
        {!(isBeginning && isEnd) && (
          <div className="card-slider-arrows">
            <ArrowButton direction="prev" onClick={goPrev} disabled={isBeginning} />

            <ArrowButton direction="next" onClick={goNext} disabled={isEnd} />
          </div>
        )}
        <Swiper
          modules={[Pagination]}
          key={isMobile ? 'mobile' : 'desktop'}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          className="pricing-swiper  pb-5"
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id ?? index}>
              <div className="card solution-card  shadow-lg border-1 rounded-4">
                <div className="card-body d-flex flex-column p-4">
                  {/* Title */}
                  {item.title && (
                    <HeaderTitle
                      key={`${theme}-${index}`}
                      title={item.title}
                      variant="blue"
                      className="h1 fw-bold text-start mb-2"
                    />
                  )}

                  <h5 className="fw-bold text-start my-3">Best for</h5>

                  {/* Subtitle */}
                  {item.subtitle && (
                    <h2 className="h4 text-start text-dark mb-3">{item.subtitle}</h2>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="card-text mb-4 text-start">{item.description}</p>
                  )}

                  {/* Features */}
                  {item.usecase && item.usecase.length > 0 && (
                    <>
                      {item.stepList && (
                        <>
                          {item.stepTitle && (
                            <h5 className="fw-bold text-start mb-1">{item.stepTitle}</h5>
                          )}

                          <ul className="list-unstyled mb-2">
                            {item.usecase.map((use, idx) => (
                              <li key={idx} className="d-flex align-items-start mb-2">
                                <IconifyIcon
                                  icon="bx:check-circle"
                                  className="text-light-blue me-2 mt-1 fs-5"
                                />
                                <span>{use}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      <h5 className="fw-bold text-start mb-3">{item.priceLabel || 'Price'}</h5>

                      {item.PriceValue && (
                        <h2 className="h4 text-start text-dark mb-3">{item.PriceValue}</h2>
                      )}
                      {item.priceCustomDescription && (
                        <p className="card-text mb-4 text-start">{item.priceCustomDescription}</p>
                      )}
                    </>
                  )}

                  {showButton && item.href && (
                    <div className="mt-auto pt-3">
                      <PremiumButton
                        label={item.buttonLabel || 'Explore'}
                        variant="blue"
                        href={item.href}
                        fullWidth
                        className="btn-lg py-3 px-4"
                        disableSentenceCase={disableSentenceCase}
                      />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Transition line */}
      {transitionLine && (
        <div
          className="position-relative text-center mt-5 pt-4 text-muted fst-italic fs-3 d-flex flex-wrap justify-content-center mx-auto fw-semibold"
          style={{ maxWidth: '55rem' }}
        >
          {transitionLine}
        </div>
      )}
    </div>
  );
};

export default PricingCard;
