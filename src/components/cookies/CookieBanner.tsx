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
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };
  const fullText = `We use cookies to help you navigate efficiently and perform certain functions. You will
find detailed information about all cookies under each consent category below. The
cookies that are categorized as "Necessary" are stored on your browser as they are
essential for enabling the basic functionalities of the site. We also use third-party
cookies that help us analyze how you use this website, store your preferences, and
provide the content and advertisements that are relevant to you. These cookies will only
be stored in your browser with your prior consent. You can choose to enable or disable
some or all of these cookies but disabling some of them may affect your browsing
experience.`;

  const words = fullText.split(' ');
  const shortText = words.slice(0, 20).join(' ') + '...';
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
            <h4>We value your privacy</h4>
          </div>

          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content,
            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="cookie-popup__header">
            <h4>Customize Consent Preferences</h4>
          </div>
          <p>
            {showMore ? fullText : shortText}{' '}
            <span
              className="show-more"
              onClick={() => setShowMore(prev => !prev)}
              style={{ color: '#007bff', cursor: 'pointer', fontWeight: 500 }}
            >
              {showMore ? 'Show less' : 'Show more'}
            </span>
          </p>
          <div className="cookie-sections">
            {/* Necessary */}
            <div className="cookie-section">
              <div className="cookie-section-header" onClick={() => toggleSection('necessary')}>
                <span>Necessary</span>
                <span>{openSection === 'necessary' ? '▲' : '▼'}</span>
              </div>

              {openSection === 'necessary' && (
                <div className="cookie-section-body">
                  <p>
                    Necessary cookies are required to enable the basic features of this site, such
                    as providing secure log-in or adjusting your consent preferences. These cookies
                    do not store any personally identifiable data.
                  </p>
                  <div className="cookie-detail-box">
                    <div>No cookies to display</div>
                  </div>
                  <div className="cookie-always">Always Active</div>
                </div>
              )}
            </div>
            {/* Functional */}
            <div className="cookie-section">
              <div className="cookie-section-header" onClick={() => toggleSection('functional')}>
                <span>Functional</span>
                <span>{openSection === 'functional' ? '▲' : '▼'}</span>
              </div>

              {openSection === 'functional' && (
                <div className="cookie-section-body">
                  <p>
                    Functional cookies help perform certain functionalities like sharing the content
                    of the website on social media platforms, collecting feedback, and other
                    third-party features.
                  </p>

                  <div className="cookie-detail-box">
                    <div>No cookies to display</div>
                  </div>
                </div>
              )}
            </div>
            {/* Analytics */}
            <div className="cookie-section">
              <div className="cookie-section-header" onClick={() => toggleSection('analytics')}>
                <span>Analytics</span>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={e => setConsent({ ...consent, analytics: e.target.checked })}
                  onClick={e => e.stopPropagation()}
                />
              </div>

              {openSection === 'analytics' && (
                <div className="cookie-section-body">
                  <p>
                    Analytical cookies are used to understand how visitors interact with the
                    website. These cookies help provide information on metrics such as the number of
                    visitors, bounce rate, traffic source, etc.
                  </p>

                  <div className="cookie-detail-box">
                    <div>
                      <strong>Cookie:</strong> Analytics
                    </div>
                    <div>
                      <strong>Duration:</strong> 365 days
                    </div>
                    <div>
                      <strong>Description:</strong> Non-necessary cookies
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="cookie-section">
              <div className="cookie-section-header" onClick={() => toggleSection('performance')}>
                <span>Performance</span>
                <span>{openSection === 'performance' ? '▲' : '▼'}</span>
              </div>

              {openSection === 'performance' && (
                <div className="cookie-section-body">
                  <p>
                    Performance cookies are used to understand and analyze the key performance
                    indexes of the website which helps in delivering a better user experience for
                    the visitors.
                  </p>

                  <div className="cookie-detail-box">
                    <div>No cookies to display</div>
                  </div>
                </div>
              )}
            </div>
            <div className="cookie-section">
              <div className="cookie-section-header" onClick={() => toggleSection('advertisement')}>
                <span>Advertisement</span>
                <span>{openSection === 'advertisement' ? '▲' : '▼'}</span>
              </div>

              {openSection === 'advertisement' && (
                <div className="cookie-section-body">
                  <p>
                    Advertisement cookies are used to provide visitors with customized
                    advertisements based on the pages you visited previously and to analyze the
                    effectiveness of the ad campaigns.
                  </p>

                  <div className="cookie-detail-box">
                    <div>No cookies to display</div>
                  </div>
                </div>
              )}
            </div>
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
