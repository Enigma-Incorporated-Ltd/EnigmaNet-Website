import cover from '@/assets/img/landing/conference/video-cover.jpg';
import GlightBox from '@/components/GlightBox';
import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';

const Highlights = () => {
  return (
    <section className="bg-secondary py-5">
      <Container className="py-2 py-md-4 py-lg-5">
        <h3 className="h1 text-center mb-lg-4">Previous Year Highlights</h3>
        <p className="fs-lg text-muted text-center mb-4 mb-lg-5">
          Watch the short video and check out how the last NY Digital Conference unfolded.
        </p>
        <div className="position-relative overflow-hidden rounded-3 mb-4 mb-lg-5">
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
          <img src={cover} alt="Video cover" />
          <div className="position-absolute top-0 start-0 w-100 h-100 zindex-5 d-flex align-items-center justify-content-center">
            <GlightBox
              href="https://www.youtube.com/watch?v=LBfAnFX15nc"
              className="btn btn-video btn-icon bg-white btn-xl stretched-link"
            >
              <IconifyIcon icon="bx:play" fontSize={28} />
            </GlightBox>
          </div>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 pt-2 pt-md-3 pt-lg-2">
          <Col>
            <div className="d-flex align-items-center">
              <div className="display-4 text-primary">20+</div>
              <p className="ps-3 mb-0">Hours of digital content,workshops &amp; side-events</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex align-items-center">
              <div className="display-4 text-primary">3K+</div>
              <p className="ps-3 mb-0">Industry experts, students, and enthusiasts</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex align-items-center">
              <div className="display-4 text-primary">18</div>
              <p className="ps-3 mb-0">
                Digital experts, instructors and panelists for our side-events
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Highlights;
