import loginBg from '@/assets/img/login-bg.png';
import lightLoginBg from '@/assets/img/lightmode_background.png-1.png';
import loginAppleIcon from '@/assets/img/login/login-apple-icon.svg';
import icTwotoneApple from '@/assets/img/ic_twotone-apple.svg';
import loginGoogleIcon from '@/assets/img/login/login-google-icon.svg';
import { EmailIcon } from '@/app/login/components/LoginIcons';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { useTheme } from '@/utils/useTheme';
import '@/app/login/components/login.css';
import './google-login.css';

export type OAuthPageMode = 'login' | 'register';

type GoogleLoginPageProps = {
  mode?: OAuthPageMode;
};

const GoogleLoginPage = ({ mode = 'login' }: GoogleLoginPageProps) => {
  const { theme } = useTheme();
  const loginBgImage = theme === 'light' ? lightLoginBg : loginBg;
  const loginAppleImage = theme === 'light' ? icTwotoneApple : loginAppleIcon;
  const isRegister = mode === 'register';
  const backHref = isRegister ? '/register' : '/login';
  const otherProviderHref = isRegister ? '/register/apple' : '/login/apple';
  const dividerText = isRegister ? 'Or create account with your' : 'Or sign in with your';

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
          <h1 className="login-page__title">
            {isRegister ? 'Google Registration Page' : 'Google Login Page'}
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
              {isRegister ? 'Google' : 'Google Login'}
            </span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--google login-gradient-stroke"
          data-node-id="59:751"
          data-name="signin with google dark mode"
        >
          <Link
            to={backHref}
            className="login-card__back"
            data-node-id="78:4018"
            aria-label={isRegister ? 'Back to registration' : 'Back to login'}
          >
            <IconifyIcon icon="lucide:chevron-left" width={24} height={24} aria-hidden="true" />
          </Link>

          <div className="login-card__hero" data-node-id="59:752">
            <h2 className="login-card__heading" data-node-id="59:753">
              {isRegister ? 'Welcome!' : 'Welcome Back!'}
            </h2>
            <p className="login-card__subtitle" data-node-id="59:754">
              Secure access to <strong>Enigma</strong> Work infrastructure.
            </p>
          </div>

          <div className="login-card__interactive" data-node-id="59:755">
            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id="59:756">
                <div className="login-google-headline" data-node-id="59:856">
                  <img
                    src={loginGoogleIcon}
                    alt=""
                    width={59}
                    height={61}
                    className="login-google-headline__mark"
                    aria-hidden="true"
                    data-node-id="59:806"
                  />
                  <p className="login-google-headline__text" data-node-id="59:807">
                    <strong>{isRegister ? 'Create account' : 'Sign in'}</strong>{' '}
                    <span className="login-google-headline__rest">with your Google Account</span>
                  </p>
                </div>

                <div className="login-input-block" data-node-id="59:757">
                  <div className="login-fields" data-node-id="59:759">
                    <div className="login-field login-field--dark login-gradient-stroke" data-node-id="59:760">
                      <input
                        type="email"
                        id="google-login-email"
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
                  </div>

                  <div className="login-help-text" data-node-id="59:762">
                    {isRegister ? (
                      <div className="login-help-text__register" data-node-id="59:764">
                        <p className="login-help-text__secondary" data-node-id="59:765">
                          Already have an account?
                        </p>
                        <Link
                          to="/login/sign-in"
                          className="login-help-text__link login-help-text__link--register"
                          data-node-id="59:766"
                        >
                          Sign in
                        </Link>
                      </div>
                    ) : (
                      <>
                        <Link to="/forgot-password" className="login-help-text__link" data-node-id="59:763">
                          Forgot your password?
                        </Link>
                        <div className="login-help-text__register" data-node-id="59:764">
                          <p className="login-help-text__secondary" data-node-id="59:765">
                            Don&apos;t have an account yet?
                          </p>
                          <Link
                            to="/register"
                            className="login-help-text__link login-help-text__link--register"
                            data-node-id="59:766"
                          >
                            Register now
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <button type="submit" className="login-auth-btn login-auth-btn--primary" data-node-id="59:767">
                  {isRegister ? 'Create account' : 'Sign In'}
                </button>
              </div>

              <div
                className="login-account-buttons login-account-buttons--apple-only"
                data-node-id="59:768"
              >
                <div className="login-divider" data-node-id="59:769">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id="59:772">
                    {dividerText}
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <Link to={otherProviderHref} className="login-account-buttons__btn login-account-buttons__btn--apple" data-node-id="59:775">
                  <img src={loginAppleImage} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Apple Account</span>
                </Link>
              </div>
            </form>
          </div>

          <div className="login-card__logo" data-node-id="59:776">
            <img src={loginLogo} alt="Enigma" width={30} height={34} className="login-card__logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleLoginPage;
