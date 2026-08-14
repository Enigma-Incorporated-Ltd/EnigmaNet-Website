import type { Product } from '../index';

interface ProductConfigureProps {
  product: Product;
  config: Record<string, string>;
  setConfig: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onContinue: () => void;
  onBack: () => void;
}

export default function ProductConfigure({
  product,
  config,
  setConfig,
  onContinue,
  onBack
}: ProductConfigureProps) {
  const handleSpecChange = (label: string, value: string) => {
    setConfig(prev => ({
      ...prev,
      [label]: value
    }));
  };

  return (
    <div className="marketplace-checkout-card">
      <div className="checkout-header">
        <h2 className="checkout-title">Configure {product.name}</h2>
        <p className="checkout-subtitle">Customize the specifications of your product deployment.</p>
      </div>

      <div className="configure-options-grid">
        {product.specs.map((spec) => (
          <div key={spec.label} className="configure-option-row">
            <label className="configure-label">{spec.label}</label>
            <select
              className="configure-select"
              value={config[spec.label] || ''}
              onChange={(e) => handleSpecChange(spec.label, e.target.value)}
            >
              {spec.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Additional Optional Name input */}
        <div className="configure-option-row">
          <label className="configure-label">Custom Service Label (Optional)</label>
          <input
            type="text"
            className="configure-input"
            placeholder="e.g. Primary Branch Edge Router"
            value={config['Service Label'] || ''}
            onChange={(e) => handleSpecChange('Service Label', e.target.value)}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="checkout-actions-row">
        <button type="button" className="checkout-btn-secondary" onClick={onBack}>
          Back
        </button>
        <button type="button" className="checkout-btn-primary" onClick={onContinue}>
          Review Order
        </button>
      </div>
    </div>
  );
}
