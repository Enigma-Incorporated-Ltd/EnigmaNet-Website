import { useState } from 'react';
import {
  deriveChallenge,
  generateState,
  generateVerifier,
  ssoAuthorize,
  type SsoApplication,
} from '../services/ssoApi';
import {
  navigateLaunchTab,
  writeLaunchPendingTab,
} from '../utils/launchUi';

interface AppCardProps {
  app: SsoApplication;
  sessionToken: string;
}

const REDIRECT_URIS: Record<string, string> = {
  n0de: (import.meta.env.VITE_NODE_SSO_CALLBACK as string | undefined)
    ?? 'http://localhost:5174/sso/callback',
};

export default function AppCard({ app, sessionToken }: AppCardProps) {
  const [launching, setLaunching] = useState(false);
  const [launchError, setLaunchError] = useState<string | null>(null);

  const handleOpen = async () => {
    if (!app.accessGranted || launching) return;
    setLaunchError(null);
    setLaunching(true);

    const newTab = window.open('about:blank', '_blank');
    if (!newTab) {
      setLaunchError('Pop-up blocked. Allow pop-ups for this site and try again.');
      setLaunching(false);
      return;
    }
    writeLaunchPendingTab(newTab, app.applicationName);

    try {
      const redirectUri = REDIRECT_URIS[app.clientId];
      if (!redirectUri) {
        newTab.close();
        setLaunchError('Launch URL not configured for this app.');
        setLaunching(false);
        return;
      }

      const verifier = generateVerifier();
      const challenge = await deriveChallenge(verifier);
      const state = generateState();

      sessionStorage.setItem(`sso_verifier_${app.clientId}`, verifier);
      sessionStorage.setItem(`sso_state_${app.clientId}`, state);

      const redirectUrl = await ssoAuthorize(
        sessionToken,
        app.clientId,
        redirectUri,
        state,
        challenge,
      );

      const separator = redirectUrl.includes('#') ? '&' : '#';
      const finalUrl = `${redirectUrl}${separator}verifier=${encodeURIComponent(verifier)}`;

      navigateLaunchTab(newTab, finalUrl, app.applicationName);
    } catch (err) {
      newTab.close();
      const msg = err instanceof Error ? err.message : 'Failed to launch application.';
      setLaunchError(msg);
    } finally {
      setLaunching(false);
    }
  };

  const initials = app.applicationName.slice(0, 2).toUpperCase();

  return (
    <article
      className={`portal-app-card${!app.accessGranted ? ' portal-app-card--locked' : ''}${launching ? ' portal-app-card--launching' : ''}`}
    >
      {launching && (
        <div className="portal-app-card__launching" aria-live="polite">
          <span className="portal-spinner portal-spinner--lg" />
          <span className="portal-app-card__launching-text">Opening {app.applicationName}…</span>
        </div>
      )}

      <div
        className="portal-app-card__image"
        style={app.iconUrl ? { backgroundImage: `url(${app.iconUrl})` } : undefined}
      >
        {!app.iconUrl && (
          <div className="portal-app-card__icon-placeholder">{initials}</div>
        )}
      </div>

      <h3 className="portal-app-card__name" title={app.applicationName}>
        {app.applicationName}
      </h3>

      <p className="portal-app-card__description" title={app.description}>
        {app.description || 'No description available'}
      </p>

      <div className="portal-app-card__action">
        {launchError && (
          <p className="portal-app-card__error">{launchError}</p>
        )}

        {app.accessGranted ? (
          <button
            type="button"
            className="portal-app-card__open-btn"
            onClick={handleOpen}
            disabled={launching}
          >
            {launching ? 'Opening…' : 'Open'}
          </button>
        ) : (
          <div
            className="portal-app-card__locked-msg"
            title={app.accessDeniedReason ?? 'You do not have access to this application.'}
          >
            {app.accessDeniedReason ?? 'Locked'}
          </div>
        )}
      </div>
    </article>
  );
}
