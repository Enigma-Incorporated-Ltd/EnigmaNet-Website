import { Container, Row, Col, Card, Badge, Button, CardBody, CardFooter, OverlayTrigger, Tooltip } from 'react-bootstrap';
import blogImg1 from '@/assets/img/landing/digital-agency/blog/01.jpg';
import blogImg2 from '@/assets/img/landing/digital-agency/blog/02.jpg';
import blogImg3 from '@/assets/img/landing/digital-agency/blog/03.jpg';
import avatar1 from '@/assets/img/avatar/10.jpg';
import avatar2 from '@/assets/img/avatar/08.jpg';
import avatar3 from '@/assets/img/avatar/09.jpg';
import contactBg from '@/assets/img/landing/digital-agency/contact-bg.png';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

type BlogPost = {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  role: string;
  image: string;
  avatar: string;
  stats?: {
    likes: number;
    comments: number;
    shares: number;
  };
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'A study on smartwatch design qualities and people’s preferences',
    category: 'Digital',
    date: '12 hours ago',
    author: 'Jerome Bell',
    role: 'Marketing Specialist',
    image: blogImg1,
    avatar: avatar1,
  },
  {
    id: 2,
    title: 'Brand analysis: second step to the brand identity',
    category: 'Design',
    date: '1 day ago',
    author: 'Annette Black',
    role: 'Product Manager',
    image: blogImg2,
    avatar: avatar2,
    stats: { likes: 8, comments: 7, shares: 4 },
  },
  {
    id: 3,
    title: 'How to check the website before releasing it?',
    category: 'Tips & Advice',
    date: 'May 24, 2023',
    author: 'Marvin McKinney',
    role: 'Senior UI/UX Designer',
    image: blogImg3,
    avatar: avatar3,
    stats: { likes: 8, comments: 7, shares: 4 },
  },
];

const Blog = () => {
  return (
    <div className="bg-secondary mb-5 pt-5">
      <Container className="mb-5 py-lg-5">
        <h2 className="h1 mb-4 pb-3 text-center">Latest From Our Blog</h2>
        <Row>
          <Col lg={5} className="mb-lg-0 mb-4">
            <Card className="h-100 border-0 shadow-sm">
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
                    href="#"
                    variant="light"
                    size="sm"
                    className="btn-icon bg-white border-white rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                    aria-label="Read later"
                  >
                    <IconifyIcon icon="bx:bookmark" fontSize={18} />

                  </Button>
                </OverlayTrigger>
                <img src={blogPosts[0].image} alt={blogPosts[0].title} className="card-img-top" />
              </div>
              <CardBody className="pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <Badge bg="secondary" className="fs-sm text-nav">
                    {blogPosts[0].category}
                  </Badge>
                  <span className="fs-sm text-muted">{blogPosts[0].date}</span>
                </div>
                <h3 className="h5 mb-0">{blogPosts[0].title}</h3>
              </CardBody>
              <CardFooter className="py-4">
                <div className="d-inline-flex align-items-center me-3">
                  <img
                    src={blogPosts[0].avatar}
                    alt={blogPosts[0].author}
                    width={48}
                    height={48}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <span className="fw-bold">{blogPosts[0].author}</span>
                    <br />
                    <span className="fs-sm text-muted">{blogPosts[0].role}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col>
            {blogPosts.slice(1).map(post => (
              <Card key={post.id} className="border-0 shadow-sm overflow-hidden mb-4">
                <Row className="g-0">
                  <Col sm={5} className="position-relative" style={{ minHeight: '15rem' }}>
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
                        href="#"
                        variant="light"
                        size="sm"
                        className="btn-icon bg-white border-white rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                        aria-label="Read later"
                      >
                        <IconifyIcon icon="bx:bookmark" fontSize={18} />

                      </Button>
                    </OverlayTrigger>
                    <img src={post.image} alt={post.title} className="object-cover" />
                  </Col>
                  <Col sm={7}>
                    <CardBody>
                      <div className="d-flex align-items-center mb-3">
                        <Badge bg="secondary" className="fs-sm text-nav">
                          {post.category}
                        </Badge>
                        <span className="fs-sm text-muted border-start ps-3 ms-3">{post.date}</span>
                      </div>
                      <h3 className="h5">{post.title}</h3>
                      <hr className="my-4" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center me-3">
                          <img
                            src={post.avatar}
                            alt={post.author}
                            width={48}
                            height={48}
                            className="rounded-circle me-3"
                          />
                          <div>
                            <span className="fw-bold">{post.author}</span>
                            <br />
                            <span className="fs-sm text-muted">{post.role}</span>
                          </div>
                        </div>
                        {post.stats && (
                          <div className="d-flex text-muted">
                            <div className="me-3">
                              <IconifyIcon icon="bx:like" className="me-1" />
                              {post.stats.likes}
                            </div>
                            <div className="me-3">
                              <IconifyIcon icon="bx:comment" className="me-1" />
                              {post.stats.comments}
                            </div>
                            <div>
                              <IconifyIcon icon="bx:share-alt" className="me-1" />
                              {post.stats.shares}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>

          <Col xs={12} className="mt-4 pt-lg-4 pt-3 text-center">
            <Button variant="outline-primary" size="lg" className="w-sm-auto w-100">
              More blog posts
            </Button>
          </Col>
        </Row>
      </Container>

      <Container
        className="pt-3 pb-4 pb-md-5"
        style={{
          marginTop: '-156px',
          marginBottom: '120px',
          transform: 'translateY(156px)',
        }}
      >
        <Card className="border-0 bg-gradient-primary">
          <CardBody
            className="p-md-5 p-4 text-center"
            style={{
              backgroundImage: `url(${contactBg})`,
              backgroundSize: 'cover',
            }}
          >
            <h3 className="h4 fw-normal text-light opacity-75">Want to work with us? Let's talk</h3>
            <Link to="mailto:email@example.com" className="display-6 text-light">
              email@example.com
            </Link>
            <div className="pt-md-5 pt-4 pb-md-2">
              <Button variant="light" size="lg">
                Contact us
              </Button>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Blog;
