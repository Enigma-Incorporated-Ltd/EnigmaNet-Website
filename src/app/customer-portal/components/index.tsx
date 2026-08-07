import './portal.css';
import { useSsoSession } from '../hooks/useSsoSession';
import SsoDashboardPage from './SsoDashboard';
import SsoLoginPage from './SsoLoginPage';

export default function CustomerPortalPage() {
  const {
    status,
    session,
    dashboard,
    dashboardLoading,
    logoutLoading,
    error,
    login,
    logout,
  } = useSsoSession();

  if (status === 'loading') {
    return (
      <div className="portal-page-loading">
        <span className="portal-spinner portal-spinner--lg" />
        Loading portal…
      </div>
    );
  }

  if (status === 'unauthenticated' || !session) {
    return <SsoLoginPage onLogin={login} error={error} />;
  }

  return (
    <SsoDashboardPage
      session={session}
      dashboard={dashboard}
      dashboardLoading={dashboardLoading}
      onLogout={logout}
      logoutLoading={logoutLoading}
    />
  );
}
