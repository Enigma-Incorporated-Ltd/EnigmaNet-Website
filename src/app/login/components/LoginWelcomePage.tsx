import GoogleAccountButton from '@/components/auth/GoogleAccountButton';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { useTheme } from '@/utils/useTheme';
import { Link } from 'react-router';
import './login.css';
import './login-welcome.css';

const LoginWelcomePage = () => {
  const { theme } = useTheme();


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
          data-node-id={theme === 'light' ? '77:3735' : '77:3686'}
          data-name={theme === 'light' ? 'starting point light mode' : 'starting point dark mode'}
        >
          <div className="login-welcome-hero">
            <h2 className="login-card__heading">Welcome to Enigma!</h2>
            <p className="login-card__subtitle login-card__subtitle--welcome">
              Connect to secure compute infrastructure.
            </p>
          </div>

          <div className="login-card__interactive login-card__interactive--welcome">
            <div className="login-welcome-actions">
              <div className="login-welcome-row login-welcome-buttons">
                <Link to="/login/sign-in" className="login-auth-btn login-auth-btn--primary login-welcome-btn login-welcome-btn--sign-in">
                  Sign In
                </Link>
                <Link to="/register" className="login-auth-btn login-auth-btn--secondary login-welcome-btn login-welcome-btn--create">
                  Create Account
                </Link>
              </div>

              <div className="login-welcome-divider">
                <span className="login-welcome-divider__line" aria-hidden="true" />
                <span className="login-welcome-divider__text">Or sign in with your</span>
                <span className="login-welcome-divider__line login-welcome-divider__line--right" aria-hidden="true" />
              </div>

              <div className="login-welcome-social">
                <GoogleAccountButton mode="login" />
              </div>
            </div>
          </div>

          <div className="login-card__logo">
            <img src={loginLogo} alt="Enigma" width={30} height={34} className="login-card__logo-img" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default LoginWelcomePage;
