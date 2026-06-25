import closeIcon from '@/assets/img/profile/icons/close.svg';
import manageCloseIcon from '@/assets/img/profile/icons/manage-close.svg';
import successCheckIcon from '@/assets/img/profile/icons/success-check.svg';
import './SuccessModal.css';

export const SUCCESS_COPY = {
  profileSaved: {
    title: 'Changes saved!',
    message: 'Your profile has been updated successfully.',
  },
  settingsSaved: {
    title: 'Changes saved!',
    message: 'Your account settings have been updated successfully.',
  },
  planSaved: {
    title: 'Changes saved!',
    message: 'Your plan and services have been updated successfully.',
  },
  messageSent: {
    title: 'Message Sent!',
    message: "Your message has been sent to the Enigma Net support team. We'll get back to you shortly.",
    actionLabel: 'Done',
  },
} as const;

export type SuccessModalProps = {
  title: string;
  message: string;
  onClose: () => void;
  /** Use gradient bordered close icon (manage-plan style) */
  closeVariant?: 'default' | 'manage';
  /** Figma 79:10191 default · Figma 79:10202 support dialog with Done button */
  variant?: 'default' | 'support';
  /** Optional primary action label (e.g. Done) — defaults to onClose */
  actionLabel?: string;
  onAction?: () => void;
};

/** Figma 79:10191 / 79:10202 — global success dialog */
const SuccessModal = ({
  title,
  message,
  onClose,
  closeVariant = 'default',
  variant = 'default',
  actionLabel,
  onAction,
}: SuccessModalProps) => {
  const isSupport = variant === 'support';
  const resolvedCloseVariant = isSupport ? 'manage' : closeVariant;

  return (
    <div
      className="success-modal-overlay"
      role="presentation"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className={`success-modal${isSupport ? ' success-modal--support' : ''}`}
        role="dialog"
        aria-labelledby="success-modal-title"
        aria-modal="true"
      >
        <button
          type="button"
          className="success-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <img src={resolvedCloseVariant === 'manage' ? manageCloseIcon : closeIcon} alt="" draggable={false} />
        </button>

        <div className="success-modal__content">
          <div className="success-modal__icon-wrap">
            <div className="success-modal__icon">
              <img src={successCheckIcon} alt="" draggable={false} />
            </div>
          </div>
          <div className="success-modal__text">
            <h2 id="success-modal-title" className="success-modal__title">{title}</h2>
            <p className="success-modal__message">{message}</p>
          </div>
          {actionLabel && (
            <div className="success-modal__footer">
              <button
                type="button"
                className="profile-btn success-modal__action"
                onClick={onAction ?? onClose}
              >
                {actionLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
