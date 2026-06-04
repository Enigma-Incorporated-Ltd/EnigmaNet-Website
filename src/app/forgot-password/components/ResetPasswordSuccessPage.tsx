import resetPasswordDone from '@/assets/img/login/reset-password-done.svg';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import '@/app/login/components/login.css';
import '@/app/login-google/components/google-login.css';
import './forgot-password.css';

const ResetPasswordSuccessPage = () => {
  return (
    <section className="login-page">
      <div className="login-page__header-wrap">
        <div className="login-page__header" data-name="Text">
          <h1 className="login-page__title">Forgot Password</h1>
          <nav className="login-page__breadcrumb" aria-label="breadcrumb">
            <Link to="/">
              <IconifyIcon icon="lucide:home" width={12} height={12} aria-hidden="true" />
              Home
            </Link>
            <span className="login-page__breadcrumb-sep" aria-hidden="true">
              <IconifyIcon icon="lucide:chevron-right" width={12} height={12} />
            </span>
            <span className="login-page__breadcrumb-current">Success</span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--forgot login-card--reset-success login-gradient-stroke"
          data-node-id="37:5224"
          data-name="reseting password error dark mode"
        >
          <img
            src={resetPasswordDone}
            alt=""
            className="login-card__done-icon"
            aria-hidden="true"
            data-node-id="37:5250"
            data-name="done"
          />

          <div className="login-card__success-text" data-node-id="37:5225" data-name="text">
            <div className="login-card__hero-block login-card__hero-block--success" data-node-id="37:5226">
              <div className="login-card__hero">
                <h2 className="login-card__heading" data-node-id="37:5227">
                  Password Reset Successful!
                </h2>
              </div>
              <p className="login-card__subtitle-lg" data-node-id="37:5228">
                Your password has been successfully updated. You can now sign in to your account.
              </p>
            </div>
          </div>

          <div className="login-card__interactive" data-node-id="37:5229">
            <Link
              to="/login/sign-in"
              className="login-auth-btn login-auth-btn--primary"
              data-node-id="37:5236"
            >
              Sign In
            </Link>
          </div>

          <div className="login-card__logo" data-node-id="37:5237">
            <img src={loginLogo} alt="Enigma" width={30} height={34} className="login-card__logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordSuccessPage;
