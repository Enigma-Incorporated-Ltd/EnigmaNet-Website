import loginAppleIcon from '@/assets/img/login/login-apple-icon.svg';
import loginGoogleIcon from '@/assets/img/login/login-google-icon.svg';
import { EmailIcon } from '@/app/login/components/LoginIcons';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import '@/app/login/components/login.css';
import './forgot-password.css';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RequestLocationState = {
  email?: string;
};

const ForgotPasswordRequestPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialEmail = (location.state as RequestLocationState | null)?.email ?? '';
  const [email, setEmail] = useState(initialEmail);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !emailPattern.test(trimmed)) return;

    navigate('/forgot-password/sent', { state: { email: trimmed } });
  };

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
            <span className="login-page__breadcrumb-current">Forgot Password</span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--forgot login-gradient-stroke"
          data-node-id="76:2433"
          data-name="reseting password dark mode"
        >
          <div className="login-card__hero-block" data-node-id="76:2434">
            <div className="login-card__hero" data-node-id="76:2435">
              <h2 className="login-card__heading" data-node-id="76:2436">
                Reset you password
              </h2>
            </div>
            <p className="login-card__subtitle-lg" data-node-id="76:2437">
              Enter the email used for your account and we&apos;ll send you a link to reset your
              password
            </p>
          </div>

          <div className="login-card__interactive" data-node-id="76:2438">
            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id="76:2439">
                <div className="login-field login-field--dark login-gradient-stroke" data-node-id="76:2440">
                  <input
                    type="email"
                    id="forgot-email"
                    name="email"
                    className="login-field__input"
                    placeholder="Enter Email"
                    autoComplete="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                  />
                  <span className="login-field__icon-wrap">
                    <EmailIcon />
                  </span>
                </div>

                <button type="submit" className="login-primary-btn" data-node-id="76:2441">
                  <span className="login-primary-btn__label">Send Reset Link</span>
                </button>
              </div>

              <div className="login-account-buttons" data-node-id="76:2442">
                <div className="login-divider" data-node-id="76:2443">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id="76:2446">
                    Or sign in with your
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <Link to="/login/google" className="login-account-buttons__btn" data-node-id="76:2448">
                  <img src={loginGoogleIcon} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Google Account</span>
                </Link>
                <Link to="/login/apple" className="login-account-buttons__btn" data-node-id="76:2449">
                  <img src={loginAppleIcon} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Apple Account</span>
                </Link>
              </div>
            </form>
          </div>

          <div className="login-card__logo" data-node-id="13:80">
            <img src={loginLogo} alt="Enigma" width={30} height={34} className="login-card__logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordRequestPage;
