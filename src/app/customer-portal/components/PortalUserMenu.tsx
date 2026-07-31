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
        <span className="portal-user-menu__name">{displayName}</span>
        <span className="portal-user-menu__email">{session.email}</span>
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
                <span className="portal-spinner" style={{ marginRight: '8px' }} />
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
        {loggingOut ? 'Signing out…' : (
          <>
            Logout
            <svg className="portal-logout-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.27604 11.6667C3.00732 11.6667 2.78312 11.5768 2.60346 11.3972C2.42379 11.2175 2.33376 10.9931 2.33337 10.724V3.27601C2.33337 3.00729 2.4234 2.78309 2.60346 2.60343C2.78351 2.42376 3.00771 2.33373 3.27604 2.33334H7.01112V2.91668H3.27604C3.18621 2.91668 3.10376 2.95401 3.02871 3.02868C2.95365 3.10334 2.91632 3.18579 2.91671 3.27601V10.7246C2.91671 10.814 2.95404 10.8963 3.02871 10.9713C3.10337 11.0464 3.18562 11.0837 3.27546 11.0833H7.01112V11.6667H3.27604ZM9.60287 9.06443L9.19337 8.64443L10.5461 7.29168H5.36204V6.70834H10.5461L9.19279 5.35501L9.60229 4.93618L11.6667 7.00001L9.60287 9.06443Z" fill="white"/>
            </svg>
          </>
        )}
      </button>
    </div>
  );
}
