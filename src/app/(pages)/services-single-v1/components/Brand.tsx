import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { Link } from 'react-router';
import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand03 from '@/assets/img/brands/03.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand06 from '@/assets/img/brands/06.svg';

type BrandType = {
  id: number;
  img: string;
  alt: string;
  link: string;
};

const brands: BrandType[] = [
  { id: 1, img: brand01, alt: 'Brand 1', link: '#' },
  { id: 2, img: brand02, alt: 'Brand 2', link: '#' },
  { id: 3, img: brand03, alt: 'Brand 3', link: '#' },
  { id: 4, img: brand04, alt: 'Brand 4', link: '#' },
  { id: 5, img: brand05, alt: 'Brand 5', link: '#' },
  { id: 6, img: brand06, alt: 'Brand 6', link: '#' },
];

const Brand = () => {
  return (
    <section className="container pb-5 mb-xl-4">
      <h2 className="text-center pb-md-2">Trusted by Leading Companies</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={8}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 2 },
          500: { slidesPerView: 3, spaceBetween: 8 },
          650: { slidesPerView: 4, spaceBetween: 8 },
          900: { slidesPerView: 5, spaceBetween: 8 },
          1100: { slidesPerView: 6, spaceBetween: 8 },
        }}
        className="mySwiper"
      >
        {brands.map(brand => (
          <SwiperSlide key={brand.id} className="py-3">
            <Link to={brand.link} className="card card-body card-hover px-2 mx-2">
              <img src={brand.img} className="d-block mx-auto my-2" width={154} alt={brand.alt} />
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
    </section>
  );
};

export default Brand;
