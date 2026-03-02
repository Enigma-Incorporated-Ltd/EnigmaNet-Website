import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/01.svg';
import brand03 from '@/assets/img/brands/01.svg';
import brand04 from '@/assets/img/brands/01.svg';


import { Link } from 'react-router';

type Brand = {
  id: number;
  href: string;
  img: string;
  alt: string;
};

const brandsData: Brand[] = [
  { id: 1, href: '#', img: brand01, alt: 'Brand 1' },
  { id: 2, href: '#', img: brand02, alt: 'Brand 2' },
  { id: 3, href: '#', img: brand03, alt: 'Brand 3' },
  { id: 4, href: '#', img: brand04, alt: 'Brand 4' },
];

const Brands = () => {
  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <Container>
        <Swiper
          modules={[Pagination]}
          spaceBetween={8}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="mx-n2"
        >
          {brandsData.map(brand => (
            <SwiperSlide key={brand.id} className="py-3">
              <Link to={brand.href} className="card card-body card-hover px-2 mx-2">
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
      </Container>
    </section>
  );
};

export default Brands;
