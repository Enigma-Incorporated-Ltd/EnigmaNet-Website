import { Container, Row, Col } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Branches = () => {
  return (
    <section className="py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
      <Container>
        <Row className="py-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
              <iframe
                className="d-block h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5020.057277316842!2d-122.40737351959179!3d37.73986147046842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd5ce6be90058bc85!2sOur%20Planet%20Recycling%20S.F.!5e0!3m2!1sen!2sua!4v1653946944869!5m2!1sen!2sua"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </Col>

          <Col lg={{ span: 5, offset: 1 }}>
            <h2 className="h4 mb-4">Medical Center 1</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <IconifyIcon
                  icon="bx:map"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                445 Bayshor Blvd, San Francisco, CA 94124
              </li>
              <li className="d-flex pb-1 mb-2">
                <IconifyIcon
                  icon="bx:phone-call"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                (406) 555-0120
              </li>
              <li className="d-flex">
                <IconifyIcon
                  icon="bx:time-five"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                <div>
                  <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 22:00 am
                  <br />
                  <strong className="text-nav">Sat - Sun</strong>: 9:00 am - 20:00 am
                </div>
              </li>
            </ul>

            <h2 className="h4 mb-4">Medical Center 2</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <IconifyIcon
                  icon="bx:map"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                2464 Royal Ln. Mesa, New Jersey 45463
              </li>
              <li className="d-flex pb-1 mb-2">
                <IconifyIcon
                  icon="bx:phone-call"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                (406) 544-0123
              </li>
              <li className="d-flex">
                <IconifyIcon
                  icon="bx:time-five"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                <div>
                  <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 22:00 am
                  <br />
                  <strong className="text-nav">Sat - Sun</strong>: 9:00 am - 20:00 am
                </div>
              </li>
            </ul>

            <div className="d-flex pt-1 pt-md-3 pt-xl-4">
              <Link to="#" className="btn btn-icon btn-secondary me-3" aria-label="Facebook">
                <IconifyIcon icon="bxl:facebook" fontSize={20} />
              </Link>
              <Link to="#" className="btn btn-icon btn-secondary me-3" aria-label="Instagram">
                <IconifyIcon icon="bxl:instagram" fontSize={20} />
              </Link>
              <Link to="#" className="btn btn-icon btn-secondary me-3" aria-label="Twitter">
                <IconifyIcon icon="bxl:twitter" fontSize={20} />
              </Link>
              <Link to="#" className="btn btn-icon btn-secondary" aria-label="YouTube">
                <IconifyIcon icon="bxl:youtube" fontSize={20} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Branches;
