import avatar08 from '@/assets/img/avatar/08.jpg';
import avatar15 from '@/assets/img/avatar/15.jpg';
import avatar16 from '@/assets/img/avatar/16.jpg';
import layer01 from '@/assets/img/landing/online-courses/hero/layer01.png';
import layer02 from '@/assets/img/landing/online-courses/hero/layer02.png';
import layer03 from '@/assets/img/landing/online-courses/hero/layer03.png';
import layer04 from '@/assets/img/landing/online-courses/hero/layer04.png';
import layer05 from '@/assets/img/landing/online-courses/hero/layer05.png';
import layer06 from '@/assets/img/landing/online-courses/hero/layer06.png';


import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import Parallax from '@/components/Parallax';

const Hero = () => {
  return (
    <section className="position-relative py-5">
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10"></div>

      <Container className="position-relative zindex-2 py-lg-4">
        <Row>
          <Col lg={5} className="d-flex flex-column pt-lg-4 pt-xl-5">
            <h5 className="my-2">Welcome!</h5>
            <h1 className="display-3 mb-4">
              Learn <span className="text-primary">IT Online</span> with No Limits
            </h1>
            <p className="fs-lg mb-5">
              Enjoy our great selection of IT courses. Choose from more than 25K online video
              courses and become an IT expert now!
            </p>

            <form className="d-none d-sm-flex mb-5">
              <div className="input-group d-block d-sm-flex input-group-lg me-3">
                <input type="text" className="form-control w-50" placeholder="Search courses..." />
                <select className="form-select w-50">
                  <option value="" selected disabled>
                    Categories
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Programming">Programming</option>
                  <option value="Game Development">Game Development</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Network & Security">Network &amp; Security</option>
                </select>
              </div>
              <button type="submit" className="btn btn-icon btn-primary btn-lg" aria-label="Search">
                <IconifyIcon icon="bx:search" fontSize={24} />
              </button>
            </form>

            <form className="d-sm-none mb-5">
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                placeholder="Search courses..."
              />
              <select className="form-select form-select-lg mb-2">
                <option value="" selected disabled>
                  Categories
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Programming">Programming</option>
                <option value="Game Development">Game Development</option>
                <option value="Software Testing">Software Testing</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Network & Security">Network &amp; Security</option>
              </select>
              <button
                type="submit"
                className="btn btn-icon btn-primary btn-lg w-100 d-sm-none"
                aria-label="Search"
              >
                <IconifyIcon icon="bx:search" />
              </button>
            </form>
            <div className="d-flex align-items-center mt-auto mb-3 mb-lg-0 pb-4 pb-lg-0 pb-xl-5">
              <div className="d-flex me-3">
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img src={avatar08} className="rounded-circle" width="48" alt="Avatar" />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img src={avatar15} className="rounded-circle" width="48" alt="Avatar" />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img src={avatar16} className="rounded-circle" width="48" alt="Avatar" />
                </div>
              </div>
              <span className="fs-sm">
                <span className="text-primary fw-semibold">10K+</span> students are already with us
              </span>
            </div>
          </Col>
          <Col lg={7}>
            <Parallax>
              <div className="parallax mx-auto me-lg-0" style={{ maxWidth: '648px' }}>
                <div className="parallax-layer" data-depth="0.1">
                  <img src={layer01} alt="Layer" />
                </div>
                <div className="parallax-layer" data-depth="0.13">
                  <img src={layer02} alt="Layer" />
                </div>
                <div className="parallax-layer zindex-5" data-depth="-0.12">
                  <img src={layer03} alt="Layer" />
                </div>
                <div className="parallax-layer zindex-3" data-depth="0.27">
                  <img src={layer04} alt="Layer" />
                </div>
                <div className="parallax-layer zindex-1" data-depth="-0.18">
                  <img src={layer04} alt="Layer" />
                </div>
                <div className="parallax-layer zindex-1" data-depth="0.1">
                  <img src={layer05} alt="Layer" />
                </div>
                <div className="parallax-layer zindex-1" data-depth="0.1">
                  <img src={layer06} alt="Layer" />
                </div>
              </div>
            </Parallax>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
