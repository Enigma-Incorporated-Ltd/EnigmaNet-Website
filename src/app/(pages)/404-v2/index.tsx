import { Button, Container } from 'react-bootstrap';
import lightLayer01 from '@/assets/img/404/light/layer01.png';
import lightLayer02 from '@/assets/img/404/light/layer02.png';
import lightLayer03 from '@/assets/img/404/light/layer03.png';

import darkLayer01 from '@/assets/img/404/dark/layer01.png';
import darkLayer02 from '@/assets/img/404/dark/layer02.png';
import darkLayer03 from '@/assets/img/404/dark/layer03.png';

import dark from '@/assets/img/404/dark/bg.jpg';
import light from '@/assets/img/404/light/bg.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import PageMeta from '@/components/PageMeta';
import Parallax from '@/components/Parallax';
import Navbar from '@/components/navbar/Navbar';
import { Link } from 'react-router';


const Index = () => {
  return (
    <>
      <PageMeta title="404 Not Found v2" />
      <div
        className="d-dark-mode-none position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center bg-size-cover"
        style={{ backgroundImage: `url(${light})` }}
      ></div>

      <div
        className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center bg-size-cover"
        style={{ backgroundImage: `url(${dark})` }}
      ></div>
      <Navbar Headerclass="header navbar navbar-expand-lg fixed-top" />
      <section className="container d-flex flex-column h-100 align-items-center position-relative zindex-5 pt-5">
        <Container className="text-center pt-5 pb-3 mt-auto">
          <Parallax>
            <div className="parallax mx-auto d-dark-mode-none" style={{ maxWidth: '574px' }}>
              <div className="parallax-layer" data-depth="-0.15">
                <img src={lightLayer01} alt="Layer" />
              </div>
              <div className="parallax-layer" data-depth="0.12">
                <img src={lightLayer02} alt="Layer" />
              </div>
              <div className="parallax-layer zindex-5" data-depth="-0.12">
                <img src={lightLayer03} alt="Layer" />
              </div>
            </div>
          </Parallax>
          <Parallax>
            <div
              className="parallax mx-auto d-none d-dark-mode-block"
              style={{ maxWidth: '574px' }}
            >
              <div className="parallax-layer" data-depth="-0.15">
                <img src={darkLayer01} alt="Layer" />
              </div>
              <div className="parallax-layer" data-depth="0.12">
                <img src={darkLayer02} alt="Layer" />
              </div>
              <div className="parallax-layer zindex-5" data-depth="-0.12">
                <img src={darkLayer03} alt="Layer" />
              </div>
            </div>
          </Parallax>

          <h1 className="visually-hidden">404</h1>
          <h2 className="display-5">Ooops!</h2>
          <p className="fs-xl pb-3 pb-md-0 mb-md-5">
            The page you are looking for is not available.
          </p>

          <Button href="/" size="lg" className="btn-primary shadow-primary w-sm-auto w-100">
            <IconifyIcon icon="bx:home-alt" className="me-2 ms-n1 lead" />
            Go to homepage
          </Button>
        </Container>

        <div className="text-center py-lg-5 py-4 mt-auto">
          <p className="nav d-block fs-sm pt-3 pt-lg-0 mb-0">
            <span className="opacity-75">&copy; All rights reserved. Made by</span>{' '}
            <Link
              className="nav-link d-inline-block p-0"
              to="https://coderthemes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coderthemes
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;
