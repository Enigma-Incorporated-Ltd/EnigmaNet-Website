import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

import { Nav } from 'react-bootstrap';
import Header from '@/components/ui/Header';

const PageTitle = () => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4 pb-1 pb-md-3">
      <Header title="Blogs"  />
      <Nav className="flex-nowrap ms-sm-4 ms-3">
        <Link
          to="/blog"
          className="nav-link me-2 p-0 active"
          aria-label="List view"
        >
          <IconifyIcon className="fs-4" icon="bx:list-ul" />
        </Link>
        <Link to="/blog/grid" className="nav-link p-0" aria-label="Grid view">
          <IconifyIcon className="fs-4" icon="bx:grid-alt" />
        </Link>
      </Nav>
    </div>
  );
};

export default PageTitle;
