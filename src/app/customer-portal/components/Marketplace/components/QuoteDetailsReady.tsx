import { useState } from 'react';
import './QuoteDetailsReady.css';
import type { Product } from '../index';

export interface QuoteDetailsReadyProps {
  quoteId?: string;
  submittedDate?: string;
  product: Product;
  sites?: number;
  throughput?: string;
  supportLevel?: string;
  installationTime?: string;
  contractTerm?: string;
  validUntil?: string;
  setupFee?: number;
  monthlyService?: number;
  currencySymbol?: string;
  documentName?: string;
  documentSize?: string;
  onBack?: () => void;
  onViewAllRequests?: () => void;
  onAcceptQuote?: () => void;
  onContactSales?: () => void;
  onDeclineQuote?: () => void;
}

// 3D Product Box Icon
function ProductBoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="#2ADEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 6L10 10M10 10L17 6M10 10V18" stroke="#2ADEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Requirements/Pricing Doc Icon
function PricingDocIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3H14C14.5523 3 15 3.44772 15 4V16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16V4C5 3.44772 5.44772 3 6 3Z" stroke="#2ADEFF" strokeWidth="1.5" />
      <path d="M8 7H12M8 10H12M8 13H10" stroke="#2ADEFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Terms & File Icon
function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3H12L16 7V16C16 16.5523 15.5523 17 15 17H5C4.44772 17 4 16.5523 4 16V4C4 3.44772 4.44772 3 5 3Z" stroke="#2ADEFF" strokeWidth="1.5" />
      <path d="M12 3V7H16" stroke="#2ADEFF" strokeWidth="1.5" />
    </svg>
  );
}

// Globe Icon
function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="#2ADEFF" strokeWidth="1.5" />
      <path d="M2.5 10H17.5M10 2.5C12 5.5 12.5 8 12.5 10C12.5 12 12 14.5 10 17.5M10 2.5C8 5.5 7.5 8 7.5 10C7.5 12 8 14.5 10 17.5" stroke="#2ADEFF" strokeWidth="1.3" />
    </svg>
  );
}

// Arrow Up Right Icon
function ArrowUpRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 14L14 6M14 6H7M14 6V13" stroke="#2ADEFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Shield Icon
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.5L16.5 5.5V10.5C16.5 14.5 13.5 17 10 18C6.5 17 3.5 14.5 3.5 10.5V5.5L10 2.5Z" stroke="#2ADEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Clock Icon
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="#2ADEFF" strokeWidth="1.5" />
      <path d="M10 6V10L13 12" stroke="#2ADEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Cloud Download/Upload Icon
function CloudUploadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 16C4.79086 16 3 14.2091 3 12C3 9.94474 4.55172 8.25141 6.55627 8.03225C7.03737 5.16723 9.51867 3 12.5 3C15.9065 3 18.7299 5.66699 18.9806 9.03478C20.7303 9.48911 22 11.0877 22 13C22 15.2091 20.2091 17 18 17" stroke="#2ADEFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12V21M12 12L8.5 15.5M12 12L15.5 15.5" stroke="#2ADEFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Arrow Right
function ArrowRightIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6H15.5M15.5 6L10.5 1M15.5 6L10.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Product Glow Icon
function ProductGlowSvg() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#glow_ready)">
        <rect x="20" y="35" width="50" height="50" rx="14" stroke="url(#blue_grad_ready_1)" strokeWidth="6" />
        <rect x="50" y="35" width="50" height="50" rx="14" stroke="url(#blue_grad_ready_2)" strokeWidth="6" />
      </g>
      <defs>
        <filter id="glow_ready" x="0" y="15" width="120" height="90" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="blue_grad_ready_1" x1="20" y1="35" x2="70" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#001A94" />
          <stop offset="1" stopColor="#2ADEFF" />
        </linearGradient>
        <linearGradient id="blue_grad_ready_2" x1="50" y1="35" x2="100" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2ADEFF" />
          <stop offset="1" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Quote Details (Quote Ready) View Component
 * Matching Figma Node: 1252:22129
 */
