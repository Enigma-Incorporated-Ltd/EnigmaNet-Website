import blog01 from '@/assets/img/blog/01.jpg';
import blog02 from '@/assets/img/blog/02.jpg';
import blog03 from '@/assets/img/blog/03.jpg';
import blog04 from '@/assets/img/blog/04.jpg';
import blog05 from '@/assets/img/blog/05.jpg';
import blog06 from '@/assets/img/blog/06.jpg';
import blog07 from '@/assets/img/blog/07.jpg';
import blog08 from '@/assets/img/blog/08.jpg';
import blog09 from '@/assets/img/blog/09.jpg';

import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar02 from '@/assets/img/avatar/02.jpg';
import avatar03 from '@/assets/img/avatar/03.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import { CardBody, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

type Post = {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  author: string;
  avatar: string;
};

const posts: Post[] = [
  {
    id: 1,
    image: blog01,
    category: 'Business',
    date: 'May 19, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    author: 'Jerome Bell',
    avatar: avatar01,
  },
  {
    id: 2,
    image: blog02,
    category: 'Digital',
    date: 'Sep 28, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    author: 'Jerome Bell',
    avatar: avatar01,
  },
  {
    id: 3,
    image: blog03,
    category: 'Business',
    date: 'Sep 16, 2023',
    title: 'This Week in Search: New Limits and Exciting Features',
    author: 'Ralph Edwards',
    avatar: avatar02,
  },
  {
    id: 4,
    image: blog04,
    category: 'Processes & Tools',
    date: '12 hours ago',
    title: 'Five Effective Lead Generation Techniques For Your Business',
    author: 'Esther Howard',
    avatar: avatar03,
  },
  {
    id: 5,
    image: blog05,
    category: 'Digital',
    date: 'Oct 9, 2023',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    author: 'Jane Cooper',
    avatar: avatar04,
  },
  {
    id: 6,
    image: blog06,
    category: 'Marketing',
    date: 'Apr 2, 2023',
    title: 'How Agile is Your Forecasting Process?',
    author: 'Albert Flores',
    avatar: avatar05,
  },
  {
    id: 7,
    image: blog07,
    category: 'Processes & Tools',
    date: 'Sep 3, 2023',
    title: 'Your Guide to Optimising A JavaScript-enabled Website',
    author: 'Ralph Edwards',
    avatar: avatar02,
  },
  {
    id: 8,
    image: blog08,
    category: 'Processes & Tools',
    date: 'Sep 10, 2023',
    title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
    author: 'Esther Howard',
    avatar: avatar03,
  },
  {
    id: 9,
    image: blog09,
    category: 'Strategy',
    date: 'Sep 16, 2023',
    title: 'This Long-Awaited Technology May Finally Change the World',
    author: 'Ralph Edwards',
    avatar: avatar02,
  },
];

const GridPost = () => {
  return (
    <Row className="row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
      {posts.map(post => (
        <Col className="pb-3" key={post.id}>
          <article className="card border-0 shadow-sm h-100">
            <div className="position-relative">
              <Link
                to="/blog-single"
                className="position-absolute top-0 start-0 w-100 h-100"
                aria-label="Read more"
              ></Link>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip id="tooltip-left">Read later</Tooltip>}
              >
                <Link
                  to="#"
                  className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                  aria-label="Read later"
                >
                  <IconifyIcon icon="bx:bookmark" fontSize={18} />
                </Link>
              </OverlayTrigger>
              <img src={post.image} className="card-img-top" alt={post.title} />
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
                  src={post.avatar}
                  className="rounded-circle me-3"
                  width="48"
                  alt={post.author}
                />
                {post.author}
              </Link>
            </div>
          </article>
        </Col>
      ))}
    </Row>
  );
};

export default GridPost;
