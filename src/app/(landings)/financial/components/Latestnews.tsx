import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import news01 from '@/assets/img/landing/financial/news/01.jpg';
import news02 from '@/assets/img/landing/financial/news/02.jpg';
import news03 from '@/assets/img/landing/financial/news/03.jpg';
import news04 from '@/assets/img/landing/financial/news/04.jpg';

import avatar40 from '@/assets/img/avatar/40.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import avatar41 from '@/assets/img/avatar/41.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, CardFooter, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';

type NewsItem = {
  id: number;
  category: string;
  time: string;
  title: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'Business',
    time: '12 hours ago',
    title: 'How agile is your forecasting process?',
    image: news01,
    author: {
      name: 'Marvin McKinney',
      role: 'Deputy Director, Capital Department',
      avatar: avatar40,
    },
  },
  {
    id: 2,
    category: 'Enterprise',
    time: '1 day ago',
    title: 'A future with high public debt: low-for-long is not low forever',
    image: news02,
    author: {
      name: 'Jenny Wilson',
      role: 'Financial Sector Expert',
      avatar: avatar04,
    },
  },
  {
    id: 3,
    category: 'Finance',
    time: 'Nov 24, 2023',
    title: 'Understanding the rise in long-term rates',
    image: news03,
    author: {
      name: 'Albert Flores',
      role: 'Financial Counsellor and Director',
      avatar: avatar05,
    },
  },
  {
    id: 4,
    category: 'Ticks & Trips',
    time: 'Oct 13, 2023',
    title: 'Stocks making the biggest moves after hours',
    image: news04,
    author: {
      name: 'Jerome Bell',
      role: 'Business Analyst',
      avatar: avatar41,
    },
  },
];

const Latestnews = () => {
  return (
    <section className="bg-secondary py-5">
      <Container className="py-2 py-md-4 py-lg-5">
        <h2 className="h1 text-center pb-4 mb-1 mb-lg-3">Latest News</h2>
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

          <div className="px-xl-2">
            <Swiper
              modules={[Navigation, Pagination]}
              loop={true}
              navigation={{ prevEl: '#prev-news', nextEl: '#next-news' }}
              breakpoints={{
                500: { slidesPerView: 2, spaceBetween: 16 },
                1000: { slidesPerView: 3, spaceBetween: 24 },
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
              }}
              slidesPerView={1}
              spaceBetween={16}
              className="mx-n2"
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
                          <IconifyIcon icon="bx:bookmark" fontSize={20} />
                        </Link>
                      </OverlayTrigger>
                      <img src={item.image} alt={item.title} className="card-img-top" />
                    </div>

                    <CardBody className="pb-4">
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
                    </CardBody>

                    <CardFooter className="py-4">
                      <Link to="#" className="d-flex align-items-center text-decoration-none">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          width={48}
                          height={48}
                          className="rounded-circle"
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
              <div className="swiper-pagination position-relative pt-2 mt-4"></div>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Latestnews;
