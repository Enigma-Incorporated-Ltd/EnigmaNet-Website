import toothImg from '@/assets/img/services/single/tooth.jpg';
import icon01 from '@/assets/img/services/single/icons/01.svg';
import icon02 from '@/assets/img/services/single/icons/02.svg';
import icon03 from '@/assets/img/services/single/icons/03.svg';
import icon04 from '@/assets/img/services/single/icons/04.svg';
import icon05 from '@/assets/img/services/single/icons/05.svg';
import icon06 from '@/assets/img/services/single/icons/06.svg';
import { Col, Row } from 'react-bootstrap';

const Services = () => {
  return (
    <section className="container pb-5 mb-3 mb-md-4 mb-lg-5">
      <h2 className="h1 text-center">Diagnosis of dental diseases</h2>
      <p className="text-center pb-1 pb-sm-0 mb-4 mb-sm-5">
        Nisi augue at ridiculus ullamcorper ibendum nunc dignissim
      </p>
      <Row className="align-items-lg-center">
        <Col sm={6} lg={3}>
          <div className="pe-lg-4 pe-xl-5">
            <div className="text-center text-lg-end pb-2 mb-4 mb-xl-5">
              <img src={icon01} className="d-inline-block" width="56" alt="Dental cleaning" />
              <h3 className="h5 pt-1 my-2">Dental cleaning</h3>
              <p className="fs-sm mb-0">
                Mi ac neque gravida sit tellus elit tellus nunc ultricies semper velit sagittis
              </p>
            </div>

            <div className="text-center text-lg-end pb-2 mb-4 mb-xl-5">
              <img src={icon02} className="d-inline-block" width="56" alt="Surgery and implant" />
              <h3 className="h5 pt-1 my-2">Surgery and implant</h3>
              <p className="fs-sm mb-0">
                Diam sed sit praesent in porttitor mi posuere sem in sit arcu massa
              </p>
            </div>

            <div className="text-center text-lg-end">
              <img src={icon03} className="d-inline-block" width="56" alt="Tooth removal" />
              <h3 className="h5 pt-1 my-2">Tooth removal</h3>
              <p className="fs-sm mb-0">
                Mi habitasse in mollis orci elementum duis ultricies vehicula nullam tristique
              </p>
            </div>
          </div>
        </Col>

        <Col lg={6} className="d-none d-lg-block">
          <div
            className="ratio ratio-1x1 border rounded-circle position-relative mx-auto"
            style={{ maxWidth: '580px' }}
          >
            <div className="p-5">
              <img src={toothImg} className="rounded-circle" alt="Tooth" />
            </div>
          </div>
        </Col>

        <Col sm={6} lg={3}>
          <div className="ps-lg-4 ps-xl-5">
            <div className="text-center text-lg-start pb-2 mb-4 mb-xl-5">
              <img src={icon04} className="d-inline-block" width="56" alt="Tooth implant" />
              <h3 className="h5 pt-1 my-2">Tooth implant</h3>
              <p className="fs-sm mb-0">
                Bibendum massa nam enim erat suspendisse sagittis risus urna
              </p>
            </div>

            <div className="text-center text-lg-start pb-2 mb-4 mb-xl-5">
              <img src={icon05} className="d-inline-block" width="56" alt="Full teeth cleaning" />
              <h3 className="h5 pt-1 my-2">Full teeth cleaning</h3>
              <p className="fs-sm mb-0">
                Nisiner elit leo aliquam vulputate venenatis pellentesque pulvinar
              </p>
            </div>

            <div className="text-center text-lg-start">
              <img src={icon06} className="d-inline-block" width="56" alt="Aesthetic dentistry" />
              <h3 className="h5 pt-1 my-2">Aesthetic dentistry</h3>
              <p className="fs-sm mb-0">Pellentesque rhoncus viverra vestibulum, purus purus</p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
