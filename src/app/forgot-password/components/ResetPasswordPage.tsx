import LoginPasswordField from '@/app/login/components/LoginPasswordField';
import PasswordStrengthIndicator, {
  getPasswordStrength,
} from '@/app/login/components/PasswordStrengthIndicator';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { getAuthErrorMessage, useAuth } from '@/hooks/useAuth';
import { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import '@/app/login/components/login.css';
import './forgot-password.css';

const passwordRulesText =
  'Password must contain at least 1 uppercase letter, 1 number, and 1 special character.';

type ResetLocationState = {
  email?: string;
};

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyPasswordResetCode, completePasswordReset, requestPasswordReset } = useAuth();
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendStatus, setResendStatus] = useState('');

  const email = (location.state as ResetLocationState | null)?.email ?? '';

  const strength = useMemo(() => getPasswordStrength(password), [password]);
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const passwordsDoNotMatch = password.length > 0 && confirmPassword.length > 0 && password !== confirmPassword;

  const handleResendCode = async () => {
    if (!email) {
      setError('Email not found. Please request a new code.');
      return;
    }
    setIsResending(true);
    setResendStatus('');
    setError('');
    try {
      await requestPasswordReset(email);
      setResendStatus('Verification code resent successfully!');
    } catch (resendError) {
      setError(getAuthErrorMessage(resendError));
    } finally {
      setIsResending(false);
    }
  };

  const handleVerifyCode = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const code = verificationCode.trim();
    if (!code) {
      setError('Enter the verification code from your email.');
      return;
    }

    setIsSubmitting(true);
    try {
      await verifyPasswordResetCode(code);
      setStep(2);
    } catch (submitError) {
      const rawMsg = getAuthErrorMessage(submitError);
      if (
        rawMsg.toLowerCase().includes('invalid') ||
        rawMsg.toLowerCase().includes('wrong') ||
        rawMsg.toLowerCase().includes('code')
      ) {
        setError('Wrong code');
      } else {
        setError(rawMsg);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const code = verificationCode.trim();
    if (!code) {
      setError('Verification code is missing. Please go back and enter it.');
      setStep(1);
      return;
    }

    if (!strength.isGood || !passwordsMatch) return;

    setIsSubmitting(true);
    try {
      await completePasswordReset(code, password);
      navigate('/forgot-password/success', { state: { email } });
    } catch (submitError) {
      setError(getAuthErrorMessage(submitError));
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
            <span className="login-page__breadcrumb-current">
              {step === 1 ? 'Verify Code' : 'Reset Password'}
            </span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className={`login-card login-card--forgot login-card--reset login-gradient-stroke login-card--step-${step}`}
          data-node-id="37:4920"
          data-name="reseting password dark mode"
        >
          {step === 1 ? (
            <Link
              to="/forgot-password/sent"
              state={{ email }}
              className="login-card__back"
              data-node-id="78:4036"
              aria-label="Back"
            >
              <IconifyIcon icon="lucide:chevron-left" width={24} height={24} aria-hidden="true" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="login-card__back"
              aria-label="Back to code verification"
              style={{ border: 'none', background: 'transparent' }}
            >
              <IconifyIcon icon="lucide:chevron-left" width={24} height={24} aria-hidden="true" />
            </button>
          )}

          <div className="login-card__hero-block" data-node-id="37:4921">
            <div className="login-card__hero" data-node-id="37:4922">
              <h2 className="login-card__heading" data-node-id="37:4923">
                {step === 1 ? 'Verification code' : 'Reset you password'}
              </h2>
            </div>
            <p className="login-card__subtitle-lg" data-node-id="37:4924">
              {step === 1 ? 'Enter your code' : 'Enter your new password'}
            </p>
          </div>

          <div className="login-card__interactive" data-node-id="37:4925">
            {step === 1 ? (
              <form className="login-form login-form--reset" noValidate onSubmit={handleVerifyCode}>
                <div className="login-card__upperside" data-node-id="37:4926">
                  <div className="login-fields login-fields--reset" data-node-id="37:4996">
                    <div className="login-field-group">
                      <label htmlFor="reset-verification-code" className="login-field__label-text">
                        Code verification
                      </label>
                      <div className={`login-field login-field--dark login-gradient-stroke${error ? ' login-field--error' : ''}`}>
                        <input
                          type="text"
                          id="reset-verification-code"
                          name="verificationcode"
                          className="login-field__input"
                          placeholder="Enter the code from your email"
                          value={verificationCode}
                          onChange={event => {
                            setVerificationCode(event.target.value);
                            if (error) setError('');
                          }}
                          autoComplete="one-time-code"
                          inputMode="numeric"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-card__resend-container">
                    {error ? (
                      <span className="login-card__resend-error">{error}</span>
                    ) : resendStatus ? (
                      <span className="login-card__resend-status">{resendStatus}</span>
                    ) : (
                      <span />
                    )}
                    <button
                      type="button"
                      className="login-card__resend-code"
                      onClick={handleResendCode}
                      disabled={isResending}
                    >
                      {isResending ? 'Resending...' : 'Resend code'}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="login-auth-btn login-auth-btn--primary"
                    disabled={!verificationCode.trim() || isSubmitting}
                  >
                    {isSubmitting ? 'Confirming…' : 'Confirm the code'}
                  </button>
                </div>
              </form>
            ) : (
              <form className="login-form login-form--reset" noValidate onSubmit={handleResetPassword}>
                <div className="login-card__upperside" data-node-id="37:4926">
                  <div className="login-fields login-fields--reset" data-node-id="37:4996">
                    <p className="login-card__rules" data-node-id="37:5065">
                      {passwordRulesText}
                    </p>

                    <LoginPasswordField
                      id="reset-password"
                      name="password"
                      placeholder="New Password"
                      value={password}
                      onChange={setPassword}
                      showPassword={showPassword}
                      onToggleVisibility={() => setShowPassword(current => !current)}
                      nodeId="37:4927"
                    />

                    <LoginPasswordField
                      id="reset-password-confirm"
                      name="confirmPassword"
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={setConfirmPassword}
                      showPassword={showConfirmPassword}
                      onToggleVisibility={() => setShowConfirmPassword(current => !current)}
                      nodeId="37:4990"
                      hasError={passwordsDoNotMatch}
                    />

                    {passwordsDoNotMatch ? (
                      <p className="login-card__error-text">Passwords do not match.</p>
                    ) : (
                      password.length > 0 && <PasswordStrengthIndicator strength={strength} />
                    )}
                  </div>

                  {error ? (
                    <p className="login-form__error login-form__error--block" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="login-auth-btn login-auth-btn--primary"
                    data-node-id="37:4928"
                    disabled={!strength.isGood || !passwordsMatch || isSubmitting}
                  >
                    {isSubmitting ? 'Updating…' : 'Confirm Password'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="login-card__logo" data-node-id="13:80">
            <img src={loginLogo} alt="Enigma" width={30} height={34} className="login-card__logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
