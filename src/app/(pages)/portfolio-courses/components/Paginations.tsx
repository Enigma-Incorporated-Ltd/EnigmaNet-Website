import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Paginations = () => {
  return (
    <nav className="pb-5" aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link to="#" className="page-link">
            <IconifyIcon icon="bx:chevron-left" className="ms-n1 me-1" />
            Prev
          </Link>
        </li>
        <li className="page-item disabled d-sm-none">
          <span className="page-link text-body">1 / 4</span>
        </li>
        <li className="page-item active d-none d-sm-block" aria-current="page">
          <span className="page-link">
            1<span className="visually-hidden">(current)</span>
          </span>
        </li>
        <li className="page-item d-none d-sm-block">
          <Link to="#" className="page-link">
            2
          </Link>
        </li>
        <li className="page-item d-none d-sm-block">
          <Link to="#" className="page-link">
            3
          </Link>
        </li>
        <li className="page-item d-none d-sm-block">
          <Link to="#" className="page-link">
            4
          </Link>
        </li>
        <li className="page-item">
          <Link to="#" className="page-link">
            Next
            <IconifyIcon icon="bx:chevron-right" className="me-n1 ms-1" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Paginations;
