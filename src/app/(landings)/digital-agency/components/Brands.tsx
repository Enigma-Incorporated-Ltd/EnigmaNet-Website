import { Container, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand03 from '@/assets/img/brands/03.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand06 from '@/assets/img/brands/06.svg';

import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

type Brand = {
  id: number;
  image: string;
  alt: string;
  href: string;
};

const brands: Brand[] = [
  { id: 1, image: brand01, alt: 'Brand 1', href: '#' },
  { id: 2, image: brand02, alt: 'Brand 2', href: '#' },
  { id: 3, image: brand03, alt: 'Brand 3', href: '#' },
  { id: 4, image: brand04, alt: 'Brand 4', href: '#' },
  { id: 5, image: brand05, alt: 'Brand 5', href: '#' },
  { id: 6, image: brand06, alt: 'Brand 6', href: '#' },
  { id: 7, image: brand01, alt: 'Brand 7', href: '#' },
  { id: 8, image: brand02, alt: 'Brand 8', href: '#' },
];

const Brands = () => {
  return (
    <section className="pb-4 pb-lg-5 mb-3">
      <Container>
        <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
          <h2 className="mb-0">Trusted by Awesome Clients</h2>

          <div className="d-md-flex d-none ms-4">
            <Button
              id="prev-brand"
              variant="light"
              size="sm"
              className="btn btn-prev btn-icon btn-sm me-2"
              aria-label="Previous"
            >
              <IconifyIcon icon="bx:chevron-left" fontSize={20} />
            </Button>
            <Button
              id="next-brand"
              variant="light"
              size="sm"
              className="btn btn-next btn-icon btn-sm ms-2"
              aria-label="Next"
            >
              <IconifyIcon icon="bx:chevron-right" fontSize={20} />
            </Button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '#prev-brand',
            nextEl: '#next-brand',
          }}
          pagination={{
            el: '.brands-pagination',
            clickable: true,
          }}
          loop
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 8 },
            500: { slidesPerView: 3, spaceBetween: 8 },
            650: { slidesPerView: 4, spaceBetween: 8 },
            900: { slidesPerView: 5, spaceBetween: 8 },
            1100: { slidesPerView: 6, spaceBetween: 8 },
          }}
        >
          {brands.map(brand => (
            <SwiperSlide key={brand.id} className="py-3">
              <Link to={brand.href} className="card card-body card-hover px-2 mx-2">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  width={154}
                  height={80}
                  className="d-block mx-auto my-2"
                />
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination brands-pagination position-relative pt-3 mt-4 d-md-none d-flex"></div>
        </Swiper>
      </Container>
    </section>
  );
};

export default Brands;
