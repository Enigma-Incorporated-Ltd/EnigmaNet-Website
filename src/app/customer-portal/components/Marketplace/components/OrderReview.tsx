import type { Product } from '../index';

interface OrderReviewProps {
  product: Product;
  config: Record<string, string>;
  onContinue: () => void;
  onBack: () => void;
}

export default function OrderReview({ product, config, onContinue, onBack }: OrderReviewProps) {
  // Helper to calculate total price by parsing options that have (+$X/mo)
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

  return (
    <div className="marketplace-checkout-card">
      <div className="checkout-header">
        <h2 className="checkout-title">Review Order</h2>
        <p className="checkout-subtitle">Please verify your order details before completing the purchase.</p>
      </div>

      <table className="review-summary-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Configuration Details</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontWeight: 600 }}>{product.name} (Base)</td>
            <td>Base software and platform subscription</td>
            <td>${product.price}{product.period}</td>
          </tr>
          {Object.entries(config).map(([label, value]) => {
            if (!value) return null;
            const match = value.match(/\+\$(\d+)/);
            const extraCost = match ? `$${match[1]}${product.period}` : 'Included';
            return (
              <tr key={label}>
                <td style={{ color: 'var(--portal-text-muted)' }}>{label}</td>
                <td>{value}</td>
                <td style={{ fontWeight: match ? 600 : 400 }}>{extraCost}</td>
              </tr>
            );
          })}
          <tr className="review-total-row">
            <td style={{ fontWeight: 700 }}>Total Price</td>
            <td style={{ fontWeight: 500 }}>SLA & Network resources allocated</td>
            <td style={{ fontWeight: 700 }}>${totalPrice}{product.period}</td>
          </tr>
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="checkout-actions-row">
        <button type="button" className="checkout-btn-secondary" onClick={onBack}>
          Back
        </button>
        <button type="button" className="checkout-btn-primary" onClick={onContinue}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
