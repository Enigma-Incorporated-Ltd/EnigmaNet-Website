import IconifyIcon from '@/components/IconifyIcon';
import { Col } from 'react-bootstrap';

const Cta = () => {
  return (
    <section className="container">
      <div className="position-relative bg-dark rounded-3 overflow-hidden py-5 px-4 px-sm-0">
        <span
          className="position-absolute top-0 start-0 d-block w-100 h-100"
          style={{
            background:
              'radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)',
          }}
        ></span>
        <div className="position-relative row justify-content-center py-sm-2 py-lg-5">
          <Col xl={6} md={8} sm={10} className="text-center">
            <h2 className="h1 text-light mb-4">Ready to Get Started?</h2>
            <p className="fs-lg text-light opacity-70 pb-4 mb-3">
              Write your email address so we can contact you
            </p>

            <form
              className="input-group input-group-lg d-none d-sm-flex needs-validation mb-3"
              noValidate
            >
              <input
                type="email"
                className="form-control rounded-start ps-5"
                placeholder="Your email"
                required
              />
              <IconifyIcon
                icon="bx:envelope"
                className="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
              />
              <div className="invalid-tooltip position-absolute top-100 start-0">
                Please provide a valid email address.
              </div>
              <button type="submit" className="btn btn-primary">
                Get in touch
              </button>
            </form>

            <form className="needs-validation d-sm-none mb-3" noValidate>
              <div className="position-relative mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-start ps-5"
                  placeholder="Your email"
                  required
                />
                <IconifyIcon
                  icon="bx:envelope"
                  className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
                />
                <div className="invalid-tooltip position-absolute top-0 start-0 mt-n4">
                  Please provide a valid email address.
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Get in touch
              </button>
            </form>
            <p className="fs-sm text-light opacity-50 mb-0">
              No subscriptions. No annual fees. No lock-ins.
            </p>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default Cta;
