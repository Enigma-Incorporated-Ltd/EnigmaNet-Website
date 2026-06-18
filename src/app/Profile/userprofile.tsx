import enigmaLogo from '@/assets/img/EnigmaNet-logo.png';
import { useRef, useState } from 'react';
import { Link } from 'react-router';
import './userprofile.css';

/* ── Icon helpers (inline SVG, no extra dep) ─────────────────────── */
const Icon = {
  User: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Mail: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Monitor: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
  ),
  Hash: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>
  ),
  Building: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h6M3 15h6M15 9h6M15 15h6"/></svg>
  ),
  Edit: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
  ),
  Calendar: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ),
  Refresh: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
  ),
  Devices: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  Bell: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  ),
  Package: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
  ),
  Receipt: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
  ),
  Sun: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
  ),
  CreditCard: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
  ),
  AlertCircle: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
  ),
  Headset: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
  ),
  Settings: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  ),
  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
  ),
  Server: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
  ),
};

/* ── Toggle Switch ───────────────────────────────────────────────── */
const Toggle = ({ id, defaultChecked = true }: { id: string; defaultChecked?: boolean }) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <label className="toggle-switch" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(c => !c)}
      />
      <span className="toggle-switch__track" />
    </label>
  );
};

/* ── All Invoices Modal ──────────────────────────────────────────── */
const allInvoices = [
  { date: '12 Jun 2026', amount: '£499.00' },
  { date: '12 Jun 2025', amount: '£499.00' },
  { date: '12 Jun 2024', amount: '£499.00' },
  { date: '12 Jun 2023', amount: '£499.00' },
  { date: '12 Jun 2022', amount: '£499.00' },
  { date: '12 Jun 2021', amount: '£499.00' },
];

const InvoicesModal = ({ onClose, onContactSupport }: { onClose: () => void; onContactSupport: () => void }) => (
  <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="invoices-modal">
      {/* Close */}
      <button className="contact-modal__close" onClick={onClose} aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Header */}
      <div className="invoices-modal__header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
        <h2 className="invoices-modal__title">Payments &amp; Billing Invoices</h2>
      </div>

      {/* Invoice list */}
      <div className="invoices-modal__list">
        {allInvoices.map((inv) => (
          <div key={inv.date} className="invoices-modal__row">
            <span className="invoices-modal__date">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {inv.date}
            </span>
            <span className="invoices-modal__right">
              <span className="invoices-modal__amount">{inv.amount}</span>
              <span className="invoices-modal__paid-badge">Paid</span>
            </span>
          </div>
        ))}
      </div>

      {/* Contact for support */}
      <button
        className="invoices-modal__support-link"
        onClick={() => { onClose(); onContactSupport(); }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
          <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
        </svg>
        Contact for a support
      </button>

      {/* Footnote */}
      <p className="invoices-modal__footnote">
        Payment method and subscription changes must be confirmed by engineering/finance.
      </p>
    </div>
  </div>
);

/* ── Contact Support Modal ───────────────────────────────────────── */
const ContactSupportModal = ({ onClose }: { onClose: () => void }) => {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`contact-modal${sent ? ' contact-modal--success' : ''}`}>
        {/* Close button */}
        <button className="contact-modal__close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {sent ? (
          /* ── Success Screen ── */
          <>
            <div className="contact-modal__success-icon-wrap">
              <div className="contact-modal__success-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
            <h3 className="contact-modal__success-title">Message Sent!</h3>
            <p className="contact-modal__success-desc">
              Your message has been sent to the Enigma Net support team. We'll get back to you shortly.
            </p>
            <button className="contact-modal__done-btn" onClick={onClose}>Done</button>
          </>
        ) : (
          /* ── Contact Form ── */
          <>
            <div className="contact-modal__header">
              <span className="contact-modal__header-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
                  <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                </svg>
              </span>
              <div>
                <p className="contact-modal__header-title">Contact Support</p>
                <p className="contact-modal__header-sub">Speak to the Enigma Net support team</p>
              </div>
            </div>

            {/* Full Name */}
            <div className="contact-modal__field">
              <p className="contact-modal__field-label">Full Name</p>
              <div className="contact-modal__input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <input className="contact-modal__input" type="text" defaultValue="Sarah Johnson" />
              </div>
            </div>

            {/* Message */}
            <div className="contact-modal__field">
              <p className="contact-modal__field-label">Leave a Message</p>
              <div className="contact-modal__input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <input
                  className="contact-modal__input"
                  type="text"
                  placeholder="Enter your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <button className="contact-modal__send-btn" onClick={() => setSent(true)}>
              Send a message
            </button>
          </>
        )}
      </div>
    </div>
  );
};

