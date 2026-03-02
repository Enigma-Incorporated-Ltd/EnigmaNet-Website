import blog01 from '@/assets/img/blog/01.jpg';
import GlightBox from '@/components/GlightBox';
import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Startups1 = () => {
  return (
    <article className="card border-0 bg-transparent me-xl-5">
      <Row className="g-0">
        <div
          className="col-sm-5 position-relative bg-position-center bg-repeat-0 bg-size-cover rounded-3 overflow-hidden"
          style={{ backgroundImage: `url(${blog01})`, minHeight: '15rem' }}
        >
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
          <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 zindex-2">
            <GlightBox
              href="https://www.youtube.com/watch?v=vTgKtoU--Z8"
              className="btn btn-video btn-icon btn-lg bg-white stretched-link"
              data-bs-toggle="video"
              aria-label="Play video"
            >
              <IconifyIcon icon="bx:play" fontSize={20} />
            </GlightBox>
          </div>
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
        </div>
        <Col sm={7}>
          <CardBody className="px-0 pt-sm-0 ps-sm-4 pb-0 pb-sm-4">
            <Link
              to="#"
              className="badge fs-sm text-white bg-success shadow-success text-decoration-none mb-3"
            >
              Startups
            </Link>
            <h3 className="h4">
              <Link to="/blog-single">
                5 Bad Landing Page Examples &amp; How We Would Fix Them
              </Link>
            </h3>
            <p className="mb-4">
              Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at
              dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent.
            </p>
            <div className="d-flex align-items-center text-muted">
              <div className="fs-sm border-end pe-3 me-3">Sep 3, 2023</div>
              <div className="d-flex align-items-center me-3">
                <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                <span className="fs-sm">8</span>
              </div>
              <div className="d-flex align-items-center me-3">
                <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                <span className="fs-sm">7</span>
              </div>
              <div className="d-flex align-items-center">
                <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                <span className="fs-sm">3</span>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </article>
  );
};

export default Startups1;
