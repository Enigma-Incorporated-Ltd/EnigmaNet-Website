import { Container, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import brand1 from '@/assets/img/brands/01.svg';
import brand2 from '@/assets/img/brands/02.svg';
import brand3 from '@/assets/img/brands/03.svg';
import brand4 from '@/assets/img/brands/04.svg';
import brand5 from '@/assets/img/brands/05.svg';
import brand6 from '@/assets/img/brands/06.svg';
import { Link } from 'react-router';

type Brand = {
  id: number;
  image: string;
  alt: string;
  link: string;
};

const brands: Brand[] = [
  { id: 1, image: brand1, alt: 'Brand 1', link: '#' },
  { id: 2, image: brand2, alt: 'Brand 2', link: '#' },
  { id: 3, image: brand3, alt: 'Brand 3', link: '#' },
  { id: 4, image: brand4, alt: 'Brand 4', link: '#' },
  { id: 5, image: brand5, alt: 'Brand 5', link: '#' },
  { id: 6, image: brand6, alt: 'Brand 6', link: '#' },
];

const Brands = () => {
  return (
    <section className="pb-5 mb-lg-2 mb-xl-4">
      <Container>
        <Swiper
          modules={[Pagination]}
          slidesPerView={2}
          pagination={{ clickable: true }}
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
              <Link to={brand.link}>
                <Card className="card-body card-hover px-2 mx-2">
                  <img
                    src={brand.image}
                    alt={brand.alt}
                    width={154}
                    className="d-block mx-auto my-2"
                  />
                </Card>
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
