import GoogleAccountButton from '@/components/auth/GoogleAccountButton';
import { EmailIcon, EyeClosedIcon, EyeOpenIcon } from './LoginIcons';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { getAuthErrorMessage, useAuth } from '@/hooks/useAuth';
import {
  mapLoginError,
  type AuthFieldError,
  type AuthFieldKey,
} from '@/utils/authFieldErrors';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useTheme } from '@/utils/useTheme';
import './login.css';

const LoginSignInPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fieldError, setFieldError] = useState<AuthFieldError | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearFieldError = (field: AuthFieldKey) => {
    setFieldError(current => (current?.field === field ? null : current));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFieldError(null);

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

    setIsSubmitting(true);
    try {
      await login(trimmedEmail, trimmedPassword);
      navigate('/login/success', { state: { email: trimmedEmail } });
    } catch (submitError) {
      setFieldError(mapLoginError(getAuthErrorMessage(submitError)));
    } finally {
      setIsSubmitting(false);
    }
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
        <div
          className="login-card login-card--sign-in login-gradient-stroke"
          data-node-id={isLight ? '21:2744' : '21:2719'}
          data-name={isLight ? 'signin light mode' : 'signin dark mode'}
        >
          <Link to="/login" className="login-card__back" aria-label="Back to login">
            <IconifyIcon icon="lucide:chevron-left" width={24} height={24} aria-hidden="true" />
          </Link>
          <div className="login-card__hero" data-node-id={isLight ? '21:2745' : '77:3584'}>
            <h2 className="login-card__heading" data-node-id={isLight ? '21:2746' : '77:3585'}>
              Welcome Back!
            </h2>
            <p className="login-card__subtitle" data-node-id={isLight ? '21:2747' : '77:3586'}>
              {isLight
                ? 'Secure access to Enigma Work infrastructure.'
                : (
                  <>
                    Secure access to <strong>Enigma</strong> Work infrastructure.
                  </>
                )}
            </p>
          </div>

          <div className="login-card__interactive" data-node-id={isLight ? '21:2748' : '77:3587'}>
            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id={isLight ? '21:2749' : '77:3588'}>
                <div className="login-input-block" data-node-id={isLight ? '21:2750' : '77:3589'}>
                  <div className="login-fields login-fields--sign-in" data-node-id={isLight ? '21:2751' : '77:3591'}>
                    <div className="login-field-group">
                      <div
                        className={`login-field login-field--dark login-gradient-stroke${fieldError?.field === 'email' ? ' login-field--error' : ''}`}
                        data-node-id={isLight ? '29:4579' : '77:3592'}
                      >
                        <input
                          type="email"
                          id="login-email"
                          name="email"
                          className="login-field__input"
                          placeholder="Enter Email"
                          autoComplete="email"
                          value={email}
                          onChange={event => {
                            setEmail(event.target.value);
                            clearFieldError('email');
                          }}
                          aria-invalid={fieldError?.field === 'email'}
                          aria-describedby={fieldError?.field === 'email' ? 'login-email-error' : undefined}
                          required
                        />
                        <span className="login-field__icon-wrap">
                          <EmailIcon />
                        </span>
                      </div>
                      {fieldError?.field === 'email' ? (
                        <p id="login-email-error" className="login-field__error" role="alert">
                          {fieldError.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="login-field-group">
                      <div
                        className={`login-field login-field--dark login-gradient-stroke${fieldError?.field === 'password' ? ' login-field--error' : ''}`}
                        data-node-id={isLight ? '29:4584' : '77:3593'}
                      >
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="login-password"
                          name="password"
                          className="login-field__input"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={password}
                          onChange={event => {
                            setPassword(event.target.value);
                            clearFieldError('password');
                          }}
                          aria-invalid={fieldError?.field === 'password'}
                          aria-describedby={fieldError?.field === 'password' ? 'login-password-error' : undefined}
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
                      {fieldError?.field === 'password' ? (
                        <p id="login-password-error" className="login-field__error" role="alert">
                          {fieldError.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="login-help-text" data-node-id={isLight ? '21:2754' : '77:3594'}>
                    <Link to="/forgot-password" className="login-help-text__link" data-node-id={isLight ? '21:2755' : '77:3595'}>
                      Forgot your password?
                    </Link>
                    <div className="login-help-text__register" data-node-id={isLight ? '21:2756' : '77:3596'}>
                      <p className="login-help-text__secondary" data-node-id={isLight ? '21:2757' : '77:3597'}>
                        Don&apos;t have an account yet?
                      </p>
                      <Link
                        to="/register"
                        className="login-help-text__link login-help-text__link--register"
                        data-node-id={isLight ? '21:2758' : '77:3598'}
                      >
                        Register now
                      </Link>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-auth-btn login-auth-btn--primary"
                  data-node-id={isLight ? '21:2759' : '5:273'}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing in…' : 'Sign In'}
                </button>

                <div className="login-forgot-divider">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id={isLight ? '21:2764' : '77:3604'}>
                    Or sign in with your
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <GoogleAccountButton
                  mode="login"
                  data-node-id={isLight ? '21:2766' : '5:257'}
                />
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
