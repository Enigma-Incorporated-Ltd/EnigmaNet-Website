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
import '@/app/login-google/components/google-login.css';
import './forgot-password.css';

const passwordRulesText =
  'Password must contain at least 1 uppercase letter, 1 number, and 1 special character.';

type ResetLocationState = {
  email?: string;
};

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyPasswordResetCode, completePasswordReset } = useAuth();
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = (location.state as ResetLocationState | null)?.email ?? '';

  const strength = useMemo(() => getPasswordStrength(password), [password]);
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const code = verificationCode.trim();
    if (!code) {
      setError('Enter the verification code from your email.');
      return;
    }

    if (!strength.isGood || !passwordsMatch) return;

    setIsSubmitting(true);
    try {
      await verifyPasswordResetCode(code);
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
            <span className="login-page__breadcrumb-current">Reset Password</span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--forgot login-card--reset login-gradient-stroke"
          data-node-id="37:4920"
          data-name="reseting password dark mode"
        >
          <Link
            to="/forgot-password/sent"
            className="login-card__back"
            data-node-id="78:4036"
            aria-label="Back"
          >
            <IconifyIcon icon="lucide:chevron-left" width={24} height={24} aria-hidden="true" />
          </Link>

          <div className="login-card__hero-block" data-node-id="37:4921">
            <div className="login-card__hero" data-node-id="37:4922">
              <h2 className="login-card__heading" data-node-id="37:4923">
                Reset you password
              </h2>
            </div>
            <p className="login-card__subtitle-lg" data-node-id="37:4924">
              Enter your new password
            </p>
          </div>

          <div className="login-card__interactive" data-node-id="37:4925">
            <form className="login-form login-form--reset" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id="37:4926">
                <div className="login-fields login-fields--reset" data-node-id="37:4996">
                  <div className="login-field login-field--dark login-gradient-stroke">
                    <input
                      type="text"
                      id="reset-verification-code"
                      name="verificationcode"
                      className="login-field__input"
                      placeholder="Verification code"
                      value={verificationCode}
                      onChange={event => setVerificationCode(event.target.value)}
                      autoComplete="one-time-code"
                      inputMode="numeric"
                      required
                    />
                  </div>

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
                  />

                  {password.length > 0 && <PasswordStrengthIndicator strength={strength} />}
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
