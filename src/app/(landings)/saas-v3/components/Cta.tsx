import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import sass3 from '@/assets/img/landing/saas-3/cta-bg.jpg';

const Cta = () => {
  return (
    <Container>
      <div
        className="bg-dark bg-size-cover bg-position-center bg-repeat-0 position-relative overflow-hidden rounded-3 py-lg-3 py-xl-5 px-4 px-lg-5 px-xl-0"
        style={{ backgroundImage: `url(${sass3})` }}
        data-bs-theme="dark"
      >
        <Row className="position-relative zindex-2 py-5 my-1 my-md-3">
          <Col md={6}>
            <div className="mx-auto" style={{ maxWidth: '440px' }}>
              <h2 className="h1 pb-1 pb-md-3 pb-lg-4">Let's start your investing easier now!</h2>
              <ul className="list-unstyled fs-lg d-md-none pb-3">
                <li className="d-flex text-body mb-2">
                  <IconifyIcon
                    icon="bx:check"
                    className="lead text-primary me-2"
                    style={{ marginTop: '.125rem' }}
                  />
                  Purus vestibulum pharetra amet tincidunt pretium
                </li>
                <li className="d-flex text-body mb-2">
                  <IconifyIcon
                    icon="bx:check"
                    className="lead text-primary me-2"
                    style={{ marginTop: '.125rem' }}
                  />
                  Haretra justo magna pharetra dui gravida sed nec
                </li>
                <li className="d-flex text-body">
                  <IconifyIcon
                    icon="bx:check"
                    className="lead text-primary me-2"
                    style={{ marginTop: '.125rem' }}
                  />
                  Venenatis risus faucibus volutpat amet feugiat a
                </li>
              </ul>
              <Link to="#" className="btn btn-lg btn-primary shadow-primary w-100 w-sm-auto">
                Start trial now
              </Link>
            </div>
          </Col>
          <Col md={6} className="pt-lg-3 pt-xl-4">
            <ul className="list-unstyled fs-lg d-none d-md-block">
              <li className="d-flex text-body mb-2">
                <IconifyIcon
                  icon="bx:check"
                  className="lead text-primary me-2"
                  style={{ marginTop: '.125rem' }}
                />
                Purus vestibulum pharetra amet tincidunt pretium
              </li>
              <li className="d-flex text-body mb-2">
                <IconifyIcon
                  icon="bx:check"
                  className="lead text-primary me-2"
                  style={{ marginTop: '.125rem' }}
                />
                Haretra justo magna pharetra dui gravida sed nec
              </li>
              <li className="d-flex text-body">
                <IconifyIcon
                  icon="bx:check"
                  className="lead text-primary me-2"
                  style={{ marginTop: '.125rem' }}
                ></IconifyIcon>
                Venenatis risus faucibus volutpat amet feugiat a
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cta;
