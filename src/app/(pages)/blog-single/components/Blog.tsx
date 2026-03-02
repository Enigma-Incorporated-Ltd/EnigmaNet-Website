import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import blog01 from '@/assets/img/blog/01.jpg';
import blog03 from '@/assets/img/blog/03.jpg';
import blog06 from '@/assets/img/blog/06.jpg';
import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar02 from '@/assets/img/avatar/02.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, OverlayTrigger, Tooltip } from 'react-bootstrap';

type BlogPost = {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
  author: string;
  authorImage: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Business',
    date: 'May 19, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    image: blog01,
    author: 'Jerome Bell',
    authorImage: avatar01,
  },
  {
    id: 2,
    category: 'Marketing',
    date: 'Apr 2, 2023',
    title: 'How Agile is Your Forecasting Process?',
    image: blog06,
    author: 'Albert Flores',
    authorImage: avatar05,
  },
  {
    id: 3,
    category: 'Business',
    date: 'Sep 16, 2023',
    title: 'This Week in Search: New Limits and Exciting Features',
    image: blog03,
    author: 'Ralph Edwards',
    authorImage: avatar02,
  },
];

const Blog: React.FC = () => {
  return (
    <section className="container mb-5 pt-md-4">
      <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3">
        <h2 className="h1 mb-sm-0">Related Articles</h2>
        <Link to="/blog-list-with-sidebar" className="btn btn-lg btn-outline-primary ms-4">
          All posts
          <IconifyIcon icon="bx:right-arrow-alt" className="ms-1 me-n1 lh-1 lead" />
        </Link>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={8}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        className="mx-n2"
      >
        {blogPosts.map(post => (
          <SwiperSlide key={post.id} className="h-auto pb-3">
            <article className="card border-0 shadow-sm h-100 mx-2">
              <div className="position-relative">
                <Link
                  to="/blog-single"
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
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Read later"
                    aria-label="Read later"
                  >
                    <IconifyIcon icon="bx:bookmark" fontSize={18} />
                  </Link>
                </OverlayTrigger>
                <img src={post.image} className="card-img-top" alt="Blog image" />
              </div>
              <CardBody className="pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <Link to="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">
                    {post.category}
                  </Link>
                  <span className="fs-sm text-muted">{post.date}</span>
                </div>
                <h3 className="h5 mb-0">
                  <Link to="/blog-single">{post.title}</Link>
                </h3>
              </CardBody>
              <div className="card-footer py-4">
                <Link
                  to="#"
                  className="d-flex align-items-center fw-bold text-dark text-decoration-none"
                >
                  <img
                    src={post.authorImage}
                    className="rounded-circle me-3"
                    width="48"
                    alt="Author"
                  />
                  {post.author}
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
      </Swiper>
    </section>
  );
};

export default Blog;
