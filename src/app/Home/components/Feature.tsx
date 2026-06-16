
import features01 from '@/assets/img/home/commonn-problem.png';
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
     
      </div>
    </Container>
  );
};

export default Feature;
