import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar02 from '@/assets/img/avatar/02.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import blog01 from '@/assets/img/blog/01.jpg';
import blog02 from '@/assets/img/blog/02.jpg';
import blog03 from '@/assets/img/blog/03.jpg';
import blog05 from '@/assets/img/blog/05.jpg';
import blog06 from '@/assets/img/blog/06.jpg';
import blog09 from '@/assets/img/blog/09.jpg';

import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

type Blog = {
  id: number;
  category: string;
  categorySlug: string;
  date: string;
  title: string;
  description: string;
  image: string;
  author: string;
  authorImg: string;
  likes: number;
  comments: number;
  shares: number;
};

const blogs: Blog[] = [
  {
    id: 1,
    category: 'Processes & Tools',
    categorySlug: 'processes-and-tools',
    date: 'Sep 3, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    description:
      'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
    image: blog01,
    author: 'Jerome Bell',
    authorImg: avatar01,
    likes: 8,
    comments: 7,
    shares: 4,
  },
  {
    id: 2,
    category: 'Startups',
    categorySlug: 'startups',
    date: 'Sep 10, 2023',
    title: 'How Agile is Your Forecasting Process?',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.',
    image: blog06,
    author: 'Albert Flores',
    authorImg: avatar05,
    likes: 3,
    comments: 6,
    shares: 0,
  },
  {
    id: 3,
    category: 'Digital',
    categorySlug: 'digital',
    date: 'Oct 9, 2023',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    image: blog05,
    author: 'Jane Cooper',
    authorImg: avatar04,
    likes: 5,
    comments: 0,
    shares: 2,
  },
  {
    id: 4,
    category: 'Strategy',
    categorySlug: 'strategy',
    date: 'Sep 3, 2023',
    title: 'This Long-Awaited Technology May Finally Change the World',
    description:
      'Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a vitae feugiat in sit habitant integer. Cursus et at pulvinar sed neque vitae. Aliquam vitae hac phasellus purus lectus facilisi. Vitae vel ac quam.',
    image: blog09,
    author: 'Ralph Edwards',
    authorImg: avatar02,
    likes: 8,
    comments: 7,
    shares: 4,
  },
  {
    id: 5,
    category: 'Business',
    categorySlug: 'business',
    date: 'Sep 16, 2023',
    title: 'This Week in Search: New Limits and Exciting Features',
    description:
      'Aliquet donec cras amet orci in in neque. Ut sed diam quis consectetur purus lorem eu, sit. Aliquam eget arcu sed urna feugiat. In integer nisl at dui malesuada. Diam pellentesque lobortis elementum lacus at in lectus.',
    image: blog03,
    author: 'Ralph Edwards',
    authorImg: avatar02,
    likes: 5,
    comments: 8,
    shares: 4,
  },
  {
    id: 6,
    category: 'Digital',
    categorySlug: 'digital',
    date: 'Aug 19, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    description:
      'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique. Adipiscing dui orci ac purus lacus.',
    image: blog02,
    author: 'Jerome Bell',
    authorImg: avatar01,
    likes: 5,
    comments: 3,
    shares: 9,
  },
];

const BlogList = () => {
  return (
    <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
      <Row className="align-items-end gy-3 mb-4 pb-lg-3 pb-1">
        <Col lg={5} md={4}>
          <h1 className="mb-2 mb-md-0">Blog List</h1>
        </Col>
        <Col lg={7} md={8}>
          <Row>
            <Col lg={5} sm={6}>
              <div className="d-flex align-items-center">
                <div className="nav flex-nowrap me-sm-4 me-3">
                  <Link
                    to="/blog-list-no-sidebar"
                    className="nav-link me-2 p-0 active"
                    aria-label="List view"
                  >
                    <IconifyIcon icon="bx:list-ul" className="fs-1" />
                  </Link>
                  <Link
                    to="/blog-grid-no-sidebar"
                    className="nav-link p-0"
                    aria-label="Grid view"
                  >
                    <IconifyIcon icon="bx:grid-alt" className="fs-1" />
                  </Link>
                </div>
                <select className="form-select">
                  <option>All categories</option>
                  <option value="processes-and-tools">Processes &amp; Tools</option>
                  <option value="startups">Startups</option>
                  <option value="digital">Digital</option>
                  <option value="strategy">Strategy</option>
                  <option value="business">Business</option>
                </select>
              </div>
            </Col>
            <Col lg={7} sm={6}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control pe-5 rounded"
                  placeholder="Search the blog..."
                />
                <IconifyIcon
                  icon="bx:search"
                  className="position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {blogs.map(blog => (
        <article key={blog.id} className="card border-0 shadow-sm overflow-hidden mb-4">
          <Row className="g-0">
            <Col
              sm={4}
              className="position-relative bg-position-center bg-repeat-0 bg-size-cover"
              style={{
                backgroundImage: `url(${blog.image})`,
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
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Read later"
                aria-label="Read later"
              >
                <IconifyIcon icon="bx:bookmark" fontSize={18} />
              </Link>
            </Col>
            <Col sm={8}>
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Link to="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">
                    {blog.category}
                  </Link>
                  <span className="fs-sm text-muted border-start ps-3 ms-3">{blog.date}</span>
                </div>
                <h3 className="h4">
                  <Link to="/blog-single">{blog.title}</Link>
                </h3>
                <p>{blog.description}</p>
                <hr className="my-4" />
                <div className="d-flex align-items-center justify-content-between">
                  <Link
                    to="#"
                    className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3"
                  >
                    <img
                      src={blog.authorImg}
                      className="rounded-circle me-3"
                      width="48"
                      alt="Avatar"
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
              </CardBody>
            </Col>
          </Row>
        </article>
      ))}

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center pt-lg-3 pt-1">
          <li className="page-item">
            <Link to="#" className="page-link" aria-label="Previous page">
              <IconifyIcon icon="bx:chevron-left" className="mx-n1" fontSize={24} />
            </Link>
          </li>
          <li className="page-item disabled d-sm-none">
            <span className="page-link text-body">2 / 4</span>
          </li>
          <li className="page-item d-none d-sm-block">
            <Link to="#" className="page-link">
              1
            </Link>
          </li>
          <li className="page-item active d-none d-sm-block" aria-current="page">
            <span className="page-link">
              2<span className="visually-hidden">(current)</span>
            </span>
          </li>
          <li className="page-item d-none d-sm-block">
            <Link to="#" className="page-link">
              3
            </Link>
          </li>
          <li className="page-item d-none d-sm-block">
            <Link to="#" className="page-link">
              4
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link" aria-label="Next page">
              <IconifyIcon icon="bx:chevron-right" className="mx-n1" fontSize={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default BlogList;
