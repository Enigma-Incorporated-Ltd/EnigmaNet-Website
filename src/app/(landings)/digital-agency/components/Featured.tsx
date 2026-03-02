import grid07 from '@/assets/img/portfolio/grid/07.jpg';
import grid08 from '@/assets/img/portfolio/grid/08.jpg';
import grid09 from '@/assets/img/portfolio/grid/09.jpg';
import grid10 from '@/assets/img/portfolio/grid/10.jpg';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Featured = () => {
  return (
    <section className="container mb-5 pt-lg-2 pt-xl-4 pb-2 pb-md-3 pb-lg-5">
      <h2 className="h1 mb-4 text-center">Featured Projects</h2>
      <p className="mb-4 mx-auto pb-3 fs-lg text-center" style={{ maxWidth: '636px' }}>
        We create websites and mobile apps, marketing materials, branding, web design, UX/UI design
        and illustrations.
      </p>
      <Row className="masonry-grid g-md-4 g-3 mb-4">
        <Col md={4} sm={12} xs={12} className="masonry-grid-item">
          <Link
            to="/portfolio-single-project"
            className="card card-portfolio card-hover bg-transparent border-0"
          >
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
              <div className="position-relative zindex-2">
                <h3 className="h5 text-light mb-2">Astronaut &amp; Flashing Neon Lights</h3>
                <span className="fs-sm text-light opacity-70">
                  3D Render / Graphic Design / Motion Design
                </span>
              </div>
            </div>
            <div className="card-img">
              <img src={grid07} className="rounded-3" alt="Image" />
            </div>
          </Link>
        </Col>

        <Col md={8} sm={12} xs={12} className="masonry-grid-item">
          <Row className='g-4'>
            <Col sm={6} xs={12} className="masonry-grid-item">
              <Link
                to="/portfolio-single-project"
                className="card card-portfolio card-hover bg-transparent border-0"
              >
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                  <div className="position-relative zindex-2">
                    <h3 className="h5 text-light mb-2">Plaster Antique Sculpture in a Pop Art Style</h3>
                    <span className="fs-sm text-light opacity-70">NFT / Graphic Design / Art / 3D</span>
                  </div>
                </div>
                <div className="card-img">
                  <img src={grid08} className="rounded-3" alt="Image" />
                </div>
              </Link>
            </Col>

            <Col sm={6} xs={12} className="masonry-grid-item">
              <Link
                to="/portfolio-single-project"
                className="card card-portfolio card-hover bg-transparent border-0"
              >
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                  <div className="position-relative zindex-2">
                    <h3 className="h5 text-light mb-2">Big Blue Whale Shape</h3>
                    <span className="fs-sm text-light opacity-70">
                      3D Pollygonal Shape / Graphic Design / Art
                    </span>
                  </div>
                </div>
                <div className="card-img">
                  <img src={grid09} className="rounded-3" alt="Image" />
                </div>
              </Link>
            </Col>

            <Col xs={12} className="masonry-grid-item">
              <Link
                to="/portfolio-single-project"
                className="card card-portfolio card-hover bg-transparent border-0"
              >
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></span>
                  <div className="position-relative zindex-2">
                    <h3 className="h5 text-light mb-2">3D Shape Illustration</h3>
                    <span className="fs-sm text-light opacity-70">3D Design / Illustration / Art</span>
                  </div>
                </div>
                <div className="card-img">
                  <img src={grid10} className="rounded-3" alt="Image" />
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="pt-md-3 pt-2 text-center">
        <Link to="/portfolio-grid" className="btn btn-lg btn-primary w-sm-auto w-100">
          Explore all
        </Link>
      </div>
    </section>
  );
};

export default Featured;
