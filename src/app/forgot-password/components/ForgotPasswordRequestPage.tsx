import GoogleAccountButton from '@/components/auth/GoogleAccountButton';
import { EmailIcon } from '@/app/login/components/LoginIcons';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { getAuthErrorMessage, useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useTheme } from '@/utils/useTheme';
import '@/app/login/components/login.css';
import './forgot-password.css';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RequestLocationState = {
  email?: string;
};

const ForgotPasswordRequestPage = () => {
  const navigate = useNavigate();
  const { requestPasswordReset } = useAuth();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const location = useLocation();
  const initialEmail = (location.state as RequestLocationState | null)?.email ?? '';
  const [email, setEmail] = useState(initialEmail);
  const [fieldError, setFieldError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFieldError('');

    const trimmed = email.trim();
    if (!trimmed || !emailPattern.test(trimmed)) return;

    setIsSubmitting(true);
    try {
      await requestPasswordReset(trimmed);
      navigate('/forgot-password/sent', { state: { email: trimmed } });
    } catch (submitError) {
      setFieldError(getAuthErrorMessage(submitError));
    } finally {
      setIsSubmitting(false);
    }
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
          data-node-id={isLight ? '37:4789' : '37:4920'}
          data-name={isLight ? 'reseting password light mode' : 'reseting password dark mode'}
        >
          <Link
            to="/login/sign-in"
            className="login-card__back"
            aria-label="Back to sign in"
          >
            <IconifyIcon icon="lucide:chevron-left" width={24} height={24} aria-hidden="true" />
          </Link>

          <div className="login-card__hero-block" data-node-id={isLight ? '37:4790' : '76:2434'}>
            <div className="login-card__hero" data-node-id={isLight ? '37:4791' : '76:2435'}>
              <h2 className="login-card__heading" data-node-id={isLight ? '37:4792' : '76:2436'}>
                Reset you password
              </h2>
            </div>
            <p className="login-card__subtitle-lg" data-node-id={isLight ? '37:4793' : '76:2437'}>
              Enter the email used for your account and we&apos;ll send you a link to reset your
              password
            </p>
          </div>

          <div className="login-card__interactive" data-node-id="76:2438">
            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id="76:2439">
                <div className="login-field-group">
                  <div
                    className={`login-field login-field--dark login-gradient-stroke${fieldError ? ' login-field--error' : ''}`}
                    data-node-id={isLight ? '37:4796' : '76:2440'}
                  >
                    <input
                      type="email"
                      id="forgot-email"
                      name="email"
                      className="login-field__input"
                      placeholder="Enter Email"
                      autoComplete="email"
                      value={email}
                      onChange={event => {
                        setEmail(event.target.value);
                        if (fieldError) setFieldError('');
                      }}
                      aria-invalid={Boolean(fieldError)}
                      aria-describedby={fieldError ? 'forgot-email-error' : undefined}
                      required
                    />
                    <span className="login-field__icon-wrap">
                      <EmailIcon />
                    </span>
                  </div>
                  {fieldError ? (
                    <p id="forgot-email-error" className="login-field__error" role="alert">
                      {fieldError}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="login-auth-btn login-auth-btn--primary"
                  data-node-id={isLight ? '37:4797' : '76:2441'}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send Reset Link'}
                </button>

                <div className="login-forgot-divider" data-node-id="76:2443">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id={isLight ? '37:4802' : '76:2446'}>
                    Or sign in with your
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <GoogleAccountButton
                  mode="login"
                  data-node-id="76:2448"
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

export default ForgotPasswordRequestPage;
