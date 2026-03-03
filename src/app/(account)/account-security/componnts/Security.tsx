
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';

const Security = () => {
  const [showPassword, setShowPassword] = useState({
    cp: false,
    np: false,
    cnp: false,
  });

  const handleToggle = (field: 'cp' | 'np' | 'cnp') => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <Col md={8} lg={{ span: 7, offset: 1 }} className="pb-5 mb-lg-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
        <h1 className="h2 pt-xl-1 pb-3">Security</h1>

        <h2 className="h5 text-primary mb-4">Password</h2>
        <Form className="needs-validation border-bottom pb-3 pb-lg-4" noValidate>
          <Row>
            <Col sm={6} className="mb-4">
              <Form.Label htmlFor="cp" className="fs-base">
                Current password
              </Form.Label>
              <div className="password-toggle position-relative">
                <Form.Control
                  type={showPassword.cp ? 'text' : 'password'}
                  id="cp"
                  size="lg"
                  defaultValue="jonnyPass"
                  required
                />
                <Button
                  variant="link"
                  className="password-toggle-btn p-0 border-0"
                  onClick={() => handleToggle('cp')}
                >
                  <IconifyIcon icon={showPassword.np ? 'bx-show' : 'bx-hide'} className="fs-4" />
                </Button>
                <div className="invalid-tooltip position-absolute top-100 start-0">
                  Incorrect password!
                </div>
              </div>
            </Col>
          </Row>

          <Row className="pb-2">
            <Col sm={6} className="mb-4">
              <Form.Label htmlFor="np" className="fs-base">
                New password
              </Form.Label>
              <div className="password-toggle position-relative">
                <Form.Control
                  type={showPassword.np ? 'text' : 'password'}
                  id="np"
                  size="lg"
                  required
                />
                <Button
                  variant="link"
                  className="password-toggle-btn p-0 border-0"
                  onClick={() => handleToggle('np')}
                >
                  <IconifyIcon icon={showPassword.np ? 'bx-show' : 'bx-hide'} className="fs-4" />
                </Button>
                <div className="invalid-tooltip position-absolute top-100 start-0">
                  Incorrect password!
                </div>
              </div>
            </Col>

            <Col sm={6} className="mb-4">
              <Form.Label htmlFor="cnp" className="fs-base">
                Confirm new password
              </Form.Label>
              <div className="password-toggle position-relative">
                <Form.Control
                  type={showPassword.cnp ? 'text' : 'password'}
                  id="cnp"
                  size="lg"
                  required
                />
                <Button
                  variant="link"
                  className="password-toggle-btn p-0 border-0"
                  onClick={() => handleToggle('cnp')}
                >
                  <IconifyIcon icon={showPassword.np ? 'bx-show' : 'bx-hide'} className="fs-4" />
                </Button>
                <div className="invalid-tooltip position-absolute top-100 start-0">
                  Incorrect password!
                </div>
              </div>
            </Col>
          </Row>

          <div className="d-flex mb-3">
            <Button type="reset" variant="secondary" className="me-3">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save changes
            </Button>
          </div>
        </Form>

        <h2 className="h5 text-primary pt-1 pt-lg-3 mt-4">Your sessions</h2>
        <p className="pb-3 mb-3">
          This is a list of devices that have logged into your account. Remove any sessions that you
          do not recognize.
        </p>

        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-start me-3">
              <div className="bg-secondary rounded-1 p-2">
                <IconifyIcon icon="bx:desktop" className="fs-xl text-primary d-block" />
              </div>
              <div className="ps-3">
                <div className="fw-medium text-nav mb-1">Mac – New York, USA</div>
                <span className="d-inline-block fs-sm text-muted border-end pe-2 me-2">Chrome</span>
                <span className="badge bg-success shadow-success">Active now</span>
              </div>
            </div>
            <Button variant="outline-secondary" className="px-3 px-sm-4">
              <IconifyIcon icon="bx:x" className="fs-xl ms-sm-n1 me-sm-1" />
              <span className="d-none d-sm-inline">Remove</span>
            </Button>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-start me-3">
              <div className="bg-secondary rounded-1 p-2">
                <IconifyIcon icon="bx:mobile" className="fs-xl text-primary d-block"></IconifyIcon>
              </div>
              <div className="ps-3">
                <div className="fw-medium text-nav mb-1">iPhone 12 – New York, USA</div>
                <span className="d-inline-block fs-sm text-muted border-end pe-2 me-2">
                  Silicon App
                </span>
                <span className="d-inline-block fs-sm text-muted">20 hours ago</span>
              </div>
            </div>
            <Button variant="outline-secondary" className="px-3 px-sm-4">
              <IconifyIcon icon="bx:x" className="fs-xl ms-sm-n1 me-sm-1" />
              <span className="d-none d-sm-inline">Remove</span>
            </Button>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-start me-3">
              <div className="bg-secondary rounded-1 p-2">
                <IconifyIcon icon="bx:desktop" className="fs-xl text-primary d-block" />
              </div>
              <div className="ps-3">
                <div className="fw-medium text-nav mb-1">Windows 10.1 – New York, USA</div>
                <span className="d-inline-block fs-sm text-muted border-end pe-2 me-2">Chrome</span>
                <span className="d-inline-block fs-sm text-muted">November 15 at 8:42 am</span>
              </div>
            </div>
            <Button variant="outline-secondary" className="px-3 px-sm-4">
              <IconifyIcon icon="bx:x" className="fs-xl ms-sm-n1 me-sm-1" />
              <span className="d-none d-sm-inline">Remove</span>
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Col>
  );
};

export default Security;
