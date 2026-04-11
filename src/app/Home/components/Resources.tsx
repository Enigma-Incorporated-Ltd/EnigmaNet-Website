import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import avatar40 from '@/assets/img/avatar/40.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, Container } from 'react-bootstrap';
import { Link } from 'react-router';
import PremiumButton from '@/components/ui/PremiumButton';

type NewsItem = {
  id: number;
  category: string[];
  time: string;
  title: string;
  image: string;
  des?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

const newsData: NewsItem[] = [
  {
    id: 1,
    category: ['White Paper', 'AI Infrastructure'],
    time: '12 hours ago',
    des: 'Consistent network throughput is becoming the critical factor for AI systems processing massive datasets efficiently.',
    title: 'The AI Data Bottleneck: Why Predictable Networking Matters More Than Peak Bandwidth',
    image:
      'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3986a40e90480ac0fe985_AdobeStock_930716590.jpeg',
    author: {
      name: 'Marvin McKinney',
      role: 'Deputy Director, Capital Department',
      avatar: avatar40,
    },
  },
  {
    id: 2,
    category: ['Enterprise Networking'],
    time: '1 day ago',
    title: 'MPLS vs APN: A Cost and Performance Comparison for Distributed Organisations',
    image:
      'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3986a8f48ec50742b65b9_AdobeStock_326629053.jpeg',
    des: 'Breaking down the real-world cost and performance trade-offs between MPLS and APN connectivity.',
    author: {
      name: 'Jenny Wilson',
      role: 'Financial Sector Expert',
      avatar: avatar04,
    },
  },
  {
    id: 3,
    category: ['Datasheet'],
    time: 'Nov 24, 2023',
    title: 'EnigmaNet Platform Overview — Networking, Storage & Compute',
    image:
      'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3986a2cffd22fa9e2c121_AdobeStock_599930736.jpeg',
    des: 'A unified platform delivering enterprise networking, scalable storage and high-performance compute in one solution.',
    author: {
      name: 'Albert Flores',
      role: 'Financial Counsellor and Director',
      avatar: avatar05,
    },
  },
];

const Resources = () => {
  return (
    <section className=" py-5">
      <Container className="py-2 py-md-4 py-lg-5">
        <h2 className="h3 text-center text-uppercase text-warning  mb-1 mb-lg-3">Resources</h2>
        <h2 className="h1 text-center pb-4 mb-1 mb-lg-3">
          Insights and guides for data-heavy infrastructure
        </h2>
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

          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
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

                      {/* <OverlayTrigger
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
                      </OverlayTrigger> */}
                      <img
                        src={item.image}
                        alt={item.title}
                        height={500}
                        className="card-img-top"
                        style={{
                          height: '250px',
                          opacity: 0.85,
                          objectFit: 'cover',
                        }}
                      />
                    </div>

                    <CardBody className="pb-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex shadow gap-2">
                          {item.category.map((cat, index) => (
                            <Link
                              key={index}
                              to="#"
                              className="badge fs-base  shadow p-2 fs-sm text-nav bg-warning text-decoration-none"
                              style={{
                                fontWeight: '700',
                              }}
                            >
                              {cat}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <h3 className="h5 mb-0">
                        <Link to="#">{item.title}</Link>
                      </h3>
                      <p className="mt-2 text-muted">{item.des}</p>
                    </CardBody>
                  </article>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination position-relative pt-2 mt-4"></div>
            </Swiper>
          </div>
        </div>
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
          <PremiumButton label="Resources" variant="gold" className="btn-lg" href="/" />
        </div>
      </Container>
    </section>
  );
};

export default Resources;
