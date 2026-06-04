import loginAppleIcon from '@/assets/img/login/login-apple-icon.svg';
import loginGoogleIcon from '@/assets/img/login/login-google-icon.svg';
import { EmailIcon, EyeClosedIcon, EyeOpenIcon } from './LoginIcons';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import LoginGradientButton from './LoginGradientButton';
import './login.css';

const LoginSignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (!trimmedEmail || !trimmedPassword) {
      return;
    }

    navigate('/login/success', { state: { email: trimmedEmail } });
  };

  return (
    <section className="login-page">
      <div className="login-page__header-wrap">
        <div className="login-page__header" data-node-id="77:3556" data-name="Text">
          <h1 className="login-page__title" data-node-id="77:3557">
            Sign In Page
          </h1>
          <nav className="login-page__breadcrumb" data-node-id="77:3558" data-name="Navigation" aria-label="breadcrumb">
            <Link to="/" data-node-id="77:3559">
              <IconifyIcon icon="lucide:home" width={12} height={12} aria-hidden="true" />
              Home
            </Link>
            <span className="login-page__breadcrumb-sep" data-node-id="77:3566" aria-hidden="true">
              <IconifyIcon icon="lucide:chevron-right" width={12} height={12} />
            </span>
            <span className="login-page__breadcrumb-current" data-node-id="77:3568">
              Sign In
            </span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div className="login-card login-gradient-stroke" data-node-id="77:3583" data-name="signin dark mode">
          <div className="login-card__hero" data-node-id="77:3584">
            <h2 className="login-card__heading" data-node-id="77:3585">
              Welcome Back!
            </h2>
            <p className="login-card__subtitle" data-node-id="77:3586">
              Secure access to <strong>Enigma</strong> Work infrastructure.
            </p>
          </div>

          <div className="login-card__interactive" data-node-id="77:3587">
            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id="77:3588">
                <div className="login-input-block" data-node-id="77:3589">
                  <div className="login-fields" data-node-id="77:3591">
                    <div className="login-field login-field--dark login-gradient-stroke" data-node-id="77:3592">
                      <input
                        type="email"
                        id="login-email"
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

                    <div className="login-field login-field--dark login-gradient-stroke" data-node-id="77:3593">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="login-password"
                        name="password"
                        className="login-field__input"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
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
                  </div>

                  <div className="login-help-text" data-node-id="77:3594">
                    <Link to="/forgot-password" className="login-help-text__link" data-node-id="77:3595">
                      Forgot your password?
                    </Link>
                    <div className="login-help-text__register" data-node-id="77:3596">
                      <p className="login-help-text__secondary" data-node-id="77:3597">
                        Don&apos;t have an account yet?
                      </p>
                      <Link
                        to="/register"
                        className="login-help-text__link login-help-text__link--register"
                        data-node-id="77:3598"
                      >
                        Register now
                      </Link>
                    </div>
                  </div>
                </div>

                <LoginGradientButton type="submit" variant="primary" nodeId="5:273">
                  Sign In
                </LoginGradientButton>
              </div>

              <div className="login-account-buttons" data-node-id="77:3600">
                <div className="login-divider" data-node-id="77:3601">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id="77:3604">
                    Or sign in with your
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <Link to="/login/google" className="login-account-buttons__btn" data-node-id="5:257">
                  <img src={loginGoogleIcon} alt="" width={24} height={24} aria-hidden="true" />
                  <span>Google Account</span>
                </Link>
                <Link to="/login/apple" className="login-account-buttons__btn" data-node-id="5:259">
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

export default LoginSignInPage;
