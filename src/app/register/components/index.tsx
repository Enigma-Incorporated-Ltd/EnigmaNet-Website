import loginBg from '@/assets/img/login-bg.png';
import lightLoginBg from '@/assets/img/lightmode_background.png-1.png';
import loginAppleIcon from '@/assets/img/login/login-apple-icon.svg';
import icTwotoneApple from '@/assets/img/ic_twotone-apple.svg';
import loginGoogleIcon from '@/assets/img/login/login-google-icon.svg';
import {
  EmailIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  UserIcon,
} from '@/app/login/components/LoginIcons';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { useTheme } from '@/utils/useTheme';
import { Link } from 'react-router';
import '@/app/login/components/login.css';
import './register.css';

const RegisterPage = () => {
  const { theme } = useTheme();
  const loginBgImage = theme === 'light' ? lightLoginBg : loginBg;
  const loginAppleImage = theme === 'light' ? icTwotoneApple : loginAppleIcon;
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      className="login-page"
      style={{ ['--login-bg-image' as string]: `url(${loginBgImage})` }}
      data-node-id="62:1833"
    >
      <div className="login-page__bg login-page__bg-image" aria-hidden="true" />
      <div className="login-page__bg login-page__bg-overlay" aria-hidden="true" />

      <div className="login-page__header-wrap">
        <div className="login-page__header" data-name="Text">
          <h1 className="login-page__title">Register Page</h1>
          <nav className="login-page__breadcrumb" aria-label="breadcrumb">
            <Link to="/">
              <IconifyIcon icon="lucide:home" width={12} height={12} aria-hidden="true" />
              Home
            </Link>
            <span className="login-page__breadcrumb-sep" aria-hidden="true">
              <IconifyIcon icon="lucide:chevron-right" width={12} height={12} />
            </span>
            <span className="login-page__breadcrumb-current">Register</span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--register login-gradient-stroke"
          data-node-id="76:3209"
          data-name="registration dark mode"
        >
          <Link
            to="/login"
            className="login-card__back"
            aria-label="Back to login"
          >
            <IconifyIcon icon="lucide:chevron-left" width={24} height={24} aria-hidden="true" />
          </Link>

          <div className="login-card__text-block" data-node-id="76:3210">
            <div className="login-card__hero" data-node-id="76:3211">
              <h2 className="login-card__heading" data-node-id="76:3212">
                Welcome!
              </h2>
              <p className="login-card__subtitle" data-node-id="76:3213">
                Secure access to <strong>Enigma</strong> Work infrastructure.
              </p>
            </div>
            <p className="login-card__lead" data-node-id="76:3214">
              Create account
            </p>
          </div>

          <div className="login-card__interactive" data-node-id="76:3215">
            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id="76:3216">
                <div className="login-fields login-fields--register" data-node-id="76:3217">
                  <div className="login-field login-field--dark login-gradient-stroke" data-node-id="76:3218">
                    <input
                      type="text"
                      id="register-username"
                      name="username"
                      className="login-field__input"
                      placeholder="User Name"
                      autoComplete="username"
                      required
                    />
                    <span className="login-field__icon-wrap">
                      <UserIcon />
                    </span>
                  </div>

                  <div className="login-field login-field--dark login-gradient-stroke" data-node-id="76:3219">
                    <input
                      type="email"
                      id="register-email"
                      name="email"
                      className="login-field__input"
                      placeholder="Enter Email"
                      autoComplete="email"
                      required
                    />
                    <span className="login-field__icon-wrap">
                      <EmailIcon />
                    </span>
                  </div>

                  <div className="login-field login-field--dark login-gradient-stroke" data-node-id="76:3220">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="register-password"
                      name="password"
                      className="login-field__input"
                      placeholder="Password"
                      autoComplete="new-password"
                      required
                    />
                    <button
                      type="button"
                      className="login-field__toggle"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword(current => !current)}
                    >
                      {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </button>
                  </div>

                  <div className="login-field login-field--dark login-gradient-stroke" data-node-id="76:3221">
                    <input
                      type={showRepeatPassword ? 'text' : 'password'}
                      id="register-password-repeat"
                      name="passwordRepeat"
                      className="login-field__input"
                      placeholder="Repeat Password"
                      autoComplete="new-password"
                      required
                    />
                    <button
                      type="button"
                      className="login-field__toggle"
                      aria-label={showRepeatPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowRepeatPassword(current => !current)}
                    >
                      {showRepeatPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-auth-btn login-auth-btn--primary"
                  data-node-id="76:3222"
                >
                  Create account
                </button>
              </div>

              <div className="login-account-buttons" data-node-id="76:3223">
                <div className="login-divider" data-node-id="76:3224">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id="76:3227">
                    Or sign in with your
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <Link to="/login/google" className="login-account-buttons__btn" data-node-id="76:3229">
                  <img src={loginGoogleIcon} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Google Account</span>
                </Link>
                <Link to="/login/apple" className="login-account-buttons__btn" data-node-id="76:3230">
                  <img src={loginAppleImage} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Apple Account</span>
                </Link>
              </div>
            </form>
          </div>

          <div className="login-card__logo" data-node-id="76:3231">
            <img src={loginLogo} alt="Enigma" width={30} height={34} className="login-card__logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
