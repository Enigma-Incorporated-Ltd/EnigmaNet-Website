import List01 from '@/assets/img/portfolio/list/01.jpg';
import List02 from '@/assets/img/portfolio/list/02.jpg';
import List03 from '@/assets/img/portfolio/list/03.jpg';
import List04 from '@/assets/img/portfolio/list/04.jpg';

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const PortfolioList = () => {
  return (
    <section className="container pb-2 pb-lg-3">
      <Row className="pb-5 mb-md-4 mb-lg-5">
        <Col
          md={6}
          className="rellax pb-1 mb-3 pb-md-0 mb-md-0"
          data-rellax-percentage="0.5"
          data-rellax-speed="0.8"
          data-disable-parallax-down="md"
        >
          <Link to="/portfolio-single-project">
            <img src={List01} className="rounded-3" width="600" alt="Image" />
          </Link>
        </Col>
        <Col
          md={6}
          className="rellax"
          data-rellax-percentage="0.5"
          data-rellax-speed="-0.6"
          data-disable-parallax-down="md"
        >
          <div className="ps-md-4 ms-md-2">
            <div className="fs-sm text-muted mb-1">Nov 18, 2023</div>
            <h2 className="h3">SaaS Project Management Tool</h2>
            <Link to="#" className="d-table badge bg-faded-primary text-primary fs-sm mb-3">
              Graphic Design
            </Link>
            <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
              Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra
              pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum
              id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida
              gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida
              curabitur at vel risus.
            </p>
            <Link to="/portfolio-single-project" className="btn btn-outline-primary">
              View more
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="pb-5 mb-md-4 mb-lg-5">
        <Col
          md={6}
          className="rellax order-md-2 pb-1 mb-3 pb-md-0 mb-md-0"
          data-rellax-percentage="0.5"
          data-rellax-speed="0.8"
          data-disable-parallax-down="md"
        >
          <Link to="/portfolio-single-project" className="float-md-end">
            <img src={List02} className="rounded-3" width="600" alt="Image" />
          </Link>
        </Col>
        <div
          className="rellax col-md-6 order-md-1 pt-md-4 pt-lg-5"
          data-rellax-percentage="0.5"
          data-rellax-speed="-0.6"
          data-disable-parallax-down="md"
        >
          <div className="pe-md-4 me-md-2">
            <div className="fs-sm text-muted mb-1">Nov 9, 2023</div>
            <h2 className="h3">Mobile Banking App</h2>
            <Link to="#" className="d-table badge bg-faded-primary text-primary fs-sm mb-3">
              UI / UX
            </Link>
            <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
              Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra
              pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum
              id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida
              gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida
              curabitur at vel risus.
            </p>
            <Link to="/portfolio-single-project" className="btn btn-outline-primary">
              View more
            </Link>
          </div>
        </div>
      </Row>

      <Row className="pb-5 mb-md-4 mb-lg-5">
        <Col
          md={6}
          className="rellax pb-1 mb-3 pb-md-0 mb-md-0"
          data-rellax-percentage="0.5"
          data-rellax-speed="0.8"
          data-disable-parallax-down="md"
        >
          <Link to="/portfolio-single-project">
            <img src={List03} className="rounded-3" width="600" alt="Image" />
          </Link>
        </Col>
        <Col
          md={6}
          className="rellax pt-md-4 pt-lg-5"
          data-rellax-percentage="0.5"
          data-rellax-speed="-0.6"
          data-disable-parallax-down="md"
        >
          <div className="ps-md-4 ms-md-2">
            <div className="fs-sm text-muted mb-1">Oct 25, 2023</div>
            <h2 className="h3">Tool for Task Management </h2>
            <Link to="#" className="d-table badge bg-faded-primary text-primary fs-sm mb-3">
              Motion Design
            </Link>
            <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
              Tortor suspendisse enim convallis mauris, tincidunt ornare non tempor, turpis.
              Ultricies elit vitae imperdiet luctus lorem tellus, vel. Non sodales facilisis amet
              vulputate massa ultricies volutpat consectetur velit.
            </p>
            <Link to="/portfolio-single-project" className="btn btn-outline-primary">
              View more
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="pb-5 mb-md-4 mb-lg-5">
        <Col
          md={6}
          className="rellax order-md-2 pb-1 mb-3 pb-md-0 mb-md-0"
          data-rellax-percentage="0.5"
          data-rellax-speed="0.8"
          data-disable-parallax-down="md"
        >
          <Link to="/portfolio-single-project" className="float-md-end">
            <img src={List04} className="rounded-3" width="600" alt="Image" />
          </Link>
        </Col>
        <Col
          md={6}
          className="rellax order-md-1 pt-md-4 pt-lg-5"
          data-rellax-percentage="0.5"
          data-rellax-speed="-0.6"
          data-disable-parallax-down="md"
        >
          <div className="pe-md-4 me-md-2">
            <div className="fs-sm text-muted mb-1">Aug 23, 2023</div>
            <h2 className="h3">Hospital and Healthcare Website</h2>
            <Link to="#" className="d-table badge bg-faded-primary text-primary fs-sm mb-3">
              Web Design
            </Link>
            <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
              Adipiscing amet placerat orci, non iaculis. Velit nec nec risus, ultrices mus integer
              nibh bibendum. In sagittis, habitant viverra nibh massa luctus. Lobortis tristique
              lorem in nisl, aliquam eu pretium hendrerit. Mauris, varius interdum dui elementum
              neque mi. Tortor amet ornare felis erat. Arcu enim nunc, porttitor libero massa.
            </p>
            <Link to="/portfolio-single-project" className="btn btn-outline-primary">
              View more
            </Link>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default PortfolioList;
