import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import brand01 from '@/assets/img/brands/01.svg';
import brand02 from '@/assets/img/brands/02.svg';
import brand03 from '@/assets/img/brands/03.svg';
import brand04 from '@/assets/img/brands/04.svg';
import brand05 from '@/assets/img/brands/05.svg';
import brand06 from '@/assets/img/brands/06.svg';

import { Link } from 'react-router';

type Sponsor = {
  id: number;
  name: string;
  logo: string;
  link: string;
};

const sponsors: Sponsor[] = [
  { id: 1, name: 'Brand 1', logo: brand01, link: '#' },
  { id: 2, name: 'Brand 2', logo: brand02, link: '#' },
  { id: 3, name: 'Brand 3', logo: brand03, link: '#' },
  { id: 4, name: 'Brand 4', logo: brand04, link: '#' },
  { id: 5, name: 'Brand 5', logo: brand05, link: '#' },
  { id: 6, name: 'Brand 6', logo: brand06, link: '#' },
];

const Sponsors = () => {
  return (
    <section className="position-relative bg-dark py-5">
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(255,255,255,.05)' }}
      ></div>

      <Container className="position-relative zindex-5 pt-1 pt-md-2 pb-lg-2 pt-lg-4">
        <h2 className="h3 text-light text-center text-lg-start mb-4 mb-lg-5">Sponsored by:</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={6}
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 3 },
            650: { slidesPerView: 4 },
            900: { slidesPerView: 5 },
            1100: { slidesPerView: 6 },
          }}
          className="ms-xxl-n5 me-xxl-n4"
        >
          {sponsors.map(sponsor => (
            <SwiperSlide key={sponsor.id}>
              <Link to={sponsor.link} className="d-block py-3">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={154}
                  height={80}
                  className="d-block mx-auto"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Sponsors;
