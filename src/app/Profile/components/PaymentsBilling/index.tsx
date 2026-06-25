import { useState } from 'react';
import { PaidBadge } from '../Badges';
import { CloseIcon, Icon } from '../icons';
import { usePaymentsBilling, type Invoice } from './usePaymentsBilling';

const BILLING_META_ROWS = [
  { label: 'Current plan', key: 'currentPlan' as const, link: false },
  { label: 'Next billing date', key: 'nextBillingDate' as const, link: false },
  { label: 'Payment method', key: 'paymentMethod' as const, link: false },
  { label: 'Billing contact', key: 'billingContact' as const, link: true },
];

/* ── All Invoices Modal ──────────────────────────────────────────── */
const InvoicesModal = ({
  invoices,
  onClose,
  onContactSupport,
}: {
  invoices: Invoice[];
  onClose: () => void;
  onContactSupport: () => void;
}) => (
  <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="invoices-modal">
      <button className="contact-modal__close" onClick={onClose} aria-label="Close"><CloseIcon /></button>

      <div className="invoices-modal__header">
        <Icon.CreditCardTitle />
        <h2 className="invoices-modal__title">Payments &amp; Billing Invoices</h2>
      </div>

      <div className="invoices-modal__list">
        {invoices.map(inv => (
          <div key={inv.id} className="invoices-modal__row">
            <span className="invoices-modal__date">
              <Icon.PolicyDocument />
              {inv.date}
            </span>
            <span className="invoices-modal__right">
              <span className="invoices-modal__amount">{inv.amount}</span>
              <PaidBadge label={inv.status} />
            </span>
          </div>
        ))}
      </div>

      <button type="button" className="profile-btn invoices-modal__support-link" onClick={() => { onClose(); onContactSupport(); }}>
        <Icon.HeadsetCard />
        Contact for a support
      </button>

      <p className="invoices-modal__footnote">
        Payment method and subscription changes must be confirmed by engineering/finance.
      </p>
    </div>
  </div>
);

/* ── Payments & Billing Section ──────────────────────────────────── */
const PaymentsBilling = ({ onContactSupport }: { onContactSupport: () => void }) => {
  const { data, loading, error } = usePaymentsBilling();
  const [allInvoicesOpen, setAllInvoicesOpen] = useState(false);

  if (loading) return <div className="billing-section" style={{ padding: '32px', color: '#9ca3af' }}>Loading billing…</div>;
  if (error)   return <div className="billing-section" style={{ padding: '32px', color: '#ef4444' }}>Failed to load billing.</div>;
  if (!data)   return null;

  return (
    <div className="billing-section">
      {allInvoicesOpen && (
        <InvoicesModal
          invoices={data.allInvoices}
          onClose={() => setAllInvoicesOpen(false)}
          onContactSupport={onContactSupport}
        />
      )}

      <h2 className="profile-section-title"><Icon.CreditCardTitle /> Payments &amp; Billing</h2>

      <div className="billing-card">
        <div className="billing-invoices-block">
          <p className="billing-invoices-label">Recent Invoices</p>
          <div className="billing-invoices-list">
            {data.recentInvoices.map(inv => (
              <div key={inv.id} className="invoice-row">
                <span className="invoice-row__date"><Icon.PolicyDocument />{inv.date}</span>
                <span className="invoice-row__right">
                  <span className="invoice-row__amount">{inv.amount}</span>
                  <PaidBadge label={inv.status} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {data.isUpToDate && (
          <div className="billing-alert">
            <span className="billing-alert__icon"><Icon.CheckCircle /></span>
            <div>
              <p className="billing-alert__title">Payment up to date</p>
              <p className="billing-alert__sub">No outstanding balance</p>
            </div>
          </div>
        )}

        <div className="billing-meta">
          {BILLING_META_ROWS.map((row, index) => (
            <div key={row.key}>
              {index > 0 && <hr className="billing-meta__divider" />}
              <div className="billing-meta-row">
                <span className="billing-meta-row__label">{row.label}</span>
                <span className={`billing-meta-row__value${row.link ? ' billing-meta-row__value--link' : ''}`}>
                  {data[row.key]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="billing-footer">
          <button type="button" className="view-invoices-btn" onClick={() => setAllInvoicesOpen(true)}>
            <Icon.PolicyDocument />
            <span className="view-invoices-btn__label">View all invoices</span>
            <span className="view-invoices-btn__chevron"><Icon.ChevronDown /></span>
          </button>

          <p className="billing-footnote">
            Payment method and subscription changes must be confirmed by engineering/finance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentsBilling;
