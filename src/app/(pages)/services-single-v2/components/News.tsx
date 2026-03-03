import avatar36 from '@/assets/img/avatar/36.jpg';
import avatar37 from '@/assets/img/avatar/37.jpg';
import avatar38 from '@/assets/img/avatar/38.jpg';
import news1 from '@/assets/img/landing/medical/news/01.jpg';
import news2 from '@/assets/img/landing/medical/news/02.jpg';
import news3 from '@/assets/img/landing/medical/news/03.jpg';
import news4 from '@/assets/img/landing/medical/news/04.jpg';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

import IconifyIcon from '@/components/IconifyIcon';
import { CardFooter, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';

type NewsItem = {
  id: number;
  category: string;
  time: string;
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
};

const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'Diseases',
    time: '12 hours ago',
    title: 'Updates on COVID-19 vaccination efforts in your area',
    image: news1,
    author: {
      name: 'Ralph Edwards',
      avatar: avatar36,
      role: 'MBBS, MD Gynaecology',
    },
  },
  {
    id: 2,
    category: 'Healthy Tips',
    time: '1 day ago',
    title: 'New drug to halt dementia after multiple head injuries',
    image: news2,
    author: {
      name: 'Jenny Wilson',
      avatar: avatar37,
      role: 'Ph.D. Physiology',
    },
  },
  {
    id: 3,
    category: 'Psychology',
    time: 'Nov 24, 2023',
    title: 'Empowering women to make their health a priority',
    image: news3,
    author: {
      name: 'Albert Flores',
      avatar: avatar38,
      role: 'M.Sc. Clinical Neuroscience',
    },
  },
  {
    id: 4,
    category: 'Health',
    time: 'Oct 13, 2023',
    title: 'Vitamin D: benefits, deficiency, sources, and dosage',
    image: news4,
    author: {
      name: 'Jenny Wilson',
      avatar: avatar37,
      role: 'Ph.D. Physiology',
    },
  },
];

const News = () => {
  return (
    <section className="container py-5 mb-1 mb-md-4 mb-lg-5">
      <h2 className="h1 text-center pt-1 pb-4 mb-1 mb-lg-3">Latest News &amp; Healthy Tips</h2>

      <div className="position-relative px-xl-5">
        <button
          type="button"
          id="prev-news"
          className="btn btn-prev btn-icon btn-sm position-absolute top-50 start-0 translate-middle-y d-none d-xl-inline-flex"
          aria-label="Previous"
        >
          <IconifyIcon icon="bx:chevron-left" fontSize={20} />
        </button>
        <button
          type="button"
          id="next-news"
          className="btn btn-next btn-icon btn-sm position-absolute top-50 end-0 translate-middle-y d-none d-xl-inline-flex"
          aria-label="Next"
        >
          <IconifyIcon icon="bx:chevron-right" fontSize={20} />
        </button>

        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{ prevEl: '#prev-news', nextEl: '#next-news' }}
          loop
          spaceBetween={24}
          breakpoints={{
            500: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          slidesPerView={1}
          className="px-xl-2"
        >
          {newsData.map(item => (
            <SwiperSlide key={item.id} className="h-auto pb-3">
              <article className="card h-100 border-0 shadow-sm mx-2">
                <div className="position-relative">
                  <Link
                    to="#"
                    className="position-absolute top-0 start-0 w-100 h-100"
                    aria-label="Read more"
                  ></Link>
                  <OverlayTrigger
                    placement="left"
                    overlay={<Tooltip id="tooltip-read-later">Read later</Tooltip>}
                  >
                    <Link
                      to="#"
                      className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      aria-label="Read later"
                    >
                      <IconifyIcon icon="bx:bookmark" fontSize={18} />
                    </Link>
                  </OverlayTrigger>
                  <img src={item.image} className="card-img-top" alt={item.title} />
                </div>
                <div className="card-body pb-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link
                      to="#"
                      className="badge fs-sm text-nav bg-secondary text-decoration-none"
                    >
                      {item.category}
                    </Link>
                    <span className="fs-sm text-muted">{item.time}</span>
                  </div>
                  <h3 className="h5 mb-0">
                    <Link to="#">{item.title}</Link>
                  </h3>
                </div>
                <CardFooter className="py-4">
                  <Link to="#" className="d-flex align-items-center text-decoration-none">
                    <img
                      src={item.author.avatar}
                      className="rounded"
                      width="48"
                      alt={item.author.name}
                    />
                    <div className="ps-3">
                      <h6 className="fs-base fw-semibold mb-0">{item.author.name}</h6>
                      <span className="fs-sm text-muted">{item.author.role}</span>
                    </div>
                  </Link>
                </CardFooter>
              </article>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative pt-4 mt-1"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default News;
