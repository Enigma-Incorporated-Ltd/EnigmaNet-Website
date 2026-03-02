import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import avatar03 from '@/assets/img/avatar/03.jpg';
import avatar09 from '@/assets/img/avatar/09.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';


type BlogType = {
  id: number;
  date: string;
  title: string;
  desc: string;
  author: string;
  avatar: string;
  likes: number;
  comments: number;
  shares: number;
};

const blogs: BlogType[] = [
  {
    id: 1,
    date: 'Sep 10, 2023',
    title: "A Study on Smartwatch Design Qualities and People's Preferences",
    desc: 'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
    author: 'Esther Howard',
    avatar: avatar03,
    likes: 8,
    comments: 7,
    shares: 4,
  },
  {
    id: 2,
    date: 'Sep 10, 2023',
    title: "A Study on Smartwatch Design Qualities and People's Preferences",
    desc: 'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
    author: 'Esther Howard',
    avatar: avatar09,
    likes: 8,
    comments: 7,
    shares: 4,
  },
];

const Blog = () => {
  return (
    <div className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <h2 className="h1 mb-md-4 mb-3 pb-lg-3 pb-2 text-center">Latest From Our Blog</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 24 },
          768: { slidesPerView: 2, spaceBetween: 24 },
        }}
        className="mb-lg-5 mb-4 pb-lg-0 pb-md-2"
      >
        {blogs.map(blog => (
          <SwiperSlide key={blog.id} className="h-auto">
            <article className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-4">
                  <span className="badge fs-sm bg-secondary">{blog.date}</span>
                </div>
                <h3 className="h4">
                  <Link to="#" className="text-decoration-none text-dark">
                    {blog.title}
                  </Link>
                </h3>
                <p className="mb-4">{blog.desc}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <Link
                    to="#"
                    className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
                  >
                    <img
                      src={blog.avatar}
                      width={48}
                      height={48}
                      alt={blog.author}
                      className="rounded-circle me-3"
                    />
                    {blog.author}
                  </Link>
                  <div className="d-flex align-items-center text-muted">
                    <div className="d-flex align-items-center me-3">
                      <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                      <span className="fs-sm">{blog.likes}</span>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                      <span className="fs-sm">{blog.comments}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                      <span className="fs-sm">{blog.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mb-xl-3 text-center">
        <Link to="#" className="btn btn-lg btn-outline-primary">
          More blog posts
        </Link>
      </div>
    </div>
  );
};

export default Blog;
