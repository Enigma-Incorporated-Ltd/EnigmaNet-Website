import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand03 from '@/assets/img/brands/03.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand06 from '@/assets/img/brands/06.svg';
import { Link } from 'react-router';


const brands = [brand01, brand02, brand03, brand04, brand05, brand06];

const Brand = () => {
  return (
    <section className="container border-bottom-lg pt-sm-2">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={2}
        breakpoints={{
          500: { slidesPerView: 3, spaceBetween: 8 },
          650: { slidesPerView: 4, spaceBetween: 8 },
          850: { slidesPerView: 5, spaceBetween: 8 },
          992: { slidesPerView: 6, spaceBetween: 8 },
        }}
        className="mx-n2"
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index} className="py-2">
            <Link to="#" className="px-2 mx-2">
              <img
                src={logo}
                className="d-block mx-auto my-2"
                width="155"
                alt={`Brand ${index + 1}`}
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
