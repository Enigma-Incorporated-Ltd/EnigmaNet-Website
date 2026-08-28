import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router';
import { Pagination, Autoplay } from 'swiper/modules';
import './brand.css';
import {
  GammaLogo,
  Hooked,
  IntelLogo,
  KInnami,
  LoopaliLogo,
  NvidiaInceptionProgram,
  wasabi,
} from '@/assets/img/partner-logo';
const brands = [
  wasabi,
  GammaLogo,
  NvidiaInceptionProgram,
  IntelLogo,
  LoopaliLogo,
  Hooked,
  KInnami,
  // wasabi,
  // LoopaliLogo,
  // 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3b31529c133d881adef92_1.648815FC_Sheffield_Wednesday__80_s_logo___48086.jpg',
  // 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3b36f570da95155ab5e3f_STARTUP-AGENCY.png',
  // 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c38347bcbac30b0f71b4e0_O2-Logo.png',
  // 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c382dd77d5718a35e3ee42_loopli-logo.png',
  // 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3b31529c133d881adef92_1.648815FC_Sheffield_Wednesday__80_s_logo___48086.jpg',
  // 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c38347bcbac30b0f71b4e0_O2-Logo.png',
  // 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c382dd77d5718a35e3ee42_loopli-logo.png',
  // 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3b31529c133d881adef92_1.648815FC_Sheffield_Wednesday__80_s_logo___48086.jpg',
];

const Brands = () => {
  return (
    <Container className="py-5">
      <h5 className="h4 text-center mb-4">
        Trusted by infrastructure teams moving critical workloads
      </h5>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={16}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 3, spaceBetween: 8 },
          650: { slidesPerView: 4, spaceBetween: 8 },
          900: { slidesPerView: 5, spaceBetween: 8 },
          1100: { slidesPerView: 6, spaceBetween: 8 },
        }}
        className="pt-2 mx-n2 px-1"
      >
        {brands.map((brand, idx) => (
          <SwiperSlide key={idx} className="py-3">
            <Link
              to="#"
              className="brand-card border d-flex align-items-center justify-content-center"
            >
              <img src={brand} alt="brand" className="brand-img" />
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
    </Container>
  );
};

export default Brands;
