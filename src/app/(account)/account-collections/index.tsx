import collection01 from '@/assets/img/account/collection01.jpg';
import collection02 from '@/assets/img/account/collection02.jpg';
import collection03 from '@/assets/img/account/collection03.jpg';
import Sidebar from '../sidebar-footer/Sidebar';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import Footer from '../sidebar-footer/Footer';
import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';

type Collection = {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
};

const collections: Collection[] = [
  {
    id: 1,
    date: 'Nov 30, 2023',
    title: '3D Shape Illustration',
    description: 'NFT / Graphic Design / Motion Design',
    image: collection01,
  },
  {
    id: 2,
    date: 'Oct 18, 2023',
    title: 'Scene of Sunglasses & Headphone on Human Head',
    description: 'Graphic Design / Art / Identity / Motion Design',
    image: collection02,
  },
  {
    id: 3,
    date: 'Aug 05, 2023',
    title: 'Mannequin Hands Holding Phone',
    description: 'NFT / Mobile App Design / Graphic Design / Art',
    image: collection03,
  },
];

const Index = () => {
  return (
    <>
      <PageMeta title='Account  Collection' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Col md={8} className="offset-lg-1 pb-5 mb-lg-2 pt-md-5 mt-n3 mt-md-0">
            <div className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
              <div className="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
                <h1 className="h2 mb-sm-0">My Collections</h1>
                <select className="form-select" style={{ maxWidth: '15rem' }}>
                  <option value="Published">Published</option>
                  <option value="Category">Category</option>
                  <option value="Title AZ">Title AZ</option>
                  <option value="Title ZA">Title ZA</option>
                </select>
              </div>

              {collections.map(col => (
                <Card key={col.id} className="border-0 shadow-sm overflow-hidden mb-4">
                  <Row className="g-0">
                    <Link
                      to="#"
                      className="col-sm-4 bg-repeat-0 bg-position-center bg-size-cover"
                      style={{
                        backgroundImage: `url(${col.image})`,
                        minHeight: '13rem',
                      }}
                      aria-label="Cover image"
                    ></Link>
                    <Col sm={8}>
                      <CardBody>
                        <div className="fs-sm text-muted mb-1">{col.date}</div>
                        <h2 className="h4 pb-1 mb-2">
                          <Link to="#">{col.title}</Link>
                        </h2>
                        <p className="mb-4 mb-lg-5">{col.description}</p>
                        <div className="d-flex">
                          <button
                            type="button"
                            className="btn btn-outline-primary px-3 px-lg-4 me-3"
                          >
                            <IconifyIcon icon="bx:edit" className="fs-xl me-xl-2" />
                            <span className="d-none d-xl-inline">Edit</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary px-3 px-lg-4 me-3"
                          >
                            <IconifyIcon icon="bx:power-off" className="fs-xl me-xl-2" />
                            <span className="d-none d-xl-inline">Deactivate</span>
                          </button>
                          <button type="button" className="btn btn-outline-danger px-3 px-lg-4">
                            <IconifyIcon icon="bx:trash-alt" className="fs-xl me-xl-2" />
                            <span className="d-none d-xl-inline">Delete</span>
                          </button>
                        </div>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Index;
