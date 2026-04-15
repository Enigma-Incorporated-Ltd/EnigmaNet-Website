import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand03 from '@/assets/img/brands/03.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand06 from '@/assets/img/brands/06.svg';

import { Link } from 'react-router';

type BrandItem = {
  id: number;
  img: string;
  alt: string;
};

const brands: BrandItem[] = [
  { id: 1, img: brand01, alt: 'Brand 01' },
  { id: 2, img: brand02, alt: 'Brand 02' },
  { id: 3, img: brand03, alt: 'Brand 03' },
  { id: 4, img: brand04, alt: 'Brand 04' },
  { id: 5, img: brand05, alt: 'Brand 05' },
  { id: 6, img: brand06, alt: 'Brand 06' },
];

const Brand = () => {
  return (
    <section className="container py-5 mb-xl-3 mt-md-2 mt-lg-5">
      <h2 className="h1 text-center pt-2 pb-3 pb-lg-4">Over 5K Customers Worldwide Rely on Us</h2>

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
        {brands.map(brand => (
          <SwiperSlide key={brand.id} className="py-3">
            <Link to="#" className="card card-body card-hover px-2 mx-2">
              <img src={brand.img} className="d-block mx-auto my-2" width="154" alt={brand.alt} />
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
    </section>
  );
};

export default Brand;
