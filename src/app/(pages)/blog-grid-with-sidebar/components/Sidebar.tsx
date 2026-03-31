import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormControl,
  InputGroup,
  Nav,
  NavItem,
  NavLink,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from 'react-bootstrap';
import { useState } from 'react';
import type { BlogPost } from '@/services/cmsApi';
import { OverlayLoader } from '@/components/loading/Loader';

const Sidebar = ({
  posts,
  loading,
  setFilteredPosts,
}: {
  posts: BlogPost[];
  setFilteredPosts: (posts: BlogPost[]) => void;
  loading: boolean;
}) => {
  const [show, setShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...new Set(posts.map(p => p.category))];

const handleCategoryClick = (cat: string) => {
  if (cat === activeCategory) {
    // Toggle off → reset
    setActiveCategory('All');
    setFilteredPosts(posts);
  } else {
    setActiveCategory(cat);

    if (cat === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(p => p.category === cat));
    }
  }
};
  const handleSearch = (value: string) => {
    const filtered = posts.filter(p => p.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredPosts(filtered);
  };
  const popularPosts = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 3);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <OverlayLoader visible={loading} />
      </div>
    );
  }
  return (
    <>
      <Button
        onClick={handleShow}
        className="btn btn-sm btn-primary fixed-bottom d-lg-none w-100 rounded-0"
      >
        <IconifyIcon icon="bx:sidebar" className="fs-xl me-2" />
        Sidebar
      </Button>

      <aside className="col-xl-3 col-lg-4">
        <Offcanvas
          show={show}
          onHide={handleClose}
          id="blog-sidebar"
          placement="end"
          responsive="lg"
          className="offcanvas-lg"
        >
          <OffcanvasHeader closeButton className="border-bottom">
            <OffcanvasTitle className="fs-lg">Sidebar</OffcanvasTitle>
          </OffcanvasHeader>

          <OffcanvasBody>
            <Form className="position-relative mb-4">
              <InputGroup>
                <FormControl onChange={e => handleSearch(e.target.value)} placeholder="Search..." />
              </InputGroup>
              <IconifyIcon
                icon="bx:search"
                className="position-absolute top-50 end-0 translate-middle-y me-3 fs-lg zindex-5"
              ></IconifyIcon>
            </Form>

            <Card className="mb-4">
              <CardBody>
                <h3 className="h5">Categories</h3>
                <Nav className="flex-column fs-sm">
                  {categories.map(cat => (
                    <NavItem key={cat}>
                      <NavLink
                        href="#"
                        active={activeCategory === cat}
                        onClick={e => {
                          e.preventDefault();
                          handleCategoryClick(cat);
                        }}
                      >
                        {cat}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </CardBody>
            </Card>

            <Card className="border-0 position-relative mb-4">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-3"></span>
              <Card.Body className="position-relative zindex-2">
                <h3 className="h5">Popular posts</h3>
                <ul className="list-unstyled mb-0">
                  {popularPosts.map(post => (
                    <li key={post.id} className="border-bottom pb-3 mb-3">
                      <h4 className="h6 mb-2">
                        <Link to={`/blog-single/${post.slug}`}>{post.title}</Link>
                      </h4>

                      <div className="d-flex align-items-center text-muted pt-1">
                        <span className="fs-xs me-3">{post.date}</span>
                        {/* <div className="d-flex align-items-center me-3">
                          <IconifyIcon icon="bx:like" className="fs-base me-1" fontSize={18} />
                          <span className="fs-xs">{post.likes}</span>
                        </div>
                        <div className="d-flex align-items-center me-3">
                          <IconifyIcon icon="bx:comment" className="fs-base me-1" fontSize={18} />
                          <span className="fs-xs">{post.comments}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <IconifyIcon icon="bx:share-alt" className="fs-base me-1" fontSize={18} />
                          <span className="fs-xs">{post.shares}</span>
                        </div> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <h5 className="mb-4">Follow Us</h5>
                <Link
                  to="https://www.linkedin.com/company/enigmanet-ai/"
                  className="btn btn-icon btn-sm btn-secondary btn-linkedin me-2 mb-2"
                  aria-label="LinkedIn"
                >
                  <IconifyIcon icon="bxl:linkedin" fontSize={18} />
                </Link>
                {/* <Link
                  to="#"
                  className="btn btn-icon btn-sm btn-secondary btn-facebook me-2 mb-2"
                  aria-label="Facebook"
                >
                  <IconifyIcon icon="bxl:facebook" fontSize={18} />
                </Link>
                <Link
                  to="#"
                  className="btn btn-icon btn-sm btn-secondary btn-twitter me-2 mb-2"
                  aria-label="Twitter"
                >
                  <IconifyIcon icon="bxl:twitter" fontSize={18} />
                </Link>
                <Link
                  to="#"
                  className="btn btn-icon btn-sm btn-secondary btn-instagram me-2 mb-2"
                  aria-label="Instagram"
                >
                  <IconifyIcon icon="bxl:instagram" fontSize={18} />
                </Link> */}
              </CardBody>
            </Card>
          </OffcanvasBody>
        </Offcanvas>
      </aside>
    </>
  );
};

export default Sidebar;
