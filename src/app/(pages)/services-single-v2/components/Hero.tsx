import dental from '@/assets/img/services/single/dental.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="container pt-4 pb-5 mb-lg-5">
      <nav className="d-md-none pb-3 mb-2 mb-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/index">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item">
            <Link to="#">Services</Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item" aria-current="page">
            Dental Care
          </li>
        </ol>
      </nav>

      <Row className="row-cols-1 row-cols-md-2 g-0 pb-2">
        <Col
          className="order-md-2 position-relative bg-position-center bg-size-cover bg-repeat-0 zindex-2"
          style={{
            backgroundImage: `url(${dental})`,
            borderRadius: '.5rem .5rem .5rem 0',
          }}
        >
          <div style={{ height: '250px' }}></div>
        </Col>

        <Col className="order-md-1">
          <nav className="d-none d-md-block py-3 mb-2 mb-lg-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/index">
                  <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
                  Home
                </Link>
              </li>
              <span className="d-flex align-items-center mx-2">
                <IconifyIcon icon="bx:chevrons-right" />
              </span>
              <li className="breadcrumb-item">
                <Link to="#">Services</Link>
              </li>
              <span className="d-flex align-items-center mx-2">
                <IconifyIcon icon="bx:chevrons-right" />
              </span>
              <li className="breadcrumb-item active" aria-current="page">
                Dental Care
              </li>
            </ol>
          </nav>

          <div className="bg-secondary rounded-3 p-4 p-lg-5 mt-n2 mt-md-0 me-md-n2">
            <div className="px-sm-3 px-xl-4 pt-4 py-md-3 py-lg-4 py-xl-5">
              <h1 className="pb-2 pb-xxl-3">Dental Care</h1>
              <p className="pb-2 mb-4 mb-xxl-5">
                Vestibulum nunc lectus auctor quis natoque lectus tortor lacus, eu nunc feugiat nisl
                maecenas nulla hac morbi. Sollicitudin cursus in habitasse adipiscing sed aenean
                sapien maecenas lectus auctor. Non feugiat feugiat egestas nulla nec. Arcu tempus,
                eget elementum dolor ullamcorper sodales ultrices eros.
              </p>
              <div className="d-xxl-flex align-items-center">
                <Link to="#" className="btn btn-primary shadow-primary btn-lg">
                  Make an appointment
                </Link>
                <ul className="list-unstyled ps-xxl-4 pt-4 pt-xxl-0 ms-xxl-2">
                  <li>
                    <strong>Mon &mdash; Fri:</strong> 9:00 am &mdash; 22:00 am
                  </li>
                  <li>
                    <strong>Sat &mdash; Sun:</strong> 9:00 am &mdash; 20:00 am
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
