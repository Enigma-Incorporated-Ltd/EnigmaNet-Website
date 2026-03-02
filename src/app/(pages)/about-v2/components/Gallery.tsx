import { Col } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import GlightBox from '@/components/GlightBox';

import gallery01 from '@/assets/img/about/gallery/01.jpg';
import gallery02 from '@/assets/img/about/gallery/02.jpg';
import gallery03 from '@/assets/img/about/gallery/03.jpg';
import gallery04 from '@/assets/img/about/gallery/04.jpg';
import gallery05 from '@/assets/img/about/gallery/05.jpg';
import { Link } from 'react-router';

const Gallery = () => {
  return (
    <section className="container pb-5 mb-2 mb-md-4 mb-lg-5 mt-n2">
      <div className="d-flex align-items-center justify-content-between pb-4 mb-2">
        <h2 className="h1 mb-0">We are Powerful</h2>
        <Link to="#" className="btn btn-outline-primary btn-lg">
          <IconifyIcon icon="bx:images" className="fs-4 lh-1 me-2" />
          See all photos
        </Link>
      </div>

      <div className="gallery row g-4">
        <Col md={5}>
          <GlightBox
            href="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
            className="gallery-item video-item is-hovered rounded-3"
          >
            <IconifyIcon icon="bx:play" fontSize={28} className="video-play-icon" />
            <img src={gallery01} alt="Showreel" className="img-fluid rounded-3" />
            <div className="gallery-item-caption p-4">
              <h4 className="text-light mb-1">Silicon Inc.</h4>
              <p className="mb-0">Showreel by Marvin McKinney</p>
            </div>
          </GlightBox>
        </Col>

        <Col md={3} sm={5}>
          <GlightBox href={gallery02} className="gallery-item rounded-3 mb-4">
            <img src={gallery02} alt="apprentices" className="img-fluid rounded-3" />
            <div className="gallery-item-caption fs-sm fw-medium">Program for apprentices</div>
            <span className='indicator'>
              <IconifyIcon icon="bx:plus-circle" fontSize={20} className="z-3" />
            </span>
          </GlightBox>

          <GlightBox href={gallery03} className="gallery-item rounded-3">
            <img src={gallery03} alt="Modern bright offices" className="img-fluid rounded-3" />
            <div className="gallery-item-caption fs-sm fw-medium">
              Modern bright offices
            </div>
            <span className='indicator'>
              <IconifyIcon icon="bx:plus-circle" fontSize={20} className="z-3" />
            </span>
          </GlightBox>
        </Col>

        <Col md={4} sm={7}>
          <GlightBox href={gallery04} className="gallery-item rounded-3 mb-4">
            <img
              src={gallery04}
              alt="Friendly professional team"
              className="img-fluid rounded-3"
            />
            <div className="gallery-item-caption fs-sm fw-medium">Friendly professional team</div>
            <span className='indicator'>
              <IconifyIcon icon="bx:plus-circle" fontSize={20} className="z-3" />
            </span>
          </GlightBox>

          <GlightBox href={gallery05} className="gallery-item rounded-3">
            <img
              src={gallery05}
              alt="Efficient project management"
              className="img-fluid rounded-3"
            />
            <div className="gallery-item-caption fs-sm fw-medium">Efficient project management</div>
            <span className='indicator'>
              <IconifyIcon icon="bx:plus-circle" fontSize={20} className="z-3" />
            </span>
          </GlightBox>
        </Col>
      </div>
    </section>
  );
};

export default Gallery;
