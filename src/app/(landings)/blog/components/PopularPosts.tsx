
import { Swiper, SwiperSlide } from 'swiper/react';
import blog1 from '@/assets/img/blog/01.jpg';
import blog2 from '@/assets/img/blog/02.jpg';
import blog3 from '@/assets/img/blog/03.jpg';
import blog4 from '@/assets/img/blog/04.jpg';
import blog5 from '@/assets/img/blog/05.jpg';
import blog6 from '@/assets/img/blog/06.jpg';
import blog7 from '@/assets/img/blog/07.jpg';

import avatar1 from '@/assets/img/avatar/01.jpg';
import avatar2 from '@/assets/img/avatar/02.jpg';
import avatar3 from '@/assets/img/avatar/03.jpg';
import avatar4 from '@/assets/img/avatar/04.jpg';
import avatar5 from '@/assets/img/avatar/05.jpg';
import avatar6 from '@/assets/img/avatar/06.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Button, CardBody, CardFooter, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';

type PostType = {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
  author: string;
  avatar: string;
};

const posts: PostType[] = [
  {
    id: 1,
    category: 'Web design',
    date: 'May 19, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    image: blog1,
    author: 'Annette Black',
    avatar: avatar6,
  },
  {
    id: 2,
    category: 'Digital',
    date: 'Sep 28, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    image: blog2,
    author: 'Jerome Bell',
    avatar: avatar1,
  },
  {
    id: 3,
    category: 'Business',
    date: 'Sep 16, 2023',
    title: 'This Week in Search: New Limits and Exciting Features',
    image: blog3,
    author: 'Ralph Edwards',
    avatar: avatar2,
  },
  {
    id: 4,
    category: 'Processes & Tools',
    date: '12 hours ago',
    title: 'Five Effective Lead Generation Techniques For Your Business',
    image: blog4,
    author: 'Esther Howard',
    avatar: avatar3,
  },
  {
    id: 5,
    category: 'Digital',
    date: 'Oct 9, 2023',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    image: blog5,
    author: 'Jane Cooper',
    avatar: avatar4,
  },
  {
    id: 6,
    category: 'Marketing',
    date: 'Apr 2, 2023',
    title: 'How Agile is Your Forecasting Process?',
    image: blog6,
    author: 'Albert Flores',
    avatar: avatar5,
  },
  {
    id: 7,
    category: 'Processes & Tools',
    date: 'Sep 3, 2023',
    title: 'Your Guide to Optimising A JavaScript-enabled Website',
    image: blog7,
    author: 'Ralph Edwards',
    avatar: avatar2,
  },
];

const PopularPosts = () => {
  return (
    <section className="bg-secondary py-5 mb-lg-5">
      <Container className="pt-2 pt-lg-4 pt-xl-5">
        <h2 className="h1 mb-4 pb-lg-3 pt-lg-1 pb-1 text-center">Popular Posts</h2>
      </Container>

      <div className="pb-lg-5 mb-xl-3">
        <Swiper
          // modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {posts.map(post => (
            <SwiperSlide key={post.id} className="h-auto px-2">
              <article className="card border-0 h-100 mx-1">
                <div className="position-relative">
                  <Link
                    to="/blog-single"
                    className="position-absolute top-0 start-0 w-100 h-100"
                    aria-label="Read more"
                  ></Link>
                  <OverlayTrigger
                    placement="left"
                    overlay={<Tooltip id="tooltip-readlater">Read later</Tooltip>}
                  >
                    <Button
                      variant="light"
                      size="sm"
                      className="btn-icon bg-white border-white rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                      aria-label="Read later"
                    >
                      <IconifyIcon icon="bx:bookmark" fontSize={18} />
                    </Button>
                  </OverlayTrigger>s
                  <img src={post.image} alt={post.title} className="card-img-top" />
                </div>

                <CardBody className="pb-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link
                      to="#"
                      className="badge fs-sm text-nav bg-secondary text-decoration-none"
                    >
                      {post.category}
                    </Link>
                    <span className="fs-sm text-muted">{post.date}</span>
                  </div>
                  <h3 className="h5 mb-0">
                    <Link to="/blog-single">{post.title}</Link>
                  </h3>
                </CardBody>

                <CardFooter className="py-4">
                  <Link
                    to="#"
                    className="d-flex align-items-center fw-bold text-dark text-decoration-none"
                  >
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="rounded-circle me-3"
                      width={48}
                      height={48}
                    />
                    {post.author}
                  </Link>
                </CardFooter>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination position-relative pt-1 pt-sm-3 mt-5 d-xl-none d-flex"></div>
      </div>
    </section>
  );
};

export default PopularPosts;
