import { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Link } from 'react-router';
import { CardBody } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import HeaderTitle from '../HeaderTitle';
import PremiumButton from '../PremiumButton';
import '../card/style.css';
import { ArrowButton } from '../CardSlider';
 import './style.css';
const PLACEHOLDER_IMAGE = 'https://placehold.co/800x500/e2e8f0/94a3b8?text=No+Image';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SliderItem {
  id: string;
  slug?: string;
  href?: string;
  title?: string;
  image?: string;
  category?: string;
  description?: string;
  date?: string;
  author?: {
    name?: string;
    avatar?: string;
  };
}

interface ReusableSliderProps {
  data: SliderItem[] | any[];
  currentSlug?: string;
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  basePath?: string;
  count?: number;
}

const NextPageSlider = ({
  data,
  currentSlug,
  title = '',
  buttonText = '',
  buttonLink = '',
  basePath = '',
  count = 6,
}: ReusableSliderProps) => {
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

  if (!data || data.length === 0) return null;

  const getNextItems = () => {
    if (!currentSlug) return data;
    const currentIndex = data.findIndex(item => item.slug === currentSlug);
    if (currentIndex === -1) return data;
    let nextItems = data.slice(currentIndex + 1, currentIndex + 1 + count);
    if (nextItems.length < count) {
      const remaining = count - nextItems.length;
      nextItems = [...nextItems, ...data.slice(0, remaining)];
    }
    return nextItems;
  };

  const itemsToShow = getNextItems();

  return (
    <>
    

      <section className="container pt-3 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
        {/* Header row: title + view-all button + arrows */}
        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3">
          <HeaderTitle title={title} className="h1 mb-sm-0 pb-3" />

          <div className="d-flex align-items-center gap-3 mt-3 mt-sm-0">
            {buttonLink && (
              <PremiumButton
                label={
                  <>
                    {buttonText}{' '}
                    <IconifyIcon icon="bx:right-arrow-alt" className="ms-1 me-n1 lh-1 lead" />
                  </>
                }
                href={buttonLink}
                variant="blue"
                className="d-flex align-items-center justify-content-center"
              />
            )}

            {/* Custom arrows — sit next to the button */}
            <div className="d-flex gap-2">
              <ArrowButton direction="prev" onClick={goPrev} disabled={isBeginning} />
              <ArrowButton direction="next" onClick={goNext} disabled={isEnd} />
            </div>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          spaceBetween={8}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="nps-swiper mx-n2"
        >
          {itemsToShow.map(item => (
            <SwiperSlide key={item.id} className="h-auto pb-3">
              <Link
                to={basePath ? `${basePath}/${item.slug}` : item.href}
                className="text-decoration-none text-dark d-block h-100"
              >
                <article className="card border-0 shadow-sm solution-card h-100 mx-2">
                  {/* Image */}
                  <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                    <img
                      src={item.image || PLACEHOLDER_IMAGE}
                      className="w-100 h-100 rounded-top"
                      style={{ objectFit: 'cover' }}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <CardBody className="pb-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      {item.category && (
                        <span className="badge fs-sm text-nav bg-secondary">{item.category}</span>
                      )}
                      {item.date && <span className="fs-sm text-muted">{item.date}</span>}
                    </div>

                    <h3 className="h5 mb-0">{item.title}</h3>

                    {item.description && (
                      <p
                        className="mb-0 mt-2 text-muted"
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
                  </CardBody>

                  {/* Author */}
                  {item.author?.name && item.author.name !== 'Unknown' && (
                    <div className="card-footer py-4">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        {item.author.avatar ? (
                          <img
                            src={item.author.avatar}
                            className="rounded-circle me-3"
                            width="48"
                            alt={item.author.name}
                            loading="lazy"
                          />
                        ) : (
                          <div
                            className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold me-3"
                            style={{ width: 48, height: 48, fontSize: 20 }}
                          >
                            {item.author.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        {item.author.name}
                      </div>
                    </div>
                  )}
                </article>
              </Link>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4" />
        </Swiper>
      </section>
    </>
  );
};

export default NextPageSlider;
