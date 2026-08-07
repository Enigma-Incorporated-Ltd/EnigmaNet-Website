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

  // Helper to render customized abstract product illustrations
  const renderIllustration = () => {
    if (app.iconUrl) {
      return (
        <div
          className="portal-app-card__image"
          style={{ backgroundImage: `url(${app.iconUrl})`, backgroundSize: 'cover' }}
        />
      );
    }

    const nameLower = app.applicationName.toLowerCase();

    // 1. GPU / Compute Management
    if (nameLower.includes('gpu') || nameLower.includes('compute')) {
      return (
        <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
          {/* Outer processor frame with pin mockups */}
          <rect x="12" y="12" width="40" height="40" rx="4" />
          <rect x="20" y="20" width="24" height="24" rx="2" />
          <path d="M12 20h-4M12 28h-4M12 36h-4M12 44h-4" />
          <path d="M56 20h-4M56 28h-4M56 36h-4M56 44h-4" />
          <path d="M20 12v-4M28 12v-4M36 12v-4M44 12v-4" />
          <path d="M20 52v4M28 52v4M36 52v4M44 52v4" />
          {/* Inner core */}
          <circle cx="32" cy="32" r="4" fill="#2adeff" />
        </svg>
      );
    }

    // 2. APN Core / Network Accelerated private network
    if (nameLower.includes('apn') || nameLower.includes('network') || nameLower.includes('accelerat')) {
      return (
        <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
          {/* Dynamic nodes and paths connections */}
          <circle cx="16" cy="32" r="4" fill="#2adeff" />
          <circle cx="48" cy="18" r="4" />
          <circle cx="48" cy="46" r="4" />
          <circle cx="32" cy="18" r="3" />
          <circle cx="32" cy="46" r="3" />
          <line x1="20" y1="32" x2="29" y2="20" />
          <line x1="20" y1="32" x2="29" y2="44" />
          <line x1="35" y1="18" x2="44" y2="18" />
          <line x1="35" y1="46" x2="44" y2="46" />
          <line x1="48" y1="22" x2="48" y2="42" />
          <path d="M32 21v22" strokeDasharray="2,2" />
        </svg>
      );
    }

    // 3. CONNECT / Connect Link
    if (nameLower.includes('connect')) {
      return (
        <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
          {/* Central intersecting triangle connections */}
          <polygon points="32,10 52,48 12,48" />
          <circle cx="32" cy="10" r="4" fill="#2adeff" />
          <circle cx="52" cy="48" r="4" fill="#2adeff" />
          <circle cx="12" cy="48" r="4" fill="#2adeff" />
          <circle cx="32" cy="32" r="3" />
        </svg>
      );
    }

    // 4. ESC Storage / Cloud Storage / Hot Storage
    if (nameLower.includes('storage') || nameLower.includes('file') || nameLower.includes('sync')) {
      return (
        <svg className="portal-app-card__illustration-svg" viewBox="0 0 64 64" fill="none" stroke="#2adeff" strokeWidth="2">
          {/* Database server storage stacks */}
          <ellipse cx="32" cy="16" rx="16" ry="6" />
          <path d="M16 16v10c0 3.3 7.2 6 16 6s16-2.7 16-6V16" />
          <path d="M16 26v10c0 3.3 7.2 6 16 6s16-2.7 16-6V26" />
          <path d="M16 36v10c0 3.3 7.2 6 16 6s16-2.7 16-6V36" />
          {/* LED light representations */}
          <circle cx="24" cy="22" r="1.5" fill="#2adeff" />
          <circle cx="24" cy="32" r="1.5" fill="#2adeff" />
          <circle cx="24" cy="42" r="1.5" fill="#2adeff" />
        </svg>
      );
    }

    // Default Fallback initials circle
    return <div className="portal-app-card__icon-placeholder">{initials}</div>;
  };

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

      {/* Image container with glowing gradients */}
      <div className="portal-app-card__image">
        <div className="portal-app-card__illustration-wrapper">
          <div className="portal-app-card__ellipse1" style={{ background: 'radial-gradient(circle, rgba(42,222,255,0.12) 0%, transparent 70%)' }} />
          <div className="portal-app-card__ellipse2" style={{ background: 'radial-gradient(circle, rgba(0,35,152,0.12) 0%, transparent 70%)' }} />
          {renderIllustration()}
        </div>
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
