import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { CardBody, CardFooter, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
;

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Blog = {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
};

const blogs: Blog[] = [
  {
    id: 1,
    category: 'Tech',
    date: '1 day ago',
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.',
    likes: 2,
    comments: 0,
    shares: 3,
  },
  {
    id: 2,
    category: 'Strategy',
    date: '12 hours ago',
    title: 'Mobile App Generates Data for the Energy Management',
    description:
      'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in.',
    likes: 8,
    comments: 4,
    shares: 2,
  },
  {
    id: 3,
    category: 'Software',
    date: 'May 24, 2023',
    title: 'What the Software Stock Slump Means for the Market',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    likes: 6,
    comments: 1,
    shares: 5,
  },
  {
    id: 4,
    category: 'Startups',
    date: 'Sep 3, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    description:
      'Totam, soluta placeat hic adipisci reprehenderit iusto est nulla dolorum doloremque inventore suscipit consequuntur distinctio id.',
    likes: 8,
    comments: 7,
    shares: 3,
  },
  {
    id: 5,
    category: 'Technology',
    date: 'Aug 19, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    description:
      'Quaerat quos assumenda numquam dolorem, repellendus est, itaque sint et odio perferendis laudantium laboriosam.',
    likes: 5,
    comments: 3,
    shares: 9,
  },
];

const PageContent = () => {
  const [search, setSearch] = useState('');

  const filteredBlogs = blogs.filter(
    blog =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container mt-4 pt-lg-2 pb-4">
      <Row className="gy-4 align-items-end mb-2 pb-md-3">
        <Col lg={8} md={6}>
          <h1 className="mb-0">Blog Simple Feed</h1>
        </Col>
        <Col lg={4} md={6}>
          <form className="input-group" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search the blog..."
              className="form-control form-control-lg rounded-3"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-icon btn-lg btn-primary rounded-3 ms-3"
              aria-label="Search"
            >
              <IconifyIcon icon="bx:search" />
            </button>
          </form>
        </Col>
      </Row>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={8}
        breakpoints={{
          0: { slidesPerView: 1 },
          560: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        className="mx-n2"
      >
        {filteredBlogs.map(blog => (
          <SwiperSlide key={blog.id} className="h-auto py-3">
            <article className="card p-md-3 p-2 border-0 shadow-sm card-hover-primary h-100 mx-2">
              <CardBody className="pb-0">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <Link
                    to="#"
                    className="badge fs-sm text-nav bg-secondary text-decoration-none position-relative zindex-2"
                  >
                    {blog.category}
                  </Link>
                  <span className="fs-sm text-muted">{blog.date}</span>
                </div>
                <h3 className="h4">
                  <Link to="/blog-single" className="stretched-link">
                    {blog.title}
                  </Link>
                </h3>
                <p className="mb-0">{blog.description}</p>
              </CardBody>
              <CardFooter className="d-flex align-items-center py-4 text-muted border-top-0">
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
              </CardFooter>
            </article>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
      </Swiper>
    </section>
  );
};

export default PageContent;