/* ── Edit Profile Modal ──────────────────────────────────────────── */
const EditProfileModal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState('Sarah Johnson');
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) return; // max 5MB
    const reader = new FileReader();
    reader.onload = (ev) => setAvatarSrc(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = () => setSaved(true);

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="manage-modal" style={{ maxWidth: '480px' }}>
        {/* Header */}
        <div className="manage-modal__header">
          {!saved && (
            <h2 className="manage-modal__title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#187bc9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Edit Profile
            </h2>
          )}
          {saved && <span />}
          <button className="manage-modal__close" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {saved ? (
          /* ── Success Screen ── */
          <div className="success-screen">
            <div className="success-screen__icon-wrap">
              <div className="success-screen__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
            <h3 className="success-screen__title">Changes saved!</h3>
            <p className="success-screen__desc">Your profile has been updated successfully.</p>
          </div>
        ) : (
          /* ── Edit Form ── */
          <>
            <p className="edit-modal__subtitle">Update your display name and profile picture.</p>

            {/* Avatar upload */}
            <div className="edit-modal__avatar-section">
              <div
                className="edit-modal__avatar"
                onClick={() => fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
                aria-label="Upload profile picture"
                onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
              >
                {avatarSrc
                  ? <img src={avatarSrc} alt="Profile" />
                  : 'SJ'
                }
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/gif"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <label
                className="edit-modal__upload-label"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload picture
              </label>
              <p className="edit-modal__upload-hint">JPG, PNG or GIF · max 5 MB</p>
            </div>

            {/* Full Name field */}
            <p className="edit-modal__field-label">Full Name</p>
            <div className="edit-modal__input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                className="edit-modal__input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            {/* Footer */}
            <div className="manage-modal__footer">
              <button className="btn-cancel" onClick={onClose}>Cancel</button>
              <button className="btn-save" onClick={handleSave}>Save changes</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/* ── Manage Plan Modal ───────────────────────────────────────────── */
const plans = [
  { id: 'lite', name: 'EDGE Lite', desc: 'Entry-level connectivity for basic tools' },
  { id: 'max', name: 'EDGE Max', desc: 'Maximum capacity for high-density workloads' },
  { id: 'pro', name: 'EDGE Pro', desc: 'Advanced performance for small teams' },
];

const devices = [
  { id: 1, name: 'Workstation Desktop - PDX' },
  { id: 2, name: 'Mobile Gateway 04' },
];

const MonitorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
);

const ManagePlanModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [saved, setSaved] = useState(false);

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="manage-modal" style={saved ? { maxWidth: '448px', height: '419px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' } : {}}>

        {saved ? (
          /* ── Success Screen ── */
          <>
            <div style={{ alignSelf: 'flex-end' }}>
              <button className="manage-modal__close" onClick={onClose} aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="success-screen" style={{ flex: 1, width: '100%' }}>
              <div className="success-screen__icon-wrap">
                <div className="success-screen__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
              </div>
              <h3 className="success-screen__title">Changes saved!</h3>
              <p className="success-screen__desc">Your profile has been updated successfully.</p>
            </div>
          </>
        ) : (
          /* ── Plan Form ── */
          <>
            {/* Header */}
            <div className="manage-modal__header">
              <h2 className="manage-modal__title">Manage Plan &amp; Services</h2>
              <button className="manage-modal__close" onClick={onClose} aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Product Status + Renewal Date */}
            <div className="manage-modal__info-row">
              <div className="manage-modal__info-field">
                <label>Product Status</label>
                <div className="manage-modal__info-value">
                  <span className="status-dot-blue" />
                  Active
                </div>
              </div>
              <div className="manage-modal__info-field">
                <label>Renewal Date</label>
                <div className="manage-modal__info-value">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  June 30, 2026
                </div>
              </div>
            </div>

            {/* Current Plan */}
            <p className="manage-modal__section-label">Current Plan</p>
            <div className="manage-modal__plans">
              {plans.map(plan => (
                <label
                  key={plan.id}
                  className={`plan-option${selectedPlan === plan.id ? ' plan-option--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                  />
                  <span className="plan-option__radio" />
                  <span className="plan-option__text">
                    <span className="plan-option__name">{plan.name}</span>
                    <span className="plan-option__desc">{plan.desc}</span>
                  </span>
                </label>
              ))}
            </div>

            {/* Connected Devices */}
            <div className="manage-modal__devices-header">
              <p className="manage-modal__devices-title">Connected Devices</p>
              <p className="manage-modal__devices-sub">Manage devices on your current plan</p>
            </div>
            <div className="manage-modal__devices">
              {devices.map(device => (
                <div key={device.id} className="device-row">
                  <span className="device-row__left">
                    <MonitorIcon />
                    {device.name}
                  </span>
                  <span className="device-row__status">
                    <span className="device-status-dot" />
                    Connected
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="manage-modal__footer">
              <button className="btn-cancel" onClick={onClose}>Cancel</button>
              <button className="btn-save" onClick={() => setSaved(true)}>Save changes</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────────────── */
const UserProfile = () => {
  const [manageModalOpen, setManageModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [allInvoicesOpen, setAllInvoicesOpen] = useState(false);

  return (
    <div className="profile-page">
      {manageModalOpen && <ManagePlanModal onClose={() => setManageModalOpen(false)} />}
      {editModalOpen && <EditProfileModal onClose={() => setEditModalOpen(false)} />}
      {contactModalOpen && <ContactSupportModal onClose={() => setContactModalOpen(false)} />}
      {allInvoicesOpen && <InvoicesModal onClose={() => setAllInvoicesOpen(false)} onContactSupport={() => setContactModalOpen(true)} />}
      <div className="profile-page__inner">

        {/* ── Page Header ────────────────────────────────────────── */}
        <div className="profile-header">
          <div className="profile-header__text">
            <h1 className="profile-header__title">My Account</h1>
            <p className="profile-header__subtitle">
              Manage your profile, subscription, and account preferences
            </p>
          </div>
          <Link to="/" className="profile-header__logo">
            <img src={enigmaLogo} alt="enigmanet" />
          </Link>
        </div>

        {/* ── Customer Profile ───────────────────────────────────── */}
        <div className="customer-profile-section">
          <div className="customer-profile-section__header">
            <h2 className="profile-section-title">
              <Icon.User />
              Customer Profile
            </h2>
            <button className="edit-profile-btn" onClick={() => setEditModalOpen(true)}>
              <Icon.Edit />
              Edit profile
            </button>
          </div>

          <div className="profile-card profile-card--customer">
            <div className="profile-avatar">SJ</div>
            <div className="profile-fields">
              {/* Full Name */}
              <div>
                <p className="profile-field__label">Full Name</p>
                <p className="profile-field__value">
                  <Icon.User />
                  Sarah Johnson
                </p>
              </div>
              {/* Email */}
              <div>
                <p className="profile-field__label">Email Address</p>
                <p className="profile-field__value">
                  <Icon.Mail />
                  s.johnson@acmecorp.com
                </p>
              </div>
              {/* Current Plan */}
              <div>
                <p className="profile-field__label">Current Plan</p>
                <p className="profile-field__value">
                  <Icon.Monitor />
                  EDGE Pro
                </p>
              </div>
              {/* Account Status */}
              <div>
                <p className="profile-field__label">Account Status</p>
                <p className="profile-field__value">
                  <span className="status-badge status-badge--active">Active</span>
                </p>
              </div>
              {/* User ID — left col only, right col empty */}
              <div>
                <p className="profile-field__label">User ID</p>
                <p className="profile-field__value">
                  <Icon.Hash />
                  USR-004821
                </p>
              </div>
              <div /> {/* empty right cell */}
              {/* Company — left col only */}
              <div>
                <p className="profile-field__label">User Company Information</p>
                <p className="profile-field__value">
                  <Icon.Building />
                  Company name
                </p>
              </div>
              <div /> {/* empty right cell */}
            </div>
          </div>
        </div>

        {/* ── Product & Active Services ───────────────────────────── */}
        <div className="services-section">
          <h2 className="profile-section-title">
            <Icon.Server />
            Product &amp; Active Services
          </h2>

          <div className="service-card">
            <div className="service-card__top">
              <div className="service-card__name-row">
                <span className="service-card__name">Enigma EDGE</span>
                <span className="plan-badge">Pro</span>
              </div>
              <button className="manage-btn" onClick={() => setManageModalOpen(true)}>Manage Profile</button>
            </div>

            <div className="service-card__status">
              <span className="service-card__status-dot" />
              Active subscription
            </div>

            <hr className="service-card__divider" />

            <div className="service-card__stats">
              <div>
                <p className="service-stat__label"><Icon.Calendar /> Start Date</p>
                <p className="service-stat__value">12 Jul 2025</p>
              </div>
              <div>
                <p className="service-stat__label"><Icon.Refresh /> Renewal Date</p>
                <p className="service-stat__value service-stat__value--warn">12 Jul 2026</p>
              </div>
              <div>
                <p className="service-stat__label"><Icon.Devices /> Devices / Licences</p>
                <p className="service-stat__value">4 of 5 used</p>
              </div>
              <div>
                <p className="service-stat__label"><Icon.Check /> Product Status</p>
                <p className="service-stat__value">All systems active</p>
              </div>
            </div>
          </div>

          <p className="services-footnote">
            Licence allocation and device counts are display-only. Contact support to adjust allowances.
          </p>
        </div>

        {/* ── Bottom two-column grid ──────────────────────────────── */}
        <div className="profile-bottom-grid">

          {/* Left column: Account Settings + Support */}
          <div className="profile-left-col">

            {/* Account Settings */}
            <div className="settings-section">
              <h2 className="profile-section-title">
                <Icon.Settings />
                Account Settings
              </h2>
              <div className="profile-card">
                <div className="toggle-row">
                  <div className="toggle-row__info">
                    <span className="toggle-row__icon"><Icon.Bell /></span>
                    <div>
                      <p className="toggle-row__label">Email notifications</p>
                      <p className="toggle-row__desc">Receive updates and alerts by email</p>
                    </div>
                  </div>
                  <Toggle id="toggle-email" defaultChecked={true} />
                </div>

                <div className="toggle-row">
                  <div className="toggle-row__info">
                    <span className="toggle-row__icon"><Icon.Package /></span>
                    <div>
                      <p className="toggle-row__label">Product updates</p>
                      <p className="toggle-row__desc">News about Enigma EDGE releases</p>
                    </div>
                  </div>
                  <Toggle id="toggle-product" defaultChecked={true} />
                </div>

                <div className="toggle-row">
                  <div className="toggle-row__info">
                    <span className="toggle-row__icon"><Icon.Receipt /></span>
                    <div>
                      <p className="toggle-row__label">Billing notifications</p>
                      <p className="toggle-row__desc">Invoices and payment confirmations</p>
                    </div>
                  </div>
                  <Toggle id="toggle-billing" defaultChecked={false} />
                </div>

                <div className="toggle-row">
                  <div className="toggle-row__info">
                    <span className="toggle-row__icon"><Icon.Sun /></span>
                    <div>
                      <p className="toggle-row__label">Theme</p>
                      <p className="toggle-row__desc">Light mode</p>
                    </div>
                  </div>
                  <Toggle id="toggle-theme" defaultChecked={true} />
                </div>
              </div>
            </div>

            {/* Support & Account Help */}
            <div className="support-section">
              <h2 className="profile-section-title">
                <Icon.Headset />
                Support &amp; Account Help
              </h2>
              <div className="support-card">
                <span className="support-card__icon"><Icon.Headset /></span>
                <p className="support-card__title">Contact Support</p>
                <p className="support-card__desc">Speak to the Enigma Net support team</p>
                <button className="support-card__btn" onClick={() => setContactModalOpen(true)}>Get in touch</button>
              </div>
            </div>

          </div>

          {/* Right column: Payments & Billing */}
          <div className="billing-section">
            <h2 className="profile-section-title">
              <Icon.CreditCard />
              Payments &amp; Billing
            </h2>

            <div className="billing-card">
              <p className="billing-invoices-label">Recent Invoices</p>

              {[
                { date: '12 Jun 2026', amount: '£499.00' },
                { date: '12 May 2026', amount: '£499.00' },
                { date: '12 Apr 2026', amount: '£499.00' },
              ].map(inv => (
                <div key={inv.date} className="invoice-row">
                  <span className="invoice-row__date">
                    <Icon.Calendar />
                    {inv.date}
                  </span>
                  <span className="invoice-row__right">
                    <span className="invoice-row__amount">{inv.amount}</span>
                    <span className="paid-badge">Paid</span>
                  </span>
                </div>
              ))}

              <div className="billing-alert">
                <span className="billing-alert__icon"><Icon.AlertCircle /></span>
                <div>
                  <p className="billing-alert__title">Payment up to date</p>
                  <p className="billing-alert__sub">No outstanding balance</p>
                </div>
              </div>

              <div className="billing-meta">
                <div className="billing-meta-row">
                  <span className="billing-meta-row__label">Current plan</span>
                  <span className="billing-meta-row__value">Enigma EDGE — Pro</span>
                </div>
                <div className="billing-meta-row">
                  <span className="billing-meta-row__label">Next billing date</span>
                  <span className="billing-meta-row__value">12 July 2026</span>
                </div>
                <div className="billing-meta-row">
                  <span className="billing-meta-row__label">Payment method</span>
                  <span className="billing-meta-row__value">Visa ending 2048</span>
                </div>
                <div className="billing-meta-row">
                  <span className="billing-meta-row__label">Billing contact</span>
                  <span className="billing-meta-row__value billing-meta-row__value--link">
                    billing@acmecorp.com
                  </span>
                </div>
              </div>

              <button
                className="view-invoices-btn"
                onClick={() => setAllInvoicesOpen(true)}
              >
                <span>View all invoices</span>
                <span style={{ display: 'inline-flex' }}>
                  <Icon.ChevronDown />
                </span>
              </button>

              <p className="billing-footnote">
                Payment method and subscription changes must be confirmed by engineering/finance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;
