import IconifyIcon from '@/components/IconifyIcon';
import { Col, Form, FormSelect, Row } from 'react-bootstrap';

const Notification = () => {
  return (
    <Col md={8} className="offset-lg-1 pb-5 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <Form className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
        <div className="d-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
          <h1 className="h2 mb-0">Notifications</h1>
          <button type="button" className="btn btn-outline-danger px-3 px-sm-4">
            <IconifyIcon icon="bx:bell-off" className="fs-xl me-sm-1" />
            <span className="d-none d-sm-inline">Pause all notifications</span>
          </button>
        </div>

        <Row className="align-items-end pb-3 mb-2 mb-sm-4">
          <Col lg={6} sm={7}>
            <Form.Label htmlFor="notifications-email" className="form-label fs-base">
              Preferred email
            </Form.Label>
            <FormSelect id="notifications-email" className="form-select form-select-lg">
              <option value="jonny@email.com">jonny@email.com</option>
              <option value="john_doe@email.com">john_doe@email.com</option>
            </FormSelect>
          </Col>
          <Col lg={6} sm={5}>
            <button type="button" className="btn btn-link btn-lg px-0">
              <IconifyIcon icon="bx:plus" className="fs-xl me-2" />
              Add new email
            </button>
          </Col>
        </Row>

        <Form.Check
          type="switch"
          id="activity"
          className="form-switch form-switch-success d-flex mb-4"
          label={
            <label htmlFor="activity" className="form-check-label ps-3">
              <span className="h6 d-block mb-2">Activity updates</span>
              <span className="fs-sm text-muted">
                Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque
                ullamcorper.
              </span>
            </label>
          }
          defaultChecked
        />

        <Form.Check
          type="switch"
          id="letters"
          className="form-switch form-switch-success d-flex mb-4"
          label={
            <label htmlFor="letters" className="form-check-label ps-3">
              <span className="h6 d-block mb-2">Info letters from our partners</span>
              <span className="fs-sm text-muted">
                Tortor massa porttitor enim tristique neque fermentum sed.
              </span>
            </label>
          }
        />

        <Form.Check
          type="switch"
          id="account"
          className="form-switch form-switch-success d-flex mb-4"
          label={
            <label htmlFor="account" className="form-check-label ps-3">
              <span className="h6 d-block mb-2">Account activity</span>
              <span className="fs-sm text-muted">
                Maecenas aenean porta sit integer a duis commodo massa pulvinar.
              </span>
            </label>
          }
          defaultChecked
        />

        <Form.Check
          type="switch"
          id="promotions"
          className="form-switch form-switch-success d-flex mb-4"
          label={
            <label htmlFor="promotions" className="form-check-label ps-3">
              <span className="h6 d-block mb-2">
                Promotions, recommendations &amp; helpful resources
              </span>
              <span className="fs-sm text-muted">
                Aliquam sagittis fames pharetra placerat tempus. Volutpat orci neque elit malesuada
                mauris neque, tempus.
              </span>
            </label>
          }
        />

        <Form.Check
          type="switch"
          id="summary"
          className="form-switch form-switch-success d-flex mb-4"
          label={
            <label htmlFor="summary" className="form-check-label ps-3">
              <span className="h6 d-block mb-2">Daily summary emails</span>
              <span className="fs-sm text-muted">
                Condimentum nunc, massa, nibh maecenas bibendum morbi neque.
              </span>
            </label>
          }
        />

        <div className="d-flex pt-3 mb-3">
          <button type="reset" className="btn btn-secondary me-3">
            Restore
          </button>
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Form>
    </Col>
  );
};

export default Notification;
