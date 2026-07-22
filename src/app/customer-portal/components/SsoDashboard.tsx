import type { SsoDashboard, SsoSession } from '../services/ssoApi';
import AppCard from './AppCard';
import PortalUserMenu from './PortalUserMenu';

interface SsoDashboardProps {
  session: SsoSession;
  dashboard: SsoDashboard | null;
  dashboardLoading: boolean;
  onLogout: () => void | Promise<void>;
  logoutLoading?: boolean;
}

export default function SsoDashboardPage({
  session,
  dashboard,
  dashboardLoading,
  onLogout,
  logoutLoading = false,
}: SsoDashboardProps) {
  const displayName = session.displayName ?? session.email.split('@')[0];
  const appCount = dashboard?.applications.length ?? 0;
  const grantedCount = dashboard?.applications.filter((a) => a.accessGranted).length ?? 0;

  return (
    <div className="portal-layout">
      <main className="portal-dashboard">
        <div className="portal-dashboard__welcome portal-dashboard__welcome--with-actions">
          <div className="portal-dashboard__welcome-copy">
            <h1 className="portal-dashboard__welcome-title">Welcome back, {displayName}</h1>
            <p className="portal-dashboard__welcome-subtitle">
              Select an application below to open it without signing in again.
            </p>
          </div>

          <PortalUserMenu
            session={session}
            onLogout={onLogout}
            loggingOut={logoutLoading}
          />
        </div>

        <div className="portal-dashboard__apps-panel">
          <div className="portal-dashboard__apps-header">
            <h2 className="portal-dashboard__apps-title">
              My Apps
              {!dashboardLoading && appCount > 0 && (
                <span className="portal-dashboard__apps-count">({appCount})</span>
              )}
            </h2>
            {!dashboardLoading && appCount > 0 && (
              <span className="portal-dashboard__apps-meta">
                {grantedCount} available
              </span>
            )}
          </div>

          {dashboardLoading && (
            <div className="portal-dashboard__loading">
              <span className="portal-spinner portal-spinner--lg" />
              <p>Loading your applications…</p>
            </div>
          )}

          {!dashboardLoading && dashboard && dashboard.applications.length === 0 && (
            <div className="portal-dashboard__empty">
              <p>No applications are available for your account.</p>
              <span>Contact support if you believe this is incorrect.</span>
            </div>
          )}

          {!dashboardLoading && dashboard && dashboard.applications.length > 0 && (
            <div className="portal-dashboard__grid">
              {dashboard.applications.map((app) => (
                <AppCard
                  key={app.clientId}
                  app={app}
                  sessionToken={session.sessionToken}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
