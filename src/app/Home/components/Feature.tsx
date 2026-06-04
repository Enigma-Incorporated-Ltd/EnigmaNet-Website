
import features01 from '@/assets/img/features/features.jpg';
import lock from '@/assets/img/features/lock.jpg';
// import security from '@/assets/img/features/ai.jpg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { Container } from 'react-bootstrap';

const Feature = () => {
  return (
    <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
      <h5 className="h3 text-center text-warning mx-auto text-uppercase mt-n2 mt-sm-0 pt-md-2">
        AI infrastructure and data movement challenges
      </h5>

      <h2 className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2">
        The bottleneck isn't compute. It's moving the data.
      </h2>

      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            Unpredictable performance, rising transfer costs, and fragile connectivity <br /> are
            slowing down organisations — whether they're training models,
            <br /> connecting distributed sites, or running mission-critical operations. Most
            <br />
            infrastructure wasn't built for this.
          </span>
        </li>
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <HeaderTitle title="Common problems we encounter" className="h1 ms-1" />
          {/* <span>
            <strong className="text-info h1 ms-1"> Common problems we encounter</strong>
          </span> */}
        </li>
      </ul>

      <div className="position-relative px-4 px-sm-5 mb-3 mb-md-4">
        <img
          src={features01}
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
            src={lock}
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

        {/* <div
          className="position-absolute w-100"
          style={{ right: 0, top: '12%', paddingLeft: '74.16%' }}
        >
          <img
            src={security}
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
        </div> */}

        {/* <div
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
        </div> */}
      </div>
    </Container>
  );
};

export default Feature;
