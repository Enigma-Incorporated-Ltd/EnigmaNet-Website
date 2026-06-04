import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string 
  style?: React.CSSProperties;
}

const Breadcrumb = ({ items , className , style}: BreadcrumbProps) => {
  return (
    <nav
      className={`container mt-lg-4  ${className || ''}`}
      aria-label="breadcrumb"
      style={style}
    >
      <ol className="breadcrumb mb-0  flex-wrap">
        {/* Home — always first */}
        <li className="breadcrumb-item">
          <Link to="/">
            <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
            Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="d-flex align-items-center">
              <span className="d-flex align-items-center mx-2">
                <IconifyIcon icon="bx:chevrons-right" aria-hidden="true" />
              </span>

              {isLast || !item.href ? (
                <span
                  className="breadcrumb-item active text-truncate d-inline-block"
                  style={{ maxWidth: 'clamp(120px, 40vw, 500px)' }}
                  aria-current="page"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <span className="breadcrumb-item">
                  <Link to={item.href} title={item.label}>
                    {item.label}
                  </Link>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
