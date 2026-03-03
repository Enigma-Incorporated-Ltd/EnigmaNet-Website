import mainImg from '@/assets/img/landing/saas-3/feature-1/main.png';
import popup01 from '@/assets/img/landing/saas-3/feature-1/popup01.png';
import popup02 from '@/assets/img/landing/saas-3/feature-1/popup02.png';
import popup03 from '@/assets/img/landing/saas-3/feature-1/popup03.png';
import { Container } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const Feature = () => {
  return (
    <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
      <h2 className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2" style={{ maxWidth: '530px' }}>
        Get Possibilities for Better Trading with Silicon
      </h2>

      <ul className="list-unstyled d-flex flex-wrap justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <IconifyIcon icon="bx:check" className="lead text-primary mt-1 me-2" />
          <span>
            Spend with the Crypto and get up to{' '}
            <strong className="text-primary ms-1">12% back</strong>
          </span>
        </li>
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <IconifyIcon icon="bx:check" className="lead text-primary mt-1 me-2" />
          <span>
            Invite friends and get <strong className="text-primary ms-1">new opportunities</strong>
          </span>
        </li>
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <IconifyIcon icon="bx:check" className="lead text-primary mt-1 me-2" />
          <span>
            Trade and earn <strong className="text-primary mx-1">200+ cryptocurrencies</strong> and
            get a permanent <strong className="text-primary ms-1">5% discount</strong>
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
