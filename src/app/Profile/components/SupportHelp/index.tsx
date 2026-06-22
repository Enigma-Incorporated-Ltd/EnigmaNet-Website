import { useState } from 'react';
import { CloseIcon, Icon } from '../icons';
import { useSupportHelp } from './useSupportHelp';

/* ── Contact Support Modal ───────────────────────────────────────── */
const ContactSupportModal = ({
  defaultName,
  onClose,
}: {
  defaultName?: string;
  onClose: () => void;
}) => {
  const { sendMessage, sending, error } = useSupportHelp();
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    try {
      await sendMessage(defaultName ?? '', message);
      setSent(true);
    } catch {
      // error shown via hook
    }
  };

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`contact-modal${sent ? ' contact-modal--success' : ''}`}>
        <button className="contact-modal__close" onClick={onClose} aria-label="Close"><CloseIcon /></button>

        {sent ? (
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

            <div className="contact-modal__field">
              <p className="contact-modal__field-label">Full Name</p>
              <div className="contact-modal__input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <input className="contact-modal__input" type="text" defaultValue={defaultName} />
              </div>
            </div>

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
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
            </div>

            {error && <p style={{ color: '#ef4444', fontSize: 13, margin: '0 0 8px' }}>{error}</p>}

            <button className="contact-modal__send-btn" onClick={handleSend} disabled={sending}>
              {sending ? 'Sending…' : 'Send a message'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

/* ── Support & Account Help Section ─────────────────────────────── */
const SupportHelp = ({ defaultName }: { defaultName?: string }) => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="support-section">
      {contactOpen && (
        <ContactSupportModal
          defaultName={defaultName}
          onClose={() => setContactOpen(false)}
        />
      )}

      <h2 className="profile-section-title"><Icon.Headset /> Support &amp; Account Help</h2>
      <div className="support-card">
        <span className="support-card__icon"><Icon.Headset /></span>
        <p className="support-card__title">Contact Support</p>
        <p className="support-card__desc">Speak to the Enigma Net support team</p>
        <button className="support-card__btn" onClick={() => setContactOpen(true)}>Get in touch</button>
      </div>
    </div>
  );
};

export default SupportHelp;
export { ContactSupportModal };
