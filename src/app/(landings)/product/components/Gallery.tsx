import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import img01 from '@/assets/img/landing/product/gallery/01.jpg';
import img02 from '@/assets/img/landing/product/gallery/02.jpg';
import img03 from '@/assets/img/landing/product/gallery/03.jpg';
import img04 from '@/assets/img/landing/product/gallery/04.jpg';
import img05 from '@/assets/img/landing/product/gallery/05.jpg';
import img06 from '@/assets/img/landing/product/gallery/06.jpg';


const Gallery = () => {
  const galleryLTR = [img01, img02, img03, img04];
  const galleryRTL = [img04, img05, img06, img01];

  return (
    <section className="mb-5 pt-md-3 pt-lg-4 pt-xl-5">
      <h2 className="h1 pt-lg-2 pt-xl-3 mb-5 text-center">User shots gallery</h2>

      <div className="pb-2 pb-sm-3 pb-md-4">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          grabCursor={false}
          centeredSlides
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode
          speed={38000}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 8 },
            500: { spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
          }}
        >
          {galleryLTR.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt="Gallery image" className="rounded-3" />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          grabCursor={false}
          centeredSlides
          dir="rtl"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode
          speed={38000}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 8 },
            500: { spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
          }}
          className="mt-md-4 mt-sm-3 mt-2"
        >
          {galleryRTL.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt="Gallery image" className="rounded-3" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
