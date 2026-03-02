import video from '@/assets/img/landing/app-showcase-3/video-cover.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import GlightBox from '@/components/GlightBox';

const Video = () => {
  return (
    <section className="bg-dark pt-4 pt-sm-5 overflow-hidden" data-bs-theme="dark">
      <Container className="pt-xl-4 pt-xxl-5" style={{ marginBottom: '-1.75rem' }}>
        <Row className="py-4 pb-sm-5 mb-3 mb-sm-0 mb-lg-4">
          <Col md={6} className="mb-xl-2">
            <h2 className="h1 mb-md-0" style={{ maxWidth: '560px' }}>
              The main advantage of our app is the combination of{' '}
              <span className="text-warning">simplicity</span> and{' '}
              <span className="text-warning">functionality</span>
            </h2>
          </Col>
          <Col md={6} className="mb-xl-2">
            <p className="text-body fs-xl mt-2 mb-0">
              Unlike other financial management tools that can be overwhelming with complicated
              features and confusing interfaces, our app provides a streamlined approach that is
              easy to use and understand. But simplicity should ever compromise functionality.
            </p>
          </Col>
        </Row>
        <div
          className="position-relative bg-white bg-opacity-10 p-2 p-sm-3"
          style={{ borderRadius: '20px' }}
        >
          <div className="position-relative rounded-4 overflow-hidden">
            <div className="position-absolute top-50 start-50 translate-middle zindex-2 text-center">
              <GlightBox
                href="https://www.youtube.com/watch?v=6AzbQhiX4tg"
                className="btn btn-video btn-icon btn-xl bg-white stretched-link mb-2 mb-sm-4"
              >
                <IconifyIcon icon="bx:play" fontSize={28} />
              </GlightBox>
              <div className="h6 fs-lg mb-0">Watch video</div>
              <div className="text-body fs-sm text-nowrap">See how our app is different</div>
            </div>
            <span
              className="position-absolute top-0 start-0 w-100 h-100 zindex-1 opacity-90"
              style={{
                background: 'radial-gradient(circle, rgba(11,15,25,0) 0%, rgba(8,11,18,1) 70%)',
              }}
            ></span>
            <img src={video} className="opacity-75" alt="Video cover" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Video;
