import IconifyIcon from '@/components/IconifyIcon';
import { Col, Nav, NavLink, Row } from 'react-bootstrap';

const PageTitle = () => {
  return (
    <Row className="align-items-end gy-3 mb-4 pb-lg-3 pb-1">
      <Col lg={5} md={4}>
        <h1 className="mb-2 mb-md-0">Blog Grid</h1>
      </Col>
      <Col lg={7} md={8}>
        <form className="row gy-2">
          <Col lg={5} sm={6}>
            <div className="d-flex align-items-center">
              <Nav className="flex-nowrap me-sm-4 me-3">
                <NavLink
                  href="/blog-list-no-sidebar"
                  className="nav-link me-2 p-0"
                  aria-label="List view"
                >
                  <IconifyIcon icon="bx:list-ul" className="fs-1" />
                </NavLink>
                <NavLink
                  href="/blog-grid-no-sidebar"
                  className="nav-link p-0 active"
                  aria-label="Grid view"
                >
                  <IconifyIcon icon="bx:grid-alt" className="fs-1" />
                </NavLink>
              </Nav>
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
        </form>
      </Col>
    </Row>
  );
};

export default PageTitle;
