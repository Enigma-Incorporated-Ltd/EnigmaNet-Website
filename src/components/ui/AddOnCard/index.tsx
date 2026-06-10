'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Card } from 'react-bootstrap';
import PremiumButton from '@/components/ui/PremiumButton';
import HeaderTitle from '@/components/ui/HeaderTitle';
import '../CardSlider/style.css';
// ─── Types ──────────────────────────────────────────────────────────────────

type FeatureItem = {
  id: number;
  icon?: string;
  title: string;
  description: string;
  PriceValue?: string | React.ReactNode;
};
type ButtonConfig = {
  label: string;
  href: string;
  variant?: 'blue' | 'gold';
};

type CardSliderProps = {
  data?: FeatureItem[];
  cardShow?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  transitionLine?: string | React.ReactNode;
  showButtons?: boolean;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  autoplay?: boolean;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
};

// ─── Arrow Button ────────────────────────────────────────────────────────────

interface ArrowButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, disabled }) => {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? 'Previous slide' : 'Next slide'}
      className={`card-slider-arrow card-slider-arrow--${direction}`}
    >
      {/* Chevron SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isPrev ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
};

// ─── Component ───────────────────────────────────────────────────────────────

const AddOnCard: React.FC<CardSliderProps> = ({
  data,
  cardShow = 4,
  title,
  description,
  description2,
  transitionLine,
  showButtons = false,
  primaryButton,
  secondaryButton,
  autoplay = false,
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const goPrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperRef.current?.slideNext(), []);

  const activeModules = [
    ...(showPagination ? [Pagination] : []),
    ...(showNavigation ? [Navigation] : []),
    ...(autoplay ? [Autoplay] : []),
  ];

  return (
    <>
      <section className="container pb-5 pt-3 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
        {/* Title */}
        {title && (
          <h2
            className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2"
            style={{ maxWidth: '70rem' }}
          >
            {title}
          </h2>
        )}

        {/* Description */}
        {description && (
          <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-4">
            <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
              <span>{description}</span>
            </li>
          </ul>
        )}

        {/* Swiper */}
        {data && data.length > 0 && (
          <>
            {/* Custom arrow row — only rendered when navigation is enabled */}
            {showNavigation && !(isBeginning && isEnd) && (
              <div className="card-slider-arrows">
                <ArrowButton direction="prev" onClick={goPrev} disabled={isBeginning} />
                <ArrowButton direction="next" onClick={goNext} disabled={isEnd} />
              </div>
            )}

            <Swiper
              modules={activeModules}
              onSwiper={handleSwiper}
              onSlideChange={handleSlideChange}
              spaceBetween={8}
              slidesPerView={1}
              pagination={showPagination ? { clickable: true } : false}
              autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
              breakpoints={{
                500: { slidesPerView: 2 },
                800: { slidesPerView: 3 },
                1200: { slidesPerView: cardShow },
              }}
              className="card-slider-swiper mx-n2 pb-4"
            >
              {data.map(feature => (
                <SwiperSlide key={feature.id} className="h-auto py-3">
                  <Card className="h-100 card-body card-hover mx-2">
                    <HeaderTitle title={feature.title} className="h5 text-warning pt-3 pb-1 mb-2" />
                    <p
                      className="mb-0"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                      style={{ minHeight: '4rem' }}
                    />
                    {feature.PriceValue && (
                      <h2 className="h4 text-start mt-5 text-dark">{feature.PriceValue}</h2>
                    )}{' '}
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}

        {/* Secondary description */}
        {description2 && (
          <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
            <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
              <span>{description2}</span>
            </li>
          </ul>
        )}

        {/* Transition line */}
        {transitionLine && (
          <div
            className="position-relative text-center mt-5 pt-4 text-muted fst-italic fs-3 d-flex flex-wrap justify-content-center mx-auto fw-semibold"
            style={{ maxWidth: '45rem' }}
          >
            {transitionLine}
          </div>
        )}

        {/* CTA buttons */}
        {showButtons && (primaryButton || secondaryButton) && (
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
            {primaryButton && (
              <PremiumButton
                label={primaryButton.label}
                href={primaryButton.href}
                variant={primaryButton.variant ?? 'blue'}
                className="btn-lg"
              />
            )}
            {secondaryButton && (
              <PremiumButton
                label={secondaryButton.label}
                href={secondaryButton.href}
                variant={secondaryButton.variant ?? 'gold'}
                className="btn-lg"
              />
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default AddOnCard;
