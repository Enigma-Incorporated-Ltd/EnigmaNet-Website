import { useState } from 'react';
import { CloseIcon, Icon } from '../icons';
import { usePaymentsBilling, type Invoice } from './usePaymentsBilling';

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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
        <h2 className="invoices-modal__title">Payments &amp; Billing Invoices</h2>
      </div>

      <div className="invoices-modal__list">
        {invoices.map(inv => (
          <div key={inv.id} className="invoices-modal__row">
            <span className="invoices-modal__date">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {inv.date}
            </span>
            <span className="invoices-modal__right">
              <span className="invoices-modal__amount">{inv.amount}</span>
              <span className="invoices-modal__paid-badge">{inv.status}</span>
            </span>
          </div>
        ))}
      </div>

      <button className="invoices-modal__support-link" onClick={() => { onClose(); onContactSupport(); }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
          <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
        </svg>
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

      <h2 className="profile-section-title"><Icon.CreditCard /> Payments &amp; Billing</h2>

      <div className="billing-card">
        <p className="billing-invoices-label">Recent Invoices</p>

        {data.recentInvoices.map(inv => (
          <div key={inv.id} className="invoice-row">
            <span className="invoice-row__date"><Icon.Calendar />{inv.date}</span>
            <span className="invoice-row__right">
              <span className="invoice-row__amount">{inv.amount}</span>
              <span className="paid-badge">{inv.status}</span>
            </span>
          </div>
        ))}

        {data.isUpToDate && (
          <div className="billing-alert">
            <span className="billing-alert__icon"><Icon.AlertCircle /></span>
            <div>
              <p className="billing-alert__title">Payment up to date</p>
              <p className="billing-alert__sub">No outstanding balance</p>
            </div>
          </div>
        )}

        <div className="billing-meta">
          <div className="billing-meta-row">
            <span className="billing-meta-row__label">Current plan</span>
            <span className="billing-meta-row__value">{data.currentPlan}</span>
          </div>
          <div className="billing-meta-row">
            <span className="billing-meta-row__label">Next billing date</span>
            <span className="billing-meta-row__value">{data.nextBillingDate}</span>
          </div>
          <div className="billing-meta-row">
            <span className="billing-meta-row__label">Payment method</span>
            <span className="billing-meta-row__value">{data.paymentMethod}</span>
          </div>
          <div className="billing-meta-row">
            <span className="billing-meta-row__label">Billing contact</span>
            <span className="billing-meta-row__value billing-meta-row__value--link">{data.billingContact}</span>
          </div>
        </div>

        <button className="view-invoices-btn" onClick={() => setAllInvoicesOpen(true)}>
          <span>View all invoices</span>
          <span style={{ display: 'inline-flex' }}><Icon.ChevronDown /></span>
        </button>

        <p className="billing-footnote">
          Payment method and subscription changes must be confirmed by engineering/finance.
        </p>
      </div>
    </div>
  );
};

export default PaymentsBilling;
