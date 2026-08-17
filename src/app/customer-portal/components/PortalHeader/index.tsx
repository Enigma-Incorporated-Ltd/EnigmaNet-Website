import { useState } from 'react';
import './header.css';

interface PortalHeaderProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onLogout: () => void | Promise<void>;
  logoutLoading?: boolean;
}

export default function PortalHeader({
  theme,
  setTheme,
  searchQuery,
  setSearchQuery,
  onLogout,
  logoutLoading = false,
}: PortalHeaderProps) {
  const [unreadCount, setUnreadCount] = useState(1);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);

  return (
    <>
      <header className="portal-header">
        {/* Search Input */}
        <div className="portal-header__search-wrap">
          <svg
            className="portal-search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M7.75 7H7.355L7.215 6.865C7.72198 6.27704 8.0006 5.52636 8 4.75C8 4.10721 7.80939 3.47886 7.45228 2.9444C7.09516 2.40994 6.58758 1.99338 5.99372 1.74739C5.39986 1.50141 4.7464 1.43705 4.11596 1.56245C3.48552 1.68785 2.90642 1.99738 2.4519 2.4519C1.99738 2.90642 1.6875 3.48552 1.56245 4.11596C1.43705 4.7464 1.50141 5.39986 1.74739 5.99372C1.99338 6.58758 2.40994 7.09516 2.9444 7.45228C3.47886 7.80939 4.10721 8 4.75 8C5.555 8 6.295 7.705 6.865 7.215L7 7.355V7.75L9.5 10.245L10.245 9.5L7.75 7ZM4.75 7C3.505 7 2.5 5.995 2.5 4.75C2.5 3.505 3.505 2.5 4.75 2.5C5.995 2.5 7 3.505 7 4.75C7 5.995 5.995 7 4.75 7Z"
              fill="currentColor"
            />
          </svg>
          <input
            type="text"
            className="portal-header__search"
            placeholder="Search for application, services, documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Theme, notification, and user profile menu */}
        <div className="portal-header__actions">
          {/* Notification bell icon */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <button
              type="button"
              className="portal-header__notify-btn"
              aria-label="Notifications"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setUnreadCount(0);
              }}
            >
              <svg className="portal-header__notify-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5002 18C15.5002 18.4596 15.4097 18.9148 15.2338 19.3394C15.0579 19.764 14.8001 20.1499 14.4751 20.4749C14.1501 20.7999 13.7642 21.0577 13.3396 21.2336C12.915 21.4095 12.4598 21.5 12.0002 21.5C11.5406 21.5 11.0855 21.4095 10.6608 21.2336C10.2362 21.0577 9.85034 20.7999 9.52534 20.4749C9.20033 20.1499 8.94252 19.764 8.76663 19.3394C8.59074 18.9148 8.50021 18.4596 8.50021 18M19.2312 18H4.77021C4.42038 17.9999 4.07845 17.896 3.78765 17.7015C3.49684 17.5071 3.27022 17.2308 3.13643 16.9075C3.00265 16.5843 2.9677 16.2287 3.03601 15.8856C3.10432 15.5425 3.27282 15.2273 3.52021 14.98L4.12221 14.377C4.68449 13.8144 5.00031 13.0514 5.00021 12.256V9.5C5.00021 7.64348 5.73771 5.86301 7.05046 4.55025C8.36322 3.2375 10.1437 2.5 12.0002 2.5C13.8567 2.5 15.6372 3.2375 16.95 4.55025C18.2627 5.86301 19.0002 7.64348 19.0002 9.5V12.256C19.0004 13.0516 19.3166 13.8145 19.8792 14.377L20.4822 14.98C20.7291 15.2275 20.8972 15.5426 20.9652 15.8856C21.0333 16.2285 20.9982 16.5839 20.8645 16.9069C20.7308 17.23 20.5044 17.5062 20.2139 17.7007C19.9234 17.8952 19.5808 17.9994 19.2312 18Z" stroke="url(#paint0_linear_bell_notify)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_bell_notify" x1="2.98656" y1="12" x2="20.9991" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                </defs>
              </svg>
              {unreadCount > 0 && <span className="portal-header__notify-badge">1</span>}
            </button>

            {isNotificationsOpen && (
              <div className="portal-notify-dropdown">
                <div className="portal-notify-dropdown__item portal-notify-dropdown__item--highlight">
                  <span className="portal-notify-dropdown__time">1 min. ago</span>
                  <span className="portal-notify-dropdown__text">New update is available...</span>
                </div>
                <div className="portal-notify-dropdown__item">
                  <span className="portal-notify-dropdown__time">2 days ago</span>
                  <span className="portal-notify-dropdown__text">Your receive for July ...</span>
                </div>
                <div className="portal-notify-dropdown__item">
                  <span className="portal-notify-dropdown__time">2 days ago</span>
                  <span className="portal-notify-dropdown__text">Your receive for July ...</span>
                </div>
                <div className="portal-notify-dropdown__item">
                  <span className="portal-notify-dropdown__time">2 days ago</span>
                  <span className="portal-notify-dropdown__text">Your receive for July ...</span>
                </div>
                <div className="portal-notify-dropdown__item">
                  <span className="portal-notify-dropdown__time">2 days ago</span>
                  <span className="portal-notify-dropdown__text">Your receive for July ...</span>
                </div>
              </div>
            )}
          </div>

          {/* Figma-styled Theme Toggle Switch */}
          <div className="portal-header__theme-toggle">
            <span className="portal-header__theme-toggle-label">Light</span>
            <button
              type="button"
              className={`portal-header__theme-switch ${theme === 'dark' ? 'portal-header__theme-switch--dark' : ''}`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              <span className="portal-header__theme-indicator" />
            </button>
            <span className="portal-header__theme-toggle-label">Dark</span>
          </div>

          {/* Dedicated Logout Button */}
          <button
            type="button"
            className="portal-header__logout-btn"
            onClick={() => setIsLogoutConfirmOpen(true)}
            disabled={logoutLoading}
          >
            {logoutLoading ? (
              <span>Logging out...</span>
            ) : (
              <>
                <span>Logout</span>
                <svg className="portal-header__logout-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.27567 11.6666C3.00695 11.6666 2.78276 11.5768 2.60309 11.3971C2.42342 11.2174 2.3334 10.993 2.33301 10.7239V3.27592C2.33301 3.0072 2.42304 2.783 2.60309 2.60334C2.78315 2.42367 3.00734 2.33364 3.27567 2.33325H7.01076V2.91659H3.27567C3.18584 2.91659 3.1034 2.95392 3.02834 3.02859C2.95329 3.10325 2.91595 3.1857 2.91634 3.27592V10.7245C2.91634 10.8139 2.95367 10.8962 3.02834 10.9713C3.10301 11.0463 3.18526 11.0836 3.27509 11.0833H7.01076V11.6666H3.27567ZM9.60251 9.06433L9.19301 8.64434L10.5458 7.29158H5.36167V6.70825H10.5458L9.19242 5.35492L9.60192 4.93609L11.6663 6.99992L9.60251 9.06443Z" fill="currentColor"/>
                </svg>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {isLogoutConfirmOpen && (
        <div className="portal-support-modal-overlay" onClick={() => setIsLogoutConfirmOpen(false)}>
          <div className="portal-logout-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header title & close button */}
            <div className="portal-logout-modal__header">
              <h2 className="portal-logout-modal__title">Log out of your account?</h2>
              <button
                type="button"
                className="portal-logout-modal__close"
                onClick={() => setIsLogoutConfirmOpen(false)}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.3959 7.757C16.4889 7.84987 16.5627 7.96016 16.613 8.08156C16.6633 8.20296 16.6892 8.33308 16.6892 8.4645C16.6892 8.59591 16.6633 8.72604 16.613 8.84744C16.5627 8.96884 16.4889 9.07913 16.3959 9.172L13.4139 12.153L16.0899 14.828C16.2776 15.0156 16.383 15.2701 16.383 15.5355C16.383 15.8009 16.2776 16.0554 16.0899 16.243C15.9023 16.4306 15.6478 16.5361 15.3824 16.5361C15.1171 16.5361 14.8626 16.4306 14.6749 16.243L11.9999 13.567L9.32494 16.243C9.1373 16.4306 8.88281 16.5361 8.61745 16.5361C8.35208 16.5361 8.09759 16.4306 7.90994 16.243C7.7223 16.0554 7.61689 15.8009 7.61689 15.5355C7.61689 15.2701 7.7223 15.0156 7.90994 14.828L10.5859 12.153L7.60394 9.172C7.51103 9.07902 7.43735 8.96866 7.38709 8.8472C7.33683 8.72575 7.31099 8.59559 7.31104 8.46415C7.31108 8.3327 7.33702 8.20256 7.38736 8.08114C7.4377 7.95972 7.51147 7.84941 7.60444 7.7565C7.69742 7.66359 7.80779 7.5899 7.92924 7.53964C8.05069 7.48939 8.18086 7.46354 8.3123 7.46359C8.44374 7.46364 8.57388 7.48957 8.6953 7.53991C8.81672 7.59026 8.92704 7.66402 9.01995 7.757L11.9999 10.74L14.9809 7.758C15.0738 7.66502 15.1841 7.59126 15.3055 7.54094C15.4269 7.49061 15.557 7.46471 15.6884 7.46471C15.8199 7.46471 15.95 7.49061 16.0714 7.54094C16.1928 7.59126 16.3031 7.66402 16.3959 7.757Z" fill="url(#paint0_linear_logout_close)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 1C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V20C1 20.7956 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H20C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20V4C23 3.20435 22.6839 2.44129 22.1213 1.87868C21.5587 1.31607 20.7956 1 20 1H4ZM20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z" fill="url(#paint1_linear_logout_close)" />
                  <defs>
                    <linearGradient id="paint0_linear_logout_close" x1="7.31265" y1="11.9956" x2="16.688" y2="11.9956" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2ADEFF" />
                      <stop offset="1" stopColor="#002398" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_logout_close" x1="1.00379" y1="11.9897" x2="22.9972" y2="11.9897" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2ADEFF" />
                      <stop offset="1" stopColor="#002398" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>

            {/* Subtitle text */}
            <p className="portal-logout-modal__subtitle">
              You will need to sign in again to access your account.
            </p>

            {/* Action buttons row */}
            <div className="portal-logout-modal__actions">
              <button
                type="button"
                className="portal-logout-modal__btn portal-logout-modal__btn--confirm"
                onClick={() => {
                  setIsLogoutConfirmOpen(false);
                  onLogout();
                }}
                disabled={logoutLoading}
              >
                Logout
              </button>
              <button
                type="button"
                className="portal-logout-modal__btn portal-logout-modal__btn--cancel"
                onClick={() => setIsLogoutConfirmOpen(false)}
              >
                Stay in application
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
