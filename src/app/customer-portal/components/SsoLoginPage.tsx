import { type FormEvent, useState } from 'react';

interface SsoLoginPageProps {
  onLogin: (email: string, password: string) => Promise<void>;
  error: string | null;
}

export default function SsoLoginPage({ onLogin, error }: SsoLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) return;
    setLoading(true);
    try {
      await onLogin(email.trim(), password);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="portal-login">
      <div className="portal-login__card">
        <div className="portal-login__logo">
          <span className="portal-login__logo-text">enigmanet</span>
        </div>

        <h1 className="portal-login__title">Customer Portal</h1>
        <p className="portal-login__subtitle">
          Sign in once to access all your applications.
        </p>

        {error && <div className="portal-login__error">{error}</div>}

        <form className="portal-login__form" onSubmit={handleSubmit}>
          <div className="portal-login__field">
            <label className="portal-login__label" htmlFor="sso-email">
              Email
            </label>
            <input
              id="sso-email"
              type="email"
              className="portal-login__input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="portal-login__field">
            <label className="portal-login__label" htmlFor="sso-password">
              Password
            </label>
            <input
              id="sso-password"
              type="password"
              className="portal-login__input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="portal-login__btn"
            disabled={loading || !email.trim() || !password}
          >
            {loading ? (
              <>
                <span className="portal-spinner" />
                Signing in…
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
