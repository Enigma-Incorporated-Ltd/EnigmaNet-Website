import mainImg from '@/assets/img/landing/saas-3/feature-1/main.png';
import popup01 from '@/assets/img/landing/saas-3/feature-1/popup01.png';
import popup02 from '@/assets/img/landing/saas-3/feature-1/popup02.png';
import popup03 from '@/assets/img/landing/saas-3/feature-1/popup03.png';
import { Container } from 'react-bootstrap';

const Feature = () => {
  return (
    <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
      <h5 className="h3 text-center text-warning mx-auto mt-n2 mt-sm-0 pt-md-2">
        AI infrastructure and data movement challenges
      </h5>
      <h2 className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2">
        The bottleneck isn't compute. It's moving the data.
      </h2>

      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            Unpredictable performance, rising transfer costs, and fragile connectivity are slowing
            down organisations — whether they're training models, connecting distributed sites, or
            running mission-critical operations. <br /> Most infrastructure wasn't built for this.
          </span>
        </li>
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            <strong className="text-info h1 ms-1"> Common problems we encounter</strong>
          </span>
        </li>
      </ul>

      <div className="position-relative px-4 px-sm-5 mb-3 mb-md-4">
        <img
          src={mainImg}
          width={1079}
          alt="Dashboard"
          className="d-block mx-auto"
          style={{
            borderRadius: '1.5rem',
            boxShadow: '0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)',
          }}
        />

        <div
          className="position-absolute w-100"
          style={{ left: 0, bottom: '13%', paddingRight: '74.33%' }}
        >
          <img
            src={popup01}
            width={308}
            alt="Popup"
            className="rellax d-block"
            style={{
              borderRadius: '.75rem',
              boxShadow: '0 .75rem 3.75rem -.625rem rgba(124,125,152, .2)',
            }}
            data-rellax-percentage="0.5"
            data-rellax-speed="1"
            data-disable-parallax-down="lg"
          />
        </div>

        <div
          className="position-absolute w-100"
          style={{ right: 0, top: '12%', paddingLeft: '74.16%' }}
        >
          <img
            src={popup02}
            width={310}
            alt="Popup"
            className="rellax d-block"
            style={{
              borderRadius: '.75rem',
              boxShadow: '-.46875rem 2.25rem 6.5rem 0 rgba(126,123,160, .2)',
            }}
            data-rellax-percentage="0.5"
            data-rellax-speed="1"
            data-disable-parallax-down="lg"
          />
        </div>

        <div
          className="position-absolute w-100"
          style={{
            right: 0,
            bottom: '9.4%',
            paddingLeft: '64.83%',
            paddingRight: '5.5%',
          }}
        >
          <img
            src={popup03}
            width={322}
            alt="Popup"
            className="rellax d-block ms-auto"
            style={{
              borderRadius: '.75rem',
              boxShadow: '-.46875rem 2.25rem 6.5rem 0 rgba(120,118,148, .14)',
            }}
            data-rellax-percentage="0.5"
            data-rellax-speed=".5"
            data-disable-parallax-down="lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default Feature;
