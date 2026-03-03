import IconifyIcon from '@/components/IconifyIcon';
import { Nav, NavLink } from 'react-bootstrap';

const BlogTitle = () => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4 pb-1 pb-md-3">
      <h1 className="mb-0">Blog Grid with Sidebar</h1>
      <Nav className="flex-nowrap ms-sm-4 ms-3">
        <NavLink href="blog-list-with-sidebar" className="me-2 p-0" aria-label="List view">
          <IconifyIcon icon="bx:list-ul" className="fs-4" />
        </NavLink>
        <NavLink href="/blog-grid-with-sidebar" className="p-0 active" aria-label="Grid view">
          <IconifyIcon icon="bx:grid-alt" className="fs-4"></IconifyIcon>
        </NavLink>
      </Nav>
    </div>
  );
};

export default BlogTitle;
