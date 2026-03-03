import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';

const Registration = () => {
  return (
    <section className="position-relative py-2 py-sm-3 py-md-4 py-lg-5">
      <div className="bg-gradient-primary position-absolute top-0 start-0 w-50 h-100 opacity-15 d-none d-lg-block"></div>
      <div className="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100 opacity-15 d-lg-none"></div>
      <div className="bg-dark position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"></div>

      <Container className="position-relative zindex-2 py-5 my-md-2 my-lg-3">
        <h2 className="display-5 pb-4 pb-lg-5">Join the journey!</h2>

        <Row className="align-items-center g-0">
          <Col lg={8}>
            <div className="bg-light position-relative overflow-hidden rounded-3 shadow px-3">
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              ></div>

              <div className="position-relative zindex-2 py-5 px-2 px-sm-3 px-md-4 px-lg-5">
                <div className="nav nav-justified d-lg-none">
                  {[1, 2, 3].map(step => (
                    <div key={step} className="nav-item text-center pb-2 mb-4">
                      <div
                        className={`btn btn-icon ${
                          step === 1 ? 'btn-primary' : 'btn-secondary'
                        } rounded-circle fs-lg fw-bold pe-none mb-2`}
                      >
                        {step}
                      </div>
                      <h4 className="h6 fw-bold mb-0">
                        {step === 1
                          ? 'Your request*'
                          : step === 2
                            ? 'Personal info*'
                            : 'Additional comments'}
                      </h4>
                    </div>
                  ))}
                </div>

                <h3 className="h2 pb-3 mb-lg-4">I want to:</h3>

                {[
                  'Stay update with our news, events and upgrades',
                  'Join the team and become a part of our startup family',
                  'Request a trial app',
                  'Invest in ProScooter',
                  'Other',
                ].map((label, index) => (
                  <div className="form-check mb-3" key={index}>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id={`check-${index + 1}`}
                      defaultChecked={index === 2}
                    />
                    <label htmlFor={`check-${index + 1}`} className="form-check-label fs-lg mt-n1">
                      {label}
                    </label>
                  </div>
                ))}

                <div className="d-flex pt-4 pt-lg-5 mt-4">
                  <button type="button" className="btn btn-lg btn-primary ms-auto">
                    Next
                    <IconifyIcon icon="bx:right-arrow-alt" className="fs-lg me-n1 ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} className="position-relative zindex-2 d-none d-lg-block">
            <div style={{ marginLeft: '-1.375rem' }}>
              {[
                {
                  step: 1,
                  title: 'Your request*',
                  desc: 'Please choose the type of your request and let us know how we can help.',
                },
                {
                  step: 2,
                  title: 'Personal info*',
                  desc: 'Leave your personal info and we will contact you as soon as possible.',
                },
                {
                  step: 3,
                  title: 'Additional comments',
                  desc: 'If you have any questions or comments please leave us a message. We are here for you!',
                },
              ].map((item, index) => (
                <div className={`d-flex pb-2 mb-5 ${index === 2 ? '' : ''}`} key={item.step}>
                  <div
                    className={`btn btn-icon rounded-circle fs-lg fw-bold pe-none position-relative overflow-hidden ${
                      index === 0 ? 'btn-primary' : 'bg-dark text-white'
                    }`}
                  >
                    {index > 0 && (
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      ></div>
                    )}
                    {item.step}
                  </div>
                  <div className={`ps-3 ms-1 ${index === 0 ? '' : 'opacity-50'}`}>
                    <h4 className="h5 text-white fw-bold pb-1 mb-2">{item.title}</h4>
                    <p className="text-white opacity-70 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Registration;
