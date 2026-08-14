import { useEffect, useState } from 'react';
import type { SsoDashboard, SsoSession } from '../services/ssoApi';
import ErrorModal from './ErrorModal';
import { useTheme } from '@/utils/useTheme';
import PortalSidebar from './PortalSidebar';
import PortalHeader from './PortalHeader';
import RecentActivityView from './RecentActivity';
import HealthSummaryView from './HealthSummary';
import DashboardOverview from './DashboardOverview';
import Marketplace from './Marketplace';


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
  const userInitials = displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('dashboard');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Make sure the theme attribute on documentElement matches local theme
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const applications = dashboard?.applications ?? [];
  const filteredApps = applications.filter((app) =>
    app.applicationName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="portal-layout">
      {/* Left Column — Sidebar Menu */}
      <PortalSidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        displayName={displayName}
        email={session.email}
        userInitials={userInitials}
      />

      <div className="portal-main">
        {/* Top Header */}
        <PortalHeader
          theme={theme}
          setTheme={setTheme}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onLogout={onLogout}
          logoutLoading={logoutLoading}
        />

        {/* Main Content Layout */}
        <main className="portal-content" id="dashboard">
          {activeNav === 'activities' ? (
            <RecentActivityView setActiveNav={setActiveNav} />
          ) : activeNav === 'health' ? (
            <HealthSummaryView setActiveNav={setActiveNav} />
          ) : activeNav === 'marketplace' ? (
            <Marketplace setActiveNav={setActiveNav} />
          ) : (
            <DashboardOverview
              displayName={displayName}
              applications={applications}
              filteredApps={filteredApps}
              dashboardLoading={dashboardLoading}
              searchQuery={searchQuery}
              setActiveNav={setActiveNav}
              session={session}
            />
          )}
        </main>
      </div>

      {/* Error Modal */}
      <ErrorModal
        isOpen={!!errorMessage}
        message={errorMessage}
        onClose={() => setErrorMessage(null)}
      />
    </div>
  );
}
