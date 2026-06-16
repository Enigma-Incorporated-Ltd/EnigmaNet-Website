import loginGoogleIcon from '@/assets/img/login/login-google-icon.svg';
import { getAuthConfigError, isGoogleAuthConfigured } from '@/config/authConfig';
import { getAuthErrorMessage, useAuth } from '@/hooks/useAuth';
import type { OAuthPageMode } from '@/types/oauth';
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import './google-account-button.css';

type GoogleAccountButtonProps = {
  mode?: OAuthPageMode;
  className?: string;
  'data-node-id'?: string;
  onError?: (message: string) => void;
};

const defaultClassName =
  'login-account-buttons__btn login-account-buttons__btn--google login-account-buttons__btn--light-full';

const GoogleAccountButton = ({
  mode = 'login',
  className = defaultClassName,
  'data-node-id': dataNodeId,
  onError,
}: GoogleAccountButtonProps) => {
  const navigate = useNavigate();
  const { loginGoogle } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);
  const [buttonWidth, setButtonWidth] = useState(320);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => {
      setButtonWidth(Math.max(container.offsetWidth, 200));
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(container);
    window.addEventListener('resize', updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const reportError = (message: string) => {
    if (onError) {
      onError(message);
      return;
    }
    window.alert(message);
  };

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    const idToken = response.credential;
    if (!idToken) {
      reportError('Google sign-in did not return a credential.');
      return;
    }

    setIsSubmitting(true);
    try {
      const session = await loginGoogle(idToken);
      navigate('/login/success', {
        state: {
          email: session.user.email,
          registered: mode === 'register',
        },
      });
    } catch (error) {
      reportError(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleError = () => {
    reportError('Google sign-in was cancelled or failed. Please try again.');
  };

  const handleFallbackClick = () => {
    if (!isGoogleAuthConfigured()) {
      reportError(
        getAuthConfigError() ??
          'Google sign-in is not configured. Add VITE_GOOGLE_CLIENT_ID to .env and restart the dev server.',
      );
    }
  };

  if (!isGoogleAuthConfigured()) {
    return (
      <button
        type="button"
        className={className}
        data-node-id={dataNodeId}
        onClick={handleFallbackClick}
      >
        <img src={loginGoogleIcon} alt="" width={24} height={24} aria-hidden="true" />
        <span>Google Account</span>
      </button>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`google-account-button${isSubmitting ? ' google-account-button--loading' : ''}`}
      data-node-id={dataNodeId}
    >
      <button type="button" className={className} disabled={isSubmitting} tabIndex={-1} aria-hidden="true">
        <img src={loginGoogleIcon} alt="" width={24} height={24} aria-hidden="true" />
        <span>{isSubmitting ? 'Signing in…' : 'Google Account'}</span>
      </button>

      <div className="google-account-button__overlay" aria-hidden={isSubmitting}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          useOneTap={false}
          theme="outline"
          size="large"
          text="continue_with"
          shape="rectangular"
          width={String(buttonWidth)}
        />
      </div>
    </div>
  );
};

export default GoogleAccountButton;
