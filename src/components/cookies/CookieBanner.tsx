import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './cookie.css';

function CookieIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" fill="#e5ae51" />
      <circle cx="24" cy="24" r="18" fill="#efc06a" />
      <path
        d="M18 16 Q22 20 18 26"
        stroke="#c8923a"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 20 Q27 25 31 30"
        stroke="#c8923a"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="20" cy="19" rx="2.8" ry="2.2" fill="#0d1b29" />
      <ellipse cx="30" cy="22" rx="2.4" ry="2" fill="#0d1b29" />
      <ellipse cx="22" cy="31" rx="2.6" ry="2" fill="#0d1b29" />
      <ellipse cx="32" cy="32" rx="2.2" ry="1.8" fill="#0d1b29" />
      <ellipse cx="16" cy="28" rx="1.8" ry="1.5" fill="#0d1b29" />
      <ellipse
        cx="18"
        cy="14"
        rx="4"
        ry="2.5"
        fill="rgba(255,255,255,0.22)"
        transform="rotate(-20 18 14)"
      />
    </svg>
  );
}

type ConsentType = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [cookies, setCookie] = useCookies(['cookie-consent']);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const [consent, setConsent] = useState<ConsentType>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (!cookies['cookie-consent']) {
      setVisible(true);
      setTimeout(() => setOpen(true), 50);
    }
  }, [cookies]);

  const saveConsent = (data: ConsentType) => {
    setCookie('cookie-consent', JSON.stringify(data), {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
    setOpen(false);
    setTimeout(() => setVisible(false), 300);

    if (data.analytics) console.log('Enable Analytics');
    if (data.marketing) console.log('Enable Marketing');
  };

  const acceptAll = () => {
    const all = { necessary: true, analytics: true, marketing: true };
    setConsent(all);
    saveConsent(all);
  };

  const rejectAll = () => {
    const minimal = { necessary: true, analytics: false, marketing: false };
    setConsent(minimal);
    saveConsent(minimal);
  };

  if (!visible) return null;

  return (
    <div className="cookie-root">
      {open && (
        <div className="cookie-popup" role="dialog" aria-label="Cookie preferences">
          <div className="cookie-popup__header">
            <CookieIcon size={26} />
            <h4>Cookie Preferences</h4>
          </div>

          <p>
            We use cookies to improve your experience. Manage your preferences below or accept all
            to continue.
          </p>

          <div className="cookie-options">
            {/* <label>
              <span>Necessary</span>
              <input
                type="checkbox"
                checked
                disabled
                aria-label="Necessary cookies, always active"
              />
            </label> */}
            <label>
              <span>Analytics</span>
              <input
                type="checkbox"
                checked={consent.analytics}
                aria-label="Analytics cookies"
                onChange={e => setConsent({ ...consent, analytics: e.target.checked })}
              />
            </label>
            <label>
              <span>Marketing</span>
              <input
                type="checkbox"
                checked={consent.marketing}
                aria-label="Marketing cookies"
                onChange={e => setConsent({ ...consent, marketing: e.target.checked })}
              />
            </label>
          </div>

          <div className="cookie-actions">
            <button onClick={rejectAll}>Reject All</button>
            <button onClick={() => saveConsent(consent)}>Save</button>
            <button onClick={acceptAll}>Accept All</button>
          </div>
        </div>
      )}

      <button
        className="cookie-fab"
        onClick={() => setOpen(p => !p)}
        aria-expanded={open}
        aria-label="Cookie settings"
        title="Cookie settings"
      >
        <CookieIcon size={26} />
      </button>
    </div>
  );
}
