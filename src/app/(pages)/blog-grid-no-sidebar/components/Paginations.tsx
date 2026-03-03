import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';


const Paginations = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center pt-md-4 pt-2">
        <li className="page-item">
          <Link to="#" className="page-link" aria-label="Previous page">
            <IconifyIcon icon="bx:chevron-left" fontSize={24} />
          </Link>
        </li>
        <li className="page-item disabled d-sm-none">
          <span className="page-link text-body">2 / 4</span>
        </li>
        <li className="page-item d-none d-sm-block">
          <Link to="#" className="page-link">
            1
          </Link>
        </li>
        <li className="page-item active d-none d-sm-block" aria-current="page">
          <span className="page-link">
            2<span className="visually-hidden">(current)</span>
          </span>
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
          <Link to="#" className="page-link" aria-label="Next page">
            <IconifyIcon icon="bx:chevron-right" fontSize={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Paginations;
