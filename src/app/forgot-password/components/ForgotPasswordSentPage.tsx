import loginCardBgLogo from '@/assets/img/login/vectorlogo.png';
import IconifyIcon from '@/components/IconifyIcon';
import { getAuthErrorMessage, useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import '@/app/login/components/login.css';
import './forgot-password.css';

type SentLocationState = {
  email?: string;
};

const formatUserLabel = (email: string) => {
  const local = (email.split('@')[0] ?? email).trim();
  return local ? local.toUpperCase() : 'USER NAME';
};

const ForgotPasswordSentPage = () => {
  const navigate = useNavigate();
  const { requestPasswordReset } = useAuth();
  const location = useLocation();
  const state = (location.state as SentLocationState | null) ?? {};
  const email = state.email ?? '';
  const [resendError, setResendError] = useState('');
  const [isResending, setIsResending] = useState(false);

  const handleResend = async () => {
    if (!email) {
      navigate('/forgot-password');
      return;
    }

    setResendError('');
    setIsResending(true);
    try {
      await requestPasswordReset(email);
    } catch (resendErr) {
      setResendError(getAuthErrorMessage(resendErr));
    } finally {
      setIsResending(false);
    }
  };

  return (
    <section className="login-page login-page--confirmation-sent">
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
            <span className="login-page__breadcrumb-current">Confirmation</span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--confirmation login-gradient-stroke"
          data-node-id="37:4862"
          data-name="confirmation restore password dark mode"
        >
          <img
            src={loginCardBgLogo}
            alt=""
            className="login-card__bg-logo"
            aria-hidden="true"
            data-node-id="37:4863"
            data-name="logo"
          />

          <div className="login-card__confirmation-content" data-node-id="37:4864">
            <div className="login-card__hero" data-node-id="37:4866">
              <h2 className="login-card__confirmation-heading" data-node-id="37:4867">
                We&apos;ve sent you a reset link, please check you email.
              </h2>
            </div>

            <p className="login-card__confirmation-user" data-node-id="37:4868">
              {email ? formatUserLabel(email) : 'USER NAME'}
            </p>

            <p className="login-card__confirmation-footer" data-node-id="62:1831">
              Didn&apos;t receive the email?{' '}
              <button
                type="button"
                className="login-card__confirmation-resend"
                onClick={handleResend}
                disabled={isResending}
              >
                {isResending ? 'Resending…' : 'Resend link.'}
              </button>
            </p>

            {resendError ? (
              <p className="login-form__error login-form__error--block" role="alert">
                {resendError}
              </p>
            ) : null}

            <Link
              to="/forgot-password/reset"
              state={{ email }}
              className="login-help-text__link"
            >
              Enter verification code
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordSentPage;
