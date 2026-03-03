import Single01 from '@/assets/img/portfolio/single/01.jpg';
import single02 from '@/assets/img/portfolio/single/03.jpg';
import single04 from '@/assets/img/portfolio/single/04.jpg';
import single05 from '@/assets/img/portfolio/single/05.jpg';
import single06 from '@/assets/img/portfolio/single/02.jpg';
import { Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const About = () => {
  return (
    <>
      <section className="container py-5 my-1 my-md-4 my-lg-5">
        <Row>
          <Col lg={7} className="mb-4 mb-lg-0">
            <div className="pe-lg-4 me-lg-3 pe-xl-0 me-xl-0">
              <h2 className="h1 mb-4">About</h2>
              <p className="fs-lg mb-0">
                Lacinia pulvinar at diam, urna, non blandit. Cras id enim tortor nascetur. Cursus
                ante eu nam ut non vestibulum sem. Ullamcorper quis varius eu, vel. Sagittis ut
                suspendisse et, nec. Parturient eu iaculis sit dolor, erat mauris. Leo at egestas
                aliquet duis pellentesque amet. Proin mattis ac ornare malesuada sed. Diam libero
                tortor suspendisse molestie non duis enim. Lectus pulvinar euismod et risus egestas.
                Cursus porttitor id faucibus eu vestibulum. Eu blandit faucibus nulla adipiscing
                amet ullamcorper.
              </p>
            </div>
          </Col>
          <Col lg={5} xl={4} className="offset-xl-1 border-start-lg">
            <div className="ps-lg-4 ms-lg-3">
              <h3 className="h5 d-flex align-items-center">
                <IconifyIcon icon="bx:help-circle" className="text-primary fs-4 me-2" />
                Challenge
              </h3>
              <p className="pb-4 mb-0 mb-lg-3">
                Ultricies massa iaculis vestibulum egestas vestibulum, cursus. Leo non arcu
                ultricies senectus a purus sed.
              </p>
              <h3 className="h5 d-flex align-items-center">
                <IconifyIcon icon="bx:bulb" className="text-primary fs-4 me-2" />
                Solution
              </h3>
              <p className="mb-0">
                Sit tellus id proin viverra iaculis pellentesque ornare. Diam augue sit feugiat
                porttitor leo, fusce vel ac. Placerat vulputate quisque.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="container position-relative pt-1 pt-md-3">
        <Row className="align-items-start">
          <div
            className="rellax col-lg-5 col-sm-6 mb-4 mb-sm-0"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.5"
            data-disable-parallax-down="sm"
          >
            <img src={Single01} className="rounded-3" width="526" alt="Image" />
          </div>
          <div
            className="rellax col-lg-7 col-sm-6 d-sm-flex justify-content-end pt-sm-4 pt-lg-5 mt-md-3 mb-4 mb-sm-0"
            data-rellax-percentage="0.5"
            data-rellax-speed="-1.25"
            data-disable-parallax-down="sm"
          >
            <div>
              <img src={single02} className="rounded-3" width="416" alt="Image" />
            </div>
          </div>
          <div
            className="rellax col-lg-5 col-sm-6 d-sm-flex justify-content-lg-end pt-sm-5 mt-lg-5 mb-4 mb-sm-0"
            data-rellax-percentage="0.5"
            data-rellax-speed="-1.25"
            data-disable-parallax-down="sm"
          >
            <div>
              <img src={single04} className="rounded-3" width="416" alt="Image" />
            </div>
          </div>
          <div
            className="rellax col-lg-7 col-sm-6 d-sm-flex justify-content-center mt-sm-n5 mb-4 mb-sm-0"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.25"
            data-disable-parallax-down="sm"
          >
            <div>
              <img
                src={single05}
                className="d-block rounded-3 mt-xl-n5"
                width="526"
                alt="Image"
              />
            </div>
          </div>
        </Row>
        <Row className="position-sm-absolute top-50 start-0 translate-middle-sm-y w-100 d-flex mt-md-n5">
          <div
            className="rellax col-lg-5 col-sm-6 offset-sm-3 offset-lg-4 mt-sm-n5"
            data-rellax-percentage="0.5"
            data-rellax-speed="1.4"
            data-disable-parallax-down="sm"
          >
            <img src={single06} className="d-block rounded-3 mt-xl-n5" width="526" alt="Image" />
          </div>
        </Row>
      </section>

      <section className="container py-5 my-2 my-md-4 my-lg-5">
        <Row className="py-md-3">
          <Col md={3} className="offset-lg-1">
            <h2>Results</h2>
          </Col>
          <Col lg={7} md={9}>
            <p className="fs-lg pb-4 mb-2 mb-lg-3">
              Vitae eget in vulputate quam. Turpis habitasse egestas vitae, sed tortor, nunc. Enim,
              magna duis lectus mauris magna orci, nunc. Tincidunt ultrices mauris, sed quisque.
              Vulputate volutpat egestas facilisi morbi proin sagittis. Ipsum eleifend commodo eu,
              at et adipiscing. Viverra turpis sem in tincidunt viverra aliquet eleifend. Adipiscing
              elit, donec volutpat ante aliquet imperdiet quis hendrerit.
            </p>
            <Row className="row-cols-1 row-cols-sm-3 g-4">
              <Col>
                <h3 className="h1 mb-2">+1,200</h3>
                <p className="mb-0">
                  <span className="fw-semibold">Requests</span> per Week
                </p>
              </Col>
              <Col>
                <h3 className="h1 mb-2">+760</h3>
                <p className="mb-0">
                  <span className="fw-semibold">New Clients</span> per Month
                </p>
              </Col>
              <Col>
                <h3 className="h1 mb-2">+480</h3>
                <p className="mb-0">
                  <span className="fw-semibold">Remote</span> Sales Experts
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default About;
