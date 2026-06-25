import { useState } from 'react';
import SuccessModal, { SUCCESS_COPY } from '@/components/ui/SuccessModal';
import { CloseIcon, Icon } from '../icons';
import { useSupportHelp } from './useSupportHelp';

/* ── Contact Support Modal (Figma 79:10735) ──────────────────────── */
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

  if (sent) {
    return (
      <SuccessModal
        title={SUCCESS_COPY.messageSent.title}
        message={SUCCESS_COPY.messageSent.message}
        actionLabel={SUCCESS_COPY.messageSent.actionLabel}
        variant="support"
        onClose={onClose}
      />
    );
  }

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="contact-modal">
        <button className="contact-modal__close" onClick={onClose} aria-label="Close"><CloseIcon /></button>

        <div className="contact-modal__card">
          <div className="contact-modal__body">
            <div className="contact-modal__header">
              <span className="contact-modal__header-icon">
                <Icon.HeadsetCard />
              </span>
              <div>
                <p className="contact-modal__header-title">Contact Support</p>
                <p className="contact-modal__header-sub">Speak to the Enigma Net support team</p>
              </div>
            </div>

            <div className="contact-modal__fields">
              <div className="contact-modal__field">
                <p className="contact-modal__field-label">Full name</p>
                <div className="contact-modal__input-wrap">
                  <Icon.User />
                  <input
                    className="contact-modal__input"
                    type="text"
                    defaultValue={defaultName}
                    readOnly={Boolean(defaultName)}
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="contact-modal__field">
                <p className="contact-modal__field-label">Leave a message</p>
                <div className="contact-modal__input-wrap contact-modal__input-wrap--message">
                  <Icon.Mail />
                  <textarea
                    className="contact-modal__input contact-modal__textarea"
                    placeholder="Enter your message..."
                    value={message}
                    rows={1}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {error && <p className="contact-modal__error">{error}</p>}
          </div>

          <div className="contact-modal__footer">
            <button
              type="button"
              className="profile-btn profile-btn--min-w contact-modal__send-btn"
              onClick={handleSend}
              disabled={sending || !message.trim()}
            >
              {sending ? 'Sending…' : 'Send a message'}
            </button>
          </div>
        </div>
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

      <h2 className="profile-section-title"><Icon.HeadsetTitle /> Support &amp; Account Help</h2>
      <div className="support-card">
        <span className="support-card__icon"><Icon.HeadsetCard /></span>
        <div className="support-card__text">
          <p className="support-card__title">Contact Support</p>
          <p className="support-card__desc">Speak to the Enigma Net support team</p>
        </div>
        <div className="support-card__btn-wrap">
          <button type="button" className="profile-btn profile-btn--min-w support-card__btn" onClick={() => setContactOpen(true)}>
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportHelp;
export { ContactSupportModal };
