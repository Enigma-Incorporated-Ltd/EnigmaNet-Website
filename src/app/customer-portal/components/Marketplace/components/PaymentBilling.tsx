import { useState } from 'react';
import './PaymentBilling.css';
import type { Product } from '../index';
import CheckoutStepper from './CheckoutStepper';
import OrderProcessingModal from './OrderProcessingModal';
import PaymentErrorModal from './PaymentErrorModal';
import epConnection from '@/assets/svgs/ep_connection.svg';

interface PaymentBillingProps {
  product: Product;
  config: Record<string, string>;
  onContinue: () => void;
  onBack: () => void;
}

interface SavedCard {
  id: string;
  brand: 'visa' | 'mastercard' | 'amex';
  brandLabel: string;
  brandBg: string;
  last4: string;
  expires: string;
  isDefault: boolean;
}

export default function PaymentBilling({ product, config, onContinue, onBack }: PaymentBillingProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentError, setShowPaymentError] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string>('card-1'); // 'card-1' | 'card-2' | 'paypal' | 'klarna' | 'new-card'
  const [showAddCard, setShowAddCard] = useState(false);

  const [savedCards, setSavedCards] = useState<SavedCard[]>([
    {
      id: 'card-1',
      brand: 'visa',
      brandLabel: 'VISA',
      brandBg: '#1a1f71',
      last4: '4242',
      expires: '08/28',
      isDefault: true
    },
    {
      id: 'card-2',
      brand: 'mastercard',
      brandLabel: 'MC',
      brandBg: '#eb001b',
      last4: '8821',
      expires: '03/27',
      isDefault: false
    }
  ]);

  const [newCardForm, setNewCardForm] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    country: 'United Kingdom',
    postalCode: ''
  });

  const [error, setError] = useState<string | null>(null);

  const sites = parseInt(config.sites || '5', 10);
  const billing = config.billing || 'Monthly';
  const hasSecurity = config.securityPack === 'true';
  const hasResilience = config.resiliencePack === 'true';
  const hasAnalytics = config.analyticsPack === 'true';

  const currency = product.currencySymbol || '£';
  const baseRate = product.price || 99.00;
  const baseTotal = baseRate * sites;

  // Addons rate percentages
  const securityPct = 0.12;
  const resiliencePct = 0.20;
  const analyticsPct = 0.10;

  // Calculate pack additions
  let addonsTotal = 0;
  if (hasSecurity) addonsTotal += baseTotal * securityPct;
  if (hasResilience) addonsTotal += baseTotal * resiliencePct;
  if (hasAnalytics) addonsTotal += baseTotal * analyticsPct;

  const monthlySubtotal = baseTotal + addonsTotal;
  const billingDiscount = billing === 'Annual' ? 0.90 : 1.0;
  const subtotal = monthlySubtotal * billingDiscount;
  const vat = subtotal * 0.20;
  const totalPrice = subtotal + vat;

  const formatPrice = (amount: number) => {
    return `${currency}${amount.toFixed(2)}`;
  };

  const handleSetDefault = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedCards(prev =>
      prev.map(c => ({
        ...c,
        isDefault: c.id === cardId
      }))
    );
    setSelectedMethod(cardId);
  };

  const handleRemoveCard = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const remaining = savedCards.filter(c => c.id !== cardId);
    if (remaining.length > 0 && !remaining.some(c => c.isDefault)) {
      remaining[0].isDefault = true;
    }
    setSavedCards(remaining);
    if (selectedMethod === cardId) {
      if (remaining.length > 0) {
        setSelectedMethod(remaining[0].id);
      } else {
        setSelectedMethod('paypal');
      }
    }
  };

  const [saveAsDefault, setSaveAsDefault] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (showAddCard) {
      if (!newCardForm.cardNumber || !newCardForm.cardExpiry || !newCardForm.cardCvc || !newCardForm.postalCode) {
        setError('Please complete the new card details or select a saved card.');
        return;
      }

      if (saveAsDefault) {
        const cleanNumber = newCardForm.cardNumber.replace(/\s+/g, '');
        const last4 = cleanNumber.slice(-4) || '1234';
        const isVisa = cleanNumber.startsWith('4');
        const newCard: SavedCard = {
          id: `card-${Date.now()}`,
          brand: isVisa ? 'visa' : 'mastercard',
          brandLabel: isVisa ? 'VISA' : 'MC',
          brandBg: isVisa ? '#1a1f71' : '#eb001b',
          last4,
          expires: newCardForm.cardExpiry,
          isDefault: true
        };
        setSavedCards(prev => [...prev.map(c => ({ ...c, isDefault: false })), newCard]);
      }
    }

    setIsProcessing(true);
  };

  // Selected payment method label helper
  const getPaymentMethodLabel = () => {
    if (selectedMethod === 'paypal') return 'PayPal Account';
    if (selectedMethod === 'klarna') return 'Klarna Pay in 3';
    if (showAddCard || selectedMethod === 'new-card') {
      const last4 = newCardForm.cardNumber.replace(/\s+/g, '').slice(-4) || '4242';
      const isVisa = newCardForm.cardNumber.startsWith('4');
      return `${isVisa ? 'Visa' : 'Mastercard'} ending in ${last4}`;
    }
    const card = savedCards.find(c => c.id === selectedMethod);
    if (card) {
      return `${card.brand === 'visa' ? 'Visa' : 'Mastercard'} ending in ${card.last4}`;
    }
    return 'Visa ending in 4242';
  };

  // Helper to render next billing date
  const getNextBillingDate = () => {
    const now = new Date();
    if (billing === 'Annual') {
      now.setFullYear(now.getFullYear() + 1);
    } else {
      now.setMonth(now.getMonth() + 1);
    }
    const day = now.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="details-layout-container" data-node-id="1252:20554">
      {/* Header Area */}
      <div className="details-header-row" data-node-id="1252:20562">
        <div className="details-header-left">
          <button
            type="button"
            className="details-back-arrow-btn"
            onClick={onBack}
            aria-label="Go back"
            disabled={isProcessing}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="details-header-titles" data-node-id="1252:20564">
            <h1 className="details-page-title" data-node-id="1252:20565">Payment &amp; billing</h1>
            <p className="details-page-subtitle" data-node-id="1252:20566">
              Select a payment method and provide your billing information.
            </p>
          </div>
        </div>
      </div>

      {/* 3-Step Progress Indicator (Matching Figma Node 1252:20567) */}
      <CheckoutStepper
        currentStep="payment"
        onStepClick={(step) => {
          if (step === 'review' || step === 'configure') onBack();
        }}
      />

      <form onSubmit={handleSubmit} className="payment-layout-form">
        {error && (
          <div className="payment-error-toast">
            {error}
          </div>
        )}

        <div className="payment-content-columns" data-node-id="1252:20568">
          {/* Left Column: Payment Methods (Cards, PayPal, Klarna) */}
          <div className="payment-methods-column" data-node-id="1252:20569">

            {/* Box 1: Saved Payment Methods Card */}
            <div className="payment-card-box" data-node-id="1252:20570">
              <div className="payment-card-box-header" data-node-id="1252:20571">
                <h2 className="payment-card-box-title" data-node-id="1252:20572">Payment methods</h2>
                <button
                  type="button"
                  className="payment-add-card-btn"
                  onClick={() => setShowAddCard(!showAddCard)}
                  data-node-id="1252:20573"
                >
                  <span className="payment-add-card-btn-text">
                    {showAddCard ? '– Cancel' : '+ Add card'}
                  </span>
                </button>
              </div>

              {/* Saved Cards List */}
              <div className="payment-saved-cards-list" data-node-id="1252:20574">
                {savedCards.map((card) => {
                  const isSelected = selectedMethod === card.id;
                  return (
                    <div
                      key={card.id}
                      className={`payment-saved-card-item ${isSelected ? 'payment-saved-card-item--selected' : ''} ${card.isDefault ? 'payment-saved-card-item--default' : ''}`}
                      onClick={() => setSelectedMethod(card.id)}
                      data-node-id={card.id === 'card-1' ? '1252:20575' : '1252:20585'}
                    >
                      <div className="payment-saved-card-left" data-node-id={card.id === 'card-1' ? '1252:20576' : '1252:20586'}>
                        {/* Brand Badge */}
                        <div
                          className="payment-brand-badge"
                          style={{ backgroundColor: card.brandBg }}
                          data-node-id={card.id === 'card-1' ? '1252:20577' : '1252:20587'}
                        >
                          <span>{card.brandLabel}</span>
                        </div>

                        {/* Card Info */}
                        <div className="payment-saved-card-info" data-node-id={card.id === 'card-1' ? '1252:20579' : '1252:20589'}>
                          <p className="payment-card-name">
                            {card.brand === 'visa' ? 'Visa' : 'Mastercard'} ending in {card.last4}
                          </p>
                          <p className="payment-card-exp">
                            Expires {card.expires}
                          </p>
                        </div>

                        {/* Default Badge */}
                        {card.isDefault && (
                          <div className="payment-default-tag" data-node-id="1252:20582">
                            <span>Default</span>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="payment-saved-card-actions">
                        {!card.isDefault && (
                          <button
                            type="button"
                            className="payment-action-link payment-action-link--default"
                            onClick={(e) => handleSetDefault(card.id, e)}
                            data-node-id="1252:20593"
                          >
                            Set as default
                          </button>
                        )}
                        <button
                          type="button"
                          className="payment-action-link payment-action-link--remove"
                          onClick={(e) => handleRemoveCard(card.id, e)}
                          data-node-id={card.id === 'card-1' ? '1252:20584' : '1252:20594'}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Inline Add Card Subform (Matching Figma Node 1252:20697) */}
              {showAddCard && (
                <div className="payment-add-card-form" data-node-id="1252:20697">
                  <div className="payment-add-card-header" data-node-id="1252:20698">
                    <div className="payment-radio-icon" data-node-id="1252:20699">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#8A38F5" strokeWidth="2" />
                        <circle cx="10" cy="10" r="5" fill="#8A38F5" />
                      </svg>
                    </div>
                    <div className="payment-card-label-group" data-node-id="1252:20700">
                      <div className="payment-card-icon-svg" data-node-id="1252:20701">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="4" width="16" height="12" rx="2" fill="#8A38F5" />
                          <line x1="2" y1="8" x2="18" y2="8" stroke="#ffffff" strokeWidth="1.5" />
                          <rect x="4" y="11" width="4" height="2" fill="#ffffff" />
                        </svg>
                      </div>
                      <span className="payment-card-label-text" data-node-id="1252:20702">Card</span>
                    </div>
                  </div>

                  <div className="payment-form-fields-wrapper" data-node-id="1252:20703">
                    <div className="payment-form-stack" data-node-id="1252:20704">
                      {/* Card Number */}
                      <div className="payment-field-group" data-node-id="1252:20705">
                        <label className="payment-field-label" data-node-id="1252:20706">Card number</label>
                        <div className="payment-input-with-brands" data-node-id="1252:20707">
                          <input
                            type="text"
                            className="payment-text-input"
                            placeholder="1234 1234 1234 1234"
                            value={newCardForm.cardNumber}
                            onChange={(e) => setNewCardForm({ ...newCardForm, cardNumber: e.target.value })}
                            maxLength={19}
                            data-node-id="1252:20708"
                          />
                          <div className="payment-input-brand-icons" data-node-id="1252:20709">
                            {/* Mastercard */}
                            <div className="payment-input-brand-badge payment-input-brand-badge--mastercard" data-node-id="1252:20710">
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                                <circle cx="12" cy="10" r="7" fill="#EB001B" />
                                <circle cx="20" cy="10" r="7" fill="#F79E1B" fillOpacity="0.8" />
                              </svg>
                            </div>
                            {/* Visa */}
                            <div className="payment-input-brand-badge payment-input-brand-badge--visa" data-node-id="1252:20711">
                              <span style={{ fontSize: '10px', fontWeight: 800, color: '#1a1f71', fontStyle: 'italic', letterSpacing: '-0.5px' }}>VISA</span>
                            </div>
                            {/* Discover */}
                            <div className="payment-input-brand-badge payment-input-brand-badge--discover" data-node-id="1252:20712">
                              <span style={{ fontSize: '8px', fontWeight: 700, color: '#ff6000' }}>DISCOVER</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expiration date & Security code */}
                      <div className="payment-fields-row" data-node-id="1252:20713">
                        <div className="payment-field-group" data-node-id="1252:20714">
                          <label className="payment-field-label" data-node-id="1252:20715">Expiration date</label>
                          <input
                            type="text"
                            className="payment-text-input"
                            placeholder="MM / YY"
                            value={newCardForm.cardExpiry}
                            onChange={(e) => setNewCardForm({ ...newCardForm, cardExpiry: e.target.value })}
                            maxLength={5}
                            data-node-id="1252:20716"
                          />
                        </div>
                        <div className="payment-field-group" data-node-id="1252:20718">
                          <label className="payment-field-label" data-node-id="1252:20719">Security code</label>
                          <input
                            type="password"
                            className="payment-text-input"
                            placeholder="CVC"
                            value={newCardForm.cardCvc}
                            onChange={(e) => setNewCardForm({ ...newCardForm, cardCvc: e.target.value })}
                            maxLength={4}
                            data-node-id="1252:20720"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Country & Postal Code */}
                    <div className="payment-fields-row" data-node-id="1252:20722">
                      <div className="payment-field-group" data-node-id="1252:20723">
                        <label className="payment-field-label" data-node-id="1252:20724">Country</label>
                        <div className="payment-select-wrapper" data-node-id="1252:20725">
                          <select
                            className="payment-select-input"
                            value={newCardForm.country}
                            onChange={(e) => setNewCardForm({ ...newCardForm, country: e.target.value })}
                            data-node-id="1252:20726"
                          >
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                          </select>
                        </div>
                      </div>
                      <div className="payment-field-group" data-node-id="1252:20729">
                        <label className="payment-field-label" data-node-id="1252:20730">Postal Code</label>
                        <input
                          type="text"
                          className="payment-text-input"
                          placeholder="e.g., SW1A 1AA"
                          value={newCardForm.postalCode}
                          onChange={(e) => setNewCardForm({ ...newCardForm, postalCode: e.target.value })}
                          data-node-id="1252:20731"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms disclaimer */}
                  <p className="payment-card-terms-text" data-node-id="1252:20733">
                    By providing your card information, you allow Enigma Incorporated Ltd to charge your card for future payments in accordance with their terms.
                  </p>

                  {/* Save this card checkbox */}
                  <div
                    className="payment-save-default-row"
                    onClick={() => setSaveAsDefault(!saveAsDefault)}
                    data-node-id="1252:20734"
                  >
                    <div
                      className={`payment-checkbox ${saveAsDefault ? 'payment-checkbox--checked' : ''}`}
                      data-node-id="1252:20735"
                    >
                      {saveAsDefault && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="payment-save-default-label" data-node-id="1252:20737">
                      Save this card and set as a default
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Box 2: PayPal Payment Option */}
            <div
              className={`payment-card-box payment-option-row-box ${selectedMethod === 'paypal' ? 'payment-card-box--selected' : ''}`}
              onClick={() => setSelectedMethod('paypal')}
              data-node-id="1252:20595"
            >
              <div className="payment-option-inner" data-node-id="1252:20596">
                {/* Checkbox square */}
                <div
                  className={`payment-checkbox ${selectedMethod === 'paypal' ? 'payment-checkbox--checked' : ''}`}
                  data-node-id="843:18884"
                >
                  {selectedMethod === 'paypal' && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                <div className="payment-option-label-group" data-node-id="1252:20598">
                  {/* PayPal Logo */}
                  <div className="payment-paypal-icon-wrapper" data-node-id="852:21234">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" rx="4" fill="#003087" />
                      <path d="M13.2 6.5C12.8 4.7 11.2 4 9.3 4H5.8C5.5 4 5.2 4.2 5.2 4.6L3.5 15.4C3.5 15.6 3.6 15.8 3.8 15.8H6.3L6.9 12C7 11.6 7.3 11.4 7.6 11.4H9C11.3 11.4 13.1 10.4 13.6 7.8C13.8 6.9 13.6 6.7 13.2 6.5Z" fill="#0079C1" />
                      <path d="M13.2 6.5C12.8 4.7 11.2 4 9.3 4H5.8C5.5 4 5.2 4.2 5.2 4.6L3.5 15.4C3.5 15.6 3.6 15.8 3.8 15.8H6.3L6.9 12C7 11.6 7.3 11.4 7.6 11.4H9C11.3 11.4 13.1 10.4 13.6 7.8C13.8 6.9 13.6 6.7 13.2 6.5Z" fill="url(#pp-grad)" fillOpacity="0.4" />
                      <path d="M9.1 8.5C8.8 8.5 8.6 8.7 8.5 9L7.9 13C7.9 13.2 8 13.3 8.2 13.3H10.1C11.9 13.3 13.4 12.5 13.8 10.4C14 9.5 13.7 8.8 13 8.5C12.5 8.3 11.7 8.5 9.1 8.5Z" fill="#00457C" />
                      <defs>
                        <linearGradient id="pp-grad" x1="5.8" y1="4" x2="13.6" y2="15.8" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0079C1" />
                          <stop offset="1" stopColor="#00457C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="payment-option-name" data-node-id="1252:20600">PayPal</span>
                </div>
              </div>
            </div>

            {/* Box 3: Klarna Payment Option */}
            <div
              className={`payment-card-box payment-option-row-box ${selectedMethod === 'klarna' ? 'payment-card-box--selected' : ''}`}
              onClick={() => setSelectedMethod('klarna')}
              data-node-id="1252:20601"
            >
              <div className="payment-option-inner" data-node-id="1252:20602">
                {/* Checkbox square */}
                <div
                  className={`payment-checkbox ${selectedMethod === 'klarna' ? 'payment-checkbox--checked' : ''}`}
                  data-node-id="843:18884"
                >
                  {selectedMethod === 'klarna' && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                <div className="payment-option-label-group" data-node-id="1252:20604">
                  {/* Klarna Icon */}
                  <div className="payment-klarna-icon-wrapper" data-node-id="852:21241">
                    <span>K.</span>
                  </div>
                  <span className="payment-option-name" data-node-id="1252:20606">Klarna</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Your Order Summary Sidebar (Matching Figma Node 1252:20607) */}
          <div className="payment-order-sidebar" data-node-id="1252:20607">
            <h3 className="payment-sidebar-title" data-node-id="1252:20608">Your order</h3>

            {/* Product Header */}
            <div className="payment-sidebar-product-header" data-node-id="1252:20609">
              <div className="payment-sidebar-gpu-icon" data-node-id="1252:20610">
                <div className="product-icon-circle-bg">
                  <img src={epConnection} alt={product.name || 'ESC Lite'} width={33} height={30} />
                </div>
              </div>
              <div className="payment-sidebar-product-info" data-node-id="1252:20611">
                <h4 className="payment-sidebar-product-name" data-node-id="1252:20612">{product.name || 'ESC Lite'}</h4>
                <p className="payment-sidebar-product-desc" data-node-id="1252:20613">
                  {product.description || 'Secure, reliable connectivity for distributed sites.'}
                </p>
              </div>
            </div>

            {/* Order Specification List */}
            <div className="payment-sidebar-spec-list" data-node-id="1252:20614">
              <div className="payment-sidebar-row" data-node-id="1252:20615">
                <span className="payment-spec-label" data-node-id="1252:20616">Plan</span>
                <span className="payment-spec-value" data-node-id="1252:20617">{product.name || 'ESC Lite'}</span>
              </div>
              <div className="payment-sidebar-row" data-node-id="1252:20618">
                <span className="payment-spec-label" data-node-id="1252:20619">Number of sites</span>
                <span className="payment-spec-value" data-node-id="1252:20620">{sites} sites</span>
              </div>
              <div className="payment-sidebar-row" data-node-id="1252:20621">
                <span className="payment-spec-label" data-node-id="1252:20622">Billing cycle</span>
                <span className="payment-spec-value" data-node-id="1252:20623">{billing}</span>
              </div>
              <div className="payment-sidebar-row" data-node-id="1252:20624">
                <span className="payment-spec-label" data-node-id="1252:20625">Term</span>
                <span className="payment-spec-value" data-node-id="1252:20626">24 months</span>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="payment-sidebar-pricing-list" data-node-id="1252:20627">
              <p className="payment-pricing-section-title" data-node-id="1252:20629">Pricing summary</p>
              <div className="payment-sidebar-row payment-sidebar-row--align-start" data-node-id="1252:20630">
                <div className="payment-pricing-item-desc" data-node-id="1252:20631">
                  <span data-node-id="1252:20632">{product.name || 'ESC Lite'}</span>
                  <span className="payment-pricing-subcalc" data-node-id="1252:20633">
                    {formatPrice(baseRate)} x {sites} sites
                  </span>
                </div>
                <span className="payment-pricing-item-val" data-node-id="1252:20634">
                  {formatPrice(baseTotal)} /month
                </span>
              </div>
              <div className="payment-sidebar-row" data-node-id="1252:20635">
                <span className="payment-spec-label" data-node-id="1252:20637">VAT (20%)</span>
                <span className="payment-pricing-item-val" data-node-id="1252:20638">{formatPrice(vat)} /month</span>
              </div>
              <div className="payment-sidebar-row" data-node-id="1252:20639">
                <span className="payment-spec-label" data-node-id="1252:20640">Additional Packs</span>
                <span className="payment-pricing-item-val" data-node-id="1252:20641">
                  {addonsTotal > 0 ? `${formatPrice(addonsTotal)} /month` : '–'}
                </span>
              </div>
            </div>

            {/* Monthly Billing Breakdown */}
            <div className="payment-sidebar-breakdown-list" data-node-id="1252:20642">
              <div className="payment-sidebar-row" data-node-id="1252:20643">
                <span className="payment-spec-label" data-node-id="1252:20645">Monthly total</span>
                <span className="payment-pricing-item-val" data-node-id="1252:20646">{formatPrice(totalPrice)} /month</span>
              </div>
              <div className="payment-sidebar-row" data-node-id="1252:20647">
                <span className="payment-spec-label" data-node-id="1252:20648">Initial payment</span>
                <span className="payment-pricing-item-val" data-node-id="1252:20649">{formatPrice(totalPrice)} /month</span>
              </div>
              <div className="payment-sidebar-row" data-node-id="1252:20650">
                <span className="payment-spec-label" data-node-id="1252:20651">Next billing date</span>
                <span className="payment-pricing-item-val" data-node-id="1252:20652">{getNextBillingDate()}</span>
              </div>
            </div>

            {/* Estimated Total Section */}
            <div className="payment-sidebar-total-card" data-node-id="1252:20653">
              <div className="payment-total-label" data-node-id="1252:20656">Estimated total</div>
              <div className="payment-total-amount" data-node-id="1252:20659">{formatPrice(totalPrice)} /month</div>
              <div className="payment-total-cycle" data-node-id="1252:20661">
                Billed {billing === 'Monthly' ? 'monthly' : 'annually'}
              </div>
            </div>

          </div>
        </div>

        {/* Form Action Buttons (Matching Figma Node 1252:20806) */}
        <div className="payment-actions-container">
          <button
            type="submit"
            className="payment-continue-btn"
            disabled={isProcessing}
            data-node-id="1252:20806"
          >
            Continue
          </button>
          <button
            type="button"
            className="order-review-btn-secondary"
            onClick={onBack}
            disabled={isProcessing}
          >
            Back to configuration
          </button>
        </div>
      </form>

      {/* Order Processing Modal (Figma Node 1252:21187) */}
      <OrderProcessingModal
        isOpen={isProcessing}
        paymentMethodLabel={getPaymentMethodLabel()}
        onComplete={() => {
          setIsProcessing(false);
          onContinue();
        }}
        durationMs={2800}
      />

      {/* Payment Error Modal (Figma Node 1252:21204) */}
      <PaymentErrorModal
        isOpen={showPaymentError}
        onReturnToPayment={() => setShowPaymentError(false)}
        onCancelCheckout={() => {
          setShowPaymentError(false);
          onBack();
        }}
      />
    </div>
  );
}
