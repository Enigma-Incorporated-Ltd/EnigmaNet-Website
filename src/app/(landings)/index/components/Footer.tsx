import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer border-top pt-5 pb-4 pb-lg-5">
      <Container className="text-center pt-2 pt-md-4 pt-lg-5 pb-xl-3">
        <Row className="justify-content-center pt-xxl-2">
          <Col xl={6} lg={7} md={9} sm={11}>
            <h2 className="h1 pb-3 mb-3">Subscribe to Our Newsletter</h2>
            <form
              className="subscription-form position-relative validate"
              action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
              method="post"
              name="mc-embedded-subscribe-form"
            >
              <div className="d-flex flex-column flex-sm-row">
                <div className="position-relative w-100 mb-3 mb-sm-0 me-sm-3">
                  <input
                    className="form-control form-control-lg ps-5"
                    type="email"
                    name="EMAIL"
                    placeholder="Your email"
                    required
                  />
                  <IconifyIcon
                    icon="bx:envelope"
                    className="fs-xl text-muted position-absolute top-50 start-0 translate-middle-y ms-3"
                  />
                </div>
                <button
                  className="btn btn-primary shadow-primary btn-lg"
                  type="submit"
                  name="subscribe"
                >
                  Subscribe*
                </button>
              </div>

              <div style={{ position: 'absolute', left: '-5000px' }}>
                <input
                  className="subscription-form-antispam"
                  type="text"
                  name="b_c7103e2c981361a6639545bd5_29ca296126"
                  tabIndex={-1}
                />
              </div>
              <p className="mt-4 mb-0">
                *Enjoy using Silicon Template and stay tuned for the latest updates and news.
              </p>
              <div className="subscription-status position-absolute top-100 start-50 translate-middle-x"></div>
            </form>
          </Col>
        </Row>
        <div className="pt-5 mt-lg-3 mt-xl-4">
          <p className="text-muted mb-0">
            &copy; All rights reserved. Made with{' '}
            <IconifyIcon
              icon="bx:heart"
              className="d-inline-block fs-lg text-gradient-primary align-middle mt-n1 mx-1"
            />{' '}
            by&nbsp;{' '}
            <Link to="https://coderthemes.com/" className="text-muted" rel="noopener">
              Coderthemes
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
