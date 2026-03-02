import { Link } from 'react-router';

const Cta = () => {
  return (
    <section className="position-relative bg-dark py-5">
      <span
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(255, 255, 255, .05)' }}
      ></span>
      <div className="container position-relative zindex-5 text-center my-xl-3 py-1 py-md-4 py-lg-5">
        <p className="lead text-light opacity-70 mb-3">Ready to get started?</p>
        <h2 className="h1 text-light pb-3 pb-lg-0 mb-lg-5">Launch Your Project with Us</h2>
        <Link to="#" className="btn btn-primary shadow-primary btn-lg">
          Work with us
        </Link>
      </div>
    </section>
  );
};

export default Cta;
