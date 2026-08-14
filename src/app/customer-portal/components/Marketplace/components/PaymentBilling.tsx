import { useState } from 'react';
import type { Product } from '../index';

interface PaymentBillingProps {
  product: Product;
  config: Record<string, string>;
  onContinue: () => void;
  onBack: () => void;
}

export default function PaymentBilling({ product, config, onContinue, onBack }: PaymentBillingProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    billingAddress: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTotal = () => {
    let total = product.price;
    Object.values(config).forEach(val => {
      const match = val.match(/\+\$(\d+)/);
      if (match) {
        total += parseInt(match[1], 10);
      }
    });
    return total;
  };

  const totalPrice = calculateTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!form.cardName || !form.cardNumber || !form.cardExpiry || !form.cardCvc) {
      setError('Please fill in all payment details.');
      return;
    }

    setLoading(true);

    // Mock processing delay
    setTimeout(() => {
      setLoading(false);
      onContinue();
    }, 1500);
  };

  return (
    <div className="marketplace-checkout-card">
      <div className="checkout-header">
        <h2 className="checkout-title">Payment & Billing</h2>
        <p className="checkout-subtitle">Enter your corporate credit card or select billing account.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {error && (
          <div style={{ color: '#ff4d4f', fontSize: '12px', fontWeight: 500 }}>
            {error}
          </div>
        )}

        <div className="configure-option-row">
          <label className="configure-label">Cardholder Name</label>
          <input
            type="text"
            className="configure-input"
            placeholder="e.g. John Doe"
            value={form.cardName}
            onChange={(e) => handleInputChange('cardName', e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="configure-option-row">
          <label className="configure-label">Card Number</label>
          <input
            type="text"
            className="configure-input"
            placeholder="•••• •••• •••• ••••"
            value={form.cardNumber}
            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
            disabled={loading}
            maxLength={19}
          />
        </div>

        <div className="payment-form-grid">
          <div className="configure-option-row">
            <label className="configure-label">Expiration Date</label>
            <input
              type="text"
              className="configure-input"
              placeholder="MM/YY"
              value={form.cardExpiry}
              onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
              disabled={loading}
              maxLength={5}
            />
          </div>
          <div className="configure-option-row">
            <label className="configure-label">CVC / CVV</label>
            <input
              type="password"
              className="configure-input"
              placeholder="•••"
              value={form.cardCvc}
              onChange={(e) => handleInputChange('cardCvc', e.target.value)}
              disabled={loading}
              maxLength={4}
            />
          </div>
        </div>

        <div className="configure-option-row">
          <label className="configure-label">Billing Address</label>
          <input
            type="text"
            className="configure-input"
            placeholder="123 Corporate Blvd, Suite 100"
            value={form.billingAddress}
            onChange={(e) => handleInputChange('billingAddress', e.target.value)}
            disabled={loading}
          />
        </div>

        <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--portal-frame-border)' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--portal-text-muted)' }}>Amount to charge:</span>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#2ADEFF' }}>${totalPrice}{product.period}</span>
        </div>

        {/* Action Buttons */}
        <div className="checkout-actions-row">
          <button type="button" className="checkout-btn-secondary" onClick={onBack} disabled={loading}>
            Back
          </button>
          <button type="submit" className="checkout-btn-primary" disabled={loading}>
            {loading ? 'Processing Transaction…' : 'Complete Purchase'}
          </button>
        </div>
      </form>
    </div>
  );
}
