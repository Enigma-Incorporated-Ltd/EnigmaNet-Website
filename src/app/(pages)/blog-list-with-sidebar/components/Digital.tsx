import { CardBody, Col, Row } from 'react-bootstrap';
import blog05 from '@/assets/img/blog/05.jpg';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

const Digital = () => {
  return (
    <article className="card border-0 bg-transparent me-xl-5 mb-4">
      <Row className="g-0">
        <Col
          sm={5}
          className="position-relative bg-position-center bg-repeat-0 bg-size-cover rounded-3"
          style={{ backgroundImage: `url(${blog05})`, minHeight: '15rem' }}
        >
          <Link
            to="/blog-single"
            className="position-absolute top-0 start-0 w-100 h-100"
            aria-label="Read more"
          ></Link>
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
        </Col>
        <Col sm={7}>
          <CardBody className="px-0 pt-sm-0 ps-sm-4 pb-0 pb-sm-4">
            <Link
              to="#"
              className="badge fs-sm text-white bg-info shadow-info text-decoration-none mb-3"
            >
              Digital
            </Link>
            <h3 className="h4">
              <Link to="/blog-single">Inclusive Marketing: Why and How Does it Work?</Link>
            </h3>
            <p className="mb-4">
              Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at
              dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent.
            </p>
            <div className="d-flex align-items-center text-muted">
              <div className="fs-sm border-end pe-3 me-3">Oct 9, 2023</div>
              <div className="d-flex align-items-center me-3">
                <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                <span className="fs-sm">5</span>
              </div>
              <div className="d-flex align-items-center me-3">
                <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                <span className="fs-sm">0</span>
              </div>
              <div className="d-flex align-items-center">
                <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                <span className="fs-sm">2</span>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </article>
  );
};

export default Digital;
