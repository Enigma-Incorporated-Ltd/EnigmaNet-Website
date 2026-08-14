import type { Product } from '../index';

interface SuccessViewProps {
  product: Product;
  config: Record<string, string>;
  onFinish: () => void;
}

export default function SuccessView({ product, config, onFinish }: SuccessViewProps) {
  // Generate a random order number
  const orderRef = `ENM-MARKET-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="marketplace-checkout-card">
      <div className="success-illustration-box">
        <div className="success-circle">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: 'var(--portal-text)' }}>
          Order Successfully Processed!
        </h2>
        
        <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: 'var(--portal-text-muted)', maxWidth: '400px', lineHeight: 1.5 }}>
          Your subscription to <strong>{product.name}</strong> is confirmed. We are allocating cloud assets and provisioning your network resources.
        </p>

        <div className="success-reference-box">
          Reference Code: {orderRef}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left', background: 'rgba(255,255,255,0.01)', padding: '16px', borderRadius: '6px', border: '1px solid var(--portal-frame-border)', maxWidth: '480px', fontSize: '11px', color: 'var(--portal-text-secondary)', lineHeight: 1.4 }}>
          <strong>Next Steps:</strong>
          <span style={{ display: 'flex', gap: '8px' }}>
            <span>•</span>
            <span>You will receive an automated activation email within 5-10 minutes.</span>
          </span>
          <span style={{ display: 'flex', gap: '8px' }}>
            <span>•</span>
            <span>The new app configuration will appear under "My Services" once active.</span>
          </span>
          {config['Service Label'] && (
            <span style={{ display: 'flex', gap: '8px' }}>
              <span>•</span>
              <span>Assigned Label: "{config['Service Label']}"</span>
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="checkout-actions-row" style={{ justifyContent: 'center' }}>
        <button type="button" className="checkout-btn-primary" onClick={onFinish}>
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}
