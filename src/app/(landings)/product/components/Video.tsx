import videoCover from '@/assets/img/landing/product/video-cover.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import GlightBox from '@/components/GlightBox';
import IconifyIcon from '@/components/IconifyIcon';

const Video = () => {
  return (
    <section className="mb-5 pt-md-2 pt-lg-4 pt-xl-5">
      <Container className="mt-4 pt-2">
        <Row className="row-cols-md-2 row-cols-1 gy-4 mb-5">
          <Col>
            <h2 className="h1 mb-0">
              Shoot like a pro with our new easy to use{' '}
              <span className="text-primary">ProDrone 2.0</span>
            </h2>
          </Col>
          <Col>
            <p className="mb-0 fs-lg">
              Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and 20MP photos,
              ProDrone 2.0 grants filmmakers absolute creative freedom. It carefully optimizes user
              experience and intelligent features.{' '}
            </p>
          </Col>
        </Row>
        <div className="position-relative rounded-3 overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
            <GlightBox
              href="https://www.youtube.com/watch?v=aOwTUgqUfH8"
              className="btn btn-video btn-icon btn-xl stretched-link bg-white"
              data-bs-toggle="video"
              aria-label="Play video"
            >
              <IconifyIcon icon="bx:play" fontSize={28} />
            </GlightBox>
          </div>
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></span>
          <img src={videoCover} alt="Cover image" />
        </div>
      </Container>
    </section>
  );
};

export default Video;
