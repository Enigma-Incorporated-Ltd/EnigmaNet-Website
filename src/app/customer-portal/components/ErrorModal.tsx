import './ErrorModal.css';

interface ErrorModalProps {
  isOpen: boolean;
  message?: string | null;
  onClose: () => void;
}

export default function ErrorModal({ isOpen, message, onClose }: ErrorModalProps) {
  if (!isOpen) return null;

  const displayMsg = message && message.trim() ? message : 'An error occurred. Please Try Again!';

  return (
    <div className="portal-support-modal-overlay" onClick={onClose}>
      <div className="portal-error-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header title & close button */}
        <div className="portal-error-modal__header">
          <h2 className="portal-error-modal__title">Enigma Net</h2>
          <button
            type="button"
            className="portal-error-modal__close"
            onClick={onClose}
            aria-label="Close error modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.396 7.757C16.489 7.84988 16.5627 7.96016 16.6131 8.08156C16.6634 8.20296 16.6893 8.33309 16.6893 8.4645C16.6893 8.59592 16.6634 8.72605 16.6131 8.84744C16.5627 8.96884 16.489 9.07913 16.396 9.172L13.414 12.153L16.09 14.828C16.2776 15.0156 16.3831 15.2701 16.3831 15.5355C16.3831 15.8009 16.2776 16.0554 16.09 16.243C15.9024 16.4306 15.6479 16.5361 15.3825 16.5361C15.1171 16.5361 14.8626 16.4306 14.675 16.243L12 13.567L9.32501 16.243C9.13736 16.4306 8.88287 16.5361 8.61751 16.5361C8.35214 16.5361 8.09765 16.4306 7.91001 16.243C7.72236 16.0554 7.61695 15.8009 7.61695 15.5355C7.61695 15.2701 7.72236 15.0156 7.91001 14.828L10.586 12.153L7.60401 9.172C7.5111 9.07903 7.43741 8.96866 7.38715 8.84721C7.33689 8.72575 7.31105 8.59559 7.3111 8.46415C7.31114 8.33271 7.33708 8.20256 7.38742 8.08114C7.43776 7.95973 7.51153 7.84941 7.60451 7.7565C7.69748 7.66359 7.80785 7.5899 7.9293 7.53965C8.05075 7.48939 8.18092 7.46355 8.31236 7.46359C8.4438 7.46364 8.57395 7.48957 8.69536 7.53992C8.81678 7.59026 8.9271 7.66403 9.02001 7.757L12 10.74L14.981 7.758C15.0739 7.66503 15.1842 7.59127 15.3056 7.54094C15.427 7.49062 15.5571 7.46472 15.6885 7.46472C15.8199 7.46472 15.95 7.49062 16.0714 7.54094C16.1928 7.59127 16.3031 7.66403 16.396 7.757Z" fill="url(#paint0_linear_error_close)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M4 1C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V20C1 20.7956 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H20C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20V4C23 3.20435 22.6839 2.44129 22.1213 1.87868C21.5587 1.31607 20.7956 1 20 1H4ZM20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z" fill="url(#paint1_linear_error_close)"/>
              <defs>
                <linearGradient id="paint0_linear_error_close" x1="7.31271" y1="11.9956" x2="16.6881" y2="11.9956" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2ADEFF"/>
                  <stop offset="1" stopColor="#002398"/>
                </linearGradient>
                <linearGradient id="paint1_linear_error_close" x1="1.00379" y1="11.9897" x2="22.9972" y2="11.9897" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2ADEFF"/>
                  <stop offset="1" stopColor="#002398"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>

        {/* Subtitle / Body text */}
        <p className="portal-error-modal__subtitle">
          {displayMsg}
        </p>

        {/* Ok Button */}
        <button
          type="button"
          className="portal-error-modal__btn"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
