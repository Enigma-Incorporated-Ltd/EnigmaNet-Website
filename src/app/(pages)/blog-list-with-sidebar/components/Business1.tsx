import { CardBody, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import blog02 from '@/assets/img/blog/02.jpg';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

const Business1 = () => {
  return (
    <article className="card border-0 bg-transparent me-xl-5 mb-4">
      <Row className="g-0">
        <Col
          sm={5}
          className="position-relative bg-position-center bg-repeat-0 bg-size-cover rounded-3"
          style={{ backgroundImage: `url(${blog02})`, minHeight: '15rem' }}
        >
          <Link
            to="/blog-single"
            className="position-absolute top-0 start-0 w-100 h-100"
            aria-label="Read more"
          ></Link>
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
              <IconifyIcon icon="bx:bookmark" fontSize={20} />
            </Link>
          </OverlayTrigger>
        </Col>
        <Col sm={7}>
          <CardBody className="px-0 pt-sm-0 ps-sm-4 pb-0 pb-sm-4">
            <Link
              to="#"
              className="badge fs-sm text-white bg-warning shadow-warning text-decoration-none mb-3"
            >
              Business
            </Link>
            <h3 className="h4">
              <Link to="/blog-single">Why UX Design Matters and How it Affects Ranking</Link>
            </h3>
            <p className="mb-4">
              In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla
              pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget
              donec ultricies nibh tristique.
            </p>
            <div className="d-flex align-items-center text-muted">
              <div className="fs-sm border-end pe-3 me-3">Aug 19, 2023</div>
              <div className="d-flex align-items-center me-3">
                <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                <span className="fs-sm">5</span>
              </div>
              <div className="d-flex align-items-center me-3">
                <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                <span className="fs-sm">3</span>
              </div>
              <div className="d-flex align-items-center">
                <IconifyIcon icon="bx-share-alt" className="fs-lg me-1" />
                <span className="fs-sm">9</span>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </article>
  );
};

export default Business1;
