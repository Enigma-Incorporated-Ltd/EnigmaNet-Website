import { useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');

  const applications = dashboard?.applications ?? [];
  const filteredApps = applications.filter((app) =>
    app.applicationName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="portal-layout">
      <main className="portal-dashboard">
        <div className="portal-dashboard__welcome portal-dashboard__welcome--with-actions">
          <div className="portal-dashboard__welcome-copy">
            <h1 className="portal-dashboard__welcome-title">Welcome back, {displayName}</h1>
            <p className="portal-dashboard__welcome-subtitle">
              Access your Enigma applications, manage your account and discover new solutions from one secure portal.
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
            <div className="portal-dashboard__apps-header-left">
              <h2 className="portal-dashboard__apps-title">My Services</h2>
              <p className="portal-dashboard__apps-subtitle">
                Applications available with your current subscription.
              </p>
            </div>
            <div className="portal-dashboard__apps-header-right">
              <button type="button" className="portal-carousel-btn portal-carousel-btn--left" aria-label="Previous service">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11.5" transform="matrix(-1 0 0 1 24 0)" stroke="url(#paint0_linear_35_1048)"/>
                  <path d="M18 11.5H18.5V12.5H18V12V11.5ZM18 12V12.5H5V12V11.5H18V12Z" fill="url(#paint1_linear_35_1048)"/>
                  <path d="M11 5L5 11.5L11 18" stroke="url(#paint2_linear_35_1048)" stroke-linecap="square"/>
                  <defs>
                    <linearGradient id="paint0_linear_35_1048" x1="-0.0205304" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2ADEFF"/>
                      <stop offset="1" stop-color="#002398"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_35_1048" x1="18.0111" y1="12.5" x2="5" y2="12.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2ADEFF"/>
                      <stop offset="1" stop-color="#002398"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_35_1048" x1="11.0051" y1="11.5" x2="5" y2="11.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2ADEFF"/>
                      <stop offset="1" stop-color="#002398"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button type="button" className="portal-carousel-btn portal-carousel-btn--right" aria-label="Next service">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11.5" transform="matrix(-1 0 0 1 24 0)" stroke="url(#paint0_linear_35_1048_r)"/>
                  <path d="M18 11.5H18.5V12.5H18V12V11.5ZM18 12V12.5H5V12V11.5H18V12Z" fill="url(#paint1_linear_35_1048_r)"/>
                  <path d="M11 5L5 11.5L11 18" stroke="url(#paint2_linear_35_1048_r)" stroke-linecap="square"/>
                  <defs>
                    <linearGradient id="paint0_linear_35_1048_r" x1="-0.0205304" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2ADEFF"/>
                      <stop offset="1" stop-color="#002398"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_35_1048_r" x1="18.0111" y1="12.5" x2="5" y2="12.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2ADEFF"/>
                      <stop offset="1" stop-color="#002398"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_35_1048_r" x1="11.0051" y1="11.5" x2="5" y2="11.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#2ADEFF"/>
                      <stop offset="1" stop-color="#002398"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>

          <div className="portal-dashboard__sub-header">
            <p className="portal-dashboard__instruction">Select an application below to open it</p>
            <div className="portal-dashboard__search-wrap">
              <svg className="portal-search-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.75 7H7.355L7.215 6.865C7.72198 6.27704 8.0006 5.52636 8 4.75C8 4.10721 7.80939 3.47886 7.45228 2.9444C7.09516 2.40994 6.58758 1.99338 5.99372 1.74739C5.39986 1.50141 4.7464 1.43705 4.11596 1.56245C3.48552 1.68785 2.90642 1.99738 2.4519 2.4519C1.99738 2.90642 1.68785 3.48552 1.56245 4.11596C1.43705 4.7464 1.50141 5.39986 1.74739 5.99372C1.99338 6.58758 2.40994 7.09516 2.9444 7.45228C3.47886 7.80939 4.10721 8 4.75 8C5.555 8 6.295 7.705 6.865 7.215L7 7.355V7.75L9.5 10.245L10.245 9.5L7.75 7ZM4.75 7C3.505 7 2.5 5.995 2.5 4.75C2.5 3.505 3.505 2.5 4.75 2.5C5.995 2.5 7 3.505 7 4.75C7 5.995 5.995 7 4.75 7Z" fill="currentColor"/>
              </svg>
              <input
                type="text"
                className="portal-dashboard__search"
                placeholder="Search for application, services, documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {dashboardLoading && (
            <div className="portal-dashboard__loading">
              <span className="portal-spinner portal-spinner--lg" />
              <p>Loading your applications…</p>
            </div>
          )}

          {!dashboardLoading && applications.length === 0 && (
            <div className="portal-dashboard__empty">
              <p>No applications are available for your account.</p>
              <span>Contact support if you believe this is incorrect.</span>
            </div>
          )}

          {!dashboardLoading && applications.length > 0 && filteredApps.length === 0 && (
            <div className="portal-dashboard__empty">
              <p>No applications match your search query "{searchQuery}".</p>
            </div>
          )}

          {!dashboardLoading && filteredApps.length > 0 && (
            <div className="portal-dashboard__grid">
              {filteredApps.map((app) => (
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
