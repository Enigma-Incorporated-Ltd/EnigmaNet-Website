import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';

import prodcast02 from '@/assets/img/blog/podcasts/02.jpg';
import prodcast03 from '@/assets/img/blog/podcasts/03.jpg';
import prodcast04 from '@/assets/img/blog/podcasts/04.jpg';
import prodcast05 from '@/assets/img/blog/podcasts/05.jpg';

import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type Podcast = {
  id: number;
  author: string;
  authorImg: string;
  duration: string;
  category: string;
  timeAgo: string;
  title: string;
  coverImg: string;
  likes: number;
  comments: number;
  shares: number;
  link: string;
};

const podcasts: Podcast[] = [
  {
    id: 1,
    author: 'John Doe',
    authorImg: avatar06,
    duration: '0:25:43',
    category: 'Digital',
    timeAgo: '2 hours ago',
    title: 'iOS and the Changing Landscape of Data Privacy',
    coverImg: prodcast04,
    likes: 4,
    comments: 2,
    shares: 0,
    link: '/blog-podcast',
  },
  {
    id: 2,
    author: 'Albert Flores',
    authorImg: avatar05,
    duration: '1:12:05',
    category: 'Processes & Tools',
    timeAgo: '10 hours ago',
    title: 'Behavioral Science and Digital Marketing',
    coverImg: prodcast05,
    likes: 9,
    comments: 5,
    shares: 6,
    link: '/blog-podcast',
  },
  {
    id: 3,
    author: 'Jane Smith',
    authorImg: avatar01,
    duration: '0:32:15',
    category: 'Technology',
    timeAgo: '10 hours ago',
    title: 'Why You Should Care About Your Competitors',
    coverImg: prodcast02,
    likes: 45,
    comments: 12,
    shares: 6,
    link: '/blog-podcast',
  },
  {
    id: 4,
    author: 'Mark Lee',
    authorImg: avatar04,
    duration: '0:48:02',
    category: 'Marketing',
    timeAgo: '1 day ago',
    title: 'Tips for Marketing Managers: How to Maximise Leads',
    coverImg: prodcast03,
    likes: 10,
    comments: 4,
    shares: 6,
    link: '/blog-podcast',
  },
];

const Blog = () => {
  return (
    <section className="container mb-5 pt-md-4">
      <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3">
        <h2 className="h1 mb-sm-0">Related Podcasts</h2>
        <Link to="/blog-grid-with-sidebar" className="btn btn-lg btn-outline-primary ms-4">
          All podcasts
          <IconifyIcon icon="bx:right-arrow-alt" className="ms-1 me-n1 lh-1 lead" />
        </Link>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1000: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {podcasts.map(podcast => (
          <SwiperSlide key={podcast.id} className="h-auto pb-3">
            <article>
              <div className="d-block position-relative rounded-3 mb-3">
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip id="tooltip-left">Listen later</Tooltip>}
                >
                  <Link
                    to="#"
                    className="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                    title="Listen later"
                    aria-label="Listen later"
                  >
                    <IconifyIcon icon="bx:bookmark" fontSize={18} />
                  </Link>
                </OverlayTrigger>

                <img
                  src={podcast.authorImg}
                  className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3"
                  width="48"
                  alt={podcast.author}
                />

                <span className="badge bg-dark position-absolute bottom-0 end-0 zindex-2 mb-3 me-3">
                  {podcast.duration}
                </span>

                <Link
                  to={podcast.link}
                  className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"
                  aria-label="Listen podcast"
                ></Link>

                <img src={podcast.coverImg} className="rounded-3" alt="Cover" />
              </div>

              <div className="d-flex align-items-center mb-2">
                <Link to="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">
                  {podcast.category}
                </Link>
                <span className="fs-sm text-muted border-start ps-3 ms-3">{podcast.timeAgo}</span>
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

        <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
      </Swiper>
    </section>
  );
};

export default Blog;
