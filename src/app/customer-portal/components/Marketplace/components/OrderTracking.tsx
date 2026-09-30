import React from 'react';
import './OrderTracking.css';
import type { Product } from '../index';
import epConnection from '@/assets/svgs/ep_connection.svg';

interface OrderTrackingProps {
  product: Product;
  config: Record<string, string>;
  onBack: () => void;
  onViewServices: () => void;
}

/**
 * 20x20 Location Pin SVG Icon (Matching Figma LocationIcon)
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
 * 20x20 Box/Cube SVG Icon (Matching Figma BoxIcon)
 */
function BoxCubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2.5L16.6667 6.25V13.75L10 17.5L3.33333 13.75V6.25L10 2.5Z"
        stroke="#187BC9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 17.5V10" stroke="#187BC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6667 6.25L10 10L3.33333 6.25" stroke="#187BC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 24x24 File/Invoice Document Icon
 */
function DocumentFileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
        stroke="#187BC9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2V8H20" stroke="#187BC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="16" y2="13" stroke="#187BC9" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" stroke="#187BC9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function OrderTracking({
  product,
  config,
  onBack,
  onViewServices
}: OrderTrackingProps) {
  const sites = parseInt(config.sites || '1', 10);
  const billing = config.billing || 'Monthly';
  const currency = product.currencySymbol || '£';
  const baseRate = product.price || 149.00;
  const baseTotal = baseRate * sites;
  const vat = baseTotal * 0.20;
  const totalPaid = baseTotal + vat;

  const formatPrice = (amount: number) => `${currency}${amount.toFixed(2)}`;

  // Formatted date helpers
  const today = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentDateFormatted = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
  
  const renewalDate = new Date(today);
  renewalDate.setMonth(renewalDate.getMonth() + 1);
  const renewalDateFormatted = `${renewalDate.getDate()} ${monthNames[renewalDate.getMonth()]} ${renewalDate.getFullYear()}`;

  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="order-tracking-container" data-node-id="1252:20823">
      {/* Header Area */}
      <div className="order-tracking-header" data-node-id="1252:20832">
        <div className="order-tracking-title-row">
          <button
            type="button"
            className="details-back-arrow-btn"
            onClick={onBack}
            aria-label="Go back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="order-tracking-title" data-node-id="1252:20835">Order Tracking</h1>
        </div>

        {/* Provisioning Status Badge */}
        <div className="order-tracking-status-badge" data-node-id="1158:8109">
          <div className="status-badge-spinner" data-name="loading-spinner">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="spin-animation">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
            </svg>
          </div>
          <span className="status-badge-text">Provisioning</span>
        </div>
      </div>

      {/* Top Banner Row: Success Notification Banner + View My Services Button */}
      <div className="order-tracking-banner-row" data-node-id="1252:20837">
        <div className="order-success-banner" data-node-id="1158:8049">
          <div className="order-success-icon-wrapper" data-node-id="1158:8041">
            <span>i</span>
          </div>
          <div className="order-success-text-content" data-node-id="1158:8043">
            <p className="order-success-headline">
              Your payment was successful. We sent a confirmation email to <strong>alex.morgan@enigma.com</strong>.
            </p>
            <p className="order-success-subline">
              {product.name || 'CONNECT'} is being set up. We'll notify you when your service is ready.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="order-view-services-btn"
          onClick={onViewServices}
          data-node-id="493:2737"
        >
          View My Services
        </button>
      </div>

      {/* Main 2-Column Content Layout */}
      <div className="order-tracking-grid" data-node-id="1252:20840">
        
        {/* Left Column: Progress, Product Details, Configuration */}
        <div className="order-tracking-left-col" data-node-id="1252:20841">
          
          {/* 1. Order Progress Card */}
          <div className="order-tracking-card" data-node-id="1252:20842">
            <h2 className="order-card-title" data-node-id="1252:20843">Order progress</h2>
            <div className="order-timeline-track" data-node-id="1252:20844">
              
              {/* Step 1: Payment confirmed */}
              <div className="timeline-step-item" data-node-id="1252:20845">
                <div className="timeline-circle timeline-circle--done" data-node-id="1252:20846">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="timeline-step-title" data-node-id="1252:20849">Payment confirmed</p>
                <p className="timeline-step-meta" data-node-id="1252:20850">{currentDateFormatted}</p>
              </div>

              {/* Step 2: Order confirmed */}
              <div className="timeline-step-item" data-node-id="1252:20851">
                <div className="timeline-circle timeline-circle--done" data-node-id="1252:20852">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="timeline-step-title" data-node-id="1252:20855">Order confirmed</p>
                <p className="timeline-step-meta" data-node-id="1252:20856">{currentDateFormatted}</p>
              </div>

              {/* Step 3: Service provisioning (In Progress) */}
              <div className="timeline-step-item" data-node-id="1252:20857">
                <div className="timeline-circle timeline-circle--in-progress" data-node-id="1252:20858">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="timeline-step-title timeline-step-title--active" data-node-id="1252:20861">Service provisioning</p>
                <p className="timeline-step-meta timeline-step-meta--active" data-node-id="1252:20862">In progress</p>
              </div>

              {/* Step 4: Service ready (Pending) */}
              <div className="timeline-step-item" data-node-id="1252:20863">
                <div className="timeline-circle timeline-circle--pending" data-node-id="1252:20864">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="timeline-step-title timeline-step-title--pending" data-node-id="1252:20867">Service ready</p>
                <p className="timeline-step-meta timeline-step-meta--pending" data-node-id="1252:20868">Pending</p>
              </div>

            </div>
          </div>

          {/* 2. Product Details Card */}
          <div className="order-tracking-card" data-node-id="1252:20869">
            <h2 className="order-card-title" data-node-id="1252:20870">Product details</h2>
            <div className="order-product-details-row" data-node-id="1252:20871">
              
              {/* Product Info Segment */}
              <div className="order-product-main-segment" data-node-id="1252:20872">
                <div className="order-product-logo-box" data-node-id="1252:20873">
                  <img src={epConnection} alt={product.name || 'Product logo'} width={28} height={28} />
                </div>
                <div className="order-product-text-meta" data-node-id="1252:20876">
                  <h3 className="order-product-name" data-node-id="1252:20877">{product.name || 'CONNECT'}</h3>
                  <p className="order-product-plan" data-node-id="1252:20878">Enterprise plan</p>
                  <p className="order-product-billing" data-node-id="1252:20879">{billing} billing</p>
                </div>
              </div>

              <div className="order-details-divider" data-node-id="1252:20880" />

              {/* Region Segment */}
              <div className="order-meta-segment" data-node-id="1252:20881">
                <LocationPinIcon />
                <div className="order-meta-text-group" data-node-id="1252:20883">
                  <span className="order-meta-label" data-node-id="1252:20884">REGION</span>
                  <span className="order-meta-val" data-node-id="1252:20885">London, United Kingdom</span>
                </div>
              </div>

              <div className="order-details-divider" data-node-id="1252:20886" />

              {/* Quantity Segment */}
              <div className="order-meta-segment" data-node-id="1252:20887">
                <BoxCubeIcon />
                <div className="order-meta-text-group" data-node-id="1252:20889">
                  <span className="order-meta-label" data-node-id="1252:20890">QUANTITY</span>
                  <span className="order-meta-val" data-node-id="1252:20891">{sites}</span>
                </div>
              </div>

            </div>
          </div>

          {/* 3. Configuration Specs Card */}
          <div className="order-tracking-card" data-node-id="1252:20892">
            <h2 className="order-card-title" data-node-id="1252:20893">Configuration</h2>
            <div className="order-specs-list" data-node-id="1252:20894">
              <div className="order-spec-row" data-node-id="1252:20895">
                <span className="order-spec-label" data-node-id="1252:20896">Network profile</span>
                <span className="order-spec-val" data-node-id="1252:20897">Enterprise</span>
              </div>
              <div className="order-spec-row" data-node-id="1252:20898">
                <span className="order-spec-label" data-node-id="1252:20899">Data allowance</span>
                <span className="order-spec-val" data-node-id="1252:20900">2 TB</span>
              </div>
              <div className="order-spec-row" data-node-id="1252:20901">
                <span className="order-spec-label" data-node-id="1252:20902">Support</span>
                <span className="order-spec-val" data-node-id="1252:20903">Priority</span>
              </div>
              <div className="order-spec-row order-spec-row--last" data-node-id="1252:20904">
                <span className="order-spec-label" data-node-id="1252:20905">Renewal date</span>
                <span className="order-spec-val" data-node-id="1252:20906">{renewalDateFormatted}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Payment Summary, Billing Details, Documents */}
        <div className="order-tracking-right-col" data-node-id="1252:20907">
          
          {/* 1. Payment Summary Card */}
          <div className="order-tracking-card" data-node-id="1252:20908">
            <h2 className="order-card-title" data-node-id="1252:20909">Payment summary</h2>
            <div className="order-payment-lines" data-node-id="1252:20910">
              <div className="order-summary-row" data-node-id="1252:20911">
                <span className="order-summary-label" data-node-id="1252:20912">Subtotal</span>
                <span className="order-summary-val" data-node-id="1252:20913">{formatPrice(baseTotal)}</span>
              </div>
              <div className="order-summary-row" data-node-id="1252:20914">
                <span className="order-summary-label" data-node-id="1252:20915">VAT (20%)</span>
                <span className="order-summary-val" data-node-id="1252:20916">{formatPrice(vat)}</span>
              </div>
            </div>

            {/* Total Paid Box */}
            <div className="order-total-paid-box" data-node-id="1252:20917">
              <span className="order-total-paid-label" data-node-id="1252:20918">Total paid</span>
              <span className="order-total-paid-amount" data-node-id="1252:20919">{formatPrice(totalPaid)}</span>
            </div>

            {/* Payment Method Used */}
            <div className="order-card-used-row" data-node-id="1252:20920">
              <div className="order-card-brand-badge" data-node-id="1252:20921">
                <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                  <rect width="32" height="20" rx="2" fill="#0D1B29" />
                  <circle cx="12" cy="10" r="6" fill="#EB001B" />
                  <circle cx="20" cy="10" r="6" fill="#F79E1B" fillOpacity="0.8" />
                </svg>
              </div>
              <span className="order-card-used-text" data-node-id="1252:20922">Visa ending in 4242</span>
            </div>
          </div>

          {/* 2. Billing Details Card */}
          <div className="order-tracking-card" data-node-id="1252:20923">
            <h2 className="order-card-title" data-node-id="1252:20924">Billing details</h2>
            <div className="order-billing-address-block" data-node-id="1252:20925">
              <p className="order-billing-name" data-node-id="1252:20926">Alex Morgan</p>
              <div className="order-billing-address-lines" data-node-id="1252:20927">
                <p>123 Innovation Drive</p>
                <p>London, SW1A 1AA</p>
                <p>United Kingdom</p>
              </div>
            </div>
          </div>

          {/* 3. Documents Card */}
          <div className="order-tracking-card" data-node-id="1252:20928">
            <h2 className="order-card-title" data-node-id="1252:20929">Documents</h2>
            <div className="order-documents-block" data-node-id="1252:20930">
              <div className="order-document-item" data-node-id="1252:20931">
                <DocumentFileIcon />
                <div className="order-document-meta" data-node-id="1252:20934">
                  <p className="order-document-name" data-node-id="1252:20935">Invoice EN-2026-1048</p>
                  <p className="order-document-date" data-node-id="1252:20936">Issued {currentDateFormatted}</p>
                </div>
              </div>

              <button
                type="button"
                className="order-download-pdf-btn"
                onClick={handleDownloadPdf}
                data-node-id="493:2737"
              >
                Download PDF
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
