import { useEffect, useRef, useState } from 'react';
import type { SsoSession } from '../services/ssoApi';

interface PortalUserMenuProps {
  session: SsoSession;
  onLogout: () => void | Promise<void>;
  loggingOut?: boolean;
}

export default function PortalUserMenu({
  session,
  onLogout,
  loggingOut = false,
}: PortalUserMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const displayName = session.displayName ?? session.email.split('@')[0];
  const avatarInitial = displayName.charAt(0).toUpperCase();

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const handleLogout = async () => {
    setOpen(false);
    await onLogout();
  };

  return (
    <div className="portal-user-menu" ref={rootRef}>
      <button
        type="button"
        className="portal-user-menu__trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        disabled={loggingOut}
      >
        {session.profileImageUrl ? (
          <img
            src={session.profileImageUrl}
            alt=""
            className="portal-user-menu__avatar"
          />
        ) : (
          <div className="portal-user-menu__avatar portal-user-menu__avatar--placeholder">
            {avatarInitial}
          </div>
        )}
        <span className="portal-user-menu__trigger-text">
          <span className="portal-user-menu__name">{displayName}</span>
          <span className="portal-user-menu__email">{session.email}</span>
        </span>
        <span className={`portal-user-menu__chevron${open ? ' portal-user-menu__chevron--open' : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="portal-user-menu__dropdown" role="menu">
          <div className="portal-user-menu__dropdown-header">
            <span className="portal-user-menu__dropdown-name">{displayName}</span>
            <span className="portal-user-menu__dropdown-email">{session.email}</span>
          </div>
          <button
            type="button"
            className="portal-user-menu__logout"
            role="menuitem"
            onClick={() => void handleLogout()}
            disabled={loggingOut}
          >
            {loggingOut ? (
              <>
                <span className="portal-spinner" />
                Signing out…
              </>
            ) : (
              'Log out'
            )}
          </button>
        </div>
      )}

      <button
        type="button"
        className="portal-user-menu__logout-btn"
        onClick={() => void handleLogout()}
        disabled={loggingOut}
      >
        {loggingOut ? 'Signing out…' : 'Log out'}
      </button>
    </div>
  );
}
