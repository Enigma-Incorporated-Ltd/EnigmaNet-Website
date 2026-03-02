import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

import { Nav } from 'react-bootstrap';

const PageTitle = () => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4 pb-1 pb-md-3">
      <h1 className="mb-0">Blog List with Sidebar</h1>
      <Nav className="flex-nowrap ms-sm-4 ms-3">
        <Link
          to="/blog-list-with-sidebar"
          className="nav-link me-2 p-0 active"
          aria-label="List view"
        >
          <IconifyIcon className="fs-4" icon="bx:list-ul" />
        </Link>
        <Link to="/blog-grid-with-sidebar" className="nav-link p-0" aria-label="Grid view">
          <IconifyIcon className="fs-4" icon="bx:grid-alt" />
        </Link>
      </Nav>
    </div>
  );
};

export default PageTitle;
