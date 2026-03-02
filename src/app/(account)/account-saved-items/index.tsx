import course01 from '@/assets/img/portfolio/courses/01.jpg';
import course07 from '@/assets/img/portfolio/courses/07.jpg';
import course09 from '@/assets/img/portfolio/courses/09.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { Button, CardBody, CardFooter, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';
import Footer from '../sidebar-footer/Footer';
import Sidebar from '../sidebar-footer/Sidebar';

type SavedItem = {
  id: number;
  title: string;
  author: string;
  price: string;
  duration: string;
  rating: string;
  image: string;
  bestseller?: boolean;
};

const savedItems: SavedItem[] = [
  {
    id: 1,
    title: 'Blender Character Creator v2.0 for Video Games Design',
    author: 'Ralph Edwards',
    price: '$25.00',
    duration: '160 hours',
    rating: '93% (4.5K)',
    image: course07,
  },
  {
    id: 2,
    title: 'Fullstack Web Developer Course from Scratch',
    author: 'Albert Flores',
    price: '$12.50',
    duration: '220 hours',
    rating: '94% (4.2K)',
    image: course01,
    bestseller: true,
  },
  {
    id: 3,
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    author: 'Jenny Wilson',
    price: '$14.50',
    duration: '120 hours',
    rating: '92% (3.8K)',
    image: course09,
  },
];


const Index = () => {
  return (
    <>
      <PageMeta title='Account Saved Item' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Col md={8} className="offset-lg-1 pb-5 mb-lg-2 pt-md-5 mt-n3 mt-md-0">
            <div className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
              <div className="d-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
                <h1 className="h2 mb-0">Saved Items</h1>
                <button type="button" className="btn btn-outline-danger px-3 px-sm-4">
                  <IconifyIcon icon="bx:trash-alt" className="fs-xl me-sm-2" />
                  <span className="d-none d-sm-inline">Remove all</span>
                </button>
              </div>

              <Row className="row-cols-1 row-cols-sm-2 gx-3 gx-lg-4">
                {savedItems.map(item => (
                  <Col key={item.id} className="pb-lg-2 mb-4">
                    <article className="card h-100 border-0 shadow-sm">
                      <div className="position-relative">
                        <Link
                          to="/portfolio-single-course"
                          className="d-block position-absolute w-100 h-100 top-0 start-0"
                          aria-label="Cover image"
                        ></Link>

                        {item.bestseller && (
                          <span className="badge bg-success position-absolute top-0 start-0 zindex-2 mt-3 ms-3">
                            Best Seller
                          </span>
                        )}

                        <OverlayTrigger
                          placement="left"
                          overlay={<Tooltip id="tooltip-remove">Remove</Tooltip>}
                        >
                          <Button
                            variant="light"
                            size="sm"
                            className="btn-icon bg-white border-white rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                            aria-label="Remove"
                          >
                            <IconifyIcon icon="bxs:bookmark" fontSize={18} />
                          </Button>
                        </OverlayTrigger>

                        <img src={item.image} className="card-img-top" alt={item.title} />
                      </div>

                      <CardBody className="pb-3">
                        <h3 className="h5 mb-2">
                          <Link to="/portfolio-single-course">{item.title}</Link>
                        </h3>
                        <p className="fs-sm mb-2">By {item.author}</p>
                        <p className="fs-lg fw-semibold text-primary mb-0">{item.price}</p>
                      </CardBody>

                      <CardFooter className="d-flex align-items-center fs-sm text-muted py-4">
                        <div className="d-flex align-items-center me-4">
                          <IconifyIcon icon="bx:time" className="fs-xl me-1" />
                          {item.duration}
                        </div>
                        <div className="d-flex align-items-center">
                          <IconifyIcon icon="bx:like" className="fs-xl me-1" />
                          {item.rating}
                        </div>
                      </CardFooter>
                    </article>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Index;
