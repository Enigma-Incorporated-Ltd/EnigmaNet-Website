import { Swiper, SwiperSlide } from 'swiper/react';

import brand1 from '@/assets/img/brands/01.svg';
import brand2 from '@/assets/img/brands/02.svg';
import brand3 from '@/assets/img/brands/03.svg';
import brand4 from '@/assets/img/brands/04.svg';
import brand5 from '@/assets/img/brands/05.svg';
import brand6 from '@/assets/img/brands/06.svg';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router';
import { Pagination } from 'swiper/modules';

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

const Brands = () => {
  return (
    <Container className="py-5 mt-md-2 mt-lg-4">
      <Swiper
        modules={[Pagination]}
        slidesPerView={2}
        spaceBetween={8}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        }}
        breakpoints={{
          500: { slidesPerView: 3, spaceBetween: 8 },
          650: { slidesPerView: 4, spaceBetween: 8 },
          900: { slidesPerView: 5, spaceBetween: 8 },
          1100: { slidesPerView: 6, spaceBetween: 8 },
        }}
        className="pt-2 mx-n2"
      >
        {brands.map((brand, idx) => (
          <SwiperSlide key={idx} className="py-3">
            <Link to="#" className="card card-body card-hover px-2 mx-2">
              <img src={brand} className="d-block mx-auto my-2" width={154} alt="Brand" />
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
    </Container>
  );
};

export default Brands;
