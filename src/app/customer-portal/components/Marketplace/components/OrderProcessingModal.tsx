import { useEffect } from 'react';
import './OrderProcessingModal.css';

export interface OrderProcessingModalProps {
  /** Controls modal visibility */
  isOpen: boolean;
  /** Payment method label displayed at the bottom (e.g. "Visa ending in 4242") */
  paymentMethodLabel?: string;
  /** Callback fired once processing finishes */
  onComplete?: () => void;
  /** Processing duration in milliseconds (default: 3000ms) */
  durationMs?: number;
}

/**
 * 72x72 Animated Circular Gradient Spinner (Figma Node 1252:21189)
 */
function LoadingCircle() {
  return (
    <div className="order-processing-spinner-wrapper" data-node-id="1252:21189">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="order-processing-spinner-svg"
      >
        <circle
          cx="36"
          cy="36"
          r="30"
          stroke="url(#spinner-gradient-cyan)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="spinner-gradient-cyan" x1="36" y1="6" x2="36" y2="66" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2ADEFF" />
            <stop offset="0.6" stopColor="#187BC9" stopOpacity="0.5" />
            <stop offset="1" stopColor="#187BC9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * 20x20 Alert Triangle Icon (Figma Node 1252:21194)
 */
function AlertTriangleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="order-processing-alert-icon"
    >
      <path
        d="M10 2.5L18.3333 17.5H1.66667L10 2.5Z"
        stroke="#2ADEFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.5V11.6667"
        stroke="#2ADEFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="10" cy="14.5" r="0.9" fill="#2ADEFF" />
    </svg>
  );
}

/**
 * 16x16 Spoke Loader Icon (Figma Node 1252:21200)
 */
function SpokeLoaderIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="order-processing-spoke-loader"
    >
      <line x1="8" y1="1.5" x2="8" y2="4" stroke="#2ADEFF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="8" y1="12" x2="8" y2="14.5" stroke="#2ADEFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.3" />
      <line x1="1.5" y1="8" x2="4" y2="8" stroke="#2ADEFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <line x1="12" y1="8" x2="14.5" y2="8" stroke="#2ADEFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
      <line x1="3.4" y1="3.4" x2="5.17" y2="5.17" stroke="#2ADEFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <line x1="10.83" y1="10.83" x2="12.6" y2="12.6" stroke="#2ADEFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
      <line x1="3.4" y1="12.6" x2="5.17" y2="10.83" stroke="#2ADEFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <line x1="10.83" y1="5.17" x2="12.6" y2="3.4" stroke="#2ADEFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

/**
 * Order Processing Modal Component
 * Matching Figma Node: 1252:21187 (Marketplace / Modal / Place Order / Processing)
 */
export default function OrderProcessingModal({
  isOpen,
  paymentMethodLabel = 'Visa ending in 4242',
  onComplete,
  durationMs = 2800
}: OrderProcessingModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    // Automatic progress timer
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, durationMs);

    return () => clearTimeout(timer);
  }, [isOpen, onComplete, durationMs]);

  if (!isOpen) return null;

  return (
    <div
      className="order-processing-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="processing-modal-title"
    >
      <div
        className="order-processing-modal"
        data-node-id="1252:21187"
        data-name="Marketplace / Modal / Place Order / Processing"
      >
        {/* Loading Spinner Area (Node 1252:21188) */}
        <div
          className="order-processing-spinner-container"
          data-node-id="1252:21188"
          data-name="loading-spinner-container"
        >
          <LoadingCircle />
        </div>

        {/* Title & Description Group (Node 1252:21190) */}
        <div
          className="order-processing-title-group"
          data-node-id="1252:21190"
          data-name="title-group"
        >
          <h2
            id="processing-modal-title"
            className="order-processing-title"
            data-node-id="1252:21191"
          >
            Processing your order
          </h2>
          <p
            className="order-processing-subtitle"
            data-node-id="1252:21192"
          >
            Please wait while we confirm your payment and set up your service.
          </p>
        </div>

        {/* Warning Banner (Node 1252:21193) */}
        <div
          className="order-processing-warning-banner"
          data-node-id="1252:21193"
          data-name="warning-banner"
        >
          <div
            className="order-processing-alert-icon-box"
            data-node-id="1252:21194"
            data-name="alert-triangle"
          >
            <AlertTriangleIcon />
          </div>
          <div
            className="order-processing-banner-text"
            data-node-id="1252:21196"
            data-name="banner-text-group"
          >
            <p
              className="order-processing-banner-headline"
              data-node-id="1252:21197"
            >
              Do not refresh or close this page.
            </p>
            <p
              className="order-processing-banner-subline"
              data-node-id="1252:21198"
            >
              This may take a few moments.
            </p>
          </div>
        </div>

        {/* Processing Indicator Pill Button (Node 1252:21199) */}
        <div
          className="order-processing-cta"
          data-node-id="1252:21199"
          data-name="processing-cta"
          aria-live="polite"
        >
          <div
            className="order-processing-cta-icon"
            data-node-id="1252:21200"
            data-name="loader"
          >
            <SpokeLoaderIcon />
          </div>
          <span
            className="order-processing-cta-text"
            data-node-id="1252:21202"
          >
            Processing...
          </span>
        </div>

        {/* Payment Method Footer (Node 1252:21203) */}
        <p
          className="order-processing-payment-info"
          data-node-id="1252:21203"
        >
          <span className="order-processing-payment-label">Payment method: </span>
          <span className="order-processing-payment-value">{paymentMethodLabel}</span>
        </p>
      </div>
    </div>
  );
}
