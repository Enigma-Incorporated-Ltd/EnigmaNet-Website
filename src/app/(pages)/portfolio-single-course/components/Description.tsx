import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const Description = () => {
  return (
    <section className="container pt-5 mt-2 mt-lg-4 mt-xl-5">
      <Row>
        <aside className="col-lg-4 col-md-5 offset-xl-1 order-md-2 mb-5">
          <div style={{ marginTop: '-96px' }}></div>
          <div className="position-sticky top-0 pt-5">
            <div className="pt-5 mt-md-3">
              <Card className="shadow-sm p-sm-3">
                <CardBody>
                  <h4 className="mb-4">This course includes:</h4>
                  <ul className="list-unstyled pb-3">
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:slideshow" className="fs-xl text-muted me-2 pe-1" />
                      220 hours on-demand video
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      18 articles
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      25 downloadable resources
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Full lifetime access
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      Certificate of completion
                    </li>
                  </ul>
                  <div className="h2 d-flex align-items-center mb-4">
                    $28.99<del className="text-muted fs-xl fw-normal ms-2">49.99</del>
                  </div>
                  <a href="#" className="btn btn-primary btn-lg shadow-primary">
                    Join the course
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
        </aside>

        <Col xl={7} lg={8} md={7} className="order-md-1 mb-5">
          <h2 className="h1 pb-md-2 pb-lg-3">Course description</h2>
          <p className="pb-4 mb-3">
            Suspendisse natoque sagittis, consequat turpis. Sed tristique tellus morbi magna. At vel
            senectus accumsan, arcu mattis id tempor. Tellus sagittis, euismod porttitor sed tortor
            est id. Feugiat velit velit, tortor ut. Ut libero cursus nibh lorem urna amet tristique
            leo. Viverra lorem arcu nam nunc at ipsum quam. A proin id sagittis dignissim mauris
            condimentum ornare. Tempus mauris sed dictum ultrices.
          </p>
          <h3 className="mb-4">What you'll learn</h3>
          <ul className="list-unstyled mb-5">
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check-circle" className="text-primary fs-xl me-2" />
              Sed lectus donec amet eu turpis interdum.
            </li>
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check-circle" className="text-primary fs-xl me-2" />
              Nulla at consectetur vitae dignissim porttitor.
            </li>
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check-circle" className="text-primary fs-xl me-2" />
              Phasellus id vitae dui aliquet mi.
            </li>
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check-circle" className="text-primary fs-xl me-2" />
              Integer cursus vitae, odio feugiat iaculis aliquet diam, et purus.
            </li>
            <li className="d-flex align-items-center mb-2">
              <IconifyIcon icon="bx:check-circle" className="text-primary fs-xl me-2" />
              In aenean dolor diam tortor orci eu.
            </li>
          </ul>

          <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">Program details</h2>
          <div className="steps steps-sm">
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">1</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Introduction. Getting started</h4>
                <p className="mb-0">
                  Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse
                  gravida hendrerit tempus placerat.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">The ultimate HTML developer: advanced HTML</h4>
                <p className="mb-0">
                  Lobortis diam elit id nibh ultrices sed penatibus donec. Nibh iaculis eu sit cras
                  ultricies. Nam eu eget etiam egestas donec scelerisque ut ac enim. Vitae ac nisl,
                  enim nec accumsan vitae est.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">CSS &amp; CSS3: basic</h4>
                <p className="mb-0">
                  Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices
                  mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">JavaScript basics for beginners</h4>
                <p className="mb-0">
                  Morbi porttitor risus imperdiet a, nisl mattis. Amet, faucibus eget in platea
                  vitae, velit, erat eget velit. At lacus ut proin erat.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Understanding APIs</h4>
                <p className="mb-0">
                  Risus morbi euismod in congue scelerisque fusce pellentesque diam consequat. Nisi
                  mauris nibh sed est morbi amet arcu urna. Malesuada feugiat quisque consectetur
                  elementum diam vitae. Dictumst facilisis odio eu quis maecenas risus odio fames
                  bibendum ullamcorper.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">6</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Python from beginner to advanced</h4>
                <p className="mb-0">
                  Quis risus quisque diam diam. Volutpat neque eget eu faucibus sed urna fermentum
                  risus. Est, mauris morbi nibh massa.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Description;
