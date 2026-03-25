import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Error = () => {
  return (
    <>
      <section className="container my-5 text-md-start text-center">
        <div style={{
          paddingTop: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: 'calc(100vh - 200px)'
        }}>
          <h1 className="display-1 mb-sm-4 mt-n4 mt-sm-n5">Error 404</h1>
          <p className="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">
            The page you are looking for was moved, removed, or might never have existed.
          </p>
          <Link to="/" className="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
            <IconifyIcon icon="bx:home-alt" className="me-2 ms-n1 lead" />
            Go to homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default Error;