export default function QuoteDetailsReady({
  quoteId = 'QR-2026-0148',
  submittedDate = '15 Jan 2026, 10:24',
  product,
  sites = 3,
  throughput = 'Up to 300 Mbps',
  supportLevel = 'Priority support',
  installationTime = '1 - 3 months',
  contractTerm = '24 months',
  validUntil = '30 Sep 2026',
  setupFee = 450.0,
  monthlyService = 297.0,
  currencySymbol = '£',
  documentName,
  documentSize = '1.2 MB',
  onBack,
  onViewAllRequests,
  onAcceptQuote,
  onContactSales,
  onDeclineQuote
}: QuoteDetailsReadyProps) {
  const [status, setStatus] = useState<'ready' | 'accepted' | 'declined'>('ready');

  const setupVat = setupFee * 0.2;
  const monthlyVat = monthlyService * 0.2;
  const docFilename = documentName || `Quotation-${quoteId}.pdf`;

  const handleAccept = () => {
    setStatus('accepted');
    if (onAcceptQuote) onAcceptQuote();
  };

  const handleDecline = () => {
    setStatus('declined');
    if (onDeclineQuote) onDeclineQuote();
  };

  return (
    <div className="quote-ready-view" data-node-id="1252:22129">
      {/* Header Area */}
      <div className="quote-ready-header-area" data-node-id="1252:22132">
        <div className="quote-ready-title-bar" data-node-id="1252:22140">
          <div className="quote-ready-title-left">
            {onBack && (
              <button
                type="button"
                className="quote-ready-back-btn"
                onClick={onBack}
                aria-label="Back"
              >
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path d="M10 4L2 12L10 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            <div className="quote-ready-title-text-group" data-node-id="1252:22142">
              <h1 className="quote-ready-title" data-node-id="1252:22143">
                Quote request {quoteId}
              </h1>
              <p className="quote-ready-subtitle" data-node-id="1252:22144">
                Submitted on {submittedDate}
              </p>
            </div>
          </div>

          {onViewAllRequests && (
            <button
              type="button"
              className="quote-ready-view-requests-btn"
              onClick={onViewAllRequests}
              data-node-id="1252:22145"
            >
              <span>View my requests</span>
              <ArrowRightIcon />
            </button>
          )}
        </div>

        {/* Top Info Banner (Node 1165:16138) */}
        <div className="quote-ready-info-banner" data-node-id="1165:16138">
          <div className="quote-ready-info-badge">i</div>
          <div className="quote-ready-info-text-group">
            <p className="quote-ready-info-headline">
              Your personal quotation is ready to review
            </p>
            <p className="quote-ready-info-subline">
              We&apos;ve prepared a tailored solution based on your requirements. Review the details below and take the next step when you&apos;re ready.
            </p>
          </div>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="quote-ready-main-layout" data-node-id="1252:22147">
        {/* Left Column: Proposed Solution, Pricing, Terms */}
        <div className="quote-ready-left-col" data-node-id="1252:22148">
          {/* Card 1: Proposed solution */}
          <div className="quote-ready-card" data-node-id="1252:22149">
            <div className="quote-ready-card-header" data-node-id="1252:22150">
              <div className="quote-ready-card-icon">
                <ProductBoxIcon />
              </div>
              <h2 className="quote-ready-card-title" data-node-id="1252:22152">
                Proposed solution
              </h2>
            </div>

            <div className="quote-ready-product-row" data-node-id="1252:22153">
              <div className="quote-ready-product-icon-wrap">
                <ProductGlowSvg />
              </div>
              <div className="quote-ready-product-info" data-node-id="1252:22155">
                <h3 className="quote-ready-product-name" data-node-id="1252:22156">
                  {product.name}
                </h3>
                <p className="quote-ready-product-desc" data-node-id="1252:22157">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="quote-ready-divider" data-node-id="1252:22158" />

            {/* 4 Metrics Row (Sites, Throughput, Support, Timeframe) */}
            <div className="quote-ready-metrics-grid" data-node-id="1252:22159">
              <div className="quote-ready-metric-item" data-node-id="1252:22160">
                <div className="quote-ready-metric-icon">
                  <GlobeIcon />
                </div>
                <div className="quote-ready-metric-text">
                  <span className="quote-ready-metric-value">{sites} sites</span>
                  <span className="quote-ready-metric-label">Number of sites</span>
                </div>
              </div>

              <div className="quote-ready-metric-item" data-node-id="1252:22165">
                <div className="quote-ready-metric-icon">
                  <ArrowUpRightIcon />
                </div>
                <div className="quote-ready-metric-text">
                  <span className="quote-ready-metric-value">{throughput}</span>
                  <span className="quote-ready-metric-label">Throughput</span>
                </div>
              </div>

              <div className="quote-ready-metric-item" data-node-id="1252:22170">
                <div className="quote-ready-metric-icon">
                  <ShieldIcon />
                </div>
                <div className="quote-ready-metric-text">
                  <span className="quote-ready-metric-value">{supportLevel}</span>
                  <span className="quote-ready-metric-label">Support level</span>
                </div>
              </div>

              <div className="quote-ready-metric-item" data-node-id="1252:22175">
                <div className="quote-ready-metric-icon">
                  <ClockIcon />
                </div>
                <div className="quote-ready-metric-text">
                  <span className="quote-ready-metric-value">{installationTime}</span>
                  <span className="quote-ready-metric-label">Installation time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Pricing Table */}
          <div className="quote-ready-card" data-node-id="1252:22180">
            <div className="quote-ready-card-header" data-node-id="1252:22181">
              <div className="quote-ready-card-icon">
                <PricingDocIcon />
              </div>
              <h2 className="quote-ready-card-title" data-node-id="1252:22183">
                Pricing
              </h2>
            </div>

            <div className="quote-ready-pricing-table">
              <div className="quote-ready-pricing-header" data-node-id="1252:22184">
                <span>Item</span>
                <span>Cost</span>
              </div>

              <div className="quote-ready-pricing-row" data-node-id="1252:22187">
                <span className="quote-ready-pricing-item">Setup fee (one-time)</span>
                <span className="quote-ready-pricing-cost">{currencySymbol}{setupFee.toFixed(2)}</span>
              </div>

              <div className="quote-ready-pricing-row" data-node-id="1252:22190">
                <span className="quote-ready-pricing-item">Monthly service (per month)</span>
                <span className="quote-ready-pricing-cost">{currencySymbol}{monthlyService.toFixed(2)}</span>
              </div>

              <div className="quote-ready-pricing-row" data-node-id="1252:22193">
                <span className="quote-ready-pricing-item">VAT (20% on setup fee)</span>
                <span className="quote-ready-pricing-cost">{currencySymbol}{setupVat.toFixed(2)}</span>
              </div>

              <div className="quote-ready-pricing-row" data-node-id="1252:22196">
                <span className="quote-ready-pricing-item">VAT (20% on monthly service)</span>
                <span className="quote-ready-pricing-cost">{currencySymbol}{monthlyVat.toFixed(2)}</span>
              </div>

              <div className="quote-ready-divider" data-node-id="1252:22199" />

              <div className="quote-ready-pricing-total-row" data-node-id="1252:22200">
                <span className="quote-ready-pricing-total-label">Contract term</span>
                <span className="quote-ready-pricing-total-val">{contractTerm}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Terms and documents */}
          <div className="quote-ready-card" data-node-id="1252:22203">
            <div className="quote-ready-card-header" data-node-id="1252:22204">
              <div className="quote-ready-card-icon">
                <FileIcon />
              </div>
              <h2 className="quote-ready-card-title" data-node-id="1252:22206">
                Terms and documents
              </h2>
            </div>

            <p className="quote-ready-terms-desc" data-node-id="1252:22207">
              Review the full quotation, including terms and conditions.
            </p>

            <div className="quote-ready-file-box" data-node-id="1252:22208">
              <div className="quote-ready-file-left">
                <FileIcon />
                <span className="quote-ready-file-name">
                  {docFilename} ({documentSize})
                </span>
              </div>
              <CloudUploadIcon />
            </div>
          </div>
        </div>

        {/* Right Column: Quote Summary & Actions */}
        <div className="quote-ready-right-col" data-node-id="1252:22212">
          <div className="quote-ready-card">
            <h2 className="quote-ready-card-title" data-node-id="1252:22213">
              Quote summary
            </h2>

            {/* Product Header */}
            <div className="quote-ready-summary-product" data-node-id="1252:22214">
              <div style={{ width: '64px', height: '64px', flexShrink: 0 }}>
                <ProductGlowSvg />
              </div>
              <div className="quote-ready-summary-info">
                <span className="quote-ready-summary-name">{product.name}</span>
                <span className="quote-ready-summary-sites">{sites} sites</span>
              </div>
            </div>

            <div className="quote-ready-divider" data-node-id="1252:22219" />

            {/* Summary Rows */}
            <div className="quote-ready-summary-rows" data-node-id="1252:22220">
              <div className="quote-ready-summary-row" data-node-id="1252:22221">
                <span className="quote-ready-summary-label">Monthly total</span>
                <div className="quote-ready-summary-price-group">
                  <span className="quote-ready-monthly-total">
                    {currencySymbol}{monthlyService.toFixed(2)}
                  </span>
                  <span className="quote-ready-subtext">per month (excl. VAT)</span>
                </div>
              </div>

              <div className="quote-ready-summary-row" data-node-id="1252:22226">
                <span className="quote-ready-summary-label">One-time cost</span>
                <div className="quote-ready-summary-price-group">
                  <span className="quote-ready-onetime-cost">
                    {currencySymbol}{setupFee.toFixed(2)}
                  </span>
                  <span className="quote-ready-subtext">(excl. VAT)</span>
                </div>
              </div>

              <div className="quote-ready-summary-row" data-node-id="1252:22231">
                <span className="quote-ready-summary-label">Contract term</span>
                <span className="quote-ready-summary-val">{contractTerm}</span>
              </div>

              <div className="quote-ready-summary-row" data-node-id="1252:22234">
                <span className="quote-ready-summary-label">Valid until</span>
                <span className="quote-ready-summary-val">{validUntil}</span>
              </div>
            </div>

            {/* Action Buttons Stack */}
            <div className="quote-ready-actions-stack" data-node-id="1252:22237">
              <button
                type="button"
                className="quote-ready-btn-accept"
                onClick={handleAccept}
                disabled={status !== 'ready'}
                data-name="open btn M"
              >
                {status === 'accepted' ? 'Quote accepted ✓' : 'Accept quote'}
              </button>

              <button
                type="button"
                className="quote-ready-btn-sales"
                onClick={onContactSales}
                data-name="secondary btn M"
              >
                Contact Sales
              </button>

              <button
                type="button"
                className="quote-ready-btn-decline"
                onClick={handleDecline}
                disabled={status !== 'ready'}
                data-name="primary delete btn M"
              >
                {status === 'declined' ? 'Quote declined' : 'Decline quote'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
