
import { Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <section className="container pb-5 mb-md-2 mb-lg-4">
      <h1 className="border-bottom pb-4">Who We Are</h1>
      <Row className="pt-2 pt-md-3">
        <Col md={6}>
          <p className="fs-lg pe-lg-4 mb-1 mb-lg-4">
            Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc
            pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet
            dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus
            nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit
            lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci. Vitae nibh amet
            lorem pellentesque.
          </p>
        </Col>
        <Col md={6}>
          <p className="fs-lg ps-lg-4 mb-1 mb-lg-4">
            Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam
            in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit
            mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor
            ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc
            malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
