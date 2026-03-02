import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand03 from '@/assets/img/brands/03.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand06 from '@/assets/img/brands/06.svg';
import { Link } from 'react-router';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Brand = {
  id: number;
  logo: string;
  link: string;
};

const brands: Brand[] = [
  { id: 1, logo: brand01, link: '#' },
  { id: 2, logo: brand02, link: '#' },
  { id: 3, logo: brand03, link: '#' },
  { id: 4, logo: brand04, link: '#' },
  { id: 5, logo: brand05, link: '#' },
  { id: 6, logo: brand06, link: '#' },
];

const Brands = () => {
  return (
    <section className="container my-n2 my-md-0">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={2}
        spaceBetween={0}
        breakpoints={{
          500: { slidesPerView: 3, spaceBetween: 8 },
          650: { slidesPerView: 4, spaceBetween: 8 },
          900: { slidesPerView: 5, spaceBetween: 8 },
          1100: { slidesPerView: 6, spaceBetween: 8 },
        }}
        className="mx-n2"
      >
        {brands.map(brand => (
          <SwiperSlide key={brand.id} className="py-3">
            <Link to={brand.link} className="card card-body card-hover px-2 mx-2">
              <img
                src={brand.logo}
                className="d-block mx-auto my-2"
                width="154"
                alt={`Brand ${brand.id}`}
              />
            </Link>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination position-relative pt-2 mt-4" />
      </Swiper>
    </section>
  );
};

export default Brands;
