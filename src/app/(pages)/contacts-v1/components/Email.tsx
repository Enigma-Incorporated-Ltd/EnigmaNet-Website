import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const Email = () => {
  return (
    <section className="container py-5 my-md-2 my-lg-4 my-xl-5">
      <Row className="justify-content-center pt-5 pb-1 pb-sm-2 pb-md-3">
        <Col xxl={8} xl={9} lg={10} className="pt-sm-2 pt-md-5">
          <div className="d-sm-flex">
            <div className="d-flex flex-column w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5 pb-3 pb-sm-0 mb-4 mb-sm-0">
              <CardBody className="p-0">
                <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                  <IconifyIcon icon="bx:envelope" />
                </div>
                <p className="pb-2 pb-sm-3 mb-3">
                  Please feel free to drop us a line. We will respond as soon as possible.
                </p>
              </CardBody>
              <div className="card-footer border-0 p-0">
                <Link to="mailto:email@example.com" className="btn btn-lg btn-primary">
                  Send email
                </Link>
              </div>
            </div>
            <div className="vr text-border d-none d-sm-inline-block m-4"></div>
            <Card className="w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5">
              <CardBody className="p-0">
                <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                  <IconifyIcon icon="bx:phone-call" />
                </div>
                <p className="pb-2 pb-sm-3 mb-3">
                  If you need immediate assistance feel free to call us any time.
                </p>
              </CardBody>
              <div className="card-footer border-0 p-0">
                <Link to="tel:4065550120" className="btn btn-lg btn-primary">
                  Call&nbsp;us
                </Link>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Email;
