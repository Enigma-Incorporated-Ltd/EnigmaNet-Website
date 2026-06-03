import loginAppleIcon from '@/assets/img/login/login-apple-icon.svg';
import loginGoogleIcon from '@/assets/img/login/login-google-icon.svg';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import './login.css';
import './login-welcome.css';

const LoginWelcomePage = () => {
  return (
    <section className="login-page">
      <div className="login-page__header-wrap">
        <div className="login-page__header" data-name="Text">
          <h1 className="login-page__title">Login Page</h1>
          <nav className="login-page__breadcrumb" aria-label="breadcrumb">
            <Link to="/">
              <IconifyIcon icon="lucide:home" width={12} height={12} aria-hidden="true" />
              Home
            </Link>
            <span className="login-page__breadcrumb-sep" aria-hidden="true">
              <IconifyIcon icon="lucide:chevron-right" width={12} height={12} />
            </span>
            <span className="login-page__breadcrumb-current">Login</span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--welcome login-gradient-stroke"
          data-node-id="78:3794"
          data-name="starting point dark mode"
        >
          <div className="login-welcome-hero" data-node-id="78:3795" data-name="hero">
            <h2 className="login-card__heading" data-node-id="78:3796">
              Welcome to Enigma!
            </h2>
            <p className="login-card__subtitle login-card__subtitle--welcome" data-node-id="78:3797">
              Connect to secure compute infrastructure.
            </p>
          </div>

          <div className="login-card__interactive login-card__interactive--welcome" data-node-id="78:3798">
            <div className="login-welcome-actions">
              <div className="login-welcome-buttons" data-node-id="78:3799" data-name="buttons">
                <Link to="/login/sign-in" className="login-primary-btn" data-node-id="78:3800">
                  <span className="login-primary-btn__label">Sign In</span>
                </Link>
                <Link to="/register" className="login-secondary-btn" data-node-id="78:3801">
                  <span className="login-secondary-btn__label">Create Account</span>
                </Link>
              </div>

              <div className="login-account-buttons login-account-buttons--welcome" data-node-id="78:3802">
                <div className="login-divider" data-node-id="78:3803">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id="78:3806">
                    Or sign in with your
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <Link to="/login/google" className="login-account-buttons__btn" data-node-id="78:3808">
                  <img src={loginGoogleIcon} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Google Account</span>
                </Link>
                <Link to="/login/apple" className="login-account-buttons__btn" data-node-id="78:3809">
                  <img src={loginAppleIcon} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Apple Account</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="login-card__logo" data-node-id="78:3810">
            <img src={loginLogo} alt="Enigma" width={30} height={34} className="login-card__logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginWelcomePage;
