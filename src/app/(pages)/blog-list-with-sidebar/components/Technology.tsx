import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

import blog3 from '@/assets/img/blog/03.jpg';
import {
  Badge,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';

const Technology = () => {
  return (
    <Card className="border-0 bg-transparent me-xl-5 mb-4">
      <Row className="g-0">
        <Col
          sm={5}
          className="position-relative bg-position-center bg-repeat-0 bg-size-cover rounded-3"
          style={{
            backgroundImage: `url(${blog3})`,
            minHeight: '15rem',
          }}
        >
          <Link
            to="/blog-single"
            className="position-absolute top-0 start-0 w-100 h-100"
            aria-label="Read more"
          ></Link>

          <OverlayTrigger
            placement="left"
            overlay={<Tooltip id="tooltip-read-later">Read later</Tooltip>}
          >
            <Link
              to="#"
              className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Read later"
              aria-label="Read later"
            >
              <IconifyIcon icon="bx:bookmark" fontSize={18} />
            </Link>
          </OverlayTrigger>
        </Col>

        <Col sm={7}>
          <CardBody className="px-0 pt-sm-0 ps-sm-4 pb-0 pb-sm-4">
            <Badge bg="danger" className="mb-3 shadow-danger">
              Technology
            </Badge>

            <CardTitle as="h3" className="h4">
              <Link to="/blog-single" className="text-decoration-none">
                This Week in Search: New Limits and Exciting Features
              </Link>
            </CardTitle>

            <CardText className="mb-4">
              Aliquet donec cras amet orci in in neque. Ut sed diam quis consectetur purus lorem eu,
              sit. Aliquam eget arcu sed urna feugiat. In integer nisl at dui malesuada. Diam
              pellentesque lobortis elementum lacus.
            </CardText>

            <div className="d-flex align-items-center text-muted">
              <div className="fs-sm border-end pe-3 me-3">Sep 16, 2023</div>
              <div className="d-flex align-items-center me-3">
                <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                <span className="fs-sm">5</span>
              </div>
              <div className="d-flex align-items-center me-3">
                <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                <span className="fs-sm">7</span>
              </div>
              <div className="d-flex align-items-center">
                <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                <span className="fs-sm">4</span>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default Technology;
