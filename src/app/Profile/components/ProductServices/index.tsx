import { useState } from 'react';
import { CloseIcon, Icon, SuccessScreen } from '../icons';
import { useProductServices } from './useProductServices';

/* ── Manage Plan Modal ───────────────────────────────────────────── */
const ManagePlanModal = ({
  data,
  onClose,
  onSave,
  saving,
}: {
  data: NonNullable<ReturnType<typeof useProductServices>['data']>;
  onClose: () => void;
  onSave: (planId: string) => Promise<void>;
  saving: boolean;
}) => {
  const [selectedPlan, setSelectedPlan] = useState(data.currentPlanId);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    await onSave(selectedPlan);
    setSaved(true);
  };

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className="manage-modal"
        style={saved ? { maxWidth: '448px', height: '419px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' } : {}}
      >
        {saved ? (
          <>
            <div style={{ alignSelf: 'flex-end' }}>
              <button className="manage-modal__close" onClick={onClose} aria-label="Close"><CloseIcon /></button>
            </div>
            <div style={{ flex: 1, width: '100%' }}>
              <SuccessScreen title="Changes saved!" desc="Your profile has been updated successfully." />
            </div>
          </>
        ) : (
          <>
            <div className="manage-modal__header">
              <h2 className="manage-modal__title">Manage Plan &amp; Services</h2>
              <button className="manage-modal__close" onClick={onClose} aria-label="Close"><CloseIcon /></button>
            </div>

            <div className="manage-modal__info-row">
              <div className="manage-modal__info-field">
                <label>Product Status</label>
                <div className="manage-modal__info-value">
                  <span className="status-dot-blue" />{data.productStatusText}
                </div>
              </div>
              <div className="manage-modal__info-field">
                <label>Renewal Date</label>
                <div className="manage-modal__info-value">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {data.renewalDate}
                </div>
              </div>
            </div>

            <p className="manage-modal__section-label">Current Plan</p>
            <div className="manage-modal__plans">
              {data.plans.map(plan => (
                <label key={plan.id} className={`plan-option${selectedPlan === plan.id ? ' plan-option--selected' : ''}`}>
                  <input type="radio" name="plan" value={plan.id} checked={selectedPlan === plan.id} onChange={() => setSelectedPlan(plan.id)} />
                  <span className="plan-option__radio" />
                  <span className="plan-option__text">
                    <span className="plan-option__name">{plan.name}</span>
                    <span className="plan-option__desc">{plan.desc}</span>
                  </span>
                </label>
              ))}
            </div>

            <div className="manage-modal__devices-header">
              <p className="manage-modal__devices-title">Connected Devices</p>
              <p className="manage-modal__devices-sub">Manage devices on your current plan</p>
            </div>
            <div className="manage-modal__devices">
              {data.devices.map(device => (
                <div key={device.id} className="device-row">
                  <span className="device-row__left">
                    <Icon.Monitor16 />{device.name}
                  </span>
                  <span className="device-row__status">
                    <span className="device-status-dot" />{device.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="manage-modal__footer">
              <button className="btn-cancel" onClick={onClose}>Cancel</button>
              <button className="btn-save" onClick={handleSave} disabled={saving}>
                {saving ? 'Saving…' : 'Save changes'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/* ── Product Services Section ────────────────────────────────────── */
const ProductServices = () => {
  const { data, loading, error, updatePlan, saving } = useProductServices();
  const [manageOpen, setManageOpen] = useState(false);

  if (loading) return <div className="services-section" style={{ padding: '32px', textAlign: 'center', color: '#9ca3af' }}>Loading services…</div>;
  if (error)   return <div className="services-section" style={{ padding: '32px', textAlign: 'center', color: '#ef4444' }}>Failed to load services.</div>;
  if (!data)   return null;

  const currentPlan = data.plans.find(p => p.id === data.currentPlanId);

  return (
    <div className="services-section">
      {manageOpen && (
        <ManagePlanModal
          data={data}
          onClose={() => setManageOpen(false)}
          onSave={async planId => updatePlan(planId)}
          saving={saving}
        />
      )}

      <h2 className="profile-section-title"><Icon.Server /> Product &amp; Active Services</h2>

      <div className="service-card">
        <div className="service-card__top">
          <div className="service-card__name-row">
            <span className="service-card__name">{data.productName}</span>
            <span className="plan-badge">{currentPlan?.name.replace('EDGE ', '') ?? 'Pro'}</span>
          </div>
          <button className="manage-btn" onClick={() => setManageOpen(true)}>Manage Profile</button>
        </div>
        <div className="service-card__status">
          <span className="service-card__status-dot" />Active subscription
        </div>
        <hr className="service-card__divider" />
        <div className="service-card__stats">
          <div>
            <p className="service-stat__label"><Icon.Calendar /> Start Date</p>
            <p className="service-stat__value">{data.startDate}</p>
          </div>
          <div>
            <p className="service-stat__label"><Icon.Refresh /> Renewal Date</p>
            <p className="service-stat__value service-stat__value--warn">{data.renewalDate}</p>
          </div>
          <div>
            <p className="service-stat__label"><Icon.Devices /> Devices / Licences</p>
            <p className="service-stat__value">{data.devicesUsed} of {data.devicesTotal} used</p>
          </div>
          <div>
            <p className="service-stat__label"><Icon.Check /> Product Status</p>
            <p className="service-stat__value">{data.productStatus}</p>
          </div>
        </div>
      </div>

      <p className="services-footnote">
        Licence allocation and device counts are display-only. Contact support to adjust allowances.
      </p>
    </div>
  );
};

export default ProductServices;
