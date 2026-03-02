import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';

import cover02 from '@/assets/img/blog/podcasts/02.jpg';
import cover03 from '@/assets/img/blog/podcasts/03.jpg';
import cover04 from '@/assets/img/blog/podcasts/04.jpg';
import cover05 from '@/assets/img/blog/podcasts/05.jpg';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

type Podcast = {
  id: number;
  category: string;
  timeAgo: string;
  title: string;
  duration: string;
  avatar: string;
  cover: string;
  likes: number;
  comments: number;
  shares: number;
  link: string;
};

const podcasts: Podcast[] = [
  {
    id: 1,
    category: 'Digital',
    timeAgo: '2 hours ago',
    title: 'IOS and the Changing landscape of Data Privacy',
    duration: '0:25:43',
    avatar: avatar06,
    cover: cover04,
    likes: 4,
    comments: 2,
    shares: 0,
    link: '/blog-podcast',
  },
  {
    id: 2,
    category: 'Processes & Tools',
    timeAgo: '10 hours ago',
    title: 'Behavioral Science and Digital Marketing',
    duration: '1:12:05',
    avatar: avatar05,
    cover: cover05,
    likes: 9,
    comments: 5,
    shares: 6,
    link: '/blog-podcast',
  },
  {
    id: 3,
    category: 'Technology',
    timeAgo: '10 hours ago',
    title: 'Why You Should Care About Your Competitors',
    duration: '0:32:15',
    avatar: avatar01,
    cover: cover02,
    likes: 45,
    comments: 12,
    shares: 6,
    link: '/blog-podcast',
  },
  {
    id: 4,
    category: 'Marketing',
    timeAgo: '1 day ago',
    title: 'Tips for Marketing Managers: How to Maximise Leads',
    duration: '0:48:02',
    avatar: avatar04,
    cover: cover03,
    likes: 10,
    comments: 4,
    shares: 6,
    link: '/blog-podcast',
  },
];

const Podcasts = () => {
  return (
    <section className="container mb-5 pt-3 pb-lg-5">
      <Row>
        <Col xl={3}>
          <div className="d-xl-block d-flex align-items-center justify-content-between mb-xl-0 mb-4 pb-xl-0 pb-3">
            <h2 className="h1 mb-xl-4 mb-0 pb-xl-3">Latest Podcasts</h2>
            <Link to="#" className="btn btn-primary ms-xl-0 ms-4">
              All podcasts
            </Link>
          </div>
        </Col>

        <Col xl={9}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1000: { slidesPerView: 3 },
            }}
            className="pb-4"
          >
            {podcasts.map(podcast => (
              <SwiperSlide key={podcast.id} className="h-auto pb-3">
                <article>
                  <div className="d-block position-relative rounded-3 mb-3">
                    <Link
                      to="#"
                      className="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      title="Listen later"
                      aria-label="Read later"
                    >
                      <IconifyIcon icon="bx:bookmark" />
                    </Link>

                    <img
                      src={podcast.avatar}
                      alt={podcast.title}
                      width={48}
                      height={48}
                      className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3"
                    />

                    <span className="badge bg-dark position-absolute bottom-0 end-0 zindex-2 mb-3 me-3">
                      {podcast.duration}
                    </span>

                    <Link
                      to={podcast.link}
                      className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"
                      aria-label="Listen podcast"
                    ></Link>

                    <img src={podcast.cover} alt={podcast.title} className="rounded-3" />
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <Link
                      to="#"
                      className="badge fs-sm text-nav bg-secondary text-decoration-none"
                    >
                      {podcast.category}
                    </Link>
                    <span className="fs-sm text-muted border-start ps-3 ms-3">
                      {podcast.timeAgo}
                    </span>
                  </div>

                  <h3 className="h5">
                    <Link to={podcast.link}>{podcast.title}</Link>
                  </h3>

                  <div className="d-flex align-items-center text-muted">
                    <div className="d-flex align-items-center me-3">
                      <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                      <span className="fs-sm">{podcast.likes}</span>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                      <span className="fs-sm">{podcast.comments}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                      <span className="fs-sm">{podcast.shares}</span>
                    </div>
                  </div>

                  <Link to={podcast.link} className="btn btn-link px-0 mt-3">
                    <IconifyIcon icon="bx:play-circle" className="fs-lg me-2" />
                    Listen now
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </section>
  );
};

export default Podcasts;
