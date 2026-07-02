import { useState } from 'react';
import { createPortal } from 'react-dom';
import SuccessModal, { SUCCESS_COPY } from '@/components/ui/SuccessModal';
import { PlanBadge } from '../Badges';
import { Icon, ManageModalCloseIcon, ProfileIcon } from '../icons';
import { useProductServices } from './useProductServices';

/* ── Manage Plan Modal (Figma 79:10297) ──────────────────────────── */
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

  if (saved) {
    return <SuccessModal {...SUCCESS_COPY.planSaved} onClose={onClose} closeVariant="manage" />;
  }

  return createPortal(
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="manage-plan-modal" role="dialog" aria-labelledby="manage-plan-title">
        <button
          type="button"
          className="manage-plan-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <ManageModalCloseIcon />
        </button>

        <div className="manage-plan-modal__header">
          <h2 id="manage-plan-title" className="manage-plan-modal__title">
            Manage Plan &amp; Services
          </h2>
        </div>

        <div className="manage-plan-modal__body">
          <div className="manage-plan-modal__info-row">
            <div className="manage-plan-modal__info-field">
              <label className="manage-plan-modal__info-label">Product Status</label>
              <div className="manage-plan-modal__info-value">
                <ProfileIcon name="statusDotActive" size={8} />
                {data.productStatusText}
              </div>
            </div>
            <div className="manage-plan-modal__info-field">
              <label className="manage-plan-modal__info-label">Renewal Date</label>
              <div className="manage-plan-modal__info-value">
                <span className="manage-plan-modal__info-icon">
                  <ProfileIcon name="manageCalendar" size={13} />
                </span>
                {data.renewalDate}
              </div>
            </div>
          </div>

          <div className="manage-plan-modal__plans-section">
            <p className="manage-plan-modal__section-label">Current Plan</p>
            <div className="manage-plan-modal__plans">
              {data.plans.map(plan => (
                <label
                  key={plan.id}
                  className={`plan-option${selectedPlan === plan.id ? ' plan-option--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                  />
                  {selectedPlan === plan.id ? (
                    <ProfileIcon
                      name="planRadioSelected"
                      size={20}
                      className="plan-option__radio plan-option__radio--selected"
                    />
                  ) : (
                    <span className="plan-option__radio" aria-hidden="true" />
                  )}
                  <span className="plan-option__text">
                    <span className="plan-option__name">{plan.name}</span>
                    <span className="plan-option__desc">{plan.desc}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="manage-plan-modal__devices-section">
            <div className="manage-plan-modal__devices-header">
              <p className="manage-plan-modal__section-label">Connected Devices</p>
              <p className="manage-plan-modal__devices-sub">Manage devices on your current plan</p>
            </div>
            <div className="manage-plan-modal__devices">
              {data.devices.map(device => (
                <div key={device.id} className="device-row">
                  <span className="device-row__icon">
                    <ProfileIcon name="manageMonitor" size={16} />
                  </span>
                  <span className="device-row__name">{device.name}</span>
                  <span className="device-row__status">
                    <ProfileIcon name="connectedDot" size={6} />
                    {device.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="manage-plan-modal__footer">
          <button
            type="button"
            className="profile-btn profile-btn--secondary manage-plan-modal__cancel"
            onClick={onClose}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            type="button"
            className="profile-btn manage-plan-modal__save"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </div>
    </div>,
    document.body,
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
            <PlanBadge label={currentPlan?.name.replace('EDGE ', '') ?? 'Pro'} />
          </div>
          <button type="button" className="profile-btn" onClick={() => setManageOpen(true)}>Manage Profile</button>
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
