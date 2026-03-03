import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand03 from '@/assets/img/brands/03.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand06 from '@/assets/img/brands/06.svg';

import { Link } from 'react-router';

const brandLogos = [
  { img: brand01, alt: 'Brand 1' },
  { img: brand02, alt: 'Brand 2' },
  { img: brand03, alt: 'Brand 3' },
  { img: brand04, alt: 'Brand 4' },
  { img: brand05, alt: 'Brand 5' },
  { img: brand06, alt: 'Brand 6' },
];

const Brand = () => {
  return (
    <section className="container pb-3 pb-lg-5 mb-3 mb-xl-4">
      <h2 className="text-center pb-md-2">Trusted by Leading Companies</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={8}
        slidesPerView={2}
        breakpoints={{
          500: { slidesPerView: 3, spaceBetween: 8 },
          650: { slidesPerView: 4, spaceBetween: 8 },
          900: { slidesPerView: 5, spaceBetween: 8 },
          1100: { slidesPerView: 6, spaceBetween: 8 },
        }}
        className="mx-n2"
      >
        {brandLogos.map((brand, index) => (
          <SwiperSlide key={index} className="py-3">
            <Link to="#" className="card card-body card-hover px-2 mx-2">
              <img
                src={brand.img}
                alt={brand.alt}
                width={154}
                height={60}
                className="d-block mx-auto my-2"
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
    </section>
  );
};

export default Brand;
