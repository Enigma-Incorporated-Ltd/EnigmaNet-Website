import type { Product } from '../index';
import './OrderConfirmationModal.css';
import epConnection from '@/assets/svgs/ep_connection.svg';

export interface OrderConfirmationModalProps {
  isOpen?: boolean;
  product: Product;
  config: Record<string, string>;
  orderNumber?: string;
  paymentMethodLabel?: string;
  onGoToServices: () => void;
  onViewOrderDetails: () => void;
  onBackToMarketplace: () => void;
}

/**
 * 20x20 Location Pin SVG
 */
function LocationPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17.5C10 17.5 15.8333 12.5 15.8333 8.33333C15.8333 5.11167 13.2217 2.5 10 2.5C6.77833 2.5 4.16667 5.11167 4.16667 8.33333C4.16667 12.5 10 17.5 10 17.5Z"
        stroke="#187BC9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.33333" r="2.5" stroke="#187BC9" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Order Confirmation Success Modal Component
 * Matching Figma Node: 1252:21143 (Marketplace / Modal / Order Confirmation / Success)
 */
export default function OrderConfirmationModal({
  isOpen = true,
  product,
  config,
  orderNumber = 'EN-2026-1048',
  paymentMethodLabel = 'Visa ending in 4242',
  onGoToServices,
  onViewOrderDetails,
  onBackToMarketplace
}: OrderConfirmationModalProps) {
  if (!isOpen) return null;

  const sites = parseInt(config.sites || '1', 10);
  const billing = config.billing || 'Monthly';
  const currency = product.currencySymbol || '£';
  const baseRate = product.price || 149;
  const baseTotal = baseRate * sites;
  const vat = baseTotal * 0.20;
  const totalPaid = baseTotal + vat;

  const formattedTotal = `${currency}${totalPaid.toFixed(2)}`;

  return (
    <div
      className="order-confirm-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirm-title"
    >
      <div
        className="order-confirm-card"
        data-node-id="1252:21143"
        data-name="Marketplace / Modal / Order Confirmation / Success"
      >
        {/* Success Header (Node 1252:21144) */}
        <div className="order-confirm-header" data-node-id="1252:21144">
          <div className="order-confirm-check-circle" data-node-id="1157:8009">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" data-node-id="1157:7997">
              <path
                d="M7 16.5L13.5 23L25 9"
                stroke="#FFFFFF"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 id="order-confirm-title" className="order-confirm-title" data-node-id="1252:21146">
            Your order is confirmed
          </h1>
          <p className="order-confirm-subtitle" data-node-id="1252:21147">
            {product.name || 'CONNECT'} has been added to your account and is now being set up.
          </p>
        </div>

        {/* Info Banner (Node 1158:8049) */}
        <div className="order-confirm-info-banner" data-node-id="1158:8049">
          <div className="order-confirm-info-icon" data-node-id="1158:8041">
            <span>i</span>
          </div>
          <p className="order-confirm-info-text" data-node-id="1158:8043">
            You can find and manage this product in My Services.
          </p>
        </div>

        {/* Order Meta Bar (Node 1252:21149) */}
        <div className="order-confirm-meta-row" data-node-id="1252:21149">
          <p className="order-confirm-number" data-node-id="1252:21150">
            Order #{orderNumber}
          </p>
          <div className="order-confirm-status-group" data-node-id="1252:21151">
            <span className="order-confirm-status-label" data-node-id="1252:21152">Status</span>
            <div className="order-confirm-status-badge" data-node-id="1158:8113">
              <span className="order-confirm-status-dot" data-node-id="1158:8075" />
              <span className="order-confirm-status-text" data-node-id="1158:8076">Provisioning</span>
            </div>
          </div>
        </div>

        {/* Product Details Block (Node 1252:21154) */}
        <div className="order-confirm-product-card" data-node-id="1252:21154">
          <div className="order-confirm-product-left" data-node-id="1252:21155">
            <div className="order-confirm-product-icon-box" data-node-id="1252:21156">
              <img src={epConnection} alt={product.name || 'Product'} width={28} height={28} />
            </div>
            <div className="order-confirm-product-info" data-node-id="1252:21158">
              <h3 className="order-confirm-product-name" data-node-id="1252:21159">{product.name || 'ESC Lite'}</h3>
              <p className="order-confirm-product-plan" data-node-id="1252:21160">Enterprise plan</p>
              <p className="order-confirm-product-billing" data-node-id="1252:21161">{billing} billing</p>
            </div>
          </div>

          <div className="order-confirm-product-right" data-node-id="1252:21162">
            <LocationPinIcon />
            <div className="order-confirm-region-info" data-node-id="1252:21164">
              <span className="order-confirm-region-label" data-node-id="1252:21165">Region</span>
              <span className="order-confirm-region-val" data-node-id="1252:21166">London UK</span>
            </div>
          </div>
        </div>

        {/* Payment Summary Block (Node 1252:21167) */}
        <div className="order-confirm-summary-card" data-node-id="1252:21167">
          <h3 className="order-confirm-summary-title" data-node-id="1252:21168">Payment summary</h3>
          <div className="order-confirm-summary-row" data-node-id="1252:21169">
            <span className="order-confirm-summary-label" data-node-id="1252:21170">Paid today</span>
            <span className="order-confirm-summary-amount" data-node-id="1252:21171">{formattedTotal}</span>
          </div>
          <div className="order-confirm-summary-row" data-node-id="1252:21172">
            <span className="order-confirm-summary-label" data-node-id="1252:21173">Payment method</span>
            <div className="order-confirm-card-badge" data-node-id="1252:21174">
              <span className="order-confirm-brand-tag" data-node-id="1252:21175">VISA</span>
              <span className="order-confirm-card-text" data-node-id="1252:21177">{paymentMethodLabel}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Group (Node 1252:21178) */}
        <div className="order-confirm-actions" data-node-id="1252:21178">
          <button
            type="button"
            className="order-confirm-btn-primary"
            onClick={onGoToServices}
            data-node-id="493:2737"
          >
            Go to My Services
          </button>
          <button
            type="button"
            className="order-confirm-btn-secondary"
            onClick={onViewOrderDetails}
            data-node-id="1252:21181"
          >
            View order details
          </button>
          <button
            type="button"
            className="order-confirm-btn-link"
            onClick={onBackToMarketplace}
            data-node-id="1252:21182"
          >
            Back to Marketplace
          </button>
        </div>

        {/* Divider Line (Node 1252:21183) */}
        <div className="order-confirm-divider" data-node-id="1252:21183" />

        {/* Footer Note (Node 1252:21184) */}
        <div className="order-confirm-footer" data-node-id="1252:21184">
          <div className="order-confirm-footer-icon" data-node-id="1158:8068">
            <span>i</span>
          </div>
          <p className="order-confirm-footer-text" data-node-id="1252:21186">
            We'll notify you when your service is ready.
          </p>
        </div>
      </div>
    </div>
  );
}
