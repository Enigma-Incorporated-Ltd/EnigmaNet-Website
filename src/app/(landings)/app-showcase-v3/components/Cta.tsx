import { Link } from 'react-router';
import appstoreLight from '@/assets/img/market/appstore-light.svg';
import appstoreDark from '@/assets/img/market/appstore-dark.svg';
import googleLight from '@/assets/img/market/googleplay-light.svg';
import googleDark from '@/assets/img/market/googleplay-dark.svg';
import screens from '@/assets/img/landing/app-showcase-3/screens.png';


const Cta = () => {
  return (
    <section className="position-relative d-flex align-items-center justify-content-center justify-content-lg-end zindex-2 pb-5 pb-lg-0 mb-md-3 mb-lg-0">
      <div className="text-center text-lg-start pe-xl-5 me-lg-4">
        <div className="px-3" style={{ maxWidth: '530px' }}>
          <h2 className="h1 mb-lg-4">
            Download <span className="text-primary">Silicon</span> app
          </h2>
          <p className="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
            Take control of your finances and download our mobile app today! Start tracking your
            expenses, budgeting wisely, and achieving your financial goals with ease. Don't wait,
            take the first step towards financial freedom now!
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
            <Link to="#" className="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
              <img src={appstoreLight} className="light-mode-img" width="124" alt="App Store" />
              <img src={appstoreDark} className="dark-mode-img" width="124" alt="App Store" />
            </Link>
            <Link to="#" className="btn btn-dark btn-lg px-3 py-2 mb-sm-3">
              <img src={googleLight} className="light-mode-img" width="139" alt="Google Play" />
              <img src={googleDark} className="dark-mode-img" width="139" alt="Google Play" />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <img src={screens} width="900" alt="Mobile app screens" />
      </div>
    </section>
  );
};

export default Cta;
