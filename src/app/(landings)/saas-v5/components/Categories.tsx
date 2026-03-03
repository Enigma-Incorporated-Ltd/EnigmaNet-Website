import { Swiper, SwiperSlide } from 'swiper/react';
import ecommerce from '@/assets/img/landing/saas-5/categories/ecommerce.jpg';
import transportation from '@/assets/img/landing/saas-5/categories/transportation.jpg';
import marketing from '@/assets/img/landing/saas-5/categories/marketing.jpg';
import robotics from '@/assets/img/landing/saas-5/categories/robotics.jpg';
import programing from '@/assets/img/landing/saas-5/categories/programming.jpg';

import { Pagination } from 'swiper/modules';

import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const categories = [
  {
    title: 'E-commerce',
    desc: 'Order processing, price suggestions, user research',
    img: ecommerce,
  },
  {
    title: 'Transportation',
    desc: 'Itinerary planning, freight pricing calculations, etc.',
    img: transportation,
  },
  {
    title: 'Marketing',
    desc: 'Market research, data visualization, user testing',
    img: marketing,
  },
  {
    title: 'Robotics',
    desc: 'Enhancing robot learning, improve robotic precision',
    img: robotics,
  },
  {
    title: 'Programming',
    desc: 'Code generation, code debugging and optimization',
    img: programing,
  },
];

const Categories = () => {
  return (
    <section className="container position-relative zindex-3">
      <div className="d-none d-lg-block" style={{ marginTop: '-428px' }}></div>
      <div className="d-lg-none" style={{ marginTop: '-370px' }}></div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          560: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
        className="swiper"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx} className="swiper-slide">
            <Link
              to="#"
              className="card-portfolio position-relative d-block rounded-3 overflow-hidden"
            >
              <span
                className="position-absolute top-0 start-0 w-100 h-100 zindex-1"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)',
                }}
              ></span>

              <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                <div className="px-md-3">
                  <h3 className="h4 text-white mb-0">{cat.title}</h3>
                  <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                    <span className="text-white fs-xs text-truncate opacity-70 pe-3">
                      {cat.desc}
                    </span>
                    <IconifyIcon
                      icon="bx:right-arrow-circle"
                      className="fs-3 text-gradient-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="card-img">
                <img src={cat.img} alt={cat.title} />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
      </Swiper>
    </section>
  );
};

export default Categories;
