import loginAppleIcon from '@/assets/img/login/login-apple-icon.svg';
import loginGoogleIcon from '@/assets/img/login/login-google-icon.svg';
import icTwotoneApple from '@/assets/img/ic_twotone-apple.svg';
import { EmailIcon } from '@/app/login/components/LoginIcons';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Link } from 'react-router';
import type { OAuthPageMode } from '@/app/login-google/components';
import { useTheme } from '@/utils/useTheme';
import '@/app/login/components/login.css';
import './apple-login.css';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type AppleLoginPageProps = {
  mode?: OAuthPageMode;
};

const appleCardNodeIds = {
  login: { dark: '59:911', light: '59:953' },
  register: { dark: '59:1039', light: '59:1092' },
} as const;

const AppleLoginPage = ({ mode = 'login' }: AppleLoginPageProps) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const loginAppleImage = isLight ? icTwotoneApple : loginAppleIcon;
  const isRegister = mode === 'register';
  const backHref = isRegister ? '/register' : '/login';
  const otherProviderHref = isRegister ? '/register/google' : '/login/google';
  const cardNodeId = appleCardNodeIds[mode][isLight ? 'light' : 'dark'];
  const cardName = isRegister
    ? isLight
      ? 'registration with apple account light mode'
      : 'registration with apple account dark mode'
    : isLight
      ? 'signin with apple account light mode'
      : 'signin with apple account dark mode';
  const dividerText = 'Or sign in with your';
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    setShowError(!trimmed || !emailPattern.test(trimmed));
  };

  return (
    <section className="login-page" data-node-id="62:1833">
      <div className="login-page__header-wrap">
        <div className="login-page__header" data-name="Text">
          <h1 className="login-page__title">
            {isRegister ? 'Apple Registration Page' : 'Apple Login Page'}
          </h1>
          <nav className="login-page__breadcrumb" aria-label="breadcrumb">
            <Link to="/">
              <IconifyIcon icon="lucide:home" width={12} height={12} aria-hidden="true" />
              Home
            </Link>
            <span className="login-page__breadcrumb-sep" aria-hidden="true">
              <IconifyIcon icon="lucide:chevron-right" width={12} height={12} />
            </span>
            {isRegister ? (
              <>
                <Link to="/register">Register</Link>
                <span className="login-page__breadcrumb-sep" aria-hidden="true">
                  <IconifyIcon icon="lucide:chevron-right" width={12} height={12} />
                </span>
              </>
            ) : null}
            <span className="login-page__breadcrumb-current">
              {isRegister ? 'Apple' : 'Apple Login'}
            </span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--apple login-gradient-stroke"
          data-node-id={cardNodeId}
          data-name={cardName}
        >
          <Link
            to={backHref}
            className="login-card__back"
            data-node-id="78:4021"
            aria-label={isRegister ? 'Back to registration' : 'Back to login'}
          >
            <IconifyIcon icon="lucide:chevron-left" width={24} height={24} aria-hidden="true" />
          </Link>

          <div className="login-card__hero" data-node-id="59:912">
            <h2 className="login-card__heading" data-node-id="59:913">
              {isRegister ? 'Welcome!' : 'Welcome Back!'}
            </h2>
            <p className="login-card__subtitle" data-node-id={isRegister ? '59:1095' : '59:914'}>
              {isLight
                ? 'Secure access to Enigma Work infrastructure.'
                : (
                  <>
                    Secure access to <strong>Enigma</strong> Work infrastructure.
                  </>
                )}
            </p>
          </div>

          <div className="login-card__interactive" data-node-id="59:915">
            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id="59:916">
                <div className="login-apple-headline" data-node-id="59:917">
                  <img
                    src={loginAppleImage}
                    alt=""
                    width={50}
                    height={50}
                    className="login-apple-headline__mark"
                    aria-hidden="true"
                    data-node-id="60:1402"
                  />
                  <p className="login-apple-headline__text" data-node-id={isRegister ? '59:1100' : '59:919'}>
                    {isRegister ? (
                      <>
                        <strong>Create Account</strong>{' '}
                        <span className="login-apple-headline__rest">with your Apple Account</span>
                      </>
                    ) : (
                      <>
                        <strong>Sign in</strong>{' '}
                        <span className="login-apple-headline__rest">with your Apple Account</span>
                      </>
                    )}
                  </p>
                </div>

                <div className="login-input-block" data-node-id="59:920">
                  <div className="login-fields login-fields--apple" data-node-id="60:1405">
                    <div
                      className={`login-field login-field--dark login-gradient-stroke${showError ? ' login-field--error' : ''}`}
                      data-node-id={showError ? '60:1364' : isRegister && isLight ? '59:1103' : '59:923'}
                    >
                      <input
                        type="email"
                        id="apple-login-email"
                        name="email"
                        className="login-field__input"
                        placeholder="Enter Email"
                        autoComplete="email"
                        value={email}
                        onChange={event => {
                          setEmail(event.target.value);
                          if (showError) setShowError(false);
                        }}
                        aria-invalid={showError}
                        aria-describedby={showError ? 'apple-login-email-error' : undefined}
                        required
                      />
                      <span className="login-field__icon-wrap">
                        <EmailIcon />
                      </span>
                    </div>
                    {showError && (
                      <p
                        id="apple-login-email-error"
                        className="login-field__error"
                        role="alert"
                        data-node-id="60:1436"
                      >
                        Wrong Email, please check your Email Address
                      </p>
                    )}
                  </div>

                  <div className="login-help-text" data-node-id="59:924">
                    <Link
                      to="/forgot-password"
                      className="login-help-text__link"
                      data-node-id={isRegister && isLight ? '59:1105' : '59:925'}
                    >
                      Forgot your password?
                    </Link>
                    <div className="login-help-text__register" data-node-id="59:926">
                      <p className="login-help-text__secondary" data-node-id={isRegister && isLight ? '59:1107' : '59:927'}>
                        Don&apos;t have an account yet?
                      </p>
                      <Link
                        to="/register"
                        className="login-help-text__link login-help-text__link--register"
                        data-node-id={isRegister && isLight ? '59:1108' : '59:928'}
                      >
                        Register now
                      </Link>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-auth-btn login-auth-btn--primary"
                  data-node-id={isRegister && isLight ? '59:1109' : '59:929'}
                >
                  Sign In
                </button>
              </div>

              <div
                className="login-account-buttons login-account-buttons--google-only"
                data-node-id="59:930"
              >
                <div className="login-divider" data-node-id="59:931">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id={isRegister && isLight ? '59:1114' : '59:934'}>
                    {dividerText}
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <Link to={otherProviderHref} className="login-account-buttons__btn login-account-buttons__btn--google" data-node-id="59:937">
                  <img src={loginGoogleIcon} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Google Account</span>
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

export default AppleLoginPage;
