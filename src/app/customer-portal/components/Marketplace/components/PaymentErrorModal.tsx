import './PaymentErrorModal.css';

export interface PaymentErrorModalProps {
  /** Controls modal visibility */
  isOpen?: boolean;
  /** Custom error explanation text */
  errorMessage?: string;
  /** Callback fired when user clicks "Return to payment details" */
  onReturnToPayment: () => void;
  /** Callback fired when user clicks "Cancel Checkout" */
  onCancelCheckout: () => void;
}

/**
 * 24x24 Small Warning Icon
 */
function SmallWarningIcon() {
  return (
    <div className="payment-error-icon-small" data-node-id="1157:8015">
      <span>!</span>
    </div>
  );
}

/**
 * 64x64 Large Warning Icon (Figma Node 1157:8017)
 */
function LargeWarningIcon() {
  return (
    <div className="payment-error-icon-large" data-node-id="1157:8017">
      <span>!</span>
    </div>
  );
}

/**
 * Payment Error Modal Component
 * Matching Figma Node: 1252:21204 (Marketplace / Modal / Place Order / Payment Error)
 */
export default function PaymentErrorModal({
  isOpen = true,
  errorMessage = 'Please review your payment details or choose another payment method, then try again.',
  onReturnToPayment,
  onCancelCheckout
}: PaymentErrorModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="payment-error-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-error-title"
    >
      <div
        className="payment-error-card"
        data-node-id="1252:21204"
        data-name="Marketplace / Modal / Place Order / Payment Error"
      >
        {/* Warning Icon Container (Node 1252:21205) */}
        <div className="payment-error-icon-container" data-node-id="1252:21205">
          <LargeWarningIcon />
        </div>

        {/* Header Text Block (Node 1252:21207) */}
        <div className="payment-error-header" data-node-id="1252:21207">
          <h1 id="payment-error-title" className="payment-error-title" data-node-id="1252:21208">
            We couldn’t process your payment
          </h1>
          <p className="payment-error-subtitle" data-node-id="1252:21209">
            Your order hasn’t been placed and you haven’t been charged.
          </p>
        </div>

        {/* Divider Line (Node 1252:21210) */}
        <div className="payment-error-divider" data-node-id="1252:21210" />

        {/* Warning Banner Block (Node 1158:8036) */}
        <div className="payment-error-banner" data-node-id="1158:8036">
          <SmallWarningIcon />
          <p className="payment-error-banner-text" data-node-id="1158:8035">
            {errorMessage}
          </p>
        </div>

        {/* Product Config Saved Note (Node 1252:21212) */}
        <p className="payment-error-saved-note" data-node-id="1252:21212">
          Your product configuration has been saved.
        </p>

        {/* Action Buttons Group (Node 1252:21213) */}
        <div className="payment-error-actions" data-node-id="1252:21213">
          <button
            type="button"
            className="payment-error-btn-primary"
            onClick={onReturnToPayment}
            data-node-id="493:2737"
          >
            Return to payment details
          </button>
          <button
            type="button"
            className="payment-error-btn-secondary"
            onClick={onCancelCheckout}
            data-node-id="1252:21215"
          >
            Cancel Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
