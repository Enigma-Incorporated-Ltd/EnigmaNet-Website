import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

import { CardBody, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Startups = () => {
  return (
    <article className="card me-xl-5 mb-4">
      <CardBody>
        <div className="d-flex justify-content-between mb-3">
          <Link
            to="#"
            className="badge fs-sm text-white bg-success shadow-success text-decoration-none"
          >
            Startups
          </Link>
          <OverlayTrigger
            placement="left"
            overlay={<Tooltip id="tooltip-left">Read later</Tooltip>}
          >
            <Link
              to="#"
              className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Read later"
              aria-label="Read later"
            >
              <IconifyIcon icon="bx:bookmark" fontSize={18} />
            </Link>
          </OverlayTrigger>
        </div>
        <h3 className="h4">
          <Link to="/blog-single">How Agile is Your Forecasting Process?</Link>
        </h3>
        <p className="mb-4">
          Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at
          dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet
          pharetra adipiscing tincidunt orci nec neque.
        </p>
        <div className="d-flex align-items-center text-muted">
          <div className="fs-sm border-end pe-3 me-3">Sep 10, 2023</div>
          <div className="d-flex align-items-center me-3">
            <IconifyIcon icon="bx:like" className="fs-lg me-1" />
            <span className="fs-sm">3</span>
          </div>
          <div className="d-flex align-items-center me-3">
            <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
            <span className="fs-sm">6</span>
          </div>
          <div className="d-flex align-items-center">
            <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
            <span className="fs-sm">0</span>
          </div>
        </div>
      </CardBody>
    </article>
  );
};

export default Startups;
