import image01 from '@/assets/img/services/single/image01.jpg';
import image02 from '@/assets/img/services/single/image02.jpg';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

const TextSession = () => {
  return (
    <section className="container pb-sm-1 pb-md-3">
      <Row className="align-items-lg-center pb-5 mb-2 mb-lg-4 mb-xl-5">
        <Col md={6} className="mb-4 mb-md-0">
          <img src={image01} className="rounded-3" alt="Image" />
        </Col>
        <Col md={6}>
          <div className="ps-xl-5 ms-md-2 ms-lg-4">
            <h2 className="h1 mb-3 mb-sm-4">
              We personalize how we work to fit your project needs
            </h2>
            <p className="mb-4 mb-lg-5">
              Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna
              ullamcorper consectetur purus quisque.
            </p>
            <Link to="#" className="btn btn-lg btn-primary shadow-primary">
              Start your project
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="align-items-lg-center pt-md-3 pb-5 mb-2 mb-lg-4 mb-xl-5">
        <Col md={6} className="order-md-2 mb-4 mb-md-0">
          <img src={image02} className="rounded-3" alt="Image" />
        </Col>
        <Col md={6} className="order-md-1">
          <div className="pe-xl-5 me-md-2 me-lg-4">
            <h2 className="h1 mb-3 mb-sm-4">Product development with the best experience</h2>
            <p className="mb-3 mb-sm-4">
              We create diverse, complex, web and mobile solutions for any business need. With us
              you get quality software and perfect service every time. Quisque integer eget velit
              facilisis enim malesuada metus, risus amet ultricies.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="d-flex mb-2">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                Quis euismod lacus, at consectetur porta
              </li>
              <li className="d-flex mb-2">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                Dictumst enim lectus dis eget non metus cras
              </li>
              <li className="d-flex">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                Risus volutpat tellus hendrerit nibh
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default TextSession;
