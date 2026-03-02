import blog1 from '@/assets/img/blog/01.jpg';
import blog5 from '@/assets/img/blog/05.jpg';
import blog6 from '@/assets/img/blog/06.jpg';
import blog9 from '@/assets/img/blog/09.jpg';
import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar02 from '@/assets/img/avatar/02.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import { Link } from 'react-router';
import { CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

type postType = {
  id: number;
  category: string;
  date: string;
  title: string;
  desc: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  shares: number;
};

const posts: postType[] = [
  {
    id: 1,
    category: 'Processes & Tools',
    date: 'Sep 3, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    desc: 'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel.',
    image: blog1,
    author: { name: 'Jerome Bell', avatar: avatar01 },
    likes: 8,
    comments: 7,
    shares: 4,
  },
  {
    id: 2,
    category: 'Startups',
    date: 'Sep 10, 2023',
    title: 'How Agile is Your Forecasting Process?',
    desc: 'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum.',
    image: blog6,
    author: { name: 'Albert Flores', avatar: avatar05 },
    likes: 3,
    comments: 6,
    shares: 0,
  },
  {
    id: 3,
    category: 'Digital',
    date: 'Oct 9, 2023',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    desc: 'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat.',
    image: blog5,
    author: { name: 'Jane Cooper', avatar: avatar04 },
    likes: 5,
    comments: 0,
    shares: 2,
  },
  {
    id: 4,
    category: 'Strategy',
    date: 'Sep 3, 2023',
    title: 'This Long-Awaited Technology May Finally Change the World',
    desc: 'Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a vitae feugiat in sit habitant integer.',
    image: blog9,
    author: { name: 'Ralph Edwards', avatar: avatar02 },
    likes: 8,
    comments: 7,
    shares: 4,
  },
];

const topics = [
  'All Topics',
  'Digital',
  'Marketing',
  'Success Stories',
  'Startups',
  'Events',
  'Technology',
  'Business',
  'Processes & Tools',
];

const Posts = () => {
  return (
    <section className="container mb-5 pt-5 pb-lg-5">
      <h2 className="h1 mb-4 pt-lg-2 pb-lg-3 py-1 text-center">Latest Posts</h2>

      <ul className="nav nav-tabs justify-content-center mb-lg-5 mb-4 pb-lg-2">
        {topics.map((topic, i) => (
          <li className="nav-item" key={i}>
            <Link to="#" className={`nav-link ${i === 0 ? 'active' : ''}`}>
              {topic}
            </Link>
          </li>
        ))}
      </ul>

      <div className="pb-3">
        {posts.map(post => (
          <article key={post.id} className="card border-0 shadow-sm overflow-hidden mb-4">
            <Row className="g-0">
              <Col
                sm={4}
                className="position-relative bg-repeat-0 bg-size-cover"
                style={{
                  backgroundImage: `url(${post.image})`,
                  minHeight: '15rem',
                }}
              >
                <Link
                  to="/blog-single"
                  className="position-absolute top-0 start-0 w-100 h-100"
                  aria-label="Read more"
                ></Link>
                <Link
                  to="#"
                  className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                  title="Read later"
                >
                  <IconifyIcon icon="bx:bookmark" fontSize={18} />
                </Link>
              </Col>
              <Col sm={8}>
                <CardBody>
                  <div className="d-flex align-items-center mb-3">
                    <Link
                      to="#"
                      className="badge fs-sm text-nav bg-secondary text-decoration-none"
                    >
                      {post.category}
                    </Link>
                    <span className="fs-sm text-muted border-start ps-3 ms-3">{post.date}</span>
                  </div>
                  <h3 className="h4">
                    <Link to="/blog-single">{post.title}</Link>
                  </h3>
                  <p>{post.desc}</p>
                  <hr className="my-4" />
                  <div className="d-flex align-items-center justify-content-between">
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
                    >
                      <img
                        src={post.author.avatar}
                        className="rounded-circle me-3"
                        width={48}
                        height={48}
                        alt={post.author.name}
                      />
                      {post.author.name}
                    </Link>
                    <div className="d-flex align-items-center text-muted">
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                        <span className="fs-sm">{post.likes}</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                        <span className="fs-sm">{post.comments}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                        <span className="fs-sm">{post.shares}</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Col>
            </Row>
          </article>
        ))}
      </div>

      <Link to="#" className="btn btn-lg btn-outline-primary w-100">
        <IconifyIcon icon="bx:down-arrow-alt" className="me-2 lh-1 lead" />
        Show more
      </Link>
    </section>
  );
};

export default Posts;
