import GoogleAccountButton from '@/components/auth/GoogleAccountButton';

import {
  EmailIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  UserIcon,
} from '@/app/login/components/LoginIcons';
import loginLogo from '@/assets/img/login/login-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { getAuthErrorMessage, useAuth } from '@/hooks/useAuth';
import {
  mapRegisterError,
  type AuthFieldError,
  type AuthFieldKey,
} from '@/utils/authFieldErrors';
import { useState } from 'react';
import { useTheme } from '@/utils/useTheme';
import { Link, useNavigate } from 'react-router';
import '@/app/login/components/login.css';
import './register.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
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

    const formData = new FormData(form);
    const firstname = String(formData.get('firstname') ?? '').trim();
    const lastname = String(formData.get('lastname') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const password = String(formData.get('password') ?? '');
    const passwordRepeat = String(formData.get('passwordRepeat') ?? '');

    if (!firstname) {
      setFieldError({ field: 'firstname', message: 'First name is required.' });
      return;
    }

    if (!lastname) {
      setFieldError({ field: 'lastname', message: 'Last name is required.' });
      return;
    }

    if (password !== passwordRepeat) {
      setFieldError({
        field: 'passwordRepeat',
        message: 'Passwords are not the same, check them.',
      });
      return;
    }

    if (password.length < 6) {
      setFieldError({
        field: 'password',
        message: 'Password must be at least 6 characters.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await register({ email, password, firstname, lastname });
      navigate('/login/sign-in', { state: { email, registered: true } });
    } catch (submitError) {
      const errMsg = getAuthErrorMessage(submitError);
      if (errMsg.toLowerCase().includes('already exists') || errMsg.toLowerCase().includes('user already')) {
        navigate('/login/sign-in-existing', { state: { email } });
      } else {
        setFieldError(mapRegisterError(errMsg));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="login-page" data-node-id="62:1833">
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
          data-node-id={isLight ? '21:2477' : '76:3209'}
          data-name={isLight ? 'registration light mode' : 'registration dark mode'}
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

          <div className="login-card__interactive" data-node-id={isLight ? '422:1492' : '76:3215'}>
            <form className="login-form" noValidate onSubmit={handleSubmit}>
              <div className="login-card__upperside" data-node-id={isLight ? '422:1493' : '76:3216'}>
                <div
                  className="login-fields login-fields--register"
                  data-node-id={isLight ? '422:1494' : '76:3217'}
                >
                  <div className="login-fields__name-row" data-node-id={isLight ? '422:1495' : undefined}>
                    <div className="login-field-group">
                      <div
                        className={`login-field login-field--dark login-gradient-stroke${fieldError?.field === 'firstname' ? ' login-field--error' : ''}`}
                        data-node-id={isLight ? '422:1496' : '76:3218'}
                      >
                        <input
                          type="text"
                          id="register-firstname"
                          name="firstname"
                          className="login-field__input"
                          placeholder="First Name"
                          autoComplete="given-name"
                          onChange={() => clearFieldError('firstname')}
                          aria-invalid={fieldError?.field === 'firstname'}
                          required
                        />
                        <span className="login-field__icon-wrap">
                          <UserIcon />
                        </span>
                      </div>
                      {fieldError?.field === 'firstname' ? (
                        <p className="login-field__error" role="alert">
                          {fieldError.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="login-field-group">
                      <div
                        className={`login-field login-field--dark login-gradient-stroke${fieldError?.field === 'lastname' ? ' login-field--error' : ''}`}
                        data-node-id={isLight ? '422:1497' : undefined}
                      >
                        <input
                          type="text"
                          id="register-lastname"
                          name="lastname"
                          className="login-field__input"
                          placeholder="Last Name"
                          autoComplete="family-name"
                          onChange={() => clearFieldError('lastname')}
                          aria-invalid={fieldError?.field === 'lastname'}
                          required
                        />
                        <span className="login-field__icon-wrap">
                          <UserIcon />
                        </span>
                      </div>
                      {fieldError?.field === 'lastname' ? (
                        <p className="login-field__error" role="alert">
                          {fieldError.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="login-field-group">
                    <div
                      className={`login-field login-field--dark login-gradient-stroke${fieldError?.field === 'email' ? ' login-field--error' : ''}`}
                      data-node-id={isLight ? '422:1498' : '76:3219'}
                    >
                      <input
                        type="email"
                        id="register-email"
                        name="email"
                        className="login-field__input"
                        placeholder="Enter Email"
                        autoComplete="email"
                        onChange={() => clearFieldError('email')}
                        aria-invalid={fieldError?.field === 'email'}
                        required
                      />
                      <span className="login-field__icon-wrap">
                        <EmailIcon />
                      </span>
                    </div>
                    {fieldError?.field === 'email' ? (
                      <p className="login-field__error" role="alert">
                        {fieldError.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="login-field-group">
                    <div
                      className={`login-field login-field--dark login-gradient-stroke${fieldError?.field === 'password' ? ' login-field--error' : ''}`}
                      data-node-id={isLight ? '422:1499' : '76:3220'}
                    >
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="register-password"
                        name="password"
                        className="login-field__input"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={() => clearFieldError('password')}
                        aria-invalid={fieldError?.field === 'password'}
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
                      <p className="login-field__error" role="alert">
                        {fieldError.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="login-field-group">
                    <div
                      className={`login-field login-field--dark login-gradient-stroke${fieldError?.field === 'passwordRepeat' ? ' login-field--error' : ''}`}
                      data-node-id={isLight ? '422:1500' : '76:3221'}
                    >
                      <input
                        type={showRepeatPassword ? 'text' : 'password'}
                        id="register-password-repeat"
                        name="passwordRepeat"
                        className="login-field__input"
                        placeholder="Repeat Password"
                        autoComplete="new-password"
                        onChange={() => clearFieldError('passwordRepeat')}
                        aria-invalid={fieldError?.field === 'passwordRepeat'}
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
                    {fieldError?.field === 'passwordRepeat' ? (
                      <p className="login-field__error" role="alert">
                        {fieldError.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-auth-btn login-auth-btn--primary"
                  data-node-id={isLight ? '422:1501' : '76:3222'}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating account…' : 'Create account'}
                </button>

                <div className="login-forgot-divider">
                  <span className="login-divider__line" aria-hidden="true" />
                  <span className="login-divider__text" data-node-id={isLight ? '422:1506' : '76:3227'}>
                    {isLight ? 'Or sign in with your' : 'Or create account with your'}
                  </span>
                  <span className="login-divider__line login-divider__line--right" aria-hidden="true" />
                </div>

                <GoogleAccountButton
                  mode="register"
                  data-node-id="76:3229"
                />
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
