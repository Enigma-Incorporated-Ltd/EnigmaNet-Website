import { CardBody, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import blog05 from '@/assets/img/blog/05.jpg';
import blog07 from '@/assets/img/blog/07.jpg';
import blog08 from '@/assets/img/blog/08.jpg';

import { Link } from 'react-router';

type BlogPost = {
  id: number;
  category: string;
  categoryHref: string;
  time: string;
  title: string;
  link: string;
  image: string;
};

const blogData: BlogPost[] = [
  {
    id: 1,
    category: 'Business',
    categoryHref: '#',
    time: '12 hours ago',
    title: 'How to check the website before releasing?',
    link: '#',
    image: blog05,
  },
  {
    id: 2,
    category: 'Digital',
    categoryHref: '#',
    time: '11 hours ago',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    link: '#',
    image: blog07,
  },
  {
    id: 3,
    category: 'Development',
    categoryHref: '#',
    time: '10 hours ago',
    title: 'Your Guide to Optimising A JavaScript-enabled Website',
    link: '#',
    image: blog08,
  },
];

const Blog = () => {
  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <Container>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="mb-xl-3 text-sm-start text-center"
        >
          {blogData.map(post => (
            <SwiperSlide key={post.id} className="h-auto">
              <article className="card h-100 border-0 bg-transparent">
                <div className="position-relative">
                  <Link
                    to={post.link}
                    className="position-absolute top-0 start-0 w-100 h-100"
                    aria-label="Read more"
                  ></Link>
                  <img
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={350}
                    className="rounded-3"
                  />
                </div>
                <CardBody className="pb-0 px-0">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link
                      to={post.categoryHref}
                      className="badge fs-sm text-nav bg-secondary text-decoration-none"
                    >
                      {post.category}
                    </Link>
                    <span className="fs-sm text-muted">{post.time}</span>
                  </div>
                  <h3 className="h5 mb-0 fw-semibold">
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                </CardBody>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
      </Container>
    </section>
  );
};

export default Blog;
