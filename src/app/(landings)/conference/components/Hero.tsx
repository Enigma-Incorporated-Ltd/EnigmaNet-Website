import { Container, Row, Col } from 'react-bootstrap';
import heroBg from '@/assets/img/landing/conference/hero-bg.png';
import avatar1 from '@/assets/img/avatar/08.jpg';
import avatar2 from '@/assets/img/avatar/40.jpg';
import avatar3 from '@/assets/img/avatar/09.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="container-fluid position-relative px-0 pt-5 mt-3 mt-lg-4">
      <Row className="g-0">
        <Col xl={7} lg={6} className="pe-lg-5">
          <div className="d-flex h-100 pe-xl-4">
            <video className="w-100" autoPlay muted loop style={{ objectFit: 'cover' }}>
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>

        <Col xl={5} lg={6} className="position-relative py-5">
          <img
            src={heroBg}
            alt="Background shapes"
            width={866}
            className="position-absolute top-50 translate-middle-y ms-lg-n4"
          />

          <div
            className="position-relative zindex-5 text-center text-lg-start px-3 px-lg-0 py-xl-4 py-xxl-5 mt-lg-3 mx-auto mx-lg-0"
            style={{ maxWidth: '530px' }}
          >
            <h2 className="h3 text-primary">Oct 14-15, 2023</h2>
            <h1 className="display-1 pb-lg-3 mb-3">NY Digital Conference</h1>

            <div className="d-flex justify-content-center justify-content-lg-start text-start mb-2">
              <IconifyIcon icon="bx:map" className="fs-4 text-primary me-2" />
              <div className="fs-xl">
                International Convention Centre,
                <br /> New York, USA
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start py-4 py-lg-5">
              <Link to="#" className="btn btn-primary shadow-primary btn-lg me-sm-3 me-xl-4 mb-3">
                Buy access pass
              </Link>
              <Link to="#" className="btn btn-outline-primary btn-lg mb-3">
                <IconifyIcon icon="bx:calendar-check" className="fs-xl me-2 ms-n1" />
                Add to calendar
              </Link>
            </div>

            <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-start pb-2 pt-lg-2 pb-xl-0 pt-xl-5 mt-xxl-5">
              <div className="d-flex me-3">
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img
                    src={avatar1}
                    alt="Avatar 1"
                    className="rounded-circle"
                    width={48}
                    height={48}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img
                    src={avatar2}
                    alt="Avatar 2"
                    className="rounded-circle"
                    width={48}
                    height={48}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img
                    src={avatar3}
                    alt="Avatar 3"
                    className="rounded-circle"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <span className="fs-sm">
                <span className="text-primary fw-semibold">400+</span> attendees are already with us
              </span>
            </div>
          </div>
        </Col>
      </Row>

      <div className="position-absolute d-none d-lg-block bottom-0 start-0 w-100 zindex-5 pb-xxl-5">
        <Container className="pb-4 mb-3 mb-xxl-0">
          <Link
            to="#speakers"
            className="d-table text-light opacity-80 text-decoration-none w-auto py-4"
            data-scroll
            data-scroll-offset="70"
          >
            <span className="d-flex align-items-center">
              Scroll for more
              <IconifyIcon icon="bx:down-arrow-circle" className="fs-3 ms-2" />
            </span>
          </Link>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
