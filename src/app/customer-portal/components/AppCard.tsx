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
      const redirectUri = app.callbackUrl;
      if (!redirectUri) {
        newTab.close();
        setLaunchError(
          `No callback URL from API for "${app.clientId}". Check tblSSOApplications AppUrl.`,
        );
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

      <div className="portal-app-card__left">
        <div className="portal-app-card__icon-wrap">
          {app.iconUrl ? (
            <img
              src={app.iconUrl}
              alt=""
              className="portal-app-card__icon"
            />
          ) : (
            <div className="portal-app-card__icon-placeholder">{initials}</div>
          )}
        </div>
        <div className="portal-app-card__info">
          <h3 className="portal-app-card__name">{app.applicationName}</h3>
          {app.accessGranted ? (
            <span className="portal-badge portal-badge--success">Authorized</span>
          ) : (
            <span className="portal-badge portal-badge--danger">Locked</span>
          )}
        </div>
      </div>

      <div className="portal-app-card__right">
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
          <div className="portal-app-card__locked-msg" title={app.accessDeniedReason ?? 'You do not have access to this application.'}>
            {app.accessDeniedReason ?? 'Locked'}
          </div>
        )}
      </div>
    </article>
  );
}
