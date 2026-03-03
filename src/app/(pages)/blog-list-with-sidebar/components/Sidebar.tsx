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
import banner from '@/assets/img/blog/banner.png';
import { useState } from 'react';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <FormControl
                  type="text"
                  placeholder="Search the blog..."
                  className="rounded pe-5"
                />
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
                  <NavItem className="mb-1">
                    <NavLink href="#" className="py-1 px-0 active">
                      All topics
                      <span className="fw-normal opacity-60 ms-1">(48)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mb-1">
                    <NavLink href="#" className="py-1 px-0">
                      Digital <span className="fw-normal opacity-60 ms-1">(12)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mb-1">
                    <NavLink href="#" className="py-1 px-0">
                      Marketing <span className="fw-normal opacity-60 ms-1">(5)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mb-1">
                    <NavLink href="#" className="py-1 px-0">
                      Startups <span className="fw-normal opacity-60 ms-1">(10)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mb-1">
                    <NavLink href="#" className="py-1 px-0">
                      Technology <span className="fw-normal opacity-60 ms-1">(9)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mb-1">
                    <NavLink href="#" className="py-1 px-0">
                      Business <span className="fw-normal opacity-60 ms-1">(4)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className="py-1 px-0">
                      Processes &amp; Tools <span className="fw-normal opacity-60 ms-1">(3)</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>

            <Card className="border-0 position-relative mb-4">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-3"></span>
              <Card.Body className="position-relative zindex-2">
                <h3 className="h5">Popular posts</h3>
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom pb-3 mb-3">
                    <h4 className="h6 mb-2">
                      <Link to="#">5 Bad Landing Page Examples &amp; How We Would Fix Them</Link>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">12 hours ago</div>
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:like" className="fs-base me-1" fontSize={18} />
                        <span className="fs-xs">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:comment" className="fs-base me-1" fontSize={18} />
                        <span className="fs-xs">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <IconifyIcon icon="bx:share-alt" className="fs-base me-1" fontSize={18} />
                        <span className="fs-xs">2</span>
                      </div>
                    </div>
                  </li>
                  <li className="border-bottom pb-3 mb-3">
                    <h4 className="h6 mb-2">
                      <Link to="#">How Agile is Your Forecasting Process?</Link>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">Oct 9, 2023</div>
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:like" className="fs-base me-1" />
                        <span className="fs-xs">4</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:comment" className="fs-base me-1" />
                        <span className="fs-xs">1</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <IconifyIcon icon="bx:share-alt" className="fs-base me-1" />
                        <span className="fs-xs">0</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4 className="h6 mb-2">
                      <Link to="#">Inclusive Marketing: Why and How Does it Work?</Link>
                    </h4>
                    <div className="d-flex align-items-center text-muted pt-1">
                      <div className="fs-xs border-end pe-3 me-3">Sep 13, 2023</div>
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:like" className="fs-base me-1" />
                        <span className="fs-xs">5</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <IconifyIcon icon="bx:comment" className="fs-base me-1" />
                        <span className="fs-xs">2</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <IconifyIcon icon="bx:share-alt" className="fs-base me-1" />
                        <span className="fs-xs">4</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <h3 className="h5">Tags</h3>
                <div className="d-flex flex-wrap">
                  {[
                    '#lifestyle',
                    '#ux',
                    '#tech',
                    '#user',
                    '#software',
                    '#it',
                    '#network',
                    '#engineering',
                  ].map(tag => (
                    <Link
                      key={tag}
                      to="#"
                      className="btn btn-outline-secondary btn-sm px-3 my-1 me-2"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <h5 className="mb-4">Follow Us</h5>
                <Link
                  to="#"
                  className="btn btn-icon btn-sm btn-secondary btn-linkedin me-2 mb-2"
                  aria-label="LinkedIn"
                >
                  <IconifyIcon icon="bxl:linkedin" fontSize={18} />
                </Link>
                <Link
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
                </Link>
              </CardBody>
            </Card>

            <Card
              className="border-0 bg-faded-primary bg-repeat-0 bg-size-cover"
              style={{
                minHeight: '25rem',
                backgroundImage: `url(${banner})`,
              }}
            >
              <CardBody>
                <h5 className="h3 mb-4 pb-2 text-center">Ad Banner</h5>
              </CardBody>
            </Card>
          </OffcanvasBody>
        </Offcanvas>
      </aside>
    </>
  );
};

export default Sidebar;
