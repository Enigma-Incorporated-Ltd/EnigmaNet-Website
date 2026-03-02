import { Card, CardBody, Col, Nav, NavItem, NavLink, Row } from 'react-bootstrap';
import grid01 from '@/assets/img/portfolio/grid/01.jpg';
import grid02 from '@/assets/img/portfolio/grid/02.jpg';
import grid03 from '@/assets/img/portfolio/grid/03.jpg';
import grid04 from '@/assets/img/portfolio/grid/04.jpg';
import grid05 from '@/assets/img/portfolio/grid/05.jpg';
import grid06 from '@/assets/img/portfolio/grid/06.jpg';

import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

const Portfolio = () => {
  return (
    <>
      <section className="container d-md-flex align-items-center justify-content-between pb-3">
        <h1 className="text-nowrap mb-md-4 pe-md-5">Portfolio Grid</h1>
        <nav className="overflow-auto">
          <Nav className="nav-tabs-alt flex-nowrap border-0">
            <NavItem>
              <NavLink href="#" className="text-nowrap active">
                All Works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-nowrap">
                Web Design
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-nowrap">
                Graphic Design
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-nowrap">
                Branding
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-nowrap">
                UI / UX
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-nowrap">
                Motion Design
              </NavLink>
            </NavItem>
          </Nav>
        </nav>
      </section>

      <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
        <Row className="pb-lg-3">
          <Col md={5} className="mb-2">
            <Card className="card-portfolio">
              <div className="card-img">
                <img src={grid01} alt="Image" />
              </div>
              <div className="card-body">
                <h2 className="h4 mb-2">
                  <Link to="/portfolio-single-project" className="stretched-link">
                    Astronaut &amp; Flashing Neon Lights
                  </Link>
                </h2>
                <div className="card-portfolio-meta">
                  <span className="text-muted">3D Render / Graphic Design / Motion Design</span>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={7} className="mb-2">
            <Card className="card-portfolio">
              <div className="card-img">
                <img src={grid02} alt="Image" />
              </div>
              <CardBody>
                <h2 className="h4 mb-2">
                  <Link to="/portfolio-single-project" className="stretched-link">
                    Scene of Sunglasses &amp; Headphone on Human Head
                  </Link>
                </h2>
                <div className="card-portfolio-meta pb-1">
                  <span className="text-muted">
                    NFT / Graphic Design / Art / Identity / Motion Design
                  </span>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md={7} className="mb-2">
            <Card className="card-portfolio">
              <div className="card-img">
                <img src={grid03} alt="Image" />
              </div>
              <CardBody>
                <h2 className="h4 mb-2">
                  <Link to="/portfolio-single-project" className="stretched-link">
                    Plaster Antique Sculpture in a Pop Art Style
                  </Link>
                </h2>
                <div className="card-portfolio-meta">
                  <span className="text-muted">NFT / Graphic Design / Art / 3D</span>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md={5} className="mb-2">
            <Card className="card-portfolio">
              <div className="card-img">
                <img src={grid04} alt="Image" />
              </div>
              <CardBody>
                <h2 className="h4 mb-2">
                  <Link to="/portfolio-single-project" className="stretched-link">
                    Big Blue Whale Shape
                  </Link>
                </h2>
                <div className="card-portfolio-meta">
                  <span className="text-muted">3D Pollygonal Shape / Graphic Design / Art</span>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md={5} className="mb-2">
            <Card className="card-portfolio">
              <div className="card-img">
                <img src={grid05} alt="Image" />
              </div>
              <CardBody>
                <h2 className="h4 mb-2">
                  <Link to="/portfolio-single-project" className="stretched-link">
                    3D Shape Illustration
                  </Link>
                </h2>
                <div className="card-portfolio-meta">
                  <span className="text-muted">3D Design / Illustration / Art</span>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md={7} className="mb-2">
            <Card className="card-portfolio">
              <div className="card-img">
                <img src={grid06} alt="Image" />
              </div>
              <CardBody>
                <h2 className="h4 mb-2">
                  <Link to="/portfolio-single-project" className="stretched-link">
                    Mannequin Hands Holding Phone
                  </Link>
                </h2>
                <div className="card-portfolio-meta">
                  <span className="text-muted">NFT / Graphic Design / Art / 3D</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item active" aria-current="page">
              <span className="page-link">
                1<span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item">
              <Link to="#" className="page-link">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link to="#" className="page-link">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link to="#" className="page-link">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link to="#" className="page-link" aria-label="Next page">
                <IconifyIcon icon="bx:chevron-right" fontSize={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Portfolio;
