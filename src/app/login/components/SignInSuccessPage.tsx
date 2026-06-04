import signinSuccessDeco from '@/assets/img/login/vectorlogo.png';
import IconifyIcon from '@/components/IconifyIcon';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import './login.css';
import './login-success.css';

type SignInSuccessLocationState = {
  email?: string;
};
  
const formatUserLabel = (email: string) => {
  const local = (email.split('@')[0] ?? email).trim();
  return local ? local.toUpperCase() : 'USER NAME';
};

const REDIRECT_DELAY_MS = 10_000;

const SignInSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as SignInSuccessLocationState | null) ?? {};
  const email = state.email ?? '';

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate('/dashboard', { replace: true });
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="login-page login-page--signin-success">
      <div className="login-page__header-wrap">
        <div className="login-page__header" data-name="Text">
          <h1 className="login-page__title">Sign In Page</h1>
          <nav className="login-page__breadcrumb" aria-label="breadcrumb">
            <Link to="/">
              <IconifyIcon icon="lucide:home" width={12} height={12} aria-hidden="true" />
              Home
            </Link>
            <span className="login-page__breadcrumb-sep" aria-hidden="true">
              <IconifyIcon icon="lucide:chevron-right" width={12} height={12} />
            </span>
            <span className="login-page__breadcrumb-current">Success</span>
          </nav>
        </div>
      </div>

      <div className="login-page__content">
        <div
          className="login-card login-card--signin-success login-gradient-stroke"
          data-node-id="76:2424"
          data-name="signin success dark mode"
        >
          <img
            src={signinSuccessDeco}
            alt=""
            className="login-card__signin-success-deco"
            aria-hidden="true"
            data-node-id="76:2425"
            data-name="logo"
          />

          <div className="login-card__signin-success-content" data-node-id="76:2426">
            <div className="login-card__signin-success-hero" data-node-id="76:2428">
              <h2 className="login-card__heading" data-node-id="76:2429">
                Welcome!
              </h2>
              <p className="login-card__subtitle login-card__subtitle--signin-success" data-node-id="76:2430">
                Secure access to <strong>Enigma</strong> Work infrastructure.
              </p>
            </div>

            <p className="login-card__signin-success-user" data-node-id="76:2431">
              {email ? formatUserLabel(email) : 'USER NAME'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInSuccessPage;
