import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import newsImg1 from '@/assets/img/landing/medical/news/01.jpg';
import newsImg2 from '@/assets/img/landing/medical/news/02.jpg';
import newsImg3 from '@/assets/img/landing/medical/news/03.jpg';
import newsImg4 from '@/assets/img/landing/medical/news/04.jpg';
import avatar36 from '@/assets/img/avatar/36.jpg';
import avatar37 from '@/assets/img/avatar/37.jpg';
import avatar38 from '@/assets/img/avatar/38.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { CardBody, CardFooter } from 'react-bootstrap';

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
    category: 'Diseases',
    time: '12 hours ago',
    title: 'Updates on COVID-19 vaccination efforts in your area',
    image: newsImg1,
    author: { name: 'Ralph Edwards', role: 'MBBS, MD Gynaecology', avatar: avatar36 },
  },
  {
    id: 2,
    category: 'Healthy Tips',
    time: '1 day ago',
    title: 'New drug to halt dementia after multiple head injuries',
    image: newsImg2,
    author: { name: 'Jenny Wilson', role: 'Ph.D. Physiology', avatar: avatar37 },
  },
  {
    id: 3,
    category: 'Psychology',
    time: 'Nov 24, 2023',
    title: 'Empowering women to make their health a priority',
    image: newsImg3,
    author: { name: 'Albert Flores', role: 'M.Sc. Clinical Neuroscience', avatar: avatar38 },
  },
  {
    id: 4,
    category: 'Health',
    time: 'Oct 13, 2023',
    title: 'Vitamin D: benefits, deficiency, sources, and dosage',
    image: newsImg4,
    author: { name: 'Jenny Wilson', role: 'Ph.D. Physiology', avatar: avatar37 },
  },
];

const LatestNews = () => {
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

        <div className="px-xl-2">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            loop
            navigation={{
              nextEl: '#next-news',
              prevEl: '#prev-news',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              500: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
            className="mx-n2"
          >
            {newsData.map(news => (
              <SwiperSlide key={news.id} className="h-auto pb-3">
                <article className="card h-100 border-0 shadow-sm mx-2">
                  <div className="position-relative">
                    <Link
                      to="#"
                      className="position-absolute top-0 start-0 w-100 h-100"
                      aria-label="Read more"
                    ></Link>
                    <Link
                      to="#"
                      className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Read later"
                      aria-label="Read later"
                    >
                      <IconifyIcon icon="bx:bookmark" />
                    </Link>
                    <img src={news.image} alt={news.title} className="card-img-top" />
                  </div>
                  <CardBody className="pb-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <Link
                        to="#"
                        className="badge fs-sm text-nav bg-secondary text-decoration-none"
                      >
                        {news.category}
                      </Link>
                      <span className="fs-sm text-muted">{news.time}</span>
                    </div>
                    <h3 className="h5 mb-0">
                      <Link to="#">{news.title}</Link>
                    </h3>
                  </CardBody>
                  <CardFooter className="py-4">
                    <Link to="#" className="d-flex align-items-center text-decoration-none">
                      <img
                        src={news.author.avatar}
                        className="rounded"
                        width={48}
                        height={48}
                        alt={news.author.name}
                      />
                      <div className="ps-3">
                        <h6 className="fs-base fw-semibold mb-0">{news.author.name}</h6>
                        <span className="fs-sm text-muted">{news.author.role}</span>
                      </div>
                    </Link>
                  </CardFooter>
                </article>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default LatestNews;
