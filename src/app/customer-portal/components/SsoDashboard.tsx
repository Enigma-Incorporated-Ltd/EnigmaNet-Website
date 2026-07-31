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
              <svg className="portal-search-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                className="portal-dashboard__search"
                placeholder="Search for an application..."
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
