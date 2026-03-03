import mapLight from '@/assets/img/about/map-light.png';
import MapDark from '@/assets/img/about/map-dark.png';
import { Link } from 'react-router';

const Locations = () => {
  return (
    <section className="container mb-5 pt-md-3 pt-lg-4 pt-xl-5">
      <div
        className="pt-2 pt-sm-4 pb-md-3 mb-4 mt-lg-1 mt-xl-3 mx-auto text-center"
        style={{ maxWidth: '47rem' }}
      >
        <h2 className="h1 mb-4">Our offices around the world</h2>
        <p className="mb-3">
          Congue gravida vel imperdiet rutrum lectus felis purus blandit ullamcorper. In eleifend in
          ultrices ultrices aliquam augue praesent.
        </p>
        <Link to="/contacts-v2" className="btn btn-primary mb-4">
          Contact us
        </Link>
      </div>

      <div className="mb-4 pb-2">
        <img src={mapLight} alt="Map light" className="d-dark-mode-none d-block" />
        <img src={MapDark} alt="Map dark" className="d-dark-mode-block d-none" />
      </div>
    </section>
  );
};

export default Locations;
