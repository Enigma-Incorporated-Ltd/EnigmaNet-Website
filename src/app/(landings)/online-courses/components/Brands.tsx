import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import brand1 from '@/assets/img/brands/01.svg';
import brand2 from '@/assets/img/brands/02.svg';
import brand3 from '@/assets/img/brands/03.svg';
import brand4 from '@/assets/img/brands/04.svg';
import brand5 from '@/assets/img/brands/05.svg';
import brand6 from '@/assets/img/brands/06.svg';
import { Link } from 'react-router';

const brands = [
  { id: 1, logo: brand1, alt: 'Brand 1', link: '#' },
  { id: 2, logo: brand2, alt: 'Brand 2', link: '#' },
  { id: 3, logo: brand3, alt: 'Brand 3', link: '#' },
  { id: 4, logo: brand4, alt: 'Brand 4', link: '#' },
  { id: 5, logo: brand5, alt: 'Brand 5', link: '#' },
  { id: 6, logo: brand6, alt: 'Brand 6', link: '#' },
];

const Brands = () => {
  return (
    <section className="container mt-2 mb-lg-2 mb-xl-4 pt-3 pt-lg-5 pb-5">
      <h2 className="text-center pb-md-2">Trusted by Leading Universities &amp; Companies</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={8}
        breakpoints={{
          0: { slidesPerView: 2 },
          500: { slidesPerView: 3 },
          650: { slidesPerView: 4 },
          900: { slidesPerView: 5 },
          1100: { slidesPerView: 6 },
        }}
        className="mx-n2"
      >
        {brands.map(brand => (
          <SwiperSlide key={brand.id} className="py-3">
            <Link to={brand.link} className="card card-body card-hover px-2 mx-2">
              <img
                src={brand.logo}
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

export default Brands;
