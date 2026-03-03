import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

import { CardBody } from 'react-bootstrap';

const Digital1 = () => {
  return (
    <article className="card me-xl-5 mb-4">
      <CardBody>
        <div className="d-flex justify-content-between mb-3">
          <Link
            to="#"
            className="badge fs-sm text-white bg-info shadow-info text-decoration-none"
          >
            Digital
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-secondary btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Read later"
            aria-label="Read later"
          >
            <IconifyIcon icon="bx:bookmark" fontSize={18} />
          </Link>
        </div>
        <h3 className="h4">
          <Link to="/blog-single">This Long-Awaited Technology May Finally Change the World</Link>
        </h3>
        <p className="mb-4">
          Nunc, enim donec venenatis quis amet, magna vulputate rhoncus. Interdum lacus, nam
          elementum, cursus felis cras eros vel tincidunt. Felis nunc rhoncus quis curabitur
          facilisi. Odio cursus in vel et pretium. Ornare interdum in cras nibh lectus fusce. Neque,
          donec nunc, tellus, bibendum. Id euismod urna diam dolor lobortis consectetu.
        </p>
        <div className="d-flex align-items-center text-muted">
          <div className="fs-sm border-end pe-3 me-3">Sep 3, 2023</div>
          <div className="d-flex align-items-center me-3">
            <IconifyIcon icon="bx:like" className="fs-lg me-1" />
            <span className="fs-sm">0</span>
          </div>
          <div className="d-flex align-items-center me-3">
            <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
            <span className="fs-sm">1</span>
          </div>
          <div className="d-flex align-items-center">
            <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
            <span className="fs-sm">2</span>
          </div>
        </div>
      </CardBody>
    </article>
  );
};

export default Digital1;
