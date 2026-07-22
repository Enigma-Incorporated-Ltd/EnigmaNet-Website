import { useCallback, useEffect, useState } from 'react';
import {
  clearSsoSession,
  loadSsoSession,
  saveSsoSession,
  ssoGetApplications,
  ssoLogout,
  ssoPortalLogin,
  type SsoDashboard,
  type SsoSession,
} from '../services/ssoApi';
import { triggerAppLogoutUrls } from '../utils/globalLogout';

type SessionState =
  | { status: 'loading' }
  | { status: 'unauthenticated' }
  | { status: 'authenticated'; session: SsoSession; dashboard: SsoDashboard | null };

export function useSsoSession() {
  const [state, setState] = useState<SessionState>({ status: 'loading' });
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Restore session from sessionStorage on mount
  useEffect(() => {
    const session = loadSsoSession();
    if (session) {
      setState({ status: 'authenticated', session, dashboard: null });
      void loadDashboard(session.sessionToken);
    } else {
      setState({ status: 'unauthenticated' });
    }
  }, []);

  const loadDashboard = useCallback(async (sessionToken: string) => {
    setDashboardLoading(true);
    try {
      const dashboard = await ssoGetApplications(sessionToken);
      setState((prev) =>
        prev.status === 'authenticated'
          ? { ...prev, dashboard }
          : prev,
      );
    } catch (err) {
      if (err instanceof Error && err.message.includes('401')) {
        // Session expired server-side
        clearSsoSession();
        setState({ status: 'unauthenticated' });
      }
      setError('Failed to load applications. Please refresh.');
    } finally {
      setDashboardLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setError(null);
    try {
      const session = await ssoPortalLogin(email, password);
      saveSsoSession(session);
      setState({ status: 'authenticated', session, dashboard: null });
      await loadDashboard(session.sessionToken);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Login failed.';
      setError(msg);
      throw err;
    }
  }, [loadDashboard]);

  const logout = useCallback(async () => {
    if (state.status !== 'authenticated' || logoutLoading) return;
    setLogoutLoading(true);
    try {
      const logoutResult = await ssoLogout(state.session.sessionToken);
      triggerAppLogoutUrls(logoutResult.appLogoutUrls);
      setState({ status: 'unauthenticated' });
      setError(null);
    } finally {
      setLogoutLoading(false);
    }
  }, [state, logoutLoading]);

  const session = state.status === 'authenticated' ? state.session : null;
  const dashboard = state.status === 'authenticated' ? state.dashboard : null;

  return {
    status: state.status,
    session,
    dashboard,
    dashboardLoading,
    error,
    login,
    logout,
    logoutLoading,
  };
}
