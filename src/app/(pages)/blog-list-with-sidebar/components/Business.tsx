import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

import {
  Badge,
  Card,
  CardBody,
  CardText,
  CardTitle,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';

const Business = () => {
  return (
    <Card className="me-xl-5 mb-4">
      <CardBody>
        <div className="d-flex justify-content-between mb-3 position-relative">
          <Badge bg="warning" text="white" pill>
            Business
          </Badge>

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
              <IconifyIcon icon="bx:bookmark" fontSize={20} />
            </Link>
          </OverlayTrigger>
        </div>

        <CardTitle as="h3" className="h4">
          <Link to="/blog-single" className="text-decoration-none">
            A Study on Smartwatch Design Qualities and People’s Preferences
          </Link>
        </CardTitle>

        <CardText className="mb-4">
          Sed parturient in faucibus porttitor morbi rutrum in. Amet fermentum, scelerisque
          suspendisse nisi faucibus quis lacus. Convallis eget pretium leo, egestas nisl, congue
          quam et ultrices. Pharetra, elementum pulvinar massa mattis sapien, sit. Id sollicitudin
          viverra morbi vitae ac tempor bibendum pulvinar vel. Integer non mattis ultrices est morbi
          ullamcorper scelerisque hac mi. Id semper ut dui sit magna.
        </CardText>

        <div className="d-flex align-items-center text-muted">
          <div className="fs-sm border-end pe-3 me-3">Sep 3, 2023</div>
          <div className="d-flex align-items-center me-3">
            <IconifyIcon icon="bx:like" className="fs-lg me-1" />
            <span className="fs-sm">8</span>
          </div>
          <div className="d-flex align-items-center me-3">
            <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
            <span className="fs-sm">7</span>
          </div>
          <div className="d-flex align-items-center">
            <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
            <span className="fs-sm">3</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Business;
